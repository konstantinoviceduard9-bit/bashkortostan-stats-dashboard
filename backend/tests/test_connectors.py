import pytest

from app.infrastructure.connectors.base import BaseConnector
from app.infrastructure.connectors.registry import get_scheduled_connectors


def test_scheduled_connectors_registered() -> None:
    connectors = get_scheduled_connectors()
    assert len(connectors) >= 4
    assert all(isinstance(connector, BaseConnector) for connector in connectors)
