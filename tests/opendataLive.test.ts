import { describe, expect, it } from "vitest";

// Inline test of CSV parsing logic via exported behavior would need network;
// verify catalog mapping instead.
import { getOpendataCatalogEntry } from "../src/server/opendataLive";

describe("opendata live catalog", () => {
  it("resolves hospital dataset catalog id", () => {
    const entry = getOpendataCatalogEntry("opendata_23");
    expect(entry?.title).toContain("больниц");
    expect(entry?.csvUrl).toContain("opendata.sf2.simai.ru");
  });
});
