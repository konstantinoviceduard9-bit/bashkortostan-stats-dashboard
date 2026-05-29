import { fedstatCatalog, fedstatLiveGroup, FEDSTAT_LIVE_GROUP_ID } from "./fedstatCatalog";
import opendataCatalog from "./opendataCatalog.json";
import type { Indicator, IndicatorGroup } from "../shared/types";

export const OPENDATA_LIVE_GROUP_ID = "opendata_live_2026";

export const opendataLiveGroup: IndicatorGroup = {
  id: OPENDATA_LIVE_GROUP_ID,
  name: "Открытые данные РБ (live)",
  description: "Прямая загрузка CSV с opendata.sf2.simai.ru при каждом запросе (кэш 5 минут)."
};

export interface LiveCatalogMeta {
  catalogId: string;
  source: "fedstat" | "opendata";
  groupId: string;
  indicatorId: string;
  name: string;
  unit: string;
  description: string;
}

const opendataLiveIndicators: Indicator[] = (opendataCatalog as Array<{ datasetId: string; title: string }>)
  .filter((entry) => ["22", "23", "26", "27", "28", "30", "32", "33", "35"].includes(entry.datasetId))
  .map((entry) => ({
    id: `opendata_health_${entry.datasetId}_count`,
    groupId: OPENDATA_LIVE_GROUP_ID,
    name: `${entry.title}: количество объектов`,
    unit: "ед.",
    description: "Live-загрузка с портала открытых данных Республики Башкортостан",
    rankDirection: "desc" as const,
    sourceId: "bashkortostan_open_data",
    sourceIndicatorId: `health:${entry.datasetId}`
  }));

const fedstatLiveIndicators: Indicator[] = fedstatCatalog.map((entry) => ({
  id: entry.localIndicatorId,
  groupId: FEDSTAT_LIVE_GROUP_ID,
  name: entry.name,
  unit: entry.unit,
  description: entry.description,
  rankDirection: entry.rankDirection,
  sourceId: "fedstat",
  sourceIndicatorId: entry.fedstatIndicatorId
}));

export const liveIndicatorGroups: IndicatorGroup[] = [opendataLiveGroup, fedstatLiveGroup];

export const liveIndicators: Indicator[] = [...opendataLiveIndicators, ...fedstatLiveIndicators];

export const liveCatalogMeta: LiveCatalogMeta[] = [
  ...opendataLiveIndicators.map((indicator) => {
    const datasetId = indicator.sourceIndicatorId?.split(":")[1] ?? "";
    return {
      catalogId: `opendata_${datasetId}`,
      source: "opendata" as const,
      groupId: indicator.groupId,
      indicatorId: indicator.id,
      name: indicator.name,
      unit: indicator.unit,
      description: indicator.description
    };
  }),
  ...fedstatCatalog.map((entry) => ({
    catalogId: entry.catalogId,
    source: "fedstat" as const,
    groupId: FEDSTAT_LIVE_GROUP_ID,
    indicatorId: entry.localIndicatorId,
    name: entry.name,
    unit: entry.unit,
    description: entry.description
  }))
];

export function resolveLiveCatalogId(indicatorId: string, groupId: string): string | undefined {
  if (groupId === OPENDATA_LIVE_GROUP_ID) {
    const match = indicatorId.match(/^opendata_health_(\d+)_count$/);
    return match ? `opendata_${match[1]}` : undefined;
  }

  if (groupId === FEDSTAT_LIVE_GROUP_ID) {
    return fedstatCatalog.find((entry) => entry.localIndicatorId === indicatorId)?.catalogId;
  }

  return undefined;
}

export function isLiveGroupId(groupId: string): boolean {
  return groupId === OPENDATA_LIVE_GROUP_ID || groupId === FEDSTAT_LIVE_GROUP_ID;
}
