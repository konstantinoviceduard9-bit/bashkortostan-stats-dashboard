from app.application.agents.base import SourceAgent
from app.infrastructure.connectors.base import BaseConnector
from app.infrastructure.connectors.opendata import OpendataRbConnector


class OpendataSourceAgent(SourceAgent):
    """Агент портала открытых данных РБ — CSV-каталог здравоохранения и смежных реестров."""

    agent_id = "opendata_rb"
    display_name = "Портал открытых данных РБ"
    description = (
        "Обходит каталог opendata_catalog.json, извлекает агрегаты по МО: "
        "количество объектов и числовые показатели из CSV."
    )

    def connector(self) -> BaseConnector:
        return OpendataRbConnector()
