import type { ImportRun, Indicator, IndicatorGroup, StatValue } from "../shared/types";

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
  indicatorGroups?: IndicatorGroup[];
  indicators?: Indicator[];
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
  const discoveredGroups = new Map<string, IndicatorGroup>();
  const discoveredIndicators = new Map<string, Indicator>();

  dataRows.forEach((columns, index) => {
    const rowNumber = index + 2;
    const row = Object.fromEntries(headers.map((header, columnIndex) => [normalizeHeader(header), columns[columnIndex] ?? ""]));
    const region = getField(row, ["region", "region_name", "регион", "subject", "субъект"]);

    if (!sameText(region, options.targetRegion)) {
      return;
    }

    const districtName = getField(row, ["mo", "мо", "municipality", "муниципальное образование"]);
    const indicatorName = getField(row, ["indicator", "показатель", "indicator_name", "название показателя"]);
    const indicatorCode = getField(row, ["indicator_code", "код показателя", "indicator_id", "код"]);
    const unit = getField(row, ["unit", "indicator_unit", "единица измерения", "measure"]) || "значение";
    const sectionName = getField(row, ["section", "indicator_section", "раздел", "group", "группа"]) || "БД ПМО";
    const sectionCode = getField(row, ["section_code", "indicator_section_code", "код раздела"]);
    const section = sectionCode && !sectionName.startsWith(`${sectionCode}.`) ? `${sectionCode}. ${sectionName}` : sectionName;
    const year = Number(getField(row, ["year", "год"]));
    const value = Number(getField(row, ["value", "indicator_value", "значение"]).replace(",", "."));
    const districtId = options.districtAliases[districtName] ?? options.districtAliases[normalizeMunicipalityName(districtName)];
    const discoveredIndicator = buildBdmoIndicator({
      sourceId: options.sourceId,
      indicatorName,
      indicatorCode,
      section,
      unit
    });
    const indicatorId =
      options.indicatorAliases[indicatorName] ??
      options.indicatorAliases[normalizeIndicatorName(indicatorName)] ??
      discoveredIndicator.id;

    if (!districtId || !indicatorId || !Number.isInteger(year) || !Number.isFinite(value)) {
      warnings.push({
        row: rowNumber,
        message: `Строка БД ПМО ${rowNumber} пропущена: не распознан муниципалитет, показатель, год или значение`
      });
      return;
    }

    if (!options.indicatorAliases[indicatorName] && !options.indicatorAliases[normalizeIndicatorName(indicatorName)]) {
      const group = buildBdmoGroup(section);
      discoveredGroups.set(group.id, group);
      discoveredIndicators.set(discoveredIndicator.id, discoveredIndicator);
    }

    values.push({
      districtId,
      indicatorId,
      year,
      value,
      sourceId: options.sourceId
    });
  });

  return {
    values,
    warnings,
    indicatorGroups: [...discoveredGroups.values()],
    indicators: [...discoveredIndicators.values()]
  };
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

export async function runImport(
  adapter: OfficialSourceAdapter
): Promise<{ run: ImportRun; values: StatValue[]; indicatorGroups?: IndicatorGroup[]; indicators?: Indicator[] }> {
  const startedAt = new Date().toISOString();

  try {
    const result = await adapter.load();
    return {
      values: result.values,
      indicatorGroups: result.indicatorGroups,
      indicators: result.indicators,
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

function buildBdmoGroup(section: string): IndicatorGroup {
  return {
    id: `bdmo_${slugify(section)}`,
    name: section,
    description: `Раздел БД ПМО: ${section}`
  };
}

function buildBdmoIndicator(input: {
  sourceId: string;
  indicatorName: string;
  indicatorCode: string;
  section: string;
  unit: string;
}): Indicator {
  return {
    id: `bdmo_${input.indicatorCode ? slugify(input.indicatorCode) : slugify(input.indicatorName)}`,
    groupId: buildBdmoGroup(input.section).id,
    name: input.indicatorName,
    unit: input.unit,
    description: `Показатель БД ПМО: ${input.indicatorName}`,
    rankDirection: "desc",
    sourceId: input.sourceId,
    sourceIndicatorId: input.indicatorCode || input.indicatorName
  };
}

function slugify(value: string): string {
  return transliterate(value)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "_")
    .replace(/^_+|_+$/g, "");
}

function transliterate(value: string): string {
  const letters: Record<string, string> = {
    а: "a",
    б: "b",
    в: "v",
    г: "g",
    д: "d",
    е: "e",
    ё: "e",
    ж: "zh",
    з: "z",
    и: "i",
    й: "y",
    к: "k",
    л: "l",
    м: "m",
    н: "n",
    о: "o",
    п: "p",
    р: "r",
    с: "s",
    т: "t",
    у: "u",
    ф: "f",
    х: "h",
    ц: "c",
    ч: "ch",
    ш: "sh",
    щ: "sch",
    ы: "y",
    э: "e",
    ю: "yu",
    я: "ya"
  };

  return value
    .toLowerCase()
    .replace(/[ъь]/g, "")
    .replace(/[а-яё]/g, (letter) => letters[letter] ?? letter);
}
