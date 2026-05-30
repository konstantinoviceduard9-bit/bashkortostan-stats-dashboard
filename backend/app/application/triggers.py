"""Пороговые триггеры по ключевым KPI."""

from dataclasses import dataclass
from typing import Literal

TriggerStatus = Literal["ok", "watch", "triggered", "unknown"]


@dataclass(frozen=True)
class TriggerRule:
    code: str
    kpi_code: str
    direction: Literal["above", "below"]
    watch_at: float
    trigger_at: float
    valid_min: float | None = None
    valid_max: float | None = None


TRIGGER_RULES: tuple[TriggerRule, ...] = (
    TriggerRule("trg_unemployment", "unemployment", "above", 5, 8, 0, 100),
    TriggerRule("trg_budget", "budget_security", "below", 85, 70, 0, 200),
    TriggerRule("trg_natural_growth", "natural_growth", "below", 0, -50),
    TriggerRule("trg_doctors", "doctors_per_capita", "below", 22, 18, 0, 100),
    TriggerRule("trg_salary", "average_salary", "below", 55_000, 45_000, 10_000, 500_000),
    TriggerRule("trg_housing", "housing_commissioned", "below", 8_000, 3_000, 0, 1_000_000),
)

TRIGGER_LABELS: dict[str, tuple[str, str]] = {
    "trg_unemployment": ("Высокая безработица", "Уровень безработицы превышает порог"),
    "trg_budget": ("Бюджетная обеспеченность", "Показатель ниже установленного порога"),
    "trg_natural_growth": ("Естественная убыль", "Отрицательный или низкий прирост населения"),
    "trg_doctors": ("Дефицит врачей", "Обеспеченность медперсоналом ниже нормы"),
    "trg_salary": ("Низкая зарплата", "Средняя зарплата ниже контрольного уровня"),
    "trg_housing": ("Малый ввод жилья", "Объём введённого жилья ниже порога"),
}


def _in_range(value: float, rule: TriggerRule) -> bool:
    if rule.valid_min is not None and value < rule.valid_min:
        return False
    if rule.valid_max is not None and value > rule.valid_max:
        return False
    return True


def evaluate_status(rule: TriggerRule, value: float | None) -> TriggerStatus:
    if value is None:
        return "unknown"
    if not _in_range(value, rule):
        return "unknown"
    if rule.direction == "above":
        if value >= rule.trigger_at:
            return "triggered"
        if value >= rule.watch_at:
            return "watch"
        return "ok"
    if value <= rule.trigger_at:
        return "triggered"
    if value <= rule.watch_at:
        return "watch"
    return "ok"


def build_triggers(kpis: list[dict]) -> list[dict]:
    by_code = {k["code"]: k for k in kpis}
    result: list[dict] = []
    for rule in TRIGGER_RULES:
        kpi = by_code.get(rule.kpi_code, {})
        name, description = TRIGGER_LABELS.get(rule.code, (rule.code, ""))
        value = kpi.get("value")
        is_live = bool(kpi.get("is_live") and value is not None)
        result.append(
            {
                "code": rule.code,
                "kpi_code": rule.kpi_code,
                "name": name,
                "description": description,
                "value": value,
                "unit": kpi.get("unit") or "—",
                "status": evaluate_status(rule, value),
                "watch_at": rule.watch_at,
                "trigger_at": rule.trigger_at,
                "direction": rule.direction,
                "is_live": is_live,
            }
        )
    return result
