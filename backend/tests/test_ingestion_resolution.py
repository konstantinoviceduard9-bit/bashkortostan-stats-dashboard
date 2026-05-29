from datetime import date

from app.application.ingestion import resolve_observation_municipality
from app.domain.entities import UnifiedObservation
from app.infrastructure.db.models import Municipality


def test_bdmo_oktmo_override_maps_ufa_rows() -> None:
    agidel = Municipality(id=1, oktmo="80701000", name="г. Агидель", type="city", slug="agidel")
    ufa = Municipality(id=2, oktmo="80709000", name="г. Уфа", type="city", slug="ufa")
    municipalities = [agidel, ufa]
    observation = UnifiedObservation(
        indicator_code="Y48401003",
        indicator_name="Оборот розничной торговли",
        value=1000.0,
        unit="Тысяча рублей",
        period=date(2025, 1, 1),
        oktmo="80701000",
        source="bdmo_tochno",
    )

    assert resolve_observation_municipality(municipalities, observation) == ufa


def test_bdmo_prefers_municipality_label_over_conflicting_oktmo() -> None:
    agidel = Municipality(id=1, oktmo="80701000", name="г. Агидель", type="city", slug="agidel")
    ufa = Municipality(id=2, oktmo="80709000", name="г. Уфа", type="city", slug="ufa")
    municipalities = [agidel, ufa]
    observation = UnifiedObservation(
        indicator_code="Y48008019",
        indicator_name="Общая площадь жилых помещений",
        value=123.0,
        unit="кв. м",
        period=date(2025, 1, 1),
        oktmo="80701000",
        source="bdmo_tochno",
        metadata={"municipality_label": "г. Уфа"},
    )

    assert resolve_observation_municipality(municipalities, observation) == ufa
