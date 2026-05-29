"""Сопоставление кодов внешних источников с KPI дашборда."""

from __future__ import annotations

import re

from app.domain.entities import UnifiedObservation

# Коды БД ПМО (tochno.st) → код KPI на дашборде
BDMO_CODE_TO_KPI: dict[str, tuple[str, str]] = {
    "Y48008019": ("housing_commissioned", "Общая площадь жилых помещений"),
    "Y48009001": ("budget_security", "Инвестиции в основной капитал (местные бюджеты)"),
}

NAME_PATTERNS: list[tuple[re.Pattern[str], str, str]] = [
    (re.compile(r"общая площадь жилых помещений", re.I), "housing_commissioned", "Общая площадь жилых помещений"),
    (re.compile(r"инвестиции в основной капитал за счет средств местных бюджетов", re.I), "budget_security", "Бюджетные инвестиции"),
    (re.compile(r"среднемесячн.*заработ", re.I), "average_salary", "Средняя зарплата"),
    (re.compile(r"уровень безработ", re.I), "unemployment", "Безработица"),
    (re.compile(r"естественн.*прирост", re.I), "natural_growth", "Естественный прирост"),
    (re.compile(r"обеспеченность.*врач", re.I), "doctors_per_capita", "Обеспеченность врачами"),
]


def map_observation(observation: UnifiedObservation) -> UnifiedObservation:
    if observation.source != "bdmo_tochno":
        return observation

    mapped = BDMO_CODE_TO_KPI.get(observation.indicator_code)
    if mapped:
        code, name = mapped
        return UnifiedObservation(
            indicator_code=code,
            indicator_name=name,
            value=observation.value,
            unit=observation.unit,
            period=observation.period,
            oktmo=observation.oktmo,
            source=observation.source,
            category=observation.category,
            metadata={**(observation.metadata or {}), "bdmo_code": observation.indicator_code},
        )

    for pattern, code, name in NAME_PATTERNS:
        if pattern.search(observation.indicator_name):
            return UnifiedObservation(
                indicator_code=code,
                indicator_name=name,
                value=observation.value,
                unit=observation.unit,
                period=observation.period,
                oktmo=observation.oktmo,
                source=observation.source,
                category=observation.category,
                metadata={**(observation.metadata or {}), "bdmo_code": observation.indicator_code},
            )

    return observation
