"""Справочник 63 муниципалитетов верхнего уровня Республики Башкортостан."""

from typing import TypedDict


class MunicipalitySeed(TypedDict):
    slug: str
    name: str
    type: str
    oktmo: str


# ОКТМО — укороченные коды верхнего уровня (8 знаков); при появлении официального справочника заменить.
MUNICIPALITIES_CATALOG: list[MunicipalitySeed] = [
    {"slug": "abzelilovsky", "name": "Абзелиловский район", "type": "district", "oktmo": "80601000"},
    {"slug": "alsheevsky", "name": "Альшеевский район", "type": "district", "oktmo": "80602000"},
    {"slug": "arkhangelsky", "name": "Архангельский район", "type": "district", "oktmo": "80603000"},
    {"slug": "askinsky", "name": "Аскинский район", "type": "district", "oktmo": "80604000"},
    {"slug": "aurgazinsky", "name": "Аургазинский район", "type": "district", "oktmo": "80605000"},
    {"slug": "baymaksky", "name": "Баймакский район", "type": "district", "oktmo": "80606000"},
    {"slug": "bakalinsky", "name": "Бакалинский район", "type": "district", "oktmo": "80607000"},
    {"slug": "baltachevsky", "name": "Балтачевский район", "type": "district", "oktmo": "80608000"},
    {"slug": "belebeyevsky", "name": "Белебеевский район", "type": "district", "oktmo": "80609000"},
    {"slug": "belokataysky", "name": "Белокатайский район", "type": "district", "oktmo": "80610000"},
    {"slug": "beloretsk", "name": "Белорецкий район", "type": "district", "oktmo": "80611000"},
    {"slug": "bizhbulyaksky", "name": "Бижбулякский район", "type": "district", "oktmo": "80612000"},
    {"slug": "birsk", "name": "Бирский район", "type": "district", "oktmo": "80613000"},
    {"slug": "blagovarsky", "name": "Благоварский район", "type": "district", "oktmo": "80614000"},
    {"slug": "blagoveshchensky", "name": "Благовещенский район", "type": "district", "oktmo": "80615000"},
    {"slug": "buzdyaksky", "name": "Буздякский район", "type": "district", "oktmo": "80616000"},
    {"slug": "buraevsky", "name": "Бураевский район", "type": "district", "oktmo": "80617000"},
    {"slug": "burzyansky", "name": "Бурзянский район", "type": "district", "oktmo": "80618000"},
    {"slug": "gafuriysky", "name": "Гафурийский район", "type": "district", "oktmo": "80619000"},
    {"slug": "davlekanovsky", "name": "Давлекановский район", "type": "district", "oktmo": "80620000"},
    {"slug": "duvansky", "name": "Дуванский район", "type": "district", "oktmo": "80621000"},
    {"slug": "dyurtyulinsky", "name": "Дюртюлинский район", "type": "district", "oktmo": "80622000"},
    {"slug": "ermekeyevsky", "name": "Ермекеевский район", "type": "district", "oktmo": "80623000"},
    {"slug": "zianchurinsky", "name": "Зианчуринский район", "type": "district", "oktmo": "80624000"},
    {"slug": "zilairsky", "name": "Зилаирский район", "type": "district", "oktmo": "80625000"},
    {"slug": "iglinsky", "name": "Иглинский район", "type": "district", "oktmo": "80626000"},
    {"slug": "ilishevsky", "name": "Илишевский район", "type": "district", "oktmo": "80627000"},
    {"slug": "ishimbay", "name": "Ишимбайский район", "type": "district", "oktmo": "80628000"},
    {"slug": "kaltasinsky", "name": "Калтасинский район", "type": "district", "oktmo": "80629000"},
    {"slug": "karaidelsky", "name": "Караидельский район", "type": "district", "oktmo": "80630000"},
    {"slug": "karmaskalinsky", "name": "Кармаскалинский район", "type": "district", "oktmo": "80631000"},
    {"slug": "kiginsky", "name": "Кигинский район", "type": "district", "oktmo": "80632000"},
    {"slug": "krasnokamsky", "name": "Краснокамский район", "type": "district", "oktmo": "80633000"},
    {"slug": "kugarchinsky", "name": "Кугарчинский район", "type": "district", "oktmo": "80634000"},
    {"slug": "kushnarenkovsky", "name": "Кушнаренковский район", "type": "district", "oktmo": "80635000"},
    {"slug": "kuyurgazinsky", "name": "Куюргазинский район", "type": "district", "oktmo": "80636000"},
    {"slug": "meleuz", "name": "Мелеузовский район", "type": "district", "oktmo": "80637000"},
    {"slug": "mechetlinsky", "name": "Мечетлинский район", "type": "district", "oktmo": "80638000"},
    {"slug": "mishkinsky", "name": "Мишкинский район", "type": "district", "oktmo": "80639000"},
    {"slug": "miyakinsky", "name": "Миякинский район", "type": "district", "oktmo": "80640000"},
    {"slug": "nurimanovsky", "name": "Нуримановский район", "type": "district", "oktmo": "80641000"},
    {"slug": "salavatsky", "name": "Салаватский район", "type": "district", "oktmo": "80642000"},
    {"slug": "sterlibashevsky", "name": "Стерлибашевский район", "type": "district", "oktmo": "80643000"},
    {"slug": "sterlitamaksky", "name": "Стерлитамакский район", "type": "district", "oktmo": "80644000"},
    {"slug": "tatyshlinsky", "name": "Татышлинский район", "type": "district", "oktmo": "80645000"},
    {"slug": "tuymazy", "name": "Туймазинский район", "type": "district", "oktmo": "80646000"},
    {"slug": "ufimsky", "name": "Уфимский район", "type": "district", "oktmo": "80647000"},
    {"slug": "uchaly_district", "name": "Учалинский район", "type": "district", "oktmo": "80648000"},
    {"slug": "fedorovsky", "name": "Фёдоровский район", "type": "district", "oktmo": "80649000"},
    {"slug": "khaibullinsky", "name": "Хайбуллинский район", "type": "district", "oktmo": "80650000"},
    {"slug": "chekmagushevsky", "name": "Чекмагушевский район", "type": "district", "oktmo": "80651000"},
    {"slug": "chishminsky", "name": "Чишминский район", "type": "district", "oktmo": "80652000"},
    {"slug": "sharansky", "name": "Шаранский район", "type": "district", "oktmo": "80653000"},
    {"slug": "yanaulsky", "name": "Янаульский район", "type": "district", "oktmo": "80654000"},
    {"slug": "agidel", "name": "г. Агидель", "type": "city", "oktmo": "80701000"},
    {"slug": "kumertau", "name": "г. Кумертау", "type": "city", "oktmo": "80702000"},
    {"slug": "mezhgorye", "name": "г. Межгорье", "type": "city", "oktmo": "80703000"},
    {"slug": "neftekamsk", "name": "г. Нефтекамск", "type": "city", "oktmo": "80704000"},
    {"slug": "oktyabrsky", "name": "г. Октябрьский", "type": "city", "oktmo": "80705000"},
    {"slug": "salavat", "name": "г. Салават", "type": "city", "oktmo": "80706000"},
    {"slug": "sibay", "name": "г. Сибай", "type": "city", "oktmo": "80707000"},
    {"slug": "sterlitamak", "name": "г. Стерлитамак", "type": "city", "oktmo": "80708000"},
    {"slug": "ufa", "name": "г. Уфа", "type": "city", "oktmo": "80709000"},
]

assert len(MUNICIPALITIES_CATALOG) == 63
