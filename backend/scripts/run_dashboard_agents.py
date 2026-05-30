"""Запуск всех агентов-источников и обновление витрины дашборда."""

import argparse
import asyncio
from datetime import date

from app.application.agents.dashboard_orchestrator import DashboardOrchestrator
from app.infrastructure.db.session import SessionLocal


async def main(period: date) -> None:
    orchestrator = DashboardOrchestrator()
    print(f"=== Оркестратор дашборда · период {period.isoformat()} ===", flush=True)
    async with SessionLocal() as session:
        report = await orchestrator.refresh(session, period)
        for agent in report.agents:
            marker = {"success": "ok", "skipped": "skip", "empty": "empty", "failed": "fail"}.get(
                agent.status, agent.status
            )
            print(f"[{marker}] {agent.agent_id}: {agent.message}", flush=True)
        print(f"Рейтинг пересчитан за {report.ranking_period.isoformat()}")


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Run dashboard source agents (orchestrator)")
    parser.add_argument("--period", default=None, help="Period as YYYY-MM-DD (default: Jan 1 current year)")
    args = parser.parse_args()
    target = date.fromisoformat(args.period) if args.period else date.today().replace(month=1, day=1)
    asyncio.run(main(target))
