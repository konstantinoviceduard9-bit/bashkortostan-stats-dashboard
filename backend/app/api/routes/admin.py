from datetime import date

from fastapi import APIRouter, Depends, File, UploadFile
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from app.api.dependencies import CurrentUser, require_admin
from app.api.schemas import AdminNotifyRequest
from app.application.agents.dashboard_orchestrator import DashboardOrchestrator
from app.application.ingestion import persist_connector_result
from app.application.ranking import rebuild_dashboard_rankings
from app.infrastructure.connectors.gas_manual import GasManualConnector
from app.infrastructure.db.models import ConnectorRun, Municipality, User
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
    orchestrator = DashboardOrchestrator()
    report = await orchestrator.refresh(session, target_period)

    results = [
        {
            "connector": agent.agent_id,
            "status": agent.status,
            "message": agent.message,
            "changed": agent.changed,
        }
        for agent in report.agents
    ]
    for item in results:
        if item["changed"]:
            enqueue_new_data_event(
                {
                    "connector_id": item["connector"],
                    "period": target_period.isoformat(),
                }
            )

    return {"period": target_period.isoformat(), "results": results, "ranking_period": report.ranking_period.isoformat()}


@router.get("/connectors/status")
async def connectors_status(
    _: CurrentUser = Depends(require_admin),
    session: AsyncSession = Depends(get_db),
) -> dict:
    rows = (
        await session.execute(
            select(ConnectorRun).order_by(ConnectorRun.started_at.desc()).limit(20)
        )
    ).scalars().all()
    return {
        "recent": [
            {
                "connector_id": row.connector_id,
                "period": row.period.isoformat(),
                "status": row.status,
                "message": row.message,
                "consecutive_failures": row.consecutive_failures,
                "started_at": row.started_at.isoformat() if row.started_at else None,
                "finished_at": row.finished_at.isoformat() if row.finished_at else None,
            }
            for row in rows
        ]
    }


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
    changed, stats = await persist_connector_result(session, result)
    if changed:
        enqueue_new_data_event({"connector_id": connector.connector_id, "period": target_period.isoformat()})
    await rebuild_dashboard_rankings(session, target_period)
    await session.commit()
    return {"status": "success", "rows": len(result.observations), "changed": changed, "stats": stats}


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
