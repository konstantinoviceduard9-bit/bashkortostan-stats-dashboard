"""Локальный запуск ETL без Celery: python scripts/run_connectors.py [--period 2023-01-01]

Устаревший алиас — делегирует оркестратору агентов (run_dashboard_agents.py).
"""

import argparse
import asyncio
from datetime import date

from app.application.agents.dashboard_orchestrator import DashboardOrchestrator
from app.infrastructure.db.session import SessionLocal


async def main(period: date) -> None:
    orchestrator = DashboardOrchestrator()
    async with SessionLocal() as session:
        report = await orchestrator.refresh(session, period)
        for agent in report.agents:
            print(f"[{agent.status}] {agent.agent_id}: {agent.message}")
        print(f"Rankings rebuilt for {report.ranking_period.isoformat()}")


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Run scheduled data connectors")
    parser.add_argument("--period", default=None, help="Period as YYYY-MM-DD (default: Jan 1 current year)")
    args = parser.parse_args()
    target = date.fromisoformat(args.period) if args.period else date.today().replace(month=1, day=1)
    asyncio.run(main(target))
