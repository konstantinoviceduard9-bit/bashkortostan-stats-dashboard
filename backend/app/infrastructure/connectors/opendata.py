from datetime import date, datetime, timezone
import json
from pathlib import Path

import httpx

from app.application.municipality_resolver import MunicipalityResolver, normalize_label
from app.config import get_settings
from app.domain.entities import ConnectorResult, UnifiedObservation
from app.infrastructure.connectors.base import BaseConnector
from app.infrastructure.connectors.opendata_csv import load_opendata_frame

CATALOG_PATH = Path(__file__).resolve().parents[3] / "data" / "opendata_catalog.json"

MUNICIPALITY_HINTS = (
    "municipality",
    "муниципальн",
    "муниципал",
    "муниципальное образование",
)

MUNICIPALITY_EXACT_COLUMNS = frozenset(
    {
        "municipality",
        "муниципальное образование, на территории которого располагается объект",
        "муниципальное образование",
    }
)

HEADER_LABELS = frozenset({"municipality", "муниципальное образование"})


class OpendataRbConnector(BaseConnector):
    connector_id = "opendata_rb"
    display_name = "Портал открытых данных РБ"

    def _load_catalog(self) -> list[dict]:
        if not CATALOG_PATH.exists():
            return []
        return json.loads(CATALOG_PATH.read_text(encoding="utf-8"))

    @staticmethod
    def _detect_municipality_column(frame) -> str | None:
        for column in frame.columns:
            if str(column).strip().lower() in MUNICIPALITY_EXACT_COLUMNS:
                return column
        for column in frame.columns:
            lowered = str(column).lower()
            if any(hint in lowered for hint in MUNICIPALITY_HINTS):
                return column
        return None

    @staticmethod
    def _normalize_municipality_label(label: str) -> str:
        text = label.strip()
        if text.lower().startswith("г.") and not text.lower().startswith("г. "):
            return "г. " + text[2:].lstrip()
        return text

    @staticmethod
    def _is_data_label(label: str) -> bool:
        key = normalize_label(label)
        return bool(key) and key not in HEADER_LABELS

    async def fetch(self, period: date, municipality_code: str | None = None) -> ConnectorResult:
        settings = get_settings()
        observations: list[UnifiedObservation] = []
        resolver = MunicipalityResolver()
        skipped_unresolved = 0

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

                try:
                    frame = load_opendata_frame(response.text)
                except Exception:
                    continue

                municipality_column = self._detect_municipality_column(frame)
                if not municipality_column:
                    continue

                counts = frame.groupby(municipality_column).size()
                dataset_id = dataset.get("datasetId", "unknown")
                title = dataset.get("title", dataset_id)

                for municipality_name, count in counts.items():
                    label = self._normalize_municipality_label(str(municipality_name))
                    if not self._is_data_label(label):
                        continue
                    if resolver.resolve(label) is None:
                        skipped_unresolved += 1
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
            stats={"skipped_unresolved_labels": skipped_unresolved},
        )
