import { describe, expect, it } from "vitest";
import { parseBdmoFlatCsv, parseOfficialCsv } from "../src/server/importer";

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

describe("parseBdmoFlatCsv", () => {
  it("imports Bashkortostan rows from a semicolon-delimited BDMO flat table", () => {
    const csv = [
      "region;mo;oktmo;indicator;year;value",
      "Республика Башкортостан;Уфа;80701000001;Численность населения;2024;1144000",
      "Республика Татарстан;Казань;92701000001;Численность населения;2024;1320000",
      "Республика Башкортостан;Белорецкий район;80611000000;Средняя зарплата;2024;56000"
    ].join("\n");

    const parsed = parseBdmoFlatCsv(csv, {
      sourceId: "bdmo_rosstat",
      targetRegion: "Республика Башкортостан",
      districtAliases: {
        "Уфа": "ufa",
        "Белорецкий район": "beloretsk"
      },
      indicatorAliases: {
        "Численность населения": "population_total",
        "Средняя зарплата": "average_salary"
      }
    });

    expect(parsed.values).toEqual([
      { districtId: "ufa", indicatorId: "population_total", year: 2024, value: 1144000, sourceId: "bdmo_rosstat" },
      { districtId: "beloretsk", indicatorId: "average_salary", year: 2024, value: 56000, sourceId: "bdmo_rosstat" }
    ]);
    expect(parsed.warnings).toEqual([]);
  });
});
