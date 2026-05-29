"""Export API responses to JSON for GitHub Pages static demo."""

import asyncio
import json
import os
import sys
from pathlib import Path

import httpx

BACKEND = Path(__file__).resolve().parents[1] / "backend"
OUT = BACKEND.parent / "frontend" / "public" / "demo-data"
NATIVE_DB = BACKEND / "data" / "native_demo.db"
DB = BACKEND / "data" / "static_export.db"

USERS = [
    ("admin", "admin12345"),
    ("glava_ufa", "district12345"),
    ("glava_beloretsk", "district12345"),
]

ENDPOINTS = [
    ("summary", "/api/v1/dashboard/summary"),
    ("rating", "/api/v1/dashboard/rating"),
    ("indicators", "/api/v1/dashboard/indicators"),
    ("me", "/api/v1/dashboard/me"),
    ("profile", "/api/v1/profile"),
]


async def prepare_db() -> None:
    db_path = NATIVE_DB if NATIVE_DB.exists() else DB
    os.environ["DATABASE_URL"] = f"sqlite+aiosqlite:///{db_path.as_posix()}"
    os.environ.setdefault("DEMO_MODE", "true")
    os.environ.setdefault("JWT_SECRET", "static-export-secret")

    sys.path.insert(0, str(BACKEND))
    from app.config import get_settings

    get_settings.cache_clear()

    if NATIVE_DB.exists():
        print(f"Using live DB: {NATIVE_DB}")
        return

    if DB.exists():
        DB.unlink()

    from app.infrastructure.db.base import Base
    from app.infrastructure.db.session import engine
    from scripts.seed_data import seed

    async with engine.begin() as connection:
        await connection.run_sync(Base.metadata.create_all)
    await seed()


async def export_user(client: httpx.AsyncClient, login: str, password: str) -> None:
    response = await client.post("/api/v1/auth/login", json={"login": login, "password": password})
    response.raise_for_status()
    token = response.json()["access_token"]
    headers = {"Authorization": f"Bearer {token}"}

    user_dir = OUT / login
    user_dir.mkdir(parents=True, exist_ok=True)

    for name, path in ENDPOINTS:
        data = (await client.get(path, headers=headers)).json()
        (user_dir / f"{name}.json").write_text(
            json.dumps(data, ensure_ascii=False, indent=2, default=str),
            encoding="utf-8",
        )


async def export_admin_connectors(client: httpx.AsyncClient) -> None:
    response = await client.post("/api/v1/auth/login", json={"login": "admin", "password": "admin12345"})
    response.raise_for_status()
    token = response.json()["access_token"]
    headers = {"Authorization": f"Bearer {token}"}
    data = (await client.get("/api/v1/admin/connectors/status", headers=headers)).json()
    (OUT / "admin-connectors.json").write_text(
        json.dumps(data, ensure_ascii=False, indent=2, default=str),
        encoding="utf-8",
    )


async def main() -> None:
    await prepare_db()
    sys.path.insert(0, str(BACKEND))
    from app.main import app

    OUT.mkdir(parents=True, exist_ok=True)
    transport = httpx.ASGITransport(app=app)
    async with httpx.AsyncClient(transport=transport, base_url="http://test") as client:
        for login, password in USERS:
            await export_user(client, login, password)
        await export_admin_connectors(client)

    creds = {login: password for login, password in USERS}
    (OUT / "users.json").write_text(json.dumps(creds, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"Static demo data exported to {OUT}")


if __name__ == "__main__":
    asyncio.run(main())
