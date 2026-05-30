from app.application.agents.base import SourceAgent
from app.config import get_settings
from app.infrastructure.connectors.base import BaseConnector
from app.infrastructure.connectors.bdmo import BdmoTochnoConnector


class BdmoSourceAgent(SourceAgent):
    """Агент БД ПМО / tochno.st — полные разделы муниципальной статистики Росстата."""

    agent_id = "bdmo_tochno"
    display_name = "БД ПМО / tochno.st"
    description = (
        "Скачивает все настроенные разделы BDMO, сопоставляет показатели с KPI дашборда "
        "и сохраняет сотни индикаторов по 63 МО."
    )

    def connector(self) -> BaseConnector:
        settings = get_settings()
        return BdmoTochnoConnector(sections=settings.bdmo_section_list)
