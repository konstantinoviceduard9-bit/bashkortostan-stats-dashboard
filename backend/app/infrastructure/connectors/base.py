from abc import ABC, abstractmethod
from datetime import date
import hashlib
import json

from app.domain.entities import ConnectorResult, UnifiedObservation


class BaseConnector(ABC):
    connector_id: str
    display_name: str

    @abstractmethod
    async def fetch(self, period: date, municipality_code: str | None = None) -> ConnectorResult:
        """Загрузить данные за период (ОКТМО — опционально, для точечной догрузки)."""

    @staticmethod
    def hash_observations(observations: list[UnifiedObservation]) -> str:
        payload = [
            {
                "indicator_code": item.indicator_code,
                "oktmo": item.oktmo,
                "period": item.period.isoformat(),
                "value": item.value,
            }
            for item in sorted(observations, key=lambda row: (row.oktmo, row.indicator_code))
        ]
        encoded = json.dumps(payload, ensure_ascii=False, sort_keys=True).encode("utf-8")
        return hashlib.sha256(encoded).hexdigest()
