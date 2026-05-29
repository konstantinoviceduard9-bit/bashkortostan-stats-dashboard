"""Создание схемы SQLite для нативного демо без Docker."""

import asyncio
import os
import sys
from pathlib import Path

BACKEND_ROOT = Path(__file__).resolve().parents[1]
DB_FILE = BACKEND_ROOT / "data" / "native_demo.db"

os.environ["DATABASE_URL"] = f"sqlite+aiosqlite:///{DB_FILE.as_posix()}"
os.environ.setdefault("DEMO_MODE", "true")
os.environ.setdefault("JWT_SECRET", "native-demo-secret")

from app.config import get_settings

get_settings.cache_clear()

from app.infrastructure.db.base import Base
from app.infrastructure.db.session import engine
from scripts.seed_data import seed


async def main() -> None:
    DB_FILE.parent.mkdir(exist_ok=True)
    async with engine.begin() as connection:
        await connection.run_sync(Base.metadata.create_all)
    await seed()
    print(f"Native SQLite DB ready: {DB_FILE}")


if __name__ == "__main__":
    asyncio.run(main())
