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

  it("discovers new BDMO indicator groups and indicators when aliases are not predefined", () => {
    const csv = [
      "region;section;mo;oktmo;indicator_code;indicator;unit;year;value",
      "Республика Башкортостан;31. Население;Уфа;80701000001;31010000;Новый показатель населения;чел.;2024;100",
      "Республика Башкортостан;32. Занятость;Уфа;80701000001;32010000;Новый показатель зарплаты;руб.;2024;200"
    ].join("\n");

    const parsed = parseBdmoFlatCsv(csv, {
      sourceId: "bdmo_rosstat",
      targetRegion: "Республика Башкортостан",
      districtAliases: { "Уфа": "ufa" },
      indicatorAliases: {}
    });

    expect(parsed.indicatorGroups).toEqual([
      { id: "bdmo_31_naselenie", name: "31. Население", description: "Раздел БД ПМО: 31. Население" },
      { id: "bdmo_32_zanyatost", name: "32. Занятость", description: "Раздел БД ПМО: 32. Занятость" }
    ]);
    expect(parsed.indicators).toEqual([
      {
        id: "bdmo_31010000",
        groupId: "bdmo_31_naselenie",
        name: "Новый показатель населения",
        unit: "чел.",
        description: "Показатель БД ПМО: Новый показатель населения",
        rankDirection: "desc",
        sourceId: "bdmo_rosstat",
        sourceIndicatorId: "31010000"
      },
      {
        id: "bdmo_32010000",
        groupId: "bdmo_32_zanyatost",
        name: "Новый показатель зарплаты",
        unit: "руб.",
        description: "Показатель БД ПМО: Новый показатель зарплаты",
        rankDirection: "desc",
        sourceId: "bdmo_rosstat",
        sourceIndicatorId: "32010000"
      }
    ]);
    expect(parsed.values).toEqual([
      { districtId: "ufa", indicatorId: "bdmo_31010000", year: 2024, value: 100, sourceId: "bdmo_rosstat" },
      { districtId: "ufa", indicatorId: "bdmo_32010000", year: 2024, value: 200, sourceId: "bdmo_rosstat" }
    ]);
  });

  it("imports tochno.st BDMO column names", () => {
    const csv = [
      "indicator_section_code;indicator_section;indicator_code;indicator_name;region_name;municipality;year;indicator_value;indicator_unit",
      "6;Территория;Y48006001;Общая площадь земель муниципального образования;Республика Башкортостан;Абзелиловский муниципальный район;2025;428900.0;Гектар",
      "6;Территория;Y48006001;Общая площадь земель муниципального образования;Республика Татарстан;Казань;2025;42530.0;Гектар",
      "31;Население;Y48031001;Численность населения;Республика Башкортостан;городской округ город Уфа;2025;1190254.0;Человек"
    ].join("\n");

    const parsed = parseBdmoFlatCsv(csv, {
      sourceId: "bdmo_rosstat",
      targetRegion: "Республика Башкортостан",
      districtAliases: {
        "Абзелиловский муниципальный район": "abzelilovsky",
        "городской округ город Уфа": "ufa"
      },
      indicatorAliases: {}
    });

    expect(parsed.indicatorGroups).toEqual([
      { id: "bdmo_6_territoriya", name: "6. Территория", description: "Раздел БД ПМО: 6. Территория" },
      { id: "bdmo_31_naselenie", name: "31. Население", description: "Раздел БД ПМО: 31. Население" }
    ]);
    expect(parsed.values).toEqual([
      { districtId: "abzelilovsky", indicatorId: "bdmo_y48006001", year: 2025, value: 428900, sourceId: "bdmo_rosstat" },
      { districtId: "ufa", indicatorId: "bdmo_y48031001", year: 2025, value: 1190254, sourceId: "bdmo_rosstat" }
    ]);
  });
});
