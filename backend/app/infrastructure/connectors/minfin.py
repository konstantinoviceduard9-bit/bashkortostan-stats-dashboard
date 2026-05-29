from datetime import date, datetime, timezone
import io

import httpx
import pandas as pd

from app.config import get_settings
from app.domain.entities import ConnectorResult, UnifiedObservation
from app.infrastructure.connectors.base import BaseConnector


class MinfinRbConnector(BaseConnector):
    """Минфин РБ — Excel по URL из MINFIN_REPORT_URL (колонки: oktmo/муниципалитет, value, code/name)."""

    connector_id = "minfin_rb"
    display_name = "Минфин РБ / открытые данные"

    async def fetch(self, period: date, municipality_code: str | None = None) -> ConnectorResult:
        settings = get_settings()
        observations: list[UnifiedObservation] = []

        if not settings.minfin_report_url:
            return ConnectorResult(
                connector_id=self.connector_id,
                period=period,
                oktmo=municipality_code,
                observations=[],
                raw_payload_hash=self.hash_observations([]),
                fetched_at=datetime.now(timezone.utc),
                stats={"skipped": "MINFIN_REPORT_URL not set"},
            )

        async with httpx.AsyncClient(timeout=120.0, follow_redirects=True) as client:
            response = await client.get(settings.minfin_report_url)
            response.raise_for_status()

        frame = pd.read_excel(io.BytesIO(response.content), dtype=str)
        columns = {str(col).strip().lower(): col for col in frame.columns}

        oktmo_col = columns.get("oktmo") or columns.get("октмо")
        name_col = columns.get("municipality") or columns.get("муниципалитет") or columns.get("муниципальное образование")
        value_col = columns.get("value") or columns.get("значение") or columns.get("показатель")
        code_col = columns.get("code") or columns.get("код") or columns.get("indicator_code")

        if value_col is None or (oktmo_col is None and name_col is None):
            return ConnectorResult(
                connector_id=self.connector_id,
                period=period,
                oktmo=municipality_code,
                observations=[],
                raw_payload_hash=self.hash_observations([]),
                fetched_at=datetime.now(timezone.utc),
                stats={"error": "expected columns: oktmo|municipality, value, optional code"},
            )

        for _, row in frame.iterrows():
            try:
                numeric = float(str(row[value_col]).replace(",", ".").replace(" ", ""))
            except (TypeError, ValueError):
                continue

            oktmo = str(row[oktmo_col]).strip() if oktmo_col else ""
            label = str(row[name_col]).strip() if name_col else oktmo
            if not label:
                continue

            code = str(row[code_col]).strip() if code_col else "minfin_report_value"
            observations.append(
                UnifiedObservation(
                    indicator_code=code,
                    indicator_name=code,
                    value=numeric,
                    unit="ед.",
                    period=period,
                    oktmo=oktmo or label,
                    source=self.connector_id,
                    category="Бюджет",
                )
            )

        if municipality_code:
            observations = [row for row in observations if row.oktmo == municipality_code]

        return ConnectorResult(
            connector_id=self.connector_id,
            period=period,
            oktmo=municipality_code,
            observations=observations,
            raw_payload_hash=self.hash_observations(observations),
            fetched_at=datetime.now(timezone.utc),
        )
