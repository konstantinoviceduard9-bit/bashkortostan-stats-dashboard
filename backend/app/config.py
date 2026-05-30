from functools import lru_cache

from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    model_config = SettingsConfigDict(env_file=".env", env_file_encoding="utf-8", extra="ignore")

    app_name: str = "Башкортостан — муниципальный дашборд"
    debug: bool = False
    demo_mode: bool = False
    api_prefix: str = "/api/v1"

    database_url: str = "postgresql+asyncpg://dashboard:dashboard@postgres:5432/dashboard"
    redis_url: str = "redis://redis:6379/0"

    jwt_secret: str = "change-me-in-production"
    jwt_algorithm: str = "HS256"
    jwt_expire_minutes: int = 60 * 12

    cors_origins: str = "http://localhost:3000"

    max_api_url: str = ""
    max_bot_token: str = ""
    max_request_timeout_seconds: float = 30.0

    connector_failure_alert_threshold: int = 3

    bdmo_tochno_base_url: str = "https://storage.yandexcloud.net/tochno-st-catalog"
    bdmo_sections: str = "1,2,3,5,6,7,8,9,12,13"
    opendata_base_url: str = "https://opendata.sf2.simai.ru"
    bashkortostan_region_id: str = "80"
    minfin_report_url: str = ""
    emiss_sdmx_url: str = ""
    rosstat_bdpmo_enabled: bool = True

    @property
    def bdmo_section_list(self) -> tuple[int, ...]:
        values: list[int] = []
        for part in self.bdmo_sections.split(","):
            part = part.strip()
            if part.isdigit():
                values.append(int(part))
        return tuple(values) if values else (1, 2, 3, 5, 6, 7, 8, 9, 12, 13)

    @property
    def cors_origin_list(self) -> list[str]:
        if self.demo_mode:
            return ["*"]
        return [item.strip() for item in self.cors_origins.split(",") if item.strip()]


@lru_cache
def get_settings() -> Settings:
    return Settings()
