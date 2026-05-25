import { describe, expect, it } from "vitest";
import { buildFedstatPostBody, parseFedstatSdmx } from "../src/server/fedstat";

describe("buildFedstatPostBody", () => {
  it("uses exact Fedstat filter ids without resolving fuzzy names", () => {
    const body = buildFedstatPostBody({
      fedstatIndicatorId: "37426",
      title: "Точный показатель",
      selectedFilterIds: ["0_37426", "1_2024", "2_Республика Башкортостан"],
      filterObjectIds: {
        lineObjectIds: "1",
        columnObjectIds: "2",
        filterObjectIds: "0"
      }
    });

    expect(body.get("id")).toBe("37426");
    expect(body.get("indicator_title")).toBe("Точный показатель");
    expect(body.getAll("selectedFilterIds")).toEqual(["0_37426", "1_2024", "2_Республика Башкортостан"]);
    expect(body.get("lineObjectIds")).toBe("1");
    expect(body.get("columnObjectIds")).toBe("2");
    expect(body.get("filterObjectIds")).toBe("0");
  });
});

describe("parseFedstatSdmx", () => {
  it("maps SDMX observations to local statistic values with source dimensions preserved", () => {
    const sdmx = `
      <message:GenericData xmlns:message="http://www.sdmx.org/resources/sdmxml/schemas/v2_1/message" xmlns:generic="http://www.sdmx.org/resources/sdmxml/schemas/v2_1/data/generic">
        <message:DataSet>
          <generic:Series>
            <generic:SeriesKey>
              <generic:Value id="municipality" value="Уфа" />
              <generic:Value id="year" value="2024" />
            </generic:SeriesKey>
            <generic:Obs>
              <generic:ObsValue value="1144000" />
            </generic:Obs>
          </generic:Series>
          <generic:Series>
            <generic:SeriesKey>
              <generic:Value id="municipality" value="Белорецкий район" />
              <generic:Value id="year" value="2024" />
            </generic:SeriesKey>
            <generic:Obs>
              <generic:ObsValue value="101200" />
            </generic:Obs>
          </generic:Series>
        </message:DataSet>
      </message:GenericData>
    `;

    const parsed = parseFedstatSdmx(sdmx, {
      sourceId: "fedstat",
      localIndicatorId: "population_total",
      municipalityDimension: "municipality",
      yearDimension: "year",
      districtAliases: {
        "Уфа": "ufa",
        "Белорецкий район": "beloretsk"
      }
    });

    expect(parsed.values).toEqual([
      { districtId: "ufa", indicatorId: "population_total", year: 2024, value: 1144000, sourceId: "fedstat" },
      { districtId: "beloretsk", indicatorId: "population_total", year: 2024, value: 101200, sourceId: "fedstat" }
    ]);
    expect(parsed.warnings).toEqual([]);
  });
});
