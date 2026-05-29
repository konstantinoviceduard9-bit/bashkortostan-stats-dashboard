from datetime import date, datetime, timezone
import io

import pandas as pd

from app.domain.entities import ConnectorResult, UnifiedObservation
from app.infrastructure.connectors.base import BaseConnector


class GasManualConnector(BaseConnector):
    """ГАС «Управление» — данные только через ручную загрузку CSV/Excel."""

    connector_id = "gas_manual"
    display_name = "ГАС Управление (ручная загрузка)"

    def __init__(self, file_bytes: bytes | None = None, filename: str | None = None) -> None:
        self.file_bytes = file_bytes
        self.filename = filename

    async def fetch(self, period: date, municipality_code: str | None = None) -> ConnectorResult:
        observations: list[UnifiedObservation] = []
        if self.file_bytes and self.filename:
            if self.filename.endswith(".csv"):
                frame = pd.read_csv(io.BytesIO(self.file_bytes), sep=None, engine="python", dtype=str)
            else:
                frame = pd.read_excel(io.BytesIO(self.file_bytes), dtype=str)

            for _, row in frame.iterrows():
                oktmo = str(row.get("oktmo", "") or row.get("municipality", "")).strip()
                code = str(row.get("indicator_code", "") or row.get("code", "")).strip()
                value = row.get("value")
                if not oktmo or not code or value is None:
                    continue
                try:
                    numeric = float(str(value).replace(",", "."))
                except ValueError:
                    continue
                observations.append(
                    UnifiedObservation(
                        indicator_code=code,
                        indicator_name=str(row.get("indicator_name", "") or row.get("name", code)).strip(),
                        value=numeric,
                        unit=str(row.get("unit", "ед.")).strip(),
                        period=period,
                        oktmo=oktmo,
                        source=self.connector_id,
                        category=str(row.get("category", "")).strip() or None,
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
