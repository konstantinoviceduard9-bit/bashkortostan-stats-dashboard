import { describe, expect, it, vi } from "vitest";
import { buildArchiveDataUrl, isArchiveYear, loadArchiveRanking } from "../src/client/archiveData";

describe("archive data adapter", () => {
  it("detects years that should be loaded from archive", () => {
    expect(isArchiveYear(2023)).toBe(true);
    expect(isArchiveYear(2024)).toBe(false);
    expect(isArchiveYear(2026)).toBe(false);
  });

  it("builds archive URLs by year and indicator", () => {
    expect(
      buildArchiveDataUrl({
        baseUrl: "https://example.storage/archive",
        indicatorId: "bdmo_test",
        year: 2023
      })
    ).toBe("https://example.storage/archive/2023/bdmo_test.json");
  });

  it("loads archive rankings from cloud storage", async () => {
    const fetchMock = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => [{ districtId: "ufa", rank: 1 }]
    });

    const ranking = await loadArchiveRanking({
      fetcher: fetchMock,
      baseUrl: "https://example.storage/archive/",
      indicatorId: "bdmo_test",
      year: 2023
    });

    expect(fetchMock).toHaveBeenCalledWith("https://example.storage/archive/2023/bdmo_test.json");
    expect(ranking).toEqual([{ districtId: "ufa", rank: 1 }]);
  });
});
