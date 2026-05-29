from dataclasses import dataclass
from datetime import date, datetime
from enum import Enum


class UserRole(str, Enum):
    USER = "user"
    ADMIN = "admin"


@dataclass(frozen=True)
class UnifiedObservation:
    """Унифицированная запись из любого коннектора."""

    indicator_code: str
    indicator_name: str
    value: float
    unit: str
    period: date
    oktmo: str
    source: str
    category: str | None = None
    metadata: dict | None = None


@dataclass(frozen=True)
class ConnectorResult:
    connector_id: str
    period: date
    oktmo: str | None
    observations: list[UnifiedObservation]
    raw_payload_hash: str
    fetched_at: datetime
    stats: dict | None = None
