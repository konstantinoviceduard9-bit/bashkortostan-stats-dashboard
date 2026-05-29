"""Quick DB stats for native demo."""

import asyncio
import os
from pathlib import Path

BACKEND = Path(__file__).resolve().parents[1]
DB = BACKEND / "data" / "native_demo.db"
os.environ.setdefault("DATABASE_URL", f"sqlite+aiosqlite:///{DB.as_posix()}")
os.environ.setdefault("JWT_SECRET", "native-demo-secret")

from sqlalchemy import func, select

from app.infrastructure.db.models import ConnectorRun, IndicatorValue
from app.infrastructure.db.session import SessionLocal


async def main() -> None:
    async with SessionLocal() as session:
        live = await session.scalar(
            select(func.count()).select_from(IndicatorValue).where(IndicatorValue.payload_hash != "demo")
        )
        demo = await session.scalar(
            select(func.count()).select_from(IndicatorValue).where(IndicatorValue.payload_hash == "demo")
        )
        max_period = await session.scalar(
            select(func.max(IndicatorValue.period)).where(IndicatorValue.payload_hash != "demo")
        )
        runs = (
            await session.execute(
                select(ConnectorRun.connector_id, ConnectorRun.status, ConnectorRun.message)
                .order_by(ConnectorRun.started_at.desc())
                .limit(10)
            )
        ).all()
        print(f"live_rows={live} demo_rows={demo} max_live_period={max_period}")
        for row in runs:
            print(f"  {row.connector_id}: {row.status} — {row.message or ''}")


if __name__ == "__main__":
    asyncio.run(main())
