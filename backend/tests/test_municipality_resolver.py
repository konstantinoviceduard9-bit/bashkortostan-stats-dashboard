from app.application.municipality_resolver import MunicipalityResolver, normalize_label
from app.infrastructure.db.models import Municipality


def test_resolver_matches_city_aliases() -> None:
    ufa = Municipality(id=1, oktmo="80709000", name="г. Уфа", type="city", slug="ufa")
    salavat = Municipality(id=2, oktmo="80745000", name="г. Салават", type="city", slug="salavat")
    resolver = MunicipalityResolver([ufa, salavat])
    assert resolver.resolve("г. Уфа") == ufa
    assert resolver.resolve("Уфа") == ufa
    assert resolver.resolve("80709000") == ufa
    assert resolver.resolve("г.Салават") == salavat


def test_normalize_label() -> None:
    assert normalize_label("  Ёлочка  ") == "елочка"
