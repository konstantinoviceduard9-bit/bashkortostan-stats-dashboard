from datetime import date, datetime, timezone

from fastapi import APIRouter, Depends, HTTPException, Query
from sqlalchemy import func, select
from sqlalchemy.ext.asyncio import AsyncSession

from app.api.dependencies import CurrentUser, get_current_user
from app.api.schemas import (
    DashboardSummary,
    DataSourceInfo,
    IndicatorRow,
    KpiCard,
    RatingIndicatorOption,
    RatingRow,
    RatingView,
    UserProfile,
)
from app.application.dashboard_metrics import load_sparkline, percent_change
from app.application.data_freshness import kpi_source_notes, latest_connector_runs
from app.application.ranking import COMPOSITE_KPI_CODES
from app.application.triggers import build_triggers
from app.infrastructure.db.models import Indicator, IndicatorValue, Municipality, RankingSnapshot, UserRoleEnum
from app.infrastructure.db.session import get_db

router = APIRouter(prefix="/dashboard", tags=["dashboard"])

KPI_CODES = [
    "budget_security",
    "unemployment",
    "average_salary",
    "natural_growth",
    "doctors_per_capita",
    "housing_commissioned",
]

RANKING_INDICATOR_CODE = "composite_index"
RATING_INDICATOR_ORDER = [RANKING_INDICATOR_CODE, *[code for code, _ in COMPOSITE_KPI_CODES]]


async def _list_rating_indicators(session: AsyncSession) -> list[RatingIndicatorOption]:
    options: list[RatingIndicatorOption] = []
    for code in RATING_INDICATOR_ORDER:
        indicator = await session.scalar(select(Indicator).where(Indicator.code == code))
        if indicator is None:
            continue
        options.append(RatingIndicatorOption(code=indicator.code, name=indicator.name, unit=indicator.unit))
    return options


@router.get("/me", response_model=UserProfile)
async def me(user: CurrentUser = Depends(get_current_user), session: AsyncSession = Depends(get_db)) -> UserProfile:
    municipality_name = None
    if user.municipality_id:
        municipality = await session.get(Municipality, user.municipality_id)
        municipality_name = municipality.name if municipality else None
    return UserProfile(
        login=user.login,
        role=user.role.value,
        municipality_name=municipality_name,
        max_user_id=user.max_user_id,
    )


@router.get("/summary", response_model=DashboardSummary)
async def summary(
    user: CurrentUser = Depends(get_current_user),
    session: AsyncSession = Depends(get_db),
    period: date | None = None,
) -> DashboardSummary:
    if user.municipality_id is None and user.role != UserRoleEnum.admin:
        raise HTTPException(status_code=403, detail="Район не привязан к пользователю")

    municipality = await session.get(Municipality, user.municipality_id)
    if municipality is None:
        raise HTTPException(status_code=404, detail="Муниципалитет не найден")

    latest_period = period or await session.scalar(
        select(func.max(IndicatorValue.period)).where(
            IndicatorValue.municipality_id == municipality.id,
            IndicatorValue.payload_hash != "demo",
        )
    )
    if latest_period is None:
        latest_period = await session.scalar(
            select(func.max(IndicatorValue.period)).where(IndicatorValue.municipality_id == municipality.id)
        )
    if latest_period is None:
        latest_period = await session.scalar(select(func.max(IndicatorValue.period)))
    if latest_period is None:
        latest_period = date.today().replace(month=1, day=1)

    rank_indicator = await session.scalar(select(Indicator).where(Indicator.code == RANKING_INDICATOR_CODE))
    rank_row = None
    if rank_indicator:
        rank_row = await session.scalar(
            select(RankingSnapshot).where(
                RankingSnapshot.indicator_id == rank_indicator.id,
                RankingSnapshot.municipality_id == municipality.id,
                RankingSnapshot.period == latest_period,
            )
        )

    kpis: list[KpiCard] = []
    for code in KPI_CODES:
        indicator = await session.scalar(select(Indicator).where(Indicator.code == code))
        if indicator is None:
            kpis.append(
                KpiCard(code=code, name=code, value=None, unit="—", change_percent=None, sparkline=[], is_live=False)
            )
            continue

        value_row = await session.scalar(
            select(IndicatorValue)
            .where(
                IndicatorValue.indicator_id == indicator.id,
                IndicatorValue.municipality_id == municipality.id,
                IndicatorValue.payload_hash != "demo",
            )
            .order_by(IndicatorValue.period.desc())
            .limit(1)
        )
        is_live = value_row is not None
        if value_row is None:
            value_row = await session.scalar(
                select(IndicatorValue)
                .where(
                    IndicatorValue.indicator_id == indicator.id,
                    IndicatorValue.municipality_id == municipality.id,
                )
                .order_by(IndicatorValue.period.desc())
                .limit(1)
            )

        kpi_period = value_row.period if value_row else latest_period
        previous_period = (
            date(kpi_period.year - 1, kpi_period.month, 1)
            if kpi_period.month == 1
            else date(kpi_period.year, kpi_period.month - 1, 1)
        )
        previous_row = await session.scalar(
            select(IndicatorValue).where(
                IndicatorValue.indicator_id == indicator.id,
                IndicatorValue.municipality_id == municipality.id,
                IndicatorValue.period == previous_period,
            )
        )
        sparkline = await load_sparkline(session, indicator.id, municipality.id, kpi_period)

        kpis.append(
            KpiCard(
                code=indicator.code,
                name=indicator.name,
                value=value_row.value if value_row else None,
                unit=indicator.unit,
                change_percent=percent_change(
                    value_row.value if value_row else None,
                    previous_row.value if previous_row else None,
                ),
                sparkline=sparkline,
                source=indicator.source if is_live else ("demo" if value_row else None),
                is_live=is_live,
                data_period=kpi_period if value_row else None,
            )
        )

    total_municipalities = await session.scalar(select(func.count()).select_from(Municipality))

    sources = [
        DataSourceInfo(
            connector_id=row["connector_id"],
            display_name=row["display_name"],
            status=row["status"],
            last_success_at=row["last_success_at"],
            last_run_at=row["last_run_at"],
            period=row["period"],
            message=row["message"],
        )
        for row in await latest_connector_runs(session)
    ]
    notes = await kpi_source_notes(session, municipality.id, latest_period)

    kpi_payload = [k.model_dump() for k in kpis]
    triggers = build_triggers(kpi_payload)

    return DashboardSummary(
        municipality_name=municipality.name,
        rank=rank_row.rank if rank_row else None,
        total=rank_row.total if rank_row else (total_municipalities or 63),
        rank_delta=rank_row.rank_delta if rank_row else None,
        period=latest_period,
        kpis=kpis,
        triggers=triggers,
        data_sources=sources,
        source_notes=notes,
    )


@router.get("/indicators", response_model=list[IndicatorRow])
async def indicators(
    user: CurrentUser = Depends(get_current_user),
    session: AsyncSession = Depends(get_db),
    category: str | None = Query(default=None),
) -> list[IndicatorRow]:
    if user.municipality_id is None:
        raise HTTPException(status_code=403, detail="Район не привязан")

    query = select(Indicator)
    if category:
        query = query.where(Indicator.category == category)
    indicator_rows = (await session.execute(query.order_by(Indicator.category, Indicator.name))).scalars().all()

    latest_period = await session.scalar(
        select(func.max(IndicatorValue.period)).where(IndicatorValue.payload_hash != "demo")
    )
    if latest_period is None:
        latest_period = await session.scalar(select(func.max(IndicatorValue.period)))
    if latest_period is None:
        latest_period = date.today()
    connector_runs = await latest_connector_runs(session)
    received_by_source = {
        row["connector_id"]: row["last_run_at"] or row["last_success_at"]
        for row in connector_runs
        if row["last_run_at"] or row["last_success_at"]
    }
    result: list[IndicatorRow] = []

    for indicator in indicator_rows:
        value_row = await session.scalar(
            select(IndicatorValue).where(
                IndicatorValue.indicator_id == indicator.id,
                IndicatorValue.municipality_id == user.municipality_id,
                IndicatorValue.period == latest_period,
            )
        )
        republic_avg = await session.scalar(
            select(func.avg(IndicatorValue.value)).where(
                IndicatorValue.indicator_id == indicator.id,
                IndicatorValue.period == latest_period,
            )
        )
        received_at = None
        if value_row:
            received_at = received_by_source.get(indicator.source)
            if received_at is None and indicator.source not in {"demo", "catalog"}:
                received_at = datetime.combine(value_row.period, datetime.min.time()).replace(tzinfo=timezone.utc)
        result.append(
            IndicatorRow(
                code=indicator.code,
                name=indicator.name,
                category=indicator.category,
                value=value_row.value if value_row else None,
                unit=indicator.unit,
                change_percent=None,
                republic_average=float(republic_avg) if republic_avg is not None else None,
                source=indicator.source,
                received_at=received_at,
            )
        )

    return result


@router.get("/rating", response_model=RatingView)
async def rating(
    user: CurrentUser = Depends(get_current_user),
    session: AsyncSession = Depends(get_db),
    indicator: str | None = Query(default=None, description="Код показателя для рейтинга"),
) -> RatingView:
    available = await _list_rating_indicators(session)
    if not available:
        return RatingView(
            self_rank=None,
            self_total=63,
            indicator_code=RANKING_INDICATOR_CODE,
            indicator_name="Сводный индекс",
            unit="балл",
            rows=[],
            available_indicators=[],
        )

    indicator_code = indicator or RANKING_INDICATOR_CODE
    if not any(item.code == indicator_code for item in available):
        indicator_code = available[0].code

    base_indicator = await session.scalar(select(Indicator).where(Indicator.code == indicator_code))
    if base_indicator is None:
        return RatingView(
            self_rank=None,
            self_total=63,
            indicator_code=indicator_code,
            indicator_name=indicator_code,
            unit="—",
            rows=[],
            available_indicators=available,
        )

    latest_period = await session.scalar(
        select(func.max(RankingSnapshot.period)).where(RankingSnapshot.indicator_id == base_indicator.id)
    )
    if latest_period is None:
        return RatingView(
            self_rank=None,
            self_total=63,
            indicator_code=base_indicator.code,
            indicator_name=base_indicator.name,
            unit=base_indicator.unit,
            rows=[],
            available_indicators=available,
        )

    rows = (
        await session.execute(
            select(RankingSnapshot, Municipality)
            .join(Municipality, Municipality.id == RankingSnapshot.municipality_id)
            .where(
                RankingSnapshot.indicator_id == base_indicator.id,
                RankingSnapshot.period == latest_period,
            )
            .order_by(RankingSnapshot.rank.asc())
        )
    ).all()

    self_rank = None
    self_total = len(rows) or 63
    show_names = user.role == UserRoleEnum.admin

    rating_rows: list[RatingRow] = []
    for snapshot, municipality in rows:
        is_self = user.municipality_id == municipality.id
        if is_self:
            self_rank = snapshot.rank
            self_total = snapshot.total
        label = municipality.name if show_names else f"Район #{snapshot.rank}"
        rating_rows.append(
            RatingRow(
                rank=snapshot.rank,
                label=label,
                value=snapshot.value,
                is_self=is_self,
            )
        )

    return RatingView(
        self_rank=self_rank,
        self_total=self_total,
        indicator_code=base_indicator.code,
        indicator_name=base_indicator.name,
        unit=base_indicator.unit,
        rows=rating_rows,
        available_indicators=available,
    )
