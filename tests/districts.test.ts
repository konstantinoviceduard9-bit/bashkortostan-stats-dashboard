import { describe, expect, it } from "vitest";
import { districts, statValues } from "../src/data/seed";
import { districtAliases } from "../src/shared/districts";

describe("Bashkortostan municipality catalog", () => {
  it("contains all top-level municipalities of Bashkortostan", () => {
    expect(districts).toHaveLength(63);
    expect(districts.filter((district) => district.type === "district")).toHaveLength(54);
    expect(districts.filter((district) => district.type === "city")).toHaveLength(9);
    expect(districts.map((district) => district.name)).toContain("Абзелиловский район");
    expect(districts.map((district) => district.name)).toContain("Уфа");
  });

  it("recognizes BDMO municipality names for imports", () => {
    expect(districtAliases["Абзелиловский муниципальный район"]).toBe("abzelilovsky");
    expect(districtAliases["городской округ город Уфа"]).toBe("ufa");
    expect(districtAliases["город Уфа"]).toBe("ufa");
  });

  it("ships only official statistic values", () => {
    expect(statValues.length).toBeGreaterThan(63);
    expect(statValues.every((value) => ["bdmo_rosstat", "bashkortostan_open_data"].includes(value.sourceId))).toBe(true);
    expect(statValues.some((value) => value.indicatorId === "population_total")).toBe(false);
  });
});
