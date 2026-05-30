from app.application.agents.base import SourceAgent
from app.infrastructure.connectors.base import BaseConnector
from app.infrastructure.connectors.minfin import MinfinRbConnector


class MinfinSourceAgent(SourceAgent):
    """Агент Минфина РБ — Excel-отчёты по бюджетным показателям."""

    agent_id = "minfin_rb"
    display_name = "Минфин РБ"
    description = "Загружает Excel по MINFIN_REPORT_URL и разбирает показатели по муниципалитетам."

    def connector(self) -> BaseConnector:
        return MinfinRbConnector()
