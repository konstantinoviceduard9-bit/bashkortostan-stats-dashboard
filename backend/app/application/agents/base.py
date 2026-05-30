from __future__ import annotations

from abc import ABC, abstractmethod
from dataclasses import dataclass
from datetime import date

from sqlalchemy.ext.asyncio import AsyncSession

from app.application.ingestion import run_connector
from app.infrastructure.connectors.base import BaseConnector


@dataclass(frozen=True)
class SourceAgentReport:
    agent_id: str
    display_name: str
    status: str
    message: str
    changed: bool


class SourceAgent(ABC):
    """Специализированный агент для одного внешнего источника данных."""

    agent_id: str
    display_name: str
    description: str

    @abstractmethod
    def connector(self) -> BaseConnector:
        """Коннектор, который агент использует для загрузки."""

    async def run(
        self,
        session: AsyncSession,
        period: date,
        municipality_code: str | None = None,
    ) -> SourceAgentReport:
        connector = self.connector()
        changed, message = await run_connector(session, connector, period, municipality_code)
        run = await self._latest_run(session)
        status = run.status if run else "unknown"
        return SourceAgentReport(
            agent_id=self.agent_id,
            display_name=self.display_name,
            status=status,
            message=message,
            changed=changed,
        )

    async def _latest_run(self, session: AsyncSession):
        from sqlalchemy import select

        from app.infrastructure.db.models import ConnectorRun

        return await session.scalar(
            select(ConnectorRun)
            .where(ConnectorRun.connector_id == self.agent_id)
            .order_by(ConnectorRun.started_at.desc())
            .limit(1)
        )
