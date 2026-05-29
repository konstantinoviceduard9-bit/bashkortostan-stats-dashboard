from datetime import date

from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from app.infrastructure.db.models import Indicator, IndicatorValue, Municipality, RankingSnapshot


async def rebuild_rankings(session: AsyncSession, period: date, indicator_id: int | None = None) -> None:
    indicators_query = select(Indicator)
    if indicator_id is not None:
        indicators_query = indicators_query.where(Indicator.id == indicator_id)

    indicators = (await session.execute(indicators_query)).scalars().all()
    municipalities = (await session.execute(select(Municipality))).scalars().all()
    municipality_ids = {row.id for row in municipalities}

    for indicator in indicators:
        values = (
            await session.execute(
                select(IndicatorValue).where(
                    IndicatorValue.indicator_id == indicator.id,
                    IndicatorValue.period == period,
                    IndicatorValue.municipality_id.in_(municipality_ids),
                )
            )
        ).scalars().all()

        if not values:
            continue

        sorted_values = sorted(values, key=lambda row: row.value, reverse=True)
        total = len(sorted_values)

        for index, row in enumerate(sorted_values, start=1):
            previous = await session.scalar(
                select(RankingSnapshot)
                .where(
                    RankingSnapshot.indicator_id == indicator.id,
                    RankingSnapshot.municipality_id == row.municipality_id,
                )
                .order_by(RankingSnapshot.period.desc())
                .limit(1)
            )
            rank_delta = None
            if previous:
                rank_delta = previous.rank - index

            existing = await session.scalar(
                select(RankingSnapshot).where(
                    RankingSnapshot.indicator_id == indicator.id,
                    RankingSnapshot.period == period,
                    RankingSnapshot.municipality_id == row.municipality_id,
                )
            )
            if existing:
                existing.rank = index
                existing.total = total
                existing.value = row.value
                existing.rank_delta = rank_delta
            else:
                session.add(
                    RankingSnapshot(
                        indicator_id=indicator.id,
                        period=period,
                        municipality_id=row.municipality_id,
                        rank=index,
                        total=total,
                        value=row.value,
                        rank_delta=rank_delta,
                    )
                )
