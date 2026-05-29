from datetime import date, datetime, timezone

import httpx

from app.config import get_settings
from app.domain.entities import ConnectorResult, UnifiedObservation
from app.infrastructure.connectors.base import BaseConnector
from app.infrastructure.connectors.bdmo_sections import DEFAULT_SECTIONS, fetch_sections


class BdmoTochnoConnector(BaseConnector):
    """БД ПМО через плоские CSV tochno.st (region_id=80 — Республика Башкортостан)."""

    connector_id = "bdmo_tochno"
    display_name = "БД ПМО / tochno.st"

    def __init__(self, sections: tuple[int, ...] | None = None) -> None:
        self.sections = sections or DEFAULT_SECTIONS

    async def fetch(self, period: date, municipality_code: str | None = None) -> ConnectorResult:
        observations: list[UnifiedObservation] = []
        data_year: str | None = None

        async with httpx.AsyncClient(timeout=180.0) as client:
            frame, data_year = await fetch_sections(client, self.sections, period)

        if frame.empty:
            return ConnectorResult(
                connector_id=self.connector_id,
                period=period,
                oktmo=municipality_code,
                observations=[],
                raw_payload_hash=self.hash_observations([]),
                fetched_at=datetime.now(timezone.utc),
            )

        effective_period = date(int(data_year), 1, 1) if data_year else period

        if municipality_code:
            frame = frame[
                (frame["oktmo"].astype(str) == municipality_code)
                | (frame["oktmo_stable"].astype(str).str.startswith(municipality_code[:8]))
            ]

        for _, row in frame.iterrows():
            value = row.get("indicator_value")
            if value is None or str(value).strip() == "":
                continue
            try:
                numeric = float(str(value).replace(",", ".").replace(" ", ""))
            except ValueError:
                continue

            municipality = str(row.get("municipality", "")).strip()
            oktmo_code = str(row.get("oktmo", "")).strip()[:8]
            observations.append(
                UnifiedObservation(
                    indicator_code=str(row.get("indicator_code", "")).strip(),
                    indicator_name=str(row.get("indicator_name", "")).strip(),
                    value=numeric,
                    unit=str(row.get("indicator_unit", "")).strip() or "ед.",
                    period=effective_period,
                    oktmo=oktmo_code or municipality,
                    source=self.connector_id,
                    category=str(row.get("indicator_section", "")).strip() or None,
                    metadata={
                        "data_year": data_year,
                        "requested_year": str(period.year),
                        "bashkortostan_region_id": get_settings().bashkortostan_region_id,
                    },
                )
            )

        return ConnectorResult(
            connector_id=self.connector_id,
            period=effective_period,
            oktmo=municipality_code,
            observations=observations,
            raw_payload_hash=self.hash_observations(observations),
            fetched_at=datetime.now(timezone.utc),
        )
