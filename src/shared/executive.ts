import { buildRanking } from "./ranking";
import type { District, ExecutiveSignal, ExecutiveSummary, Indicator, StatValue } from "./types";

interface ExecutiveSummaryInput {
  districts: District[];
  indicators: Indicator[];
  values: StatValue[];
  year: number;
  keyIndicatorIds: string[];
}

export function buildExecutiveSummary({
  districts,
  indicators,
  values,
  year,
  keyIndicatorIds
}: ExecutiveSummaryInput): ExecutiveSummary {
  const selectedIndicators = keyIndicatorIds
    .map((id) => indicators.find((indicator) => indicator.id === id))
    .filter((indicator): indicator is Indicator => Boolean(indicator));
  const cards: ExecutiveSummary["cards"] = [];
  const problemSignals: ExecutiveSignal[] = [];

  for (const indicator of selectedIndicators) {
    const ranking = buildRanking({ districts, indicator, values, year });
    if (ranking.length === 0) {
      continue;
    }

    const worst = ranking[ranking.length - 1];
    cards.push({
      indicatorId: indicator.id,
      indicatorName: indicator.name,
      worstDistrictName: worst.districtName,
      worstRank: worst.rank,
      total: worst.total,
      unit: indicator.unit
    });

    for (const row of ranking) {
      const bottomShare = row.rank / row.total;
      const dropped = (row.rankDelta ?? 0) < 0;

      if (bottomShare >= 0.9 || dropped) {
        problemSignals.push({
          districtId: row.districtId,
          districtName: row.districtName,
          indicatorId: indicator.id,
          indicatorName: indicator.name,
          value: row.value,
          unit: indicator.unit,
          rank: row.rank,
          total: row.total,
          rankDelta: row.rankDelta,
          severity: bottomShare >= 0.9 ? "critical" : "warning",
          reason: bottomShare >= 0.9 ? "Район находится в нижних 10% рейтинга" : "Район ухудшил позицию к прошлому периоду"
        });
      }
    }
  }

  return {
    year,
    cards,
    problemSignals: problemSignals
      .sort((left, right) => severityWeight(right.severity) - severityWeight(left.severity) || right.rank - left.rank)
      .slice(0, 20)
  };
}

function severityWeight(severity: ExecutiveSignal["severity"]): number {
  return severity === "critical" ? 2 : 1;
}
