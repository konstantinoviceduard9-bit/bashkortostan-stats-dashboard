"""Сид: 63 МО РБ, демо-пользователи, KPI и история для sparkline."""

import asyncio

from sqlalchemy import delete, select

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
async def seed() -> None:
    async with SessionLocal() as session:
        await session.execute(delete(IndicatorValue).where(IndicatorValue.payload_hash == "demo"))

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

        for code, name, unit, category in KPI_DEFINITIONS:
            indicator = await session.scalar(select(Indicator).where(Indicator.code == code))
            if indicator is None:
                indicator = Indicator(code=code, name=name, unit=unit, category=category, source="catalog")
                session.add(indicator)
                await session.flush()

        await session.commit()
        municipalities = (await session.execute(select(Municipality))).scalars().all()
        print(f"Seed completed: {len(municipalities)} municipalities, demo KPI values removed")


if __name__ == "__main__":
    asyncio.run(seed())
