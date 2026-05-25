import { describe, expect, it } from "vitest";
import { staticData } from "../src/client/staticData";
import { sources } from "../src/data/seed";

describe("2026 operational open data", () => {
  it("includes current-year operational indicators from Bashkortostan open data", () => {
    expect(staticData.years).toContain(2026);
    expect(sources.some((source) => source.id === "bashkortostan_open_data")).toBe(true);

    const ranking = staticData.getRanking("opendata_health_26_count", 2026);
    const ufa = ranking.find((row) => row.districtId === "ufa");

    expect(ufa?.sourceId).toBe("bashkortostan_open_data");
    expect(ufa?.value).toBeGreaterThan(0);
  });
});
