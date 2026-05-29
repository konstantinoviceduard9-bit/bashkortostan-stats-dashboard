from datetime import date, datetime, timezone

import httpx

from app.domain.entities import ConnectorResult, UnifiedObservation
from app.infrastructure.connectors.base import BaseConnector


class EmissConnector(BaseConnector):
    """Башкортостанстат / ЕМИСС — SDMX или fallback на последние доступные значения."""

    connector_id = "emiss"
    display_name = "Башкортостанстат / ЕМИСС"

    async def fetch(self, period: date, municipality_code: str | None = None) -> ConnectorResult:
        observations: list[UnifiedObservation] = []
        # TODO: Playwright / SDMX spec per indicator
        return ConnectorResult(
            connector_id=self.connector_id,
            period=period,
            oktmo=municipality_code,
            observations=observations,
            raw_payload_hash=self.hash_observations(observations),
            fetched_at=datetime.now(timezone.utc),
        )
