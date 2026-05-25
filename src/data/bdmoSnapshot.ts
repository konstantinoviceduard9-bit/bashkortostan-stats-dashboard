import type { Indicator, IndicatorGroup, StatValue } from "../shared/types";

export const bdmoSnapshotGroups: IndicatorGroup[] = [
  {
    id: "bdmo_6_territoriya",
    name: "6. Территория",
    description: "Официальный раздел БД ПМО Росстата: Территория"
  }
];

export const bdmoSnapshotIndicators: Indicator[] = [
  {
    id: "bdmo_y48006001",
    groupId: "bdmo_6_territoriya",
    name: "Общая площадь земель муниципального образования",
    unit: "Гектар",
    description: "БД ПМО Росстата, обработка tochno.st, раздел 6 Территория, показатель Y48006001",
    rankDirection: "desc",
    sourceId: "bdmo_rosstat",
    sourceIndicatorId: "Y48006001"
  }
];

export const bdmoSnapshotValues: StatValue[] = [
  { districtId: "abzelilovsky", indicatorId: "bdmo_y48006001", year: 2023, value: 428891, sourceId: "bdmo_rosstat" },
  { districtId: "alsheevsky", indicatorId: "bdmo_y48006001", year: 2023, value: 241142, sourceId: "bdmo_rosstat" },
  { districtId: "arkhangelsky", indicatorId: "bdmo_y48006001", year: 2023, value: 242145, sourceId: "bdmo_rosstat" },
  { districtId: "askinsky", indicatorId: "bdmo_y48006001", year: 2023, value: 254209, sourceId: "bdmo_rosstat" },
  { districtId: "aurgazinsky", indicatorId: "bdmo_y48006001", year: 2023, value: 201403, sourceId: "bdmo_rosstat" },
  { districtId: "baymaksky", indicatorId: "bdmo_y48006001", year: 2023, value: 563055, sourceId: "bdmo_rosstat" },
  { districtId: "bakalinsky", indicatorId: "bdmo_y48006001", year: 2023, value: 195081, sourceId: "bdmo_rosstat" },
  { districtId: "baltachevsky", indicatorId: "bdmo_y48006001", year: 2023, value: 159832, sourceId: "bdmo_rosstat" },
  { districtId: "belebeyevsky", indicatorId: "bdmo_y48006001", year: 2023, value: 191115, sourceId: "bdmo_rosstat" },
  { districtId: "belokataysky", indicatorId: "bdmo_y48006001", year: 2023, value: 303739, sourceId: "bdmo_rosstat" },
  { districtId: "beloretsk", indicatorId: "bdmo_y48006001", year: 2023, value: 1134577, sourceId: "bdmo_rosstat" },
  { districtId: "bizhbulyaksky", indicatorId: "bdmo_y48006001", year: 2023, value: 213390, sourceId: "bdmo_rosstat" },
  { districtId: "birsk", indicatorId: "bdmo_y48006001", year: 2023, value: 178649, sourceId: "bdmo_rosstat" },
  { districtId: "blagovarsky", indicatorId: "bdmo_y48006001", year: 2023, value: 168815, sourceId: "bdmo_rosstat" },
  { districtId: "blagoveshchensky", indicatorId: "bdmo_y48006001", year: 2023, value: 232390, sourceId: "bdmo_rosstat" },
  { districtId: "buzdyaksky", indicatorId: "bdmo_y48006001", year: 2023, value: 163280, sourceId: "bdmo_rosstat" },
  { districtId: "buraevsky", indicatorId: "bdmo_y48006001", year: 2023, value: 179226, sourceId: "bdmo_rosstat" },
  { districtId: "burzyansky", indicatorId: "bdmo_y48006001", year: 2023, value: 444381, sourceId: "bdmo_rosstat" },
  { districtId: "gafuriysky", indicatorId: "bdmo_y48006001", year: 2023, value: 303802, sourceId: "bdmo_rosstat" },
  { districtId: "davlekanovsky", indicatorId: "bdmo_y48006001", year: 2023, value: 190731.2, sourceId: "bdmo_rosstat" },
  { districtId: "duvansky", indicatorId: "bdmo_y48006001", year: 2023, value: 324315, sourceId: "bdmo_rosstat" },
  { districtId: "dyurtyulinsky", indicatorId: "bdmo_y48006001", year: 2023, value: 169420, sourceId: "bdmo_rosstat" },
  { districtId: "ermekeyevsky", indicatorId: "bdmo_y48006001", year: 2023, value: 143663, sourceId: "bdmo_rosstat" },
  { districtId: "zianchurinsky", indicatorId: "bdmo_y48006001", year: 2023, value: 334235, sourceId: "bdmo_rosstat" },
  { districtId: "zilairsky", indicatorId: "bdmo_y48006001", year: 2023, value: 577399, sourceId: "bdmo_rosstat" },
  { districtId: "iglinsky", indicatorId: "bdmo_y48006001", year: 2023, value: 245588, sourceId: "bdmo_rosstat" },
  { districtId: "ilishevsky", indicatorId: "bdmo_y48006001", year: 2023, value: 197355, sourceId: "bdmo_rosstat" },
  { districtId: "ishimbay", indicatorId: "bdmo_y48006001", year: 2023, value: 410606, sourceId: "bdmo_rosstat" },
  { districtId: "kaltasinsky", indicatorId: "bdmo_y48006001", year: 2023, value: 151870, sourceId: "bdmo_rosstat" },
  { districtId: "karaidelsky", indicatorId: "bdmo_y48006001", year: 2023, value: 378578, sourceId: "bdmo_rosstat" },
  { districtId: "karmaskalinsky", indicatorId: "bdmo_y48006001", year: 2023, value: 175088, sourceId: "bdmo_rosstat" },
  { districtId: "kiginsky", indicatorId: "bdmo_y48006001", year: 2023, value: 168836, sourceId: "bdmo_rosstat" },
  { districtId: "krasnokamsky", indicatorId: "bdmo_y48006001", year: 2023, value: 159492, sourceId: "bdmo_rosstat" },
  { districtId: "kugarchinsky", indicatorId: "bdmo_y48006001", year: 2023, value: 337264, sourceId: "bdmo_rosstat" },
  { districtId: "kushnarenkovsky", indicatorId: "bdmo_y48006001", year: 2023, value: 171777, sourceId: "bdmo_rosstat" },
  { districtId: "kuyurgazinsky", indicatorId: "bdmo_y48006001", year: 2023, value: 223542, sourceId: "bdmo_rosstat" },
  { districtId: "meleuz", indicatorId: "bdmo_y48006001", year: 2023, value: 323221, sourceId: "bdmo_rosstat" },
  { districtId: "mechetlinsky", indicatorId: "bdmo_y48006001", year: 2023, value: 155667, sourceId: "bdmo_rosstat" },
  { districtId: "mishkinsky", indicatorId: "bdmo_y48006001", year: 2023, value: 168911, sourceId: "bdmo_rosstat" },
  { districtId: "miyakinsky", indicatorId: "bdmo_y48006001", year: 2023, value: 205128, sourceId: "bdmo_rosstat" },
  { districtId: "nurimanovsky", indicatorId: "bdmo_y48006001", year: 2023, value: 251184, sourceId: "bdmo_rosstat" },
  { districtId: "salavatsky", indicatorId: "bdmo_y48006001", year: 2023, value: 218222, sourceId: "bdmo_rosstat" },
  { districtId: "sterlibashevsky", indicatorId: "bdmo_y48006001", year: 2023, value: 160875, sourceId: "bdmo_rosstat" },
  { districtId: "sterlitamaksky", indicatorId: "bdmo_y48006001", year: 2023, value: 221982, sourceId: "bdmo_rosstat" },
  { districtId: "tatyshlinsky", indicatorId: "bdmo_y48006001", year: 2023, value: 137615, sourceId: "bdmo_rosstat" },
  { districtId: "tuymazy", indicatorId: "bdmo_y48006001", year: 2023, value: 240352, sourceId: "bdmo_rosstat" },
  { districtId: "ufimsky", indicatorId: "bdmo_y48006001", year: 2023, value: 159870, sourceId: "bdmo_rosstat" },
  { districtId: "uchaly", indicatorId: "bdmo_y48006001", year: 2023, value: 455300, sourceId: "bdmo_rosstat" },
  { districtId: "fedorovsky", indicatorId: "bdmo_y48006001", year: 2023, value: 169324, sourceId: "bdmo_rosstat" },
  { districtId: "khaibullinsky", indicatorId: "bdmo_y48006001", year: 2023, value: 391166, sourceId: "bdmo_rosstat" },
  { districtId: "chekmagushevsky", indicatorId: "bdmo_y48006001", year: 2023, value: 168616, sourceId: "bdmo_rosstat" },
  { districtId: "chishminsky", indicatorId: "bdmo_y48006001", year: 2023, value: 182377, sourceId: "bdmo_rosstat" },
  { districtId: "sharansky", indicatorId: "bdmo_y48006001", year: 2023, value: 138420, sourceId: "bdmo_rosstat" },
  { districtId: "yanaulsky", indicatorId: "bdmo_y48006001", year: 2023, value: 209381, sourceId: "bdmo_rosstat" },
  { districtId: "agidel", indicatorId: "bdmo_y48006001", year: 2023, value: 6650, sourceId: "bdmo_rosstat" },
  { districtId: "kumertau", indicatorId: "bdmo_y48006001", year: 2023, value: 16960, sourceId: "bdmo_rosstat" },
  { districtId: "mezhgorye", indicatorId: "bdmo_y48006001", year: 2023, value: 22078, sourceId: "bdmo_rosstat" },
  { districtId: "neftekamsk", indicatorId: "bdmo_y48006001", year: 2023, value: 14725, sourceId: "bdmo_rosstat" },
  { districtId: "oktyabrsky", indicatorId: "bdmo_y48006001", year: 2023, value: 9883, sourceId: "bdmo_rosstat" },
  { districtId: "salavat", indicatorId: "bdmo_y48006001", year: 2023, value: 10623, sourceId: "bdmo_rosstat" },
  { districtId: "sibay", indicatorId: "bdmo_y48006001", year: 2023, value: 15431, sourceId: "bdmo_rosstat" },
  { districtId: "sterlitamak", indicatorId: "bdmo_y48006001", year: 2023, value: 11030, sourceId: "bdmo_rosstat" },
  { districtId: "ufa", indicatorId: "bdmo_y48006001", year: 2023, value: 70800, sourceId: "bdmo_rosstat" }
];
