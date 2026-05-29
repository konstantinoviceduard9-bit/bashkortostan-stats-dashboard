import opendataCatalog from "../data/opendataCatalog.json";
import { districts } from "../data/seed";
import { districtAliases } from "../shared/districts";
import type { RankingRow } from "../shared/types";

const CACHE_TTL_MS = 5 * 60 * 1000;
const cache = new Map<string, { expiresAt: number; payload: OpendataLivePayload }>();

export interface OpendataLivePayload {
  catalogId: string;
  indicatorId: string;
  indicatorName: string;
  year: number;
  unit: string;
  fetchedAt: string;
  sourceUrl: string;
  ranking: RankingRow[];
}

export interface OpendataCatalogRow {
  category: string;
  datasetId: string;
  title: string;
  csvUrl: string;
  groupId: string;
}

function normalizeText(value: string): string {
  return value.replace(/\u00a0/g, " ").replace(/\s+/g, " ").trim();
}

function detectDelimiter(headerLine: string): string {
  const semicolons = (headerLine.match(/;/g) ?? []).length;
  const commas = (headerLine.match(/,/g) ?? []).length;
  return semicolons >= commas ? ";" : ",";
}

function parseCsv(text: string): Array<Record<string, string>> {
  const lines = text.split(/\r?\n/).filter((line) => line.trim());
  if (lines.length === 0) {
    return [];
  }

  const delimiter = detectDelimiter(lines[0]);
  const headers = lines[0].split(delimiter).map((header) => header.trim());
  const rows: Array<Record<string, string>> = [];

  for (const line of lines.slice(1)) {
    const values = line.split(delimiter);
    const row: Record<string, string> = {};
    headers.forEach((header, index) => {
      row[header] = (values[index] ?? "").trim();
    });

    const firstValue = Object.values(row)[0] ?? "";
    if (!firstValue || firstValue === "№" || firstValue === "п/п") {
      continue;
    }

    rows.push(row);
  }

  return rows;
}

function detectMunicipalityKey(rows: Array<Record<string, string>>): string | null {
  if (rows.length === 0) {
    return null;
  }

  const hints = ["municipality", "муниципальн", "муниципал", "муниципальное образование"];

  for (const key of Object.keys(rows[0])) {
    const normalized = normalizeText(key).toLowerCase();
    if (hints.some((hint) => normalized.includes(hint))) {
      return key;
    }
  }

  return null;
}

function aggregateRows(rows: Array<Record<string, string>>, municipalityKey: string): Map<string, number> {
  const counts = new Map(districts.map((district) => [district.id, 0]));

  for (const row of rows) {
    const municipality = normalizeText(row[municipalityKey] ?? "");
    if (!municipality) {
      continue;
    }

    const districtId = districtAliases[municipality];
    if (!districtId) {
      continue;
    }

    counts.set(districtId, (counts.get(districtId) ?? 0) + 1);
  }

  return counts;
}

export function getOpendataCatalogEntry(catalogId: string): OpendataCatalogRow | undefined {
  return (opendataCatalog as OpendataCatalogRow[]).find((entry) => `opendata_${entry.datasetId}` === catalogId);
}

export async function fetchOpendataLive(catalogId: string, year: number, refresh = false): Promise<OpendataLivePayload> {
  const cacheKey = `${catalogId}:${year}`;
  const cached = cache.get(cacheKey);
  if (!refresh && cached && cached.expiresAt > Date.now()) {
    return cached.payload;
  }

  const entry = getOpendataCatalogEntry(catalogId);
  if (!entry) {
    throw new Error(`Неизвестный live-набор opendata: ${catalogId}`);
  }

  const response = await fetch(entry.csvUrl, {
    headers: { "User-Agent": "bashkortostan-stats-dashboard/0.1" }
  });

  if (!response.ok) {
    throw new Error(`Портал открытых данных недоступен: HTTP ${response.status}`);
  }

  const rows = parseCsv(await response.text());
  const municipalityKey = detectMunicipalityKey(rows);
  if (!municipalityKey) {
    throw new Error(`В наборе «${entry.title}» нет колонки муниципалитета`);
  }

  const counts = aggregateRows(rows, municipalityKey);
  const ranking = [...counts.entries()]
    .map(([districtId, value]) => {
      const district = districts.find((item) => item.id === districtId);
      return {
        districtId,
        districtName: district?.name ?? districtId,
        rank: 0,
        total: 0,
        value,
        unit: "ед.",
        sourceId: "bashkortostan_open_data"
      };
    })
    .sort((a, b) => b.value - a.value);

  ranking.forEach((row, index) => {
    row.rank = index + 1;
    row.total = ranking.length;
  });

  const indicatorId = `opendata_health_${entry.datasetId}_count`;
  const payload: OpendataLivePayload = {
    catalogId,
    indicatorId,
    indicatorName: `${entry.title}: количество объектов`,
    year,
    unit: "ед.",
    fetchedAt: new Date().toISOString(),
    sourceUrl: entry.csvUrl,
    ranking
  };

  cache.set(cacheKey, { payload, expiresAt: Date.now() + CACHE_TTL_MS });
  return payload;
}
