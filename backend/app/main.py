from contextlib import asynccontextmanager

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.api.routes import admin, auth, dashboard, profile
from app.config import get_settings


@asynccontextmanager
async def lifespan(_app: FastAPI):
    yield


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
        return {"status": "ok"}

    return application


app = create_app()
