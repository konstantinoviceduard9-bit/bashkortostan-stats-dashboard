from app.infrastructure.connectors.base import BaseConnector
from app.infrastructure.connectors.bdmo import BdmoTochnoConnector
from app.infrastructure.connectors.emiss import EmissConnector
from app.infrastructure.connectors.gas_manual import GasManualConnector
from app.infrastructure.connectors.minfin import MinfinRbConnector
from app.infrastructure.connectors.opendata import OpendataRbConnector


def get_scheduled_connectors() -> list[BaseConnector]:
    return [
        BdmoTochnoConnector(),
        OpendataRbConnector(),
        MinfinRbConnector(),
        EmissConnector(),
    ]
