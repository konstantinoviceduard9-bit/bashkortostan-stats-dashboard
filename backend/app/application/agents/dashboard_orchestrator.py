"""Главный агент: запускает всех агентов-источников и обновляет витрину дашборда."""

from __future__ import annotations

from dataclasses import dataclass
from datetime import date

from sqlalchemy import func, select
from sqlalchemy.ext.asyncio import AsyncSession

from app.application.agents.base import SourceAgent, SourceAgentReport
from app.application.agents.bdmo_agent import BdmoSourceAgent
from app.application.agents.emiss_agent import EmissSourceAgent
from app.application.agents.minfin_agent import MinfinSourceAgent
from app.application.agents.opendata_agent import OpendataSourceAgent
from app.application.agents.rosstat_agent import RosstatSourceAgent
from app.application.ranking import rebuild_rankings
from app.infrastructure.db.models import Indicator, IndicatorValue


@dataclass(frozen=True)
class OrchestratorReport:
    period: date
    agents: list[SourceAgentReport]
    ranking_period: date


def get_source_agents(*, include_manual: bool = False) -> list[SourceAgent]:
    """Быстрые источники первыми; BDMO — в конце (долгая загрузка)."""
    agents: list[SourceAgent] = [
        MinfinSourceAgent(),
        EmissSourceAgent(),
        OpendataSourceAgent(),
        RosstatSourceAgent(),
        BdmoSourceAgent(),
    ]
    if include_manual:
        from app.application.agents.gas_agent import GasSourceAgent

        agents.append(GasSourceAgent())
    return agents


class DashboardOrchestrator:
    """Оркестратор ETL: последовательно запускает агентов и пересчитывает рейтинг."""

    def __init__(self, agents: list[SourceAgent] | None = None) -> None:
        self.agents = agents if agents is not None else get_source_agents()

    async def refresh(
        self,
        session: AsyncSession,
        period: date,
        municipality_code: str | None = None,
    ) -> OrchestratorReport:
        reports: list[SourceAgentReport] = []

        for agent in self.agents:
            print(f">> {agent.agent_id} ...", flush=True)
            try:
                report = await agent.run(session, period, municipality_code)
                await session.commit()
                reports.append(report)
                print(f"  [{report.status}] {report.message}", flush=True)
            except Exception as error:  # noqa: BLE001
                await session.rollback()
                reports.append(
                    SourceAgentReport(
                        agent_id=agent.agent_id,
                        display_name=agent.display_name,
                        status="failed",
                        message=str(error),
                        changed=False,
                    )
                )
                print(f"  [failed] {error}", flush=True)

        rank_period = await session.scalar(
            select(func.max(IndicatorValue.period)).where(IndicatorValue.payload_hash != "demo")
        )
        if rank_period is None:
            rank_period = period

        salary = await session.scalar(select(Indicator).where(Indicator.code == "average_salary"))
        await rebuild_rankings(session, rank_period, indicator_id=salary.id if salary else None)
        await session.commit()

        return OrchestratorReport(period=period, agents=reports, ranking_period=rank_period)
