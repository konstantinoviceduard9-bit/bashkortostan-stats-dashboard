import type { KpiCardData } from "@/components/dashboard/KpiCard";

export type TriggerStatus = "ok" | "watch" | "triggered" | "unknown";

export interface TriggerRule {
  code: string;
  kpiCode: string;
  direction: "above" | "below";
  watchAt: number;
  triggerAt: number;
  /** Skip evaluation when value is outside plausible range (bad source data). */
  validRange?: { min: number; max: number };
}

export const TRIGGER_RULES: TriggerRule[] = [
  {
    code: "trg_unemployment",
    kpiCode: "unemployment",
    direction: "above",
    watchAt: 5,
    triggerAt: 8,
    validRange: { min: 0, max: 100 },
  },
  {
    code: "trg_budget",
    kpiCode: "budget_security",
    direction: "below",
    watchAt: 85,
    triggerAt: 70,
    validRange: { min: 0, max: 200 },
  },
  {
    code: "trg_natural_growth",
    kpiCode: "natural_growth",
    direction: "below",
    watchAt: 0,
    triggerAt: -50,
  },
  {
    code: "trg_doctors",
    kpiCode: "doctors_per_capita",
    direction: "below",
    watchAt: 22,
    triggerAt: 18,
    validRange: { min: 0, max: 100 },
  },
  {
    code: "trg_salary",
    kpiCode: "average_salary",
    direction: "below",
    watchAt: 55_000,
    triggerAt: 45_000,
    validRange: { min: 10_000, max: 500_000 },
  },
  {
    code: "trg_housing",
    kpiCode: "housing_commissioned",
    direction: "below",
    watchAt: 8_000,
    triggerAt: 3_000,
    validRange: { min: 0, max: 1_000_000 },
  },
];

export interface TriggerItem {
  code: string;
  kpi_code: string;
  name: string;
  description: string;
  value: number | null;
  unit: string;
  status: TriggerStatus;
  watch_at: number;
  trigger_at: number;
  direction: "above" | "below";
  is_live: boolean;
}

export interface TriggerLabels {
  name: string;
  description: string;
}

function inRange(value: number, range?: { min: number; max: number }): boolean {
  if (!range) return true;
  return value >= range.min && value <= range.max;
}

export function evaluateTriggerStatus(
  rule: TriggerRule,
  value: number | null | undefined,
): TriggerStatus {
  if (value === null || value === undefined) return "unknown";
  if (!inRange(value, rule.validRange)) return "unknown";

  if (rule.direction === "above") {
    if (value >= rule.triggerAt) return "triggered";
    if (value >= rule.watchAt) return "watch";
    return "ok";
  }

  if (value <= rule.triggerAt) return "triggered";
  if (value <= rule.watchAt) return "watch";
  return "ok";
}

export function buildTriggers(
  kpis: KpiCardData[],
  labels: Record<string, TriggerLabels>,
): TriggerItem[] {
  const byCode = new Map(kpis.map((kpi) => [kpi.code, kpi]));

  return TRIGGER_RULES.map((rule) => {
    const kpi = byCode.get(rule.kpiCode);
    const meta = labels[rule.code];
    return {
      code: rule.code,
      kpi_code: rule.kpiCode,
      name: meta?.name ?? kpi?.name ?? rule.code,
      description: meta?.description ?? "",
      value: kpi?.value ?? null,
      unit: kpi?.unit ?? "—",
      status: evaluateTriggerStatus(rule, kpi?.value),
      watch_at: rule.watchAt,
      trigger_at: rule.triggerAt,
      direction: rule.direction,
      is_live: Boolean(kpi?.is_live && kpi.value !== null),
    };
  });
}

export function countByStatus(triggers: TriggerItem[]): { triggered: number; watch: number; ok: number } {
  return triggers.reduce(
    (acc, item) => {
      if (item.status === "triggered") acc.triggered += 1;
      else if (item.status === "watch") acc.watch += 1;
      else if (item.status === "ok") acc.ok += 1;
      return acc;
    },
    { triggered: 0, watch: 0, ok: 0 },
  );
}
