from datetime import date, datetime
import enum

from sqlalchemy import Boolean, Date, DateTime, Enum, Float, ForeignKey, Integer, String, Text, UniqueConstraint
from sqlalchemy.orm import Mapped, mapped_column, relationship

from app.infrastructure.db.base import Base


class UserRoleEnum(str, enum.Enum):
    user = "user"
    admin = "admin"


class Municipality(Base):
    __tablename__ = "municipalities"

    id: Mapped[int] = mapped_column(primary_key=True)
    oktmo: Mapped[str] = mapped_column(String(11), unique=True, index=True)
    name: Mapped[str] = mapped_column(String(255))
    type: Mapped[str] = mapped_column(String(32))  # district | city
    slug: Mapped[str] = mapped_column(String(64), unique=True)

    users: Mapped[list["User"]] = relationship(back_populates="municipality")


class User(Base):
    __tablename__ = "users"

    id: Mapped[int] = mapped_column(primary_key=True)
    login: Mapped[str] = mapped_column(String(64), unique=True, index=True)
    password_hash: Mapped[str] = mapped_column(String(255))
    role: Mapped[UserRoleEnum] = mapped_column(Enum(UserRoleEnum), default=UserRoleEnum.user)
    municipality_id: Mapped[int | None] = mapped_column(ForeignKey("municipalities.id"), nullable=True)
    max_user_id: Mapped[str | None] = mapped_column(String(128), nullable=True)
    is_active: Mapped[bool] = mapped_column(Boolean, default=True)

    municipality: Mapped[Municipality | None] = relationship(back_populates="users")


class Indicator(Base):
    __tablename__ = "indicators"

    id: Mapped[int] = mapped_column(primary_key=True)
    code: Mapped[str] = mapped_column(String(128), unique=True, index=True)
    name: Mapped[str] = mapped_column(String(512))
    unit: Mapped[str] = mapped_column(String(64), default="ед.")
    category: Mapped[str] = mapped_column(String(128), index=True)
    source: Mapped[str] = mapped_column(String(64))


class IndicatorValue(Base):
    __tablename__ = "indicator_values"
    __table_args__ = (UniqueConstraint("indicator_id", "municipality_id", "period", name="uq_value_period"),)

    id: Mapped[int] = mapped_column(primary_key=True)
    indicator_id: Mapped[int] = mapped_column(ForeignKey("indicators.id"))
    municipality_id: Mapped[int] = mapped_column(ForeignKey("municipalities.id"), index=True)
    period: Mapped[date] = mapped_column(Date, index=True)
    value: Mapped[float] = mapped_column(Float)
    payload_hash: Mapped[str] = mapped_column(String(64))


class RawDataCache(Base):
    __tablename__ = "raw_data_cache"

    id: Mapped[int] = mapped_column(primary_key=True)
    connector_id: Mapped[str] = mapped_column(String(64), index=True)
    period: Mapped[date] = mapped_column(Date)
    oktmo: Mapped[str | None] = mapped_column(String(11), nullable=True)
    payload_hash: Mapped[str] = mapped_column(String(64))
    payload_json: Mapped[str] = mapped_column(Text)
    fetched_at: Mapped[datetime] = mapped_column(DateTime(timezone=True))


class ConnectorRun(Base):
    __tablename__ = "connector_runs"

    id: Mapped[int] = mapped_column(primary_key=True)
    connector_id: Mapped[str] = mapped_column(String(64), index=True)
    period: Mapped[date] = mapped_column(Date)
    status: Mapped[str] = mapped_column(String(32))
    message: Mapped[str | None] = mapped_column(Text, nullable=True)
    consecutive_failures: Mapped[int] = mapped_column(Integer, default=0)
    started_at: Mapped[datetime] = mapped_column(DateTime(timezone=True))
    finished_at: Mapped[datetime | None] = mapped_column(DateTime(timezone=True), nullable=True)


class RankingSnapshot(Base):
    __tablename__ = "ranking_snapshots"
    __table_args__ = (UniqueConstraint("indicator_id", "period", "municipality_id", name="uq_ranking"),)

    id: Mapped[int] = mapped_column(primary_key=True)
    indicator_id: Mapped[int] = mapped_column(ForeignKey("indicators.id"))
    period: Mapped[date] = mapped_column(Date, index=True)
    municipality_id: Mapped[int] = mapped_column(ForeignKey("municipalities.id"), index=True)
    rank: Mapped[int] = mapped_column(Integer)
    total: Mapped[int] = mapped_column(Integer)
    value: Mapped[float] = mapped_column(Float)
    rank_delta: Mapped[int | None] = mapped_column(Integer, nullable=True)


class NotificationLog(Base):
    __tablename__ = "notification_logs"

    id: Mapped[int] = mapped_column(primary_key=True)
    user_id: Mapped[int] = mapped_column(ForeignKey("users.id"))
    channel: Mapped[str] = mapped_column(String(32), default="max")
    message: Mapped[str] = mapped_column(Text)
    status: Mapped[str] = mapped_column(String(32))
    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True))
