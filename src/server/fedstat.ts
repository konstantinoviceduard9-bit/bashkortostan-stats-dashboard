import { XMLParser } from "fast-xml-parser";
import type { StatValue } from "../shared/types";
import type { CsvParseResult, OfficialSourceAdapter } from "./importer";

export interface FedstatPostSpec {
  fedstatIndicatorId: string;
  title: string;
  selectedFilterIds: string[];
  filterObjectIds: Record<"lineObjectIds" | "columnObjectIds" | "filterObjectIds", string>;
}

export interface FedstatSdmxParseSpec {
  sourceId: string;
  localIndicatorId: string;
  municipalityDimension: string;
  yearDimension: string;
  districtAliases: Record<string, string>;
}

export interface FedstatImportSpec extends FedstatPostSpec, FedstatSdmxParseSpec {
  format: "sdmx";
}

interface SdmxWarning {
  row: number;
  message: string;
}

export function buildFedstatPostBody(spec: FedstatPostSpec): URLSearchParams {
  const body = new URLSearchParams();

  body.set("format", "sdmx");
  body.set("id", spec.fedstatIndicatorId);
  body.set("indicator_title", spec.title);

  Object.entries(spec.filterObjectIds).forEach(([key, value]) => {
    body.set(key, value);
  });

  spec.selectedFilterIds.forEach((selectedFilterId) => {
    body.append("selectedFilterIds", selectedFilterId);
  });

  return body;
}

export function parseFedstatSdmx(sdmx: string, spec: FedstatSdmxParseSpec): CsvParseResult {
  const parser = new XMLParser({
    ignoreAttributes: false,
    attributeNamePrefix: "",
    removeNSPrefix: true
  });
  const document = parser.parse(sdmx) as Record<string, unknown>;
  const seriesList = collectNodes(document, "Series");
  const values: StatValue[] = [];
  const warnings: SdmxWarning[] = [];

  seriesList.forEach((series, index) => {
    const rowNumber = index + 1;
    const dimensions = extractSeriesDimensions(series);
    const districtName = dimensions[spec.municipalityDimension];
    const districtId = spec.districtAliases[districtName];
    const year = Number(dimensions[spec.yearDimension]);
    const rawValue = extractObsValue(series);
    const value = Number(String(rawValue).replace(",", "."));

    if (!districtId || !Number.isInteger(year) || !Number.isFinite(value)) {
      warnings.push({
        row: rowNumber,
        message: `Наблюдение Fedstat ${rowNumber} пропущено: не распознан муниципалитет, год или значение`
      });
      return;
    }

    values.push({
      districtId,
      indicatorId: spec.localIndicatorId,
      year,
      value,
      sourceId: spec.sourceId
    });
  });

  return { values, warnings };
}

export function createFedstatSdmxAdapter(spec: FedstatImportSpec): OfficialSourceAdapter {
  return {
    sourceId: spec.sourceId,
    async load() {
      const response = await fetch("https://www.fedstat.ru/indicator/data.do?format=sdmx", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: buildFedstatPostBody(spec)
      });

      if (!response.ok) {
        throw new Error(`Fedstat вернул ошибку ${response.status} для показателя ${spec.fedstatIndicatorId}`);
      }

      const contentType = response.headers.get("content-type") ?? "";
      if (!contentType.includes("xml") && !contentType.includes("sdmx")) {
        throw new Error(`Fedstat вернул неожиданный формат: ${contentType || "не указан"}`);
      }

      return parseFedstatSdmx(await response.text(), spec);
    }
  };
}

function extractSeriesDimensions(series: unknown): Record<string, string> {
  const dimensions: Record<string, string> = {};
  const values = collectNodes(series, "Value");

  for (const value of values) {
    if (isRecord(value) && typeof value.id === "string" && typeof value.value === "string") {
      dimensions[value.id] = value.value;
    }
  }

  return dimensions;
}

function extractObsValue(series: unknown): string {
  const obsValues = collectNodes(series, "ObsValue");
  const first = obsValues[0];

  if (isRecord(first) && typeof first.value === "string") {
    return first.value;
  }

  return "";
}

function collectNodes(node: unknown, targetKey: string): unknown[] {
  if (Array.isArray(node)) {
    return node.flatMap((item) => collectNodes(item, targetKey));
  }

  if (!isRecord(node)) {
    return [];
  }

  return Object.entries(node).flatMap(([key, value]) => {
    const ownNodes = key === targetKey ? (Array.isArray(value) ? value : [value]) : [];
    return [...ownNodes, ...collectNodes(value, targetKey)];
  });
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}
