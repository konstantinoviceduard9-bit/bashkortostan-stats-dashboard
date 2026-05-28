import { describe, expect, it } from "vitest";
import { staticData } from "../src/client/staticData";
import { bdmoSnapshotValues } from "../src/data/bdmoSnapshot";

describe("static BDMO data", () => {
  it("keeps only hot BDMO years in the bundled snapshot", () => {
    expect(bdmoSnapshotValues.length).toBeGreaterThan(0);
    expect(bdmoSnapshotValues.every((value) => value.year >= 2024)).toBe(true);
    expect(staticData.years).toContain(2024);
    expect(staticData.years).toContain(2025);
    expect(staticData.years).not.toContain(2023);
  });

  it("lists only indicators that have values for the selected year", () => {
    const available2026 = (staticData as any).getAvailableIndicatorIds(2026);

    expect(available2026).toContain("opendata_health_23_count");
    expect(available2026).not.toContain("bdmo_y48006001");
  });

  it("filters static groups and indicators by selected year", () => {
    expect((staticData as any).getIndicatorGroups(2026).map((group: { id: string }) => group.id)).toEqual([
      "opendata_health_2026"
    ]);
    expect((staticData as any).getIndicators(undefined, 2026).every((indicator: { id: string }) => indicator.id.startsWith("opendata_health_"))).toBe(true);
  });
});
