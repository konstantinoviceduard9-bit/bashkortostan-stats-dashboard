import { XMLParser } from "fast-xml-parser";
import type { FedstatCatalogEntry } from "../data/fedstatCatalog";
import type { RankingRow } from "../shared/types";
import { collectSdmxNodes, extractSeriesDimensions, parseFedstatSdmx } from "./fedstat";
import {
  buildDefaultFedstatSelection,
  buildFedstatPostBodyFromDataIds,
  parseFedstatDataIdsFromHtml,
  type FedstatDataIdsTable
} from "./fedstatDataIds";

const BROWSER_HEADERS = {
  "User-Agent":
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36",
  "Accept-Language": "ru-RU,ru;q=0.9"
};

class FedstatSession {
  private cookies = new Map<string, string>();

  private absorb(response: Response) {
    const setCookies =
      typeof response.headers.getSetCookie === "function"
        ? response.headers.getSetCookie()
        : [response.headers.get("set-cookie")].filter((value): value is string => Boolean(value));

    for (const cookie of setCookies) {
      const pair = cookie.split(";")[0];
      const separator = pair.indexOf("=");
      if (separator <= 0) {
        continue;
      }

      this.cookies.set(pair.slice(0, separator).trim(), pair.slice(separator + 1).trim());
    }
  }

  private cookieHeader(): string | undefined {
    if (this.cookies.size === 0) {
      return undefined;
    }

    return [...this.cookies.entries()].map(([key, value]) => `${key}=${value}`).join("; ");
  }

  async get(url: string): Promise<Response> {
    const response = await fetch(url, {
      headers: {
        ...BROWSER_HEADERS,
        ...(this.cookieHeader() ? { Cookie: this.cookieHeader() } : {})
      }
    });
    this.absorb(response);
    return response;
  }

  async post(url: string, body: URLSearchParams, referer: string): Promise<Response> {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        ...BROWSER_HEADERS,
        "Content-Type": "application/x-www-form-urlencoded",
        Referer: referer,
        ...(this.cookieHeader() ? { Cookie: this.cookieHeader() } : {})
      },
      body
    });
    this.absorb(response);
    return response;
  }
}

const sessions = new Map<string, FedstatSession>();

export function getFedstatSession(indicatorId: string): FedstatSession {
  const existing = sessions.get(indicatorId);
  if (existing) {
    return existing;
  }

  const session = new FedstatSession();
  sessions.set(indicatorId, session);
  return session;
}

interface LiveCacheEntry {
  expiresAt: number;
  dataIds: FedstatDataIdsTable;
}

const dataIdsCache = new Map<string, LiveCacheEntry>();
const DATA_IDS_TTL_MS = 6 * 60 * 60 * 1000;
const RESPONSE_TTL_MS = 5 * 60 * 1000;
const responseCache = new Map<string, { expiresAt: number; payload: FedstatLivePayload }>();

export interface FedstatLivePayload {
  catalogId: string;
  indicatorId: string;
  indicatorName: string;
  year: number;
  unit: string;
  fetchedAt: string;
  sourceUrl: string;
  ranking: RankingRow[];
  warnings: string[];
}

export async function fetchIndicatorHtml(indicatorId: string, session = getFedstatSession(indicatorId)): Promise<string> {
  const response = await session.get(`https://www.fedstat.ru/indicator/${indicatorId}`);

  if (!response.ok) {
    throw new Error(`Fedstat: страница показателя ${indicatorId} недоступна (${response.status})`);
  }

  return response.text();
}

export async function getCachedDataIds(indicatorId: string): Promise<FedstatDataIdsTable> {
  const cached = dataIdsCache.get(indicatorId);
  if (cached && cached.expiresAt > Date.now()) {
    return cached.dataIds;
  }

  const session = getFedstatSession(indicatorId);
  const html = await fetchIndicatorHtml(indicatorId, session);
  const dataIds = parseFedstatDataIdsFromHtml(html);
  dataIdsCache.set(indicatorId, { dataIds, expiresAt: Date.now() + DATA_IDS_TTL_MS });
  return dataIds;
}

function slugifyRegion(name: string): string {
  return name
    .toLowerCase()
    .replace(/республика\s+/g, "resp-")
    .replace(/[^a-zа-яё0-9]+/gi, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 64);
}

function extractObsValue(series: unknown): string {
  const obsValues = collectSdmxNodes(series, "ObsValue");
  const first = obsValues[0];

  if (typeof first === "object" && first !== null && "value" in first) {
    return String((first as { value: string }).value);
  }

  return "";
}

function detectSdmxDimensions(seriesList: unknown[]): { regionKey: string; yearKey?: string } {
  for (const series of seriesList.slice(0, 100)) {
    const dimensions = extractSeriesDimensions(series);

    for (const [key, value] of Object.entries(dimensions)) {
      if (!/област|край|республик|округ|федерац/i.test(value)) {
        continue;
      }

      const yearKey = Object.entries(dimensions).find(([, candidate]) => /^\d{4}$/.test(candidate))?.[0];
      return { regionKey: key, yearKey };
    }
  }

  throw new Error("Fedstat SDMX: не найдено измерение с субъектами РФ");
}

function buildRegionalRanking(sdmx: string, entry: FedstatCatalogEntry, year: number): RankingRow[] {
  const parser = new XMLParser({
    ignoreAttributes: false,
    attributeNamePrefix: "",
    removeNSPrefix: true
  });
  const document = parser.parse(sdmx) as Record<string, unknown>;
  const seriesList = collectSdmxNodes(document, "Series");
  const detected = detectSdmxDimensions(seriesList);
  const regionKey = entry.regionDimension.startsWith("s_") ? entry.regionDimension : detected.regionKey;
  const yearKey = entry.yearDimension.startsWith("s_") ? entry.yearDimension : detected.yearKey;
  const ranking: RankingRow[] = [];

  for (const series of seriesList) {
    const dimensions = extractSeriesDimensions(series);
    const regionName = dimensions[regionKey];
    const seriesYear = yearKey ? Number(dimensions[yearKey]) : year;
    const rawValue = extractObsValue(series);
    const value = Number(String(rawValue).replace(",", "."));

    if (!regionName || !Number.isFinite(value)) {
      continue;
    }

    if (Number.isInteger(seriesYear) && seriesYear !== year) {
      continue;
    }

    ranking.push({
      districtId: entry.districtAliases[regionName] ?? slugifyRegion(regionName),
      districtName: regionName,
      rank: 0,
      total: 0,
      value,
      unit: entry.unit,
      sourceId: "fedstat"
    });
  }

  ranking.sort((a, b) => b.value - a.value);
  ranking.forEach((row, index) => {
    row.rank = index + 1;
    row.total = ranking.length;
  });

  return ranking;
}

function buildMunicipalRanking(sdmx: string, entry: FedstatCatalogEntry, year: number): RankingRow[] {
  const parsed = parseFedstatSdmx(sdmx, {
    sourceId: "fedstat",
    localIndicatorId: entry.localIndicatorId,
    municipalityDimension: entry.regionDimension,
    yearDimension: entry.yearDimension,
    districtAliases: entry.districtAliases
  });

  const rows = parsed.values
    .filter((value) => value.year === year)
    .map((value) => ({
      districtId: value.districtId,
      districtName:
        Object.entries(entry.districtAliases).find(([, id]) => id === value.districtId)?.[0] ?? value.districtId,
      rank: 0,
      total: 0,
      value: value.value,
      unit: entry.unit,
      sourceId: "fedstat"
    }));

  rows.sort((a, b) => b.value - a.value);
  rows.forEach((row, index) => {
    row.rank = index + 1;
    row.total = rows.length;
  });

  return rows;
}

export async function fetchFedstatLive(entry: FedstatCatalogEntry, year: number): Promise<FedstatLivePayload> {
  const cacheKey = `${entry.catalogId}:${year}`;
  const cached = responseCache.get(cacheKey);
  if (cached && cached.expiresAt > Date.now()) {
    return cached.payload;
  }

  const session = getFedstatSession(entry.fedstatIndicatorId);
  const dataIds = await getCachedDataIds(entry.fedstatIndicatorId);
  const filters = { ...entry.defaultFilters, [entry.yearFilterTitle]: String(year) };
  const selectedRows = buildDefaultFedstatSelection(dataIds, filters);
  const body = buildFedstatPostBodyFromDataIds(dataIds, selectedRows, entry.name);

  const response = await session.post(
    "https://www.fedstat.ru/indicator/data.do?format=sdmx",
    body,
    `https://www.fedstat.ru/indicator/${entry.fedstatIndicatorId}`
  );

  if (!response.ok) {
    throw new Error(`Fedstat SDMX: HTTP ${response.status} для ${entry.catalogId}`);
  }

  const sdmx = await response.text();
  if (!sdmx.includes("GenericData") && !sdmx.includes("Series")) {
    throw new Error(
      `Fedstat вернул не SDMX для «${entry.name}». Проверьте фильтры в каталоге или повторите позже (сайт ЕМИСС часто перегружен).`
    );
  }

  const ranking =
    entry.scope === "regional"
      ? buildRegionalRanking(sdmx, entry, year)
      : buildMunicipalRanking(sdmx, entry, year);

  const warnings =
    entry.scope === "municipal"
      ? parseFedstatSdmx(sdmx, {
          sourceId: "fedstat",
          localIndicatorId: entry.localIndicatorId,
          municipalityDimension: entry.regionDimension,
          yearDimension: entry.yearDimension,
          districtAliases: entry.districtAliases
        }).warnings.map((warning) => warning.message)
      : [];

  const payload: FedstatLivePayload = {
    catalogId: entry.catalogId,
    indicatorId: entry.localIndicatorId,
    indicatorName: entry.name,
    year,
    unit: entry.unit,
    fetchedAt: new Date().toISOString(),
    sourceUrl: `https://www.fedstat.ru/indicator/${entry.fedstatIndicatorId}`,
    ranking,
    warnings
  };

  responseCache.set(cacheKey, { payload, expiresAt: Date.now() + RESPONSE_TTL_MS });
  return payload;
}
