import type { District, ImportRun, Indicator, IndicatorGroup, Source, StatValue } from "../shared/types";

export const districts: District[] = [
  { id: "ufa", name: "Уфа", type: "city" },
  { id: "sterlitamak", name: "Стерлитамак", type: "city" },
  { id: "salavat", name: "Салават", type: "city" },
  { id: "beloretsk", name: "Белорецкий район", type: "district" },
  { id: "birsk", name: "Бирский район", type: "district" },
  { id: "ishimbay", name: "Ишимбайский район", type: "district" },
  { id: "meleuz", name: "Мелеузовский район", type: "district" },
  { id: "tuymazy", name: "Туймазинский район", type: "district" },
  { id: "uchaly", name: "Учалинский район", type: "district" },
  { id: "yanao", name: "Янаульский район", type: "district" }
];

export const indicatorGroups: IndicatorGroup[] = [
  { id: "population", name: "Население", description: "Численность, рождаемость, смертность и миграция" },
  { id: "economy", name: "Экономика", description: "Зарплаты, занятость, инвестиции и предприятия" },
  { id: "education", name: "Образование", description: "Школы, детские сады и охват образованием" },
  { id: "health", name: "Здравоохранение", description: "Медицинская инфраструктура и социальные показатели" },
  { id: "budget", name: "Бюджет", description: "Муниципальные доходы, расходы и собственные поступления" },
  { id: "housing", name: "ЖКХ и строительство", description: "Жилье, благоустройство и коммунальная инфраструктура" }
];

export const indicators: Indicator[] = [
  {
    id: "population_total",
    groupId: "population",
    name: "Численность населения",
    unit: "чел.",
    description: "Постоянное население муниципального образования на конец года",
    rankDirection: "desc"
  },
  {
    id: "birth_rate",
    groupId: "population",
    name: "Рождаемость",
    unit: "на 1000 чел.",
    description: "Коэффициент рождаемости",
    rankDirection: "desc"
  },
  {
    id: "mortality_rate",
    groupId: "population",
    name: "Смертность",
    unit: "на 1000 чел.",
    description: "Коэффициент смертности",
    rankDirection: "asc"
  },
  {
    id: "average_salary",
    groupId: "economy",
    name: "Средняя зарплата",
    unit: "руб.",
    description: "Среднемесячная начисленная заработная плата",
    rankDirection: "desc"
  },
  {
    id: "investment_per_capita",
    groupId: "economy",
    name: "Инвестиции на жителя",
    unit: "руб./чел.",
    description: "Инвестиции в основной капитал в расчете на одного жителя",
    rankDirection: "desc"
  },
  {
    id: "schools_count",
    groupId: "education",
    name: "Количество школ",
    unit: "ед.",
    description: "Число общеобразовательных организаций",
    rankDirection: "desc"
  },
  {
    id: "doctors_per_10k",
    groupId: "health",
    name: "Врачи на 10 тыс. жителей",
    unit: "чел.",
    description: "Обеспеченность врачами на 10 тысяч жителей",
    rankDirection: "desc"
  },
  {
    id: "own_budget_revenue",
    groupId: "budget",
    name: "Собственные доходы бюджета",
    unit: "млн руб.",
    description: "Налоговые и неналоговые доходы муниципального бюджета",
    rankDirection: "desc"
  },
  {
    id: "housing_commissioned",
    groupId: "housing",
    name: "Ввод жилья",
    unit: "кв. м",
    description: "Введенная общая площадь жилых домов",
    rankDirection: "desc"
  }
];

export const sources: Source[] = [
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
  }
];

const districtBase: Record<string, { population: number; salary: number; mortality: number }> = {
  ufa: { population: 1144000, salary: 82000, mortality: 12.7 },
  sterlitamak: { population: 274000, salary: 61000, mortality: 13.2 },
  salavat: { population: 148000, salary: 65000, mortality: 13.5 },
  beloretsk: { population: 101200, salary: 56000, mortality: 14.1 },
  birsk: { population: 81800, salary: 51000, mortality: 10.4 },
  ishimbay: { population: 86400, salary: 57500, mortality: 13.8 },
  meleuz: { population: 82100, salary: 53500, mortality: 12.9 },
  tuymazy: { population: 131700, salary: 59000, mortality: 11.8 },
  uchaly: { population: 72000, salary: 60500, mortality: 12.1 },
  yanao: { population: 43400, salary: 49200, mortality: 11.2 }
};

export const statValues: StatValue[] = districts.flatMap((district, index) => {
  const base = districtBase[district.id];
  const previousPopulation = Math.round(base.population * (0.992 + index * 0.001));
  return [
    { districtId: district.id, indicatorId: "population_total", year: 2023, value: previousPopulation, sourceId: "rosstat" },
    { districtId: district.id, indicatorId: "population_total", year: 2024, value: base.population, sourceId: "rosstat" },
    { districtId: district.id, indicatorId: "birth_rate", year: 2024, value: 8.4 + index * 0.18, sourceId: "bashstat" },
    { districtId: district.id, indicatorId: "mortality_rate", year: 2024, value: base.mortality, sourceId: "bashstat" },
    { districtId: district.id, indicatorId: "average_salary", year: 2023, value: Math.round(base.salary * 0.91), sourceId: "rosstat" },
    { districtId: district.id, indicatorId: "average_salary", year: 2024, value: base.salary, sourceId: "rosstat" },
    {
      districtId: district.id,
      indicatorId: "investment_per_capita",
      year: 2024,
      value: 53000 + index * 4200,
      sourceId: "rosstat"
    },
    { districtId: district.id, indicatorId: "schools_count", year: 2024, value: 18 + index * 3, sourceId: "bashstat" },
    { districtId: district.id, indicatorId: "doctors_per_10k", year: 2024, value: 19 + index * 1.6, sourceId: "bashstat" },
    {
      districtId: district.id,
      indicatorId: "own_budget_revenue",
      year: 2024,
      value: 900 + index * 140,
      sourceId: "budget_open_data"
    },
    {
      districtId: district.id,
      indicatorId: "housing_commissioned",
      year: 2024,
      value: 42000 + index * 6800,
      sourceId: "bashstat"
    }
  ];
});

export const importRuns: ImportRun[] = [
  {
    id: "seed-2024",
    sourceId: "rosstat",
    status: "success",
    startedAt: "2026-05-25T08:00:00.000Z",
    finishedAt: "2026-05-25T08:00:02.000Z",
    updatedRows: statValues.length,
    warnings: [],
    errors: []
  }
];
