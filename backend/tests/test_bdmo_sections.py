import pandas as pd

from app.infrastructure.connectors.bdmo_sections import resolve_data_year


def test_resolve_data_year_prefers_requested() -> None:
    frame = pd.DataFrame({"year": ["2021", "2022", "2023"]})
    assert resolve_data_year(frame, 2023) == "2023"


def test_resolve_data_year_falls_back_to_latest_available() -> None:
    frame = pd.DataFrame({"year": ["2021", "2022", "2023"]})
    assert resolve_data_year(frame, 2026) == "2023"
