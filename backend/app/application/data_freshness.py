from datetime import date, datetime

from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from app.infrastructure.db.models import ConnectorRun, Indicator, IndicatorValue

CONNECTOR_LABELS = {
    "bdmo_tochno": "БД ПМО / tochno.st",
    "opendata_rb": "Портал открытых данных РБ",
    "minfin_rb": "Минфин РБ",
    "emiss": "Башкортостанстат / ЕМИСС",
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


async def latest_connector_runs(session: AsyncSession) -> list[dict]:
    rows: list[dict] = []
    for connector_id, label in CONNECTOR_LABELS.items():
        run = await session.scalar(
            select(ConnectorRun)
            .where(ConnectorRun.connector_id == connector_id, ConnectorRun.status == "success")
            .order_by(ConnectorRun.finished_at.desc())
            .limit(1)
        )
        rows.append(
            {
                "connector_id": connector_id,
                "display_name": label,
                "last_success_at": run.finished_at if run else None,
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
            notes.append(f"{indicator.name}: демонстрационные данные (сид)")
        elif indicator.source == "manual_csv":
            notes.append(f"{indicator.name}: ручной импорт CSV")
        elif indicator.source == "bdmo_tochno":
            notes.append(f"{indicator.name}: БД ПМО")
    return notes
