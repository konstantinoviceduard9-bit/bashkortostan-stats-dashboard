from app.application.connector_messages import format_connector_message
from app.application.data_freshness import derive_source_status


def test_format_skipped_minfin():
    status, message = format_connector_message(
        loaded=0,
        saved=0,
        skipped_municipality=0,
        stats={"skipped": "MINFIN_REPORT_URL not set"},
    )
    assert status == "skipped"
    assert "MINFIN_REPORT_URL" in message


def test_format_success_with_stats():
    status, message = format_connector_message(
        loaded=100,
        saved=95,
        skipped_municipality=5,
        stats={"datasets_processed": 13, "numeric_columns": 2},
    )
    assert status == "success"
    assert "100" in message
    assert "наборов данных" in message


def test_derive_source_status_gas_manual():
    assert derive_source_status("gas_manual", None) == "manual"


def test_derive_source_status_skipped():
    from app.infrastructure.db.models import ConnectorRun

    run = ConnectorRun(connector_id="minfin_rb", status="skipped", message="Пропущено")
    assert derive_source_status("minfin_rb", run) == "skipped"
