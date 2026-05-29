import json
import math
from datetime import date, datetime, timezone

from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from app.application.indicator_mapping import map_observation
from app.application.municipality_resolver import MunicipalityResolver
from app.config import get_settings
from app.domain.entities import ConnectorResult
from app.infrastructure.connectors.base import BaseConnector
from app.infrastructure.db.models import ConnectorRun, Indicator, IndicatorValue, Municipality, RawDataCache
from app.infrastructure.notifications.service import NotificationService


async def persist_connector_result(session: AsyncSession, result: ConnectorResult) -> tuple[bool, dict[str, int]]:
    """Сохраняет сырые данные и витрину. Возвращает (hash_changed, stats)."""

    stats = {"saved": 0, "skipped_municipality": 0}

    previous = await session.scalar(
        select(RawDataCache)
        .where(
            RawDataCache.connector_id == result.connector_id,
            RawDataCache.period == result.period,
            RawDataCache.oktmo == result.oktmo,
        )
        .order_by(RawDataCache.fetched_at.desc())
        .limit(1)
    )
    changed = previous is None or previous.payload_hash != result.raw_payload_hash

    session.add(
        RawDataCache(
            connector_id=result.connector_id,
            period=result.period,
            oktmo=result.oktmo,
            payload_hash=result.raw_payload_hash,
            payload_json=json.dumps(
                [
                    {
                        "indicator_code": row.indicator_code,
                        "indicator_name": row.indicator_name,
                        "value": row.value,
                        "unit": row.unit,
                        "oktmo": row.oktmo,
                        "period": row.period.isoformat(),
                        "source": row.source,
                        "category": row.category,
                    }
                    for row in result.observations
                ],
                ensure_ascii=False,
            ),
            fetched_at=result.fetched_at,
        )
    )

    municipalities = (await session.execute(select(Municipality))).scalars().all()
    resolver = MunicipalityResolver(municipalities)

    for raw_observation in result.observations:
        observation = map_observation(raw_observation)
        if not math.isfinite(observation.value):
            continue
        municipality = resolver.resolve(observation.oktmo)
        if municipality is None:
            stats["skipped_municipality"] += 1
            continue

        indicator = await session.scalar(select(Indicator).where(Indicator.code == observation.indicator_code))
        if indicator is None:
            indicator = Indicator(
                code=observation.indicator_code,
                name=observation.indicator_name,
                unit=observation.unit,
                category=observation.category or "Прочее",
                source=observation.source,
            )
            session.add(indicator)
            await session.flush()

        existing = await session.scalar(
            select(IndicatorValue).where(
                IndicatorValue.indicator_id == indicator.id,
                IndicatorValue.municipality_id == municipality.id,
                IndicatorValue.period == observation.period,
            )
        )
        if existing:
            existing.value = observation.value
            existing.payload_hash = result.raw_payload_hash
        else:
            session.add(
                IndicatorValue(
                    indicator_id=indicator.id,
                    municipality_id=municipality.id,
                    period=observation.period,
                    value=observation.value,
                    payload_hash=result.raw_payload_hash,
                )
            )
        stats["saved"] += 1

    return changed, stats


async def _alert_connector_failures(connector_id: str, failures: int) -> None:
    settings = get_settings()
    if failures < settings.connector_failure_alert_threshold:
        return
    service = NotificationService()
    await service.send(
        "admin-max-id",
        f"Коннектор {connector_id}: {failures} сбоев подряд. Проверьте ETL.",
    )


async def run_connector(
    session: AsyncSession,
    connector: BaseConnector,
    period: date,
    municipality_code: str | None = None,
) -> tuple[bool, str]:
    started_at = datetime.now(timezone.utc)
    run = ConnectorRun(
        connector_id=connector.connector_id,
        period=period,
        status="running",
        started_at=started_at,
    )
    session.add(run)
    await session.flush()

    try:
        result = await connector.fetch(period, municipality_code)
        changed, stats = await persist_connector_result(session, result)
        run.status = "success"
        extra = ""
        if result.stats:
            extra = f"; {result.stats}"
        run.message = (
            f"Загружено {len(result.observations)} наблюдений, "
            f"сохранено {stats['saved']}, без МО {stats['skipped_municipality']}{extra}"
        )
        run.consecutive_failures = 0
        run.finished_at = datetime.now(timezone.utc)
        return changed, run.message
    except Exception as error:  # noqa: BLE001
        last = await session.scalar(
            select(ConnectorRun)
            .where(ConnectorRun.connector_id == connector.connector_id)
            .order_by(ConnectorRun.started_at.desc())
            .offset(1)
            .limit(1)
        )
        failures = (last.consecutive_failures if last else 0) + 1
        run.status = "failed"
        run.message = str(error)
        run.consecutive_failures = failures
        run.finished_at = datetime.now(timezone.utc)
        await _alert_connector_failures(connector.connector_id, failures)
        raise
