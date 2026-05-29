import asyncio
from datetime import date

from sqlalchemy import select

from app.application.ingestion import run_connector
from app.application.ranking import rebuild_rankings
from app.config import get_settings
from app.infrastructure.connectors.registry import get_scheduled_connectors
from app.infrastructure.db.models import Municipality, User
from app.infrastructure.db.session import SessionLocal
from app.infrastructure.notifications.service import NotificationService
from app.workers.celery_app import celery_app
from app.workers.events import enqueue_new_data_event, pop_new_data_event


async def _run_connectors_async() -> None:
    target_period = date.today().replace(month=1, day=1)
    async with SessionLocal() as session:
        for connector in get_scheduled_connectors():
            try:
                changed, _message = await run_connector(session, connector, target_period)
                if changed:
                    enqueue_new_data_event(
                        {"connector_id": connector.connector_id, "period": target_period.isoformat()}
                    )
            except Exception:
                await session.rollback()
                continue
        await rebuild_rankings(session, target_period)
        await session.commit()


@celery_app.task(name="app.workers.tasks.run_scheduled_connectors")
def run_scheduled_connectors() -> None:
    asyncio.run(_run_connectors_async())


async def _notify_async() -> int:
    service = NotificationService()
    sent = 0
    while True:
        event = pop_new_data_event()
        if event is None:
            break

        async with SessionLocal() as session:
            users = (
                await session.execute(select(User).where(User.is_active.is_(True), User.max_user_id.is_not(None)))
            ).scalars().all()
            municipalities = {
                row.id: row for row in (await session.execute(select(Municipality))).scalars().all()
            }

            for user in users:
                municipality = municipalities.get(user.municipality_id) if user.municipality_id else None
                name = municipality.name if municipality else "ваш район"
                message = (
                    f"По Вашему району ({name}) обновлены данные за {event.get('period')}. "
                    f"Источник: {event.get('connector_id')}. Откройте дашборд."
                )
                if user.max_user_id and await service.send(user.max_user_id, message):
                    sent += 1
            await session.commit()
    return sent


@celery_app.task(name="app.workers.tasks.process_notification_queue")
def process_notification_queue() -> int:
    return asyncio.run(_notify_async())
