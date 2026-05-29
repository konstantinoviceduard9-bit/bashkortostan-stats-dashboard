from datetime import date, datetime, timezone
import io

import httpx
import pandas as pd

from app.config import get_settings
from app.domain.entities import ConnectorResult, UnifiedObservation
from app.infrastructure.connectors.base import BaseConnector

# Пример набора: список больниц (можно расширить каталогом)
DEFAULT_DATASETS = [
    {
        "id": "health_23",
        "name": "Список больниц: количество объектов",
        "url": "https://opendata.sf2.simai.ru/scripts/dowhload_file_utf8.php?file=/opendata/csv/3779/data/data-20170414T092500-structure-20170414T092500.csv",
        "municipality_columns": ("municipality", "муниципальное образование", "муниципалитет"),
    }
]


class OpendataRbConnector(BaseConnector):
    connector_id = "opendata_rb"
    display_name = "Портал открытых данных РБ"

    async def fetch(self, period: date, municipality_code: str | None = None) -> ConnectorResult:
        settings = get_settings()
        observations: list[UnifiedObservation] = []

        async with httpx.AsyncClient(timeout=60.0) as client:
            for dataset in DEFAULT_DATASETS:
                response = await client.get(dataset["url"])
                response.raise_for_status()
                frame = pd.read_csv(io.StringIO(response.text), sep=None, engine="python", dtype=str)

                municipality_column = next(
                    (column for column in frame.columns if column.lower() in dataset["municipality_columns"]),
                    None,
                )
                if not municipality_column:
                    continue

                counts = frame.groupby(municipality_column).size()
                for municipality_name, count in counts.items():
                    observations.append(
                        UnifiedObservation(
                            indicator_code=f"opendata_{dataset['id']}_count",
                            indicator_name=dataset["name"],
                            value=float(count),
                            unit="ед.",
                            period=period,
                            oktmo=str(municipality_name).strip(),
                            source=self.connector_id,
                            category="Здравоохранение",
                            metadata={"portal": settings.opendata_base_url},
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
