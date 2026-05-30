from datetime import date, datetime

from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from app.infrastructure.db.models import ConnectorRun, Indicator, IndicatorValue

CONNECTOR_LABELS = {
    "bdmo_tochno": "БД ПМО",
    "opendata_rb": "Портал открытых данных РБ",
    "rosstat_bdpmo": "Росстат БД ПМО",
    "minfin_rb": "Минфин РБ",
    "emiss": "ЕМИСС",
    "gas_manual": "ГАС «Управление»",
}

DEMO_KPI_CODES = (
    "budget_security",
    "unemployment",
    "average_salary",
    "natural_growth",
    "doctors_per_capita",
    "housing_commissioned",
)


def derive_source_status(connector_id: str, run: ConnectorRun | None) -> str:
    """Статус для UI: live | skipped | empty | failed | manual | not_run."""

    if connector_id == "gas_manual" and run is None:
        return "manual"
    if run is None:
        return "not_run"
    if run.connector_id == "gas_manual":
        return "manual"
    if run.status == "failed":
        return "failed"
    if run.status == "skipped":
        return "skipped"
    if run.status == "error":
        return "failed"
    if run.connector_id == "gas_manual":
        return "manual"
    if run.status == "empty":
        return "empty"
    if run.status == "success" and run.message and "сохранено 0" in run.message:
        return "empty"
    return "live"


async def latest_connector_runs(session: AsyncSession) -> list[dict]:
    rows: list[dict] = []
    for connector_id, label in CONNECTOR_LABELS.items():
        run = await session.scalar(
            select(ConnectorRun)
            .where(ConnectorRun.connector_id == connector_id)
            .order_by(ConnectorRun.finished_at.desc())
            .limit(1)
        )
        rows.append(
            {
                "connector_id": connector_id,
                "display_name": label,
                "status": derive_source_status(connector_id, run),
                "last_success_at": run.finished_at if run and run.status == "success" else None,
                "last_run_at": run.finished_at if run else None,
                "period": run.period if run else None,
                "message": run.message if run else None,
            }
        )
    return rows


async def kpi_source_notes(session: AsyncSession, municipality_id: int, period: date) -> list[str]:
    notes: list[str] = []
    for code in DEMO_KPI_CODES:
        indicator = await session.scalar(select(Indicator).where(Indicator.code == code))
        if indicator is None:
            continue
        value_row = await session.scalar(
            select(IndicatorValue).where(
                IndicatorValue.indicator_id == indicator.id,
                IndicatorValue.municipality_id == municipality_id,
                IndicatorValue.period == period,
            )
        )
        if value_row is None:
            continue
        if indicator.source == "demo":
            continue
        elif indicator.source == "manual_csv":
            notes.append(f"{indicator.name}: ручной импорт из таблицы")
        elif indicator.source == "bdmo_tochno":
            notes.append(f"{indicator.name}: БД ПМО (официальная муниципальная статистика)")
        elif indicator.source == "rosstat_bdpmo":
            notes.append(f"{indicator.name}: Росстат БД ПМО")
        elif indicator.source == "opendata_rb":
            notes.append(f"{indicator.name}: портал открытых данных РБ")
    return notes
