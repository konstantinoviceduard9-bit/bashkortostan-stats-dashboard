from app.application.agents.base import SourceAgent
from app.infrastructure.connectors.base import BaseConnector
from app.infrastructure.connectors.emiss import EmissConnector


class EmissSourceAgent(SourceAgent):
    """Агент Башкортостанстат / ЕМИСС — SDMX/XML выгрузки."""

    agent_id = "emiss"
    display_name = "Башкортостанстат / ЕМИСС"
    description = "Загружает SDMX/XML по EMISS_SDMX_URL и сохраняет серии по ОКТМО."

    def connector(self) -> BaseConnector:
        return EmissConnector()
