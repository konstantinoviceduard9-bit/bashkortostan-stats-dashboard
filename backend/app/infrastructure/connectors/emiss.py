from datetime import date, datetime, timezone
import xml.etree.ElementTree as ET

import httpx

from app.config import get_settings
from app.domain.entities import ConnectorResult, UnifiedObservation
from app.infrastructure.connectors.base import BaseConnector


class EmissConnector(BaseConnector):
    """Башкортостанстат / ЕМИСС — опциональная загрузка SDMX/XML по EMISS_SDMX_URL."""

    connector_id = "emiss"
    display_name = "Башкортостанстат / ЕМИСС"

    async def fetch(self, period: date, municipality_code: str | None = None) -> ConnectorResult:
        settings = get_settings()
        observations: list[UnifiedObservation] = []

        if not settings.emiss_sdmx_url:
            return ConnectorResult(
                connector_id=self.connector_id,
                period=period,
                oktmo=municipality_code,
                observations=[],
                raw_payload_hash=self.hash_observations([]),
                fetched_at=datetime.now(timezone.utc),
                stats={"skipped": "EMISS_SDMX_URL not set"},
            )

        async with httpx.AsyncClient(timeout=120.0, follow_redirects=True) as client:
            response = await client.get(settings.emiss_sdmx_url)
            response.raise_for_status()
            observations = self._parse_sdmx_xml(response.text, period)

        if municipality_code:
            observations = [row for row in observations if row.oktmo.startswith(municipality_code[:8])]

        return ConnectorResult(
            connector_id=self.connector_id,
            period=period,
            oktmo=municipality_code,
            observations=observations,
            raw_payload_hash=self.hash_observations(observations),
            fetched_at=datetime.now(timezone.utc),
        )

    @staticmethod
    def _parse_sdmx_xml(payload: str, period: date) -> list[UnifiedObservation]:
        """Минимальный разбор GenericData (одна серия — одно наблюдение)."""
        observations: list[UnifiedObservation] = []
        try:
            root = ET.fromstring(payload)
        except ET.ParseError:
            return observations

        for obs in root.iter():
            if not obs.tag.endswith("Obs"):
                continue
            value_attr = obs.attrib.get("OBS_VALUE") or obs.attrib.get("value")
            if value_attr is None:
                continue
            try:
                numeric = float(str(value_attr).replace(",", "."))
            except ValueError:
                continue
            oktmo = obs.attrib.get("OKTMO", "") or obs.attrib.get("oktmo", "") or "80"
            code = obs.attrib.get("INDICATOR", "emiss_indicator")
            observations.append(
                UnifiedObservation(
                    indicator_code=code,
                    indicator_name=code,
                    value=numeric,
                    unit="ед.",
                    period=period,
                    oktmo=oktmo,
                    source="emiss",
                    category="ЕМИСС",
                )
            )
        return observations
