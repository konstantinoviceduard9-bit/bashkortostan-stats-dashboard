import { describe, expect, it } from "vitest";
import { getOperationalYearFromGroupId, indicatorIdsWithNonZeroValues } from "../src/shared/opendata";

describe("opendata helpers", () => {
  it("extracts operational year from group id", () => {
    expect(getOperationalYearFromGroupId("opendata_health_2026")).toBe(2026);
    expect(getOperationalYearFromGroupId("bdmo_population")).toBeNull();
  });

  it("keeps only indicators with non-zero values for the year", () => {
    const values = [
      { indicatorId: "a", year: 2026, value: 0 },
      { indicatorId: "a", year: 2026, value: 0 },
      { indicatorId: "b", year: 2026, value: 3 },
      { indicatorId: "b", year: 2025, value: 1 }
    ];

    expect(indicatorIdsWithNonZeroValues(values, 2026)).toEqual(["b"]);
  });
});
