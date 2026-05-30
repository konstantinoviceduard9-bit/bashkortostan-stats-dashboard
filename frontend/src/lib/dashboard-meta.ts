import type { LucideIcon } from "lucide-react";
import { BarChart3, CloudUpload, Database, Globe2, Landmark, LineChart } from "lucide-react";

export type SourceStatus = "live" | "demo" | "skipped" | "empty" | "failed" | "manual" | "not_run";

export const SOURCE_LABELS: Record<string, string> = {
  demo: "Демо",
  catalog: "Справочник",
  bdmo_tochno: "БД ПМО",
  opendata_rb: "Opendata РБ",
  rosstat_bdpmo: "Росстат",
  minfin_rb: "Минфин РБ",
  emiss: "ЕМИСС",
  manual_csv: "CSV",
  gas_manual: "ГАС",
};

export const CONNECTOR_META: Record<
  string,
  { icon: LucideIcon; color: string; description: string }
> = {
  bdmo_tochno: {
    icon: Database,
    color: "from-bashkir-blue/20 to-bashkir-blue/5 text-bashkir-blue",
    description: "Муниципальная статистика tochno.st",
  },
  opendata_rb: {
    icon: Globe2,
    color: "from-emerald-500/20 to-emerald-500/5 text-emerald-700",
    description: "Открытые данные Республики",
  },
  rosstat_bdpmo: {
    icon: BarChart3,
    color: "from-violet-500/20 to-violet-500/5 text-violet-700",
    description: "Официальная БД ПМО Росстата",
  },
  minfin_rb: {
    icon: Landmark,
    color: "from-amber-500/20 to-amber-500/5 text-amber-800",
    description: "Бюджетные отчёты Минфина",
  },
  emiss: {
    icon: LineChart,
    color: "from-sky-500/20 to-sky-500/5 text-sky-700",
    description: "ЕМИСС / Башкортостанстат",
  },
  gas_manual: {
    icon: CloudUpload,
    color: "from-orange-500/20 to-orange-500/5 text-orange-700",
    description: "Ручная загрузка CSV",
  },
};

export const KPI_CHART_LABELS: Record<string, string> = {
  budget_security: "Бюджет",
  unemployment: "Безработ.",
  average_salary: "Зарплата",
  natural_growth: "Прирост",
  doctors_per_capita: "Врачи",
  housing_commissioned: "Жильё",
};
