from datetime import date, datetime, timezone
import io

import httpx
import pandas as pd

from app.config import get_settings
from app.domain.entities import ConnectorResult, UnifiedObservation
from app.infrastructure.connectors.base import BaseConnector


class BdmoTochnoConnector(BaseConnector):
    """БД ПМО через плоские CSV tochno.st (region_id=80 — Республика Башкортостан)."""

    connector_id = "bdmo_tochno"
    display_name = "БД ПМО / tochno.st"

    async def fetch(self, period: date, municipality_code: str | None = None) -> ConnectorResult:
        settings = get_settings()
        url = f"{settings.bdmo_tochno_base_url}/Rosstat/data_bdmo_118_v20250918/by_section/data_section1_112_v20250918_section_file.zip"
        observations: list[UnifiedObservation] = []

        async with httpx.AsyncClient(timeout=120.0) as client:
            response = await client.get(url)
            response.raise_for_status()
            frame = pd.read_csv(io.BytesIO(response.content), sep=";", dtype=str, compression="zip")

        year = str(period.year)
        region_mask = frame["region_id"].astype(str) == settings.bashkortostan_region_id
        year_mask = frame["year"].astype(str) == year
        subset = frame[region_mask & year_mask]

        if municipality_code:
            subset = subset[subset["oktmo"].astype(str) == municipality_code]

        for _, row in subset.iterrows():
            value = row.get("indicator_value")
            if value is None or str(value).strip() == "":
                continue
            try:
                numeric = float(str(value).replace(",", ".").replace(" ", ""))
            except ValueError:
                continue

            observations.append(
                UnifiedObservation(
                    indicator_code=str(row.get("indicator_code", "")).strip(),
                    indicator_name=str(row.get("indicator_name", "")).strip(),
                    value=numeric,
                    unit=str(row.get("indicator_unit", "")).strip() or "ед.",
                    period=period,
                    oktmo=str(row.get("oktmo", "")).strip(),
                    source=self.connector_id,
                    category=str(row.get("indicator_section", "")).strip() or None,
                )
            )

        return ConnectorResult(
            connector_id=self.connector_id,
            period=period,
            oktmo=municipality_code,
            observations=observations,
            raw_payload_hash=self.hash_observations(observations),
            fetched_at=datetime.now(timezone.utc),
        )
