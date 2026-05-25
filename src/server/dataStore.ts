import {
  districts,
  importRuns as seedImportRuns,
  indicatorGroups as seedIndicatorGroups,
  indicators as seedIndicators,
  sources,
  statValues
} from "../data/seed";
import { buildRanking } from "../shared/ranking";
import { buildExecutiveSummary } from "../shared/executive";
import type { District, ImportRun, Indicator, IndicatorGroup, Source, StatValue } from "../shared/types";
import { validateStatValues } from "../shared/quality";
import type { CsvParseResult } from "./importer";

interface DataStoreOptions {
  seed?: boolean;
}

export class DataStore {
  private groups: IndicatorGroup[];
  private indicators: Indicator[];
  private values: StatValue[];
  private runs: ImportRun[];

  constructor(options: DataStoreOptions = {}) {
    const useSeed = options.seed ?? true;
    this.groups = useSeed ? [...seedIndicatorGroups] : [];
    this.indicators = useSeed ? [...seedIndicators] : [];
    this.values = useSeed ? [...statValues] : [];
    this.runs = useSeed ? [...seedImportRuns] : [];
  }

  listDistricts(): District[] {
    return districts;
  }

  listIndicatorGroups() {
    return this.groups;
  }

  listIndicators(groupId?: string): Indicator[] {
    return groupId ? this.indicators.filter((indicator) => indicator.groupId === groupId) : this.indicators;
  }

  listSources(): Source[] {
    return sources;
  }

  listYears(): number[] {
    return [...new Set(this.values.map((value) => value.year))].sort((a, b) => b - a);
  }

  listValues(filters: { districtId?: string; indicatorId?: string; year?: number }) {
    return this.values.filter((value) => {
      return (
        (!filters.districtId || value.districtId === filters.districtId) &&
        (!filters.indicatorId || value.indicatorId === filters.indicatorId) &&
        (!filters.year || value.year === filters.year)
      );
    });
  }

  getRanking(indicatorId: string, year: number) {
    const indicator = this.indicators.find((item) => item.id === indicatorId);
    if (!indicator) {
      throw new Error(`Показатель не найден: ${indicatorId}`);
    }

    return buildRanking({
      districts,
      indicator,
      values: this.values,
      year
    });
  }

  getDistrictProfile(districtId: string, year: number) {
    const district = districts.find((item) => item.id === districtId);
    if (!district) {
      throw new Error(`Район не найден: ${districtId}`);
    }

    const values = this.listValues({ districtId, year }).map((value) => {
      const indicator = this.indicators.find((item) => item.id === value.indicatorId);
      const source = sources.find((item) => item.id === value.sourceId);
      const ranking = indicator ? this.getRanking(indicator.id, year).find((row) => row.districtId === districtId) : undefined;

      return {
        ...value,
        indicator,
        source,
        rank: ranking?.rank,
        total: ranking?.total,
        rankDelta: ranking?.rankDelta
      };
    });

    return { district, year, values };
  }

  getDashboardSummary(districtId: string, year: number) {
    const profile = this.getDistrictProfile(districtId, year);
    return {
      selectedYear: year,
      selectedDistrictId: districtId,
      cards: profile.values.slice(0, 6).map((value) => ({
        indicatorId: value.indicatorId,
        indicatorName: value.indicator?.name ?? value.indicatorId,
        value: value.value,
        unit: value.indicator?.unit ?? "",
        rank: value.rank,
        total: value.total
      }))
    };
  }

  getExecutiveSummary(year: number) {
    return buildExecutiveSummary({
      districts,
      indicators: this.indicators,
      values: this.values,
      year,
      keyIndicatorIds: this.indicators.slice(0, 20).map((indicator) => indicator.id)
    });
  }

  addImportedValues(values: StatValue[], run: ImportRun, catalog?: Pick<CsvParseResult, "indicatorGroups" | "indicators">) {
    this.upsertIndicatorGroups(catalog?.indicatorGroups ?? []);
    this.upsertIndicators(catalog?.indicators ?? []);

    const nextValues = [...this.values];
    for (const imported of values) {
      const existingIndex = nextValues.findIndex(
        (value) =>
          value.districtId === imported.districtId &&
          value.indicatorId === imported.indicatorId &&
          value.year === imported.year &&
          value.sourceId === imported.sourceId
      );

      if (existingIndex >= 0) {
        nextValues[existingIndex] = { ...imported, loadedAt: run.finishedAt };
      } else {
        nextValues.push({ ...imported, loadedAt: run.finishedAt });
      }
    }

    this.values = nextValues;
    this.runs = [run, ...this.runs];
  }

  listImportRuns(): ImportRun[] {
    return this.runs;
  }

  getQualityReport() {
    return validateStatValues({
      districts,
      indicators: this.indicators,
      values: this.values
    });
  }

  private upsertIndicatorGroups(groups: IndicatorGroup[]) {
    for (const group of groups) {
      const existingIndex = this.groups.findIndex((item) => item.id === group.id);
      if (existingIndex >= 0) {
        this.groups[existingIndex] = group;
      } else {
        this.groups.push(group);
      }
    }
  }

  private upsertIndicators(indicators: Indicator[]) {
    for (const indicator of indicators) {
      const existingIndex = this.indicators.findIndex((item) => item.id === indicator.id);
      if (existingIndex >= 0) {
        this.indicators[existingIndex] = indicator;
      } else {
        this.indicators.push(indicator);
      }
    }
  }
}

export const store = new DataStore();
