import re
import unicodedata

from app.domain.municipalities_catalog import MUNICIPALITIES_CATALOG
from app.infrastructure.db.models import Municipality


_LATIN_TO_CYRILLIC = str.maketrans(
    {
        "p": "р",
        "P": "Р",
        "o": "о",
        "O": "О",
        "e": "е",
        "E": "Е",
        "a": "а",
        "A": "А",
        "c": "с",
        "C": "С",
        "x": "х",
        "X": "Х",
    }
)


def fix_mixed_script_typos(value: str) -> str:
    """Исправляет латинские homoglyph в русских названиях (opendata: «Нуpимановский»)."""
    if not re.search(r"[а-яА-ЯёЁ]", value):
        return value
    return value.translate(_LATIN_TO_CYRILLIC)


def normalize_label(value: str) -> str:
    text = fix_mixed_script_typos(unicodedata.normalize("NFKC", value).replace("\u00a0", " "))
    text = text.lower().strip()
    text = text.replace("ё", "е")
    text = re.sub(r"\s+", " ", text)
    text = re.sub(r"[«»\"'`]", "", text)
    text = re.sub(r"г\.\s*", "г. ", text)
    return text


def _aliases_for(name: str, slug: str, mtype: str) -> set[str]:
    aliases = {normalize_label(name), normalize_label(slug)}
    base = name
    for suffix in (
        " муниципальный район",
        " муниципальный округ",
        " городской округ",
        " район",
        " г.",
        "город ",
    ):
        if base.lower().endswith(suffix):
            base = base[: -len(suffix)].strip()
    aliases.add(normalize_label(base))
    aliases.add(normalize_label(name.replace("г. ", "г.")))
    short_city = re.sub(r"^г\.?\s*", "", name, flags=re.IGNORECASE).strip()
    if short_city and short_city != name:
        aliases.add(normalize_label(short_city))
    if mtype == "district":
        aliases.add(normalize_label(f"{base} муниципальный район"))
        aliases.add(normalize_label(f"муниципальный район {base}"))
    else:
        aliases.add(normalize_label(f"город {base}"))
        aliases.add(normalize_label(f"г. {base}"))
        aliases.add(normalize_label(f"городской округ {base}"))
        if short_city and short_city != base:
            aliases.add(normalize_label(f"город {short_city}"))
            aliases.add(normalize_label(f"городской округ {short_city}"))
    return aliases


class MunicipalityResolver:
    def __init__(self, municipalities: list[Municipality] | None = None) -> None:
        self.by_oktmo: dict[str, Municipality] = {}
        self.by_slug: dict[str, Municipality] = {}
        self.by_alias: dict[str, Municipality] = {}

        if municipalities:
            for row in municipalities:
                self._register_db_row(row)
        else:
            for item in MUNICIPALITIES_CATALOG:
                for alias in _aliases_for(item["name"], item["slug"], item["type"]):
                    self.by_alias[alias] = item  # type: ignore[assignment]

    def _register_db_row(self, row: Municipality) -> None:
        self.by_oktmo[normalize_label(row.oktmo)] = row
        self.by_slug[normalize_label(row.slug)] = row
        for alias in _aliases_for(row.name, row.slug, row.type):
            self.by_alias[alias] = row

    def resolve(self, label: str) -> Municipality | None:
        key = normalize_label(label)
        if not key:
            return None
        if isinstance(self.by_alias.get(key), Municipality):
            return self.by_alias[key]
        if key in self.by_oktmo:
            return self.by_oktmo[key]
        if key in self.by_slug:
            return self.by_slug[key]
        digits = re.sub(r"\D", "", label)
        if len(digits) >= 5:
            for oktmo_key, municipality in self.by_oktmo.items():
                oktmo_digits = re.sub(r"\D", "", oktmo_key)
                if oktmo_digits.startswith(digits[:8]) or digits.startswith(oktmo_digits[:8]):
                    return municipality
        for item in MUNICIPALITIES_CATALOG:
            aliases = _aliases_for(item["name"], item["slug"], item["type"])
            if key in aliases or key == normalize_label(item["oktmo"]):
                return None
        return self.by_alias.get(key) if isinstance(self.by_alias.get(key), Municipality) else None

    def matches(self, label: str) -> bool:
        if self.resolve(label) is not None:
            return True
        key = normalize_label(label)
        if not key:
            return False
        for item in MUNICIPALITIES_CATALOG:
            if key == normalize_label(item["oktmo"]):
                return True
            if key in _aliases_for(item["name"], item["slug"], item["type"]):
                return True
        return False

    def resolve_id(self, municipalities: list[Municipality], label: str) -> Municipality | None:
        resolver = MunicipalityResolver(municipalities)
        return resolver.resolve(label)
