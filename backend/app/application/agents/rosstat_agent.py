from app.application.agents.base import SourceAgent
from app.infrastructure.connectors.base import BaseConnector
from app.infrastructure.connectors.rosstat_bdpmo import RosstatBdPmoConnector


class RosstatSourceAgent(SourceAgent):
    """Агент официальной БД ПМО Росстата (DBInet.cgi) — показатели по ОКТМО."""

    agent_id = "rosstat_bdpmo"
    display_name = "Росстат БД ПМО"
    description = (
        "Запрашивает таблицы DBInet.cgi пакетом по всем 63 МО, "
        "парсит HTML-таблицы и сохраняет показатели из rosstat_bdpmo_indicators.json."
    )

    def connector(self) -> BaseConnector:
        return RosstatBdPmoConnector()
