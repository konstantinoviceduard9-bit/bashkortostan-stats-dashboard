import { describe, expect, it } from "vitest";
import { buildDefaultFedstatSelection, parseFedstatDataIdsFromHtml } from "../src/server/fedstatDataIds";

const SAMPLE_SCRIPT = `
filters: {
  0: {
    title: 'Показатель',
    all: true,
    values: { '31074': { title: 'ИПЦ' } },
    indicator: true
  },
  3: {
    title: 'Год',
    all: true,
    values: { '2024': { title: '2024' }, '2023': { title: '2023' } },
    indicator: false
  },
  57831: {
    title: 'ОКАТО',
    all: true,
    values: { '80': { title: 'Республика Башкортостан' } },
    indicator: false
  },
},
left_columns: [57831],
top_columns: [3],
filterObjectIds: [0],
grid.init();
`;

describe("fedstatDataIds", () => {
  it("parses filter ids from indicator page script", () => {
    const html = `<html><body><script>${SAMPLE_SCRIPT}</script></body></html>`;
    const table = parseFedstatDataIdsFromHtml(html);

    expect(table.layout.lineObjectIds).toBe("57831");
    expect(table.rows.some((row) => row.filterValueTitle === "Республика Башкортостан")).toBe(true);
  });

  it("builds default selection with overrides", () => {
    const html = `<html><body><script>${SAMPLE_SCRIPT}</script></body></html>`;
    const table = parseFedstatDataIdsFromHtml(html);
    const selected = buildDefaultFedstatSelection(table, { Год: "2024", ОКАТО: "Республика Башкортостан" });

    expect(selected.some((row) => row.filterFieldTitle === "Год" && row.filterValueTitle === "2024")).toBe(true);
    expect(
      selected.some((row) => row.filterValueTitle === "Республика Башкортостан")
    ).toBe(true);
  });
});
