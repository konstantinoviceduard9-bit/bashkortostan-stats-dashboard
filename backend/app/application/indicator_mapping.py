"""Сопоставление кодов внешних источников с KPI дашборда."""

from __future__ import annotations

import json
import re
from functools import lru_cache
from pathlib import Path

from app.domain.entities import UnifiedObservation

MAP_PATH = Path(__file__).resolve().parents[2] / "data" / "bdmo_kpi_map.json"

NAME_PATTERNS: list[tuple[re.Pattern[str], str, str]] = [
    (re.compile(r"общая площадь жилых помещений$", re.I), "housing_commissioned", "Общая площадь жилых помещений"),
    (
        re.compile(r"инвестиции в основной капитал за счет средств местных бюджетов", re.I),
        "budget_security",
        "Бюджетные инвестиции",
    ),
    (re.compile(r"среднемесячн.*заработ", re.I), "average_salary", "Средняя зарплата"),
    (re.compile(r"уровень безработ", re.I), "unemployment", "Безработица"),
    (re.compile(r"естественн.*прирост", re.I), "natural_growth", "Естественный прирост"),
    (re.compile(r"обеспеченность.*врач", re.I), "doctors_per_capita", "Обеспеченность врачами"),
    (re.compile(r"численность врач", re.I), "doctors_per_capita", "Численность врачей"),
]


@lru_cache
def _load_bdmo_map() -> dict[str, tuple[str, str]]:
    if not MAP_PATH.exists():
        return {}
    payload = json.loads(MAP_PATH.read_text(encoding="utf-8"))
    result: dict[str, tuple[str, str]] = {}
    for code, item in payload.items():
        result[code] = (item["kpi"], item["name"])
    return result


def _with_bdmo_metadata(observation: UnifiedObservation, code: str, kpi_code: str, kpi_name: str) -> UnifiedObservation:
    return UnifiedObservation(
        indicator_code=kpi_code,
        indicator_name=kpi_name,
        value=observation.value,
        unit=observation.unit,
        period=observation.period,
        oktmo=observation.oktmo,
        source=observation.source,
        category=observation.category,
        metadata={**(observation.metadata or {}), "bdmo_code": code},
    )


def map_observation(observation: UnifiedObservation) -> UnifiedObservation:
    if observation.source != "bdmo_tochno":
        return observation

    bdmo_map = _load_bdmo_map()
    mapped = bdmo_map.get(observation.indicator_code)
    if mapped:
        kpi_code, kpi_name = mapped
        return _with_bdmo_metadata(observation, observation.indicator_code, kpi_code, kpi_name)

    for pattern, code, name in NAME_PATTERNS:
        if pattern.search(observation.indicator_name):
            return _with_bdmo_metadata(observation, observation.indicator_code, code, name)

    return observation
