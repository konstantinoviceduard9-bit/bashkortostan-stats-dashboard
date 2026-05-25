import { indicators } from "../data/seed";

export const indicatorAliases: Record<string, string> = {
  ...Object.fromEntries(indicators.flatMap((indicator) => [[indicator.name, indicator.id], [indicator.id, indicator.id]])),
  "Численность населения": "population_total",
  "Среднегодовая численность постоянного населения": "population_total",
  "Число родившихся на 1000 человек населения": "birth_rate",
  "Число умерших на 1000 человек населения": "mortality_rate",
  "Среднемесячная заработная плата работников организаций": "average_salary",
  "Инвестиции в основной капитал на душу населения": "investment_per_capita",
  "Число общеобразовательных организаций": "schools_count",
  "Численность врачей на 10000 человек населения": "doctors_per_10k",
  "Налоговые и неналоговые доходы местного бюджета": "own_budget_revenue",
  "Ввод в действие жилых домов": "housing_commissioned"
};
