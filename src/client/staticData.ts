import { districts, indicatorGroups, indicators, sources, statValues } from "../data/seed";
import { buildExecutiveSummary } from "../shared/executive";
import { validateStatValues } from "../shared/quality";
import { buildRanking } from "../shared/ranking";
import type { ExecutiveSummary } from "../shared/types";

export const staticData = {
  districts,
  indicatorGroups,
  indicators,
  sources,
  years: [...new Set(statValues.map((value) => value.year))].sort((a, b) => b - a),
  quality: validateStatValues({ districts, indicators, values: statValues }),
  getAvailableIndicatorIds(year: number) {
    return [...new Set(statValues.filter((value) => value.year === year).map((value) => value.indicatorId))];
  },
  getIndicatorGroups(year?: number) {
    if (!year || Number.isNaN(year)) {
      return indicatorGroups;
    }

    const availableIndicatorIds = new Set(this.getAvailableIndicatorIds(year));
    const availableGroupIds = new Set(
      indicators.filter((indicator) => availableIndicatorIds.has(indicator.id)).map((indicator) => indicator.groupId)
    );
    return indicatorGroups.filter((group) => availableGroupIds.has(group.id));
  },
  getIndicators(groupId?: string, year?: number) {
    const availableIndicatorIds = year && !Number.isNaN(year) ? new Set(this.getAvailableIndicatorIds(year)) : null;

    return indicators.filter((indicator) => {
      return (!groupId || indicator.groupId === groupId) && (!availableIndicatorIds || availableIndicatorIds.has(indicator.id));
    });
  },
  getRanking(indicatorId: string, year: number) {
    const indicator = indicators.find((item) => item.id === indicatorId);
    return indicator ? buildRanking({ districts, indicator, values: statValues, year }) : [];
  },
  getDistrictProfile(districtId: string, year: number) {
    const district = districts.find((item) => item.id === districtId);
    if (!district) {
      throw new Error(`Район не найден: ${districtId}`);
    }

    return {
      district,
      year,
      values: statValues
        .filter((value) => value.districtId === districtId && value.year === year)
        .map((value) => {
          const indicator = indicators.find((item) => item.id === value.indicatorId);
          const source = sources.find((item) => item.id === value.sourceId);
          const ranking = indicator
            ? buildRanking({ districts, indicator, values: statValues, year }).find((row) => row.districtId === districtId)
            : undefined;

          return {
            ...value,
            indicator,
            source,
            rank: ranking?.rank,
            total: ranking?.total,
            rankDelta: ranking?.rankDelta
          };
        })
    };
  },
  getExecutiveSummary(year: number): ExecutiveSummary {
    return buildExecutiveSummary({
      districts,
      indicators,
      values: statValues,
      year,
      keyIndicatorIds: indicators.slice(0, 20).map((indicator) => indicator.id)
    });
  }
};
