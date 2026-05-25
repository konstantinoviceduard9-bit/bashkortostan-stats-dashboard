import { describe, expect, it } from "vitest";
import { parseOfficialCsv } from "../src/server/importer";

describe("parseOfficialCsv", () => {
  it("normalizes official CSV rows into statistic values", () => {
    const csv = [
      "district,indicator,year,value,source",
      "Уфа,population,2024,1144000,rosstat",
      "Белорецкий район,population,2024,101200,rosstat"
    ].join("\n");

    const parsed = parseOfficialCsv(csv, {
      sourceId: "rosstat",
      districtAliases: {
        "Уфа": "ufa",
        "Белорецкий район": "beloretsk"
      }
    });

    expect(parsed.values).toEqual([
      { districtId: "ufa", indicatorId: "population", year: 2024, value: 1144000, sourceId: "rosstat" },
      { districtId: "beloretsk", indicatorId: "population", year: 2024, value: 101200, sourceId: "rosstat" }
    ]);
    expect(parsed.warnings).toEqual([]);
  });

  it("keeps row-level warnings for unknown districts and malformed numbers", () => {
    const csv = ["district,indicator,year,value,source", "Неизвестный район,population,2024,abc,rosstat"].join("\n");

    const parsed = parseOfficialCsv(csv, {
      sourceId: "rosstat",
      districtAliases: {}
    });

    expect(parsed.values).toEqual([]);
    expect(parsed.warnings).toHaveLength(1);
    expect(parsed.warnings[0]).toMatchObject({ row: 2 });
  });
});
