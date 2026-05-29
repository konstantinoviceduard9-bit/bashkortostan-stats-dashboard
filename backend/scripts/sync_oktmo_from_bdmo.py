"""Синхронизация ОКТМО и названий 63 МО из БДМО (tochno.st) в PostgreSQL."""

import asyncio

import httpx

from app.infrastructure.connectors.bdmo_sections import DEFAULT_SECTIONS, fetch_sections
from app.infrastructure.db.models import Municipality
from app.infrastructure.db.session import SessionLocal
from sqlalchemy import select


async def sync() -> None:
    period_year = 2023
    from datetime import date

    period = date(period_year, 1, 1)
    async with httpx.AsyncClient(timeout=180.0) as client:
        frame, data_year = await fetch_sections(client, DEFAULT_SECTIONS[:1], period)

    if frame.empty:
        print("Нет данных БДМО для синхронизации")
        return

    pairs = (
        frame[["oktmo", "municipality"]]
        .drop_duplicates()
        .sort_values("oktmo")
    )

    async with SessionLocal() as session:
        municipalities = (await session.execute(select(Municipality))).scalars().all()
        updated = 0

        for _, row in pairs.iterrows():
            oktmo = str(row["oktmo"])[:8]
            name = str(row["municipality"]).strip()
            match = None
            for municipality in municipalities:
                if municipality.name == name:
                    match = municipality
                    break
            if match is None:
                continue
            if match.oktmo != oktmo:
                match.oktmo = oktmo
                updated += 1

        await session.commit()
        print(f"БДМО год: {data_year}, верхний уровень: {len(pairs)} записей, обновлено ОКТМО: {updated}")


if __name__ == "__main__":
    asyncio.run(sync())
