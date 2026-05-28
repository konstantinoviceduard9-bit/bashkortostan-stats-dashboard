import { describe, expect, it } from "vitest";
import { DataStore } from "../src/server/dataStore";
import type { ImportRun, Indicator, IndicatorGroup, StatValue } from "../src/shared/types";

describe("DataStore imported catalog", () => {
  it("lists only indicators that have values in a selected year", () => {
    const store = new DataStore({ seed: false });
    const group: IndicatorGroup = {
      id: "test_group",
      name: "Тестовая группа",
      description: "Тест"
    };
    const indicators: Indicator[] = [
      {
        id: "with_2026_value",
        groupId: group.id,
        name: "Есть значение",
        unit: "ед.",
        description: "Есть значение за 2026",
        rankDirection: "desc"
      },
      {
        id: "without_2026_value",
        groupId: group.id,
        name: "Нет значения",
        unit: "ед.",
        description: "Нет значения за 2026",
        rankDirection: "desc"
      }
    ];

    store.addImportedValues(
      [{ districtId: "ufa", indicatorId: "with_2026_value", year: 2026, value: 1, sourceId: "rosstat" }],
      {
        id: "test",
        sourceId: "rosstat",
        status: "success",
        startedAt: "2026-01-01T00:00:00.000Z",
        finishedAt: "2026-01-01T00:00:01.000Z",
        updatedRows: 1,
        warnings: [],
        errors: []
      },
      { indicatorGroups: [group], indicators }
    );

    expect((store as any).listAvailableIndicatorIds(2026)).toEqual(["with_2026_value"]);
  });

  it("filters groups and indicators by selected year", () => {
    const store = new DataStore({ seed: false });
    const groups: IndicatorGroup[] = [
      { id: "current", name: "Текущие", description: "Есть значения" },
      { id: "empty", name: "Пустые", description: "Нет значений за год" }
    ];
    const indicators: Indicator[] = [
      {
        id: "current_value",
        groupId: "current",
        name: "Есть в 2026",
        unit: "ед.",
        description: "Есть значение за 2026",
        rankDirection: "desc"
      },
      {
        id: "empty_value",
        groupId: "empty",
        name: "Нет в 2026",
        unit: "ед.",
        description: "Нет значения за 2026",
        rankDirection: "desc"
      }
    ];

    store.addImportedValues(
      [{ districtId: "ufa", indicatorId: "current_value", year: 2026, value: 1, sourceId: "rosstat" }],
      {
        id: "test",
        sourceId: "rosstat",
        status: "success",
        startedAt: "2026-01-01T00:00:00.000Z",
        finishedAt: "2026-01-01T00:00:01.000Z",
        updatedRows: 1,
        warnings: [],
        errors: []
      },
      { indicatorGroups: groups, indicators }
    );

    expect(store.listIndicatorGroups(2026).map((group) => group.id)).toEqual(["current"]);
    expect(store.listIndicators(undefined, 2026).map((indicator) => indicator.id)).toEqual(["current_value"]);
  });

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
