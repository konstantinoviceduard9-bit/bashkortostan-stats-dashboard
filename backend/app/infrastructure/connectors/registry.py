from app.config import get_settings
from app.infrastructure.connectors.base import BaseConnector
from app.infrastructure.connectors.bdmo import BdmoTochnoConnector
from app.infrastructure.connectors.emiss import EmissConnector
from app.infrastructure.connectors.gas_manual import GasManualConnector
from app.infrastructure.connectors.minfin import MinfinRbConnector
from app.infrastructure.connectors.opendata import OpendataRbConnector
from app.infrastructure.connectors.rosstat_bdpmo import RosstatBdPmoConnector


def get_scheduled_connectors() -> list[BaseConnector]:
    settings = get_settings()
    connectors: list[BaseConnector] = [
        BdmoTochnoConnector(sections=settings.bdmo_section_list),
        OpendataRbConnector(),
        RosstatBdPmoConnector(),
        MinfinRbConnector(),
        EmissConnector(),
    ]
    return connectors
