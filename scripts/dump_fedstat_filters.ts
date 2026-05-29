import { fetchIndicatorHtml, getCachedDataIds } from "../src/server/fedstatLive.ts";

const indicatorId = process.argv[2] ?? "31074";

const table = await getCachedDataIds(indicatorId);
const titles = [...new Set(table.rows.map((row) => row.filterFieldTitle))];

console.log(`Indicator ${indicatorId} filter fields:`);
for (const title of titles) {
  const values = table.rows.filter((row) => row.filterFieldTitle === title).slice(0, 5);
  console.log(`- ${title} (${values.length}+ values), sample:`, values.map((v) => v.filterValueTitle).join("; "));
}
