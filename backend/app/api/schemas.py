from datetime import date, datetime

from pydantic import BaseModel, Field


class DataSourceInfo(BaseModel):
    connector_id: str
    display_name: str
    last_success_at: datetime | None
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


class DashboardSummary(BaseModel):
    municipality_name: str
    rank: int | None
    total: int
    rank_delta: int | None
    period: date
    kpis: list[KpiCard]
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


class RatingRow(BaseModel):
    rank: int
    label: str
    is_self: bool = False


class RatingView(BaseModel):
    self_rank: int | None
    self_total: int
    top: list[RatingRow]
    bottom: list[RatingRow]


class ProfileUpdate(BaseModel):
    max_user_id: str | None = None
    current_password: str | None = None
    new_password: str | None = Field(default=None, min_length=8)


class AdminNotifyRequest(BaseModel):
    message: str
    municipality_oktmo: str | None = None
