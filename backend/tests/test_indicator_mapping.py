from datetime import date

from app.application.indicator_mapping import map_observation
from app.domain.entities import UnifiedObservation


def test_bdmo_json_map_overrides_code() -> None:
    observation = UnifiedObservation(
        indicator_code="Y48009001",
        indicator_name="Инвестиции в основной капитал за счет средств местных бюджетов",
        value=1000.0,
        unit="Тысяча рублей",
        period=date(2023, 1, 1),
        oktmo="80601000",
        source="bdmo_tochno",
    )
    mapped = map_observation(observation)
    assert mapped.indicator_code == "budget_security"


def test_bdmo_code_maps_to_dashboard_kpi() -> None:
    observation = UnifiedObservation(
        indicator_code="Y48008019",
        indicator_name="Общая площадь жилых помещений",
        value=120.0,
        unit="Тысяча квадратных метров",
        period=date(2023, 1, 1),
        oktmo="80601000",
        source="bdmo_tochno",
    )
    mapped = map_observation(observation)
    assert mapped.indicator_code == "housing_commissioned"
    assert mapped.metadata and mapped.metadata["bdmo_code"] == "Y48008019"


def test_opendata_observation_is_not_remapped() -> None:
    observation = UnifiedObservation(
        indicator_code="opendata_health_22_count",
        indicator_name="Больницы",
        value=3.0,
        unit="ед.",
        period=date(2026, 1, 1),
        oktmo="г. Уфа",
        source="opendata_rb",
    )
    assert map_observation(observation) == observation
