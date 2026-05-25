import { describe, expect, it } from "vitest";
import { staticData } from "../src/client/staticData";

describe("static BDMO data", () => {
  it("uses official BDMO snapshot values for GitHub Pages rankings", () => {
    const ranking = staticData.getRanking("bdmo_y48006001", 2023);
    const abzelilovsky = ranking.find((row) => row.districtId === "abzelilovsky");

    expect(abzelilovsky).toMatchObject({
      value: 428891,
      sourceId: "bdmo_rosstat"
    });
  });
});
