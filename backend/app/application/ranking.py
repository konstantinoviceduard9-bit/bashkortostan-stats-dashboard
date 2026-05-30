"""Расчёт рейтингов: сводный индекс по KPI с live-данными и рейтинги по отдельным показателям."""

from __future__ import annotations

from collections import defaultdict
from datetime import date

from sqlalchemy import select, text
from sqlalchemy.ext.asyncio import AsyncSession

from app.infrastructure.db.models import Indicator, IndicatorValue, Municipality, RankingSnapshot

MATERIALIZED_VIEW = "mv_ranking_current"
COMPOSITE_INDICATOR_CODE = "composite_index"
MIN_MUNICIPALITIES = 5

# KPI для сводного индекса: (код, выше — лучше)
COMPOSITE_KPI_CODES: tuple[tuple[str, bool], ...] = (
    ("housing_commissioned", True),
    ("budget_security", True),
    ("average_salary", True),
    ("natural_growth", True),
    ("doctors_per_capita", True),
    ("unemployment", False),
)


def percentile_score(rank: int, total: int) -> float:
    """100 — лучший, 0 — худший в группе."""
    if total <= 0:
        return 0.0
    return round((total - rank + 1) / total * 100, 2)


async def ensure_composite_indicator(session: AsyncSession) -> Indicator:
    indicator = await session.scalar(select(Indicator).where(Indicator.code == COMPOSITE_INDICATOR_CODE))
    if indicator is None:
        indicator = Indicator(
            code=COMPOSITE_INDICATOR_CODE,
            name="Сводный индекс эффективности",
            unit="балл",
            category="Рейтинг",
            source="computed",
        )
        session.add(indicator)
        await session.flush()
    return indicator


async def _save_ranking_rows(
    session: AsyncSession,
    *,
    indicator_id: int,
    period: date,
    ranked: list[tuple[int, float]],
) -> None:
    total = len(ranked)
    for index, (municipality_id, value) in enumerate(ranked, start=1):
        previous = await session.scalar(
            select(RankingSnapshot)
            .where(
                RankingSnapshot.indicator_id == indicator_id,
                RankingSnapshot.municipality_id == municipality_id,
            )
            .order_by(RankingSnapshot.period.desc())
            .limit(1)
        )
        rank_delta = previous.rank - index if previous else None

        existing = await session.scalar(
            select(RankingSnapshot).where(
                RankingSnapshot.indicator_id == indicator_id,
                RankingSnapshot.period == period,
                RankingSnapshot.municipality_id == municipality_id,
            )
        )
        if existing:
            existing.rank = index
            existing.total = total
            existing.value = value
            existing.rank_delta = rank_delta
        else:
            session.add(
                RankingSnapshot(
                    indicator_id=indicator_id,
                    period=period,
                    municipality_id=municipality_id,
                    rank=index,
                    total=total,
                    value=value,
                    rank_delta=rank_delta,
                )
            )


async def rebuild_composite_ranking(session: AsyncSession, period: date) -> int:
    """Сводный индекс = средний процентиль по доступным KPI с live-данными."""

    composite = await ensure_composite_indicator(session)
    municipality_ids = {
        row.id for row in (await session.execute(select(Municipality))).scalars().all()
    }
    scores_by_municipality: dict[int, list[float]] = defaultdict(list)

    for code, higher_is_better in COMPOSITE_KPI_CODES:
        indicator = await session.scalar(select(Indicator).where(Indicator.code == code))
        if indicator is None:
            continue

        values = (
            await session.execute(
                select(IndicatorValue).where(
                    IndicatorValue.indicator_id == indicator.id,
                    IndicatorValue.period == period,
                    IndicatorValue.municipality_id.in_(municipality_ids),
                    IndicatorValue.payload_hash != "demo",
                )
            )
        ).scalars().all()

        if len(values) < MIN_MUNICIPALITIES:
            continue

        ordered = sorted(values, key=lambda row: row.value, reverse=higher_is_better)
        total = len(ordered)
        for rank, row in enumerate(ordered, start=1):
            scores_by_municipality[row.municipality_id].append(percentile_score(rank, total))

    if not scores_by_municipality:
        return 0

    ranked = sorted(
        ((mid, round(sum(parts) / len(parts), 2)) for mid, parts in scores_by_municipality.items() if parts),
        key=lambda item: item[1],
        reverse=True,
    )
    await _save_ranking_rows(session, indicator_id=composite.id, period=period, ranked=ranked)
    return len(ranked)


async def rebuild_rankings(
    session: AsyncSession,
    period: date,
    indicator_id: int | None = None,
    *,
    refresh_mv: bool = True,
) -> None:
    indicators_query = select(Indicator)
    if indicator_id is not None:
        indicators_query = indicators_query.where(Indicator.id == indicator_id)

    indicators = (await session.execute(indicators_query)).scalars().all()
    municipality_ids = {row.id for row in (await session.execute(select(Municipality))).scalars().all()}

    for indicator in indicators:
        if indicator.code == COMPOSITE_INDICATOR_CODE:
            continue

        higher_is_better = True
        for code, direction in COMPOSITE_KPI_CODES:
            if code == indicator.code:
                higher_is_better = direction
                break

        values = (
            await session.execute(
                select(IndicatorValue).where(
                    IndicatorValue.indicator_id == indicator.id,
                    IndicatorValue.period == period,
                    IndicatorValue.municipality_id.in_(municipality_ids),
                    IndicatorValue.payload_hash != "demo",
                )
            )
        ).scalars().all()

        if len(values) < MIN_MUNICIPALITIES:
            continue

        ranked = sorted(
            ((row.municipality_id, row.value) for row in values),
            key=lambda item: item[1],
            reverse=higher_is_better,
        )
        await _save_ranking_rows(
            session,
            indicator_id=indicator.id,
            period=period,
            ranked=ranked,
        )

    if refresh_mv:
        await refresh_ranking_materialized_view(session)


async def rebuild_dashboard_rankings(session: AsyncSession, period: date) -> dict[str, int]:
    """Пересчёт сводного индекса и рейтингов по KPI с данными."""

    composite_total = await rebuild_composite_ranking(session, period)

    kpi_updated = 0
    for code, _ in COMPOSITE_KPI_CODES:
        indicator = await session.scalar(select(Indicator).where(Indicator.code == code))
        if indicator is None:
            continue
        await rebuild_rankings(session, period, indicator_id=indicator.id, refresh_mv=False)
        kpi_updated += 1

    await refresh_ranking_materialized_view(session)
    return {"composite_ranked": composite_total, "kpi_rankings_updated": kpi_updated}


async def refresh_ranking_materialized_view(session: AsyncSession) -> None:
    try:
        await session.execute(text(f"REFRESH MATERIALIZED VIEW CONCURRENTLY {MATERIALIZED_VIEW}"))
    except Exception:
        try:
            await session.execute(text(f"REFRESH MATERIALIZED VIEW {MATERIALIZED_VIEW}"))
        except Exception:
            return
