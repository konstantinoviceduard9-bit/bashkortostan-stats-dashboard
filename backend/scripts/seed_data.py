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
    ("composite_index", "Сводный индекс эффективности", "балл", "Рейтинг"),
]

HEAD_PASSWORD = "district12345"
ADMIN_PASSWORD = "admin12345"


def head_login(slug: str) -> str:
    return f"glava_{slug}"


async def ensure_municipality_heads(session) -> int:
    """Создаёт glava_{slug} для каждого из 63 МО (идемпотентно)."""
    municipalities = (await session.execute(select(Municipality).order_by(Municipality.name))).scalars().all()
    created = 0
    for municipality in municipalities:
        login = head_login(municipality.slug)
        if await session.scalar(select(User).where(User.login == login)):
            continue
        session.add(
            User(
                login=login,
                password_hash=hash_password(HEAD_PASSWORD),
                role=UserRoleEnum.user,
                municipality_id=municipality.id,
                max_user_id=f"{municipality.slug}-max-id",
            )
        )
        created += 1
    return created


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

        if not await session.scalar(select(User).where(User.login == "admin")):
            session.add(
                User(
                    login="admin",
                    password_hash=hash_password(ADMIN_PASSWORD),
                    role=UserRoleEnum.admin,
                    municipality_id=ufa.id if ufa else None,
                    max_user_id="admin-max-id",
                )
            )

        heads_created = await ensure_municipality_heads(session)

        for code, name, unit, category in KPI_DEFINITIONS:
            indicator = await session.scalar(select(Indicator).where(Indicator.code == code))
            if indicator is None:
                indicator = Indicator(code=code, name=name, unit=unit, category=category, source="catalog")
                session.add(indicator)
                await session.flush()

        await session.commit()
        municipalities = (await session.execute(select(Municipality))).scalars().all()
        users = (await session.execute(select(User))).scalars().all()
        print(
            f"Seed completed: {len(municipalities)} municipalities, "
            f"{len(users)} users (+{heads_created} heads), demo KPI values removed"
        )


if __name__ == "__main__":
    asyncio.run(seed())
