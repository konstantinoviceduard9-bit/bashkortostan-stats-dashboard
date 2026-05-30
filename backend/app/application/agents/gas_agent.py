from app.application.agents.base import SourceAgent
from app.infrastructure.connectors.base import BaseConnector
from app.infrastructure.connectors.gas_manual import GasManualConnector


class GasSourceAgent(SourceAgent):
    """Агент ГАС «Управление» — только ручная загрузка CSV администратором."""

    agent_id = "gas_manual"
    display_name = "ГАС «Управление»"
    description = "Не ходит в сеть: данные поступают через загрузку CSV в админ-панели."

    def connector(self) -> BaseConnector:
        return GasManualConnector()
