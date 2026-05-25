import type { ImportRun, StatValue } from "../shared/types";

interface CsvParseOptions {
  sourceId: string;
  districtAliases: Record<string, string>;
}

interface BdmoFlatCsvParseOptions extends CsvParseOptions {
  targetRegion: string;
  indicatorAliases: Record<string, string>;
}

interface CsvParseWarning {
  row: number;
  message: string;
}

export interface CsvParseResult {
  values: StatValue[];
  warnings: CsvParseWarning[];
}

export interface OfficialSourceAdapter {
  sourceId: string;
  load(): Promise<CsvParseResult>;
}

export function parseOfficialCsv(csv: string, options: CsvParseOptions): CsvParseResult {
  const lines = csv
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);
  const [headerLine, ...dataLines] = lines;
  const headers = parseCsvLine(headerLine);
  const values: StatValue[] = [];
  const warnings: CsvParseWarning[] = [];

  dataLines.forEach((line, index) => {
    const rowNumber = index + 2;
    const row = Object.fromEntries(headers.map((header, columnIndex) => [header, parseCsvLine(line)[columnIndex] ?? ""]));
    const districtId = options.districtAliases[row.district] ?? options.districtAliases[row.district?.trim()];
    const year = Number(row.year);
    const value = Number(String(row.value).replace(",", "."));
    const indicatorId = row.indicator;

    if (!districtId || !indicatorId || !Number.isInteger(year) || !Number.isFinite(value)) {
      warnings.push({
        row: rowNumber,
        message: `Строка ${rowNumber} пропущена: неизвестный район или некорректное значение`
      });
      return;
    }

    values.push({
      districtId,
      indicatorId,
      year,
      value,
      sourceId: row.source || options.sourceId
    });
  });

  return { values, warnings };
}

export function parseBdmoFlatCsv(csv: string, options: BdmoFlatCsvParseOptions): CsvParseResult {
  const rows = parseDelimitedRows(csv, ";");
  const [headers = [], ...dataRows] = rows;
  const values: StatValue[] = [];
  const warnings: CsvParseWarning[] = [];

  dataRows.forEach((columns, index) => {
    const rowNumber = index + 2;
    const row = Object.fromEntries(headers.map((header, columnIndex) => [normalizeHeader(header), columns[columnIndex] ?? ""]));
    const region = getField(row, ["region", "регион", "subject", "субъект"]);

    if (!sameText(region, options.targetRegion)) {
      return;
    }

    const districtName = getField(row, ["mo", "мо", "municipality", "муниципальное образование"]);
    const indicatorName = getField(row, ["indicator", "показатель", "indicator_name", "название показателя"]);
    const year = Number(getField(row, ["year", "год"]));
    const value = Number(getField(row, ["value", "значение"]).replace(",", "."));
    const districtId = options.districtAliases[districtName] ?? options.districtAliases[normalizeMunicipalityName(districtName)];
    const indicatorId = options.indicatorAliases[indicatorName] ?? options.indicatorAliases[normalizeIndicatorName(indicatorName)];

    if (!districtId || !indicatorId || !Number.isInteger(year) || !Number.isFinite(value)) {
      warnings.push({
        row: rowNumber,
        message: `Строка БД ПМО ${rowNumber} пропущена: не распознан муниципалитет, показатель, год или значение`
      });
      return;
    }

    values.push({
      districtId,
      indicatorId,
      year,
      value,
      sourceId: options.sourceId
    });
  });

  return { values, warnings };
}

export function createCsvUrlAdapter(sourceId: string, url: string, districtAliases: Record<string, string>): OfficialSourceAdapter {
  return {
    sourceId,
    async load() {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Не удалось загрузить источник ${sourceId}: ${response.status}`);
      }

      return parseOfficialCsv(await response.text(), { sourceId, districtAliases });
    }
  };
}

export function createBdmoFlatCsvUrlAdapter(
  sourceId: string,
  url: string,
  districtAliases: Record<string, string>,
  indicatorAliases: Record<string, string>,
  targetRegion = "Республика Башкортостан"
): OfficialSourceAdapter {
  return {
    sourceId,
    async load() {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Не удалось загрузить БД ПМО ${sourceId}: ${response.status}`);
      }

      return parseBdmoFlatCsv(await response.text(), {
        sourceId,
        districtAliases,
        indicatorAliases,
        targetRegion
      });
    }
  };
}

export async function runImport(adapter: OfficialSourceAdapter): Promise<{ run: ImportRun; values: StatValue[] }> {
  const startedAt = new Date().toISOString();

  try {
    const result = await adapter.load();
    return {
      values: result.values,
      run: {
        id: `${adapter.sourceId}-${Date.now()}`,
        sourceId: adapter.sourceId,
        status: result.warnings.length > 0 ? "warning" : "success",
        startedAt,
        finishedAt: new Date().toISOString(),
        updatedRows: result.values.length,
        warnings: result.warnings.map((warning) => warning.message),
        errors: []
      }
    };
  } catch (error) {
    return {
      values: [],
      run: {
        id: `${adapter.sourceId}-${Date.now()}`,
        sourceId: adapter.sourceId,
        status: "failed",
        startedAt,
        finishedAt: new Date().toISOString(),
        updatedRows: 0,
        warnings: [],
        errors: [error instanceof Error ? error.message : "Неизвестная ошибка импорта"]
      }
    };
  }
}

function parseDelimitedRows(csv: string, delimiter: "," | ";"): string[][] {
  return csv
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => parseCsvLine(line, delimiter));
}

function parseCsvLine(line: string, delimiter: "," | ";" = ","): string[] {
  const result: string[] = [];
  let current = "";
  let quoted = false;

  for (const char of line) {
    if (char === "\"") {
      quoted = !quoted;
      continue;
    }

    if (char === delimiter && !quoted) {
      result.push(current.trim());
      current = "";
      continue;
    }

    current += char;
  }

  result.push(current.trim());
  return result;
}

function normalizeHeader(value: string): string {
  return value.trim().toLowerCase();
}

function getField(row: Record<string, string>, names: string[]): string {
  for (const name of names) {
    const value = row[normalizeHeader(name)];
    if (value) {
      return value.trim();
    }
  }

  return "";
}

function sameText(left: string, right: string): boolean {
  return left.trim().toLowerCase() === right.trim().toLowerCase();
}

function normalizeMunicipalityName(name: string): string {
  return name
    .replace(/\s+муниципальный\s+район/i, " район")
    .replace(/\s+городской\s+округ/i, "")
    .trim();
}

function normalizeIndicatorName(name: string): string {
  return name.trim().replace(/\s+/g, " ");
}
