import asyncio
from datetime import date

from app.infrastructure.connectors.emiss import EmissConnector


def test_emiss_skips_without_url() -> None:
    result = asyncio.run(EmissConnector().fetch(date(2023, 1, 1)))
    assert result.observations == []
    assert result.stats and result.stats.get("skipped")
