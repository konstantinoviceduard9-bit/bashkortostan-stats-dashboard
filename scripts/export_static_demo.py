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

HEAD_PASSWORD = "district12345"
ADMIN_PASSWORD = "admin12345"

ENDPOINTS = [
    ("summary", "/api/v1/dashboard/summary"),
    ("rating", "/api/v1/dashboard/rating"),
    ("indicators", "/api/v1/dashboard/indicators"),
    ("me", "/api/v1/dashboard/me"),
    ("profile", "/api/v1/profile"),
]


async def prepare_db() -> None:
    """Pick DB for export: native demo → snapshot → fresh seed."""
    if NATIVE_DB.exists():
        db_path = NATIVE_DB
    elif DB.exists():
        db_path = DB
    else:
        db_path = DB

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
        print(f"Using snapshot DB: {DB}")
        return

    from app.infrastructure.db.base import Base
    from app.infrastructure.db.session import engine
    from scripts.seed_data import seed

    async with engine.begin() as connection:
        await connection.run_sync(Base.metadata.create_all)
    await seed()
    print("Created empty seed DB (no live data — commit demo-data JSON or static_export.db)")


async def load_export_users() -> list[tuple[str, str]]:
    from sqlalchemy import select

    from app.infrastructure.db.models import Municipality, User, UserRoleEnum
    from app.infrastructure.db.session import SessionLocal
    from scripts.seed_data import HEAD_PASSWORD, head_login

    async with SessionLocal() as session:
        municipalities = (await session.execute(select(Municipality).order_by(Municipality.name))).scalars().all()
        for municipality in municipalities:
            login = head_login(municipality.slug)
            exists = await session.scalar(select(User).where(User.login == login))
            if exists is None:
                from scripts.seed_data import ensure_municipality_heads

                await ensure_municipality_heads(session)
                await session.commit()
                break

        users = (await session.execute(select(User).order_by(User.login))).scalars().all()

    creds: list[tuple[str, str]] = []
    for user in users:
        if user.role == UserRoleEnum.admin:
            creds.append((user.login, ADMIN_PASSWORD))
        else:
            creds.append((user.login, HEAD_PASSWORD))
    return creds


async def export_municipalities_manifest() -> None:
    from sqlalchemy import select

    from app.infrastructure.db.models import Municipality, User
    from app.infrastructure.db.session import SessionLocal
    from scripts.seed_data import head_login

    async with SessionLocal() as session:
        rows = (
            await session.execute(
                select(Municipality, User)
                .join(User, User.municipality_id == Municipality.id)
                .where(User.login.like("glava_%"))
                .order_by(Municipality.name)
            )
        ).all()

    manifest = [
        {
            "login": user.login,
            "slug": municipality.slug,
            "name": municipality.name,
            "type": municipality.type,
            "oktmo": municipality.oktmo,
        }
        for municipality, user in rows
    ]
    (OUT / "municipalities.json").write_text(
        json.dumps(manifest, ensure_ascii=False, indent=2),
        encoding="utf-8",
    )
    print(f"Municipalities manifest: {len(manifest)} heads")


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
    response = await client.post("/api/v1/auth/login", json={"login": "admin", "password": ADMIN_PASSWORD})
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

    users = await load_export_users()
    OUT.mkdir(parents=True, exist_ok=True)
    transport = httpx.ASGITransport(app=app)
    async with httpx.AsyncClient(transport=transport, base_url="http://test", timeout=120.0) as client:
        for index, (login, password) in enumerate(users, start=1):
            print(f"[{index}/{len(users)}] export {login}")
            await export_user(client, login, password)
        await export_admin_connectors(client)

    await export_municipalities_manifest()

    creds = {login: password for login, password in users}
    (OUT / "users.json").write_text(json.dumps(creds, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"Static demo data exported to {OUT} ({len(users)} users)")


if __name__ == "__main__":
    asyncio.run(main())
