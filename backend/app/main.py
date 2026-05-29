from contextlib import asynccontextmanager

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy import text

from app.api.routes import admin, auth, dashboard, profile
from app.config import get_settings
from app.infrastructure.db.session import SessionLocal

try:
    import redis.asyncio as aioredis
except ImportError:  # pragma: no cover
    aioredis = None


@asynccontextmanager
async def lifespan(_app: FastAPI):
    yield


async def _check_postgres() -> bool:
    try:
        async with SessionLocal() as session:
            await session.execute(text("SELECT 1"))
        return True
    except Exception:
        return False


async def _check_redis() -> bool:
    if aioredis is None:
        return False
    settings = get_settings()
    try:
        client = aioredis.from_url(settings.redis_url)
        await client.ping()
        await client.aclose()
        return True
    except Exception:
        return False


def create_app() -> FastAPI:
    settings = get_settings()
    application = FastAPI(title=settings.app_name, lifespan=lifespan)

    application.add_middleware(
        CORSMiddleware,
        allow_origins=settings.cors_origin_list,
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )

    prefix = settings.api_prefix
    application.include_router(auth.router, prefix=prefix)
    application.include_router(dashboard.router, prefix=prefix)
    application.include_router(profile.router, prefix=prefix)
    application.include_router(admin.router, prefix=prefix)

    @application.get("/health")
    async def health() -> dict:
        postgres_ok = await _check_postgres()
        redis_ok = await _check_redis()
        status = "ok" if postgres_ok else "degraded"
        return {
            "status": status,
            "postgres": postgres_ok,
            "redis": redis_ok,
        }

    return application


app = create_app()
