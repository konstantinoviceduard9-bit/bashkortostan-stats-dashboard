"""Пересчёт сводного рейтинга по live KPI: python scripts/rebuild_rankings.py [--period 2023-01-01]"""

import argparse
import asyncio
from datetime import date

from sqlalchemy import func, select

from app.application.ranking import rebuild_dashboard_rankings
from app.infrastructure.db.models import IndicatorValue
from app.infrastructure.db.session import SessionLocal


async def main(period: date | None) -> None:
    async with SessionLocal() as session:
        target = period or await session.scalar(
            select(func.max(IndicatorValue.period)).where(IndicatorValue.payload_hash != "demo")
        )
        if target is None:
            target = date.today().replace(month=1, day=1)

        stats = await rebuild_dashboard_rankings(session, target)
        await session.commit()
        print(f"Рейтинг пересчитан за {target.isoformat()}")
        print(f"  МО в сводном индексе: {stats['composite_ranked']}")
        print(f"  KPI-рейтингов обновлено: {stats['kpi_rankings_updated']}")


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Rebuild composite municipality rankings")
    parser.add_argument("--period", default=None, help="YYYY-MM-DD")
    args = parser.parse_args()
    target = date.fromisoformat(args.period) if args.period else None
    asyncio.run(main(target))
