import { describe, expect, it } from "vitest";
import { validateStatValues } from "../src/shared/quality";
import type { District, Indicator, StatValue } from "../src/shared/types";

const districts: District[] = [{ id: "ufa", name: "Уфа", type: "city" }];
const indicators: Indicator[] = [
  {
    id: "salary",
    groupId: "economy",
    name: "Средняя зарплата",
    unit: "руб.",
    rankDirection: "desc",
    description: "Среднемесячная зарплата"
  }
];

describe("validateStatValues", () => {
  it("reports unknown districts, duplicates and invalid values", () => {
    const values: StatValue[] = [
      { districtId: "ufa", indicatorId: "salary", year: 2024, value: 82000, sourceId: "rosstat" },
      { districtId: "ufa", indicatorId: "salary", year: 2024, value: 82000, sourceId: "rosstat" },
      { districtId: "unknown", indicatorId: "salary", year: 2024, value: 1, sourceId: "rosstat" },
      { districtId: "ufa", indicatorId: "salary", year: 2025, value: Number.NaN, sourceId: "rosstat" }
    ];

    const result = validateStatValues({ districts, indicators, values });

    expect(result.errors).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ code: "duplicate_value" }),
        expect.objectContaining({ code: "unknown_district" }),
        expect.objectContaining({ code: "invalid_value" })
      ])
    );
  });

  it("reports missing district values for covered indicator years", () => {
    const result = validateStatValues({
      districts: [...districts, { id: "birsk", name: "Бирский район", type: "district" }],
      indicators,
      values: [{ districtId: "ufa", indicatorId: "salary", year: 2024, value: 82000, sourceId: "rosstat" }]
    });

    expect(result.warnings).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          code: "missing_value",
          value: expect.objectContaining({ districtId: "birsk", indicatorId: "salary", year: 2024 })
        })
      ])
    );
  });
});
