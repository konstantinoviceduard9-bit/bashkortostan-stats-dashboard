"""Импорт KPI из CSV (зарплата, безработица и др.) когда их нет в БДМО.

Формат: oktmo,municipality,code,value,period
code — один из: average_salary, unemployment, budget_security, natural_growth, doctors_per_capita, housing_commissioned
"""

import argparse
import asyncio
import csv
from datetime import date
from pathlib import Path

from sqlalchemy import select

from app.application.ranking import rebuild_rankings
from app.infrastructure.db.models import Indicator, IndicatorValue, Municipality
from app.infrastructure.db.session import SessionLocal

KPI_META: dict[str, tuple[str, str]] = {
    "budget_security": ("Бюджетная обеспеченность", "Бюджет"),
    "unemployment": ("Безработица", "Экономика"),
    "average_salary": ("Средняя зарплата", "Экономика"),
    "natural_growth": ("Естественный прирост", "Население"),
    "doctors_per_capita": ("Обеспеченность врачами", "Здравоохранение"),
    "housing_commissioned": ("Ввод жилья", "ЖКХ"),
}


async def import_file(path: Path, default_period: date) -> None:
    async with SessionLocal() as session:
        municipalities = (await session.execute(select(Municipality))).scalars().all()
        by_oktmo = {m.oktmo: m for m in municipalities}
        by_name = {m.name: m for m in municipalities}
        imported = 0

        with path.open(encoding="utf-8-sig", newline="") as handle:
            reader = csv.DictReader(handle)
            for row in reader:
                code = str(row.get("code", "")).strip()
                if code not in KPI_META:
                    continue
                try:
                    value = float(str(row.get("value", "")).replace(",", "."))
                except ValueError:
                    continue

                oktmo = str(row.get("oktmo", "")).strip()[:8]
                municipality = by_oktmo.get(oktmo)
                if municipality is None:
                    name = str(row.get("municipality", "")).strip()
                    municipality = by_name.get(name)
                if municipality is None:
                    continue

                period_raw = str(row.get("period", "")).strip()
                period = date.fromisoformat(period_raw) if period_raw else default_period

                indicator = await session.scalar(select(Indicator).where(Indicator.code == code))
                if indicator is None:
                    name, category = KPI_META[code]
                    indicator = Indicator(
                        code=code,
                        name=name,
                        unit="ед.",
                        category=category,
                        source="manual_csv",
                    )
                    session.add(indicator)
                    await session.flush()
                else:
                    indicator.source = "manual_csv"

                existing = await session.scalar(
                    select(IndicatorValue).where(
                        IndicatorValue.indicator_id == indicator.id,
                        IndicatorValue.municipality_id == municipality.id,
                        IndicatorValue.period == period,
                    )
                )
                if existing:
                    existing.value = value
                    existing.payload_hash = "manual_csv"
                else:
                    session.add(
                        IndicatorValue(
                            indicator_id=indicator.id,
                            municipality_id=municipality.id,
                            period=period,
                            value=value,
                            payload_hash="manual_csv",
                        )
                    )
                imported += 1

        salary = await session.scalar(select(Indicator).where(Indicator.code == "average_salary"))
        await rebuild_rankings(session, default_period, indicator_id=salary.id if salary else None)
        await session.commit()
        print(f"Imported {imported} values from {path}")


if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument("csv_path", type=Path)
    parser.add_argument("--period", default="2023-01-01")
    args = parser.parse_args()
    asyncio.run(import_file(args.csv_path, date.fromisoformat(args.period)))
