import { fedstatCatalog } from "../src/data/fedstatCatalog.ts";
import { buildDefaultFedstatSelection, buildFedstatPostBodyFromDataIds } from "../src/server/fedstatDataIds.ts";
import { getCachedDataIds, getFedstatSession } from "../src/server/fedstatLive.ts";

const entry = fedstatCatalog[0];
const session = getFedstatSession(entry.fedstatIndicatorId);
const dataIds = await getCachedDataIds(entry.fedstatIndicatorId);

const filters = {
  ...entry.defaultFilters,
  "Классификатор объектов административно-территориального деления (ОКАТО)": "Республика Башкортостан",
  Год: "2024"
};

const selected = buildDefaultFedstatSelection(dataIds, filters);
const body = buildFedstatPostBodyFromDataIds(dataIds, selected, entry.name);

console.log("POST body keys:", [...body.keys()]);
console.log("selectedFilterIds count:", body.getAll("selectedFilterIds").length);

for (const endpoint of [
  "https://www.fedstat.ru/indicator/data.do?format=sdmx",
  "https://www.fedstat.ru/indicator/data?format=sdmx"
]) {
  const response = await session.post(endpoint, body, `https://www.fedstat.ru/indicator/${entry.fedstatIndicatorId}`);
  const text = await response.text();
  console.log(endpoint, "status", response.status, "sdmx", text.includes("Series"), "len", text.length);
}
