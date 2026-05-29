import { fedstatCatalog } from "../src/data/fedstatCatalog.ts";
import { fetchFedstatLive } from "../src/server/fedstatLive.ts";

const entry = fedstatCatalog[0];
const year = Number(process.argv[2] ?? 2024);

console.log(`Fetching ${entry.catalogId} for ${year}...`);
const payload = await fetchFedstatLive(entry, year);
console.log(`OK rows=${payload.ranking.length} fetchedAt=${payload.fetchedAt}`);
console.log(
  "Bashkortostan:",
  payload.ranking.find((row) => row.districtName.toLowerCase().includes("башкортостан"))
);
console.log("Top 3:", payload.ranking.slice(0, 3));
