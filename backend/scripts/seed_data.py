"""Сид: 63 МО РБ, демо-пользователи, KPI и история для sparkline."""

import asyncio
import hashlib
from datetime import date

from sqlalchemy import select

from app.application.ranking import rebuild_rankings
from app.domain.municipalities_catalog import MUNICIPALITIES_CATALOG
from app.infrastructure.db.models import Indicator, IndicatorValue, Municipality, User, UserRoleEnum
from app.infrastructure.db.session import SessionLocal
from app.infrastructure.security.password import hash_password

KPI_DEFINITIONS = [
    ("budget_security", "Бюджетная обеспеченность", "%", "Бюджет"),
    ("unemployment", "Безработица", "%", "Экономика"),
    ("average_salary", "Средняя зарплата", "руб.", "Экономика"),
    ("natural_growth", "Естественный прирост", "чел.", "Население"),
    ("doctors_per_capita", "Обеспеченность врачами", "врач/10 тыс.", "Здравоохранение"),
    ("housing_commissioned", "Ввод жилья", "кв. м", "ЖКХ"),
]


def _stable_value(slug: str, code: str, month_index: int, base: float) -> float:
    digest = hashlib.sha256(f"{slug}:{code}:{month_index}".encode()).hexdigest()
    jitter = (int(digest[:8], 16) % 200 - 100) / 1000
    trend = month_index * 0.015
    return round(base * (1 + trend + jitter), 2)


async def seed() -> None:
    async with SessionLocal() as session:
        for item in MUNICIPALITIES_CATALOG:
            exists = await session.scalar(select(Municipality).where(Municipality.slug == item["slug"]))
            if exists:
                continue
            session.add(
                Municipality(
                    oktmo=item["oktmo"],
                    name=item["name"],
                    type=item["type"],
                    slug=item["slug"],
                )
            )

        await session.flush()

        ufa = await session.scalar(select(Municipality).where(Municipality.slug == "ufa"))
        beloretsk = await session.scalar(select(Municipality).where(Municipality.slug == "beloretsk"))

        if not await session.scalar(select(User).where(User.login == "admin")):
            session.add(
                User(
                    login="admin",
                    password_hash=hash_password("admin12345"),
                    role=UserRoleEnum.admin,
                    municipality_id=ufa.id if ufa else None,
                    max_user_id="admin-max-id",
                )
            )

        if ufa and not await session.scalar(select(User).where(User.login == "glava_ufa")):
            session.add(
                User(
                    login="glava_ufa",
                    password_hash=hash_password("district12345"),
                    role=UserRoleEnum.user,
                    municipality_id=ufa.id,
                    max_user_id="ufa-max-id",
                )
            )

        if beloretsk and not await session.scalar(select(User).where(User.login == "glava_beloretsk")):
            session.add(
                User(
                    login="glava_beloretsk",
                    password_hash=hash_password("district12345"),
                    role=UserRoleEnum.user,
                    municipality_id=beloretsk.id,
                    max_user_id="beloretsk-max-id",
                )
            )

        municipalities = (await session.execute(select(Municipality))).scalars().all()
        periods = [date(2024, month, 1) for month in range(1, 13)]

        bases = {
            "budget_security": 85.0,
            "unemployment": 4.5,
            "average_salary": 52000.0,
            "natural_growth": -120.0,
            "doctors_per_capita": 28.0,
            "housing_commissioned": 15000.0,
        }

        for code, name, unit, category in KPI_DEFINITIONS:
            indicator = await session.scalar(select(Indicator).where(Indicator.code == code))
            if indicator is None:
                indicator = Indicator(code=code, name=name, unit=unit, category=category, source="demo")
                session.add(indicator)
                await session.flush()

            for municipality in municipalities:
                base = bases[code] * (0.85 + (hash(municipality.slug) % 30) / 100)
                for month_index, period in enumerate(periods):
                    value = _stable_value(municipality.slug, code, month_index, base)
                    existing = await session.scalar(
                        select(IndicatorValue).where(
                            IndicatorValue.indicator_id == indicator.id,
                            IndicatorValue.municipality_id == municipality.id,
                            IndicatorValue.period == period,
                        )
                    )
                    if existing:
                        existing.value = value
                    else:
                        session.add(
                            IndicatorValue(
                                indicator_id=indicator.id,
                                municipality_id=municipality.id,
                                period=period,
                                value=value,
                                payload_hash="demo",
                            )
                        )

        for period in periods:
            await rebuild_rankings(session, period)

        await session.commit()
        print(f"Seed completed: {len(municipalities)} municipalities, {len(periods)} periods")


if __name__ == "__main__":
    asyncio.run(seed())
