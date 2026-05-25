import type { District, Indicator, RankingRow, StatValue } from "./types";

interface RankingInput {
  districts: District[];
  indicator: Indicator;
  values: StatValue[];
  year: number;
}

export function buildRanking({ districts, indicator, values, year }: RankingInput): RankingRow[] {
  const currentRows = rankYear({ districts, indicator, values, year });
  const previousYear = findPreviousYear(values, indicator.id, year);

  if (!previousYear) {
    return currentRows;
  }

  const previousRows = rankYear({ districts, indicator, values, year: previousYear });
  const previousByDistrict = new Map(previousRows.map((row) => [row.districtId, row.rank]));

  return currentRows.map((row) => {
    const previousRank = previousByDistrict.get(row.districtId);
    return {
      ...row,
      previousRank,
      rankDelta: previousRank ? previousRank - row.rank : undefined
    };
  });
}

function rankYear({ districts, indicator, values, year }: RankingInput): RankingRow[] {
  const districtById = new Map(districts.map((district) => [district.id, district]));
  const rows = values
    .filter((value) => value.indicatorId === indicator.id && value.year === year)
    .filter((value) => districtById.has(value.districtId))
    .sort((a, b) => sortValues(a.value, b.value, indicator.rankDirection))
    .map((value, index, all) => {
      const district = districtById.get(value.districtId);
      if (!district) {
        throw new Error(`Unknown district: ${value.districtId}`);
      }

      return {
        districtId: value.districtId,
        districtName: district.name,
        rank: index + 1,
        total: all.length,
        value: value.value,
        unit: indicator.unit,
        sourceId: value.sourceId
      };
    });

  return rows;
}

function sortValues(a: number, b: number, direction: Indicator["rankDirection"]): number {
  if (direction === "asc") {
    return a - b;
  }

  if (direction === "neutral") {
    return 0;
  }

  return b - a;
}

function findPreviousYear(values: StatValue[], indicatorId: string, selectedYear: number): number | undefined {
  const previousYears = new Set(
    values
      .filter((value) => value.indicatorId === indicatorId && value.year < selectedYear)
      .map((value) => value.year)
  );

  return [...previousYears].sort((a, b) => b - a)[0];
}
