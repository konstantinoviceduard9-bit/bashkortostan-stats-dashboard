import { districtAliases } from "../shared/districts";
import { indicatorAliases } from "../shared/indicators";
import { createBdmoFlatCsvUrlAdapter, createCsvUrlAdapter, type OfficialSourceAdapter } from "./importer";

export interface OfficialImportSource {
  sourceId: string;
  name: string;
  envVar: string;
  description: string;
  configured: boolean;
}

const officialImportSources = [
  {
    sourceId: "bdmo_rosstat",
    name: "БД ПМО Росстата",
    envVar: "BDMO_FLAT_CSV_URL",
    description: "Плоская CSV-выгрузка БД ПМО: регион, муниципалитет, ОКТМО, показатель, год, значение"
  },
  {
    sourceId: "rosstat",
    name: "Росстат",
    envVar: "ROSSTAT_CSV_URL",
    description: "CSV-файл с муниципальными показателями Росстата"
  },
  {
    sourceId: "bashstat",
    name: "Башкортостанстат",
    envVar: "BASHSTAT_CSV_URL",
    description: "CSV-файл территориального органа Росстата по Республике Башкортостан"
  },
  {
    sourceId: "budget_open_data",
    name: "Открытые бюджетные данные",
    envVar: "BUDGET_OPEN_DATA_CSV_URL",
    description: "CSV-файл с муниципальными бюджетными показателями"
  }
] as const;

export function listOfficialImportSources(): OfficialImportSource[] {
  return officialImportSources.map((source) => ({
    ...source,
    configured: Boolean(process.env[source.envVar])
  }));
}

export function createConfiguredOfficialAdapter(sourceId: string): OfficialSourceAdapter {
  const source = officialImportSources.find((item) => item.sourceId === sourceId);
  if (!source) {
    throw new Error(`Источник импорта не найден: ${sourceId}`);
  }

  const url = process.env[source.envVar];
  if (!url) {
    throw new Error(`Для источника ${source.name} не задана переменная ${source.envVar}`);
  }

  if (source.sourceId === "bdmo_rosstat") {
    return createBdmoFlatCsvUrlAdapter(source.sourceId, url, districtAliases, indicatorAliases);
  }

  return createCsvUrlAdapter(source.sourceId, url, districtAliases);
}
