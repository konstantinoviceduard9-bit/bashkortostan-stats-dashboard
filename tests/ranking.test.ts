import { describe, expect, it } from "vitest";
import { buildRanking } from "../src/shared/ranking";
import type { District, Indicator, StatValue } from "../src/shared/types";

const districts: District[] = [
  { id: "ufa", name: "Уфа", type: "city" },
  { id: "beloretsk", name: "Белорецкий район", type: "district" },
  { id: "birsk", name: "Бирский район", type: "district" }
];

describe("buildRanking", () => {
  it("sorts higher values first when a larger value is better", () => {
    const indicator: Indicator = {
      id: "salary",
      groupId: "economy",
      name: "Средняя зарплата",
      unit: "руб.",
      rankDirection: "desc",
      description: "Среднемесячная зарплата"
    };
    const values: StatValue[] = [
      { districtId: "ufa", indicatorId: "salary", year: 2024, value: 82000, sourceId: "rosstat" },
      { districtId: "birsk", indicatorId: "salary", year: 2024, value: 51000, sourceId: "rosstat" },
      { districtId: "beloretsk", indicatorId: "salary", year: 2024, value: 56000, sourceId: "rosstat" }
    ];

    expect(buildRanking({ districts, indicator, values, year: 2024 }).map((row) => row.districtId)).toEqual([
      "ufa",
      "beloretsk",
      "birsk"
    ]);
  });

  it("sorts lower values first when a smaller value is better", () => {
    const indicator: Indicator = {
      id: "mortality",
      groupId: "population",
      name: "Смертность",
      unit: "на 1000 чел.",
      rankDirection: "asc",
      description: "Коэффициент смертности"
    };
    const values: StatValue[] = [
      { districtId: "ufa", indicatorId: "mortality", year: 2024, value: 12.7, sourceId: "rosstat" },
      { districtId: "birsk", indicatorId: "mortality", year: 2024, value: 10.4, sourceId: "rosstat" },
      { districtId: "beloretsk", indicatorId: "mortality", year: 2024, value: 14.1, sourceId: "rosstat" }
    ];

    const ranking = buildRanking({ districts, indicator, values, year: 2024 });

    expect(ranking[0]).toMatchObject({ districtId: "birsk", rank: 1, value: 10.4 });
    expect(ranking[2]).toMatchObject({ districtId: "beloretsk", rank: 3, value: 14.1 });
  });

  it("adds previous-year rank deltas when historical values exist", () => {
    const indicator: Indicator = {
      id: "population",
      groupId: "population",
      name: "Население",
      unit: "чел.",
      rankDirection: "desc",
      description: "Численность населения"
    };
    const values: StatValue[] = [
      { districtId: "ufa", indicatorId: "population", year: 2023, value: 100, sourceId: "rosstat" },
      { districtId: "birsk", indicatorId: "population", year: 2023, value: 90, sourceId: "rosstat" },
      { districtId: "beloretsk", indicatorId: "population", year: 2023, value: 80, sourceId: "rosstat" },
      { districtId: "ufa", indicatorId: "population", year: 2024, value: 100, sourceId: "rosstat" },
      { districtId: "beloretsk", indicatorId: "population", year: 2024, value: 95, sourceId: "rosstat" },
      { districtId: "birsk", indicatorId: "population", year: 2024, value: 82, sourceId: "rosstat" }
    ];

    const beloretsk = buildRanking({ districts, indicator, values, year: 2024 }).find(
      (row) => row.districtId === "beloretsk"
    );

    expect(beloretsk?.previousRank).toBe(3);
    expect(beloretsk?.rankDelta).toBe(1);
  });
});
