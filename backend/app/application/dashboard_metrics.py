from datetime import date

from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from app.infrastructure.db.models import IndicatorValue


async def load_sparkline(
    session: AsyncSession,
    indicator_id: int,
    municipality_id: int,
    latest_period: date,
    months: int = 12,
) -> list[float]:
    rows = (
        await session.execute(
            select(IndicatorValue)
            .where(
                IndicatorValue.indicator_id == indicator_id,
                IndicatorValue.municipality_id == municipality_id,
            )
            .order_by(IndicatorValue.period.asc())
        )
    ).scalars().all()

    if not rows:
        return []

    values_by_period = {row.period: row.value for row in rows}
    sorted_periods = sorted(values_by_period.keys())
    if latest_period in sorted_periods:
        end_index = sorted_periods.index(latest_period)
    else:
        end_index = len(sorted_periods) - 1

    start_index = max(0, end_index - months + 1)
    window = sorted_periods[start_index : end_index + 1]
    return [values_by_period[period] for period in window]


def percent_change(current: float | None, previous: float | None) -> float | None:
    if current is None or previous is None or previous == 0:
        return None
    return round((current - previous) / abs(previous) * 100, 1)
