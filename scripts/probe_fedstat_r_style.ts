import {
  buildFedstatPostBodyFromDataIds,
  filterFedstatDataIds,
  parseFedstatDataIdsFromHtml
} from "../src/server/fedstatDataIds.ts";
import { fetchIndicatorHtml } from "../src/server/fedstatLive.ts";

const indicatorId = process.argv[2] ?? "31074";
const html = await fetchIndicatorHtml(indicatorId);
const dataIds = parseFedstatDataIdsFromHtml(html);

const variants: Array<{ name: string; filters: Record<string, string | string[]> }> = [
  {
    name: "russia-dec2024-fedstatAPIr-style",
    filters: {
      Показатель: "Индексы потребительских цен на товары и услуги",
      "Единица измерения": "процент",
      "Классификатор объектов административно-территориального деления (ОКАТО)": "Российская Федерация",
      "Виды показателя": "К соответствующему периоду предыдущего года",
      Период: "декабрь",
      Год: "2024",
      "Виды товаров и услуг": "Все товары и услуги"
    }
  },
  {
    name: "bashkortostan-dec2024",
    filters: {
      Показатель: "Индексы потребительских цен на товары и услуги",
      "Единица измерения": "процент",
      "Классификатор объектов административно-территориального деления (ОКАТО)": "Республика Башкортостан",
      "Виды показателя": "К соответствующему периоду предыдущего года",
      Период: "декабрь",
      Год: "2024",
      "Виды товаров и услуг": "Все товары и услуги"
    }
  },
  {
    name: "okato-star-dec2024",
    filters: {
      Показатель: "Индексы потребительских цен на товары и услуги",
      "Единица измерения": "процент",
      "Классификатор объектов административно-территориального деления (ОКАТО)": "*",
      "Виды показателя": "К соответствующему периоду предыдущего года",
      Период: "декабрь",
      Год: "2024",
      "Виды товаров и услуг": "Все товары и услуги"
    }
  }
];

for (const variant of variants) {
  const selected = filterFedstatDataIds(dataIds, variant.filters);
  const indicatorRow = selected.find((row) => row.filterFieldId === "0");
  const body = buildFedstatPostBodyFromDataIds(
    dataIds,
    selected,
    indicatorRow?.filterValueTitle ?? "probe"
  );

  console.log(`\n=== ${variant.name} (${selected.length} rows) ===`);
  console.log(body.toString());

  const response = await fetch("https://www.fedstat.ru/indicator/data.do?format=sdmx", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36",
      "Accept-Language": "ru-RU,ru;q=0.9",
      Referer: `https://www.fedstat.ru/indicator/${indicatorId}`
    },
    body
  });

  const text = await response.text();
  console.log(
    "status",
    response.status,
    "ctype",
    response.headers.get("content-type"),
    "len",
    text.length,
    "is_sdmx",
    text.includes("GenericData") || text.includes("Series"),
    "bash",
    text.includes("Башкортостан")
  );
}
