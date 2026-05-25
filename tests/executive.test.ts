import { describe, expect, it } from "vitest";
import { buildExecutiveSummary } from "../src/shared/executive";
import type { District, Indicator, StatValue } from "../src/shared/types";

const districts: District[] = [
  { id: "ufa", name: "Уфа", type: "city" },
  { id: "birsk", name: "Бирский район", type: "district" },
  { id: "beloretsk", name: "Белорецкий район", type: "district" }
];

const indicators: Indicator[] = [
  {
    id: "salary",
    groupId: "economy",
    name: "Средняя зарплата",
    unit: "руб.",
    description: "Среднемесячная зарплата",
    rankDirection: "desc"
  },
  {
    id: "mortality",
    groupId: "health",
    name: "Смертность",
    unit: "на 1000 чел.",
    description: "Коэффициент смертности",
    rankDirection: "asc"
  }
];

describe("buildExecutiveSummary", () => {
  it("returns key indicator cards and problem signals for regional leadership", () => {
    const values: StatValue[] = [
      { districtId: "ufa", indicatorId: "salary", year: 2023, value: 80000, sourceId: "rosstat" },
      { districtId: "birsk", indicatorId: "salary", year: 2023, value: 70000, sourceId: "rosstat" },
      { districtId: "beloretsk", indicatorId: "salary", year: 2023, value: 60000, sourceId: "rosstat" },
      { districtId: "ufa", indicatorId: "salary", year: 2024, value: 82000, sourceId: "rosstat" },
      { districtId: "birsk", indicatorId: "salary", year: 2024, value: 51000, sourceId: "rosstat" },
      { districtId: "beloretsk", indicatorId: "salary", year: 2024, value: 56000, sourceId: "rosstat" },
      { districtId: "ufa", indicatorId: "mortality", year: 2024, value: 12.7, sourceId: "bashstat" },
      { districtId: "birsk", indicatorId: "mortality", year: 2024, value: 10.4, sourceId: "bashstat" },
      { districtId: "beloretsk", indicatorId: "mortality", year: 2024, value: 14.1, sourceId: "bashstat" }
    ];

    const summary = buildExecutiveSummary({
      districts,
      indicators,
      values,
      year: 2024,
      keyIndicatorIds: ["salary", "mortality"]
    });

    expect(summary.cards).toHaveLength(2);
    expect(summary.problemSignals).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          districtId: "birsk",
          indicatorId: "salary",
          severity: "critical"
        }),
        expect.objectContaining({
          districtId: "beloretsk",
          indicatorId: "mortality",
          severity: "critical"
        })
      ])
    );
  });
});
