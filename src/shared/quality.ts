import type { District, Indicator, StatValue } from "./types";

export type QualityIssueCode =
  | "unknown_district"
  | "unknown_indicator"
  | "invalid_year"
  | "invalid_value"
  | "duplicate_value"
  | "missing_value";

export interface QualityIssue {
  code: QualityIssueCode;
  message: string;
  value: Partial<StatValue>;
}

export interface QualityReport {
  errors: QualityIssue[];
  warnings: QualityIssue[];
}

interface ValidateInput {
  districts: District[];
  indicators: Indicator[];
  values: StatValue[];
}

export function validateStatValues({ districts, indicators, values }: ValidateInput): QualityReport {
  const knownDistricts = new Set(districts.map((district) => district.id));
  const knownIndicators = new Set(indicators.map((indicator) => indicator.id));
  const seen = new Set<string>();
  const errors: QualityIssue[] = [];

  for (const value of values) {
    if (!knownDistricts.has(value.districtId)) {
      errors.push({
        code: "unknown_district",
        message: `Неизвестный район: ${value.districtId}`,
        value
      });
    }

    if (!knownIndicators.has(value.indicatorId)) {
      errors.push({
        code: "unknown_indicator",
        message: `Неизвестный показатель: ${value.indicatorId}`,
        value
      });
    }

    if (!Number.isInteger(value.year) || value.year < 1990 || value.year > 2100) {
      errors.push({
        code: "invalid_year",
        message: `Некорректный год: ${value.year}`,
        value
      });
    }

    if (!Number.isFinite(value.value)) {
      errors.push({
        code: "invalid_value",
        message: `Некорректное значение для ${value.indicatorId}`,
        value
      });
    }

    const key = `${value.districtId}:${value.indicatorId}:${value.year}:${value.sourceId}`;
    if (seen.has(key)) {
      errors.push({
        code: "duplicate_value",
        message: `Дублирующее значение: ${key}`,
        value
      });
    }
    seen.add(key);
  }

  const warnings = findMissingValues({ districts, indicators, values });

  return { errors, warnings };
}

function findMissingValues({ districts, indicators, values }: ValidateInput): QualityIssue[] {
  const warnings: QualityIssue[] = [];
  const available = new Set(values.map((value) => `${value.districtId}:${value.indicatorId}:${value.year}`));
  const indicatorYears = new Map<string, Set<number>>();

  for (const value of values) {
    const years = indicatorYears.get(value.indicatorId) ?? new Set<number>();
    years.add(value.year);
    indicatorYears.set(value.indicatorId, years);
  }

  for (const indicator of indicators) {
    const years = indicatorYears.get(indicator.id) ?? new Set<number>();
    for (const year of years) {
      for (const district of districts) {
        const key = `${district.id}:${indicator.id}:${year}`;
        if (!available.has(key)) {
          warnings.push({
            code: "missing_value",
            message: `Нет значения: ${district.name}, ${indicator.name}, ${year}`,
            value: {
              districtId: district.id,
              indicatorId: indicator.id,
              year
            }
          });
        }
      }
    }
  }

  return warnings;
}
