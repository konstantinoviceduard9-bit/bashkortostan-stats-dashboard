from datetime import date, datetime, timezone

from app.domain.entities import ConnectorResult, UnifiedObservation
from app.infrastructure.connectors.base import BaseConnector


class MinfinRbConnector(BaseConnector):
    """Минфин РБ — заглушка: ожидается URL Excel/PDF в MINFIN_REPORT_URL."""

    connector_id = "minfin_rb"
    display_name = "Минфин РБ / открытые данные"

    async def fetch(self, period: date, municipality_code: str | None = None) -> ConnectorResult:
        # TODO: скачивание отчёта и парсинг openpyxl/pdfplumber
        observations: list[UnifiedObservation] = []
        return ConnectorResult(
            connector_id=self.connector_id,
            period=period,
            oktmo=municipality_code,
            observations=observations,
            raw_payload_hash=self.hash_observations(observations),
            fetched_at=datetime.now(timezone.utc),
        )
