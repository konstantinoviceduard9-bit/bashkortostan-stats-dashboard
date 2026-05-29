export type FedstatScope = "regional" | "municipal";

export interface FedstatFilterObjectIds {
  lineObjectIds: string;
  columnObjectIds: string;
  filterObjectIds: string;
}

export interface FedstatCatalogEntry {
  catalogId: string;
  name: string;
  description: string;
  unit: string;
  scope: FedstatScope;
  fedstatIndicatorId: string;
  localIndicatorId: string;
  regionDimension: string;
  yearDimension: string;
  yearFilterTitle: string;
  defaultFilters: Record<string, string | string[]>;
  filterObjectIds: FedstatFilterObjectIds;
  districtAliases: Record<string, string>;
  rankDirection: "asc" | "desc" | "neutral";
}

/** Каталог показателей Fedstat для live-загрузки (ЕМИСС). */
export const fedstatCatalog: FedstatCatalogEntry[] = [
  {
    catalogId: "cpi_okato_regions",
    name: "ИПЦ: субъекты РФ (к периоду предыдущего года)",
    description:
      "Индекс потребительских цен по субъектам Российской Федерации, Fedstat 31074. Сравнение регионов, в том числе Республика Башкортостан.",
    unit: "%",
    scope: "regional",
    fedstatIndicatorId: "31074",
    localIndicatorId: "fedstat_cpi_regions",
    regionDimension: "Классификатор объектов административно-территориального деления (ОКАТО)",
    yearDimension: "Год",
    yearFilterTitle: "Год",
    defaultFilters: {
      Показатель: "Индексы потребительских цен на товары и услуги",
      "Единица измерения": "процент",
      Период: "декабрь",
      "Виды показателя": "К соответствующему периоду предыдущего года",
      "Виды товаров и услуг": "Все товары и услуги",
      "Классификатор объектов административно-территориального деления (ОКАТО)": "*"
    },
    filterObjectIds: {
      lineObjectIds: "57831",
      columnObjectIds: "3",
      filterObjectIds: "30611"
    },
    districtAliases: {
      "Республика Башкортостан": "resp-bashkortostan",
      "Российская Федерация": "russia"
    },
    rankDirection: "neutral"
  }
];

export const FEDSTAT_LIVE_GROUP_ID = "fedstat_live";

export const fedstatLiveGroup = {
  id: FEDSTAT_LIVE_GROUP_ID,
  name: "Федстат / ЕМИСС (live)",
  description: "Данные загружаются напрямую с fedstat.ru при открытии дашборда (кэш 5 минут на сервере)."
};

export function getFedstatCatalogEntry(catalogId: string): FedstatCatalogEntry | undefined {
  return fedstatCatalog.find((entry) => entry.catalogId === catalogId);
}
