import type { District, ImportRun, Indicator, IndicatorGroup, Source, StatValue } from "../shared/types";
import { bdmoSnapshotGroups, bdmoSnapshotIndicators, bdmoSnapshotValues } from "./bdmoSnapshot";
import { bashkortostanMunicipalities } from "./bashkortostanMunicipalities";
import {
  operationalSnapshotGroups,
  operationalSnapshotIndicators,
  operationalSnapshotValues
} from "./operationalSnapshot";

export const districts: District[] = bashkortostanMunicipalities;

export const indicatorGroups: IndicatorGroup[] = [...operationalSnapshotGroups, ...bdmoSnapshotGroups];

export const indicators: Indicator[] = [...operationalSnapshotIndicators, ...bdmoSnapshotIndicators];

export const sources: Source[] = [
  {
    id: "fedstat",
    name: "Федстат / ЕМИСС",
    publisher: "Единая межведомственная информационно-статистическая система",
    url: "https://www.fedstat.ru/",
    format: "json",
    publishedAt: "2026-05-25"
  },
  {
    id: "bdmo_rosstat",
    name: "БД ПМО Росстата",
    publisher: "Федеральная служба государственной статистики",
    url: "https://rosstat.gov.ru/free_doc/new_site/bd_munst/munst.htm",
    format: "csv",
    publishedAt: "2025-09-25"
  },
  {
    id: "rosstat",
    name: "Росстат",
    publisher: "Федеральная служба государственной статистики",
    url: "https://rosstat.gov.ru/",
    format: "csv",
    publishedAt: "2025-12-31"
  },
  {
    id: "bashstat",
    name: "Башкортостанстат",
    publisher: "Территориальный орган Росстата по Республике Башкортостан",
    url: "https://02.rosstat.gov.ru/",
    format: "csv",
    publishedAt: "2025-12-31"
  },
  {
    id: "budget_open_data",
    name: "Открытые бюджетные данные",
    publisher: "Официальные открытые данные Республики Башкортостан",
    url: "https://data.bashkortostan.ru/",
    format: "json",
    publishedAt: "2025-12-31"
  },
  {
    id: "bashkortostan_open_data",
    name: "Портал открытых данных Республики Башкортостан",
    publisher: "Официальные открытые данные Республики Башкортостан",
    url: "https://opendata.sf2.simai.ru/",
    format: "csv",
    publishedAt: "2026-01-28"
  }
];

export const statValues: StatValue[] = [...operationalSnapshotValues, ...bdmoSnapshotValues];

export const importRuns: ImportRun[] = [
  {
    id: "bdmo-hot-snapshot-2024-2025",
    sourceId: "bdmo_rosstat",
    status: "success",
    startedAt: "2026-05-25T08:00:00.000Z",
    finishedAt: "2026-05-25T08:00:02.000Z",
    updatedRows: bdmoSnapshotValues.length,
    warnings: [],
    errors: []
  },
  {
    id: "operational-health-2026",
    sourceId: "bashkortostan_open_data",
    status: "success",
    startedAt: "2026-05-25T15:30:00.000Z",
    finishedAt: "2026-05-25T15:30:02.000Z",
    updatedRows: operationalSnapshotValues.length,
    warnings: [],
    errors: []
  }
];
