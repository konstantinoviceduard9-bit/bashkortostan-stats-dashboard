from datetime import date

from fastapi import APIRouter, Depends, File, UploadFile
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from app.api.dependencies import CurrentUser, require_admin
from app.api.schemas import AdminNotifyRequest
from app.application.ingestion import persist_connector_result, run_connector
from app.application.ranking import rebuild_rankings
from app.infrastructure.connectors.gas_manual import GasManualConnector
from app.infrastructure.connectors.registry import get_scheduled_connectors
from app.infrastructure.db.models import Municipality, User
from app.infrastructure.db.session import get_db
from app.infrastructure.notifications.service import NotificationService
from app.workers.events import enqueue_new_data_event

router = APIRouter(prefix="/admin", tags=["admin"])


@router.post("/connectors/run")
async def run_all_connectors(
    _: CurrentUser = Depends(require_admin),
    session: AsyncSession = Depends(get_db),
    period: date | None = None,
) -> dict:
    target_period = period or date.today().replace(month=1, day=1)
    results: list[dict] = []

    for connector in get_scheduled_connectors():
        try:
            changed, message = await run_connector(session, connector, target_period)
            if changed:
                enqueue_new_data_event(
                    {
                        "connector_id": connector.connector_id,
                        "period": target_period.isoformat(),
                    }
                )
            results.append({"connector": connector.connector_id, "status": "success", "message": message, "changed": changed})
        except Exception as error:  # noqa: BLE001
            results.append({"connector": connector.connector_id, "status": "failed", "message": str(error)})

    await rebuild_rankings(session, target_period)
    await session.commit()
    return {"period": target_period.isoformat(), "results": results}


@router.post("/gas/upload")
async def upload_gas_data(
    _: CurrentUser = Depends(require_admin),
    session: AsyncSession = Depends(get_db),
    file: UploadFile = File(...),
    period: date | None = None,
) -> dict:
    content = await file.read()
    connector = GasManualConnector(file_bytes=content, filename=file.filename)
    target_period = period or date.today().replace(month=1, day=1)
    result = await connector.fetch(target_period)
    changed = await persist_connector_result(session, result)
    if changed:
        enqueue_new_data_event({"connector_id": connector.connector_id, "period": target_period.isoformat()})
    await rebuild_rankings(session, target_period)
    await session.commit()
    return {"status": "success", "rows": len(result.observations), "changed": changed}


@router.post("/notify")
async def notify_users(
    payload: AdminNotifyRequest,
    _: CurrentUser = Depends(require_admin),
    session: AsyncSession = Depends(get_db),
) -> dict:
    query = select(User).where(User.is_active.is_(True), User.max_user_id.is_not(None))
    users = (await session.execute(query)).scalars().all()
    service = NotificationService()
    sent = 0
    for user in users:
        if payload.municipality_oktmo and user.municipality_id:
            municipality = await session.get(Municipality, user.municipality_id)
            if municipality and municipality.oktmo != payload.municipality_oktmo:
                continue
        if user.max_user_id and await service.send(user.max_user_id, payload.message):
            sent += 1
    return {"sent": sent, "total": len(users)}
