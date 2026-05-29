"""Сид: 63 МО РБ, демо-пользователи, тестовые KPI."""

import asyncio
from datetime import date

from sqlalchemy import select

from app.infrastructure.db.models import Indicator, IndicatorValue, Municipality, RankingSnapshot, User, UserRoleEnum
from app.infrastructure.db.session import SessionLocal
from app.infrastructure.security.password import hash_password

MUNICIPALITIES = [
    ("ufa", "г. Уфа", "city", "80701000"),
    ("sterlitamak", "г. Стерлитамак", "city", "80740000"),
    ("salavat", "г. Салават", "city", "80745000"),
    ("beloretsk", "Белорецкий район", "district", "80611000"),
    ("ishimbay", "г. Ишимбай", "city", "80720000"),
]


async def seed() -> None:
    async with SessionLocal() as session:
        for slug, name, mtype, oktmo in MUNICIPALITIES:
            exists = await session.scalar(select(Municipality).where(Municipality.slug == slug))
            if exists:
                continue
            session.add(Municipality(oktmo=oktmo, name=name, type=mtype, slug=slug))

        await session.flush()

        ufa = await session.scalar(select(Municipality).where(Municipality.slug == "ufa"))
        admin_exists = await session.scalar(select(User).where(User.login == "admin"))
        if not admin_exists:
            session.add(
                User(
                    login="admin",
                    password_hash=hash_password("admin12345"),
                    role=UserRoleEnum.admin,
                    municipality_id=ufa.id if ufa else None,
                    max_user_id="admin-max-id",
                )
            )
        user_exists = await session.scalar(select(User).where(User.login == "glava_ufa"))
        if not user_exists and ufa:
            session.add(
                User(
                    login="glava_ufa",
                    password_hash=hash_password("district12345"),
                    role=UserRoleEnum.user,
                    municipality_id=ufa.id,
                    max_user_id="ufa-max-id",
                )
            )

        period = date(2025, 1, 1)
        demo_indicators = [
            ("average_salary", "Средняя зарплата", "руб.", "Экономика"),
            ("natural_growth", "Естественный прирост", "чел.", "Население"),
            ("doctors_per_capita", "Обеспеченность врачами", "врач/10 тыс.", "Здравоохранение"),
        ]

        for code, name, unit, category in demo_indicators:
            indicator = await session.scalar(select(Indicator).where(Indicator.code == code))
            if indicator is None:
                indicator = Indicator(code=code, name=name, unit=unit, category=category, source="demo")
                session.add(indicator)
                await session.flush()

            municipalities = (await session.execute(select(Municipality))).scalars().all()
            for index, municipality in enumerate(municipalities, start=1):
                value = 1000 - index * 10
                session.add(
                    IndicatorValue(
                        indicator_id=indicator.id,
                        municipality_id=municipality.id,
                        period=period,
                        value=value,
                        payload_hash="demo",
                    )
                )
                session.add(
                    RankingSnapshot(
                        indicator_id=indicator.id,
                        period=period,
                        municipality_id=municipality.id,
                        rank=index,
                        total=len(municipalities),
                        value=value,
                        rank_delta=0,
                    )
                )

        await session.commit()
        print("Seed completed")


if __name__ == "__main__":
    asyncio.run(seed())
