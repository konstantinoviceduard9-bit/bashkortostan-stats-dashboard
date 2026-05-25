import { describe, expect, it } from "vitest";
import { DataStore } from "../src/server/dataStore";
import type { ImportRun, Indicator, IndicatorGroup, StatValue } from "../src/shared/types";

describe("DataStore imported catalog", () => {
  it("adds imported BDMO groups and indicators before ranking imported values", () => {
    const store = new DataStore({ seed: false });
    const importedGroup: IndicatorGroup = {
      id: "bdmo_31_naselenie",
      name: "31. Население",
      description: "Раздел БД ПМО: 31. Население"
    };
    const importedIndicator: Indicator = {
      id: "bdmo_31010000",
      groupId: importedGroup.id,
      name: "Новый показатель населения",
      unit: "чел.",
      description: "Показатель БД ПМО: Новый показатель населения",
      rankDirection: "desc",
      sourceId: "bdmo_rosstat",
      sourceIndicatorId: "31010000"
    };
    const importedValues: StatValue[] = [
      { districtId: "ufa", indicatorId: importedIndicator.id, year: 2024, value: 100, sourceId: "bdmo_rosstat" },
      { districtId: "beloretsk", indicatorId: importedIndicator.id, year: 2024, value: 80, sourceId: "bdmo_rosstat" }
    ];
    const run: ImportRun = {
      id: "test",
      sourceId: "bdmo_rosstat",
      status: "success",
      startedAt: "2026-01-01T00:00:00.000Z",
      finishedAt: "2026-01-01T00:00:01.000Z",
      updatedRows: importedValues.length,
      warnings: [],
      errors: []
    };

    store.addImportedValues(importedValues, run, {
      indicatorGroups: [importedGroup],
      indicators: [importedIndicator]
    });

    expect(store.listIndicatorGroups().some((group) => group.id === importedGroup.id)).toBe(true);
    expect(store.listIndicators(importedGroup.id)).toEqual([importedIndicator]);
    expect(store.getRanking(importedIndicator.id, 2024)[0]).toMatchObject({
      districtId: "ufa",
      rank: 1,
      value: 100
    });
  });
});
