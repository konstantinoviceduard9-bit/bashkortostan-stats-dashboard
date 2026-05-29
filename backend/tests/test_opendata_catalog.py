from app.infrastructure.connectors.opendata import CATALOG_PATH, OpendataRbConnector


def test_opendata_catalog_exists() -> None:
    assert CATALOG_PATH.exists(), f"Missing catalog at {CATALOG_PATH}"


def test_opendata_catalog_has_health_datasets() -> None:
    catalog = OpendataRbConnector()._load_catalog()
    assert len(catalog) >= 1
    assert all(item.get("csvUrl") for item in catalog)
