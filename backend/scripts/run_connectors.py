"""Локальный запуск ETL без Celery: python scripts/run_connectors.py [--period 2023-01-01]"""

import argparse
import asyncio
from datetime import date

from sqlalchemy import func, select

from app.application.ingestion import run_connector
from app.application.ranking import rebuild_rankings
from app.infrastructure.connectors.registry import get_scheduled_connectors
from app.infrastructure.db.models import Indicator, IndicatorValue
from app.infrastructure.db.session import SessionLocal


async def main(period: date) -> None:
    async with SessionLocal() as session:
        for connector in get_scheduled_connectors():
            try:
                changed, message = await run_connector(session, connector, period)
                await session.commit()
                status = "changed" if changed else "unchanged"
                print(f"[ok] {connector.connector_id}: {status} — {message}")
            except Exception as error:  # noqa: BLE001
                print(f"[fail] {connector.connector_id}: {error}")
                await session.rollback()

        rank_period = await session.scalar(
            select(func.max(IndicatorValue.period)).where(IndicatorValue.payload_hash != "demo")
        )
        if rank_period is None:
            rank_period = period

        salary = await session.scalar(select(Indicator).where(Indicator.code == "average_salary"))
        await rebuild_rankings(session, rank_period, indicator_id=salary.id if salary else None)
        await session.commit()
        print(f"Rankings rebuilt for {rank_period.isoformat()}")


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Run scheduled data connectors")
    parser.add_argument("--period", default=None, help="Period as YYYY-MM-DD (default: Jan 1 current year)")
    args = parser.parse_args()
    target = date.fromisoformat(args.period) if args.period else date.today().replace(month=1, day=1)
    asyncio.run(main(target))
