from datetime import date, datetime

from pydantic import BaseModel, Field


class DataSourceInfo(BaseModel):
    connector_id: str
    display_name: str
    status: str = "not_run"
    last_success_at: datetime | None
    last_run_at: datetime | None = None
    period: date | None
    message: str | None = None


class LoginRequest(BaseModel):
    login: str
    password: str


class TokenResponse(BaseModel):
    access_token: str
    token_type: str = "bearer"


class UserProfile(BaseModel):
    login: str
    role: str
    municipality_name: str | None
    max_user_id: str | None


class KpiCard(BaseModel):
    code: str
    name: str
    value: float | None
    unit: str
    change_percent: float | None
    sparkline: list[float]
    source: str | None = None
    is_live: bool = False
    data_period: date | None = None


class TriggerCard(BaseModel):
    code: str
    kpi_code: str
    name: str
    description: str
    value: float | None
    unit: str
    status: str
    watch_at: float
    trigger_at: float
    direction: str
    is_live: bool = False


class DashboardSummary(BaseModel):
    municipality_name: str
    rank: int | None
    total: int
    rank_delta: int | None
    period: date
    kpis: list[KpiCard]
    triggers: list[TriggerCard] = []
    data_sources: list[DataSourceInfo] = []
    source_notes: list[str] = []


class IndicatorRow(BaseModel):
    code: str
    name: str
    category: str
    value: float | None
    unit: str
    change_percent: float | None
    republic_average: float | None
    source: str
    received_at: datetime | None = None


class RatingRow(BaseModel):
    rank: int
    label: str
    value: float | None = None
    is_self: bool = False


class RatingIndicatorOption(BaseModel):
    code: str
    name: str
    unit: str


class RatingView(BaseModel):
    self_rank: int | None
    self_total: int
    indicator_code: str
    indicator_name: str
    unit: str
    rows: list[RatingRow]
    available_indicators: list[RatingIndicatorOption] = []


class ProfileUpdate(BaseModel):
    max_user_id: str | None = None
    current_password: str | None = None
    new_password: str | None = Field(default=None, min_length=8)


class AdminNotifyRequest(BaseModel):
    message: str
    municipality_oktmo: str | None = None
