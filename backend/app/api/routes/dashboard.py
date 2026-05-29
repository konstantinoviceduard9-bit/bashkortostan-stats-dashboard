from datetime import date

from fastapi import APIRouter, Depends, HTTPException, Query
from sqlalchemy import func, select
from sqlalchemy.ext.asyncio import AsyncSession

from app.api.dependencies import CurrentUser, get_current_user
from app.api.schemas import (
    DashboardSummary,
    DataSourceInfo,
    IndicatorRow,
    KpiCard,
    RatingRow,
    RatingView,
    UserProfile,
)
from app.application.dashboard_metrics import load_sparkline, percent_change
from app.application.data_freshness import kpi_source_notes, latest_connector_runs
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

RANKING_INDICATOR_CODE = "average_salary"


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

    latest_period = period or await session.scalar(select(func.max(IndicatorValue.period)))
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
            kpis.append(KpiCard(code=code, name=code, value=None, unit="—", change_percent=None, sparkline=[]))
            continue

        value_row = await session.scalar(
            select(IndicatorValue).where(
                IndicatorValue.indicator_id == indicator.id,
                IndicatorValue.municipality_id == municipality.id,
                IndicatorValue.period == latest_period,
            )
        )
        previous_period = date(latest_period.year - 1, latest_period.month, 1) if latest_period.month == 1 else date(
            latest_period.year, latest_period.month - 1, 1
        )
        previous_row = await session.scalar(
            select(IndicatorValue).where(
                IndicatorValue.indicator_id == indicator.id,
                IndicatorValue.municipality_id == municipality.id,
                IndicatorValue.period == previous_period,
            )
        )
        sparkline = await load_sparkline(session, indicator.id, municipality.id, latest_period)

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
            )
        )

    total_municipalities = await session.scalar(select(func.count()).select_from(Municipality))

    sources = [
        DataSourceInfo(
            connector_id=row["connector_id"],
            display_name=row["display_name"],
            last_success_at=row["last_success_at"],
            period=row["period"],
            message=row["message"],
        )
        for row in await latest_connector_runs(session)
    ]
    notes = await kpi_source_notes(session, municipality.id, latest_period)

    return DashboardSummary(
        municipality_name=municipality.name,
        rank=rank_row.rank if rank_row else None,
        total=rank_row.total if rank_row else (total_municipalities or 63),
        rank_delta=rank_row.rank_delta if rank_row else None,
        period=latest_period,
        kpis=kpis,
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

    latest_period = await session.scalar(select(func.max(IndicatorValue.period))) or date.today()
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
        result.append(
            IndicatorRow(
                code=indicator.code,
                name=indicator.name,
                category=indicator.category,
                value=value_row.value if value_row else None,
                unit=indicator.unit,
                change_percent=None,
                republic_average=float(republic_avg) if republic_avg is not None else None,
            )
        )

    return result


@router.get("/rating", response_model=RatingView)
async def rating(
    user: CurrentUser = Depends(get_current_user),
    session: AsyncSession = Depends(get_db),
) -> RatingView:
    latest_period = await session.scalar(select(func.max(RankingSnapshot.period)))
    if latest_period is None:
        return RatingView(self_rank=None, self_total=63, top=[], bottom=[])

    base_indicator = await session.scalar(select(Indicator).where(Indicator.code == RANKING_INDICATOR_CODE))
    if base_indicator is None:
        base_indicator = await session.scalar(select(Indicator).limit(1))
    if base_indicator is None:
        return RatingView(self_rank=None, self_total=63, top=[], bottom=[])

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
    for snapshot, municipality in rows:
        if user.municipality_id == municipality.id:
            self_rank = snapshot.rank
            self_total = snapshot.total
            break

    if user.role == UserRoleEnum.admin:
        return RatingView(
            self_rank=self_rank,
            self_total=self_total,
            top=[
                RatingRow(rank=snapshot.rank, label=municipality.name, is_self=user.municipality_id == municipality.id)
                for snapshot, municipality in rows
            ],
            bottom=[],
        )

    top = [
        RatingRow(rank=snapshot.rank, label=f"Район #{snapshot.rank}", is_self=user.municipality_id == municipality.id)
        for snapshot, municipality in rows[:3]
    ]
    bottom = [
        RatingRow(rank=snapshot.rank, label=f"Район #{snapshot.rank}", is_self=user.municipality_id == municipality.id)
        for snapshot, municipality in rows[-3:]
    ]
    return RatingView(self_rank=self_rank, self_total=self_total, top=top, bottom=bottom)
