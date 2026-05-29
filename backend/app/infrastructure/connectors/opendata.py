from datetime import date, datetime, timezone
import io
import json
from pathlib import Path

import httpx
import pandas as pd

from app.config import get_settings
from app.domain.entities import ConnectorResult, UnifiedObservation
from app.infrastructure.connectors.base import BaseConnector

CATALOG_PATH = Path(__file__).resolve().parents[3] / "data" / "opendata_catalog.json"

MUNICIPALITY_HINTS = (
    "municipality",
    "муниципальн",
    "муниципал",
    "муниципальное образование",
)


class OpendataRbConnector(BaseConnector):
    connector_id = "opendata_rb"
    display_name = "Портал открытых данных РБ"

    def _load_catalog(self) -> list[dict]:
        if not CATALOG_PATH.exists():
            return []
        return json.loads(CATALOG_PATH.read_text(encoding="utf-8"))

    @staticmethod
    def _detect_municipality_column(frame: pd.DataFrame) -> str | None:
        for column in frame.columns:
            lowered = str(column).lower()
            if any(hint in lowered for hint in MUNICIPALITY_HINTS):
                return column
        return None

    async def fetch(self, period: date, municipality_code: str | None = None) -> ConnectorResult:
        settings = get_settings()
        observations: list[UnifiedObservation] = []

        async with httpx.AsyncClient(timeout=60.0, follow_redirects=True) as client:
            for dataset in self._load_catalog():
                csv_url = dataset.get("csvUrl")
                if not csv_url:
                    continue

                try:
                    response = await client.get(csv_url)
                    response.raise_for_status()
                except httpx.HTTPError:
                    continue

                frame = pd.read_csv(io.StringIO(response.text), sep=None, engine="python", dtype=str)
                municipality_column = self._detect_municipality_column(frame)
                if not municipality_column:
                    continue

                counts = frame.groupby(municipality_column).size()
                dataset_id = dataset.get("datasetId", "unknown")
                title = dataset.get("title", dataset_id)

                for municipality_name, count in counts.items():
                    label = str(municipality_name).strip()
                    if not label:
                        continue
                    observations.append(
                        UnifiedObservation(
                            indicator_code=f"opendata_health_{dataset_id}_count",
                            indicator_name=f"{title}: количество объектов",
                            value=float(count),
                            unit="ед.",
                            period=period,
                            oktmo=label,
                            source=self.connector_id,
                            category="Здравоохранение",
                            metadata={"portal": settings.opendata_base_url, "csvUrl": csv_url},
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
