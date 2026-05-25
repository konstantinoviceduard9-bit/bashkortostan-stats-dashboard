import type { ImportRun, StatValue } from "../shared/types";

interface CsvParseOptions {
  sourceId: string;
  districtAliases: Record<string, string>;
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

function parseCsvLine(line: string): string[] {
  const result: string[] = [];
  let current = "";
  let quoted = false;

  for (const char of line) {
    if (char === "\"") {
      quoted = !quoted;
      continue;
    }

    if (char === "," && !quoted) {
      result.push(current.trim());
      current = "";
      continue;
    }

    current += char;
  }

  result.push(current.trim());
  return result;
}
