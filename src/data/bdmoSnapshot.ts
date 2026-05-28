import type { Indicator, IndicatorGroup, StatValue } from "../shared/types";

export const bdmoSnapshotGroups: IndicatorGroup[] = [
  {
    "id": "bdmo_1_platnye_uslugi_naseleniyu",
    "name": "1. Платные услуги населению",
    "description": "Официальный раздел БД ПМО Росстата: Платные услуги населению"
  },
  {
    "id": "bdmo_12_socialnaya_podderzhka_naseleniya",
    "name": "12. Социальная поддержка населения",
    "description": "Официальный раздел БД ПМО Росстата: Социальная поддержка населения"
  },
  {
    "id": "bdmo_2_roznichnaya_torgovlya_i_obschestvennoe_pitanie",
    "name": "2. Розничная торговля и общественное питание",
    "description": "Официальный раздел БД ПМО Росстата: Розничная торговля и общественное питание"
  },
  {
    "id": "bdmo_3_sport",
    "name": "3. Спорт",
    "description": "Официальный раздел БД ПМО Росстата: Спорт"
  },
  {
    "id": "bdmo_33_zdravoohranenie",
    "name": "33. Здравоохранение",
    "description": "Официальный раздел БД ПМО Росстата: Здравоохранение"
  },
  {
    "id": "bdmo_34_obrazovanie",
    "name": "34. Образование",
    "description": "Официальный раздел БД ПМО Росстата: Образование"
  },
  {
    "id": "bdmo_35_ohrana_okruzhayuschey_sredy",
    "name": "35. Охрана окружающей среды",
    "description": "Официальный раздел БД ПМО Росстата: Охрана окружающей среды"
  },
  {
    "id": "bdmo_36_osnovnye_fondy_organizaciy_municipalnoy_formy_sobstvennosti",
    "name": "36. Основные фонды организаций муниципальной формы собственности",
    "description": "Официальный раздел БД ПМО Росстата: Основные фонды организаций муниципальной формы собственности"
  },
  {
    "id": "bdmo_37_stroitelstvo_zhilya",
    "name": "37. Строительство жилья",
    "description": "Официальный раздел БД ПМО Росстата: Строительство жилья"
  },
  {
    "id": "bdmo_39_deyatelnost_predpriyatiy",
    "name": "39. Деятельность предприятий",
    "description": "Официальный раздел БД ПМО Росстата: Деятельность предприятий"
  },
  {
    "id": "bdmo_41_pokazateli_dlya_ocenki_effektivnosti_deyatelnosti_organov_mestnogo_samoupravleniya_gorodskih_okrugov_i_municipalnyh_rayonov",
    "name": "41. Показатели для оценки эффективности деятельности органов местного самоуправления городских округов и муниципальных районов",
    "description": "Официальный раздел БД ПМО Росстата: Показатели для оценки эффективности деятельности органов местного самоуправления городских округов и муниципальных районов"
  },
  {
    "id": "bdmo_42_finansovaya_deyatelnost",
    "name": "42. Финансовая деятельность",
    "description": "Официальный раздел БД ПМО Росстата: Финансовая деятельность"
  },
  {
    "id": "bdmo_43_svedeniya_o_vydannyh_razresheniyah_i_uvedomleniyah_na_stroitelstvo_i_na_vvod_obektov_v_ekspluataciyu",
    "name": "43. Сведения о выданных разрешениях и уведомлениях на строительство и на ввод объектов в эксплуатацию",
    "description": "Официальный раздел БД ПМО Росстата: Сведения о выданных разрешениях и уведомлениях на строительство и на ввод объектов в эксплуатацию"
  },
  {
    "id": "bdmo_46_buhgalterskaya_otchetnost",
    "name": "46. Бухгалтерская отчетность",
    "description": "Официальный раздел БД ПМО Росстата: Бухгалтерская отчетность"
  },
  {
    "id": "bdmo_5_predpriyatiya_po_pererabotke_othodov",
    "name": "5. Предприятия по переработке отходов",
    "description": "Официальный раздел БД ПМО Росстата: Предприятия по переработке отходов"
  },
  {
    "id": "bdmo_6_territoriya",
    "name": "6. Территория",
    "description": "Официальный раздел БД ПМО Росстата: Территория"
  },
  {
    "id": "bdmo_60_kollektivnye_sredstva_razmescheniya",
    "name": "60. Коллективные средства размещения",
    "description": "Официальный раздел БД ПМО Росстата: Коллективные средства размещения"
  },
  {
    "id": "bdmo_7_selskoe_hozyaystvo",
    "name": "7. Сельское хозяйство",
    "description": "Официальный раздел БД ПМО Росстата: Сельское хозяйство"
  },
  {
    "id": "bdmo_70_pochtovaya_i_telefonnaya_svyaz",
    "name": "70. Почтовая и телефонная связь",
    "description": "Официальный раздел БД ПМО Росстата: Почтовая и телефонная связь"
  },
  {
    "id": "bdmo_8_kommunalnaya_sfera",
    "name": "8. Коммунальная сфера",
    "description": "Официальный раздел БД ПМО Росстата: Коммунальная сфера"
  },
  {
    "id": "bdmo_9_investicii_v_osnovnoy_kapital",
    "name": "9. Инвестиции в основной капитал",
    "description": "Официальный раздел БД ПМО Росстата: Инвестиции в основной капитал"
  }
];

export const bdmoSnapshotIndicators: Indicator[] = [
  {
    "id": "bdmo_y48012004",
    "groupId": "bdmo_12_socialnaya_podderzhka_naseleniya",
    "name": "Объем средств, предусмотренных на предоставление социальной поддержки по оплате жилого помещения и коммунальных услуг",
    "unit": "Тысяча рублей",
    "description": "БД ПМО Росстата, обработка tochno.st, показатель Y48012004",
    "rankDirection": "desc",
    "sourceId": "bdmo_rosstat",
    "sourceIndicatorId": "Y48012004"
  },
  {
    "id": "bdmo_y48012002",
    "groupId": "bdmo_12_socialnaya_podderzhka_naseleniya",
    "name": "Сумма начисленных субсидий населению на оплату жилого помещения и коммунальных услуг",
    "unit": "Тысяча рублей",
    "description": "БД ПМО Росстата, обработка tochno.st, показатель Y48012002",
    "rankDirection": "desc",
    "sourceId": "bdmo_rosstat",
    "sourceIndicatorId": "Y48012002"
  },
  {
    "id": "bdmo_y48012003",
    "groupId": "bdmo_12_socialnaya_podderzhka_naseleniya",
    "name": "Численность граждан, пользующихся социальной поддержкой (льготами) по оплате жилого помещения и коммунальных услуг",
    "unit": "Человек",
    "description": "БД ПМО Росстата, обработка tochno.st, показатель Y48012003",
    "rankDirection": "desc",
    "sourceId": "bdmo_rosstat",
    "sourceIndicatorId": "Y48012003"
  },
  {
    "id": "bdmo_y48012005",
    "groupId": "bdmo_12_socialnaya_podderzhka_naseleniya",
    "name": "Число семей, получавших субсидии на оплату жилого помещения и коммунальных услуг",
    "unit": "Единица",
    "description": "БД ПМО Росстата, обработка tochno.st, показатель Y48012005",
    "rankDirection": "desc",
    "sourceId": "bdmo_rosstat",
    "sourceIndicatorId": "Y48012005"
  },
  {
    "id": "bdmo_y48401111",
    "groupId": "bdmo_1_platnye_uslugi_naseleniyu",
    "name": "Объем платных услуг населению (без субъектов малого предпринимательства)",
    "unit": "Тысяча рублей",
    "description": "БД ПМО Росстата, обработка tochno.st, показатель Y48401111",
    "rankDirection": "desc",
    "sourceId": "bdmo_rosstat",
    "sourceIndicatorId": "Y48401111"
  },
  {
    "id": "bdmo_y48401101",
    "groupId": "bdmo_1_platnye_uslugi_naseleniyu",
    "name": "Число объектов бытового обслуживания населения, оказывающих услуги",
    "unit": "Единица",
    "description": "БД ПМО Росстата, обработка tochno.st, показатель Y48401101",
    "rankDirection": "desc",
    "sourceId": "bdmo_rosstat",
    "sourceIndicatorId": "Y48401101"
  },
  {
    "id": "bdmo_y48401102",
    "groupId": "bdmo_1_platnye_uslugi_naseleniyu",
    "name": "Число приемных пунктов бытового обслуживания, принимающих заказы от населения на оказание услуг",
    "unit": "Единица",
    "description": "БД ПМО Росстата, обработка tochno.st, показатель Y48401102",
    "rankDirection": "desc",
    "sourceId": "bdmo_rosstat",
    "sourceIndicatorId": "Y48401102"
  },
  {
    "id": "bdmo_y48002001",
    "groupId": "bdmo_2_roznichnaya_torgovlya_i_obschestvennoe_pitanie",
    "name": "Количество объектов розничной торговли и общественного питания",
    "unit": "Единица",
    "description": "БД ПМО Росстата, обработка tochno.st, показатель Y48002001",
    "rankDirection": "desc",
    "sourceId": "bdmo_rosstat",
    "sourceIndicatorId": "Y48002001"
  },
  {
    "id": "bdmo_y48401006",
    "groupId": "bdmo_2_roznichnaya_torgovlya_i_obschestvennoe_pitanie",
    "name": "Оборот общественного питания (без субъектов малого предпринимательства)",
    "unit": "Тысяча рублей",
    "description": "БД ПМО Росстата, обработка tochno.st, показатель Y48401006",
    "rankDirection": "desc",
    "sourceId": "bdmo_rosstat",
    "sourceIndicatorId": "Y48401006"
  },
  {
    "id": "bdmo_y48401003",
    "groupId": "bdmo_2_roznichnaya_torgovlya_i_obschestvennoe_pitanie",
    "name": "Оборот розничной торговли (без субъектов малого предпринимательства)",
    "unit": "Тысяча рублей",
    "description": "БД ПМО Росстата, обработка tochno.st, показатель Y48401003",
    "rankDirection": "desc",
    "sourceId": "bdmo_rosstat",
    "sourceIndicatorId": "Y48401003"
  },
  {
    "id": "bdmo_y48801004",
    "groupId": "bdmo_2_roznichnaya_torgovlya_i_obschestvennoe_pitanie",
    "name": "Общий объем всех продовольственных товаров, реализованных в границах муниципального образования",
    "unit": "Тысяча рублей",
    "description": "БД ПМО Росстата, обработка tochno.st, показатель Y48801004",
    "rankDirection": "desc",
    "sourceId": "bdmo_rosstat",
    "sourceIndicatorId": "Y48801004"
  },
  {
    "id": "bdmo_y48002003",
    "groupId": "bdmo_2_roznichnaya_torgovlya_i_obschestvennoe_pitanie",
    "name": "Площадь зала обслуживания посетителей в объектах общественного питания",
    "unit": "Квадратный метр",
    "description": "БД ПМО Росстата, обработка tochno.st, показатель Y48002003",
    "rankDirection": "desc",
    "sourceId": "bdmo_rosstat",
    "sourceIndicatorId": "Y48002003"
  },
  {
    "id": "bdmo_y48002002",
    "groupId": "bdmo_2_roznichnaya_torgovlya_i_obschestvennoe_pitanie",
    "name": "Площадь торгового зала объектов розничной торговли",
    "unit": "Квадратный метр",
    "description": "БД ПМО Росстата, обработка tochno.st, показатель Y48002002",
    "rankDirection": "desc",
    "sourceId": "bdmo_rosstat",
    "sourceIndicatorId": "Y48002002"
  },
  {
    "id": "bdmo_y48002004",
    "groupId": "bdmo_2_roznichnaya_torgovlya_i_obschestvennoe_pitanie",
    "name": "Число мест в объектах общественного питания",
    "unit": "Место",
    "description": "БД ПМО Росстата, обработка tochno.st, показатель Y48002004",
    "rankDirection": "desc",
    "sourceId": "bdmo_rosstat",
    "sourceIndicatorId": "Y48002004"
  },
  {
    "id": "bdmo_y48002006",
    "groupId": "bdmo_2_roznichnaya_torgovlya_i_obschestvennoe_pitanie",
    "name": "Число рынков",
    "unit": "Единица",
    "description": "БД ПМО Росстата, обработка tochno.st, показатель Y48002006",
    "rankDirection": "desc",
    "sourceId": "bdmo_rosstat",
    "sourceIndicatorId": "Y48002006"
  },
  {
    "id": "bdmo_y48002005",
    "groupId": "bdmo_2_roznichnaya_torgovlya_i_obschestvennoe_pitanie",
    "name": "Число торговых мест на рынках",
    "unit": "Место",
    "description": "БД ПМО Росстата, обработка tochno.st, показатель Y48002005",
    "rankDirection": "desc",
    "sourceId": "bdmo_rosstat",
    "sourceIndicatorId": "Y48002005"
  },
  {
    "id": "bdmo_y48002008",
    "groupId": "bdmo_2_roznichnaya_torgovlya_i_obschestvennoe_pitanie",
    "name": "Число торговых мест на ярмарках",
    "unit": "Место",
    "description": "БД ПМО Росстата, обработка tochno.st, показатель Y48002008",
    "rankDirection": "desc",
    "sourceId": "bdmo_rosstat",
    "sourceIndicatorId": "Y48002008"
  },
  {
    "id": "bdmo_y48002007",
    "groupId": "bdmo_2_roznichnaya_torgovlya_i_obschestvennoe_pitanie",
    "name": "Число ярмарок",
    "unit": "Единица",
    "description": "БД ПМО Росстата, обработка tochno.st, показатель Y48002007",
    "rankDirection": "desc",
    "sourceId": "bdmo_rosstat",
    "sourceIndicatorId": "Y48002007"
  },
  {
    "id": "bdmo_y48018000",
    "groupId": "bdmo_33_zdravoohranenie",
    "name": "Число лечебно-профилактических организаций",
    "unit": "Единица",
    "description": "БД ПМО Росстата, обработка tochno.st, показатель Y48018000",
    "rankDirection": "desc",
    "sourceId": "bdmo_rosstat",
    "sourceIndicatorId": "Y48018000"
  },
  {
    "id": "bdmo_y49010027",
    "groupId": "bdmo_34_obrazovanie",
    "name": "Общая площадь зданий (помещений) организаций дополнительного образования детей",
    "unit": "Квадратный метр",
    "description": "БД ПМО Росстата, обработка tochno.st, показатель Y49010027",
    "rankDirection": "desc",
    "sourceId": "bdmo_rosstat",
    "sourceIndicatorId": "Y49010027"
  },
  {
    "id": "bdmo_y48014003",
    "groupId": "bdmo_34_obrazovanie",
    "name": "Численность воспитанников, посещающих организации, осуществляющие образовательную деятельность по образовательным программам дошкольного образования, присмотр и уход за детьми",
    "unit": "Человек",
    "description": "БД ПМО Росстата, обработка tochno.st, показатель Y48014003",
    "rankDirection": "desc",
    "sourceId": "bdmo_rosstat",
    "sourceIndicatorId": "Y48014003"
  },
  {
    "id": "bdmo_y49010024",
    "groupId": "bdmo_34_obrazovanie",
    "name": "Численность обучающихся по направлениям дополнительных общеобразовательных программ",
    "unit": "Человек",
    "description": "БД ПМО Росстата, обработка tochno.st, показатель Y49010024",
    "rankDirection": "desc",
    "sourceId": "bdmo_rosstat",
    "sourceIndicatorId": "Y49010024"
  },
  {
    "id": "bdmo_y49010026",
    "groupId": "bdmo_34_obrazovanie",
    "name": "Численность педагогических работников в организациях, осуществляющих образовательную деятельность по дополнительным общеобразовательным программам для детей",
    "unit": "Человек",
    "description": "БД ПМО Росстата, обработка tochno.st, показатель Y49010026",
    "rankDirection": "desc",
    "sourceId": "bdmo_rosstat",
    "sourceIndicatorId": "Y49010026"
  },
  {
    "id": "bdmo_y48440031",
    "groupId": "bdmo_34_obrazovanie",
    "name": "Численность педагогических работников в организациях, осуществляющих образовательную деятельность по образовательным программам дошкольного образования, присмотр и уход за детьми",
    "unit": "Человек",
    "description": "БД ПМО Росстата, обработка tochno.st, показатель Y48440031",
    "rankDirection": "desc",
    "sourceId": "bdmo_rosstat",
    "sourceIndicatorId": "Y48440031"
  },
  {
    "id": "bdmo_y49010025",
    "groupId": "bdmo_34_obrazovanie",
    "name": "Численность работников в организациях, осуществляющих деятельность по дополнительным общеобразовательным программам для детей",
    "unit": "Человек",
    "description": "БД ПМО Росстата, обработка tochno.st, показатель Y49010025",
    "rankDirection": "desc",
    "sourceId": "bdmo_rosstat",
    "sourceIndicatorId": "Y49010025"
  },
  {
    "id": "bdmo_y49010028",
    "groupId": "bdmo_34_obrazovanie",
    "name": "Число зданий организаций дополнительного образования детей",
    "unit": "Единица",
    "description": "БД ПМО Росстата, обработка tochno.st, показатель Y49010028",
    "rankDirection": "desc",
    "sourceId": "bdmo_rosstat",
    "sourceIndicatorId": "Y49010028"
  },
  {
    "id": "bdmo_y49010029",
    "groupId": "bdmo_34_obrazovanie",
    "name": "Число зданий организаций дополнительного образования детей, занимаемых не полностью",
    "unit": "Единица",
    "description": "БД ПМО Росстата, обработка tochno.st, показатель Y49010029",
    "rankDirection": "desc",
    "sourceId": "bdmo_rosstat",
    "sourceIndicatorId": "Y49010029"
  },
  {
    "id": "bdmo_y49010031",
    "groupId": "bdmo_34_obrazovanie",
    "name": "Число зданий организаций дополнительного образования детей, требующих капитального ремонта",
    "unit": "Единица",
    "description": "БД ПМО Росстата, обработка tochno.st, показатель Y49010031",
    "rankDirection": "desc",
    "sourceId": "bdmo_rosstat",
    "sourceIndicatorId": "Y49010031"
  },
  {
    "id": "bdmo_y48014002",
    "groupId": "bdmo_34_obrazovanie",
    "name": "Число мест в организациях, осуществляющих образовательную деятельность по образовательным программам дошкольного образования, присмотр и уход за детьми",
    "unit": "Единица",
    "description": "БД ПМО Росстата, обработка tochno.st, показатель Y48014002",
    "rankDirection": "desc",
    "sourceId": "bdmo_rosstat",
    "sourceIndicatorId": "Y48014002"
  },
  {
    "id": "bdmo_y48055001",
    "groupId": "bdmo_35_ohrana_okruzhayuschey_sredy",
    "name": "Текущие (эксплуатационные) затраты на охрану окружающей среды, включая оплату услуг природоохранного назначения (c 2012 г. — включая индивидуальных предпринимателей)",
    "unit": "Тысяча рублей",
    "description": "БД ПМО Росстата, обработка tochno.st, показатель Y48055001",
    "rankDirection": "desc",
    "sourceId": "bdmo_rosstat",
    "sourceIndicatorId": "Y48055001"
  },
  {
    "id": "bdmo_y48045003",
    "groupId": "bdmo_36_osnovnye_fondy_organizaciy_municipalnoy_formy_sobstvennosti",
    "name": "Наличие основных фондов по остаточной балансовой стоимости по коммерческим организациям муниципальной формы собственности",
    "unit": "Тысяча рублей",
    "description": "БД ПМО Росстата, обработка tochno.st, показатель Y48045003",
    "rankDirection": "desc",
    "sourceId": "bdmo_rosstat",
    "sourceIndicatorId": "Y48045003"
  },
  {
    "id": "bdmo_y48045004",
    "groupId": "bdmo_36_osnovnye_fondy_organizaciy_municipalnoy_formy_sobstvennosti",
    "name": "Наличие основных фондов по остаточной балансовой стоимости по некоммерческим организациям муниципальной формы собственности",
    "unit": "Тысяча рублей",
    "description": "БД ПМО Росстата, обработка tochno.st, показатель Y48045004",
    "rankDirection": "desc",
    "sourceId": "bdmo_rosstat",
    "sourceIndicatorId": "Y48045004"
  },
  {
    "id": "bdmo_y48045001",
    "groupId": "bdmo_36_osnovnye_fondy_organizaciy_municipalnoy_formy_sobstvennosti",
    "name": "Наличие основных фондов по полной учетной стоимости по коммерческим организациям муниципальной формы собственности",
    "unit": "Тысяча рублей",
    "description": "БД ПМО Росстата, обработка tochno.st, показатель Y48045001",
    "rankDirection": "desc",
    "sourceId": "bdmo_rosstat",
    "sourceIndicatorId": "Y48045001"
  },
  {
    "id": "bdmo_y48045002",
    "groupId": "bdmo_36_osnovnye_fondy_organizaciy_municipalnoy_formy_sobstvennosti",
    "name": "Наличие основных фондов по полной учетной стоимости по некоммерческим организациям муниципальной формы собственности",
    "unit": "Тысяча рублей",
    "description": "БД ПМО Росстата, обработка tochno.st, показатель Y48045002",
    "rankDirection": "desc",
    "sourceId": "bdmo_rosstat",
    "sourceIndicatorId": "Y48045002"
  },
  {
    "id": "bdmo_y48045005",
    "groupId": "bdmo_36_osnovnye_fondy_organizaciy_municipalnoy_formy_sobstvennosti",
    "name": "Начисленный учетный износ основных фондов (амортизация и износ основных фондов, отражаемые в бухгалтерском учете и отчетности), по коммерческим организациям",
    "unit": "Тысяча рублей",
    "description": "БД ПМО Росстата, обработка tochno.st, показатель Y48045005",
    "rankDirection": "desc",
    "sourceId": "bdmo_rosstat",
    "sourceIndicatorId": "Y48045005"
  },
  {
    "id": "bdmo_y48045006",
    "groupId": "bdmo_36_osnovnye_fondy_organizaciy_municipalnoy_formy_sobstvennosti",
    "name": "Начисленный учетный износ основных фондов (амортизация и износ основных фондов, отражаемые в бухгалтерском учете и отчетности), по некоммерческим организациям",
    "unit": "Тысяча рублей",
    "description": "БД ПМО Росстата, обработка tochno.st, показатель Y48045006",
    "rankDirection": "desc",
    "sourceId": "bdmo_rosstat",
    "sourceIndicatorId": "Y48045006"
  },
  {
    "id": "bdmo_y48010001",
    "groupId": "bdmo_37_stroitelstvo_zhilya",
    "name": "Введено в действие жилых домов",
    "unit": "Квадратный метр общей площади",
    "description": "БД ПМО Росстата, обработка tochno.st, показатель Y48010001",
    "rankDirection": "desc",
    "sourceId": "bdmo_rosstat",
    "sourceIndicatorId": "Y48010001"
  },
  {
    "id": "bdmo_y48010002",
    "groupId": "bdmo_37_stroitelstvo_zhilya",
    "name": "Введено в действие индивидуальных жилых домов",
    "unit": "Квадратный метр общей площади",
    "description": "БД ПМО Росстата, обработка tochno.st, показатель Y48010002",
    "rankDirection": "desc",
    "sourceId": "bdmo_rosstat",
    "sourceIndicatorId": "Y48010002"
  },
  {
    "id": "bdmo_y48010003",
    "groupId": "bdmo_37_stroitelstvo_zhilya",
    "name": "Введено жилья в многоквартирных жилых домах",
    "unit": "Квадратный метр общей площади",
    "description": "БД ПМО Росстата, обработка tochno.st, показатель Y48010003",
    "rankDirection": "desc",
    "sourceId": "bdmo_rosstat",
    "sourceIndicatorId": "Y48010003"
  },
  {
    "id": "bdmo_y48011010",
    "groupId": "bdmo_37_stroitelstvo_zhilya",
    "name": "Число семей, получивших жилые помещения и улучшивших жилищные условия",
    "unit": "Единица",
    "description": "БД ПМО Росстата, обработка tochno.st, показатель Y48011010",
    "rankDirection": "desc",
    "sourceId": "bdmo_rosstat",
    "sourceIndicatorId": "Y48011010"
  },
  {
    "id": "bdmo_y48011011",
    "groupId": "bdmo_37_stroitelstvo_zhilya",
    "name": "Число семей, состоящих на учете в качестве нуждающихся в жилых помещениях",
    "unit": "Единица",
    "description": "БД ПМО Росстата, обработка tochno.st, показатель Y48011011",
    "rankDirection": "desc",
    "sourceId": "bdmo_rosstat",
    "sourceIndicatorId": "Y48011011"
  },
  {
    "id": "bdmo_y49010003",
    "groupId": "bdmo_39_deyatelnost_predpriyatiy",
    "name": "Количество индивидуальных предпринимателей по данным государственной регистрации",
    "unit": "Человек",
    "description": "БД ПМО Росстата, обработка tochno.st, показатель Y49010003",
    "rankDirection": "desc",
    "sourceId": "bdmo_rosstat",
    "sourceIndicatorId": "Y49010003"
  },
  {
    "id": "bdmo_y49010002",
    "groupId": "bdmo_39_deyatelnost_predpriyatiy",
    "name": "Количество организаций по данным государственной регистрации",
    "unit": "Единица",
    "description": "БД ПМО Росстата, обработка tochno.st, показатель Y49010002",
    "rankDirection": "desc",
    "sourceId": "bdmo_rosstat",
    "sourceIndicatorId": "Y49010002"
  },
  {
    "id": "bdmo_y48401011",
    "groupId": "bdmo_39_deyatelnost_predpriyatiy",
    "name": "Отгружено товаров собственного производства, выполнено работ и услуг собственными силами (без субъектов малого предпринимательства)",
    "unit": "Тысяча рублей",
    "description": "БД ПМО Росстата, обработка tochno.st, показатель Y48401011",
    "rankDirection": "desc",
    "sourceId": "bdmo_rosstat",
    "sourceIndicatorId": "Y48401011"
  },
  {
    "id": "bdmo_y48401008",
    "groupId": "bdmo_39_deyatelnost_predpriyatiy",
    "name": "Отгружено товаров собственного производства, выполнено работ и услуг собственными силами (без субъектов малого предпринимательства), средняя численность работников которых превышает 15 человек, по фактическим видам экономической деятельности",
    "unit": "Тысяча рублей",
    "description": "БД ПМО Росстата, обработка tochno.st, показатель Y48401008",
    "rankDirection": "desc",
    "sourceId": "bdmo_rosstat",
    "sourceIndicatorId": "Y48401008"
  },
  {
    "id": "bdmo_y48401012",
    "groupId": "bdmo_39_deyatelnost_predpriyatiy",
    "name": "Продано товаров несобственного производства (без субъектов малого предпринимательства)",
    "unit": "Тысяча рублей",
    "description": "БД ПМО Росстата, обработка tochno.st, показатель Y48401012",
    "rankDirection": "desc",
    "sourceId": "bdmo_rosstat",
    "sourceIndicatorId": "Y48401012"
  },
  {
    "id": "bdmo_y48003004",
    "groupId": "bdmo_3_sport",
    "name": "Численность занимающихся в детско-юношеских спортивных школах",
    "unit": "Человек",
    "description": "БД ПМО Росстата, обработка tochno.st, показатель Y48003004",
    "rankDirection": "desc",
    "sourceId": "bdmo_rosstat",
    "sourceIndicatorId": "Y48003004"
  },
  {
    "id": "bdmo_y48003003",
    "groupId": "bdmo_3_sport",
    "name": "Число детско-юношеских спортивных школ (включая филиалы)",
    "unit": "Единица",
    "description": "БД ПМО Росстата, обработка tochno.st, показатель Y48003003",
    "rankDirection": "desc",
    "sourceId": "bdmo_rosstat",
    "sourceIndicatorId": "Y48003003"
  },
  {
    "id": "bdmo_y48003002",
    "groupId": "bdmo_3_sport",
    "name": "Число муниципальных спортивных сооружений",
    "unit": "Единица",
    "description": "БД ПМО Росстата, обработка tochno.st, показатель Y48003002",
    "rankDirection": "desc",
    "sourceId": "bdmo_rosstat",
    "sourceIndicatorId": "Y48003002"
  },
  {
    "id": "bdmo_y48003005",
    "groupId": "bdmo_3_sport",
    "name": "Число самостоятельных детско-юношеских спортивных школ",
    "unit": "Единица",
    "description": "БД ПМО Росстата, обработка tochno.st, показатель Y48003005",
    "rankDirection": "desc",
    "sourceId": "bdmo_rosstat",
    "sourceIndicatorId": "Y48003005"
  },
  {
    "id": "bdmo_y48003001",
    "groupId": "bdmo_3_sport",
    "name": "Число спортивных сооружений",
    "unit": "Единица",
    "description": "БД ПМО Росстата, обработка tochno.st, показатель Y48003001",
    "rankDirection": "desc",
    "sourceId": "bdmo_rosstat",
    "sourceIndicatorId": "Y48003001"
  },
  {
    "id": "bdmo_y48014006",
    "groupId": "bdmo_41_pokazateli_dlya_ocenki_effektivnosti_deyatelnosti_organov_mestnogo_samoupravleniya_gorodskih_okrugov_i_municipalnyh_rayonov",
    "name": "Доля детей в возрасте 1‒6 лет, получающих дошкольную образовательную услугу и (или) услугу по их содержанию в муниципальных образовательных учреждениях, в общей численности детей в возрасте 1‒6 лет",
    "unit": "Процент",
    "description": "БД ПМО Росстата, обработка tochno.st, показатель Y48014006",
    "rankDirection": "desc",
    "sourceId": "bdmo_rosstat",
    "sourceIndicatorId": "Y48014006"
  },
  {
    "id": "bdmo_y48155018",
    "groupId": "bdmo_41_pokazateli_dlya_ocenki_effektivnosti_deyatelnosti_organov_mestnogo_samoupravleniya_gorodskih_okrugov_i_municipalnyh_rayonov",
    "name": "Доля многоквартирных домов, расположенных на земельных участках, в отношении которых осуществлен государственный кадастровый учет",
    "unit": "Процент",
    "description": "БД ПМО Росстата, обработка tochno.st, показатель Y48155018",
    "rankDirection": "desc",
    "sourceId": "bdmo_rosstat",
    "sourceIndicatorId": "Y48155018"
  },
  {
    "id": "bdmo_y48014007",
    "groupId": "bdmo_41_pokazateli_dlya_ocenki_effektivnosti_deyatelnosti_organov_mestnogo_samoupravleniya_gorodskih_okrugov_i_municipalnyh_rayonov",
    "name": "Доля муниципальных дошкольных образовательных учреждений, здания которых находятся в аварийном состоянии или требуют капитального ремонта, в общем числе муниципальных дошкольных образовательных учреждений",
    "unit": "Процент",
    "description": "БД ПМО Росстата, обработка tochno.st, показатель Y48014007",
    "rankDirection": "desc",
    "sourceId": "bdmo_rosstat",
    "sourceIndicatorId": "Y48014007"
  },
  {
    "id": "bdmo_y48313015",
    "groupId": "bdmo_41_pokazateli_dlya_ocenki_effektivnosti_deyatelnosti_organov_mestnogo_samoupravleniya_gorodskih_okrugov_i_municipalnyh_rayonov",
    "name": "Доля налоговых и неналоговых доходов местного бюджета (за исключением поступлений налоговых доходов по дополнительным нормативам отчислений) в общем объеме собственных доходов бюджета муниципального образования (без учета субвенций)",
    "unit": "Процент",
    "description": "БД ПМО Росстата, обработка tochno.st, показатель Y48313015",
    "rankDirection": "desc",
    "sourceId": "bdmo_rosstat",
    "sourceIndicatorId": "Y48313015"
  },
  {
    "id": "bdmo_y48155056",
    "groupId": "bdmo_41_pokazateli_dlya_ocenki_effektivnosti_deyatelnosti_organov_mestnogo_samoupravleniya_gorodskih_okrugov_i_municipalnyh_rayonov",
    "name": "Доля населения, получившего жилые помещения и улучшившего жилищные условия , в общей численности населения, состоящего на учете в качестве нуждающегося в жилых помещениях",
    "unit": "Процент",
    "description": "БД ПМО Росстата, обработка tochno.st, показатель Y48155056",
    "rankDirection": "desc",
    "sourceId": "bdmo_rosstat",
    "sourceIndicatorId": "Y48155056"
  },
  {
    "id": "bdmo_y48155002",
    "groupId": "bdmo_41_pokazateli_dlya_ocenki_effektivnosti_deyatelnosti_organov_mestnogo_samoupravleniya_gorodskih_okrugov_i_municipalnyh_rayonov",
    "name": "Доля населения, проживающего в населенных пунктах, не имеющих регулярного автобусного и (или) железнодорожного сообщения с административным центром муниципального, городского округа (муниципального района), в общей численности населения муниципального, го",
    "unit": "Процент",
    "description": "БД ПМО Росстата, обработка tochno.st, показатель Y48155002",
    "rankDirection": "desc",
    "sourceId": "bdmo_rosstat",
    "sourceIndicatorId": "Y48155002"
  },
  {
    "id": "bdmo_y48155023",
    "groupId": "bdmo_41_pokazateli_dlya_ocenki_effektivnosti_deyatelnosti_organov_mestnogo_samoupravleniya_gorodskih_okrugov_i_municipalnyh_rayonov",
    "name": "Доля основных фондов организаций муниципальной формы собственности, находящихся в стадии банкротства, в основных фондах организаций муниципальной формы собственности ( по полной учетной стоимости)",
    "unit": "Процент",
    "description": "БД ПМО Росстата, обработка tochno.st, показатель Y48155023",
    "rankDirection": "desc",
    "sourceId": "bdmo_rosstat",
    "sourceIndicatorId": "Y48155023"
  },
  {
    "id": "bdmo_y48155006",
    "groupId": "bdmo_41_pokazateli_dlya_ocenki_effektivnosti_deyatelnosti_organov_mestnogo_samoupravleniya_gorodskih_okrugov_i_municipalnyh_rayonov",
    "name": "Доля площади земельных участков, являющихся объектами налогообложения земельным налогом, в общей площади территории муниципального, городского округа (муниципального района)",
    "unit": "Процент",
    "description": "БД ПМО Росстата, обработка tochno.st, показатель Y48155006",
    "rankDirection": "desc",
    "sourceId": "bdmo_rosstat",
    "sourceIndicatorId": "Y48155006"
  },
  {
    "id": "bdmo_y48942019",
    "groupId": "bdmo_41_pokazateli_dlya_ocenki_effektivnosti_deyatelnosti_organov_mestnogo_samoupravleniya_gorodskih_okrugov_i_municipalnyh_rayonov",
    "name": "Доля прибыльных сельскохозяйственных организаций в общем их числе",
    "unit": "Процент",
    "description": "БД ПМО Росстата, обработка tochno.st, показатель Y48942019",
    "rankDirection": "desc",
    "sourceId": "bdmo_rosstat",
    "sourceIndicatorId": "Y48942019"
  },
  {
    "id": "bdmo_y48106005",
    "groupId": "bdmo_41_pokazateli_dlya_ocenki_effektivnosti_deyatelnosti_organov_mestnogo_samoupravleniya_gorodskih_okrugov_i_municipalnyh_rayonov",
    "name": "Доля протяженности автомобильных дорог общего пользования местного значения, не отвечающих нормативным требованиям, в общей протяженности автомобильных дорог общего пользования местного значения",
    "unit": "Процент",
    "description": "БД ПМО Росстата, обработка tochno.st, показатель Y48106005",
    "rankDirection": "desc",
    "sourceId": "bdmo_rosstat",
    "sourceIndicatorId": "Y48106005"
  },
  {
    "id": "bdmo_y48155057",
    "groupId": "bdmo_41_pokazateli_dlya_ocenki_effektivnosti_deyatelnosti_organov_mestnogo_samoupravleniya_gorodskih_okrugov_i_municipalnyh_rayonov",
    "name": "Наличие в муниципальном, городском округе (муниципальном районе), утвержденного генерального плана муниципального, городского округа (схемы территориального планирования муниципального района) (да-1/нет-2)",
    "unit": "Нет",
    "description": "БД ПМО Росстата, обработка tochno.st, показатель Y48155057",
    "rankDirection": "desc",
    "sourceId": "bdmo_rosstat",
    "sourceIndicatorId": "Y48155057"
  },
  {
    "id": "bdmo_y48215001",
    "groupId": "bdmo_41_pokazateli_dlya_ocenki_effektivnosti_deyatelnosti_organov_mestnogo_samoupravleniya_gorodskih_okrugov_i_municipalnyh_rayonov",
    "name": "Общая площадь жилых помещений, введенная в действие за год, приходящаяся в среднем на одного жителя",
    "unit": "Квадратный метр общей площади",
    "description": "БД ПМО Росстата, обработка tochno.st, показатель Y48215001",
    "rankDirection": "desc",
    "sourceId": "bdmo_rosstat",
    "sourceIndicatorId": "Y48215001"
  },
  {
    "id": "bdmo_y48211001",
    "groupId": "bdmo_41_pokazateli_dlya_ocenki_effektivnosti_deyatelnosti_organov_mestnogo_samoupravleniya_gorodskih_okrugov_i_municipalnyh_rayonov",
    "name": "Общая площадь жилых помещений, приходящаяся в среднем на одного жителя — всего",
    "unit": "Квадратный метр",
    "description": "БД ПМО Росстата, обработка tochno.st, показатель Y48211001",
    "rankDirection": "desc",
    "sourceId": "bdmo_rosstat",
    "sourceIndicatorId": "Y48211001"
  },
  {
    "id": "bdmo_y48109003",
    "groupId": "bdmo_41_pokazateli_dlya_ocenki_effektivnosti_deyatelnosti_organov_mestnogo_samoupravleniya_gorodskih_okrugov_i_municipalnyh_rayonov",
    "name": "Объем инвестиций в основной капитал (за исключением бюджетных средств) в расчете на одного человека",
    "unit": "Рубль",
    "description": "БД ПМО Росстата, обработка tochno.st, показатель Y48109003",
    "rankDirection": "desc",
    "sourceId": "bdmo_rosstat",
    "sourceIndicatorId": "Y48109003"
  },
  {
    "id": "bdmo_y48155033",
    "groupId": "bdmo_41_pokazateli_dlya_ocenki_effektivnosti_deyatelnosti_organov_mestnogo_samoupravleniya_gorodskih_okrugov_i_municipalnyh_rayonov",
    "name": "Объем незавершенного в установленные сроки строительства, осуществляемого за счет средств бюджета муниципального, городского округа (муниципального района)",
    "unit": "Тысяча рублей",
    "description": "БД ПМО Росстата, обработка tochno.st, показатель Y48155033",
    "rankDirection": "desc",
    "sourceId": "bdmo_rosstat",
    "sourceIndicatorId": "Y48155033"
  },
  {
    "id": "bdmo_y48155008",
    "groupId": "bdmo_41_pokazateli_dlya_ocenki_effektivnosti_deyatelnosti_organov_mestnogo_samoupravleniya_gorodskih_okrugov_i_municipalnyh_rayonov",
    "name": "Площадь земельных участков для объектов жилищного строительства, в том числе индивидуального, по которым не получено разрешение на ввод в эксплуатацию в течение трех лет (с даты принятия решения о предоставлении земельного участка)",
    "unit": "2007 и 2008 гг. — тысяча метров, с 2009 года — метр",
    "description": "БД ПМО Росстата, обработка tochno.st, показатель Y48155008",
    "rankDirection": "desc",
    "sourceId": "bdmo_rosstat",
    "sourceIndicatorId": "Y48155008"
  },
  {
    "id": "bdmo_y48155055",
    "groupId": "bdmo_41_pokazateli_dlya_ocenki_effektivnosti_deyatelnosti_organov_mestnogo_samoupravleniya_gorodskih_okrugov_i_municipalnyh_rayonov",
    "name": "Площадь земельных участков, предоставленных для жилищного строительства, индивидуального жилищного строительства и комплексного освоения в целях жилищного строительства, в расчете на 10 тысяч человек населения, — всего",
    "unit": "Гектар",
    "description": "БД ПМО Росстата, обработка tochno.st, показатель Y48155055",
    "rankDirection": "desc",
    "sourceId": "bdmo_rosstat",
    "sourceIndicatorId": "Y48155055"
  },
  {
    "id": "bdmo_y48155009",
    "groupId": "bdmo_41_pokazateli_dlya_ocenki_effektivnosti_deyatelnosti_organov_mestnogo_samoupravleniya_gorodskih_okrugov_i_municipalnyh_rayonov",
    "name": "Площадь земельных участков, предоставленных для строительства иных объектов капитального строительства, в отношении которых с даты принятия решения о предоставлении земельного участка или подписания протокола о результатах торгов (конкурсов, аукционов) не было получено разрешение на ввод в эксплуатацию в течение пяти лет",
    "unit": "2007 и 2008 гг. — тысяча метров, с 2009 года — метр",
    "description": "БД ПМО Росстата, обработка tochno.st, показатель Y48155009",
    "rankDirection": "desc",
    "sourceId": "bdmo_rosstat",
    "sourceIndicatorId": "Y48155009"
  },
  {
    "id": "bdmo_y48155054",
    "groupId": "bdmo_41_pokazateli_dlya_ocenki_effektivnosti_deyatelnosti_organov_mestnogo_samoupravleniya_gorodskih_okrugov_i_municipalnyh_rayonov",
    "name": "Площадь земельных участков, предоставленных для строительства, в расчете на 10 тысяч человек населения, — всего",
    "unit": "Гектар",
    "description": "БД ПМО Росстата, обработка tochno.st, показатель Y48155054",
    "rankDirection": "desc",
    "sourceId": "bdmo_rosstat",
    "sourceIndicatorId": "Y48155054"
  },
  {
    "id": "bdmo_y48313004",
    "groupId": "bdmo_41_pokazateli_dlya_ocenki_effektivnosti_deyatelnosti_organov_mestnogo_samoupravleniya_gorodskih_okrugov_i_municipalnyh_rayonov",
    "name": "Расходы бюджета муниципального образования на содержание работников органов местного самоуправления в расчете на одного жителя муниципального образования",
    "unit": "2008 г. — тысяча рублей, с 2009 г. — рубль",
    "description": "БД ПМО Росстата, обработка tochno.st, показатель Y48313004",
    "rankDirection": "desc",
    "sourceId": "bdmo_rosstat",
    "sourceIndicatorId": "Y48313004"
  },
  {
    "id": "bdmo_y48112013",
    "groupId": "bdmo_41_pokazateli_dlya_ocenki_effektivnosti_deyatelnosti_organov_mestnogo_samoupravleniya_gorodskih_okrugov_i_municipalnyh_rayonov",
    "name": "Среднегодовая численность постоянного населения",
    "unit": "Человек",
    "description": "БД ПМО Росстата, обработка tochno.st, показатель Y48112013",
    "rankDirection": "desc",
    "sourceId": "bdmo_rosstat",
    "sourceIndicatorId": "Y48112013"
  },
  {
    "id": "bdmo_y48213002",
    "groupId": "bdmo_41_pokazateli_dlya_ocenki_effektivnosti_deyatelnosti_organov_mestnogo_samoupravleniya_gorodskih_okrugov_i_municipalnyh_rayonov",
    "name": "Среднемесячная номинальная начисленная заработная плата работников крупных, средних предприятий и некоммерческих организаций городского округа (муниципального района)",
    "unit": "Рубль",
    "description": "БД ПМО Росстата, обработка tochno.st, показатель Y48213002",
    "rankDirection": "desc",
    "sourceId": "bdmo_rosstat",
    "sourceIndicatorId": "Y48213002"
  },
  {
    "id": "bdmo_y48213003",
    "groupId": "bdmo_41_pokazateli_dlya_ocenki_effektivnosti_deyatelnosti_organov_mestnogo_samoupravleniya_gorodskih_okrugov_i_municipalnyh_rayonov",
    "name": "Среднемесячная номинальная начисленная заработная плата работников муниципальных дошкольных образовательных организаций",
    "unit": "Рубль",
    "description": "БД ПМО Росстата, обработка tochno.st, показатель Y48213003",
    "rankDirection": "desc",
    "sourceId": "bdmo_rosstat",
    "sourceIndicatorId": "Y48213003"
  },
  {
    "id": "bdmo_y48213004",
    "groupId": "bdmo_41_pokazateli_dlya_ocenki_effektivnosti_deyatelnosti_organov_mestnogo_samoupravleniya_gorodskih_okrugov_i_municipalnyh_rayonov",
    "name": "Среднемесячная номинальная начисленная заработная плата работников муниципальных общеобразовательных организаций",
    "unit": "Рубль",
    "description": "БД ПМО Росстата, обработка tochno.st, показатель Y48213004",
    "rankDirection": "desc",
    "sourceId": "bdmo_rosstat",
    "sourceIndicatorId": "Y48213004"
  },
  {
    "id": "bdmo_y48213007",
    "groupId": "bdmo_41_pokazateli_dlya_ocenki_effektivnosti_deyatelnosti_organov_mestnogo_samoupravleniya_gorodskih_okrugov_i_municipalnyh_rayonov",
    "name": "Среднемесячная номинальная начисленная заработная плата работников муниципальных учреждений культуры и искусства",
    "unit": "Рубль",
    "description": "БД ПМО Росстата, обработка tochno.st, показатель Y48213007",
    "rankDirection": "desc",
    "sourceId": "bdmo_rosstat",
    "sourceIndicatorId": "Y48213007"
  },
  {
    "id": "bdmo_y48213008",
    "groupId": "bdmo_41_pokazateli_dlya_ocenki_effektivnosti_deyatelnosti_organov_mestnogo_samoupravleniya_gorodskih_okrugov_i_municipalnyh_rayonov",
    "name": "Среднемесячная номинальная начисленная заработная плата работников муниципальных учреждений физической культуры и спорта",
    "unit": "Рубль",
    "description": "БД ПМО Росстата, обработка tochno.st, показатель Y48213008",
    "rankDirection": "desc",
    "sourceId": "bdmo_rosstat",
    "sourceIndicatorId": "Y48213008"
  },
  {
    "id": "bdmo_y48155043",
    "groupId": "bdmo_41_pokazateli_dlya_ocenki_effektivnosti_deyatelnosti_organov_mestnogo_samoupravleniya_gorodskih_okrugov_i_municipalnyh_rayonov",
    "name": "Удельная величина потребления горячей воды в многоквартирных домах на одного проживающего",
    "unit": "Кубический метр",
    "description": "БД ПМО Росстата, обработка tochno.st, показатель Y48155043",
    "rankDirection": "desc",
    "sourceId": "bdmo_rosstat",
    "sourceIndicatorId": "Y48155043"
  },
  {
    "id": "bdmo_y48155049",
    "groupId": "bdmo_41_pokazateli_dlya_ocenki_effektivnosti_deyatelnosti_organov_mestnogo_samoupravleniya_gorodskih_okrugov_i_municipalnyh_rayonov",
    "name": "Удельная величина потребления горячей воды муниципальными бюджетными учреждениями на одного человека населения",
    "unit": "Кубический метр",
    "description": "БД ПМО Росстата, обработка tochno.st, показатель Y48155049",
    "rankDirection": "desc",
    "sourceId": "bdmo_rosstat",
    "sourceIndicatorId": "Y48155049"
  },
  {
    "id": "bdmo_y48155045",
    "groupId": "bdmo_41_pokazateli_dlya_ocenki_effektivnosti_deyatelnosti_organov_mestnogo_samoupravleniya_gorodskih_okrugov_i_municipalnyh_rayonov",
    "name": "Удельная величина потребления природного газа в многоквартирных домах на одного проживающего",
    "unit": "Кубический метр",
    "description": "БД ПМО Росстата, обработка tochno.st, показатель Y48155045",
    "rankDirection": "desc",
    "sourceId": "bdmo_rosstat",
    "sourceIndicatorId": "Y48155045"
  },
  {
    "id": "bdmo_y48155051",
    "groupId": "bdmo_41_pokazateli_dlya_ocenki_effektivnosti_deyatelnosti_organov_mestnogo_samoupravleniya_gorodskih_okrugov_i_municipalnyh_rayonov",
    "name": "Удельная величина потребления природного газа муниципальными бюджетными учреждениями на одного человека населения",
    "unit": "Кубический метр",
    "description": "БД ПМО Росстата, обработка tochno.st, показатель Y48155051",
    "rankDirection": "desc",
    "sourceId": "bdmo_rosstat",
    "sourceIndicatorId": "Y48155051"
  },
  {
    "id": "bdmo_y48155042",
    "groupId": "bdmo_41_pokazateli_dlya_ocenki_effektivnosti_deyatelnosti_organov_mestnogo_samoupravleniya_gorodskih_okrugov_i_municipalnyh_rayonov",
    "name": "Удельная величина потребления тепловой энергии в многоквартирных домах на 1 кв. м. общей площади",
    "unit": "Гигакалория",
    "description": "БД ПМО Росстата, обработка tochno.st, показатель Y48155042",
    "rankDirection": "desc",
    "sourceId": "bdmo_rosstat",
    "sourceIndicatorId": "Y48155042"
  },
  {
    "id": "bdmo_y48155048",
    "groupId": "bdmo_41_pokazateli_dlya_ocenki_effektivnosti_deyatelnosti_organov_mestnogo_samoupravleniya_gorodskih_okrugov_i_municipalnyh_rayonov",
    "name": "Удельная величина потребления тепловой энергии муниципальными бюджетными учреждениями на 1 кв. м. общей площади",
    "unit": "Гигакалория",
    "description": "БД ПМО Росстата, обработка tochno.st, показатель Y48155048",
    "rankDirection": "desc",
    "sourceId": "bdmo_rosstat",
    "sourceIndicatorId": "Y48155048"
  },
  {
    "id": "bdmo_y48155044",
    "groupId": "bdmo_41_pokazateli_dlya_ocenki_effektivnosti_deyatelnosti_organov_mestnogo_samoupravleniya_gorodskih_okrugov_i_municipalnyh_rayonov",
    "name": "Удельная величина потребления холодной воды в многоквартирных домах на одного проживающего",
    "unit": "Кубический метр",
    "description": "БД ПМО Росстата, обработка tochno.st, показатель Y48155044",
    "rankDirection": "desc",
    "sourceId": "bdmo_rosstat",
    "sourceIndicatorId": "Y48155044"
  },
  {
    "id": "bdmo_y48155050",
    "groupId": "bdmo_41_pokazateli_dlya_ocenki_effektivnosti_deyatelnosti_organov_mestnogo_samoupravleniya_gorodskih_okrugov_i_municipalnyh_rayonov",
    "name": "Удельная величина потребления холодной воды муниципальными бюджетными учреждениями на одного человека",
    "unit": "Кубический метр",
    "description": "БД ПМО Росстата, обработка tochno.st, показатель Y48155050",
    "rankDirection": "desc",
    "sourceId": "bdmo_rosstat",
    "sourceIndicatorId": "Y48155050"
  },
  {
    "id": "bdmo_y48155041",
    "groupId": "bdmo_41_pokazateli_dlya_ocenki_effektivnosti_deyatelnosti_organov_mestnogo_samoupravleniya_gorodskih_okrugov_i_municipalnyh_rayonov",
    "name": "Удельная величина потребления электрической энергии в многоквартирных домах на одного проживающего",
    "unit": "Киловатт-час",
    "description": "БД ПМО Росстата, обработка tochno.st, показатель Y48155041",
    "rankDirection": "desc",
    "sourceId": "bdmo_rosstat",
    "sourceIndicatorId": "Y48155041"
  },
  {
    "id": "bdmo_y48155047",
    "groupId": "bdmo_41_pokazateli_dlya_ocenki_effektivnosti_deyatelnosti_organov_mestnogo_samoupravleniya_gorodskih_okrugov_i_municipalnyh_rayonov",
    "name": "Удельная величина потребления электрической энергии муниципальными бюджетными учреждениями на одного человека населения",
    "unit": "Киловатт-час",
    "description": "БД ПМО Росстата, обработка tochno.st, показатель Y48155047",
    "rankDirection": "desc",
    "sourceId": "bdmo_rosstat",
    "sourceIndicatorId": "Y48155047"
  },
  {
    "id": "bdmo_y48942003",
    "groupId": "bdmo_42_finansovaya_deyatelnost",
    "name": "Дебиторская задолженность",
    "unit": "Тысяча рублей",
    "description": "БД ПМО Росстата, обработка tochno.st, показатель Y48942003",
    "rankDirection": "desc",
    "sourceId": "bdmo_rosstat",
    "sourceIndicatorId": "Y48942003"
  },
  {
    "id": "bdmo_y48942006",
    "groupId": "bdmo_42_finansovaya_deyatelnost",
    "name": "Задолженность по платежам в бюджет из общей суммы кредиторской задолженности",
    "unit": "Тысяча рублей",
    "description": "БД ПМО Росстата, обработка tochno.st, показатель Y48942006",
    "rankDirection": "desc",
    "sourceId": "bdmo_rosstat",
    "sourceIndicatorId": "Y48942006"
  },
  {
    "id": "bdmo_y48942007",
    "groupId": "bdmo_42_finansovaya_deyatelnost",
    "name": "Задолженность по платежам в государственные внебюджетные фонды из общей суммы кредиторской задолженности",
    "unit": "Тысяча рублей",
    "description": "БД ПМО Росстата, обработка tochno.st, показатель Y48942007",
    "rankDirection": "desc",
    "sourceId": "bdmo_rosstat",
    "sourceIndicatorId": "Y48942007"
  },
  {
    "id": "bdmo_y48942009",
    "groupId": "bdmo_42_finansovaya_deyatelnost",
    "name": "Задолженность по полученным займам и кредитам",
    "unit": "Тысяча рублей",
    "description": "БД ПМО Росстата, обработка tochno.st, показатель Y48942009",
    "rankDirection": "desc",
    "sourceId": "bdmo_rosstat",
    "sourceIndicatorId": "Y48942009"
  },
  {
    "id": "bdmo_y48942004",
    "groupId": "bdmo_42_finansovaya_deyatelnost",
    "name": "Задолженность покупателей и заказчиков за товары, работы и услуги из общей суммы дебиторской задолженности",
    "unit": "Тысяча рублей",
    "description": "БД ПМО Росстата, обработка tochno.st, показатель Y48942004",
    "rankDirection": "desc",
    "sourceId": "bdmo_rosstat",
    "sourceIndicatorId": "Y48942004"
  },
  {
    "id": "bdmo_y48942008",
    "groupId": "bdmo_42_finansovaya_deyatelnost",
    "name": "Задолженность поставщикам и подрядчикам за товары, работы и услуги из общей суммы кредиторской задолженности",
    "unit": "Тысяча рублей",
    "description": "БД ПМО Росстата, обработка tochno.st, показатель Y48942008",
    "rankDirection": "desc",
    "sourceId": "bdmo_rosstat",
    "sourceIndicatorId": "Y48942008"
  },
  {
    "id": "bdmo_y48942010",
    "groupId": "bdmo_42_finansovaya_deyatelnost",
    "name": "Количество организаций представивших отчет",
    "unit": "Единица",
    "description": "БД ПМО Росстата, обработка tochno.st, показатель Y48942010",
    "rankDirection": "desc",
    "sourceId": "bdmo_rosstat",
    "sourceIndicatorId": "Y48942010"
  },
  {
    "id": "bdmo_y48942013",
    "groupId": "bdmo_42_finansovaya_deyatelnost",
    "name": "Количество прибыльных организаций",
    "unit": "Единица",
    "description": "БД ПМО Росстата, обработка tochno.st, показатель Y48942013",
    "rankDirection": "desc",
    "sourceId": "bdmo_rosstat",
    "sourceIndicatorId": "Y48942013"
  },
  {
    "id": "bdmo_y48942011",
    "groupId": "bdmo_42_finansovaya_deyatelnost",
    "name": "Количество убыточных организаций",
    "unit": "Единица",
    "description": "БД ПМО Росстата, обработка tochno.st, показатель Y48942011",
    "rankDirection": "desc",
    "sourceId": "bdmo_rosstat",
    "sourceIndicatorId": "Y48942011"
  },
  {
    "id": "bdmo_y49010006",
    "groupId": "bdmo_42_finansovaya_deyatelnost",
    "name": "Коммерческие и управленческие расходы",
    "unit": "Тысяча рублей",
    "description": "БД ПМО Росстата, обработка tochno.st, показатель Y49010006",
    "rankDirection": "desc",
    "sourceId": "bdmo_rosstat",
    "sourceIndicatorId": "Y49010006"
  },
  {
    "id": "bdmo_y48942005",
    "groupId": "bdmo_42_finansovaya_deyatelnost",
    "name": "Кредиторская задолженность",
    "unit": "Тысяча рублей",
    "description": "БД ПМО Росстата, обработка tochno.st, показатель Y48942005",
    "rankDirection": "desc",
    "sourceId": "bdmo_rosstat",
    "sourceIndicatorId": "Y48942005"
  },
  {
    "id": "bdmo_y48942001",
    "groupId": "bdmo_42_finansovaya_deyatelnost",
    "name": "Прибыль (убыток) до налогообложения отчётного года",
    "unit": "Тысяча рублей",
    "description": "БД ПМО Росстата, обработка tochno.st, показатель Y48942001",
    "rankDirection": "desc",
    "sourceId": "bdmo_rosstat",
    "sourceIndicatorId": "Y48942001"
  },
  {
    "id": "bdmo_y48942002",
    "groupId": "bdmo_42_finansovaya_deyatelnost",
    "name": "Прибыль (убыток) до налогообложения прошлого года (по уточненным данным)",
    "unit": "Тысяча рублей",
    "description": "БД ПМО Росстата, обработка tochno.st, показатель Y48942002",
    "rankDirection": "desc",
    "sourceId": "bdmo_rosstat",
    "sourceIndicatorId": "Y48942002"
  },
  {
    "id": "bdmo_y49010007",
    "groupId": "bdmo_42_finansovaya_deyatelnost",
    "name": "Прибыль (убыток) от продаж",
    "unit": "Тысяча рублей",
    "description": "БД ПМО Росстата, обработка tochno.st, показатель Y49010007",
    "rankDirection": "desc",
    "sourceId": "bdmo_rosstat",
    "sourceIndicatorId": "Y49010007"
  },
  {
    "id": "bdmo_y49010005",
    "groupId": "bdmo_42_finansovaya_deyatelnost",
    "name": "Себестоимость проданных товаров, продукции, работ, услуг",
    "unit": "Тысяча рублей",
    "description": "БД ПМО Росстата, обработка tochno.st, показатель Y49010005",
    "rankDirection": "desc",
    "sourceId": "bdmo_rosstat",
    "sourceIndicatorId": "Y49010005"
  },
  {
    "id": "bdmo_y48942018",
    "groupId": "bdmo_42_finansovaya_deyatelnost",
    "name": "Удельный вес прибыльных организаций в общем числе организаций",
    "unit": "Процент",
    "description": "БД ПМО Росстата, обработка tochno.st, показатель Y48942018",
    "rankDirection": "desc",
    "sourceId": "bdmo_rosstat",
    "sourceIndicatorId": "Y48942018"
  },
  {
    "id": "bdmo_y48942017",
    "groupId": "bdmo_42_finansovaya_deyatelnost",
    "name": "Удельный вес убыточных организаций в общем числе организаций",
    "unit": "Процент",
    "description": "БД ПМО Росстата, обработка tochno.st, показатель Y48942017",
    "rankDirection": "desc",
    "sourceId": "bdmo_rosstat",
    "sourceIndicatorId": "Y48942017"
  },
  {
    "id": "bdmo_y48942016",
    "groupId": "bdmo_42_finansovaya_deyatelnost",
    "name": "Финансовый результат прибыльных организаций",
    "unit": "Тысяча рублей",
    "description": "БД ПМО Росстата, обработка tochno.st, показатель Y48942016",
    "rankDirection": "desc",
    "sourceId": "bdmo_rosstat",
    "sourceIndicatorId": "Y48942016"
  },
  {
    "id": "bdmo_y48942015",
    "groupId": "bdmo_42_finansovaya_deyatelnost",
    "name": "Финансовый результат убыточных организаций",
    "unit": "Тысяча рублей",
    "description": "БД ПМО Росстата, обработка tochno.st, показатель Y48942015",
    "rankDirection": "desc",
    "sourceId": "bdmo_rosstat",
    "sourceIndicatorId": "Y48942015"
  },
  {
    "id": "bdmo_y48043002",
    "groupId": "bdmo_43_svedeniya_o_vydannyh_razresheniyah_i_uvedomleniyah_na_stroitelstvo_i_na_vvod_obektov_v_ekspluataciyu",
    "name": "Количество выданных разрешений на ввод объектов в эксплуатацию",
    "unit": "Единица",
    "description": "БД ПМО Росстата, обработка tochno.st, показатель Y48043002",
    "rankDirection": "desc",
    "sourceId": "bdmo_rosstat",
    "sourceIndicatorId": "Y48043002"
  },
  {
    "id": "bdmo_y48043001",
    "groupId": "bdmo_43_svedeniya_o_vydannyh_razresheniyah_i_uvedomleniyah_na_stroitelstvo_i_na_vvod_obektov_v_ekspluataciyu",
    "name": "Количество выданных разрешений на строительство",
    "unit": "Единица",
    "description": "БД ПМО Росстата, обработка tochno.st, показатель Y48043001",
    "rankDirection": "desc",
    "sourceId": "bdmo_rosstat",
    "sourceIndicatorId": "Y48043001"
  },
  {
    "id": "bdmo_y48043004",
    "groupId": "bdmo_43_svedeniya_o_vydannyh_razresheniyah_i_uvedomleniyah_na_stroitelstvo_i_na_vvod_obektov_v_ekspluataciyu",
    "name": "Количество полученных уведомлений о планируемых строительстве или реконструкции объекта индивидуального жилищного строительства",
    "unit": "Единица",
    "description": "БД ПМО Росстата, обработка tochno.st, показатель Y48043004",
    "rankDirection": "desc",
    "sourceId": "bdmo_rosstat",
    "sourceIndicatorId": "Y48043004"
  },
  {
    "id": "bdmo_y48043005",
    "groupId": "bdmo_43_svedeniya_o_vydannyh_razresheniyah_i_uvedomleniyah_na_stroitelstvo_i_na_vvod_obektov_v_ekspluataciyu",
    "name": "Количество полученных уведомлений об окончании строительства или реконструкции объекта индивидуального жилищного строительства",
    "unit": "Единица",
    "description": "БД ПМО Росстата, обработка tochno.st, показатель Y48043005",
    "rankDirection": "desc",
    "sourceId": "bdmo_rosstat",
    "sourceIndicatorId": "Y48043005"
  },
  {
    "id": "bdmo_y47000005",
    "groupId": "bdmo_46_buhgalterskaya_otchetnost",
    "name": "Выручка (нетто) от продажи товаров, продукции, работ, услуг (за минусом налога на добавленную стоимость, акцизов и иных аналогичных обязательных платежей) по данным бухгалтерской отчетности",
    "unit": "Тысяча рублей",
    "description": "БД ПМО Росстата, обработка tochno.st, показатель Y47000005",
    "rankDirection": "desc",
    "sourceId": "bdmo_rosstat",
    "sourceIndicatorId": "Y47000005"
  },
  {
    "id": "bdmo_y48090004",
    "groupId": "bdmo_46_buhgalterskaya_otchetnost",
    "name": "Количество прибыльных организаций по данным бухгалтерской отчетности",
    "unit": "Единица",
    "description": "БД ПМО Росстата, обработка tochno.st, показатель Y48090004",
    "rankDirection": "desc",
    "sourceId": "bdmo_rosstat",
    "sourceIndicatorId": "Y48090004"
  },
  {
    "id": "bdmo_y48090003",
    "groupId": "bdmo_46_buhgalterskaya_otchetnost",
    "name": "Количество убыточных организаций по данным бухгалтерской отчетности",
    "unit": "Единица",
    "description": "БД ПМО Росстата, обработка tochno.st, показатель Y48090003",
    "rankDirection": "desc",
    "sourceId": "bdmo_rosstat",
    "sourceIndicatorId": "Y48090003"
  },
  {
    "id": "bdmo_y48090001",
    "groupId": "bdmo_46_buhgalterskaya_otchetnost",
    "name": "Количество хозяйствующих субъектов по данным бухгалтерской отчетности",
    "unit": "Единица",
    "description": "БД ПМО Росстата, обработка tochno.st, показатель Y48090001",
    "rankDirection": "desc",
    "sourceId": "bdmo_rosstat",
    "sourceIndicatorId": "Y48090001"
  },
  {
    "id": "bdmo_y48090002",
    "groupId": "bdmo_46_buhgalterskaya_otchetnost",
    "name": "Прибыль (убыток) до налогообложения по данным бухгалтерской отчетности",
    "unit": "Тысяча рублей",
    "description": "БД ПМО Росстата, обработка tochno.st, показатель Y48090002",
    "rankDirection": "desc",
    "sourceId": "bdmo_rosstat",
    "sourceIndicatorId": "Y48090002"
  },
  {
    "id": "bdmo_y48090008",
    "groupId": "bdmo_46_buhgalterskaya_otchetnost",
    "name": "Удельный вес прибыльных организаций в общем числе организаций по данным бухгалтерской отчетности",
    "unit": "Процент",
    "description": "БД ПМО Росстата, обработка tochno.st, показатель Y48090008",
    "rankDirection": "desc",
    "sourceId": "bdmo_rosstat",
    "sourceIndicatorId": "Y48090008"
  },
  {
    "id": "bdmo_y48090007",
    "groupId": "bdmo_46_buhgalterskaya_otchetnost",
    "name": "Удельный вес убыточных организаций в общем числе организаций по данным бухгалтерской отчетности",
    "unit": "Процент",
    "description": "БД ПМО Росстата, обработка tochno.st, показатель Y48090007",
    "rankDirection": "desc",
    "sourceId": "bdmo_rosstat",
    "sourceIndicatorId": "Y48090007"
  },
  {
    "id": "bdmo_y48090006",
    "groupId": "bdmo_46_buhgalterskaya_otchetnost",
    "name": "Финансовый результат прибыльных организаций по данным бухгалтерской отчетности",
    "unit": "Тысяча рублей",
    "description": "БД ПМО Росстата, обработка tochno.st, показатель Y48090006",
    "rankDirection": "desc",
    "sourceId": "bdmo_rosstat",
    "sourceIndicatorId": "Y48090006"
  },
  {
    "id": "bdmo_y48090005",
    "groupId": "bdmo_46_buhgalterskaya_otchetnost",
    "name": "Финансовый результат убыточных организаций по данным бухгалтерской отчетности",
    "unit": "Тысяча рублей",
    "description": "БД ПМО Росстата, обработка tochno.st, показатель Y48090005",
    "rankDirection": "desc",
    "sourceId": "bdmo_rosstat",
    "sourceIndicatorId": "Y48090005"
  },
  {
    "id": "bdmo_y48005005",
    "groupId": "bdmo_5_predpriyatiya_po_pererabotke_othodov",
    "name": "Вывезено за год твердых коммунальных отходов (тыс. куб. м)",
    "unit": "Тысяча кубических метров",
    "description": "БД ПМО Росстата, обработка tochno.st, показатель Y48005005",
    "rankDirection": "desc",
    "sourceId": "bdmo_rosstat",
    "sourceIndicatorId": "Y48005005"
  },
  {
    "id": "bdmo_y48035005",
    "groupId": "bdmo_5_predpriyatiya_po_pererabotke_othodov",
    "name": "Вывезено за год твердых коммунальных отходов (тыс. т)",
    "unit": "Килотонна",
    "description": "БД ПМО Росстата, обработка tochno.st, показатель Y48035005",
    "rankDirection": "desc",
    "sourceId": "bdmo_rosstat",
    "sourceIndicatorId": "Y48035005"
  },
  {
    "id": "bdmo_y48005007",
    "groupId": "bdmo_5_predpriyatiya_po_pererabotke_othodov",
    "name": "Вывезено твердых коммунальных отходов на объекты, используемые для обработки отходов (тыс. куб. м)",
    "unit": "Тысяча кубических метров",
    "description": "БД ПМО Росстата, обработка tochno.st, показатель Y48005007",
    "rankDirection": "desc",
    "sourceId": "bdmo_rosstat",
    "sourceIndicatorId": "Y48005007"
  },
  {
    "id": "bdmo_y48035007",
    "groupId": "bdmo_5_predpriyatiya_po_pererabotke_othodov",
    "name": "Вывезено твердых коммунальных отходов на объекты, используемые для обработки отходов (тыс. т)",
    "unit": "Килотонна",
    "description": "БД ПМО Росстата, обработка tochno.st, показатель Y48035007",
    "rankDirection": "desc",
    "sourceId": "bdmo_rosstat",
    "sourceIndicatorId": "Y48035007"
  },
  {
    "id": "bdmo_y47000003",
    "groupId": "bdmo_60_kollektivnye_sredstva_razmescheniya",
    "name": "Численность размещенных лиц в коллективных средствах размещения",
    "unit": "Человек",
    "description": "БД ПМО Росстата, обработка tochno.st, показатель Y47000003",
    "rankDirection": "desc",
    "sourceId": "bdmo_rosstat",
    "sourceIndicatorId": "Y47000003"
  },
  {
    "id": "bdmo_y48060001",
    "groupId": "bdmo_60_kollektivnye_sredstva_razmescheniya",
    "name": "Число коллективных средств размещения",
    "unit": "Единица",
    "description": "БД ПМО Росстата, обработка tochno.st, показатель Y48060001",
    "rankDirection": "desc",
    "sourceId": "bdmo_rosstat",
    "sourceIndicatorId": "Y48060001"
  },
  {
    "id": "bdmo_y48060002",
    "groupId": "bdmo_60_kollektivnye_sredstva_razmescheniya",
    "name": "Число мест в коллективных средствах размещения",
    "unit": "Единица",
    "description": "БД ПМО Росстата, обработка tochno.st, показатель Y48060002",
    "rankDirection": "desc",
    "sourceId": "bdmo_rosstat",
    "sourceIndicatorId": "Y48060002"
  },
  {
    "id": "bdmo_y47000002",
    "groupId": "bdmo_60_kollektivnye_sredstva_razmescheniya",
    "name": "Число номеров в коллективных средствах размещения",
    "unit": "Единица",
    "description": "БД ПМО Росстата, обработка tochno.st, показатель Y47000002",
    "rankDirection": "desc",
    "sourceId": "bdmo_rosstat",
    "sourceIndicatorId": "Y47000002"
  },
  {
    "id": "bdmo_y47000004",
    "groupId": "bdmo_60_kollektivnye_sredstva_razmescheniya",
    "name": "Число ночевок в коллективных средствах размещения",
    "unit": "Единица",
    "description": "БД ПМО Росстата, обработка tochno.st, показатель Y47000004",
    "rankDirection": "desc",
    "sourceId": "bdmo_rosstat",
    "sourceIndicatorId": "Y47000004"
  },
  {
    "id": "bdmo_y48006010_avtomobilnye_gazozapravochnye_stancii_agzs",
    "groupId": "bdmo_6_territoriya",
    "name": "Количество автозаправочных станций (АЗС), расположенных на автомобильных дорогах общего пользования местного значения (Автомобильные газозаправочные станции (АГЗС))",
    "unit": "Единица",
    "description": "БД ПМО Росстата, обработка tochno.st, показатель Y48006010",
    "rankDirection": "desc",
    "sourceId": "bdmo_rosstat",
    "sourceIndicatorId": "Y48006010"
  },
  {
    "id": "bdmo_y48006010_avtomobilnye_gazonapolnitelnye_kompressornye_stancii_agnks",
    "groupId": "bdmo_6_territoriya",
    "name": "Количество автозаправочных станций (АЗС), расположенных на автомобильных дорогах общего пользования местного значения (Автомобильные газонаполнительные компрессорные станции (АГНКС))",
    "unit": "Единица",
    "description": "БД ПМО Росстата, обработка tochno.st, показатель Y48006010",
    "rankDirection": "desc",
    "sourceId": "bdmo_rosstat",
    "sourceIndicatorId": "Y48006010"
  },
  {
    "id": "bdmo_y48006010_vsego",
    "groupId": "bdmo_6_territoriya",
    "name": "Количество автозаправочных станций (АЗС), расположенных на автомобильных дорогах общего пользования местного значения (Всего)",
    "unit": "Единица",
    "description": "БД ПМО Росстата, обработка tochno.st, показатель Y48006010",
    "rankDirection": "desc",
    "sourceId": "bdmo_rosstat",
    "sourceIndicatorId": "Y48006010"
  },
  {
    "id": "bdmo_y48006010_mnogotoplivnye_zapravochnye_stancii_mtzs",
    "groupId": "bdmo_6_territoriya",
    "name": "Количество автозаправочных станций (АЗС), расположенных на автомобильных дорогах общего пользования местного значения (Многотопливные заправочные станции (МТЗС))",
    "unit": "Единица",
    "description": "БД ПМО Росстата, обработка tochno.st, показатель Y48006010",
    "rankDirection": "desc",
    "sourceId": "bdmo_rosstat",
    "sourceIndicatorId": "Y48006010"
  },
  {
    "id": "bdmo_y48006010_elektrozapravochnye_stancii_ezs",
    "groupId": "bdmo_6_territoriya",
    "name": "Количество автозаправочных станций (АЗС), расположенных на автомобильных дорогах общего пользования местного значения (Электрозаправочные станции (ЭЗС))",
    "unit": "Единица",
    "description": "БД ПМО Росстата, обработка tochno.st, показатель Y48006010",
    "rankDirection": "desc",
    "sourceId": "bdmo_rosstat",
    "sourceIndicatorId": "Y48006010"
  },
  {
    "id": "bdmo_y48006001",
    "groupId": "bdmo_6_territoriya",
    "name": "Общая площадь земель муниципального образования",
    "unit": "Гектар",
    "description": "БД ПМО Росстата, обработка tochno.st, показатель Y48006001",
    "rankDirection": "desc",
    "sourceId": "bdmo_rosstat",
    "sourceIndicatorId": "Y48006001"
  },
  {
    "id": "bdmo_y48006003",
    "groupId": "bdmo_6_territoriya",
    "name": "Общая протяженность освещенных частей улиц, проездов, набережных",
    "unit": "Километр, тысяча метров",
    "description": "БД ПМО Росстата, обработка tochno.st, показатель Y48006003",
    "rankDirection": "desc",
    "sourceId": "bdmo_rosstat",
    "sourceIndicatorId": "Y48006003"
  },
  {
    "id": "bdmo_y48006007",
    "groupId": "bdmo_6_territoriya",
    "name": "Общая протяженность улиц, проездов, набережных",
    "unit": "Километр, тысяча метров",
    "description": "БД ПМО Росстата, обработка tochno.st, показатель Y48006007",
    "rankDirection": "desc",
    "sourceId": "bdmo_rosstat",
    "sourceIndicatorId": "Y48006007"
  },
  {
    "id": "bdmo_y48006005_vsego",
    "groupId": "bdmo_6_territoriya",
    "name": "Протяженность автодорог общего пользования местного значения (Всего)",
    "unit": "Километр, тысяча метров",
    "description": "БД ПМО Росстата, обработка tochno.st, показатель Y48006005",
    "rankDirection": "desc",
    "sourceId": "bdmo_rosstat",
    "sourceIndicatorId": "Y48006005"
  },
  {
    "id": "bdmo_y48006005_s_tverdym_pokrytiem",
    "groupId": "bdmo_6_territoriya",
    "name": "Протяженность автодорог общего пользования местного значения (С твердым покрытием)",
    "unit": "Километр, тысяча метров",
    "description": "БД ПМО Росстата, обработка tochno.st, показатель Y48006005",
    "rankDirection": "desc",
    "sourceId": "bdmo_rosstat",
    "sourceIndicatorId": "Y48006005"
  },
  {
    "id": "bdmo_y48006005_s_usovershenstvovannym_pokrytiem_cementobetonnye_asfaltobetonnye_i_tipa_asfaltobetona_iz_schebnya_i_graviya_obrabotannyh_vyazhuschimi_materialami",
    "groupId": "bdmo_6_territoriya",
    "name": "Протяженность автодорог общего пользования местного значения (С усовершенствованным покрытием (цементобетонные, асфальтобетонные и типа асфальтобетона, из щебня и гравия, обработанных вяжущими материалами))",
    "unit": "Километр, тысяча метров",
    "description": "БД ПМО Росстата, обработка tochno.st, показатель Y48006005",
    "rankDirection": "desc",
    "sourceId": "bdmo_rosstat",
    "sourceIndicatorId": "Y48006005"
  },
  {
    "id": "bdmo_y48406005",
    "groupId": "bdmo_6_territoriya",
    "name": "Протяженность мостов, путепроводов и эстакад, расположенных на автомобильных дорогах общего пользования местного значения",
    "unit": "Погонный метр",
    "description": "БД ПМО Росстата, обработка tochno.st, показатель Y48406005",
    "rankDirection": "desc",
    "sourceId": "bdmo_rosstat",
    "sourceIndicatorId": "Y48406005"
  },
  {
    "id": "bdmo_y48070001",
    "groupId": "bdmo_70_pochtovaya_i_telefonnaya_svyaz",
    "name": "Число сельских населенных пунктов, обслуживаемых почтовой связью",
    "unit": "Единица",
    "description": "БД ПМО Росстата, обработка tochno.st, показатель Y48070001",
    "rankDirection": "desc",
    "sourceId": "bdmo_rosstat",
    "sourceIndicatorId": "Y48070001"
  },
  {
    "id": "bdmo_y48070002",
    "groupId": "bdmo_70_pochtovaya_i_telefonnaya_svyaz",
    "name": "Число телефонизированных сельских населенных пунктов",
    "unit": "Единица",
    "description": "БД ПМО Росстата, обработка tochno.st, показатель Y48070002",
    "rankDirection": "desc",
    "sourceId": "bdmo_rosstat",
    "sourceIndicatorId": "Y48070002"
  },
  {
    "id": "bdmo_y48007019",
    "groupId": "bdmo_7_selskoe_hozyaystvo",
    "name": "Валовые сборы сельскохозяйственных культур",
    "unit": "Центнер (метрический) (100 кг), гектокилограмм, квинтал[*] (метрический), децитонна",
    "description": "БД ПМО Росстата, обработка tochno.st, показатель Y48007019",
    "rankDirection": "desc",
    "sourceId": "bdmo_rosstat",
    "sourceIndicatorId": "Y48007019"
  },
  {
    "id": "bdmo_y48007022",
    "groupId": "bdmo_7_selskoe_hozyaystvo",
    "name": "Внесено минеральных удобрений (в пересчете на 100% питательных веществ) под посевы сельскохозяйственных культур в сельскохозяйственных организациях",
    "unit": "Центнер (метрический) (100 кг), гектокилограмм, квинтал[*] (метрический), децитонна",
    "description": "БД ПМО Росстата, обработка tochno.st, показатель Y48007022",
    "rankDirection": "desc",
    "sourceId": "bdmo_rosstat",
    "sourceIndicatorId": "Y48007022"
  },
  {
    "id": "bdmo_y49010001",
    "groupId": "bdmo_7_selskoe_hozyaystvo",
    "name": "Внесено органических удобрений под посевы сельскохозяйственных культур в сельскохозяйственных организациях",
    "unit": "Тонна, метрическая тонна (1000 кг)",
    "description": "БД ПМО Росстата, обработка tochno.st, показатель Y49010001",
    "rankDirection": "desc",
    "sourceId": "bdmo_rosstat",
    "sourceIndicatorId": "Y49010001"
  },
  {
    "id": "bdmo_y48007015",
    "groupId": "bdmo_7_selskoe_hozyaystvo",
    "name": "Индекс производства продукции животноводства (в сопоставимых ценах, в процентах к предыдущему году)",
    "unit": "Процент",
    "description": "БД ПМО Росстата, обработка tochno.st, показатель Y48007015",
    "rankDirection": "desc",
    "sourceId": "bdmo_rosstat",
    "sourceIndicatorId": "Y48007015"
  },
  {
    "id": "bdmo_y48007014",
    "groupId": "bdmo_7_selskoe_hozyaystvo",
    "name": "Индекс производства продукции растениеводства (в сопоставимых ценах, в процентах к предыдущему году)",
    "unit": "Процент",
    "description": "БД ПМО Росстата, обработка tochno.st, показатель Y48007014",
    "rankDirection": "desc",
    "sourceId": "bdmo_rosstat",
    "sourceIndicatorId": "Y48007014"
  },
  {
    "id": "bdmo_y48007013",
    "groupId": "bdmo_7_selskoe_hozyaystvo",
    "name": "Индекс производства продукции сельского хозяйства (в сопоставимых ценах, в процентах к предыдущему году)",
    "unit": "Процент",
    "description": "БД ПМО Росстата, обработка tochno.st, показатель Y48007013",
    "rankDirection": "desc",
    "sourceId": "bdmo_rosstat",
    "sourceIndicatorId": "Y48007013"
  },
  {
    "id": "bdmo_y48007017",
    "groupId": "bdmo_7_selskoe_hozyaystvo",
    "name": "Наличие сельскохозяйственной техники в сельскохозяйственных организациях",
    "unit": "Штука",
    "description": "БД ПМО Росстата, обработка tochno.st, показатель Y48007017",
    "rankDirection": "desc",
    "sourceId": "bdmo_rosstat",
    "sourceIndicatorId": "Y48007017"
  },
  {
    "id": "bdmo_y48007023",
    "groupId": "bdmo_7_selskoe_hozyaystvo",
    "name": "Площадь многолетних насаждений",
    "unit": "Гектар",
    "description": "БД ПМО Росстата, обработка tochno.st, показатель Y48007023",
    "rankDirection": "desc",
    "sourceId": "bdmo_rosstat",
    "sourceIndicatorId": "Y48007023"
  },
  {
    "id": "bdmo_y48007020",
    "groupId": "bdmo_7_selskoe_hozyaystvo",
    "name": "Поголовье скота и птицы",
    "unit": "Голова",
    "description": "БД ПМО Росстата, обработка tochno.st, показатель Y48007020",
    "rankDirection": "desc",
    "sourceId": "bdmo_rosstat",
    "sourceIndicatorId": "Y48007020"
  },
  {
    "id": "bdmo_y48007018",
    "groupId": "bdmo_7_selskoe_hozyaystvo",
    "name": "Посевные площади сельскохозяйственных культур",
    "unit": "Гектар",
    "description": "БД ПМО Росстата, обработка tochno.st, показатель Y48007018",
    "rankDirection": "desc",
    "sourceId": "bdmo_rosstat",
    "sourceIndicatorId": "Y48007018"
  },
  {
    "id": "bdmo_y47000006",
    "groupId": "bdmo_7_selskoe_hozyaystvo",
    "name": "Посевные площади сельскохозяйственных культур (весеннего учета)",
    "unit": "Гектар",
    "description": "БД ПМО Росстата, обработка tochno.st, показатель Y47000006",
    "rankDirection": "desc",
    "sourceId": "bdmo_rosstat",
    "sourceIndicatorId": "Y47000006"
  },
  {
    "id": "bdmo_y48007012",
    "groupId": "bdmo_7_selskoe_hozyaystvo",
    "name": "Продукция животноводства (в фактически действовавших ценах)",
    "unit": "Тысяча рублей",
    "description": "БД ПМО Росстата, обработка tochno.st, показатель Y48007012",
    "rankDirection": "desc",
    "sourceId": "bdmo_rosstat",
    "sourceIndicatorId": "Y48007012"
  },
  {
    "id": "bdmo_y48007011",
    "groupId": "bdmo_7_selskoe_hozyaystvo",
    "name": "Продукция растениеводства (в фактически действовавших ценах)",
    "unit": "Тысяча рублей",
    "description": "БД ПМО Росстата, обработка tochno.st, показатель Y48007011",
    "rankDirection": "desc",
    "sourceId": "bdmo_rosstat",
    "sourceIndicatorId": "Y48007011"
  },
  {
    "id": "bdmo_y48007010",
    "groupId": "bdmo_7_selskoe_hozyaystvo",
    "name": "Продукция сельского хозяйства (в фактически действовавших ценах)",
    "unit": "Тысяча рублей",
    "description": "БД ПМО Росстата, обработка tochno.st, показатель Y48007010",
    "rankDirection": "desc",
    "sourceId": "bdmo_rosstat",
    "sourceIndicatorId": "Y48007010"
  },
  {
    "id": "bdmo_y48007021",
    "groupId": "bdmo_7_selskoe_hozyaystvo",
    "name": "Производство продуктов животноводства",
    "unit": "Тонна, метрическая тонна (1000 кг)",
    "description": "БД ПМО Росстата, обработка tochno.st, показатель Y48007021",
    "rankDirection": "desc",
    "sourceId": "bdmo_rosstat",
    "sourceIndicatorId": "Y48007021"
  },
  {
    "id": "bdmo_y48097016",
    "groupId": "bdmo_7_selskoe_hozyaystvo",
    "name": "Реализация продукции сельскохозяйственными организациями",
    "unit": "Нет",
    "description": "БД ПМО Росстата, обработка tochno.st, показатель Y48097016",
    "rankDirection": "desc",
    "sourceId": "bdmo_rosstat",
    "sourceIndicatorId": "Y48097016"
  },
  {
    "id": "bdmo_y48007025",
    "groupId": "bdmo_7_selskoe_hozyaystvo",
    "name": "Урожайность сельскохозяйственных культур (в расчете на убранную площадь)",
    "unit": "Центнер с гектара убранной площади",
    "description": "БД ПМО Росстата, обработка tochno.st, показатель Y48007025",
    "rankDirection": "desc",
    "sourceId": "bdmo_rosstat",
    "sourceIndicatorId": "Y48007025"
  },
  {
    "id": "bdmo_y48408028",
    "groupId": "bdmo_8_kommunalnaya_sfera",
    "name": "Количество населенных пунктов, не имеющих канализаций (отдельных канализационных сетей)",
    "unit": "Единица",
    "description": "БД ПМО Росстата, обработка tochno.st, показатель Y48408028",
    "rankDirection": "desc",
    "sourceId": "bdmo_rosstat",
    "sourceIndicatorId": "Y48408028"
  },
  {
    "id": "bdmo_y48008018",
    "groupId": "bdmo_8_kommunalnaya_sfera",
    "name": "Количество негазифицированных населенных пунктов",
    "unit": "Единица",
    "description": "БД ПМО Росстата, обработка tochno.st, показатель Y48008018",
    "rankDirection": "desc",
    "sourceId": "bdmo_rosstat",
    "sourceIndicatorId": "Y48008018"
  },
  {
    "id": "bdmo_y48008019",
    "groupId": "bdmo_8_kommunalnaya_sfera",
    "name": "Общая площадь жилых помещений",
    "unit": "Тысяча квадратных метров",
    "description": "БД ПМО Росстата, обработка tochno.st, показатель Y48008019",
    "rankDirection": "desc",
    "sourceId": "bdmo_rosstat",
    "sourceIndicatorId": "Y48008019"
  },
  {
    "id": "bdmo_y49010004",
    "groupId": "bdmo_8_kommunalnaya_sfera",
    "name": "Общая площадь жилых помещений, оборудованная одновременно водопроводом, водоотведением (канализацией), отоплением, горячим водоснабжением, газом или электрическими плитами",
    "unit": "Тысяча квадратных метров",
    "description": "БД ПМО Росстата, обработка tochno.st, показатель Y49010004",
    "rankDirection": "desc",
    "sourceId": "bdmo_rosstat",
    "sourceIndicatorId": "Y49010004"
  },
  {
    "id": "bdmo_y48008007",
    "groupId": "bdmo_8_kommunalnaya_sfera",
    "name": "Одиночное протяжение уличной водопроводной сети",
    "unit": "2006 и 2007 гг. — тысяча метров, с 2008 г. — метр",
    "description": "БД ПМО Росстата, обработка tochno.st, показатель Y48008007",
    "rankDirection": "desc",
    "sourceId": "bdmo_rosstat",
    "sourceIndicatorId": "Y48008007"
  },
  {
    "id": "bdmo_y48008025",
    "groupId": "bdmo_8_kommunalnaya_sfera",
    "name": "Одиночное протяжение уличной водопроводной сети, которая заменена и отремонтирована",
    "unit": "Метр",
    "description": "БД ПМО Росстата, обработка tochno.st, показатель Y48008025",
    "rankDirection": "desc",
    "sourceId": "bdmo_rosstat",
    "sourceIndicatorId": "Y48008025"
  },
  {
    "id": "bdmo_y48008008",
    "groupId": "bdmo_8_kommunalnaya_sfera",
    "name": "Одиночное протяжение уличной водопроводной сети, нуждающейся в замене",
    "unit": "2006 и 2007 гг. — тысяча метров, с 2008 г. — метр",
    "description": "БД ПМО Росстата, обработка tochno.st, показатель Y48008008",
    "rankDirection": "desc",
    "sourceId": "bdmo_rosstat",
    "sourceIndicatorId": "Y48008008"
  },
  {
    "id": "bdmo_y48008015",
    "groupId": "bdmo_8_kommunalnaya_sfera",
    "name": "Одиночное протяжение уличной газовой сети",
    "unit": "2006 и 2007 гг. — тысяча метров, с 2008 г. — метр",
    "description": "БД ПМО Росстата, обработка tochno.st, показатель Y48008015",
    "rankDirection": "desc",
    "sourceId": "bdmo_rosstat",
    "sourceIndicatorId": "Y48008015"
  },
  {
    "id": "bdmo_y48008011",
    "groupId": "bdmo_8_kommunalnaya_sfera",
    "name": "Одиночное протяжение уличной канализационной сети",
    "unit": "2006 и 2007 гг. — тысяча метров, с 2008 г. — метр",
    "description": "БД ПМО Росстата, обработка tochno.st, показатель Y48008011",
    "rankDirection": "desc",
    "sourceId": "bdmo_rosstat",
    "sourceIndicatorId": "Y48008011"
  },
  {
    "id": "bdmo_y48008026",
    "groupId": "bdmo_8_kommunalnaya_sfera",
    "name": "Одиночное протяжение уличной канализационной сети, которая заменена и отремонтирована",
    "unit": "Метр",
    "description": "БД ПМО Росстата, обработка tochno.st, показатель Y48008026",
    "rankDirection": "desc",
    "sourceId": "bdmo_rosstat",
    "sourceIndicatorId": "Y48008026"
  },
  {
    "id": "bdmo_y48008012",
    "groupId": "bdmo_8_kommunalnaya_sfera",
    "name": "Одиночное протяжение уличной канализационной сети, нуждающейся в замене",
    "unit": "2006 и 2007 гг. — тысяча метров, с 2008 г. — метр",
    "description": "БД ПМО Росстата, обработка tochno.st, показатель Y48008012",
    "rankDirection": "desc",
    "sourceId": "bdmo_rosstat",
    "sourceIndicatorId": "Y48008012"
  },
  {
    "id": "bdmo_y48008003",
    "groupId": "bdmo_8_kommunalnaya_sfera",
    "name": "Протяженность тепловых и паровых сетей в двухтрубном исчислении",
    "unit": "2006 и 2007 гг. — тысяча метров, с 2008 г. — метр",
    "description": "БД ПМО Росстата, обработка tochno.st, показатель Y48008003",
    "rankDirection": "desc",
    "sourceId": "bdmo_rosstat",
    "sourceIndicatorId": "Y48008003"
  },
  {
    "id": "bdmo_y48008004",
    "groupId": "bdmo_8_kommunalnaya_sfera",
    "name": "Протяженность тепловых и паровых сетей в двухтрубном исчислении, нуждающихся в замене",
    "unit": "2006 и 2007 гг. — тысяча метров, с 2008 г. — метр",
    "description": "БД ПМО Росстата, обработка tochno.st, показатель Y48008004",
    "rankDirection": "desc",
    "sourceId": "bdmo_rosstat",
    "sourceIndicatorId": "Y48008004"
  },
  {
    "id": "bdmo_y48008024",
    "groupId": "bdmo_8_kommunalnaya_sfera",
    "name": "Протяженность тепловых и паровых сетей, которые были заменены и отремонтированы",
    "unit": "Метр",
    "description": "БД ПМО Росстата, обработка tochno.st, показатель Y48008024",
    "rankDirection": "desc",
    "sourceId": "bdmo_rosstat",
    "sourceIndicatorId": "Y48008024"
  },
  {
    "id": "bdmo_y48008001",
    "groupId": "bdmo_8_kommunalnaya_sfera",
    "name": "Число источников теплоснабжения",
    "unit": "Единица",
    "description": "БД ПМО Росстата, обработка tochno.st, показатель Y48008001",
    "rankDirection": "desc",
    "sourceId": "bdmo_rosstat",
    "sourceIndicatorId": "Y48008001"
  },
  {
    "id": "bdmo_y48008002",
    "groupId": "bdmo_8_kommunalnaya_sfera",
    "name": "Число источников теплоснабжения мощностью до 3 Гкал/ч",
    "unit": "Единица",
    "description": "БД ПМО Росстата, обработка tochno.st, показатель Y48008002",
    "rankDirection": "desc",
    "sourceId": "bdmo_rosstat",
    "sourceIndicatorId": "Y48008002"
  },
  {
    "id": "bdmo_y48009001",
    "groupId": "bdmo_9_investicii_v_osnovnoy_kapital",
    "name": "Инвестиции в основной капитал за счет средств местных бюджетов",
    "unit": "Тысяча рублей",
    "description": "БД ПМО Росстата, обработка tochno.st, показатель Y48009001",
    "rankDirection": "desc",
    "sourceId": "bdmo_rosstat",
    "sourceIndicatorId": "Y48009001"
  },
  {
    "id": "bdmo_y48109002",
    "groupId": "bdmo_9_investicii_v_osnovnoy_kapital",
    "name": "Инвестиции в основной капитал организаций муниципальной формы собственности",
    "unit": "Тысяча рублей",
    "description": "БД ПМО Росстата, обработка tochno.st, показатель Y48109002",
    "rankDirection": "desc",
    "sourceId": "bdmo_rosstat",
    "sourceIndicatorId": "Y48109002"
  },
  {
    "id": "bdmo_y48109001",
    "groupId": "bdmo_9_investicii_v_osnovnoy_kapital",
    "name": "Инвестиции в основной капитал, осуществляемые организациями, находящимися на территории муниципального образования (без субъектов малого предпринимательства)",
    "unit": "Тысяча рублей",
    "description": "БД ПМО Росстата, обработка tochno.st, показатель Y48109001",
    "rankDirection": "desc",
    "sourceId": "bdmo_rosstat",
    "sourceIndicatorId": "Y48109001"
  }
];

export const bdmoSnapshotValues: StatValue[] = [
  {
    "districtId": "abzelilovsky",
    "indicatorId": "bdmo_y47000002",
    "year": 2024,
    "value": 1434.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "alsheevsky",
    "indicatorId": "bdmo_y47000002",
    "year": 2024,
    "value": 363.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "arkhangelsky",
    "indicatorId": "bdmo_y47000002",
    "year": 2024,
    "value": 31.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "askinsky",
    "indicatorId": "bdmo_y47000002",
    "year": 2024,
    "value": 186.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "aurgazinsky",
    "indicatorId": "bdmo_y47000002",
    "year": 2024,
    "value": 45.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "baltachevsky",
    "indicatorId": "bdmo_y47000002",
    "year": 2024,
    "value": 41.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "baymaksky",
    "indicatorId": "bdmo_y47000002",
    "year": 2024,
    "value": 248.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "belebeyevsky",
    "indicatorId": "bdmo_y47000002",
    "year": 2024,
    "value": 425.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "beloretsk",
    "indicatorId": "bdmo_y47000002",
    "year": 2024,
    "value": 1589.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "birsk",
    "indicatorId": "bdmo_y47000002",
    "year": 2024,
    "value": 305.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "bizhbulyaksky",
    "indicatorId": "bdmo_y47000002",
    "year": 2024,
    "value": 21.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "blagovarsky",
    "indicatorId": "bdmo_y47000002",
    "year": 2024,
    "value": 53.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "blagoveshchensky",
    "indicatorId": "bdmo_y47000002",
    "year": 2024,
    "value": 224.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "buraevsky",
    "indicatorId": "bdmo_y47000002",
    "year": 2024,
    "value": 36.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "burzyansky",
    "indicatorId": "bdmo_y47000002",
    "year": 2024,
    "value": 82.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "chekmagushevsky",
    "indicatorId": "bdmo_y47000002",
    "year": 2024,
    "value": 53.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "chishminsky",
    "indicatorId": "bdmo_y47000002",
    "year": 2024,
    "value": 321.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "davlekanovsky",
    "indicatorId": "bdmo_y47000002",
    "year": 2024,
    "value": 28.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "duvansky",
    "indicatorId": "bdmo_y47000002",
    "year": 2024,
    "value": 88.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "dyurtyulinsky",
    "indicatorId": "bdmo_y47000002",
    "year": 2024,
    "value": 192.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ermekeyevsky",
    "indicatorId": "bdmo_y47000002",
    "year": 2024,
    "value": 23.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "gafuriysky",
    "indicatorId": "bdmo_y47000002",
    "year": 2024,
    "value": 510.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "iglinsky",
    "indicatorId": "bdmo_y47000002",
    "year": 2024,
    "value": 99.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ilishevsky",
    "indicatorId": "bdmo_y47000002",
    "year": 2024,
    "value": 161.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ishimbay",
    "indicatorId": "bdmo_y47000002",
    "year": 2024,
    "value": 439.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "karaidelsky",
    "indicatorId": "bdmo_y47000002",
    "year": 2024,
    "value": 500.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "khaibullinsky",
    "indicatorId": "bdmo_y47000002",
    "year": 2024,
    "value": 151.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kiginsky",
    "indicatorId": "bdmo_y47000002",
    "year": 2024,
    "value": 24.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "krasnokamsky",
    "indicatorId": "bdmo_y47000002",
    "year": 2024,
    "value": 358.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kugarchinsky",
    "indicatorId": "bdmo_y47000002",
    "year": 2024,
    "value": 16.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kumertau",
    "indicatorId": "bdmo_y47000002",
    "year": 2024,
    "value": 163.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kushnarenkovsky",
    "indicatorId": "bdmo_y47000002",
    "year": 2024,
    "value": 125.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "mechetlinsky",
    "indicatorId": "bdmo_y47000002",
    "year": 2024,
    "value": 263.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "meleuz",
    "indicatorId": "bdmo_y47000002",
    "year": 2024,
    "value": 1089.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "miyakinsky",
    "indicatorId": "bdmo_y47000002",
    "year": 2024,
    "value": 80.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "neftekamsk",
    "indicatorId": "bdmo_y47000002",
    "year": 2024,
    "value": 266.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "nurimanovsky",
    "indicatorId": "bdmo_y47000002",
    "year": 2024,
    "value": 555.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "oktyabrsky",
    "indicatorId": "bdmo_y47000002",
    "year": 2024,
    "value": 491.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "salavat",
    "indicatorId": "bdmo_y47000002",
    "year": 2024,
    "value": 258.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "salavatsky",
    "indicatorId": "bdmo_y47000002",
    "year": 2024,
    "value": 601.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sharansky",
    "indicatorId": "bdmo_y47000002",
    "year": 2024,
    "value": 13.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sibay",
    "indicatorId": "bdmo_y47000002",
    "year": 2024,
    "value": 319.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlibashevsky",
    "indicatorId": "bdmo_y47000002",
    "year": 2024,
    "value": 94.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamak",
    "indicatorId": "bdmo_y47000002",
    "year": 2024,
    "value": 372.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamaksky",
    "indicatorId": "bdmo_y47000002",
    "year": 2024,
    "value": 462.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "tatyshlinsky",
    "indicatorId": "bdmo_y47000002",
    "year": 2024,
    "value": 30.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "tuymazy",
    "indicatorId": "bdmo_y47000002",
    "year": 2024,
    "value": 529.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "uchaly",
    "indicatorId": "bdmo_y47000002",
    "year": 2024,
    "value": 571.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufa",
    "indicatorId": "bdmo_y47000002",
    "year": 2024,
    "value": 4244.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufimsky",
    "indicatorId": "bdmo_y47000002",
    "year": 2024,
    "value": 1299.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "yanaulsky",
    "indicatorId": "bdmo_y47000002",
    "year": 2024,
    "value": 65.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "zianchurinsky",
    "indicatorId": "bdmo_y47000002",
    "year": 2024,
    "value": 28.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "zilairsky",
    "indicatorId": "bdmo_y47000002",
    "year": 2024,
    "value": 33.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "abzelilovsky",
    "indicatorId": "bdmo_y47000003",
    "year": 2024,
    "value": 105179.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "alsheevsky",
    "indicatorId": "bdmo_y47000003",
    "year": 2024,
    "value": 3529.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "arkhangelsky",
    "indicatorId": "bdmo_y47000003",
    "year": 2024,
    "value": 706.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "askinsky",
    "indicatorId": "bdmo_y47000003",
    "year": 2024,
    "value": 10429.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "aurgazinsky",
    "indicatorId": "bdmo_y47000003",
    "year": 2024,
    "value": 1446.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "baltachevsky",
    "indicatorId": "bdmo_y47000003",
    "year": 2024,
    "value": 2388.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "baymaksky",
    "indicatorId": "bdmo_y47000003",
    "year": 2024,
    "value": 4338.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "belebeyevsky",
    "indicatorId": "bdmo_y47000003",
    "year": 2024,
    "value": 10995.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "beloretsk",
    "indicatorId": "bdmo_y47000003",
    "year": 2024,
    "value": 124452.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "birsk",
    "indicatorId": "bdmo_y47000003",
    "year": 2024,
    "value": 10939.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "bizhbulyaksky",
    "indicatorId": "bdmo_y47000003",
    "year": 2024,
    "value": 349.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "blagovarsky",
    "indicatorId": "bdmo_y47000003",
    "year": 2024,
    "value": 2019.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "blagoveshchensky",
    "indicatorId": "bdmo_y47000003",
    "year": 2024,
    "value": 7720.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "burzyansky",
    "indicatorId": "bdmo_y47000003",
    "year": 2024,
    "value": 6280.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "chekmagushevsky",
    "indicatorId": "bdmo_y47000003",
    "year": 2024,
    "value": 2832.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "chishminsky",
    "indicatorId": "bdmo_y47000003",
    "year": 2024,
    "value": 17102.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "duvansky",
    "indicatorId": "bdmo_y47000003",
    "year": 2024,
    "value": 8048.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "dyurtyulinsky",
    "indicatorId": "bdmo_y47000003",
    "year": 2024,
    "value": 13171.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "gafuriysky",
    "indicatorId": "bdmo_y47000003",
    "year": 2024,
    "value": 26173.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "iglinsky",
    "indicatorId": "bdmo_y47000003",
    "year": 2024,
    "value": 22578.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ilishevsky",
    "indicatorId": "bdmo_y47000003",
    "year": 2024,
    "value": 6670.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ishimbay",
    "indicatorId": "bdmo_y47000003",
    "year": 2024,
    "value": 9373.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "karaidelsky",
    "indicatorId": "bdmo_y47000003",
    "year": 2024,
    "value": 30146.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "khaibullinsky",
    "indicatorId": "bdmo_y47000003",
    "year": 2024,
    "value": 8492.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kiginsky",
    "indicatorId": "bdmo_y47000003",
    "year": 2024,
    "value": 827.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "krasnokamsky",
    "indicatorId": "bdmo_y47000003",
    "year": 2024,
    "value": 14325.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kugarchinsky",
    "indicatorId": "bdmo_y47000003",
    "year": 2024,
    "value": 706.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kumertau",
    "indicatorId": "bdmo_y47000003",
    "year": 2024,
    "value": 5744.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kushnarenkovsky",
    "indicatorId": "bdmo_y47000003",
    "year": 2024,
    "value": 9380.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "mechetlinsky",
    "indicatorId": "bdmo_y47000003",
    "year": 2024,
    "value": 12857.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "meleuz",
    "indicatorId": "bdmo_y47000003",
    "year": 2024,
    "value": 40939.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "miyakinsky",
    "indicatorId": "bdmo_y47000003",
    "year": 2024,
    "value": 1875.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "neftekamsk",
    "indicatorId": "bdmo_y47000003",
    "year": 2024,
    "value": 26387.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "nurimanovsky",
    "indicatorId": "bdmo_y47000003",
    "year": 2024,
    "value": 40023.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "oktyabrsky",
    "indicatorId": "bdmo_y47000003",
    "year": 2024,
    "value": 50627.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "salavat",
    "indicatorId": "bdmo_y47000003",
    "year": 2024,
    "value": 8195.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "salavatsky",
    "indicatorId": "bdmo_y47000003",
    "year": 2024,
    "value": 25499.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sharansky",
    "indicatorId": "bdmo_y47000003",
    "year": 2024,
    "value": 238.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sibay",
    "indicatorId": "bdmo_y47000003",
    "year": 2024,
    "value": 9905.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlibashevsky",
    "indicatorId": "bdmo_y47000003",
    "year": 2024,
    "value": 887.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamak",
    "indicatorId": "bdmo_y47000003",
    "year": 2024,
    "value": 50040.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamaksky",
    "indicatorId": "bdmo_y47000003",
    "year": 2024,
    "value": 20139.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "tatyshlinsky",
    "indicatorId": "bdmo_y47000003",
    "year": 2024,
    "value": 982.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "tuymazy",
    "indicatorId": "bdmo_y47000003",
    "year": 2024,
    "value": 16681.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "uchaly",
    "indicatorId": "bdmo_y47000003",
    "year": 2024,
    "value": 29829.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufa",
    "indicatorId": "bdmo_y47000003",
    "year": 2024,
    "value": 564192.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufimsky",
    "indicatorId": "bdmo_y47000003",
    "year": 2024,
    "value": 83809.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "yanaulsky",
    "indicatorId": "bdmo_y47000003",
    "year": 2024,
    "value": 3090.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "zianchurinsky",
    "indicatorId": "bdmo_y47000003",
    "year": 2024,
    "value": 920.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "zilairsky",
    "indicatorId": "bdmo_y47000003",
    "year": 2024,
    "value": 1514.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "abzelilovsky",
    "indicatorId": "bdmo_y47000004",
    "year": 2024,
    "value": 632899.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "alsheevsky",
    "indicatorId": "bdmo_y47000004",
    "year": 2024,
    "value": 90064.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "arkhangelsky",
    "indicatorId": "bdmo_y47000004",
    "year": 2024,
    "value": 798.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "askinsky",
    "indicatorId": "bdmo_y47000004",
    "year": 2024,
    "value": 86717.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "aurgazinsky",
    "indicatorId": "bdmo_y47000004",
    "year": 2024,
    "value": 4746.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "baltachevsky",
    "indicatorId": "bdmo_y47000004",
    "year": 2024,
    "value": 2958.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "baymaksky",
    "indicatorId": "bdmo_y47000004",
    "year": 2024,
    "value": 19713.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "belebeyevsky",
    "indicatorId": "bdmo_y47000004",
    "year": 2024,
    "value": 153641.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "beloretsk",
    "indicatorId": "bdmo_y47000004",
    "year": 2024,
    "value": 540846.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "birsk",
    "indicatorId": "bdmo_y47000004",
    "year": 2024,
    "value": 80171.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "bizhbulyaksky",
    "indicatorId": "bdmo_y47000004",
    "year": 2024,
    "value": 595.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "blagovarsky",
    "indicatorId": "bdmo_y47000004",
    "year": 2024,
    "value": 11754.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "blagoveshchensky",
    "indicatorId": "bdmo_y47000004",
    "year": 2024,
    "value": 69831.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "burzyansky",
    "indicatorId": "bdmo_y47000004",
    "year": 2024,
    "value": 13436.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "chekmagushevsky",
    "indicatorId": "bdmo_y47000004",
    "year": 2024,
    "value": 9645.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "chishminsky",
    "indicatorId": "bdmo_y47000004",
    "year": 2024,
    "value": 126220.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "duvansky",
    "indicatorId": "bdmo_y47000004",
    "year": 2024,
    "value": 25950.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "dyurtyulinsky",
    "indicatorId": "bdmo_y47000004",
    "year": 2024,
    "value": 92742.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "gafuriysky",
    "indicatorId": "bdmo_y47000004",
    "year": 2024,
    "value": 252607.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "iglinsky",
    "indicatorId": "bdmo_y47000004",
    "year": 2024,
    "value": 24292.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ilishevsky",
    "indicatorId": "bdmo_y47000004",
    "year": 2024,
    "value": 44358.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ishimbay",
    "indicatorId": "bdmo_y47000004",
    "year": 2024,
    "value": 96369.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "karaidelsky",
    "indicatorId": "bdmo_y47000004",
    "year": 2024,
    "value": 97560.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "khaibullinsky",
    "indicatorId": "bdmo_y47000004",
    "year": 2024,
    "value": 59155.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kiginsky",
    "indicatorId": "bdmo_y47000004",
    "year": 2024,
    "value": 1338.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "krasnokamsky",
    "indicatorId": "bdmo_y47000004",
    "year": 2024,
    "value": 152031.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kugarchinsky",
    "indicatorId": "bdmo_y47000004",
    "year": 2024,
    "value": 4394.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kumertau",
    "indicatorId": "bdmo_y47000004",
    "year": 2024,
    "value": 34114.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kushnarenkovsky",
    "indicatorId": "bdmo_y47000004",
    "year": 2024,
    "value": 24555.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "mechetlinsky",
    "indicatorId": "bdmo_y47000004",
    "year": 2024,
    "value": 127699.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "meleuz",
    "indicatorId": "bdmo_y47000004",
    "year": 2024,
    "value": 153519.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "miyakinsky",
    "indicatorId": "bdmo_y47000004",
    "year": 2024,
    "value": 22378.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "neftekamsk",
    "indicatorId": "bdmo_y47000004",
    "year": 2024,
    "value": 63209.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "nurimanovsky",
    "indicatorId": "bdmo_y47000004",
    "year": 2024,
    "value": 135640.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "oktyabrsky",
    "indicatorId": "bdmo_y47000004",
    "year": 2024,
    "value": 133693.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "salavat",
    "indicatorId": "bdmo_y47000004",
    "year": 2024,
    "value": 23685.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "salavatsky",
    "indicatorId": "bdmo_y47000004",
    "year": 2024,
    "value": 238388.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sharansky",
    "indicatorId": "bdmo_y47000004",
    "year": 2024,
    "value": 576.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sibay",
    "indicatorId": "bdmo_y47000004",
    "year": 2024,
    "value": 28665.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlibashevsky",
    "indicatorId": "bdmo_y47000004",
    "year": 2024,
    "value": 11752.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamak",
    "indicatorId": "bdmo_y47000004",
    "year": 2024,
    "value": 161136.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamaksky",
    "indicatorId": "bdmo_y47000004",
    "year": 2024,
    "value": 114738.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "tatyshlinsky",
    "indicatorId": "bdmo_y47000004",
    "year": 2024,
    "value": 8190.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "tuymazy",
    "indicatorId": "bdmo_y47000004",
    "year": 2024,
    "value": 94444.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "uchaly",
    "indicatorId": "bdmo_y47000004",
    "year": 2024,
    "value": 125797.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufa",
    "indicatorId": "bdmo_y47000004",
    "year": 2024,
    "value": 1292839.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufimsky",
    "indicatorId": "bdmo_y47000004",
    "year": 2024,
    "value": 481741.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "yanaulsky",
    "indicatorId": "bdmo_y47000004",
    "year": 2024,
    "value": 14482.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "zianchurinsky",
    "indicatorId": "bdmo_y47000004",
    "year": 2024,
    "value": 9752.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "zilairsky",
    "indicatorId": "bdmo_y47000004",
    "year": 2024,
    "value": 5635.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "abzelilovsky",
    "indicatorId": "bdmo_y47000006",
    "year": 2024,
    "value": 4411.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "agidel",
    "indicatorId": "bdmo_y47000006",
    "year": 2024,
    "value": 108.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "alsheevsky",
    "indicatorId": "bdmo_y47000006",
    "year": 2024,
    "value": 1602.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "arkhangelsky",
    "indicatorId": "bdmo_y47000006",
    "year": 2024,
    "value": 2004.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "askinsky",
    "indicatorId": "bdmo_y47000006",
    "year": 2024,
    "value": 899.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "aurgazinsky",
    "indicatorId": "bdmo_y47000006",
    "year": 2024,
    "value": 706.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "bakalinsky",
    "indicatorId": "bdmo_y47000006",
    "year": 2024,
    "value": 11033.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "baltachevsky",
    "indicatorId": "bdmo_y47000006",
    "year": 2024,
    "value": 5825.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "baymaksky",
    "indicatorId": "bdmo_y47000006",
    "year": 2024,
    "value": 1277.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "belebeyevsky",
    "indicatorId": "bdmo_y47000006",
    "year": 2024,
    "value": 24.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "belokataysky",
    "indicatorId": "bdmo_y47000006",
    "year": 2024,
    "value": 8373.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "beloretsk",
    "indicatorId": "bdmo_y47000006",
    "year": 2024,
    "value": 581.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "birsk",
    "indicatorId": "bdmo_y47000006",
    "year": 2024,
    "value": 164.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "bizhbulyaksky",
    "indicatorId": "bdmo_y47000006",
    "year": 2024,
    "value": 636.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "blagovarsky",
    "indicatorId": "bdmo_y47000006",
    "year": 2024,
    "value": 39522.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "blagoveshchensky",
    "indicatorId": "bdmo_y47000006",
    "year": 2024,
    "value": 1169.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "buraevsky",
    "indicatorId": "bdmo_y47000006",
    "year": 2024,
    "value": 1573.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "burzyansky",
    "indicatorId": "bdmo_y47000006",
    "year": 2024,
    "value": 24.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "buzdyaksky",
    "indicatorId": "bdmo_y47000006",
    "year": 2024,
    "value": 72.9,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "chekmagushevsky",
    "indicatorId": "bdmo_y47000006",
    "year": 2024,
    "value": 17112.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "chishminsky",
    "indicatorId": "bdmo_y47000006",
    "year": 2024,
    "value": 7380.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "davlekanovsky",
    "indicatorId": "bdmo_y47000006",
    "year": 2024,
    "value": 2710.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "duvansky",
    "indicatorId": "bdmo_y47000006",
    "year": 2024,
    "value": 901.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "dyurtyulinsky",
    "indicatorId": "bdmo_y47000006",
    "year": 2024,
    "value": 2015.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ermekeyevsky",
    "indicatorId": "bdmo_y47000006",
    "year": 2024,
    "value": 1406.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "fedorovsky",
    "indicatorId": "bdmo_y47000006",
    "year": 2024,
    "value": 36485.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "gafuriysky",
    "indicatorId": "bdmo_y47000006",
    "year": 2024,
    "value": 111.9,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "iglinsky",
    "indicatorId": "bdmo_y47000006",
    "year": 2024,
    "value": 1868.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ilishevsky",
    "indicatorId": "bdmo_y47000006",
    "year": 2024,
    "value": 3070.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ishimbay",
    "indicatorId": "bdmo_y47000006",
    "year": 2024,
    "value": 13214.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kaltasinsky",
    "indicatorId": "bdmo_y47000006",
    "year": 2024,
    "value": 2373.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "karaidelsky",
    "indicatorId": "bdmo_y47000006",
    "year": 2024,
    "value": 7183.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "karmaskalinsky",
    "indicatorId": "bdmo_y47000006",
    "year": 2024,
    "value": 7971.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "khaibullinsky",
    "indicatorId": "bdmo_y47000006",
    "year": 2024,
    "value": 70444.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kiginsky",
    "indicatorId": "bdmo_y47000006",
    "year": 2024,
    "value": 401.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "krasnokamsky",
    "indicatorId": "bdmo_y47000006",
    "year": 2024,
    "value": 1938.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kugarchinsky",
    "indicatorId": "bdmo_y47000006",
    "year": 2024,
    "value": 701.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kumertau",
    "indicatorId": "bdmo_y47000006",
    "year": 2024,
    "value": 67.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kushnarenkovsky",
    "indicatorId": "bdmo_y47000006",
    "year": 2024,
    "value": 4348.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kuyurgazinsky",
    "indicatorId": "bdmo_y47000006",
    "year": 2024,
    "value": 25911.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "mechetlinsky",
    "indicatorId": "bdmo_y47000006",
    "year": 2024,
    "value": 550.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "meleuz",
    "indicatorId": "bdmo_y47000006",
    "year": 2024,
    "value": 2340.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "mishkinsky",
    "indicatorId": "bdmo_y47000006",
    "year": 2024,
    "value": 3586.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "miyakinsky",
    "indicatorId": "bdmo_y47000006",
    "year": 2024,
    "value": 4187.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "neftekamsk",
    "indicatorId": "bdmo_y47000006",
    "year": 2024,
    "value": 191.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "nurimanovsky",
    "indicatorId": "bdmo_y47000006",
    "year": 2024,
    "value": 445.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "oktyabrsky",
    "indicatorId": "bdmo_y47000006",
    "year": 2024,
    "value": 148.2,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "salavat",
    "indicatorId": "bdmo_y47000006",
    "year": 2024,
    "value": 174.7,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "salavatsky",
    "indicatorId": "bdmo_y47000006",
    "year": 2024,
    "value": 640.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sharansky",
    "indicatorId": "bdmo_y47000006",
    "year": 2024,
    "value": 6510.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sibay",
    "indicatorId": "bdmo_y47000006",
    "year": 2024,
    "value": 1246.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlibashevsky",
    "indicatorId": "bdmo_y47000006",
    "year": 2024,
    "value": 14758.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamak",
    "indicatorId": "bdmo_y47000006",
    "year": 2024,
    "value": 218.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamaksky",
    "indicatorId": "bdmo_y47000006",
    "year": 2024,
    "value": 119675.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "tatyshlinsky",
    "indicatorId": "bdmo_y47000006",
    "year": 2024,
    "value": 7580.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "tuymazy",
    "indicatorId": "bdmo_y47000006",
    "year": 2024,
    "value": 607.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "uchaly",
    "indicatorId": "bdmo_y47000006",
    "year": 2024,
    "value": 24670.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufa",
    "indicatorId": "bdmo_y47000006",
    "year": 2024,
    "value": 723.1,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufimsky",
    "indicatorId": "bdmo_y47000006",
    "year": 2024,
    "value": 1060.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "yanaulsky",
    "indicatorId": "bdmo_y47000006",
    "year": 2024,
    "value": 11660.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "zianchurinsky",
    "indicatorId": "bdmo_y47000006",
    "year": 2024,
    "value": 3638.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "zilairsky",
    "indicatorId": "bdmo_y47000006",
    "year": 2024,
    "value": 36.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "abzelilovsky",
    "indicatorId": "bdmo_y48002001",
    "year": 2024,
    "value": 198.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "agidel",
    "indicatorId": "bdmo_y48002001",
    "year": 2024,
    "value": 5.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "alsheevsky",
    "indicatorId": "bdmo_y48002001",
    "year": 2024,
    "value": 70.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "arkhangelsky",
    "indicatorId": "bdmo_y48002001",
    "year": 2024,
    "value": 2.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "askinsky",
    "indicatorId": "bdmo_y48002001",
    "year": 2024,
    "value": 10.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "aurgazinsky",
    "indicatorId": "bdmo_y48002001",
    "year": 2024,
    "value": 56.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "bakalinsky",
    "indicatorId": "bdmo_y48002001",
    "year": 2024,
    "value": 4.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "baltachevsky",
    "indicatorId": "bdmo_y48002001",
    "year": 2024,
    "value": 5.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "baymaksky",
    "indicatorId": "bdmo_y48002001",
    "year": 2024,
    "value": 395.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "belebeyevsky",
    "indicatorId": "bdmo_y48002001",
    "year": 2024,
    "value": 95.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "belokataysky",
    "indicatorId": "bdmo_y48002001",
    "year": 2024,
    "value": 8.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "beloretsk",
    "indicatorId": "bdmo_y48002001",
    "year": 2024,
    "value": 78.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "birsk",
    "indicatorId": "bdmo_y48002001",
    "year": 2024,
    "value": 31.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "bizhbulyaksky",
    "indicatorId": "bdmo_y48002001",
    "year": 2024,
    "value": 15.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "blagovarsky",
    "indicatorId": "bdmo_y48002001",
    "year": 2024,
    "value": 35.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "blagoveshchensky",
    "indicatorId": "bdmo_y48002001",
    "year": 2024,
    "value": 6.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "buraevsky",
    "indicatorId": "bdmo_y48002001",
    "year": 2024,
    "value": 23.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "burzyansky",
    "indicatorId": "bdmo_y48002001",
    "year": 2024,
    "value": 40.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "buzdyaksky",
    "indicatorId": "bdmo_y48002001",
    "year": 2024,
    "value": 23.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "chekmagushevsky",
    "indicatorId": "bdmo_y48002001",
    "year": 2024,
    "value": 14.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "chishminsky",
    "indicatorId": "bdmo_y48002001",
    "year": 2024,
    "value": 56.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "davlekanovsky",
    "indicatorId": "bdmo_y48002001",
    "year": 2024,
    "value": 18.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "duvansky",
    "indicatorId": "bdmo_y48002001",
    "year": 2024,
    "value": 10.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "dyurtyulinsky",
    "indicatorId": "bdmo_y48002001",
    "year": 2024,
    "value": 4.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ermekeyevsky",
    "indicatorId": "bdmo_y48002001",
    "year": 2024,
    "value": 1.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "fedorovsky",
    "indicatorId": "bdmo_y48002001",
    "year": 2024,
    "value": 35.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "gafuriysky",
    "indicatorId": "bdmo_y48002001",
    "year": 2024,
    "value": 31.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "iglinsky",
    "indicatorId": "bdmo_y48002001",
    "year": 2024,
    "value": 24.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ilishevsky",
    "indicatorId": "bdmo_y48002001",
    "year": 2024,
    "value": 10.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ishimbay",
    "indicatorId": "bdmo_y48002001",
    "year": 2024,
    "value": 3.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kaltasinsky",
    "indicatorId": "bdmo_y48002001",
    "year": 2024,
    "value": 1.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "karaidelsky",
    "indicatorId": "bdmo_y48002001",
    "year": 2024,
    "value": 8.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "karmaskalinsky",
    "indicatorId": "bdmo_y48002001",
    "year": 2024,
    "value": 1.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "khaibullinsky",
    "indicatorId": "bdmo_y48002001",
    "year": 2024,
    "value": 19.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kiginsky",
    "indicatorId": "bdmo_y48002001",
    "year": 2024,
    "value": 7.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "krasnokamsky",
    "indicatorId": "bdmo_y48002001",
    "year": 2024,
    "value": 6.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kugarchinsky",
    "indicatorId": "bdmo_y48002001",
    "year": 2024,
    "value": 1.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kumertau",
    "indicatorId": "bdmo_y48002001",
    "year": 2024,
    "value": 18.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kushnarenkovsky",
    "indicatorId": "bdmo_y48002001",
    "year": 2024,
    "value": 48.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kuyurgazinsky",
    "indicatorId": "bdmo_y48002001",
    "year": 2024,
    "value": 13.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "mechetlinsky",
    "indicatorId": "bdmo_y48002001",
    "year": 2024,
    "value": 22.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "meleuz",
    "indicatorId": "bdmo_y48002001",
    "year": 2024,
    "value": 5.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "mishkinsky",
    "indicatorId": "bdmo_y48002001",
    "year": 2024,
    "value": 144.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "miyakinsky",
    "indicatorId": "bdmo_y48002001",
    "year": 2024,
    "value": 17.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "neftekamsk",
    "indicatorId": "bdmo_y48002001",
    "year": 2024,
    "value": 207.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "nurimanovsky",
    "indicatorId": "bdmo_y48002001",
    "year": 2024,
    "value": 26.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "oktyabrsky",
    "indicatorId": "bdmo_y48002001",
    "year": 2024,
    "value": 39.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "salavat",
    "indicatorId": "bdmo_y48002001",
    "year": 2024,
    "value": 63.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "salavatsky",
    "indicatorId": "bdmo_y48002001",
    "year": 2024,
    "value": 5.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sharansky",
    "indicatorId": "bdmo_y48002001",
    "year": 2024,
    "value": 74.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sibay",
    "indicatorId": "bdmo_y48002001",
    "year": 2024,
    "value": 41.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlibashevsky",
    "indicatorId": "bdmo_y48002001",
    "year": 2024,
    "value": 3.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamak",
    "indicatorId": "bdmo_y48002001",
    "year": 2024,
    "value": 22.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamaksky",
    "indicatorId": "bdmo_y48002001",
    "year": 2024,
    "value": 12.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "tatyshlinsky",
    "indicatorId": "bdmo_y48002001",
    "year": 2024,
    "value": 74.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "tuymazy",
    "indicatorId": "bdmo_y48002001",
    "year": 2024,
    "value": 1.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "uchaly",
    "indicatorId": "bdmo_y48002001",
    "year": 2024,
    "value": 28.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufa",
    "indicatorId": "bdmo_y48002001",
    "year": 2024,
    "value": 712.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufimsky",
    "indicatorId": "bdmo_y48002001",
    "year": 2024,
    "value": 59.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "yanaulsky",
    "indicatorId": "bdmo_y48002001",
    "year": 2024,
    "value": 16.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "zianchurinsky",
    "indicatorId": "bdmo_y48002001",
    "year": 2024,
    "value": 80.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "zilairsky",
    "indicatorId": "bdmo_y48002001",
    "year": 2024,
    "value": 42.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "abzelilovsky",
    "indicatorId": "bdmo_y48002002",
    "year": 2024,
    "value": 9877.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "agidel",
    "indicatorId": "bdmo_y48002002",
    "year": 2024,
    "value": 8354.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "alsheevsky",
    "indicatorId": "bdmo_y48002002",
    "year": 2024,
    "value": 7490.2,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "arkhangelsky",
    "indicatorId": "bdmo_y48002002",
    "year": 2024,
    "value": 374.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "askinsky",
    "indicatorId": "bdmo_y48002002",
    "year": 2024,
    "value": 137.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "aurgazinsky",
    "indicatorId": "bdmo_y48002002",
    "year": 2024,
    "value": 13217.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "bakalinsky",
    "indicatorId": "bdmo_y48002002",
    "year": 2024,
    "value": 1604.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "baltachevsky",
    "indicatorId": "bdmo_y48002002",
    "year": 2024,
    "value": 2788.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "baymaksky",
    "indicatorId": "bdmo_y48002002",
    "year": 2024,
    "value": 14543.7,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "belebeyevsky",
    "indicatorId": "bdmo_y48002002",
    "year": 2024,
    "value": 15185.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "belokataysky",
    "indicatorId": "bdmo_y48002002",
    "year": 2024,
    "value": 2300.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "beloretsk",
    "indicatorId": "bdmo_y48002002",
    "year": 2024,
    "value": 19297.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "birsk",
    "indicatorId": "bdmo_y48002002",
    "year": 2024,
    "value": 9161.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "bizhbulyaksky",
    "indicatorId": "bdmo_y48002002",
    "year": 2024,
    "value": 2987.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "blagovarsky",
    "indicatorId": "bdmo_y48002002",
    "year": 2024,
    "value": 190.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "blagoveshchensky",
    "indicatorId": "bdmo_y48002002",
    "year": 2024,
    "value": 5860.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "buraevsky",
    "indicatorId": "bdmo_y48002002",
    "year": 2024,
    "value": 20950.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "burzyansky",
    "indicatorId": "bdmo_y48002002",
    "year": 2024,
    "value": 9557.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "buzdyaksky",
    "indicatorId": "bdmo_y48002002",
    "year": 2024,
    "value": 49.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "chekmagushevsky",
    "indicatorId": "bdmo_y48002002",
    "year": 2024,
    "value": 7449.7,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "chishminsky",
    "indicatorId": "bdmo_y48002002",
    "year": 2024,
    "value": 20915.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "davlekanovsky",
    "indicatorId": "bdmo_y48002002",
    "year": 2024,
    "value": 501.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "duvansky",
    "indicatorId": "bdmo_y48002002",
    "year": 2024,
    "value": 6644.9,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "dyurtyulinsky",
    "indicatorId": "bdmo_y48002002",
    "year": 2024,
    "value": 1628.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ermekeyevsky",
    "indicatorId": "bdmo_y48002002",
    "year": 2024,
    "value": 886.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "fedorovsky",
    "indicatorId": "bdmo_y48002002",
    "year": 2024,
    "value": 704.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "gafuriysky",
    "indicatorId": "bdmo_y48002002",
    "year": 2024,
    "value": 17241.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "iglinsky",
    "indicatorId": "bdmo_y48002002",
    "year": 2024,
    "value": 976.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ilishevsky",
    "indicatorId": "bdmo_y48002002",
    "year": 2024,
    "value": 213.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ishimbay",
    "indicatorId": "bdmo_y48002002",
    "year": 2024,
    "value": 1295.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kaltasinsky",
    "indicatorId": "bdmo_y48002002",
    "year": 2024,
    "value": 1699.1,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "karaidelsky",
    "indicatorId": "bdmo_y48002002",
    "year": 2024,
    "value": 4863.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "karmaskalinsky",
    "indicatorId": "bdmo_y48002002",
    "year": 2024,
    "value": 6002.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "khaibullinsky",
    "indicatorId": "bdmo_y48002002",
    "year": 2024,
    "value": 4800.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kiginsky",
    "indicatorId": "bdmo_y48002002",
    "year": 2024,
    "value": 13110.2,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "krasnokamsky",
    "indicatorId": "bdmo_y48002002",
    "year": 2024,
    "value": 7723.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kugarchinsky",
    "indicatorId": "bdmo_y48002002",
    "year": 2024,
    "value": 6201.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kumertau",
    "indicatorId": "bdmo_y48002002",
    "year": 2024,
    "value": 1820.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kushnarenkovsky",
    "indicatorId": "bdmo_y48002002",
    "year": 2024,
    "value": 12446.7,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kuyurgazinsky",
    "indicatorId": "bdmo_y48002002",
    "year": 2024,
    "value": 197.2,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "mechetlinsky",
    "indicatorId": "bdmo_y48002002",
    "year": 2024,
    "value": 4651.2,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "meleuz",
    "indicatorId": "bdmo_y48002002",
    "year": 2024,
    "value": 73674.9,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "mishkinsky",
    "indicatorId": "bdmo_y48002002",
    "year": 2024,
    "value": 300.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "miyakinsky",
    "indicatorId": "bdmo_y48002002",
    "year": 2024,
    "value": 6122.1,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "neftekamsk",
    "indicatorId": "bdmo_y48002002",
    "year": 2024,
    "value": 2235.7,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "nurimanovsky",
    "indicatorId": "bdmo_y48002002",
    "year": 2024,
    "value": 377.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "oktyabrsky",
    "indicatorId": "bdmo_y48002002",
    "year": 2024,
    "value": 1708.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "salavat",
    "indicatorId": "bdmo_y48002002",
    "year": 2024,
    "value": 15300.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "salavatsky",
    "indicatorId": "bdmo_y48002002",
    "year": 2024,
    "value": 358.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sharansky",
    "indicatorId": "bdmo_y48002002",
    "year": 2024,
    "value": 235.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sibay",
    "indicatorId": "bdmo_y48002002",
    "year": 2024,
    "value": 21934.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlibashevsky",
    "indicatorId": "bdmo_y48002002",
    "year": 2024,
    "value": 2465.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamak",
    "indicatorId": "bdmo_y48002002",
    "year": 2024,
    "value": 4090.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamaksky",
    "indicatorId": "bdmo_y48002002",
    "year": 2024,
    "value": 5771.9,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "tatyshlinsky",
    "indicatorId": "bdmo_y48002002",
    "year": 2024,
    "value": 27193.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "tuymazy",
    "indicatorId": "bdmo_y48002002",
    "year": 2024,
    "value": 2412.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "uchaly",
    "indicatorId": "bdmo_y48002002",
    "year": 2024,
    "value": 22189.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufa",
    "indicatorId": "bdmo_y48002002",
    "year": 2024,
    "value": 74607.7,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufimsky",
    "indicatorId": "bdmo_y48002002",
    "year": 2024,
    "value": 4486.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "yanaulsky",
    "indicatorId": "bdmo_y48002002",
    "year": 2024,
    "value": 1010.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "zianchurinsky",
    "indicatorId": "bdmo_y48002002",
    "year": 2024,
    "value": 261.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "zilairsky",
    "indicatorId": "bdmo_y48002002",
    "year": 2024,
    "value": 431.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "abzelilovsky",
    "indicatorId": "bdmo_y48002003",
    "year": 2024,
    "value": 6373.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "agidel",
    "indicatorId": "bdmo_y48002003",
    "year": 2024,
    "value": 893.2,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "alsheevsky",
    "indicatorId": "bdmo_y48002003",
    "year": 2024,
    "value": 313.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "arkhangelsky",
    "indicatorId": "bdmo_y48002003",
    "year": 2024,
    "value": 998.9,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "askinsky",
    "indicatorId": "bdmo_y48002003",
    "year": 2024,
    "value": 1399.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "aurgazinsky",
    "indicatorId": "bdmo_y48002003",
    "year": 2024,
    "value": 2416.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "bakalinsky",
    "indicatorId": "bdmo_y48002003",
    "year": 2024,
    "value": 1736.2,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "baltachevsky",
    "indicatorId": "bdmo_y48002003",
    "year": 2024,
    "value": 4707.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "baymaksky",
    "indicatorId": "bdmo_y48002003",
    "year": 2024,
    "value": 3064.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "belebeyevsky",
    "indicatorId": "bdmo_y48002003",
    "year": 2024,
    "value": 1012.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "belokataysky",
    "indicatorId": "bdmo_y48002003",
    "year": 2024,
    "value": 643.2,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "beloretsk",
    "indicatorId": "bdmo_y48002003",
    "year": 2024,
    "value": 7097.7,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "birsk",
    "indicatorId": "bdmo_y48002003",
    "year": 2024,
    "value": 3873.1,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "bizhbulyaksky",
    "indicatorId": "bdmo_y48002003",
    "year": 2024,
    "value": 1009.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "blagovarsky",
    "indicatorId": "bdmo_y48002003",
    "year": 2024,
    "value": 1336.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "blagoveshchensky",
    "indicatorId": "bdmo_y48002003",
    "year": 2024,
    "value": 6624.2,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "buraevsky",
    "indicatorId": "bdmo_y48002003",
    "year": 2024,
    "value": 557.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "burzyansky",
    "indicatorId": "bdmo_y48002003",
    "year": 2024,
    "value": 1407.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "buzdyaksky",
    "indicatorId": "bdmo_y48002003",
    "year": 2024,
    "value": 1789.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "chekmagushevsky",
    "indicatorId": "bdmo_y48002003",
    "year": 2024,
    "value": 1410.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "chishminsky",
    "indicatorId": "bdmo_y48002003",
    "year": 2024,
    "value": 2691.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "davlekanovsky",
    "indicatorId": "bdmo_y48002003",
    "year": 2024,
    "value": 2152.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "duvansky",
    "indicatorId": "bdmo_y48002003",
    "year": 2024,
    "value": 958.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "dyurtyulinsky",
    "indicatorId": "bdmo_y48002003",
    "year": 2024,
    "value": 5630.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ermekeyevsky",
    "indicatorId": "bdmo_y48002003",
    "year": 2024,
    "value": 250.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "fedorovsky",
    "indicatorId": "bdmo_y48002003",
    "year": 2024,
    "value": 188.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "gafuriysky",
    "indicatorId": "bdmo_y48002003",
    "year": 2024,
    "value": 217.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "iglinsky",
    "indicatorId": "bdmo_y48002003",
    "year": 2024,
    "value": 618.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ilishevsky",
    "indicatorId": "bdmo_y48002003",
    "year": 2024,
    "value": 130.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ishimbay",
    "indicatorId": "bdmo_y48002003",
    "year": 2024,
    "value": 1628.2,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kaltasinsky",
    "indicatorId": "bdmo_y48002003",
    "year": 2024,
    "value": 835.7,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "karaidelsky",
    "indicatorId": "bdmo_y48002003",
    "year": 2024,
    "value": 320.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "karmaskalinsky",
    "indicatorId": "bdmo_y48002003",
    "year": 2024,
    "value": 2273.7,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "khaibullinsky",
    "indicatorId": "bdmo_y48002003",
    "year": 2024,
    "value": 3608.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kiginsky",
    "indicatorId": "bdmo_y48002003",
    "year": 2024,
    "value": 100.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "krasnokamsky",
    "indicatorId": "bdmo_y48002003",
    "year": 2024,
    "value": 1059.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kugarchinsky",
    "indicatorId": "bdmo_y48002003",
    "year": 2024,
    "value": 50.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kumertau",
    "indicatorId": "bdmo_y48002003",
    "year": 2024,
    "value": 3915.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kushnarenkovsky",
    "indicatorId": "bdmo_y48002003",
    "year": 2024,
    "value": 113.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kuyurgazinsky",
    "indicatorId": "bdmo_y48002003",
    "year": 2024,
    "value": 495.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "mechetlinsky",
    "indicatorId": "bdmo_y48002003",
    "year": 2024,
    "value": 642.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "meleuz",
    "indicatorId": "bdmo_y48002003",
    "year": 2024,
    "value": 7697.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "mishkinsky",
    "indicatorId": "bdmo_y48002003",
    "year": 2024,
    "value": 1435.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "miyakinsky",
    "indicatorId": "bdmo_y48002003",
    "year": 2024,
    "value": 1555.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "neftekamsk",
    "indicatorId": "bdmo_y48002003",
    "year": 2024,
    "value": 10066.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "nurimanovsky",
    "indicatorId": "bdmo_y48002003",
    "year": 2024,
    "value": 210.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "oktyabrsky",
    "indicatorId": "bdmo_y48002003",
    "year": 2024,
    "value": 1308.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "salavat",
    "indicatorId": "bdmo_y48002003",
    "year": 2024,
    "value": 7540.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "salavatsky",
    "indicatorId": "bdmo_y48002003",
    "year": 2024,
    "value": 196.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sharansky",
    "indicatorId": "bdmo_y48002003",
    "year": 2024,
    "value": 1368.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sibay",
    "indicatorId": "bdmo_y48002003",
    "year": 2024,
    "value": 6291.9,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlibashevsky",
    "indicatorId": "bdmo_y48002003",
    "year": 2024,
    "value": 710.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamak",
    "indicatorId": "bdmo_y48002003",
    "year": 2024,
    "value": 2242.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamaksky",
    "indicatorId": "bdmo_y48002003",
    "year": 2024,
    "value": 235.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "tatyshlinsky",
    "indicatorId": "bdmo_y48002003",
    "year": 2024,
    "value": 380.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "tuymazy",
    "indicatorId": "bdmo_y48002003",
    "year": 2024,
    "value": 14678.9,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "uchaly",
    "indicatorId": "bdmo_y48002003",
    "year": 2024,
    "value": 5172.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufa",
    "indicatorId": "bdmo_y48002003",
    "year": 2024,
    "value": 88840.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufimsky",
    "indicatorId": "bdmo_y48002003",
    "year": 2024,
    "value": 3150.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "yanaulsky",
    "indicatorId": "bdmo_y48002003",
    "year": 2024,
    "value": 1833.7,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "zianchurinsky",
    "indicatorId": "bdmo_y48002003",
    "year": 2024,
    "value": 1293.9,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "zilairsky",
    "indicatorId": "bdmo_y48002003",
    "year": 2024,
    "value": 1474.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "abzelilovsky",
    "indicatorId": "bdmo_y48002004",
    "year": 2024,
    "value": 1766.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "agidel",
    "indicatorId": "bdmo_y48002004",
    "year": 2024,
    "value": 70.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "alsheevsky",
    "indicatorId": "bdmo_y48002004",
    "year": 2024,
    "value": 280.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "arkhangelsky",
    "indicatorId": "bdmo_y48002004",
    "year": 2024,
    "value": 1011.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "askinsky",
    "indicatorId": "bdmo_y48002004",
    "year": 2024,
    "value": 1375.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "aurgazinsky",
    "indicatorId": "bdmo_y48002004",
    "year": 2024,
    "value": 938.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "bakalinsky",
    "indicatorId": "bdmo_y48002004",
    "year": 2024,
    "value": 98.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "baltachevsky",
    "indicatorId": "bdmo_y48002004",
    "year": 2024,
    "value": 1820.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "baymaksky",
    "indicatorId": "bdmo_y48002004",
    "year": 2024,
    "value": 1481.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "belebeyevsky",
    "indicatorId": "bdmo_y48002004",
    "year": 2024,
    "value": 2506.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "belokataysky",
    "indicatorId": "bdmo_y48002004",
    "year": 2024,
    "value": 82.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "beloretsk",
    "indicatorId": "bdmo_y48002004",
    "year": 2024,
    "value": 10798.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "birsk",
    "indicatorId": "bdmo_y48002004",
    "year": 2024,
    "value": 3369.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "bizhbulyaksky",
    "indicatorId": "bdmo_y48002004",
    "year": 2024,
    "value": 200.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "blagovarsky",
    "indicatorId": "bdmo_y48002004",
    "year": 2024,
    "value": 1316.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "blagoveshchensky",
    "indicatorId": "bdmo_y48002004",
    "year": 2024,
    "value": 146.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "buraevsky",
    "indicatorId": "bdmo_y48002004",
    "year": 2024,
    "value": 215.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "burzyansky",
    "indicatorId": "bdmo_y48002004",
    "year": 2024,
    "value": 168.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "buzdyaksky",
    "indicatorId": "bdmo_y48002004",
    "year": 2024,
    "value": 1218.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "chekmagushevsky",
    "indicatorId": "bdmo_y48002004",
    "year": 2024,
    "value": 1482.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "chishminsky",
    "indicatorId": "bdmo_y48002004",
    "year": 2024,
    "value": 1331.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "davlekanovsky",
    "indicatorId": "bdmo_y48002004",
    "year": 2024,
    "value": 816.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "duvansky",
    "indicatorId": "bdmo_y48002004",
    "year": 2024,
    "value": 860.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "dyurtyulinsky",
    "indicatorId": "bdmo_y48002004",
    "year": 2024,
    "value": 376.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ermekeyevsky",
    "indicatorId": "bdmo_y48002004",
    "year": 2024,
    "value": 140.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "fedorovsky",
    "indicatorId": "bdmo_y48002004",
    "year": 2024,
    "value": 226.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "gafuriysky",
    "indicatorId": "bdmo_y48002004",
    "year": 2024,
    "value": 2704.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "iglinsky",
    "indicatorId": "bdmo_y48002004",
    "year": 2024,
    "value": 271.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ilishevsky",
    "indicatorId": "bdmo_y48002004",
    "year": 2024,
    "value": 3705.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ishimbay",
    "indicatorId": "bdmo_y48002004",
    "year": 2024,
    "value": 303.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kaltasinsky",
    "indicatorId": "bdmo_y48002004",
    "year": 2024,
    "value": 515.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "karaidelsky",
    "indicatorId": "bdmo_y48002004",
    "year": 2024,
    "value": 310.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "karmaskalinsky",
    "indicatorId": "bdmo_y48002004",
    "year": 2024,
    "value": 1055.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "khaibullinsky",
    "indicatorId": "bdmo_y48002004",
    "year": 2024,
    "value": 2163.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kiginsky",
    "indicatorId": "bdmo_y48002004",
    "year": 2024,
    "value": 426.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "krasnokamsky",
    "indicatorId": "bdmo_y48002004",
    "year": 2024,
    "value": 304.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kugarchinsky",
    "indicatorId": "bdmo_y48002004",
    "year": 2024,
    "value": 1553.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kumertau",
    "indicatorId": "bdmo_y48002004",
    "year": 2024,
    "value": 1885.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kushnarenkovsky",
    "indicatorId": "bdmo_y48002004",
    "year": 2024,
    "value": 1124.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kuyurgazinsky",
    "indicatorId": "bdmo_y48002004",
    "year": 2024,
    "value": 1373.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "mechetlinsky",
    "indicatorId": "bdmo_y48002004",
    "year": 2024,
    "value": 1996.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "meleuz",
    "indicatorId": "bdmo_y48002004",
    "year": 2024,
    "value": 1102.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "mishkinsky",
    "indicatorId": "bdmo_y48002004",
    "year": 2024,
    "value": 270.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "miyakinsky",
    "indicatorId": "bdmo_y48002004",
    "year": 2024,
    "value": 1017.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "neftekamsk",
    "indicatorId": "bdmo_y48002004",
    "year": 2024,
    "value": 15410.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "nurimanovsky",
    "indicatorId": "bdmo_y48002004",
    "year": 2024,
    "value": 139.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "oktyabrsky",
    "indicatorId": "bdmo_y48002004",
    "year": 2024,
    "value": 939.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "salavat",
    "indicatorId": "bdmo_y48002004",
    "year": 2024,
    "value": 13381.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "salavatsky",
    "indicatorId": "bdmo_y48002004",
    "year": 2024,
    "value": 62.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sharansky",
    "indicatorId": "bdmo_y48002004",
    "year": 2024,
    "value": 77.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sibay",
    "indicatorId": "bdmo_y48002004",
    "year": 2024,
    "value": 438.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlibashevsky",
    "indicatorId": "bdmo_y48002004",
    "year": 2024,
    "value": 574.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamak",
    "indicatorId": "bdmo_y48002004",
    "year": 2024,
    "value": 7272.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamaksky",
    "indicatorId": "bdmo_y48002004",
    "year": 2024,
    "value": 1159.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "tatyshlinsky",
    "indicatorId": "bdmo_y48002004",
    "year": 2024,
    "value": 160.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "tuymazy",
    "indicatorId": "bdmo_y48002004",
    "year": 2024,
    "value": 6983.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "uchaly",
    "indicatorId": "bdmo_y48002004",
    "year": 2024,
    "value": 415.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufa",
    "indicatorId": "bdmo_y48002004",
    "year": 2024,
    "value": 45514.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufimsky",
    "indicatorId": "bdmo_y48002004",
    "year": 2024,
    "value": 666.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "yanaulsky",
    "indicatorId": "bdmo_y48002004",
    "year": 2024,
    "value": 152.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "zianchurinsky",
    "indicatorId": "bdmo_y48002004",
    "year": 2024,
    "value": 14.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "zilairsky",
    "indicatorId": "bdmo_y48002004",
    "year": 2024,
    "value": 901.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "agidel",
    "indicatorId": "bdmo_y48002005",
    "year": 2024,
    "value": 115.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "alsheevsky",
    "indicatorId": "bdmo_y48002005",
    "year": 2024,
    "value": 208.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "askinsky",
    "indicatorId": "bdmo_y48002005",
    "year": 2024,
    "value": 60.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "aurgazinsky",
    "indicatorId": "bdmo_y48002005",
    "year": 2024,
    "value": 40.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "bakalinsky",
    "indicatorId": "bdmo_y48002005",
    "year": 2024,
    "value": 120.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "baymaksky",
    "indicatorId": "bdmo_y48002005",
    "year": 2024,
    "value": 91.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "belebeyevsky",
    "indicatorId": "bdmo_y48002005",
    "year": 2024,
    "value": 410.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "belokataysky",
    "indicatorId": "bdmo_y48002005",
    "year": 2024,
    "value": 18.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "beloretsk",
    "indicatorId": "bdmo_y48002005",
    "year": 2024,
    "value": 29.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "birsk",
    "indicatorId": "bdmo_y48002005",
    "year": 2024,
    "value": 277.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "chekmagushevsky",
    "indicatorId": "bdmo_y48002005",
    "year": 2024,
    "value": 72.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ermekeyevsky",
    "indicatorId": "bdmo_y48002005",
    "year": 2024,
    "value": 100.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "gafuriysky",
    "indicatorId": "bdmo_y48002005",
    "year": 2024,
    "value": 84.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ishimbay",
    "indicatorId": "bdmo_y48002005",
    "year": 2024,
    "value": 928.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kaltasinsky",
    "indicatorId": "bdmo_y48002005",
    "year": 2024,
    "value": 26.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "karmaskalinsky",
    "indicatorId": "bdmo_y48002005",
    "year": 2024,
    "value": 75.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kiginsky",
    "indicatorId": "bdmo_y48002005",
    "year": 2024,
    "value": 55.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kumertau",
    "indicatorId": "bdmo_y48002005",
    "year": 2024,
    "value": 802.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "meleuz",
    "indicatorId": "bdmo_y48002005",
    "year": 2024,
    "value": 480.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "mishkinsky",
    "indicatorId": "bdmo_y48002005",
    "year": 2024,
    "value": 100.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "neftekamsk",
    "indicatorId": "bdmo_y48002005",
    "year": 2024,
    "value": 59.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "oktyabrsky",
    "indicatorId": "bdmo_y48002005",
    "year": 2024,
    "value": 420.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "salavat",
    "indicatorId": "bdmo_y48002005",
    "year": 2024,
    "value": 119.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sibay",
    "indicatorId": "bdmo_y48002005",
    "year": 2024,
    "value": 409.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufa",
    "indicatorId": "bdmo_y48002005",
    "year": 2024,
    "value": 216.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "abzelilovsky",
    "indicatorId": "bdmo_y48002006",
    "year": 2024,
    "value": 1.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "agidel",
    "indicatorId": "bdmo_y48002006",
    "year": 2024,
    "value": 1.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "alsheevsky",
    "indicatorId": "bdmo_y48002006",
    "year": 2024,
    "value": 1.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "askinsky",
    "indicatorId": "bdmo_y48002006",
    "year": 2024,
    "value": 1.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "aurgazinsky",
    "indicatorId": "bdmo_y48002006",
    "year": 2024,
    "value": 1.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "bakalinsky",
    "indicatorId": "bdmo_y48002006",
    "year": 2024,
    "value": 1.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "baymaksky",
    "indicatorId": "bdmo_y48002006",
    "year": 2024,
    "value": 1.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "belebeyevsky",
    "indicatorId": "bdmo_y48002006",
    "year": 2024,
    "value": 1.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "belokataysky",
    "indicatorId": "bdmo_y48002006",
    "year": 2024,
    "value": 1.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "beloretsk",
    "indicatorId": "bdmo_y48002006",
    "year": 2024,
    "value": 1.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "birsk",
    "indicatorId": "bdmo_y48002006",
    "year": 2024,
    "value": 1.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "chekmagushevsky",
    "indicatorId": "bdmo_y48002006",
    "year": 2024,
    "value": 1.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ermekeyevsky",
    "indicatorId": "bdmo_y48002006",
    "year": 2024,
    "value": 1.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "gafuriysky",
    "indicatorId": "bdmo_y48002006",
    "year": 2024,
    "value": 1.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ishimbay",
    "indicatorId": "bdmo_y48002006",
    "year": 2024,
    "value": 1.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kaltasinsky",
    "indicatorId": "bdmo_y48002006",
    "year": 2024,
    "value": 1.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "karmaskalinsky",
    "indicatorId": "bdmo_y48002006",
    "year": 2024,
    "value": 1.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kiginsky",
    "indicatorId": "bdmo_y48002006",
    "year": 2024,
    "value": 1.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kumertau",
    "indicatorId": "bdmo_y48002006",
    "year": 2024,
    "value": 1.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "mechetlinsky",
    "indicatorId": "bdmo_y48002006",
    "year": 2024,
    "value": 1.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "meleuz",
    "indicatorId": "bdmo_y48002006",
    "year": 2024,
    "value": 1.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "mishkinsky",
    "indicatorId": "bdmo_y48002006",
    "year": 2024,
    "value": 1.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "neftekamsk",
    "indicatorId": "bdmo_y48002006",
    "year": 2024,
    "value": 1.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "oktyabrsky",
    "indicatorId": "bdmo_y48002006",
    "year": 2024,
    "value": 1.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "salavat",
    "indicatorId": "bdmo_y48002006",
    "year": 2024,
    "value": 1.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sibay",
    "indicatorId": "bdmo_y48002006",
    "year": 2024,
    "value": 1.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufa",
    "indicatorId": "bdmo_y48002006",
    "year": 2024,
    "value": 2.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "abzelilovsky",
    "indicatorId": "bdmo_y48002007",
    "year": 2024,
    "value": 5.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "agidel",
    "indicatorId": "bdmo_y48002007",
    "year": 2024,
    "value": 1.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "alsheevsky",
    "indicatorId": "bdmo_y48002007",
    "year": 2024,
    "value": 3.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "arkhangelsky",
    "indicatorId": "bdmo_y48002007",
    "year": 2024,
    "value": 1.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "askinsky",
    "indicatorId": "bdmo_y48002007",
    "year": 2024,
    "value": 1.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "aurgazinsky",
    "indicatorId": "bdmo_y48002007",
    "year": 2024,
    "value": 2.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "bakalinsky",
    "indicatorId": "bdmo_y48002007",
    "year": 2024,
    "value": 1.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "baltachevsky",
    "indicatorId": "bdmo_y48002007",
    "year": 2024,
    "value": 1.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "baymaksky",
    "indicatorId": "bdmo_y48002007",
    "year": 2024,
    "value": 1.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "belebeyevsky",
    "indicatorId": "bdmo_y48002007",
    "year": 2024,
    "value": 2.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "belokataysky",
    "indicatorId": "bdmo_y48002007",
    "year": 2024,
    "value": 3.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "beloretsk",
    "indicatorId": "bdmo_y48002007",
    "year": 2024,
    "value": 2.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "birsk",
    "indicatorId": "bdmo_y48002007",
    "year": 2024,
    "value": 1.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "bizhbulyaksky",
    "indicatorId": "bdmo_y48002007",
    "year": 2024,
    "value": 1.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "blagovarsky",
    "indicatorId": "bdmo_y48002007",
    "year": 2024,
    "value": 1.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "blagoveshchensky",
    "indicatorId": "bdmo_y48002007",
    "year": 2024,
    "value": 13.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "buraevsky",
    "indicatorId": "bdmo_y48002007",
    "year": 2024,
    "value": 3.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "burzyansky",
    "indicatorId": "bdmo_y48002007",
    "year": 2024,
    "value": 1.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "buzdyaksky",
    "indicatorId": "bdmo_y48002007",
    "year": 2024,
    "value": 1.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "chekmagushevsky",
    "indicatorId": "bdmo_y48002007",
    "year": 2024,
    "value": 1.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "chishminsky",
    "indicatorId": "bdmo_y48002007",
    "year": 2024,
    "value": 1.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "davlekanovsky",
    "indicatorId": "bdmo_y48002007",
    "year": 2024,
    "value": 1.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "duvansky",
    "indicatorId": "bdmo_y48002007",
    "year": 2024,
    "value": 1.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "dyurtyulinsky",
    "indicatorId": "bdmo_y48002007",
    "year": 2024,
    "value": 5.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ermekeyevsky",
    "indicatorId": "bdmo_y48002007",
    "year": 2024,
    "value": 3.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "fedorovsky",
    "indicatorId": "bdmo_y48002007",
    "year": 2024,
    "value": 1.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "gafuriysky",
    "indicatorId": "bdmo_y48002007",
    "year": 2024,
    "value": 5.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "iglinsky",
    "indicatorId": "bdmo_y48002007",
    "year": 2024,
    "value": 3.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ilishevsky",
    "indicatorId": "bdmo_y48002007",
    "year": 2024,
    "value": 1.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ishimbay",
    "indicatorId": "bdmo_y48002007",
    "year": 2024,
    "value": 1.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kaltasinsky",
    "indicatorId": "bdmo_y48002007",
    "year": 2024,
    "value": 1.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "karaidelsky",
    "indicatorId": "bdmo_y48002007",
    "year": 2024,
    "value": 1.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "karmaskalinsky",
    "indicatorId": "bdmo_y48002007",
    "year": 2024,
    "value": 6.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "khaibullinsky",
    "indicatorId": "bdmo_y48002007",
    "year": 2024,
    "value": 1.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kiginsky",
    "indicatorId": "bdmo_y48002007",
    "year": 2024,
    "value": 1.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "krasnokamsky",
    "indicatorId": "bdmo_y48002007",
    "year": 2024,
    "value": 4.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kugarchinsky",
    "indicatorId": "bdmo_y48002007",
    "year": 2024,
    "value": 6.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kumertau",
    "indicatorId": "bdmo_y48002007",
    "year": 2024,
    "value": 2.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kushnarenkovsky",
    "indicatorId": "bdmo_y48002007",
    "year": 2024,
    "value": 2.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kuyurgazinsky",
    "indicatorId": "bdmo_y48002007",
    "year": 2024,
    "value": 2.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "mechetlinsky",
    "indicatorId": "bdmo_y48002007",
    "year": 2024,
    "value": 1.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "meleuz",
    "indicatorId": "bdmo_y48002007",
    "year": 2024,
    "value": 1.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "mishkinsky",
    "indicatorId": "bdmo_y48002007",
    "year": 2024,
    "value": 1.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "miyakinsky",
    "indicatorId": "bdmo_y48002007",
    "year": 2024,
    "value": 2.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "neftekamsk",
    "indicatorId": "bdmo_y48002007",
    "year": 2024,
    "value": 1.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "nurimanovsky",
    "indicatorId": "bdmo_y48002007",
    "year": 2024,
    "value": 4.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "oktyabrsky",
    "indicatorId": "bdmo_y48002007",
    "year": 2024,
    "value": 1.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "salavat",
    "indicatorId": "bdmo_y48002007",
    "year": 2024,
    "value": 3.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "salavatsky",
    "indicatorId": "bdmo_y48002007",
    "year": 2024,
    "value": 1.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sharansky",
    "indicatorId": "bdmo_y48002007",
    "year": 2024,
    "value": 1.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sibay",
    "indicatorId": "bdmo_y48002007",
    "year": 2024,
    "value": 5.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlibashevsky",
    "indicatorId": "bdmo_y48002007",
    "year": 2024,
    "value": 3.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamak",
    "indicatorId": "bdmo_y48002007",
    "year": 2024,
    "value": 5.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "tatyshlinsky",
    "indicatorId": "bdmo_y48002007",
    "year": 2024,
    "value": 1.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "tuymazy",
    "indicatorId": "bdmo_y48002007",
    "year": 2024,
    "value": 7.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "uchaly",
    "indicatorId": "bdmo_y48002007",
    "year": 2024,
    "value": 1.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufa",
    "indicatorId": "bdmo_y48002007",
    "year": 2024,
    "value": 11.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufimsky",
    "indicatorId": "bdmo_y48002007",
    "year": 2024,
    "value": 5.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "yanaulsky",
    "indicatorId": "bdmo_y48002007",
    "year": 2024,
    "value": 1.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "zianchurinsky",
    "indicatorId": "bdmo_y48002007",
    "year": 2024,
    "value": 3.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "zilairsky",
    "indicatorId": "bdmo_y48002007",
    "year": 2024,
    "value": 2.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "abzelilovsky",
    "indicatorId": "bdmo_y48002008",
    "year": 2024,
    "value": 680.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "agidel",
    "indicatorId": "bdmo_y48002008",
    "year": 2024,
    "value": 11.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "alsheevsky",
    "indicatorId": "bdmo_y48002008",
    "year": 2024,
    "value": 336.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "arkhangelsky",
    "indicatorId": "bdmo_y48002008",
    "year": 2024,
    "value": 108.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "askinsky",
    "indicatorId": "bdmo_y48002008",
    "year": 2024,
    "value": 114.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "aurgazinsky",
    "indicatorId": "bdmo_y48002008",
    "year": 2024,
    "value": 66.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "bakalinsky",
    "indicatorId": "bdmo_y48002008",
    "year": 2024,
    "value": 40.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "baltachevsky",
    "indicatorId": "bdmo_y48002008",
    "year": 2024,
    "value": 258.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "baymaksky",
    "indicatorId": "bdmo_y48002008",
    "year": 2024,
    "value": 25.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "belebeyevsky",
    "indicatorId": "bdmo_y48002008",
    "year": 2024,
    "value": 20.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "belokataysky",
    "indicatorId": "bdmo_y48002008",
    "year": 2024,
    "value": 192.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "beloretsk",
    "indicatorId": "bdmo_y48002008",
    "year": 2024,
    "value": 232.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "birsk",
    "indicatorId": "bdmo_y48002008",
    "year": 2024,
    "value": 5146.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "bizhbulyaksky",
    "indicatorId": "bdmo_y48002008",
    "year": 2024,
    "value": 59.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "blagovarsky",
    "indicatorId": "bdmo_y48002008",
    "year": 2024,
    "value": 41.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "blagoveshchensky",
    "indicatorId": "bdmo_y48002008",
    "year": 2024,
    "value": 25.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "buraevsky",
    "indicatorId": "bdmo_y48002008",
    "year": 2024,
    "value": 63.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "burzyansky",
    "indicatorId": "bdmo_y48002008",
    "year": 2024,
    "value": 23.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "buzdyaksky",
    "indicatorId": "bdmo_y48002008",
    "year": 2024,
    "value": 36.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "chekmagushevsky",
    "indicatorId": "bdmo_y48002008",
    "year": 2024,
    "value": 50.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "chishminsky",
    "indicatorId": "bdmo_y48002008",
    "year": 2024,
    "value": 135.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "davlekanovsky",
    "indicatorId": "bdmo_y48002008",
    "year": 2024,
    "value": 50.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "duvansky",
    "indicatorId": "bdmo_y48002008",
    "year": 2024,
    "value": 22.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "dyurtyulinsky",
    "indicatorId": "bdmo_y48002008",
    "year": 2024,
    "value": 125.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ermekeyevsky",
    "indicatorId": "bdmo_y48002008",
    "year": 2024,
    "value": 15.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "fedorovsky",
    "indicatorId": "bdmo_y48002008",
    "year": 2024,
    "value": 141.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "gafuriysky",
    "indicatorId": "bdmo_y48002008",
    "year": 2024,
    "value": 208.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "iglinsky",
    "indicatorId": "bdmo_y48002008",
    "year": 2024,
    "value": 53.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ilishevsky",
    "indicatorId": "bdmo_y48002008",
    "year": 2024,
    "value": 153.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ishimbay",
    "indicatorId": "bdmo_y48002008",
    "year": 2024,
    "value": 110.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kaltasinsky",
    "indicatorId": "bdmo_y48002008",
    "year": 2024,
    "value": 52.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "karaidelsky",
    "indicatorId": "bdmo_y48002008",
    "year": 2024,
    "value": 98.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "karmaskalinsky",
    "indicatorId": "bdmo_y48002008",
    "year": 2024,
    "value": 2315.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "khaibullinsky",
    "indicatorId": "bdmo_y48002008",
    "year": 2024,
    "value": 54.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kiginsky",
    "indicatorId": "bdmo_y48002008",
    "year": 2024,
    "value": 195.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "krasnokamsky",
    "indicatorId": "bdmo_y48002008",
    "year": 2024,
    "value": 98.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kugarchinsky",
    "indicatorId": "bdmo_y48002008",
    "year": 2024,
    "value": 48.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kumertau",
    "indicatorId": "bdmo_y48002008",
    "year": 2024,
    "value": 900.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kushnarenkovsky",
    "indicatorId": "bdmo_y48002008",
    "year": 2024,
    "value": 65.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kuyurgazinsky",
    "indicatorId": "bdmo_y48002008",
    "year": 2024,
    "value": 45.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "mechetlinsky",
    "indicatorId": "bdmo_y48002008",
    "year": 2024,
    "value": 62.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "meleuz",
    "indicatorId": "bdmo_y48002008",
    "year": 2024,
    "value": 36.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "mishkinsky",
    "indicatorId": "bdmo_y48002008",
    "year": 2024,
    "value": 220.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "miyakinsky",
    "indicatorId": "bdmo_y48002008",
    "year": 2024,
    "value": 21.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "neftekamsk",
    "indicatorId": "bdmo_y48002008",
    "year": 2024,
    "value": 247.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "nurimanovsky",
    "indicatorId": "bdmo_y48002008",
    "year": 2024,
    "value": 90.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "oktyabrsky",
    "indicatorId": "bdmo_y48002008",
    "year": 2024,
    "value": 3640.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "salavat",
    "indicatorId": "bdmo_y48002008",
    "year": 2024,
    "value": 33.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "salavatsky",
    "indicatorId": "bdmo_y48002008",
    "year": 2024,
    "value": 140.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sharansky",
    "indicatorId": "bdmo_y48002008",
    "year": 2024,
    "value": 71.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sibay",
    "indicatorId": "bdmo_y48002008",
    "year": 2024,
    "value": 15.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlibashevsky",
    "indicatorId": "bdmo_y48002008",
    "year": 2024,
    "value": 365.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamak",
    "indicatorId": "bdmo_y48002008",
    "year": 2024,
    "value": 20.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "tatyshlinsky",
    "indicatorId": "bdmo_y48002008",
    "year": 2024,
    "value": 65.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "tuymazy",
    "indicatorId": "bdmo_y48002008",
    "year": 2024,
    "value": 161.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "uchaly",
    "indicatorId": "bdmo_y48002008",
    "year": 2024,
    "value": 51.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufa",
    "indicatorId": "bdmo_y48002008",
    "year": 2024,
    "value": 3153.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufimsky",
    "indicatorId": "bdmo_y48002008",
    "year": 2024,
    "value": 63.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "yanaulsky",
    "indicatorId": "bdmo_y48002008",
    "year": 2024,
    "value": 80.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "zianchurinsky",
    "indicatorId": "bdmo_y48002008",
    "year": 2024,
    "value": 118.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "zilairsky",
    "indicatorId": "bdmo_y48002008",
    "year": 2024,
    "value": 144.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "abzelilovsky",
    "indicatorId": "bdmo_y48006005_s_tverdym_pokrytiem",
    "year": 2024,
    "value": 628.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "agidel",
    "indicatorId": "bdmo_y48006005_s_tverdym_pokrytiem",
    "year": 2024,
    "value": 44.2,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "alsheevsky",
    "indicatorId": "bdmo_y48006005_s_tverdym_pokrytiem",
    "year": 2024,
    "value": 616.1,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "arkhangelsky",
    "indicatorId": "bdmo_y48006005_s_tverdym_pokrytiem",
    "year": 2024,
    "value": 354.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "askinsky",
    "indicatorId": "bdmo_y48006005_s_tverdym_pokrytiem",
    "year": 2024,
    "value": 532.2,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "aurgazinsky",
    "indicatorId": "bdmo_y48006005_s_tverdym_pokrytiem",
    "year": 2024,
    "value": 672.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "bakalinsky",
    "indicatorId": "bdmo_y48006005_s_tverdym_pokrytiem",
    "year": 2024,
    "value": 464.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "baltachevsky",
    "indicatorId": "bdmo_y48006005_s_tverdym_pokrytiem",
    "year": 2024,
    "value": 417.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "baymaksky",
    "indicatorId": "bdmo_y48006005_s_tverdym_pokrytiem",
    "year": 2024,
    "value": 1161.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "belebeyevsky",
    "indicatorId": "bdmo_y48006005_s_tverdym_pokrytiem",
    "year": 2024,
    "value": 515.7,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "belokataysky",
    "indicatorId": "bdmo_y48006005_s_tverdym_pokrytiem",
    "year": 2024,
    "value": 371.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "beloretsk",
    "indicatorId": "bdmo_y48006005_s_tverdym_pokrytiem",
    "year": 2024,
    "value": 1032.2,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "birsk",
    "indicatorId": "bdmo_y48006005_s_tverdym_pokrytiem",
    "year": 2024,
    "value": 357.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "bizhbulyaksky",
    "indicatorId": "bdmo_y48006005_s_tverdym_pokrytiem",
    "year": 2024,
    "value": 337.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "blagovarsky",
    "indicatorId": "bdmo_y48006005_s_tverdym_pokrytiem",
    "year": 2024,
    "value": 392.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "blagoveshchensky",
    "indicatorId": "bdmo_y48006005_s_tverdym_pokrytiem",
    "year": 2024,
    "value": 555.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "buraevsky",
    "indicatorId": "bdmo_y48006005_s_tverdym_pokrytiem",
    "year": 2024,
    "value": 472.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "burzyansky",
    "indicatorId": "bdmo_y48006005_s_tverdym_pokrytiem",
    "year": 2024,
    "value": 405.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "buzdyaksky",
    "indicatorId": "bdmo_y48006005_s_tverdym_pokrytiem",
    "year": 2024,
    "value": 371.2,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "chekmagushevsky",
    "indicatorId": "bdmo_y48006005_s_tverdym_pokrytiem",
    "year": 2024,
    "value": 384.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "chishminsky",
    "indicatorId": "bdmo_y48006005_s_tverdym_pokrytiem",
    "year": 2024,
    "value": 624.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "davlekanovsky",
    "indicatorId": "bdmo_y48006005_s_tverdym_pokrytiem",
    "year": 2024,
    "value": 472.2,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "duvansky",
    "indicatorId": "bdmo_y48006005_s_tverdym_pokrytiem",
    "year": 2024,
    "value": 405.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "dyurtyulinsky",
    "indicatorId": "bdmo_y48006005_s_tverdym_pokrytiem",
    "year": 2024,
    "value": 487.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ermekeyevsky",
    "indicatorId": "bdmo_y48006005_s_tverdym_pokrytiem",
    "year": 2024,
    "value": 305.2,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "fedorovsky",
    "indicatorId": "bdmo_y48006005_s_tverdym_pokrytiem",
    "year": 2024,
    "value": 299.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "gafuriysky",
    "indicatorId": "bdmo_y48006005_s_tverdym_pokrytiem",
    "year": 2024,
    "value": 514.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "iglinsky",
    "indicatorId": "bdmo_y48006005_s_tverdym_pokrytiem",
    "year": 2024,
    "value": 1322.9,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ilishevsky",
    "indicatorId": "bdmo_y48006005_s_tverdym_pokrytiem",
    "year": 2024,
    "value": 599.9,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ishimbay",
    "indicatorId": "bdmo_y48006005_s_tverdym_pokrytiem",
    "year": 2024,
    "value": 727.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kaltasinsky",
    "indicatorId": "bdmo_y48006005_s_tverdym_pokrytiem",
    "year": 2024,
    "value": 361.9,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "karaidelsky",
    "indicatorId": "bdmo_y48006005_s_tverdym_pokrytiem",
    "year": 2024,
    "value": 690.7,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "karmaskalinsky",
    "indicatorId": "bdmo_y48006005_s_tverdym_pokrytiem",
    "year": 2024,
    "value": 941.7,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "khaibullinsky",
    "indicatorId": "bdmo_y48006005_s_tverdym_pokrytiem",
    "year": 2024,
    "value": 514.2,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kiginsky",
    "indicatorId": "bdmo_y48006005_s_tverdym_pokrytiem",
    "year": 2024,
    "value": 346.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "krasnokamsky",
    "indicatorId": "bdmo_y48006005_s_tverdym_pokrytiem",
    "year": 2024,
    "value": 322.9,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kugarchinsky",
    "indicatorId": "bdmo_y48006005_s_tverdym_pokrytiem",
    "year": 2024,
    "value": 502.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kumertau",
    "indicatorId": "bdmo_y48006005_s_tverdym_pokrytiem",
    "year": 2024,
    "value": 192.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kushnarenkovsky",
    "indicatorId": "bdmo_y48006005_s_tverdym_pokrytiem",
    "year": 2024,
    "value": 419.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kuyurgazinsky",
    "indicatorId": "bdmo_y48006005_s_tverdym_pokrytiem",
    "year": 2024,
    "value": 406.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "mechetlinsky",
    "indicatorId": "bdmo_y48006005_s_tverdym_pokrytiem",
    "year": 2024,
    "value": 370.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "meleuz",
    "indicatorId": "bdmo_y48006005_s_tverdym_pokrytiem",
    "year": 2024,
    "value": 745.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "mishkinsky",
    "indicatorId": "bdmo_y48006005_s_tverdym_pokrytiem",
    "year": 2024,
    "value": 335.1,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "miyakinsky",
    "indicatorId": "bdmo_y48006005_s_tverdym_pokrytiem",
    "year": 2024,
    "value": 493.7,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "neftekamsk",
    "indicatorId": "bdmo_y48006005_s_tverdym_pokrytiem",
    "year": 2024,
    "value": 317.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "nurimanovsky",
    "indicatorId": "bdmo_y48006005_s_tverdym_pokrytiem",
    "year": 2024,
    "value": 379.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "oktyabrsky",
    "indicatorId": "bdmo_y48006005_s_tverdym_pokrytiem",
    "year": 2024,
    "value": 322.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "salavat",
    "indicatorId": "bdmo_y48006005_s_tverdym_pokrytiem",
    "year": 2024,
    "value": 126.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "salavatsky",
    "indicatorId": "bdmo_y48006005_s_tverdym_pokrytiem",
    "year": 2024,
    "value": 549.7,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sharansky",
    "indicatorId": "bdmo_y48006005_s_tverdym_pokrytiem",
    "year": 2024,
    "value": 224.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sibay",
    "indicatorId": "bdmo_y48006005_s_tverdym_pokrytiem",
    "year": 2024,
    "value": 221.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlibashevsky",
    "indicatorId": "bdmo_y48006005_s_tverdym_pokrytiem",
    "year": 2024,
    "value": 346.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamak",
    "indicatorId": "bdmo_y48006005_s_tverdym_pokrytiem",
    "year": 2024,
    "value": 324.1,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamaksky",
    "indicatorId": "bdmo_y48006005_s_tverdym_pokrytiem",
    "year": 2024,
    "value": 672.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "tatyshlinsky",
    "indicatorId": "bdmo_y48006005_s_tverdym_pokrytiem",
    "year": 2024,
    "value": 334.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "tuymazy",
    "indicatorId": "bdmo_y48006005_s_tverdym_pokrytiem",
    "year": 2024,
    "value": 742.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "uchaly",
    "indicatorId": "bdmo_y48006005_s_tverdym_pokrytiem",
    "year": 2024,
    "value": 921.9,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufa",
    "indicatorId": "bdmo_y48006005_s_tverdym_pokrytiem",
    "year": 2024,
    "value": 1987.7,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufimsky",
    "indicatorId": "bdmo_y48006005_s_tverdym_pokrytiem",
    "year": 2024,
    "value": 992.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "yanaulsky",
    "indicatorId": "bdmo_y48006005_s_tverdym_pokrytiem",
    "year": 2024,
    "value": 736.9,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "zianchurinsky",
    "indicatorId": "bdmo_y48006005_s_tverdym_pokrytiem",
    "year": 2024,
    "value": 529.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "zilairsky",
    "indicatorId": "bdmo_y48006005_s_tverdym_pokrytiem",
    "year": 2024,
    "value": 394.9,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "abzelilovsky",
    "indicatorId": "bdmo_y48006005_s_usovershenstvovannym_pokrytiem_cementobetonnye_asfaltobetonnye_i_tipa_asfaltobetona_iz_schebnya_i_graviya_obrabotannyh_vyazhuschimi_materialami",
    "year": 2024,
    "value": 68.7,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "agidel",
    "indicatorId": "bdmo_y48006005_s_usovershenstvovannym_pokrytiem_cementobetonnye_asfaltobetonnye_i_tipa_asfaltobetona_iz_schebnya_i_graviya_obrabotannyh_vyazhuschimi_materialami",
    "year": 2024,
    "value": 33.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "alsheevsky",
    "indicatorId": "bdmo_y48006005_s_usovershenstvovannym_pokrytiem_cementobetonnye_asfaltobetonnye_i_tipa_asfaltobetona_iz_schebnya_i_graviya_obrabotannyh_vyazhuschimi_materialami",
    "year": 2024,
    "value": 183.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "arkhangelsky",
    "indicatorId": "bdmo_y48006005_s_usovershenstvovannym_pokrytiem_cementobetonnye_asfaltobetonnye_i_tipa_asfaltobetona_iz_schebnya_i_graviya_obrabotannyh_vyazhuschimi_materialami",
    "year": 2024,
    "value": 78.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "askinsky",
    "indicatorId": "bdmo_y48006005_s_usovershenstvovannym_pokrytiem_cementobetonnye_asfaltobetonnye_i_tipa_asfaltobetona_iz_schebnya_i_graviya_obrabotannyh_vyazhuschimi_materialami",
    "year": 2024,
    "value": 54.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "aurgazinsky",
    "indicatorId": "bdmo_y48006005_s_usovershenstvovannym_pokrytiem_cementobetonnye_asfaltobetonnye_i_tipa_asfaltobetona_iz_schebnya_i_graviya_obrabotannyh_vyazhuschimi_materialami",
    "year": 2024,
    "value": 346.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "bakalinsky",
    "indicatorId": "bdmo_y48006005_s_usovershenstvovannym_pokrytiem_cementobetonnye_asfaltobetonnye_i_tipa_asfaltobetona_iz_schebnya_i_graviya_obrabotannyh_vyazhuschimi_materialami",
    "year": 2024,
    "value": 111.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "baltachevsky",
    "indicatorId": "bdmo_y48006005_s_usovershenstvovannym_pokrytiem_cementobetonnye_asfaltobetonnye_i_tipa_asfaltobetona_iz_schebnya_i_graviya_obrabotannyh_vyazhuschimi_materialami",
    "year": 2024,
    "value": 85.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "baymaksky",
    "indicatorId": "bdmo_y48006005_s_usovershenstvovannym_pokrytiem_cementobetonnye_asfaltobetonnye_i_tipa_asfaltobetona_iz_schebnya_i_graviya_obrabotannyh_vyazhuschimi_materialami",
    "year": 2024,
    "value": 211.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "belebeyevsky",
    "indicatorId": "bdmo_y48006005_s_usovershenstvovannym_pokrytiem_cementobetonnye_asfaltobetonnye_i_tipa_asfaltobetona_iz_schebnya_i_graviya_obrabotannyh_vyazhuschimi_materialami",
    "year": 2024,
    "value": 259.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "belokataysky",
    "indicatorId": "bdmo_y48006005_s_usovershenstvovannym_pokrytiem_cementobetonnye_asfaltobetonnye_i_tipa_asfaltobetona_iz_schebnya_i_graviya_obrabotannyh_vyazhuschimi_materialami",
    "year": 2024,
    "value": 89.1,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "beloretsk",
    "indicatorId": "bdmo_y48006005_s_usovershenstvovannym_pokrytiem_cementobetonnye_asfaltobetonnye_i_tipa_asfaltobetona_iz_schebnya_i_graviya_obrabotannyh_vyazhuschimi_materialami",
    "year": 2024,
    "value": 208.1,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "birsk",
    "indicatorId": "bdmo_y48006005_s_usovershenstvovannym_pokrytiem_cementobetonnye_asfaltobetonnye_i_tipa_asfaltobetona_iz_schebnya_i_graviya_obrabotannyh_vyazhuschimi_materialami",
    "year": 2024,
    "value": 269.2,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "bizhbulyaksky",
    "indicatorId": "bdmo_y48006005_s_usovershenstvovannym_pokrytiem_cementobetonnye_asfaltobetonnye_i_tipa_asfaltobetona_iz_schebnya_i_graviya_obrabotannyh_vyazhuschimi_materialami",
    "year": 2024,
    "value": 57.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "blagovarsky",
    "indicatorId": "bdmo_y48006005_s_usovershenstvovannym_pokrytiem_cementobetonnye_asfaltobetonnye_i_tipa_asfaltobetona_iz_schebnya_i_graviya_obrabotannyh_vyazhuschimi_materialami",
    "year": 2024,
    "value": 90.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "blagoveshchensky",
    "indicatorId": "bdmo_y48006005_s_usovershenstvovannym_pokrytiem_cementobetonnye_asfaltobetonnye_i_tipa_asfaltobetona_iz_schebnya_i_graviya_obrabotannyh_vyazhuschimi_materialami",
    "year": 2024,
    "value": 231.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "buraevsky",
    "indicatorId": "bdmo_y48006005_s_usovershenstvovannym_pokrytiem_cementobetonnye_asfaltobetonnye_i_tipa_asfaltobetona_iz_schebnya_i_graviya_obrabotannyh_vyazhuschimi_materialami",
    "year": 2024,
    "value": 178.7,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "burzyansky",
    "indicatorId": "bdmo_y48006005_s_usovershenstvovannym_pokrytiem_cementobetonnye_asfaltobetonnye_i_tipa_asfaltobetona_iz_schebnya_i_graviya_obrabotannyh_vyazhuschimi_materialami",
    "year": 2024,
    "value": 57.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "buzdyaksky",
    "indicatorId": "bdmo_y48006005_s_usovershenstvovannym_pokrytiem_cementobetonnye_asfaltobetonnye_i_tipa_asfaltobetona_iz_schebnya_i_graviya_obrabotannyh_vyazhuschimi_materialami",
    "year": 2024,
    "value": 142.1,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "chekmagushevsky",
    "indicatorId": "bdmo_y48006005_s_usovershenstvovannym_pokrytiem_cementobetonnye_asfaltobetonnye_i_tipa_asfaltobetona_iz_schebnya_i_graviya_obrabotannyh_vyazhuschimi_materialami",
    "year": 2024,
    "value": 109.2,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "chishminsky",
    "indicatorId": "bdmo_y48006005_s_usovershenstvovannym_pokrytiem_cementobetonnye_asfaltobetonnye_i_tipa_asfaltobetona_iz_schebnya_i_graviya_obrabotannyh_vyazhuschimi_materialami",
    "year": 2024,
    "value": 205.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "davlekanovsky",
    "indicatorId": "bdmo_y48006005_s_usovershenstvovannym_pokrytiem_cementobetonnye_asfaltobetonnye_i_tipa_asfaltobetona_iz_schebnya_i_graviya_obrabotannyh_vyazhuschimi_materialami",
    "year": 2024,
    "value": 180.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "duvansky",
    "indicatorId": "bdmo_y48006005_s_usovershenstvovannym_pokrytiem_cementobetonnye_asfaltobetonnye_i_tipa_asfaltobetona_iz_schebnya_i_graviya_obrabotannyh_vyazhuschimi_materialami",
    "year": 2024,
    "value": 196.2,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "dyurtyulinsky",
    "indicatorId": "bdmo_y48006005_s_usovershenstvovannym_pokrytiem_cementobetonnye_asfaltobetonnye_i_tipa_asfaltobetona_iz_schebnya_i_graviya_obrabotannyh_vyazhuschimi_materialami",
    "year": 2024,
    "value": 220.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ermekeyevsky",
    "indicatorId": "bdmo_y48006005_s_usovershenstvovannym_pokrytiem_cementobetonnye_asfaltobetonnye_i_tipa_asfaltobetona_iz_schebnya_i_graviya_obrabotannyh_vyazhuschimi_materialami",
    "year": 2024,
    "value": 95.7,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "fedorovsky",
    "indicatorId": "bdmo_y48006005_s_usovershenstvovannym_pokrytiem_cementobetonnye_asfaltobetonnye_i_tipa_asfaltobetona_iz_schebnya_i_graviya_obrabotannyh_vyazhuschimi_materialami",
    "year": 2024,
    "value": 97.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "gafuriysky",
    "indicatorId": "bdmo_y48006005_s_usovershenstvovannym_pokrytiem_cementobetonnye_asfaltobetonnye_i_tipa_asfaltobetona_iz_schebnya_i_graviya_obrabotannyh_vyazhuschimi_materialami",
    "year": 2024,
    "value": 144.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "iglinsky",
    "indicatorId": "bdmo_y48006005_s_usovershenstvovannym_pokrytiem_cementobetonnye_asfaltobetonnye_i_tipa_asfaltobetona_iz_schebnya_i_graviya_obrabotannyh_vyazhuschimi_materialami",
    "year": 2024,
    "value": 387.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ilishevsky",
    "indicatorId": "bdmo_y48006005_s_usovershenstvovannym_pokrytiem_cementobetonnye_asfaltobetonnye_i_tipa_asfaltobetona_iz_schebnya_i_graviya_obrabotannyh_vyazhuschimi_materialami",
    "year": 2024,
    "value": 134.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ishimbay",
    "indicatorId": "bdmo_y48006005_s_usovershenstvovannym_pokrytiem_cementobetonnye_asfaltobetonnye_i_tipa_asfaltobetona_iz_schebnya_i_graviya_obrabotannyh_vyazhuschimi_materialami",
    "year": 2024,
    "value": 319.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kaltasinsky",
    "indicatorId": "bdmo_y48006005_s_usovershenstvovannym_pokrytiem_cementobetonnye_asfaltobetonnye_i_tipa_asfaltobetona_iz_schebnya_i_graviya_obrabotannyh_vyazhuschimi_materialami",
    "year": 2024,
    "value": 113.1,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "karaidelsky",
    "indicatorId": "bdmo_y48006005_s_usovershenstvovannym_pokrytiem_cementobetonnye_asfaltobetonnye_i_tipa_asfaltobetona_iz_schebnya_i_graviya_obrabotannyh_vyazhuschimi_materialami",
    "year": 2024,
    "value": 109.1,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "karmaskalinsky",
    "indicatorId": "bdmo_y48006005_s_usovershenstvovannym_pokrytiem_cementobetonnye_asfaltobetonnye_i_tipa_asfaltobetona_iz_schebnya_i_graviya_obrabotannyh_vyazhuschimi_materialami",
    "year": 2024,
    "value": 218.1,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "khaibullinsky",
    "indicatorId": "bdmo_y48006005_s_usovershenstvovannym_pokrytiem_cementobetonnye_asfaltobetonnye_i_tipa_asfaltobetona_iz_schebnya_i_graviya_obrabotannyh_vyazhuschimi_materialami",
    "year": 2024,
    "value": 126.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kiginsky",
    "indicatorId": "bdmo_y48006005_s_usovershenstvovannym_pokrytiem_cementobetonnye_asfaltobetonnye_i_tipa_asfaltobetona_iz_schebnya_i_graviya_obrabotannyh_vyazhuschimi_materialami",
    "year": 2024,
    "value": 115.2,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "krasnokamsky",
    "indicatorId": "bdmo_y48006005_s_usovershenstvovannym_pokrytiem_cementobetonnye_asfaltobetonnye_i_tipa_asfaltobetona_iz_schebnya_i_graviya_obrabotannyh_vyazhuschimi_materialami",
    "year": 2024,
    "value": 265.1,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kugarchinsky",
    "indicatorId": "bdmo_y48006005_s_usovershenstvovannym_pokrytiem_cementobetonnye_asfaltobetonnye_i_tipa_asfaltobetona_iz_schebnya_i_graviya_obrabotannyh_vyazhuschimi_materialami",
    "year": 2024,
    "value": 204.1,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kumertau",
    "indicatorId": "bdmo_y48006005_s_usovershenstvovannym_pokrytiem_cementobetonnye_asfaltobetonnye_i_tipa_asfaltobetona_iz_schebnya_i_graviya_obrabotannyh_vyazhuschimi_materialami",
    "year": 2024,
    "value": 180.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kushnarenkovsky",
    "indicatorId": "bdmo_y48006005_s_usovershenstvovannym_pokrytiem_cementobetonnye_asfaltobetonnye_i_tipa_asfaltobetona_iz_schebnya_i_graviya_obrabotannyh_vyazhuschimi_materialami",
    "year": 2024,
    "value": 153.1,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kuyurgazinsky",
    "indicatorId": "bdmo_y48006005_s_usovershenstvovannym_pokrytiem_cementobetonnye_asfaltobetonnye_i_tipa_asfaltobetona_iz_schebnya_i_graviya_obrabotannyh_vyazhuschimi_materialami",
    "year": 2024,
    "value": 106.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "mechetlinsky",
    "indicatorId": "bdmo_y48006005_s_usovershenstvovannym_pokrytiem_cementobetonnye_asfaltobetonnye_i_tipa_asfaltobetona_iz_schebnya_i_graviya_obrabotannyh_vyazhuschimi_materialami",
    "year": 2024,
    "value": 90.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "meleuz",
    "indicatorId": "bdmo_y48006005_s_usovershenstvovannym_pokrytiem_cementobetonnye_asfaltobetonnye_i_tipa_asfaltobetona_iz_schebnya_i_graviya_obrabotannyh_vyazhuschimi_materialami",
    "year": 2024,
    "value": 313.7,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "mishkinsky",
    "indicatorId": "bdmo_y48006005_s_usovershenstvovannym_pokrytiem_cementobetonnye_asfaltobetonnye_i_tipa_asfaltobetona_iz_schebnya_i_graviya_obrabotannyh_vyazhuschimi_materialami",
    "year": 2024,
    "value": 137.1,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "miyakinsky",
    "indicatorId": "bdmo_y48006005_s_usovershenstvovannym_pokrytiem_cementobetonnye_asfaltobetonnye_i_tipa_asfaltobetona_iz_schebnya_i_graviya_obrabotannyh_vyazhuschimi_materialami",
    "year": 2024,
    "value": 94.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "neftekamsk",
    "indicatorId": "bdmo_y48006005_s_usovershenstvovannym_pokrytiem_cementobetonnye_asfaltobetonnye_i_tipa_asfaltobetona_iz_schebnya_i_graviya_obrabotannyh_vyazhuschimi_materialami",
    "year": 2024,
    "value": 236.7,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "nurimanovsky",
    "indicatorId": "bdmo_y48006005_s_usovershenstvovannym_pokrytiem_cementobetonnye_asfaltobetonnye_i_tipa_asfaltobetona_iz_schebnya_i_graviya_obrabotannyh_vyazhuschimi_materialami",
    "year": 2024,
    "value": 46.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "oktyabrsky",
    "indicatorId": "bdmo_y48006005_s_usovershenstvovannym_pokrytiem_cementobetonnye_asfaltobetonnye_i_tipa_asfaltobetona_iz_schebnya_i_graviya_obrabotannyh_vyazhuschimi_materialami",
    "year": 2024,
    "value": 322.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "salavat",
    "indicatorId": "bdmo_y48006005_s_usovershenstvovannym_pokrytiem_cementobetonnye_asfaltobetonnye_i_tipa_asfaltobetona_iz_schebnya_i_graviya_obrabotannyh_vyazhuschimi_materialami",
    "year": 2024,
    "value": 126.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "salavatsky",
    "indicatorId": "bdmo_y48006005_s_usovershenstvovannym_pokrytiem_cementobetonnye_asfaltobetonnye_i_tipa_asfaltobetona_iz_schebnya_i_graviya_obrabotannyh_vyazhuschimi_materialami",
    "year": 2024,
    "value": 156.9,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sharansky",
    "indicatorId": "bdmo_y48006005_s_usovershenstvovannym_pokrytiem_cementobetonnye_asfaltobetonnye_i_tipa_asfaltobetona_iz_schebnya_i_graviya_obrabotannyh_vyazhuschimi_materialami",
    "year": 2024,
    "value": 70.9,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sibay",
    "indicatorId": "bdmo_y48006005_s_usovershenstvovannym_pokrytiem_cementobetonnye_asfaltobetonnye_i_tipa_asfaltobetona_iz_schebnya_i_graviya_obrabotannyh_vyazhuschimi_materialami",
    "year": 2024,
    "value": 117.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlibashevsky",
    "indicatorId": "bdmo_y48006005_s_usovershenstvovannym_pokrytiem_cementobetonnye_asfaltobetonnye_i_tipa_asfaltobetona_iz_schebnya_i_graviya_obrabotannyh_vyazhuschimi_materialami",
    "year": 2024,
    "value": 90.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamak",
    "indicatorId": "bdmo_y48006005_s_usovershenstvovannym_pokrytiem_cementobetonnye_asfaltobetonnye_i_tipa_asfaltobetona_iz_schebnya_i_graviya_obrabotannyh_vyazhuschimi_materialami",
    "year": 2024,
    "value": 294.2,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamaksky",
    "indicatorId": "bdmo_y48006005_s_usovershenstvovannym_pokrytiem_cementobetonnye_asfaltobetonnye_i_tipa_asfaltobetona_iz_schebnya_i_graviya_obrabotannyh_vyazhuschimi_materialami",
    "year": 2024,
    "value": 262.2,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "tatyshlinsky",
    "indicatorId": "bdmo_y48006005_s_usovershenstvovannym_pokrytiem_cementobetonnye_asfaltobetonnye_i_tipa_asfaltobetona_iz_schebnya_i_graviya_obrabotannyh_vyazhuschimi_materialami",
    "year": 2024,
    "value": 105.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "tuymazy",
    "indicatorId": "bdmo_y48006005_s_usovershenstvovannym_pokrytiem_cementobetonnye_asfaltobetonnye_i_tipa_asfaltobetona_iz_schebnya_i_graviya_obrabotannyh_vyazhuschimi_materialami",
    "year": 2024,
    "value": 430.2,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "uchaly",
    "indicatorId": "bdmo_y48006005_s_usovershenstvovannym_pokrytiem_cementobetonnye_asfaltobetonnye_i_tipa_asfaltobetona_iz_schebnya_i_graviya_obrabotannyh_vyazhuschimi_materialami",
    "year": 2024,
    "value": 161.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufa",
    "indicatorId": "bdmo_y48006005_s_usovershenstvovannym_pokrytiem_cementobetonnye_asfaltobetonnye_i_tipa_asfaltobetona_iz_schebnya_i_graviya_obrabotannyh_vyazhuschimi_materialami",
    "year": 2024,
    "value": 1583.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufimsky",
    "indicatorId": "bdmo_y48006005_s_usovershenstvovannym_pokrytiem_cementobetonnye_asfaltobetonnye_i_tipa_asfaltobetona_iz_schebnya_i_graviya_obrabotannyh_vyazhuschimi_materialami",
    "year": 2024,
    "value": 622.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "yanaulsky",
    "indicatorId": "bdmo_y48006005_s_usovershenstvovannym_pokrytiem_cementobetonnye_asfaltobetonnye_i_tipa_asfaltobetona_iz_schebnya_i_graviya_obrabotannyh_vyazhuschimi_materialami",
    "year": 2024,
    "value": 192.1,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "zianchurinsky",
    "indicatorId": "bdmo_y48006005_s_usovershenstvovannym_pokrytiem_cementobetonnye_asfaltobetonnye_i_tipa_asfaltobetona_iz_schebnya_i_graviya_obrabotannyh_vyazhuschimi_materialami",
    "year": 2024,
    "value": 197.2,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "zilairsky",
    "indicatorId": "bdmo_y48006005_s_usovershenstvovannym_pokrytiem_cementobetonnye_asfaltobetonnye_i_tipa_asfaltobetona_iz_schebnya_i_graviya_obrabotannyh_vyazhuschimi_materialami",
    "year": 2024,
    "value": 38.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "abzelilovsky",
    "indicatorId": "bdmo_y48006005_vsego",
    "year": 2024,
    "value": 886.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "agidel",
    "indicatorId": "bdmo_y48006005_vsego",
    "year": 2024,
    "value": 44.2,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "alsheevsky",
    "indicatorId": "bdmo_y48006005_vsego",
    "year": 2024,
    "value": 695.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "arkhangelsky",
    "indicatorId": "bdmo_y48006005_vsego",
    "year": 2024,
    "value": 471.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "askinsky",
    "indicatorId": "bdmo_y48006005_vsego",
    "year": 2024,
    "value": 603.2,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "aurgazinsky",
    "indicatorId": "bdmo_y48006005_vsego",
    "year": 2024,
    "value": 724.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "bakalinsky",
    "indicatorId": "bdmo_y48006005_vsego",
    "year": 2024,
    "value": 519.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "baltachevsky",
    "indicatorId": "bdmo_y48006005_vsego",
    "year": 2024,
    "value": 536.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "baymaksky",
    "indicatorId": "bdmo_y48006005_vsego",
    "year": 2024,
    "value": 1161.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "belebeyevsky",
    "indicatorId": "bdmo_y48006005_vsego",
    "year": 2024,
    "value": 658.2,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "belokataysky",
    "indicatorId": "bdmo_y48006005_vsego",
    "year": 2024,
    "value": 402.7,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "beloretsk",
    "indicatorId": "bdmo_y48006005_vsego",
    "year": 2024,
    "value": 1317.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "birsk",
    "indicatorId": "bdmo_y48006005_vsego",
    "year": 2024,
    "value": 568.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "bizhbulyaksky",
    "indicatorId": "bdmo_y48006005_vsego",
    "year": 2024,
    "value": 480.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "blagovarsky",
    "indicatorId": "bdmo_y48006005_vsego",
    "year": 2024,
    "value": 392.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "blagoveshchensky",
    "indicatorId": "bdmo_y48006005_vsego",
    "year": 2024,
    "value": 555.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "buraevsky",
    "indicatorId": "bdmo_y48006005_vsego",
    "year": 2024,
    "value": 633.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "burzyansky",
    "indicatorId": "bdmo_y48006005_vsego",
    "year": 2024,
    "value": 405.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "buzdyaksky",
    "indicatorId": "bdmo_y48006005_vsego",
    "year": 2024,
    "value": 450.1,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "chekmagushevsky",
    "indicatorId": "bdmo_y48006005_vsego",
    "year": 2024,
    "value": 470.9,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "chishminsky",
    "indicatorId": "bdmo_y48006005_vsego",
    "year": 2024,
    "value": 714.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "davlekanovsky",
    "indicatorId": "bdmo_y48006005_vsego",
    "year": 2024,
    "value": 478.9,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "duvansky",
    "indicatorId": "bdmo_y48006005_vsego",
    "year": 2024,
    "value": 458.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "dyurtyulinsky",
    "indicatorId": "bdmo_y48006005_vsego",
    "year": 2024,
    "value": 538.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ermekeyevsky",
    "indicatorId": "bdmo_y48006005_vsego",
    "year": 2024,
    "value": 352.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "fedorovsky",
    "indicatorId": "bdmo_y48006005_vsego",
    "year": 2024,
    "value": 398.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "gafuriysky",
    "indicatorId": "bdmo_y48006005_vsego",
    "year": 2024,
    "value": 708.9,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "iglinsky",
    "indicatorId": "bdmo_y48006005_vsego",
    "year": 2024,
    "value": 1372.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ilishevsky",
    "indicatorId": "bdmo_y48006005_vsego",
    "year": 2024,
    "value": 599.9,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ishimbay",
    "indicatorId": "bdmo_y48006005_vsego",
    "year": 2024,
    "value": 909.9,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kaltasinsky",
    "indicatorId": "bdmo_y48006005_vsego",
    "year": 2024,
    "value": 439.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "karaidelsky",
    "indicatorId": "bdmo_y48006005_vsego",
    "year": 2024,
    "value": 799.9,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "karmaskalinsky",
    "indicatorId": "bdmo_y48006005_vsego",
    "year": 2024,
    "value": 1071.1,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "khaibullinsky",
    "indicatorId": "bdmo_y48006005_vsego",
    "year": 2024,
    "value": 553.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kiginsky",
    "indicatorId": "bdmo_y48006005_vsego",
    "year": 2024,
    "value": 346.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "krasnokamsky",
    "indicatorId": "bdmo_y48006005_vsego",
    "year": 2024,
    "value": 508.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kugarchinsky",
    "indicatorId": "bdmo_y48006005_vsego",
    "year": 2024,
    "value": 526.7,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kumertau",
    "indicatorId": "bdmo_y48006005_vsego",
    "year": 2024,
    "value": 192.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kushnarenkovsky",
    "indicatorId": "bdmo_y48006005_vsego",
    "year": 2024,
    "value": 540.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kuyurgazinsky",
    "indicatorId": "bdmo_y48006005_vsego",
    "year": 2024,
    "value": 424.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "mechetlinsky",
    "indicatorId": "bdmo_y48006005_vsego",
    "year": 2024,
    "value": 386.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "meleuz",
    "indicatorId": "bdmo_y48006005_vsego",
    "year": 2024,
    "value": 745.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "mishkinsky",
    "indicatorId": "bdmo_y48006005_vsego",
    "year": 2024,
    "value": 495.1,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "miyakinsky",
    "indicatorId": "bdmo_y48006005_vsego",
    "year": 2024,
    "value": 500.2,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "neftekamsk",
    "indicatorId": "bdmo_y48006005_vsego",
    "year": 2024,
    "value": 329.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "nurimanovsky",
    "indicatorId": "bdmo_y48006005_vsego",
    "year": 2024,
    "value": 383.7,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "oktyabrsky",
    "indicatorId": "bdmo_y48006005_vsego",
    "year": 2024,
    "value": 322.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "salavat",
    "indicatorId": "bdmo_y48006005_vsego",
    "year": 2024,
    "value": 126.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "salavatsky",
    "indicatorId": "bdmo_y48006005_vsego",
    "year": 2024,
    "value": 561.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sharansky",
    "indicatorId": "bdmo_y48006005_vsego",
    "year": 2024,
    "value": 337.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sibay",
    "indicatorId": "bdmo_y48006005_vsego",
    "year": 2024,
    "value": 243.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlibashevsky",
    "indicatorId": "bdmo_y48006005_vsego",
    "year": 2024,
    "value": 346.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamak",
    "indicatorId": "bdmo_y48006005_vsego",
    "year": 2024,
    "value": 329.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamaksky",
    "indicatorId": "bdmo_y48006005_vsego",
    "year": 2024,
    "value": 753.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "tatyshlinsky",
    "indicatorId": "bdmo_y48006005_vsego",
    "year": 2024,
    "value": 512.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "tuymazy",
    "indicatorId": "bdmo_y48006005_vsego",
    "year": 2024,
    "value": 824.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "uchaly",
    "indicatorId": "bdmo_y48006005_vsego",
    "year": 2024,
    "value": 945.9,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufa",
    "indicatorId": "bdmo_y48006005_vsego",
    "year": 2024,
    "value": 1987.7,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufimsky",
    "indicatorId": "bdmo_y48006005_vsego",
    "year": 2024,
    "value": 1111.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "yanaulsky",
    "indicatorId": "bdmo_y48006005_vsego",
    "year": 2024,
    "value": 829.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "zianchurinsky",
    "indicatorId": "bdmo_y48006005_vsego",
    "year": 2024,
    "value": 545.1,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "zilairsky",
    "indicatorId": "bdmo_y48006005_vsego",
    "year": 2024,
    "value": 433.2,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kumertau",
    "indicatorId": "bdmo_y48006010_avtomobilnye_gazonapolnitelnye_kompressornye_stancii_agnks",
    "year": 2024,
    "value": 1.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "neftekamsk",
    "indicatorId": "bdmo_y48006010_avtomobilnye_gazonapolnitelnye_kompressornye_stancii_agnks",
    "year": 2024,
    "value": 1.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "oktyabrsky",
    "indicatorId": "bdmo_y48006010_avtomobilnye_gazonapolnitelnye_kompressornye_stancii_agnks",
    "year": 2024,
    "value": 2.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "salavat",
    "indicatorId": "bdmo_y48006010_avtomobilnye_gazonapolnitelnye_kompressornye_stancii_agnks",
    "year": 2024,
    "value": 3.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sibay",
    "indicatorId": "bdmo_y48006010_avtomobilnye_gazonapolnitelnye_kompressornye_stancii_agnks",
    "year": 2024,
    "value": 1.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamak",
    "indicatorId": "bdmo_y48006010_avtomobilnye_gazonapolnitelnye_kompressornye_stancii_agnks",
    "year": 2024,
    "value": 2.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufa",
    "indicatorId": "bdmo_y48006010_avtomobilnye_gazonapolnitelnye_kompressornye_stancii_agnks",
    "year": 2024,
    "value": 11.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufimsky",
    "indicatorId": "bdmo_y48006010_avtomobilnye_gazonapolnitelnye_kompressornye_stancii_agnks",
    "year": 2024,
    "value": 1.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "agidel",
    "indicatorId": "bdmo_y48006010_avtomobilnye_gazozapravochnye_stancii_agzs",
    "year": 2024,
    "value": 1.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "alsheevsky",
    "indicatorId": "bdmo_y48006010_avtomobilnye_gazozapravochnye_stancii_agzs",
    "year": 2024,
    "value": 3.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "askinsky",
    "indicatorId": "bdmo_y48006010_avtomobilnye_gazozapravochnye_stancii_agzs",
    "year": 2024,
    "value": 1.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "baymaksky",
    "indicatorId": "bdmo_y48006010_avtomobilnye_gazozapravochnye_stancii_agzs",
    "year": 2024,
    "value": 2.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "belebeyevsky",
    "indicatorId": "bdmo_y48006010_avtomobilnye_gazozapravochnye_stancii_agzs",
    "year": 2024,
    "value": 3.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "birsk",
    "indicatorId": "bdmo_y48006010_avtomobilnye_gazozapravochnye_stancii_agzs",
    "year": 2024,
    "value": 3.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "blagovarsky",
    "indicatorId": "bdmo_y48006010_avtomobilnye_gazozapravochnye_stancii_agzs",
    "year": 2024,
    "value": 1.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "buraevsky",
    "indicatorId": "bdmo_y48006010_avtomobilnye_gazozapravochnye_stancii_agzs",
    "year": 2024,
    "value": 3.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "buzdyaksky",
    "indicatorId": "bdmo_y48006010_avtomobilnye_gazozapravochnye_stancii_agzs",
    "year": 2024,
    "value": 1.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "davlekanovsky",
    "indicatorId": "bdmo_y48006010_avtomobilnye_gazozapravochnye_stancii_agzs",
    "year": 2024,
    "value": 1.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "dyurtyulinsky",
    "indicatorId": "bdmo_y48006010_avtomobilnye_gazozapravochnye_stancii_agzs",
    "year": 2024,
    "value": 2.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "gafuriysky",
    "indicatorId": "bdmo_y48006010_avtomobilnye_gazozapravochnye_stancii_agzs",
    "year": 2024,
    "value": 1.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ishimbay",
    "indicatorId": "bdmo_y48006010_avtomobilnye_gazozapravochnye_stancii_agzs",
    "year": 2024,
    "value": 2.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kumertau",
    "indicatorId": "bdmo_y48006010_avtomobilnye_gazozapravochnye_stancii_agzs",
    "year": 2024,
    "value": 6.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "miyakinsky",
    "indicatorId": "bdmo_y48006010_avtomobilnye_gazozapravochnye_stancii_agzs",
    "year": 2024,
    "value": 1.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "neftekamsk",
    "indicatorId": "bdmo_y48006010_avtomobilnye_gazozapravochnye_stancii_agzs",
    "year": 2024,
    "value": 4.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "oktyabrsky",
    "indicatorId": "bdmo_y48006010_avtomobilnye_gazozapravochnye_stancii_agzs",
    "year": 2024,
    "value": 11.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "salavat",
    "indicatorId": "bdmo_y48006010_avtomobilnye_gazozapravochnye_stancii_agzs",
    "year": 2024,
    "value": 3.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sibay",
    "indicatorId": "bdmo_y48006010_avtomobilnye_gazozapravochnye_stancii_agzs",
    "year": 2024,
    "value": 3.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamak",
    "indicatorId": "bdmo_y48006010_avtomobilnye_gazozapravochnye_stancii_agzs",
    "year": 2024,
    "value": 16.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "tuymazy",
    "indicatorId": "bdmo_y48006010_avtomobilnye_gazozapravochnye_stancii_agzs",
    "year": 2024,
    "value": 2.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "uchaly",
    "indicatorId": "bdmo_y48006010_avtomobilnye_gazozapravochnye_stancii_agzs",
    "year": 2024,
    "value": 3.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufa",
    "indicatorId": "bdmo_y48006010_avtomobilnye_gazozapravochnye_stancii_agzs",
    "year": 2024,
    "value": 7.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufimsky",
    "indicatorId": "bdmo_y48006010_avtomobilnye_gazozapravochnye_stancii_agzs",
    "year": 2024,
    "value": 2.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "agidel",
    "indicatorId": "bdmo_y48006010_elektrozapravochnye_stancii_ezs",
    "year": 2024,
    "value": 1.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "neftekamsk",
    "indicatorId": "bdmo_y48006010_elektrozapravochnye_stancii_ezs",
    "year": 2024,
    "value": 6.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "oktyabrsky",
    "indicatorId": "bdmo_y48006010_elektrozapravochnye_stancii_ezs",
    "year": 2024,
    "value": 4.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "salavat",
    "indicatorId": "bdmo_y48006010_elektrozapravochnye_stancii_ezs",
    "year": 2024,
    "value": 2.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sibay",
    "indicatorId": "bdmo_y48006010_elektrozapravochnye_stancii_ezs",
    "year": 2024,
    "value": 1.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamak",
    "indicatorId": "bdmo_y48006010_elektrozapravochnye_stancii_ezs",
    "year": 2024,
    "value": 7.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufa",
    "indicatorId": "bdmo_y48006010_elektrozapravochnye_stancii_ezs",
    "year": 2024,
    "value": 14.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "arkhangelsky",
    "indicatorId": "bdmo_y48006010_mnogotoplivnye_zapravochnye_stancii_mtzs",
    "year": 2024,
    "value": 1.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "askinsky",
    "indicatorId": "bdmo_y48006010_mnogotoplivnye_zapravochnye_stancii_mtzs",
    "year": 2024,
    "value": 1.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "aurgazinsky",
    "indicatorId": "bdmo_y48006010_mnogotoplivnye_zapravochnye_stancii_mtzs",
    "year": 2024,
    "value": 1.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "baymaksky",
    "indicatorId": "bdmo_y48006010_mnogotoplivnye_zapravochnye_stancii_mtzs",
    "year": 2024,
    "value": 1.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "belebeyevsky",
    "indicatorId": "bdmo_y48006010_mnogotoplivnye_zapravochnye_stancii_mtzs",
    "year": 2024,
    "value": 4.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "beloretsk",
    "indicatorId": "bdmo_y48006010_mnogotoplivnye_zapravochnye_stancii_mtzs",
    "year": 2024,
    "value": 6.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "blagoveshchensky",
    "indicatorId": "bdmo_y48006010_mnogotoplivnye_zapravochnye_stancii_mtzs",
    "year": 2024,
    "value": 5.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "buraevsky",
    "indicatorId": "bdmo_y48006010_mnogotoplivnye_zapravochnye_stancii_mtzs",
    "year": 2024,
    "value": 1.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "davlekanovsky",
    "indicatorId": "bdmo_y48006010_mnogotoplivnye_zapravochnye_stancii_mtzs",
    "year": 2024,
    "value": 1.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "dyurtyulinsky",
    "indicatorId": "bdmo_y48006010_mnogotoplivnye_zapravochnye_stancii_mtzs",
    "year": 2024,
    "value": 1.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "gafuriysky",
    "indicatorId": "bdmo_y48006010_mnogotoplivnye_zapravochnye_stancii_mtzs",
    "year": 2024,
    "value": 1.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ilishevsky",
    "indicatorId": "bdmo_y48006010_mnogotoplivnye_zapravochnye_stancii_mtzs",
    "year": 2024,
    "value": 1.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ishimbay",
    "indicatorId": "bdmo_y48006010_mnogotoplivnye_zapravochnye_stancii_mtzs",
    "year": 2024,
    "value": 10.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kuyurgazinsky",
    "indicatorId": "bdmo_y48006010_mnogotoplivnye_zapravochnye_stancii_mtzs",
    "year": 2024,
    "value": 3.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "meleuz",
    "indicatorId": "bdmo_y48006010_mnogotoplivnye_zapravochnye_stancii_mtzs",
    "year": 2024,
    "value": 3.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "neftekamsk",
    "indicatorId": "bdmo_y48006010_mnogotoplivnye_zapravochnye_stancii_mtzs",
    "year": 2024,
    "value": 5.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "salavatsky",
    "indicatorId": "bdmo_y48006010_mnogotoplivnye_zapravochnye_stancii_mtzs",
    "year": 2024,
    "value": 2.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sibay",
    "indicatorId": "bdmo_y48006010_mnogotoplivnye_zapravochnye_stancii_mtzs",
    "year": 2024,
    "value": 3.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlibashevsky",
    "indicatorId": "bdmo_y48006010_mnogotoplivnye_zapravochnye_stancii_mtzs",
    "year": 2024,
    "value": 1.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamak",
    "indicatorId": "bdmo_y48006010_mnogotoplivnye_zapravochnye_stancii_mtzs",
    "year": 2024,
    "value": 2.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufa",
    "indicatorId": "bdmo_y48006010_mnogotoplivnye_zapravochnye_stancii_mtzs",
    "year": 2024,
    "value": 84.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufimsky",
    "indicatorId": "bdmo_y48006010_mnogotoplivnye_zapravochnye_stancii_mtzs",
    "year": 2024,
    "value": 6.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "zilairsky",
    "indicatorId": "bdmo_y48006010_mnogotoplivnye_zapravochnye_stancii_mtzs",
    "year": 2024,
    "value": 1.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "abzelilovsky",
    "indicatorId": "bdmo_y48006010_vsego",
    "year": 2024,
    "value": 2.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "agidel",
    "indicatorId": "bdmo_y48006010_vsego",
    "year": 2024,
    "value": 3.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "alsheevsky",
    "indicatorId": "bdmo_y48006010_vsego",
    "year": 2024,
    "value": 7.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "arkhangelsky",
    "indicatorId": "bdmo_y48006010_vsego",
    "year": 2024,
    "value": 2.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "askinsky",
    "indicatorId": "bdmo_y48006010_vsego",
    "year": 2024,
    "value": 2.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "aurgazinsky",
    "indicatorId": "bdmo_y48006010_vsego",
    "year": 2024,
    "value": 5.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "bakalinsky",
    "indicatorId": "bdmo_y48006010_vsego",
    "year": 2024,
    "value": 1.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "baymaksky",
    "indicatorId": "bdmo_y48006010_vsego",
    "year": 2024,
    "value": 3.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "belebeyevsky",
    "indicatorId": "bdmo_y48006010_vsego",
    "year": 2024,
    "value": 7.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "beloretsk",
    "indicatorId": "bdmo_y48006010_vsego",
    "year": 2024,
    "value": 12.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "birsk",
    "indicatorId": "bdmo_y48006010_vsego",
    "year": 2024,
    "value": 9.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "blagovarsky",
    "indicatorId": "bdmo_y48006010_vsego",
    "year": 2024,
    "value": 2.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "blagoveshchensky",
    "indicatorId": "bdmo_y48006010_vsego",
    "year": 2024,
    "value": 8.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "buraevsky",
    "indicatorId": "bdmo_y48006010_vsego",
    "year": 2024,
    "value": 8.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "buzdyaksky",
    "indicatorId": "bdmo_y48006010_vsego",
    "year": 2024,
    "value": 1.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "chekmagushevsky",
    "indicatorId": "bdmo_y48006010_vsego",
    "year": 2024,
    "value": 1.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "chishminsky",
    "indicatorId": "bdmo_y48006010_vsego",
    "year": 2024,
    "value": 1.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "davlekanovsky",
    "indicatorId": "bdmo_y48006010_vsego",
    "year": 2024,
    "value": 2.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "duvansky",
    "indicatorId": "bdmo_y48006010_vsego",
    "year": 2024,
    "value": 1.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "dyurtyulinsky",
    "indicatorId": "bdmo_y48006010_vsego",
    "year": 2024,
    "value": 5.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "gafuriysky",
    "indicatorId": "bdmo_y48006010_vsego",
    "year": 2024,
    "value": 2.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "iglinsky",
    "indicatorId": "bdmo_y48006010_vsego",
    "year": 2024,
    "value": 2.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ilishevsky",
    "indicatorId": "bdmo_y48006010_vsego",
    "year": 2024,
    "value": 2.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ishimbay",
    "indicatorId": "bdmo_y48006010_vsego",
    "year": 2024,
    "value": 12.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "karmaskalinsky",
    "indicatorId": "bdmo_y48006010_vsego",
    "year": 2024,
    "value": 3.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "khaibullinsky",
    "indicatorId": "bdmo_y48006010_vsego",
    "year": 2024,
    "value": 1.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kugarchinsky",
    "indicatorId": "bdmo_y48006010_vsego",
    "year": 2024,
    "value": 1.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kumertau",
    "indicatorId": "bdmo_y48006010_vsego",
    "year": 2024,
    "value": 12.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kuyurgazinsky",
    "indicatorId": "bdmo_y48006010_vsego",
    "year": 2024,
    "value": 3.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "mechetlinsky",
    "indicatorId": "bdmo_y48006010_vsego",
    "year": 2024,
    "value": 1.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "meleuz",
    "indicatorId": "bdmo_y48006010_vsego",
    "year": 2024,
    "value": 10.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "miyakinsky",
    "indicatorId": "bdmo_y48006010_vsego",
    "year": 2024,
    "value": 6.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "neftekamsk",
    "indicatorId": "bdmo_y48006010_vsego",
    "year": 2024,
    "value": 22.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "nurimanovsky",
    "indicatorId": "bdmo_y48006010_vsego",
    "year": 2024,
    "value": 2.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "oktyabrsky",
    "indicatorId": "bdmo_y48006010_vsego",
    "year": 2024,
    "value": 39.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "salavat",
    "indicatorId": "bdmo_y48006010_vsego",
    "year": 2024,
    "value": 24.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "salavatsky",
    "indicatorId": "bdmo_y48006010_vsego",
    "year": 2024,
    "value": 2.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sharansky",
    "indicatorId": "bdmo_y48006010_vsego",
    "year": 2024,
    "value": 1.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sibay",
    "indicatorId": "bdmo_y48006010_vsego",
    "year": 2024,
    "value": 15.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlibashevsky",
    "indicatorId": "bdmo_y48006010_vsego",
    "year": 2024,
    "value": 2.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamak",
    "indicatorId": "bdmo_y48006010_vsego",
    "year": 2024,
    "value": 49.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "tuymazy",
    "indicatorId": "bdmo_y48006010_vsego",
    "year": 2024,
    "value": 22.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "uchaly",
    "indicatorId": "bdmo_y48006010_vsego",
    "year": 2024,
    "value": 9.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufa",
    "indicatorId": "bdmo_y48006010_vsego",
    "year": 2024,
    "value": 116.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufimsky",
    "indicatorId": "bdmo_y48006010_vsego",
    "year": 2024,
    "value": 9.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "zilairsky",
    "indicatorId": "bdmo_y48006010_vsego",
    "year": 2024,
    "value": 1.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "abzelilovsky",
    "indicatorId": "bdmo_y48007017",
    "year": 2024,
    "value": 4.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "alsheevsky",
    "indicatorId": "bdmo_y48007017",
    "year": 2024,
    "value": 4.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "aurgazinsky",
    "indicatorId": "bdmo_y48007017",
    "year": 2024,
    "value": 11.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "bakalinsky",
    "indicatorId": "bdmo_y48007017",
    "year": 2024,
    "value": 3.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "baltachevsky",
    "indicatorId": "bdmo_y48007017",
    "year": 2024,
    "value": 11.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "belebeyevsky",
    "indicatorId": "bdmo_y48007017",
    "year": 2024,
    "value": 97.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "birsk",
    "indicatorId": "bdmo_y48007017",
    "year": 2024,
    "value": 20.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "bizhbulyaksky",
    "indicatorId": "bdmo_y48007017",
    "year": 2024,
    "value": 53.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "blagovarsky",
    "indicatorId": "bdmo_y48007017",
    "year": 2024,
    "value": 117.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "blagoveshchensky",
    "indicatorId": "bdmo_y48007017",
    "year": 2024,
    "value": 45.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "buzdyaksky",
    "indicatorId": "bdmo_y48007017",
    "year": 2024,
    "value": 117.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "chekmagushevsky",
    "indicatorId": "bdmo_y48007017",
    "year": 2024,
    "value": 74.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "chishminsky",
    "indicatorId": "bdmo_y48007017",
    "year": 2024,
    "value": 4.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "davlekanovsky",
    "indicatorId": "bdmo_y48007017",
    "year": 2024,
    "value": 4.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "duvansky",
    "indicatorId": "bdmo_y48007017",
    "year": 2024,
    "value": 122.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "dyurtyulinsky",
    "indicatorId": "bdmo_y48007017",
    "year": 2024,
    "value": 282.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ermekeyevsky",
    "indicatorId": "bdmo_y48007017",
    "year": 2024,
    "value": 25.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "fedorovsky",
    "indicatorId": "bdmo_y48007017",
    "year": 2024,
    "value": 9.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "gafuriysky",
    "indicatorId": "bdmo_y48007017",
    "year": 2024,
    "value": 4.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "iglinsky",
    "indicatorId": "bdmo_y48007017",
    "year": 2024,
    "value": 8.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ilishevsky",
    "indicatorId": "bdmo_y48007017",
    "year": 2024,
    "value": 30.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kugarchinsky",
    "indicatorId": "bdmo_y48007017",
    "year": 2024,
    "value": 9.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kushnarenkovsky",
    "indicatorId": "bdmo_y48007017",
    "year": 2024,
    "value": 15.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kuyurgazinsky",
    "indicatorId": "bdmo_y48007017",
    "year": 2024,
    "value": 26.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "mechetlinsky",
    "indicatorId": "bdmo_y48007017",
    "year": 2024,
    "value": 27.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "meleuz",
    "indicatorId": "bdmo_y48007017",
    "year": 2024,
    "value": 52.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "miyakinsky",
    "indicatorId": "bdmo_y48007017",
    "year": 2024,
    "value": 11.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlibashevsky",
    "indicatorId": "bdmo_y48007017",
    "year": 2024,
    "value": 7.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamaksky",
    "indicatorId": "bdmo_y48007017",
    "year": 2024,
    "value": 245.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "tatyshlinsky",
    "indicatorId": "bdmo_y48007017",
    "year": 2024,
    "value": 25.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "tuymazy",
    "indicatorId": "bdmo_y48007017",
    "year": 2024,
    "value": 37.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "uchaly",
    "indicatorId": "bdmo_y48007017",
    "year": 2024,
    "value": 52.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufimsky",
    "indicatorId": "bdmo_y48007017",
    "year": 2024,
    "value": 49.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "yanaulsky",
    "indicatorId": "bdmo_y48007017",
    "year": 2024,
    "value": 38.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "abzelilovsky",
    "indicatorId": "bdmo_y48007018",
    "year": 2024,
    "value": 2288.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "agidel",
    "indicatorId": "bdmo_y48007018",
    "year": 2024,
    "value": 0.9,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "alsheevsky",
    "indicatorId": "bdmo_y48007018",
    "year": 2024,
    "value": 999999999.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "arkhangelsky",
    "indicatorId": "bdmo_y48007018",
    "year": 2024,
    "value": 2.7,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "askinsky",
    "indicatorId": "bdmo_y48007018",
    "year": 2024,
    "value": 455.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "aurgazinsky",
    "indicatorId": "bdmo_y48007018",
    "year": 2024,
    "value": 9884.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "bakalinsky",
    "indicatorId": "bdmo_y48007018",
    "year": 2024,
    "value": 999999999.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "baltachevsky",
    "indicatorId": "bdmo_y48007018",
    "year": 2024,
    "value": 3685.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "baymaksky",
    "indicatorId": "bdmo_y48007018",
    "year": 2024,
    "value": 999999999.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "belebeyevsky",
    "indicatorId": "bdmo_y48007018",
    "year": 2024,
    "value": 999999999.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "belokataysky",
    "indicatorId": "bdmo_y48007018",
    "year": 2024,
    "value": 9859.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "beloretsk",
    "indicatorId": "bdmo_y48007018",
    "year": 2024,
    "value": 6977.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "birsk",
    "indicatorId": "bdmo_y48007018",
    "year": 2024,
    "value": 100.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "bizhbulyaksky",
    "indicatorId": "bdmo_y48007018",
    "year": 2024,
    "value": 11404.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "blagovarsky",
    "indicatorId": "bdmo_y48007018",
    "year": 2024,
    "value": 2953.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "blagoveshchensky",
    "indicatorId": "bdmo_y48007018",
    "year": 2024,
    "value": 5108.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "buraevsky",
    "indicatorId": "bdmo_y48007018",
    "year": 2024,
    "value": 6.2,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "burzyansky",
    "indicatorId": "bdmo_y48007018",
    "year": 2024,
    "value": 4.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "buzdyaksky",
    "indicatorId": "bdmo_y48007018",
    "year": 2024,
    "value": 1885.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "chekmagushevsky",
    "indicatorId": "bdmo_y48007018",
    "year": 2024,
    "value": 999999999.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "chishminsky",
    "indicatorId": "bdmo_y48007018",
    "year": 2024,
    "value": 33.1,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "davlekanovsky",
    "indicatorId": "bdmo_y48007018",
    "year": 2024,
    "value": 7.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "duvansky",
    "indicatorId": "bdmo_y48007018",
    "year": 2024,
    "value": 5976.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "dyurtyulinsky",
    "indicatorId": "bdmo_y48007018",
    "year": 2024,
    "value": 6569.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ermekeyevsky",
    "indicatorId": "bdmo_y48007018",
    "year": 2024,
    "value": 999999999.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "fedorovsky",
    "indicatorId": "bdmo_y48007018",
    "year": 2024,
    "value": 20601.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "gafuriysky",
    "indicatorId": "bdmo_y48007018",
    "year": 2024,
    "value": 999999999.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "iglinsky",
    "indicatorId": "bdmo_y48007018",
    "year": 2024,
    "value": 572.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ilishevsky",
    "indicatorId": "bdmo_y48007018",
    "year": 2024,
    "value": 8268.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ishimbay",
    "indicatorId": "bdmo_y48007018",
    "year": 2024,
    "value": 1.1,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kaltasinsky",
    "indicatorId": "bdmo_y48007018",
    "year": 2024,
    "value": 4.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "karaidelsky",
    "indicatorId": "bdmo_y48007018",
    "year": 2024,
    "value": 999999999.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "karmaskalinsky",
    "indicatorId": "bdmo_y48007018",
    "year": 2024,
    "value": 1018.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "khaibullinsky",
    "indicatorId": "bdmo_y48007018",
    "year": 2024,
    "value": 401.2,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kiginsky",
    "indicatorId": "bdmo_y48007018",
    "year": 2024,
    "value": 137.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "krasnokamsky",
    "indicatorId": "bdmo_y48007018",
    "year": 2024,
    "value": 6.1,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kugarchinsky",
    "indicatorId": "bdmo_y48007018",
    "year": 2024,
    "value": 355.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kumertau",
    "indicatorId": "bdmo_y48007018",
    "year": 2024,
    "value": 999999999.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kushnarenkovsky",
    "indicatorId": "bdmo_y48007018",
    "year": 2024,
    "value": 14195.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kuyurgazinsky",
    "indicatorId": "bdmo_y48007018",
    "year": 2024,
    "value": 10575.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "mechetlinsky",
    "indicatorId": "bdmo_y48007018",
    "year": 2024,
    "value": 4342.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "meleuz",
    "indicatorId": "bdmo_y48007018",
    "year": 2024,
    "value": 2944.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "mishkinsky",
    "indicatorId": "bdmo_y48007018",
    "year": 2024,
    "value": 11192.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "miyakinsky",
    "indicatorId": "bdmo_y48007018",
    "year": 2024,
    "value": 2037.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "neftekamsk",
    "indicatorId": "bdmo_y48007018",
    "year": 2024,
    "value": 27.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "nurimanovsky",
    "indicatorId": "bdmo_y48007018",
    "year": 2024,
    "value": 1091.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "oktyabrsky",
    "indicatorId": "bdmo_y48007018",
    "year": 2024,
    "value": 148.2,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "salavat",
    "indicatorId": "bdmo_y48007018",
    "year": 2024,
    "value": 88.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "salavatsky",
    "indicatorId": "bdmo_y48007018",
    "year": 2024,
    "value": 44.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sharansky",
    "indicatorId": "bdmo_y48007018",
    "year": 2024,
    "value": 999999999.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sibay",
    "indicatorId": "bdmo_y48007018",
    "year": 2024,
    "value": 396.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlibashevsky",
    "indicatorId": "bdmo_y48007018",
    "year": 2024,
    "value": 815.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamak",
    "indicatorId": "bdmo_y48007018",
    "year": 2024,
    "value": 999999999.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamaksky",
    "indicatorId": "bdmo_y48007018",
    "year": 2024,
    "value": 13355.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "tatyshlinsky",
    "indicatorId": "bdmo_y48007018",
    "year": 2024,
    "value": 8.2,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "tuymazy",
    "indicatorId": "bdmo_y48007018",
    "year": 2024,
    "value": 60.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "uchaly",
    "indicatorId": "bdmo_y48007018",
    "year": 2024,
    "value": 2631.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufa",
    "indicatorId": "bdmo_y48007018",
    "year": 2024,
    "value": 100.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufimsky",
    "indicatorId": "bdmo_y48007018",
    "year": 2024,
    "value": 1521.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "yanaulsky",
    "indicatorId": "bdmo_y48007018",
    "year": 2024,
    "value": 999999999.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "zianchurinsky",
    "indicatorId": "bdmo_y48007018",
    "year": 2024,
    "value": 13.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "zilairsky",
    "indicatorId": "bdmo_y48007018",
    "year": 2024,
    "value": 999999999.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "abzelilovsky",
    "indicatorId": "bdmo_y48007019",
    "year": 2024,
    "value": 1946.1,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "agidel",
    "indicatorId": "bdmo_y48007019",
    "year": 2024,
    "value": 422.1,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "alsheevsky",
    "indicatorId": "bdmo_y48007019",
    "year": 2024,
    "value": 2454.1,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "arkhangelsky",
    "indicatorId": "bdmo_y48007019",
    "year": 2024,
    "value": 46487.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "askinsky",
    "indicatorId": "bdmo_y48007019",
    "year": 2024,
    "value": 999999999.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "aurgazinsky",
    "indicatorId": "bdmo_y48007019",
    "year": 2024,
    "value": 27698.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "bakalinsky",
    "indicatorId": "bdmo_y48007019",
    "year": 2024,
    "value": 999999999.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "baltachevsky",
    "indicatorId": "bdmo_y48007019",
    "year": 2024,
    "value": 1.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "baymaksky",
    "indicatorId": "bdmo_y48007019",
    "year": 2024,
    "value": 30810.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "belebeyevsky",
    "indicatorId": "bdmo_y48007019",
    "year": 2024,
    "value": 999999999.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "belokataysky",
    "indicatorId": "bdmo_y48007019",
    "year": 2024,
    "value": 4482.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "beloretsk",
    "indicatorId": "bdmo_y48007019",
    "year": 2024,
    "value": 3917.2,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "birsk",
    "indicatorId": "bdmo_y48007019",
    "year": 2024,
    "value": 999999999.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "bizhbulyaksky",
    "indicatorId": "bdmo_y48007019",
    "year": 2024,
    "value": 53230.2,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "blagovarsky",
    "indicatorId": "bdmo_y48007019",
    "year": 2024,
    "value": 3386.7,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "blagoveshchensky",
    "indicatorId": "bdmo_y48007019",
    "year": 2024,
    "value": 999999999.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "buraevsky",
    "indicatorId": "bdmo_y48007019",
    "year": 2024,
    "value": 1394.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "burzyansky",
    "indicatorId": "bdmo_y48007019",
    "year": 2024,
    "value": 752.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "buzdyaksky",
    "indicatorId": "bdmo_y48007019",
    "year": 2024,
    "value": 36756.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "chekmagushevsky",
    "indicatorId": "bdmo_y48007019",
    "year": 2024,
    "value": 7662.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "chishminsky",
    "indicatorId": "bdmo_y48007019",
    "year": 2024,
    "value": 999999999.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "davlekanovsky",
    "indicatorId": "bdmo_y48007019",
    "year": 2024,
    "value": 295165.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "duvansky",
    "indicatorId": "bdmo_y48007019",
    "year": 2024,
    "value": 1.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "dyurtyulinsky",
    "indicatorId": "bdmo_y48007019",
    "year": 2024,
    "value": 501150.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ermekeyevsky",
    "indicatorId": "bdmo_y48007019",
    "year": 2024,
    "value": 556.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "fedorovsky",
    "indicatorId": "bdmo_y48007019",
    "year": 2024,
    "value": 324.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "gafuriysky",
    "indicatorId": "bdmo_y48007019",
    "year": 2024,
    "value": 999999999.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "iglinsky",
    "indicatorId": "bdmo_y48007019",
    "year": 2024,
    "value": 198.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ilishevsky",
    "indicatorId": "bdmo_y48007019",
    "year": 2024,
    "value": 7515.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ishimbay",
    "indicatorId": "bdmo_y48007019",
    "year": 2024,
    "value": 11600.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kaltasinsky",
    "indicatorId": "bdmo_y48007019",
    "year": 2024,
    "value": 999999999.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "karaidelsky",
    "indicatorId": "bdmo_y48007019",
    "year": 2024,
    "value": 999999999.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "karmaskalinsky",
    "indicatorId": "bdmo_y48007019",
    "year": 2024,
    "value": 5170.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "khaibullinsky",
    "indicatorId": "bdmo_y48007019",
    "year": 2024,
    "value": 1442.1,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kiginsky",
    "indicatorId": "bdmo_y48007019",
    "year": 2024,
    "value": 2081.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "krasnokamsky",
    "indicatorId": "bdmo_y48007019",
    "year": 2024,
    "value": 176513.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kugarchinsky",
    "indicatorId": "bdmo_y48007019",
    "year": 2024,
    "value": 11463.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kumertau",
    "indicatorId": "bdmo_y48007019",
    "year": 2024,
    "value": 14.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kushnarenkovsky",
    "indicatorId": "bdmo_y48007019",
    "year": 2024,
    "value": 10981.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kuyurgazinsky",
    "indicatorId": "bdmo_y48007019",
    "year": 2024,
    "value": 25046.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "mechetlinsky",
    "indicatorId": "bdmo_y48007019",
    "year": 2024,
    "value": 3580.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "meleuz",
    "indicatorId": "bdmo_y48007019",
    "year": 2024,
    "value": 253488.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "mishkinsky",
    "indicatorId": "bdmo_y48007019",
    "year": 2024,
    "value": 999999999.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "miyakinsky",
    "indicatorId": "bdmo_y48007019",
    "year": 2024,
    "value": 68077.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "neftekamsk",
    "indicatorId": "bdmo_y48007019",
    "year": 2024,
    "value": 48.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "nurimanovsky",
    "indicatorId": "bdmo_y48007019",
    "year": 2024,
    "value": 2250.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "oktyabrsky",
    "indicatorId": "bdmo_y48007019",
    "year": 2024,
    "value": 3071.1,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "salavat",
    "indicatorId": "bdmo_y48007019",
    "year": 2024,
    "value": 32.1,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "salavatsky",
    "indicatorId": "bdmo_y48007019",
    "year": 2024,
    "value": 15670.2,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sharansky",
    "indicatorId": "bdmo_y48007019",
    "year": 2024,
    "value": 999999999.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sibay",
    "indicatorId": "bdmo_y48007019",
    "year": 2024,
    "value": 2900.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlibashevsky",
    "indicatorId": "bdmo_y48007019",
    "year": 2024,
    "value": 35015.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamak",
    "indicatorId": "bdmo_y48007019",
    "year": 2024,
    "value": 11614.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamaksky",
    "indicatorId": "bdmo_y48007019",
    "year": 2024,
    "value": 999999999.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "tatyshlinsky",
    "indicatorId": "bdmo_y48007019",
    "year": 2024,
    "value": 216.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "tuymazy",
    "indicatorId": "bdmo_y48007019",
    "year": 2024,
    "value": 1632.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "uchaly",
    "indicatorId": "bdmo_y48007019",
    "year": 2024,
    "value": 4352.7,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufa",
    "indicatorId": "bdmo_y48007019",
    "year": 2024,
    "value": 5272.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufimsky",
    "indicatorId": "bdmo_y48007019",
    "year": 2024,
    "value": 4087.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "yanaulsky",
    "indicatorId": "bdmo_y48007019",
    "year": 2024,
    "value": 1813.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "zianchurinsky",
    "indicatorId": "bdmo_y48007019",
    "year": 2024,
    "value": 39124.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "zilairsky",
    "indicatorId": "bdmo_y48007019",
    "year": 2024,
    "value": 1137.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "abzelilovsky",
    "indicatorId": "bdmo_y48007020",
    "year": 2024,
    "value": 2720.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "agidel",
    "indicatorId": "bdmo_y48007020",
    "year": 2024,
    "value": 180.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "alsheevsky",
    "indicatorId": "bdmo_y48007020",
    "year": 2024,
    "value": 4862.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "arkhangelsky",
    "indicatorId": "bdmo_y48007020",
    "year": 2024,
    "value": 417.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "askinsky",
    "indicatorId": "bdmo_y48007020",
    "year": 2024,
    "value": 8.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "aurgazinsky",
    "indicatorId": "bdmo_y48007020",
    "year": 2024,
    "value": 26346.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "bakalinsky",
    "indicatorId": "bdmo_y48007020",
    "year": 2024,
    "value": 730.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "baltachevsky",
    "indicatorId": "bdmo_y48007020",
    "year": 2024,
    "value": 788.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "baymaksky",
    "indicatorId": "bdmo_y48007020",
    "year": 2024,
    "value": 19211.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "belebeyevsky",
    "indicatorId": "bdmo_y48007020",
    "year": 2024,
    "value": 975.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "belokataysky",
    "indicatorId": "bdmo_y48007020",
    "year": 2024,
    "value": 21.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "beloretsk",
    "indicatorId": "bdmo_y48007020",
    "year": 2024,
    "value": 12788.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "birsk",
    "indicatorId": "bdmo_y48007020",
    "year": 2024,
    "value": 1212.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "bizhbulyaksky",
    "indicatorId": "bdmo_y48007020",
    "year": 2024,
    "value": 441.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "blagovarsky",
    "indicatorId": "bdmo_y48007020",
    "year": 2024,
    "value": 45.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "blagoveshchensky",
    "indicatorId": "bdmo_y48007020",
    "year": 2024,
    "value": 7538.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "buraevsky",
    "indicatorId": "bdmo_y48007020",
    "year": 2024,
    "value": 26606.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "burzyansky",
    "indicatorId": "bdmo_y48007020",
    "year": 2024,
    "value": 4978.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "buzdyaksky",
    "indicatorId": "bdmo_y48007020",
    "year": 2024,
    "value": 80106.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "chekmagushevsky",
    "indicatorId": "bdmo_y48007020",
    "year": 2024,
    "value": 505.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "chishminsky",
    "indicatorId": "bdmo_y48007020",
    "year": 2024,
    "value": 4848.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "davlekanovsky",
    "indicatorId": "bdmo_y48007020",
    "year": 2024,
    "value": 347.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "duvansky",
    "indicatorId": "bdmo_y48007020",
    "year": 2024,
    "value": 5082.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "dyurtyulinsky",
    "indicatorId": "bdmo_y48007020",
    "year": 2024,
    "value": 101817.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ermekeyevsky",
    "indicatorId": "bdmo_y48007020",
    "year": 2024,
    "value": 485.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "fedorovsky",
    "indicatorId": "bdmo_y48007020",
    "year": 2024,
    "value": 992.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "gafuriysky",
    "indicatorId": "bdmo_y48007020",
    "year": 2024,
    "value": 9528.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "iglinsky",
    "indicatorId": "bdmo_y48007020",
    "year": 2024,
    "value": 3729.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ilishevsky",
    "indicatorId": "bdmo_y48007020",
    "year": 2024,
    "value": 34300.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ishimbay",
    "indicatorId": "bdmo_y48007020",
    "year": 2024,
    "value": 7567.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kaltasinsky",
    "indicatorId": "bdmo_y48007020",
    "year": 2024,
    "value": 663.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "karaidelsky",
    "indicatorId": "bdmo_y48007020",
    "year": 2024,
    "value": 7019.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "karmaskalinsky",
    "indicatorId": "bdmo_y48007020",
    "year": 2024,
    "value": 18667.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "khaibullinsky",
    "indicatorId": "bdmo_y48007020",
    "year": 2024,
    "value": 15367.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kiginsky",
    "indicatorId": "bdmo_y48007020",
    "year": 2024,
    "value": 119.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "krasnokamsky",
    "indicatorId": "bdmo_y48007020",
    "year": 2024,
    "value": 19051.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kugarchinsky",
    "indicatorId": "bdmo_y48007020",
    "year": 2024,
    "value": 2443.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kumertau",
    "indicatorId": "bdmo_y48007020",
    "year": 2024,
    "value": 720.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kushnarenkovsky",
    "indicatorId": "bdmo_y48007020",
    "year": 2024,
    "value": 47937.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kuyurgazinsky",
    "indicatorId": "bdmo_y48007020",
    "year": 2024,
    "value": 441.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "mechetlinsky",
    "indicatorId": "bdmo_y48007020",
    "year": 2024,
    "value": 5206.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "meleuz",
    "indicatorId": "bdmo_y48007020",
    "year": 2024,
    "value": 1470.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "mishkinsky",
    "indicatorId": "bdmo_y48007020",
    "year": 2024,
    "value": 266.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "miyakinsky",
    "indicatorId": "bdmo_y48007020",
    "year": 2024,
    "value": 7702.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "neftekamsk",
    "indicatorId": "bdmo_y48007020",
    "year": 2024,
    "value": 2260.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "nurimanovsky",
    "indicatorId": "bdmo_y48007020",
    "year": 2024,
    "value": 15425.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "oktyabrsky",
    "indicatorId": "bdmo_y48007020",
    "year": 2024,
    "value": 124.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "salavat",
    "indicatorId": "bdmo_y48007020",
    "year": 2024,
    "value": 39.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "salavatsky",
    "indicatorId": "bdmo_y48007020",
    "year": 2024,
    "value": 9033.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sharansky",
    "indicatorId": "bdmo_y48007020",
    "year": 2024,
    "value": 192.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sibay",
    "indicatorId": "bdmo_y48007020",
    "year": 2024,
    "value": 744.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlibashevsky",
    "indicatorId": "bdmo_y48007020",
    "year": 2024,
    "value": 710.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamak",
    "indicatorId": "bdmo_y48007020",
    "year": 2024,
    "value": 61.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamaksky",
    "indicatorId": "bdmo_y48007020",
    "year": 2024,
    "value": 41425.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "tatyshlinsky",
    "indicatorId": "bdmo_y48007020",
    "year": 2024,
    "value": 3032.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "tuymazy",
    "indicatorId": "bdmo_y48007020",
    "year": 2024,
    "value": 112376.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "uchaly",
    "indicatorId": "bdmo_y48007020",
    "year": 2024,
    "value": 97.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufa",
    "indicatorId": "bdmo_y48007020",
    "year": 2024,
    "value": 8.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufimsky",
    "indicatorId": "bdmo_y48007020",
    "year": 2024,
    "value": 36.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "yanaulsky",
    "indicatorId": "bdmo_y48007020",
    "year": 2024,
    "value": 338.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "zianchurinsky",
    "indicatorId": "bdmo_y48007020",
    "year": 2024,
    "value": 10518.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "zilairsky",
    "indicatorId": "bdmo_y48007020",
    "year": 2024,
    "value": 132.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "abzelilovsky",
    "indicatorId": "bdmo_y48007021",
    "year": 2024,
    "value": 51343.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "agidel",
    "indicatorId": "bdmo_y48007021",
    "year": 2024,
    "value": 1.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "alsheevsky",
    "indicatorId": "bdmo_y48007021",
    "year": 2024,
    "value": 2.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "arkhangelsky",
    "indicatorId": "bdmo_y48007021",
    "year": 2024,
    "value": 18.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "askinsky",
    "indicatorId": "bdmo_y48007021",
    "year": 2024,
    "value": 2533.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "aurgazinsky",
    "indicatorId": "bdmo_y48007021",
    "year": 2024,
    "value": 3955.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "bakalinsky",
    "indicatorId": "bdmo_y48007021",
    "year": 2024,
    "value": 3226.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "baltachevsky",
    "indicatorId": "bdmo_y48007021",
    "year": 2024,
    "value": 6.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "baymaksky",
    "indicatorId": "bdmo_y48007021",
    "year": 2024,
    "value": 1.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "belebeyevsky",
    "indicatorId": "bdmo_y48007021",
    "year": 2024,
    "value": 465.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "belokataysky",
    "indicatorId": "bdmo_y48007021",
    "year": 2024,
    "value": 2075.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "beloretsk",
    "indicatorId": "bdmo_y48007021",
    "year": 2024,
    "value": 11.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "birsk",
    "indicatorId": "bdmo_y48007021",
    "year": 2024,
    "value": 161.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "bizhbulyaksky",
    "indicatorId": "bdmo_y48007021",
    "year": 2024,
    "value": 142.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "blagovarsky",
    "indicatorId": "bdmo_y48007021",
    "year": 2024,
    "value": 14.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "blagoveshchensky",
    "indicatorId": "bdmo_y48007021",
    "year": 2024,
    "value": 1956.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "buraevsky",
    "indicatorId": "bdmo_y48007021",
    "year": 2024,
    "value": 78.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "burzyansky",
    "indicatorId": "bdmo_y48007021",
    "year": 2024,
    "value": 21.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "buzdyaksky",
    "indicatorId": "bdmo_y48007021",
    "year": 2024,
    "value": 4106.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "chekmagushevsky",
    "indicatorId": "bdmo_y48007021",
    "year": 2024,
    "value": 9.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "chishminsky",
    "indicatorId": "bdmo_y48007021",
    "year": 2024,
    "value": 23976.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "davlekanovsky",
    "indicatorId": "bdmo_y48007021",
    "year": 2024,
    "value": 1696.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "duvansky",
    "indicatorId": "bdmo_y48007021",
    "year": 2024,
    "value": 753.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "dyurtyulinsky",
    "indicatorId": "bdmo_y48007021",
    "year": 2024,
    "value": 1660.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ermekeyevsky",
    "indicatorId": "bdmo_y48007021",
    "year": 2024,
    "value": 6706.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "fedorovsky",
    "indicatorId": "bdmo_y48007021",
    "year": 2024,
    "value": 1.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "gafuriysky",
    "indicatorId": "bdmo_y48007021",
    "year": 2024,
    "value": 24.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "iglinsky",
    "indicatorId": "bdmo_y48007021",
    "year": 2024,
    "value": 4890.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ilishevsky",
    "indicatorId": "bdmo_y48007021",
    "year": 2024,
    "value": 1787.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ishimbay",
    "indicatorId": "bdmo_y48007021",
    "year": 2024,
    "value": 3952.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kaltasinsky",
    "indicatorId": "bdmo_y48007021",
    "year": 2024,
    "value": 56.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "karaidelsky",
    "indicatorId": "bdmo_y48007021",
    "year": 2024,
    "value": 646.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "karmaskalinsky",
    "indicatorId": "bdmo_y48007021",
    "year": 2024,
    "value": 67.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "khaibullinsky",
    "indicatorId": "bdmo_y48007021",
    "year": 2024,
    "value": 4060.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kiginsky",
    "indicatorId": "bdmo_y48007021",
    "year": 2024,
    "value": 2524.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "krasnokamsky",
    "indicatorId": "bdmo_y48007021",
    "year": 2024,
    "value": 8.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kugarchinsky",
    "indicatorId": "bdmo_y48007021",
    "year": 2024,
    "value": 18370.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kumertau",
    "indicatorId": "bdmo_y48007021",
    "year": 2024,
    "value": 10.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kushnarenkovsky",
    "indicatorId": "bdmo_y48007021",
    "year": 2024,
    "value": 50.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kuyurgazinsky",
    "indicatorId": "bdmo_y48007021",
    "year": 2024,
    "value": 1305.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "mechetlinsky",
    "indicatorId": "bdmo_y48007021",
    "year": 2024,
    "value": 2235.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "meleuz",
    "indicatorId": "bdmo_y48007021",
    "year": 2024,
    "value": 10.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "mishkinsky",
    "indicatorId": "bdmo_y48007021",
    "year": 2024,
    "value": 195.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "miyakinsky",
    "indicatorId": "bdmo_y48007021",
    "year": 2024,
    "value": 5540.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "neftekamsk",
    "indicatorId": "bdmo_y48007021",
    "year": 2024,
    "value": 517.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "nurimanovsky",
    "indicatorId": "bdmo_y48007021",
    "year": 2024,
    "value": 188.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "oktyabrsky",
    "indicatorId": "bdmo_y48007021",
    "year": 2024,
    "value": 48.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "salavat",
    "indicatorId": "bdmo_y48007021",
    "year": 2024,
    "value": 41.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "salavatsky",
    "indicatorId": "bdmo_y48007021",
    "year": 2024,
    "value": 714.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sharansky",
    "indicatorId": "bdmo_y48007021",
    "year": 2024,
    "value": 58.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sibay",
    "indicatorId": "bdmo_y48007021",
    "year": 2024,
    "value": 13.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlibashevsky",
    "indicatorId": "bdmo_y48007021",
    "year": 2024,
    "value": 3828.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamak",
    "indicatorId": "bdmo_y48007021",
    "year": 2024,
    "value": 17.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamaksky",
    "indicatorId": "bdmo_y48007021",
    "year": 2024,
    "value": 126.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "tatyshlinsky",
    "indicatorId": "bdmo_y48007021",
    "year": 2024,
    "value": 202.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "tuymazy",
    "indicatorId": "bdmo_y48007021",
    "year": 2024,
    "value": 69.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "uchaly",
    "indicatorId": "bdmo_y48007021",
    "year": 2024,
    "value": 3588.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufa",
    "indicatorId": "bdmo_y48007021",
    "year": 2024,
    "value": 13.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufimsky",
    "indicatorId": "bdmo_y48007021",
    "year": 2024,
    "value": 12849.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "yanaulsky",
    "indicatorId": "bdmo_y48007021",
    "year": 2024,
    "value": 4591.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "zianchurinsky",
    "indicatorId": "bdmo_y48007021",
    "year": 2024,
    "value": 290.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "zilairsky",
    "indicatorId": "bdmo_y48007021",
    "year": 2024,
    "value": 14019.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "abzelilovsky",
    "indicatorId": "bdmo_y48007022",
    "year": 2024,
    "value": 1222.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "alsheevsky",
    "indicatorId": "bdmo_y48007022",
    "year": 2024,
    "value": 14630.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "aurgazinsky",
    "indicatorId": "bdmo_y48007022",
    "year": 2024,
    "value": 50476.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "bakalinsky",
    "indicatorId": "bdmo_y48007022",
    "year": 2024,
    "value": 4123.9,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "baltachevsky",
    "indicatorId": "bdmo_y48007022",
    "year": 2024,
    "value": 2411.2,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "belebeyevsky",
    "indicatorId": "bdmo_y48007022",
    "year": 2024,
    "value": 11843.1,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "birsk",
    "indicatorId": "bdmo_y48007022",
    "year": 2024,
    "value": 23586.75,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "bizhbulyaksky",
    "indicatorId": "bdmo_y48007022",
    "year": 2024,
    "value": 8975.19,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "blagovarsky",
    "indicatorId": "bdmo_y48007022",
    "year": 2024,
    "value": 31079.1,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "buraevsky",
    "indicatorId": "bdmo_y48007022",
    "year": 2024,
    "value": 2039.9,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "buzdyaksky",
    "indicatorId": "bdmo_y48007022",
    "year": 2024,
    "value": 21484.47,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "chekmagushevsky",
    "indicatorId": "bdmo_y48007022",
    "year": 2024,
    "value": 53579.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "chishminsky",
    "indicatorId": "bdmo_y48007022",
    "year": 2024,
    "value": 41581.37,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "davlekanovsky",
    "indicatorId": "bdmo_y48007022",
    "year": 2024,
    "value": 27259.75,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "duvansky",
    "indicatorId": "bdmo_y48007022",
    "year": 2024,
    "value": 7179.06,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "dyurtyulinsky",
    "indicatorId": "bdmo_y48007022",
    "year": 2024,
    "value": 19834.9,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ermekeyevsky",
    "indicatorId": "bdmo_y48007022",
    "year": 2024,
    "value": 14791.1,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "fedorovsky",
    "indicatorId": "bdmo_y48007022",
    "year": 2024,
    "value": 14862.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "gafuriysky",
    "indicatorId": "bdmo_y48007022",
    "year": 2024,
    "value": 5484.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ilishevsky",
    "indicatorId": "bdmo_y48007022",
    "year": 2024,
    "value": 25744.01,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kaltasinsky",
    "indicatorId": "bdmo_y48007022",
    "year": 2024,
    "value": 1202.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "karmaskalinsky",
    "indicatorId": "bdmo_y48007022",
    "year": 2024,
    "value": 41796.68,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kushnarenkovsky",
    "indicatorId": "bdmo_y48007022",
    "year": 2024,
    "value": 43598.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kuyurgazinsky",
    "indicatorId": "bdmo_y48007022",
    "year": 2024,
    "value": 8279.7,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "mechetlinsky",
    "indicatorId": "bdmo_y48007022",
    "year": 2024,
    "value": 4000.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "meleuz",
    "indicatorId": "bdmo_y48007022",
    "year": 2024,
    "value": 21721.9,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "miyakinsky",
    "indicatorId": "bdmo_y48007022",
    "year": 2024,
    "value": 7774.27,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sharansky",
    "indicatorId": "bdmo_y48007022",
    "year": 2024,
    "value": 5030.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlibashevsky",
    "indicatorId": "bdmo_y48007022",
    "year": 2024,
    "value": 5429.9,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamaksky",
    "indicatorId": "bdmo_y48007022",
    "year": 2024,
    "value": 33596.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "tatyshlinsky",
    "indicatorId": "bdmo_y48007022",
    "year": 2024,
    "value": 4361.71,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "tuymazy",
    "indicatorId": "bdmo_y48007022",
    "year": 2024,
    "value": 18914.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufimsky",
    "indicatorId": "bdmo_y48007022",
    "year": 2024,
    "value": 23492.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "yanaulsky",
    "indicatorId": "bdmo_y48007022",
    "year": 2024,
    "value": 5635.19,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "abzelilovsky",
    "indicatorId": "bdmo_y48007023",
    "year": 2024,
    "value": 25.9,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "agidel",
    "indicatorId": "bdmo_y48007023",
    "year": 2024,
    "value": 16.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "alsheevsky",
    "indicatorId": "bdmo_y48007023",
    "year": 2024,
    "value": 24.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "arkhangelsky",
    "indicatorId": "bdmo_y48007023",
    "year": 2024,
    "value": 4.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "askinsky",
    "indicatorId": "bdmo_y48007023",
    "year": 2024,
    "value": 11.1,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "aurgazinsky",
    "indicatorId": "bdmo_y48007023",
    "year": 2024,
    "value": 31.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "bakalinsky",
    "indicatorId": "bdmo_y48007023",
    "year": 2024,
    "value": 25.2,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "baltachevsky",
    "indicatorId": "bdmo_y48007023",
    "year": 2024,
    "value": 0.1,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "baymaksky",
    "indicatorId": "bdmo_y48007023",
    "year": 2024,
    "value": 0.1,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "belebeyevsky",
    "indicatorId": "bdmo_y48007023",
    "year": 2024,
    "value": 58.9,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "belokataysky",
    "indicatorId": "bdmo_y48007023",
    "year": 2024,
    "value": 24.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "beloretsk",
    "indicatorId": "bdmo_y48007023",
    "year": 2024,
    "value": 0.1,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "birsk",
    "indicatorId": "bdmo_y48007023",
    "year": 2024,
    "value": 999999999.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "bizhbulyaksky",
    "indicatorId": "bdmo_y48007023",
    "year": 2024,
    "value": 20.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "blagovarsky",
    "indicatorId": "bdmo_y48007023",
    "year": 2024,
    "value": 13.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "blagoveshchensky",
    "indicatorId": "bdmo_y48007023",
    "year": 2024,
    "value": 115.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "buraevsky",
    "indicatorId": "bdmo_y48007023",
    "year": 2024,
    "value": 78.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "burzyansky",
    "indicatorId": "bdmo_y48007023",
    "year": 2024,
    "value": 12.7,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "buzdyaksky",
    "indicatorId": "bdmo_y48007023",
    "year": 2024,
    "value": 0.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "chekmagushevsky",
    "indicatorId": "bdmo_y48007023",
    "year": 2024,
    "value": 40.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "chishminsky",
    "indicatorId": "bdmo_y48007023",
    "year": 2024,
    "value": 121.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "davlekanovsky",
    "indicatorId": "bdmo_y48007023",
    "year": 2024,
    "value": 2.1,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "duvansky",
    "indicatorId": "bdmo_y48007023",
    "year": 2024,
    "value": 33.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "dyurtyulinsky",
    "indicatorId": "bdmo_y48007023",
    "year": 2024,
    "value": 52.9,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ermekeyevsky",
    "indicatorId": "bdmo_y48007023",
    "year": 2024,
    "value": 31.1,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "fedorovsky",
    "indicatorId": "bdmo_y48007023",
    "year": 2024,
    "value": 26.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "gafuriysky",
    "indicatorId": "bdmo_y48007023",
    "year": 2024,
    "value": 31.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "iglinsky",
    "indicatorId": "bdmo_y48007023",
    "year": 2024,
    "value": 164.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ilishevsky",
    "indicatorId": "bdmo_y48007023",
    "year": 2024,
    "value": 129.9,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ishimbay",
    "indicatorId": "bdmo_y48007023",
    "year": 2024,
    "value": 112.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kaltasinsky",
    "indicatorId": "bdmo_y48007023",
    "year": 2024,
    "value": 0.1,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "karaidelsky",
    "indicatorId": "bdmo_y48007023",
    "year": 2024,
    "value": 83.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "karmaskalinsky",
    "indicatorId": "bdmo_y48007023",
    "year": 2024,
    "value": 103.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "khaibullinsky",
    "indicatorId": "bdmo_y48007023",
    "year": 2024,
    "value": 13.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kiginsky",
    "indicatorId": "bdmo_y48007023",
    "year": 2024,
    "value": 26.2,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "krasnokamsky",
    "indicatorId": "bdmo_y48007023",
    "year": 2024,
    "value": 42.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kugarchinsky",
    "indicatorId": "bdmo_y48007023",
    "year": 2024,
    "value": 15.7,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kumertau",
    "indicatorId": "bdmo_y48007023",
    "year": 2024,
    "value": 13.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kushnarenkovsky",
    "indicatorId": "bdmo_y48007023",
    "year": 2024,
    "value": 119.2,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kuyurgazinsky",
    "indicatorId": "bdmo_y48007023",
    "year": 2024,
    "value": 2.2,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "mechetlinsky",
    "indicatorId": "bdmo_y48007023",
    "year": 2024,
    "value": 31.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "meleuz",
    "indicatorId": "bdmo_y48007023",
    "year": 2024,
    "value": 43.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "mishkinsky",
    "indicatorId": "bdmo_y48007023",
    "year": 2024,
    "value": 0.1,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "miyakinsky",
    "indicatorId": "bdmo_y48007023",
    "year": 2024,
    "value": 17.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "neftekamsk",
    "indicatorId": "bdmo_y48007023",
    "year": 2024,
    "value": 125.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "nurimanovsky",
    "indicatorId": "bdmo_y48007023",
    "year": 2024,
    "value": 32.7,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "oktyabrsky",
    "indicatorId": "bdmo_y48007023",
    "year": 2024,
    "value": 50.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "salavat",
    "indicatorId": "bdmo_y48007023",
    "year": 2024,
    "value": 26.9,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "salavatsky",
    "indicatorId": "bdmo_y48007023",
    "year": 2024,
    "value": 5.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sharansky",
    "indicatorId": "bdmo_y48007023",
    "year": 2024,
    "value": 0.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sibay",
    "indicatorId": "bdmo_y48007023",
    "year": 2024,
    "value": 36.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlibashevsky",
    "indicatorId": "bdmo_y48007023",
    "year": 2024,
    "value": 87.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamak",
    "indicatorId": "bdmo_y48007023",
    "year": 2024,
    "value": 41.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamaksky",
    "indicatorId": "bdmo_y48007023",
    "year": 2024,
    "value": 8.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "tatyshlinsky",
    "indicatorId": "bdmo_y48007023",
    "year": 2024,
    "value": 32.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "tuymazy",
    "indicatorId": "bdmo_y48007023",
    "year": 2024,
    "value": 85.7,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "uchaly",
    "indicatorId": "bdmo_y48007023",
    "year": 2024,
    "value": 0.1,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufa",
    "indicatorId": "bdmo_y48007023",
    "year": 2024,
    "value": 999999999.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufimsky",
    "indicatorId": "bdmo_y48007023",
    "year": 2024,
    "value": 999999999.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "yanaulsky",
    "indicatorId": "bdmo_y48007023",
    "year": 2024,
    "value": 41.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "zianchurinsky",
    "indicatorId": "bdmo_y48007023",
    "year": 2024,
    "value": 22.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "zilairsky",
    "indicatorId": "bdmo_y48007023",
    "year": 2024,
    "value": 0.1,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "abzelilovsky",
    "indicatorId": "bdmo_y48007025",
    "year": 2024,
    "value": 999999999.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "agidel",
    "indicatorId": "bdmo_y48007025",
    "year": 2024,
    "value": 263.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "alsheevsky",
    "indicatorId": "bdmo_y48007025",
    "year": 2024,
    "value": 20.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "arkhangelsky",
    "indicatorId": "bdmo_y48007025",
    "year": 2024,
    "value": 999999999.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "askinsky",
    "indicatorId": "bdmo_y48007025",
    "year": 2024,
    "value": 45.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "aurgazinsky",
    "indicatorId": "bdmo_y48007025",
    "year": 2024,
    "value": 366.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "bakalinsky",
    "indicatorId": "bdmo_y48007025",
    "year": 2024,
    "value": 130.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "baltachevsky",
    "indicatorId": "bdmo_y48007025",
    "year": 2024,
    "value": 37.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "baymaksky",
    "indicatorId": "bdmo_y48007025",
    "year": 2024,
    "value": 26.7,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "belebeyevsky",
    "indicatorId": "bdmo_y48007025",
    "year": 2024,
    "value": 8.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "belokataysky",
    "indicatorId": "bdmo_y48007025",
    "year": 2024,
    "value": 5.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "beloretsk",
    "indicatorId": "bdmo_y48007025",
    "year": 2024,
    "value": 261.1,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "birsk",
    "indicatorId": "bdmo_y48007025",
    "year": 2024,
    "value": 999999999.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "bizhbulyaksky",
    "indicatorId": "bdmo_y48007025",
    "year": 2024,
    "value": 15.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "blagovarsky",
    "indicatorId": "bdmo_y48007025",
    "year": 2024,
    "value": 13.1,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "blagoveshchensky",
    "indicatorId": "bdmo_y48007025",
    "year": 2024,
    "value": 8.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "buraevsky",
    "indicatorId": "bdmo_y48007025",
    "year": 2024,
    "value": 15.1,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "burzyansky",
    "indicatorId": "bdmo_y48007025",
    "year": 2024,
    "value": 295.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "buzdyaksky",
    "indicatorId": "bdmo_y48007025",
    "year": 2024,
    "value": 159.7,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "chekmagushevsky",
    "indicatorId": "bdmo_y48007025",
    "year": 2024,
    "value": 45.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "chishminsky",
    "indicatorId": "bdmo_y48007025",
    "year": 2024,
    "value": 24.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "davlekanovsky",
    "indicatorId": "bdmo_y48007025",
    "year": 2024,
    "value": 20.2,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "duvansky",
    "indicatorId": "bdmo_y48007025",
    "year": 2024,
    "value": 3.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "dyurtyulinsky",
    "indicatorId": "bdmo_y48007025",
    "year": 2024,
    "value": 21.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ermekeyevsky",
    "indicatorId": "bdmo_y48007025",
    "year": 2024,
    "value": 17.1,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "fedorovsky",
    "indicatorId": "bdmo_y48007025",
    "year": 2024,
    "value": 45.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "gafuriysky",
    "indicatorId": "bdmo_y48007025",
    "year": 2024,
    "value": 999999999.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "iglinsky",
    "indicatorId": "bdmo_y48007025",
    "year": 2024,
    "value": 17.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ilishevsky",
    "indicatorId": "bdmo_y48007025",
    "year": 2024,
    "value": 999999999.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ishimbay",
    "indicatorId": "bdmo_y48007025",
    "year": 2024,
    "value": 9.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kaltasinsky",
    "indicatorId": "bdmo_y48007025",
    "year": 2024,
    "value": 999999999.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "karaidelsky",
    "indicatorId": "bdmo_y48007025",
    "year": 2024,
    "value": 999999999.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "karmaskalinsky",
    "indicatorId": "bdmo_y48007025",
    "year": 2024,
    "value": 99.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "khaibullinsky",
    "indicatorId": "bdmo_y48007025",
    "year": 2024,
    "value": 30.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kiginsky",
    "indicatorId": "bdmo_y48007025",
    "year": 2024,
    "value": 236.1,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "krasnokamsky",
    "indicatorId": "bdmo_y48007025",
    "year": 2024,
    "value": 310.7,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kugarchinsky",
    "indicatorId": "bdmo_y48007025",
    "year": 2024,
    "value": 160.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kumertau",
    "indicatorId": "bdmo_y48007025",
    "year": 2024,
    "value": 7.9,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kushnarenkovsky",
    "indicatorId": "bdmo_y48007025",
    "year": 2024,
    "value": 16.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kuyurgazinsky",
    "indicatorId": "bdmo_y48007025",
    "year": 2024,
    "value": 18.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "mechetlinsky",
    "indicatorId": "bdmo_y48007025",
    "year": 2024,
    "value": 89.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "meleuz",
    "indicatorId": "bdmo_y48007025",
    "year": 2024,
    "value": 19.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "mishkinsky",
    "indicatorId": "bdmo_y48007025",
    "year": 2024,
    "value": 999999999.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "miyakinsky",
    "indicatorId": "bdmo_y48007025",
    "year": 2024,
    "value": 126.9,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "neftekamsk",
    "indicatorId": "bdmo_y48007025",
    "year": 2024,
    "value": 29.2,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "nurimanovsky",
    "indicatorId": "bdmo_y48007025",
    "year": 2024,
    "value": 160.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "oktyabrsky",
    "indicatorId": "bdmo_y48007025",
    "year": 2024,
    "value": 263.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "salavat",
    "indicatorId": "bdmo_y48007025",
    "year": 2024,
    "value": 45.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "salavatsky",
    "indicatorId": "bdmo_y48007025",
    "year": 2024,
    "value": 290.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sharansky",
    "indicatorId": "bdmo_y48007025",
    "year": 2024,
    "value": 999999999.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sibay",
    "indicatorId": "bdmo_y48007025",
    "year": 2024,
    "value": 118.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlibashevsky",
    "indicatorId": "bdmo_y48007025",
    "year": 2024,
    "value": 20.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamak",
    "indicatorId": "bdmo_y48007025",
    "year": 2024,
    "value": 45.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamaksky",
    "indicatorId": "bdmo_y48007025",
    "year": 2024,
    "value": 19.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "tatyshlinsky",
    "indicatorId": "bdmo_y48007025",
    "year": 2024,
    "value": 20.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "tuymazy",
    "indicatorId": "bdmo_y48007025",
    "year": 2024,
    "value": 20.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "uchaly",
    "indicatorId": "bdmo_y48007025",
    "year": 2024,
    "value": 31.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufa",
    "indicatorId": "bdmo_y48007025",
    "year": 2024,
    "value": 99.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufimsky",
    "indicatorId": "bdmo_y48007025",
    "year": 2024,
    "value": 10.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "yanaulsky",
    "indicatorId": "bdmo_y48007025",
    "year": 2024,
    "value": 17.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "zianchurinsky",
    "indicatorId": "bdmo_y48007025",
    "year": 2024,
    "value": 999999999.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "zilairsky",
    "indicatorId": "bdmo_y48007025",
    "year": 2024,
    "value": 160.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "abzelilovsky",
    "indicatorId": "bdmo_y48008019",
    "year": 2024,
    "value": 1570.2,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "agidel",
    "indicatorId": "bdmo_y48008019",
    "year": 2024,
    "value": 356.41,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "alsheevsky",
    "indicatorId": "bdmo_y48008019",
    "year": 2024,
    "value": 1214.41,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "arkhangelsky",
    "indicatorId": "bdmo_y48008019",
    "year": 2024,
    "value": 536.02,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "askinsky",
    "indicatorId": "bdmo_y48008019",
    "year": 2024,
    "value": 540.23,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "aurgazinsky",
    "indicatorId": "bdmo_y48008019",
    "year": 2024,
    "value": 1118.38,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "bakalinsky",
    "indicatorId": "bdmo_y48008019",
    "year": 2024,
    "value": 839.98,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "baltachevsky",
    "indicatorId": "bdmo_y48008019",
    "year": 2024,
    "value": 556.47,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "baymaksky",
    "indicatorId": "bdmo_y48008019",
    "year": 2024,
    "value": 1440.05,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "belebeyevsky",
    "indicatorId": "bdmo_y48008019",
    "year": 2024,
    "value": 2523.72,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "belokataysky",
    "indicatorId": "bdmo_y48008019",
    "year": 2024,
    "value": 477.69,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "beloretsk",
    "indicatorId": "bdmo_y48008019",
    "year": 2024,
    "value": 2642.48,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "birsk",
    "indicatorId": "bdmo_y48008019",
    "year": 2024,
    "value": 1573.38,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "bizhbulyaksky",
    "indicatorId": "bdmo_y48008019",
    "year": 2024,
    "value": 712.94,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "blagovarsky",
    "indicatorId": "bdmo_y48008019",
    "year": 2024,
    "value": 668.76,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "blagoveshchensky",
    "indicatorId": "bdmo_y48008019",
    "year": 2024,
    "value": 1371.47,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "buraevsky",
    "indicatorId": "bdmo_y48008019",
    "year": 2024,
    "value": 733.97,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "burzyansky",
    "indicatorId": "bdmo_y48008019",
    "year": 2024,
    "value": 426.1,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "buzdyaksky",
    "indicatorId": "bdmo_y48008019",
    "year": 2024,
    "value": 758.22,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "chekmagushevsky",
    "indicatorId": "bdmo_y48008019",
    "year": 2024,
    "value": 893.53,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "chishminsky",
    "indicatorId": "bdmo_y48008019",
    "year": 2024,
    "value": 1853.13,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "davlekanovsky",
    "indicatorId": "bdmo_y48008019",
    "year": 2024,
    "value": 1097.25,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "duvansky",
    "indicatorId": "bdmo_y48008019",
    "year": 2024,
    "value": 781.98,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "dyurtyulinsky",
    "indicatorId": "bdmo_y48008019",
    "year": 2024,
    "value": 1802.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ermekeyevsky",
    "indicatorId": "bdmo_y48008019",
    "year": 2024,
    "value": 455.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "fedorovsky",
    "indicatorId": "bdmo_y48008019",
    "year": 2024,
    "value": 473.87,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "gafuriysky",
    "indicatorId": "bdmo_y48008019",
    "year": 2024,
    "value": 981.16,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "iglinsky",
    "indicatorId": "bdmo_y48008019",
    "year": 2024,
    "value": 3002.21,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ilishevsky",
    "indicatorId": "bdmo_y48008019",
    "year": 2024,
    "value": 1006.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ishimbay",
    "indicatorId": "bdmo_y48008019",
    "year": 2024,
    "value": 2674.22,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kaltasinsky",
    "indicatorId": "bdmo_y48008019",
    "year": 2024,
    "value": 598.7,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "karaidelsky",
    "indicatorId": "bdmo_y48008019",
    "year": 2024,
    "value": 791.75,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "karmaskalinsky",
    "indicatorId": "bdmo_y48008019",
    "year": 2024,
    "value": 1726.11,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "khaibullinsky",
    "indicatorId": "bdmo_y48008019",
    "year": 2024,
    "value": 901.2,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kiginsky",
    "indicatorId": "bdmo_y48008019",
    "year": 2024,
    "value": 400.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "krasnokamsky",
    "indicatorId": "bdmo_y48008019",
    "year": 2024,
    "value": 857.59,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kugarchinsky",
    "indicatorId": "bdmo_y48008019",
    "year": 2024,
    "value": 860.96,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kumertau",
    "indicatorId": "bdmo_y48008019",
    "year": 2024,
    "value": 1712.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kushnarenkovsky",
    "indicatorId": "bdmo_y48008019",
    "year": 2024,
    "value": 1059.44,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kuyurgazinsky",
    "indicatorId": "bdmo_y48008019",
    "year": 2024,
    "value": 671.58,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "mechetlinsky",
    "indicatorId": "bdmo_y48008019",
    "year": 2024,
    "value": 622.06,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "meleuz",
    "indicatorId": "bdmo_y48008019",
    "year": 2024,
    "value": 2707.52,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "mishkinsky",
    "indicatorId": "bdmo_y48008019",
    "year": 2024,
    "value": 570.48,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "miyakinsky",
    "indicatorId": "bdmo_y48008019",
    "year": 2024,
    "value": 835.49,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "neftekamsk",
    "indicatorId": "bdmo_y48008019",
    "year": 2024,
    "value": 4046.39,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "nurimanovsky",
    "indicatorId": "bdmo_y48008019",
    "year": 2024,
    "value": 686.72,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "oktyabrsky",
    "indicatorId": "bdmo_y48008019",
    "year": 2024,
    "value": 3304.07,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "salavat",
    "indicatorId": "bdmo_y48008019",
    "year": 2024,
    "value": 3612.41,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "salavatsky",
    "indicatorId": "bdmo_y48008019",
    "year": 2024,
    "value": 666.35,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sharansky",
    "indicatorId": "bdmo_y48008019",
    "year": 2024,
    "value": 632.37,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sibay",
    "indicatorId": "bdmo_y48008019",
    "year": 2024,
    "value": 1480.94,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlibashevsky",
    "indicatorId": "bdmo_y48008019",
    "year": 2024,
    "value": 599.29,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamak",
    "indicatorId": "bdmo_y48008019",
    "year": 2024,
    "value": 6678.18,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamaksky",
    "indicatorId": "bdmo_y48008019",
    "year": 2024,
    "value": 2067.23,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "tatyshlinsky",
    "indicatorId": "bdmo_y48008019",
    "year": 2024,
    "value": 645.09,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "tuymazy",
    "indicatorId": "bdmo_y48008019",
    "year": 2024,
    "value": 4059.27,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "uchaly",
    "indicatorId": "bdmo_y48008019",
    "year": 2024,
    "value": 1855.76,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufa",
    "indicatorId": "bdmo_y48008019",
    "year": 2024,
    "value": 33647.05,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufimsky",
    "indicatorId": "bdmo_y48008019",
    "year": 2024,
    "value": 7200.02,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "yanaulsky",
    "indicatorId": "bdmo_y48008019",
    "year": 2024,
    "value": 1342.65,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "zianchurinsky",
    "indicatorId": "bdmo_y48008019",
    "year": 2024,
    "value": 723.2,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "zilairsky",
    "indicatorId": "bdmo_y48008019",
    "year": 2024,
    "value": 437.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "abzelilovsky",
    "indicatorId": "bdmo_y48010001",
    "year": 2024,
    "value": 80630.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "agidel",
    "indicatorId": "bdmo_y48010001",
    "year": 2024,
    "value": 1248.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "alsheevsky",
    "indicatorId": "bdmo_y48010001",
    "year": 2024,
    "value": 12404.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "arkhangelsky",
    "indicatorId": "bdmo_y48010001",
    "year": 2024,
    "value": 12494.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "askinsky",
    "indicatorId": "bdmo_y48010001",
    "year": 2024,
    "value": 5290.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "aurgazinsky",
    "indicatorId": "bdmo_y48010001",
    "year": 2024,
    "value": 11914.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "bakalinsky",
    "indicatorId": "bdmo_y48010001",
    "year": 2024,
    "value": 12420.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "baltachevsky",
    "indicatorId": "bdmo_y48010001",
    "year": 2024,
    "value": 6919.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "baymaksky",
    "indicatorId": "bdmo_y48010001",
    "year": 2024,
    "value": 29419.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "belebeyevsky",
    "indicatorId": "bdmo_y48010001",
    "year": 2024,
    "value": 28992.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "belokataysky",
    "indicatorId": "bdmo_y48010001",
    "year": 2024,
    "value": 3298.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "beloretsk",
    "indicatorId": "bdmo_y48010001",
    "year": 2024,
    "value": 51412.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "birsk",
    "indicatorId": "bdmo_y48010001",
    "year": 2024,
    "value": 26262.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "bizhbulyaksky",
    "indicatorId": "bdmo_y48010001",
    "year": 2024,
    "value": 3964.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "blagovarsky",
    "indicatorId": "bdmo_y48010001",
    "year": 2024,
    "value": 6095.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "blagoveshchensky",
    "indicatorId": "bdmo_y48010001",
    "year": 2024,
    "value": 32753.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "buraevsky",
    "indicatorId": "bdmo_y48010001",
    "year": 2024,
    "value": 9074.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "burzyansky",
    "indicatorId": "bdmo_y48010001",
    "year": 2024,
    "value": 11970.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "buzdyaksky",
    "indicatorId": "bdmo_y48010001",
    "year": 2024,
    "value": 6716.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "chekmagushevsky",
    "indicatorId": "bdmo_y48010001",
    "year": 2024,
    "value": 16904.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "chishminsky",
    "indicatorId": "bdmo_y48010001",
    "year": 2024,
    "value": 38584.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "davlekanovsky",
    "indicatorId": "bdmo_y48010001",
    "year": 2024,
    "value": 13762.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "duvansky",
    "indicatorId": "bdmo_y48010001",
    "year": 2024,
    "value": 18844.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "dyurtyulinsky",
    "indicatorId": "bdmo_y48010001",
    "year": 2024,
    "value": 29460.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ermekeyevsky",
    "indicatorId": "bdmo_y48010001",
    "year": 2024,
    "value": 2104.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "fedorovsky",
    "indicatorId": "bdmo_y48010001",
    "year": 2024,
    "value": 2103.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "gafuriysky",
    "indicatorId": "bdmo_y48010001",
    "year": 2024,
    "value": 27171.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "iglinsky",
    "indicatorId": "bdmo_y48010001",
    "year": 2024,
    "value": 186126.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ilishevsky",
    "indicatorId": "bdmo_y48010001",
    "year": 2024,
    "value": 16595.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ishimbay",
    "indicatorId": "bdmo_y48010001",
    "year": 2024,
    "value": 56928.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kaltasinsky",
    "indicatorId": "bdmo_y48010001",
    "year": 2024,
    "value": 8106.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "karaidelsky",
    "indicatorId": "bdmo_y48010001",
    "year": 2024,
    "value": 18293.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "karmaskalinsky",
    "indicatorId": "bdmo_y48010001",
    "year": 2024,
    "value": 84279.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "khaibullinsky",
    "indicatorId": "bdmo_y48010001",
    "year": 2024,
    "value": 10419.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kiginsky",
    "indicatorId": "bdmo_y48010001",
    "year": 2024,
    "value": 5701.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "krasnokamsky",
    "indicatorId": "bdmo_y48010001",
    "year": 2024,
    "value": 24790.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kugarchinsky",
    "indicatorId": "bdmo_y48010001",
    "year": 2024,
    "value": 14074.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kumertau",
    "indicatorId": "bdmo_y48010001",
    "year": 2024,
    "value": 10232.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kushnarenkovsky",
    "indicatorId": "bdmo_y48010001",
    "year": 2024,
    "value": 35446.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kuyurgazinsky",
    "indicatorId": "bdmo_y48010001",
    "year": 2024,
    "value": 6318.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "mechetlinsky",
    "indicatorId": "bdmo_y48010001",
    "year": 2024,
    "value": 6843.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "meleuz",
    "indicatorId": "bdmo_y48010001",
    "year": 2024,
    "value": 76596.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "mishkinsky",
    "indicatorId": "bdmo_y48010001",
    "year": 2024,
    "value": 10834.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "miyakinsky",
    "indicatorId": "bdmo_y48010001",
    "year": 2024,
    "value": 9505.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "neftekamsk",
    "indicatorId": "bdmo_y48010001",
    "year": 2024,
    "value": 73265.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "nurimanovsky",
    "indicatorId": "bdmo_y48010001",
    "year": 2024,
    "value": 19645.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "oktyabrsky",
    "indicatorId": "bdmo_y48010001",
    "year": 2024,
    "value": 111045.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "salavat",
    "indicatorId": "bdmo_y48010001",
    "year": 2024,
    "value": 19066.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "salavatsky",
    "indicatorId": "bdmo_y48010001",
    "year": 2024,
    "value": 9189.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sharansky",
    "indicatorId": "bdmo_y48010001",
    "year": 2024,
    "value": 7618.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sibay",
    "indicatorId": "bdmo_y48010001",
    "year": 2024,
    "value": 21731.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlibashevsky",
    "indicatorId": "bdmo_y48010001",
    "year": 2024,
    "value": 6380.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamak",
    "indicatorId": "bdmo_y48010001",
    "year": 2024,
    "value": 113748.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamaksky",
    "indicatorId": "bdmo_y48010001",
    "year": 2024,
    "value": 109606.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "tatyshlinsky",
    "indicatorId": "bdmo_y48010001",
    "year": 2024,
    "value": 10426.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "tuymazy",
    "indicatorId": "bdmo_y48010001",
    "year": 2024,
    "value": 97633.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "uchaly",
    "indicatorId": "bdmo_y48010001",
    "year": 2024,
    "value": 31904.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufa",
    "indicatorId": "bdmo_y48010001",
    "year": 2024,
    "value": 1131553.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufimsky",
    "indicatorId": "bdmo_y48010001",
    "year": 2024,
    "value": 466415.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "yanaulsky",
    "indicatorId": "bdmo_y48010001",
    "year": 2024,
    "value": 19386.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "zianchurinsky",
    "indicatorId": "bdmo_y48010001",
    "year": 2024,
    "value": 8342.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "zilairsky",
    "indicatorId": "bdmo_y48010001",
    "year": 2024,
    "value": 5617.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "abzelilovsky",
    "indicatorId": "bdmo_y48010002",
    "year": 2024,
    "value": 80630.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "agidel",
    "indicatorId": "bdmo_y48010002",
    "year": 2024,
    "value": 1248.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "alsheevsky",
    "indicatorId": "bdmo_y48010002",
    "year": 2024,
    "value": 12404.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "arkhangelsky",
    "indicatorId": "bdmo_y48010002",
    "year": 2024,
    "value": 12494.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "askinsky",
    "indicatorId": "bdmo_y48010002",
    "year": 2024,
    "value": 5290.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "aurgazinsky",
    "indicatorId": "bdmo_y48010002",
    "year": 2024,
    "value": 11914.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "bakalinsky",
    "indicatorId": "bdmo_y48010002",
    "year": 2024,
    "value": 12420.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "baltachevsky",
    "indicatorId": "bdmo_y48010002",
    "year": 2024,
    "value": 6919.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "baymaksky",
    "indicatorId": "bdmo_y48010002",
    "year": 2024,
    "value": 29419.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "belebeyevsky",
    "indicatorId": "bdmo_y48010002",
    "year": 2024,
    "value": 24192.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "belokataysky",
    "indicatorId": "bdmo_y48010002",
    "year": 2024,
    "value": 3298.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "beloretsk",
    "indicatorId": "bdmo_y48010002",
    "year": 2024,
    "value": 48056.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "birsk",
    "indicatorId": "bdmo_y48010002",
    "year": 2024,
    "value": 26262.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "bizhbulyaksky",
    "indicatorId": "bdmo_y48010002",
    "year": 2024,
    "value": 3818.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "blagovarsky",
    "indicatorId": "bdmo_y48010002",
    "year": 2024,
    "value": 6095.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "blagoveshchensky",
    "indicatorId": "bdmo_y48010002",
    "year": 2024,
    "value": 29877.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "buraevsky",
    "indicatorId": "bdmo_y48010002",
    "year": 2024,
    "value": 9074.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "burzyansky",
    "indicatorId": "bdmo_y48010002",
    "year": 2024,
    "value": 11970.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "buzdyaksky",
    "indicatorId": "bdmo_y48010002",
    "year": 2024,
    "value": 6716.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "chekmagushevsky",
    "indicatorId": "bdmo_y48010002",
    "year": 2024,
    "value": 14889.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "chishminsky",
    "indicatorId": "bdmo_y48010002",
    "year": 2024,
    "value": 38352.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "davlekanovsky",
    "indicatorId": "bdmo_y48010002",
    "year": 2024,
    "value": 12805.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "duvansky",
    "indicatorId": "bdmo_y48010002",
    "year": 2024,
    "value": 18233.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "dyurtyulinsky",
    "indicatorId": "bdmo_y48010002",
    "year": 2024,
    "value": 29460.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ermekeyevsky",
    "indicatorId": "bdmo_y48010002",
    "year": 2024,
    "value": 2104.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "fedorovsky",
    "indicatorId": "bdmo_y48010002",
    "year": 2024,
    "value": 1963.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "gafuriysky",
    "indicatorId": "bdmo_y48010002",
    "year": 2024,
    "value": 25864.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "iglinsky",
    "indicatorId": "bdmo_y48010002",
    "year": 2024,
    "value": 182210.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ilishevsky",
    "indicatorId": "bdmo_y48010002",
    "year": 2024,
    "value": 15638.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ishimbay",
    "indicatorId": "bdmo_y48010002",
    "year": 2024,
    "value": 56576.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kaltasinsky",
    "indicatorId": "bdmo_y48010002",
    "year": 2024,
    "value": 7828.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "karaidelsky",
    "indicatorId": "bdmo_y48010002",
    "year": 2024,
    "value": 18293.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "karmaskalinsky",
    "indicatorId": "bdmo_y48010002",
    "year": 2024,
    "value": 83969.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "khaibullinsky",
    "indicatorId": "bdmo_y48010002",
    "year": 2024,
    "value": 10419.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kiginsky",
    "indicatorId": "bdmo_y48010002",
    "year": 2024,
    "value": 5701.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "krasnokamsky",
    "indicatorId": "bdmo_y48010002",
    "year": 2024,
    "value": 24790.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kugarchinsky",
    "indicatorId": "bdmo_y48010002",
    "year": 2024,
    "value": 14074.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kumertau",
    "indicatorId": "bdmo_y48010002",
    "year": 2024,
    "value": 10232.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kushnarenkovsky",
    "indicatorId": "bdmo_y48010002",
    "year": 2024,
    "value": 35329.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kuyurgazinsky",
    "indicatorId": "bdmo_y48010002",
    "year": 2024,
    "value": 6318.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "mechetlinsky",
    "indicatorId": "bdmo_y48010002",
    "year": 2024,
    "value": 6706.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "meleuz",
    "indicatorId": "bdmo_y48010002",
    "year": 2024,
    "value": 72447.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "mishkinsky",
    "indicatorId": "bdmo_y48010002",
    "year": 2024,
    "value": 10834.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "miyakinsky",
    "indicatorId": "bdmo_y48010002",
    "year": 2024,
    "value": 9505.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "neftekamsk",
    "indicatorId": "bdmo_y48010002",
    "year": 2024,
    "value": 42808.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "nurimanovsky",
    "indicatorId": "bdmo_y48010002",
    "year": 2024,
    "value": 18854.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "oktyabrsky",
    "indicatorId": "bdmo_y48010002",
    "year": 2024,
    "value": 76447.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "salavat",
    "indicatorId": "bdmo_y48010002",
    "year": 2024,
    "value": 19066.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "salavatsky",
    "indicatorId": "bdmo_y48010002",
    "year": 2024,
    "value": 9189.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sharansky",
    "indicatorId": "bdmo_y48010002",
    "year": 2024,
    "value": 7618.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sibay",
    "indicatorId": "bdmo_y48010002",
    "year": 2024,
    "value": 21731.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlibashevsky",
    "indicatorId": "bdmo_y48010002",
    "year": 2024,
    "value": 6247.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamak",
    "indicatorId": "bdmo_y48010002",
    "year": 2024,
    "value": 40143.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamaksky",
    "indicatorId": "bdmo_y48010002",
    "year": 2024,
    "value": 100542.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "tatyshlinsky",
    "indicatorId": "bdmo_y48010002",
    "year": 2024,
    "value": 10426.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "tuymazy",
    "indicatorId": "bdmo_y48010002",
    "year": 2024,
    "value": 79198.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "uchaly",
    "indicatorId": "bdmo_y48010002",
    "year": 2024,
    "value": 31904.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufa",
    "indicatorId": "bdmo_y48010002",
    "year": 2024,
    "value": 376288.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufimsky",
    "indicatorId": "bdmo_y48010002",
    "year": 2024,
    "value": 403337.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "yanaulsky",
    "indicatorId": "bdmo_y48010002",
    "year": 2024,
    "value": 18268.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "zianchurinsky",
    "indicatorId": "bdmo_y48010002",
    "year": 2024,
    "value": 8342.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "zilairsky",
    "indicatorId": "bdmo_y48010002",
    "year": 2024,
    "value": 5617.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "belebeyevsky",
    "indicatorId": "bdmo_y48010003",
    "year": 2024,
    "value": 4800.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "beloretsk",
    "indicatorId": "bdmo_y48010003",
    "year": 2024,
    "value": 3356.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "bizhbulyaksky",
    "indicatorId": "bdmo_y48010003",
    "year": 2024,
    "value": 146.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "blagoveshchensky",
    "indicatorId": "bdmo_y48010003",
    "year": 2024,
    "value": 2876.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "chekmagushevsky",
    "indicatorId": "bdmo_y48010003",
    "year": 2024,
    "value": 2015.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "chishminsky",
    "indicatorId": "bdmo_y48010003",
    "year": 2024,
    "value": 232.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "davlekanovsky",
    "indicatorId": "bdmo_y48010003",
    "year": 2024,
    "value": 957.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "duvansky",
    "indicatorId": "bdmo_y48010003",
    "year": 2024,
    "value": 611.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "fedorovsky",
    "indicatorId": "bdmo_y48010003",
    "year": 2024,
    "value": 140.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "gafuriysky",
    "indicatorId": "bdmo_y48010003",
    "year": 2024,
    "value": 1307.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "iglinsky",
    "indicatorId": "bdmo_y48010003",
    "year": 2024,
    "value": 3916.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ilishevsky",
    "indicatorId": "bdmo_y48010003",
    "year": 2024,
    "value": 957.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ishimbay",
    "indicatorId": "bdmo_y48010003",
    "year": 2024,
    "value": 352.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kaltasinsky",
    "indicatorId": "bdmo_y48010003",
    "year": 2024,
    "value": 278.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "karmaskalinsky",
    "indicatorId": "bdmo_y48010003",
    "year": 2024,
    "value": 310.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kushnarenkovsky",
    "indicatorId": "bdmo_y48010003",
    "year": 2024,
    "value": 117.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "mechetlinsky",
    "indicatorId": "bdmo_y48010003",
    "year": 2024,
    "value": 137.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "meleuz",
    "indicatorId": "bdmo_y48010003",
    "year": 2024,
    "value": 4149.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "neftekamsk",
    "indicatorId": "bdmo_y48010003",
    "year": 2024,
    "value": 30457.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "nurimanovsky",
    "indicatorId": "bdmo_y48010003",
    "year": 2024,
    "value": 791.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "oktyabrsky",
    "indicatorId": "bdmo_y48010003",
    "year": 2024,
    "value": 34598.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlibashevsky",
    "indicatorId": "bdmo_y48010003",
    "year": 2024,
    "value": 133.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamak",
    "indicatorId": "bdmo_y48010003",
    "year": 2024,
    "value": 73605.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamaksky",
    "indicatorId": "bdmo_y48010003",
    "year": 2024,
    "value": 9064.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "tuymazy",
    "indicatorId": "bdmo_y48010003",
    "year": 2024,
    "value": 18435.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufa",
    "indicatorId": "bdmo_y48010003",
    "year": 2024,
    "value": 755265.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufimsky",
    "indicatorId": "bdmo_y48010003",
    "year": 2024,
    "value": 63078.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "yanaulsky",
    "indicatorId": "bdmo_y48010003",
    "year": 2024,
    "value": 1118.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "abzelilovsky",
    "indicatorId": "bdmo_y48012002",
    "year": 2024,
    "value": 1225.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "agidel",
    "indicatorId": "bdmo_y48012002",
    "year": 2024,
    "value": 8013.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "alsheevsky",
    "indicatorId": "bdmo_y48012002",
    "year": 2024,
    "value": 2261.7,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "arkhangelsky",
    "indicatorId": "bdmo_y48012002",
    "year": 2024,
    "value": 2277.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "askinsky",
    "indicatorId": "bdmo_y48012002",
    "year": 2024,
    "value": 1000.7,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "aurgazinsky",
    "indicatorId": "bdmo_y48012002",
    "year": 2024,
    "value": 1589.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "bakalinsky",
    "indicatorId": "bdmo_y48012002",
    "year": 2024,
    "value": 1083.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "baltachevsky",
    "indicatorId": "bdmo_y48012002",
    "year": 2024,
    "value": 890.9,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "baymaksky",
    "indicatorId": "bdmo_y48012002",
    "year": 2024,
    "value": 9417.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "belebeyevsky",
    "indicatorId": "bdmo_y48012002",
    "year": 2024,
    "value": 25012.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "belokataysky",
    "indicatorId": "bdmo_y48012002",
    "year": 2024,
    "value": 401.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "beloretsk",
    "indicatorId": "bdmo_y48012002",
    "year": 2024,
    "value": 10298.1,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "birsk",
    "indicatorId": "bdmo_y48012002",
    "year": 2024,
    "value": 17171.1,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "bizhbulyaksky",
    "indicatorId": "bdmo_y48012002",
    "year": 2024,
    "value": 2043.9,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "blagovarsky",
    "indicatorId": "bdmo_y48012002",
    "year": 2024,
    "value": 1080.9,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "blagoveshchensky",
    "indicatorId": "bdmo_y48012002",
    "year": 2024,
    "value": 7204.9,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "buraevsky",
    "indicatorId": "bdmo_y48012002",
    "year": 2024,
    "value": 686.1,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "burzyansky",
    "indicatorId": "bdmo_y48012002",
    "year": 2024,
    "value": 890.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "buzdyaksky",
    "indicatorId": "bdmo_y48012002",
    "year": 2024,
    "value": 1007.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "chekmagushevsky",
    "indicatorId": "bdmo_y48012002",
    "year": 2024,
    "value": 2876.1,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "chishminsky",
    "indicatorId": "bdmo_y48012002",
    "year": 2024,
    "value": 6889.1,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "davlekanovsky",
    "indicatorId": "bdmo_y48012002",
    "year": 2024,
    "value": 4222.2,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "duvansky",
    "indicatorId": "bdmo_y48012002",
    "year": 2024,
    "value": 3784.9,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "dyurtyulinsky",
    "indicatorId": "bdmo_y48012002",
    "year": 2024,
    "value": 18787.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ermekeyevsky",
    "indicatorId": "bdmo_y48012002",
    "year": 2024,
    "value": 368.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "fedorovsky",
    "indicatorId": "bdmo_y48012002",
    "year": 2024,
    "value": 1819.9,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "gafuriysky",
    "indicatorId": "bdmo_y48012002",
    "year": 2024,
    "value": 3306.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "iglinsky",
    "indicatorId": "bdmo_y48012002",
    "year": 2024,
    "value": 6685.9,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ilishevsky",
    "indicatorId": "bdmo_y48012002",
    "year": 2024,
    "value": 1917.9,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ishimbay",
    "indicatorId": "bdmo_y48012002",
    "year": 2024,
    "value": 24988.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kaltasinsky",
    "indicatorId": "bdmo_y48012002",
    "year": 2024,
    "value": 1644.7,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "karaidelsky",
    "indicatorId": "bdmo_y48012002",
    "year": 2024,
    "value": 1481.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "karmaskalinsky",
    "indicatorId": "bdmo_y48012002",
    "year": 2024,
    "value": 3520.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "khaibullinsky",
    "indicatorId": "bdmo_y48012002",
    "year": 2024,
    "value": 650.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kiginsky",
    "indicatorId": "bdmo_y48012002",
    "year": 2024,
    "value": 354.9,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "krasnokamsky",
    "indicatorId": "bdmo_y48012002",
    "year": 2024,
    "value": 646.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kugarchinsky",
    "indicatorId": "bdmo_y48012002",
    "year": 2024,
    "value": 5096.9,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kumertau",
    "indicatorId": "bdmo_y48012002",
    "year": 2024,
    "value": 51735.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kushnarenkovsky",
    "indicatorId": "bdmo_y48012002",
    "year": 2024,
    "value": 903.1,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kuyurgazinsky",
    "indicatorId": "bdmo_y48012002",
    "year": 2024,
    "value": 761.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "mechetlinsky",
    "indicatorId": "bdmo_y48012002",
    "year": 2024,
    "value": 583.9,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "meleuz",
    "indicatorId": "bdmo_y48012002",
    "year": 2024,
    "value": 40149.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "mishkinsky",
    "indicatorId": "bdmo_y48012002",
    "year": 2024,
    "value": 988.9,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "miyakinsky",
    "indicatorId": "bdmo_y48012002",
    "year": 2024,
    "value": 1486.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "neftekamsk",
    "indicatorId": "bdmo_y48012002",
    "year": 2024,
    "value": 84864.1,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "nurimanovsky",
    "indicatorId": "bdmo_y48012002",
    "year": 2024,
    "value": 930.7,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "oktyabrsky",
    "indicatorId": "bdmo_y48012002",
    "year": 2024,
    "value": 20635.9,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "salavat",
    "indicatorId": "bdmo_y48012002",
    "year": 2024,
    "value": 77258.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "salavatsky",
    "indicatorId": "bdmo_y48012002",
    "year": 2024,
    "value": 1187.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sharansky",
    "indicatorId": "bdmo_y48012002",
    "year": 2024,
    "value": 1440.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sibay",
    "indicatorId": "bdmo_y48012002",
    "year": 2024,
    "value": 35167.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlibashevsky",
    "indicatorId": "bdmo_y48012002",
    "year": 2024,
    "value": 1232.2,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamak",
    "indicatorId": "bdmo_y48012002",
    "year": 2024,
    "value": 105501.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamaksky",
    "indicatorId": "bdmo_y48012002",
    "year": 2024,
    "value": 2659.7,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "tatyshlinsky",
    "indicatorId": "bdmo_y48012002",
    "year": 2024,
    "value": 1459.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "tuymazy",
    "indicatorId": "bdmo_y48012002",
    "year": 2024,
    "value": 40845.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "uchaly",
    "indicatorId": "bdmo_y48012002",
    "year": 2024,
    "value": 10292.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufa",
    "indicatorId": "bdmo_y48012002",
    "year": 2024,
    "value": 427594.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufimsky",
    "indicatorId": "bdmo_y48012002",
    "year": 2024,
    "value": 16247.2,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "yanaulsky",
    "indicatorId": "bdmo_y48012002",
    "year": 2024,
    "value": 7055.9,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "zianchurinsky",
    "indicatorId": "bdmo_y48012002",
    "year": 2024,
    "value": 1148.9,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "zilairsky",
    "indicatorId": "bdmo_y48012002",
    "year": 2024,
    "value": 285.9,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "abzelilovsky",
    "indicatorId": "bdmo_y48012003",
    "year": 2024,
    "value": 9115.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "agidel",
    "indicatorId": "bdmo_y48012003",
    "year": 2024,
    "value": 2125.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "alsheevsky",
    "indicatorId": "bdmo_y48012003",
    "year": 2024,
    "value": 6903.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "arkhangelsky",
    "indicatorId": "bdmo_y48012003",
    "year": 2024,
    "value": 3376.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "askinsky",
    "indicatorId": "bdmo_y48012003",
    "year": 2024,
    "value": 4554.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "aurgazinsky",
    "indicatorId": "bdmo_y48012003",
    "year": 2024,
    "value": 6535.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "bakalinsky",
    "indicatorId": "bdmo_y48012003",
    "year": 2024,
    "value": 5404.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "baltachevsky",
    "indicatorId": "bdmo_y48012003",
    "year": 2024,
    "value": 4438.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "baymaksky",
    "indicatorId": "bdmo_y48012003",
    "year": 2024,
    "value": 10959.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "belebeyevsky",
    "indicatorId": "bdmo_y48012003",
    "year": 2024,
    "value": 13018.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "belokataysky",
    "indicatorId": "bdmo_y48012003",
    "year": 2024,
    "value": 3679.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "beloretsk",
    "indicatorId": "bdmo_y48012003",
    "year": 2024,
    "value": 14768.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "birsk",
    "indicatorId": "bdmo_y48012003",
    "year": 2024,
    "value": 9054.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "bizhbulyaksky",
    "indicatorId": "bdmo_y48012003",
    "year": 2024,
    "value": 4212.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "blagovarsky",
    "indicatorId": "bdmo_y48012003",
    "year": 2024,
    "value": 4326.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "blagoveshchensky",
    "indicatorId": "bdmo_y48012003",
    "year": 2024,
    "value": 5476.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "buraevsky",
    "indicatorId": "bdmo_y48012003",
    "year": 2024,
    "value": 4762.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "burzyansky",
    "indicatorId": "bdmo_y48012003",
    "year": 2024,
    "value": 4791.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "buzdyaksky",
    "indicatorId": "bdmo_y48012003",
    "year": 2024,
    "value": 4987.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "chekmagushevsky",
    "indicatorId": "bdmo_y48012003",
    "year": 2024,
    "value": 6269.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "chishminsky",
    "indicatorId": "bdmo_y48012003",
    "year": 2024,
    "value": 8388.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "davlekanovsky",
    "indicatorId": "bdmo_y48012003",
    "year": 2024,
    "value": 5927.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "duvansky",
    "indicatorId": "bdmo_y48012003",
    "year": 2024,
    "value": 6263.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "dyurtyulinsky",
    "indicatorId": "bdmo_y48012003",
    "year": 2024,
    "value": 10134.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ermekeyevsky",
    "indicatorId": "bdmo_y48012003",
    "year": 2024,
    "value": 2753.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "fedorovsky",
    "indicatorId": "bdmo_y48012003",
    "year": 2024,
    "value": 3370.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "gafuriysky",
    "indicatorId": "bdmo_y48012003",
    "year": 2024,
    "value": 5798.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "iglinsky",
    "indicatorId": "bdmo_y48012003",
    "year": 2024,
    "value": 8527.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ilishevsky",
    "indicatorId": "bdmo_y48012003",
    "year": 2024,
    "value": 7128.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ishimbay",
    "indicatorId": "bdmo_y48012003",
    "year": 2024,
    "value": 12269.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kaltasinsky",
    "indicatorId": "bdmo_y48012003",
    "year": 2024,
    "value": 4075.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "karaidelsky",
    "indicatorId": "bdmo_y48012003",
    "year": 2024,
    "value": 4833.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "karmaskalinsky",
    "indicatorId": "bdmo_y48012003",
    "year": 2024,
    "value": 8418.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "khaibullinsky",
    "indicatorId": "bdmo_y48012003",
    "year": 2024,
    "value": 5560.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kiginsky",
    "indicatorId": "bdmo_y48012003",
    "year": 2024,
    "value": 3791.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "krasnokamsky",
    "indicatorId": "bdmo_y48012003",
    "year": 2024,
    "value": 4129.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kugarchinsky",
    "indicatorId": "bdmo_y48012003",
    "year": 2024,
    "value": 6092.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kumertau",
    "indicatorId": "bdmo_y48012003",
    "year": 2024,
    "value": 9783.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kushnarenkovsky",
    "indicatorId": "bdmo_y48012003",
    "year": 2024,
    "value": 4624.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kuyurgazinsky",
    "indicatorId": "bdmo_y48012003",
    "year": 2024,
    "value": 4095.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "mechetlinsky",
    "indicatorId": "bdmo_y48012003",
    "year": 2024,
    "value": 4176.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "meleuz",
    "indicatorId": "bdmo_y48012003",
    "year": 2024,
    "value": 12036.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "mishkinsky",
    "indicatorId": "bdmo_y48012003",
    "year": 2024,
    "value": 4715.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "miyakinsky",
    "indicatorId": "bdmo_y48012003",
    "year": 2024,
    "value": 5605.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "neftekamsk",
    "indicatorId": "bdmo_y48012003",
    "year": 2024,
    "value": 17902.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "nurimanovsky",
    "indicatorId": "bdmo_y48012003",
    "year": 2024,
    "value": 3516.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "oktyabrsky",
    "indicatorId": "bdmo_y48012003",
    "year": 2024,
    "value": 12758.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "salavat",
    "indicatorId": "bdmo_y48012003",
    "year": 2024,
    "value": 18697.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "salavatsky",
    "indicatorId": "bdmo_y48012003",
    "year": 2024,
    "value": 4859.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sharansky",
    "indicatorId": "bdmo_y48012003",
    "year": 2024,
    "value": 3945.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sibay",
    "indicatorId": "bdmo_y48012003",
    "year": 2024,
    "value": 8504.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlibashevsky",
    "indicatorId": "bdmo_y48012003",
    "year": 2024,
    "value": 4013.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamak",
    "indicatorId": "bdmo_y48012003",
    "year": 2024,
    "value": 32804.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamaksky",
    "indicatorId": "bdmo_y48012003",
    "year": 2024,
    "value": 6626.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "tatyshlinsky",
    "indicatorId": "bdmo_y48012003",
    "year": 2024,
    "value": 4453.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "tuymazy",
    "indicatorId": "bdmo_y48012003",
    "year": 2024,
    "value": 18469.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "uchaly",
    "indicatorId": "bdmo_y48012003",
    "year": 2024,
    "value": 10489.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufa",
    "indicatorId": "bdmo_y48012003",
    "year": 2024,
    "value": 119098.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufimsky",
    "indicatorId": "bdmo_y48012003",
    "year": 2024,
    "value": 12842.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "yanaulsky",
    "indicatorId": "bdmo_y48012003",
    "year": 2024,
    "value": 6914.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "zianchurinsky",
    "indicatorId": "bdmo_y48012003",
    "year": 2024,
    "value": 5409.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "zilairsky",
    "indicatorId": "bdmo_y48012003",
    "year": 2024,
    "value": 2743.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "abzelilovsky",
    "indicatorId": "bdmo_y48012004",
    "year": 2024,
    "value": 34893.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "agidel",
    "indicatorId": "bdmo_y48012004",
    "year": 2024,
    "value": 12480.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "alsheevsky",
    "indicatorId": "bdmo_y48012004",
    "year": 2024,
    "value": 42496.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "arkhangelsky",
    "indicatorId": "bdmo_y48012004",
    "year": 2024,
    "value": 7102.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "askinsky",
    "indicatorId": "bdmo_y48012004",
    "year": 2024,
    "value": 19165.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "aurgazinsky",
    "indicatorId": "bdmo_y48012004",
    "year": 2024,
    "value": 38290.7,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "bakalinsky",
    "indicatorId": "bdmo_y48012004",
    "year": 2024,
    "value": 23673.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "baltachevsky",
    "indicatorId": "bdmo_y48012004",
    "year": 2024,
    "value": 16302.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "baymaksky",
    "indicatorId": "bdmo_y48012004",
    "year": 2024,
    "value": 12407.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "belebeyevsky",
    "indicatorId": "bdmo_y48012004",
    "year": 2024,
    "value": 106707.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "belokataysky",
    "indicatorId": "bdmo_y48012004",
    "year": 2024,
    "value": 4850.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "beloretsk",
    "indicatorId": "bdmo_y48012004",
    "year": 2024,
    "value": 102543.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "birsk",
    "indicatorId": "bdmo_y48012004",
    "year": 2024,
    "value": 54293.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "bizhbulyaksky",
    "indicatorId": "bdmo_y48012004",
    "year": 2024,
    "value": 7603.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "blagovarsky",
    "indicatorId": "bdmo_y48012004",
    "year": 2024,
    "value": 6968.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "blagoveshchensky",
    "indicatorId": "bdmo_y48012004",
    "year": 2024,
    "value": 11352.9,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "buraevsky",
    "indicatorId": "bdmo_y48012004",
    "year": 2024,
    "value": 13993.7,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "burzyansky",
    "indicatorId": "bdmo_y48012004",
    "year": 2024,
    "value": 13273.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "buzdyaksky",
    "indicatorId": "bdmo_y48012004",
    "year": 2024,
    "value": 23030.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "chekmagushevsky",
    "indicatorId": "bdmo_y48012004",
    "year": 2024,
    "value": 22298.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "chishminsky",
    "indicatorId": "bdmo_y48012004",
    "year": 2024,
    "value": 15874.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "davlekanovsky",
    "indicatorId": "bdmo_y48012004",
    "year": 2024,
    "value": 35937.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "duvansky",
    "indicatorId": "bdmo_y48012004",
    "year": 2024,
    "value": 33845.9,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "dyurtyulinsky",
    "indicatorId": "bdmo_y48012004",
    "year": 2024,
    "value": 25360.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ermekeyevsky",
    "indicatorId": "bdmo_y48012004",
    "year": 2024,
    "value": 16818.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "fedorovsky",
    "indicatorId": "bdmo_y48012004",
    "year": 2024,
    "value": 11350.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "gafuriysky",
    "indicatorId": "bdmo_y48012004",
    "year": 2024,
    "value": 25419.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "iglinsky",
    "indicatorId": "bdmo_y48012004",
    "year": 2024,
    "value": 30227.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ilishevsky",
    "indicatorId": "bdmo_y48012004",
    "year": 2024,
    "value": 42505.2,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ishimbay",
    "indicatorId": "bdmo_y48012004",
    "year": 2024,
    "value": 100959.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kaltasinsky",
    "indicatorId": "bdmo_y48012004",
    "year": 2024,
    "value": 7079.9,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "karaidelsky",
    "indicatorId": "bdmo_y48012004",
    "year": 2024,
    "value": 21204.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "karmaskalinsky",
    "indicatorId": "bdmo_y48012004",
    "year": 2024,
    "value": 34152.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "khaibullinsky",
    "indicatorId": "bdmo_y48012004",
    "year": 2024,
    "value": 16584.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kiginsky",
    "indicatorId": "bdmo_y48012004",
    "year": 2024,
    "value": 4937.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "krasnokamsky",
    "indicatorId": "bdmo_y48012004",
    "year": 2024,
    "value": 18805.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kugarchinsky",
    "indicatorId": "bdmo_y48012004",
    "year": 2024,
    "value": 31180.1,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kumertau",
    "indicatorId": "bdmo_y48012004",
    "year": 2024,
    "value": 52018.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kushnarenkovsky",
    "indicatorId": "bdmo_y48012004",
    "year": 2024,
    "value": 28052.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kuyurgazinsky",
    "indicatorId": "bdmo_y48012004",
    "year": 2024,
    "value": 19112.7,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "mechetlinsky",
    "indicatorId": "bdmo_y48012004",
    "year": 2024,
    "value": 17741.1,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "meleuz",
    "indicatorId": "bdmo_y48012004",
    "year": 2024,
    "value": 67369.9,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "mishkinsky",
    "indicatorId": "bdmo_y48012004",
    "year": 2024,
    "value": 19053.7,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "miyakinsky",
    "indicatorId": "bdmo_y48012004",
    "year": 2024,
    "value": 33579.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "neftekamsk",
    "indicatorId": "bdmo_y48012004",
    "year": 2024,
    "value": 102402.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "nurimanovsky",
    "indicatorId": "bdmo_y48012004",
    "year": 2024,
    "value": 4918.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "oktyabrsky",
    "indicatorId": "bdmo_y48012004",
    "year": 2024,
    "value": 36631.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "salavat",
    "indicatorId": "bdmo_y48012004",
    "year": 2024,
    "value": 155364.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "salavatsky",
    "indicatorId": "bdmo_y48012004",
    "year": 2024,
    "value": 12514.2,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sharansky",
    "indicatorId": "bdmo_y48012004",
    "year": 2024,
    "value": 13168.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sibay",
    "indicatorId": "bdmo_y48012004",
    "year": 2024,
    "value": 65874.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlibashevsky",
    "indicatorId": "bdmo_y48012004",
    "year": 2024,
    "value": 6682.9,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamak",
    "indicatorId": "bdmo_y48012004",
    "year": 2024,
    "value": 295364.1,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamaksky",
    "indicatorId": "bdmo_y48012004",
    "year": 2024,
    "value": 22511.9,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "tatyshlinsky",
    "indicatorId": "bdmo_y48012004",
    "year": 2024,
    "value": 17391.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "tuymazy",
    "indicatorId": "bdmo_y48012004",
    "year": 2024,
    "value": 83090.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "uchaly",
    "indicatorId": "bdmo_y48012004",
    "year": 2024,
    "value": 22569.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufa",
    "indicatorId": "bdmo_y48012004",
    "year": 2024,
    "value": 1298728.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufimsky",
    "indicatorId": "bdmo_y48012004",
    "year": 2024,
    "value": 47862.7,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "yanaulsky",
    "indicatorId": "bdmo_y48012004",
    "year": 2024,
    "value": 16145.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "zianchurinsky",
    "indicatorId": "bdmo_y48012004",
    "year": 2024,
    "value": 26559.2,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "zilairsky",
    "indicatorId": "bdmo_y48012004",
    "year": 2024,
    "value": 6823.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "abzelilovsky",
    "indicatorId": "bdmo_y48012005",
    "year": 2024,
    "value": 89.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "agidel",
    "indicatorId": "bdmo_y48012005",
    "year": 2024,
    "value": 491.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "alsheevsky",
    "indicatorId": "bdmo_y48012005",
    "year": 2024,
    "value": 190.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "arkhangelsky",
    "indicatorId": "bdmo_y48012005",
    "year": 2024,
    "value": 44.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "askinsky",
    "indicatorId": "bdmo_y48012005",
    "year": 2024,
    "value": 105.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "aurgazinsky",
    "indicatorId": "bdmo_y48012005",
    "year": 2024,
    "value": 43.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "bakalinsky",
    "indicatorId": "bdmo_y48012005",
    "year": 2024,
    "value": 85.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "baltachevsky",
    "indicatorId": "bdmo_y48012005",
    "year": 2024,
    "value": 16.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "baymaksky",
    "indicatorId": "bdmo_y48012005",
    "year": 2024,
    "value": 192.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "belebeyevsky",
    "indicatorId": "bdmo_y48012005",
    "year": 2024,
    "value": 636.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "belokataysky",
    "indicatorId": "bdmo_y48012005",
    "year": 2024,
    "value": 21.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "beloretsk",
    "indicatorId": "bdmo_y48012005",
    "year": 2024,
    "value": 519.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "birsk",
    "indicatorId": "bdmo_y48012005",
    "year": 2024,
    "value": 891.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "bizhbulyaksky",
    "indicatorId": "bdmo_y48012005",
    "year": 2024,
    "value": 153.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "blagovarsky",
    "indicatorId": "bdmo_y48012005",
    "year": 2024,
    "value": 100.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "blagoveshchensky",
    "indicatorId": "bdmo_y48012005",
    "year": 2024,
    "value": 209.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "buraevsky",
    "indicatorId": "bdmo_y48012005",
    "year": 2024,
    "value": 142.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "burzyansky",
    "indicatorId": "bdmo_y48012005",
    "year": 2024,
    "value": 11.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "buzdyaksky",
    "indicatorId": "bdmo_y48012005",
    "year": 2024,
    "value": 32.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "chekmagushevsky",
    "indicatorId": "bdmo_y48012005",
    "year": 2024,
    "value": 82.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "chishminsky",
    "indicatorId": "bdmo_y48012005",
    "year": 2024,
    "value": 202.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "davlekanovsky",
    "indicatorId": "bdmo_y48012005",
    "year": 2024,
    "value": 138.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "duvansky",
    "indicatorId": "bdmo_y48012005",
    "year": 2024,
    "value": 87.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "dyurtyulinsky",
    "indicatorId": "bdmo_y48012005",
    "year": 2024,
    "value": 1210.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ermekeyevsky",
    "indicatorId": "bdmo_y48012005",
    "year": 2024,
    "value": 21.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "fedorovsky",
    "indicatorId": "bdmo_y48012005",
    "year": 2024,
    "value": 39.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "gafuriysky",
    "indicatorId": "bdmo_y48012005",
    "year": 2024,
    "value": 183.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "iglinsky",
    "indicatorId": "bdmo_y48012005",
    "year": 2024,
    "value": 123.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ilishevsky",
    "indicatorId": "bdmo_y48012005",
    "year": 2024,
    "value": 312.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ishimbay",
    "indicatorId": "bdmo_y48012005",
    "year": 2024,
    "value": 1523.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kaltasinsky",
    "indicatorId": "bdmo_y48012005",
    "year": 2024,
    "value": 49.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "karaidelsky",
    "indicatorId": "bdmo_y48012005",
    "year": 2024,
    "value": 98.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "karmaskalinsky",
    "indicatorId": "bdmo_y48012005",
    "year": 2024,
    "value": 100.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "khaibullinsky",
    "indicatorId": "bdmo_y48012005",
    "year": 2024,
    "value": 75.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kiginsky",
    "indicatorId": "bdmo_y48012005",
    "year": 2024,
    "value": 44.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "krasnokamsky",
    "indicatorId": "bdmo_y48012005",
    "year": 2024,
    "value": 42.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kugarchinsky",
    "indicatorId": "bdmo_y48012005",
    "year": 2024,
    "value": 275.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kumertau",
    "indicatorId": "bdmo_y48012005",
    "year": 2024,
    "value": 1680.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kushnarenkovsky",
    "indicatorId": "bdmo_y48012005",
    "year": 2024,
    "value": 31.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kuyurgazinsky",
    "indicatorId": "bdmo_y48012005",
    "year": 2024,
    "value": 29.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "mechetlinsky",
    "indicatorId": "bdmo_y48012005",
    "year": 2024,
    "value": 54.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "meleuz",
    "indicatorId": "bdmo_y48012005",
    "year": 2024,
    "value": 1399.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "mishkinsky",
    "indicatorId": "bdmo_y48012005",
    "year": 2024,
    "value": 28.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "miyakinsky",
    "indicatorId": "bdmo_y48012005",
    "year": 2024,
    "value": 215.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "neftekamsk",
    "indicatorId": "bdmo_y48012005",
    "year": 2024,
    "value": 4697.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "nurimanovsky",
    "indicatorId": "bdmo_y48012005",
    "year": 2024,
    "value": 22.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "oktyabrsky",
    "indicatorId": "bdmo_y48012005",
    "year": 2024,
    "value": 1040.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "salavat",
    "indicatorId": "bdmo_y48012005",
    "year": 2024,
    "value": 919.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "salavatsky",
    "indicatorId": "bdmo_y48012005",
    "year": 2024,
    "value": 80.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sharansky",
    "indicatorId": "bdmo_y48012005",
    "year": 2024,
    "value": 31.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sibay",
    "indicatorId": "bdmo_y48012005",
    "year": 2024,
    "value": 1049.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlibashevsky",
    "indicatorId": "bdmo_y48012005",
    "year": 2024,
    "value": 33.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamak",
    "indicatorId": "bdmo_y48012005",
    "year": 2024,
    "value": 4483.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamaksky",
    "indicatorId": "bdmo_y48012005",
    "year": 2024,
    "value": 305.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "tatyshlinsky",
    "indicatorId": "bdmo_y48012005",
    "year": 2024,
    "value": 117.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "tuymazy",
    "indicatorId": "bdmo_y48012005",
    "year": 2024,
    "value": 1028.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "uchaly",
    "indicatorId": "bdmo_y48012005",
    "year": 2024,
    "value": 318.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufa",
    "indicatorId": "bdmo_y48012005",
    "year": 2024,
    "value": 6044.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufimsky",
    "indicatorId": "bdmo_y48012005",
    "year": 2024,
    "value": 245.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "yanaulsky",
    "indicatorId": "bdmo_y48012005",
    "year": 2024,
    "value": 962.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "zianchurinsky",
    "indicatorId": "bdmo_y48012005",
    "year": 2024,
    "value": 186.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "zilairsky",
    "indicatorId": "bdmo_y48012005",
    "year": 2024,
    "value": 22.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "abzelilovsky",
    "indicatorId": "bdmo_y48014006",
    "year": 2024,
    "value": 63.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "agidel",
    "indicatorId": "bdmo_y48014006",
    "year": 2024,
    "value": 94.7,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "alsheevsky",
    "indicatorId": "bdmo_y48014006",
    "year": 2024,
    "value": 51.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "arkhangelsky",
    "indicatorId": "bdmo_y48014006",
    "year": 2024,
    "value": 67.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "askinsky",
    "indicatorId": "bdmo_y48014006",
    "year": 2024,
    "value": 61.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "aurgazinsky",
    "indicatorId": "bdmo_y48014006",
    "year": 2024,
    "value": 56.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "bakalinsky",
    "indicatorId": "bdmo_y48014006",
    "year": 2024,
    "value": 76.1,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "baltachevsky",
    "indicatorId": "bdmo_y48014006",
    "year": 2024,
    "value": 57.9,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "baymaksky",
    "indicatorId": "bdmo_y48014006",
    "year": 2024,
    "value": 61.2,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "belebeyevsky",
    "indicatorId": "bdmo_y48014006",
    "year": 2024,
    "value": 92.2,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "belokataysky",
    "indicatorId": "bdmo_y48014006",
    "year": 2024,
    "value": 72.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "beloretsk",
    "indicatorId": "bdmo_y48014006",
    "year": 2024,
    "value": 78.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "birsk",
    "indicatorId": "bdmo_y48014006",
    "year": 2024,
    "value": 67.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "bizhbulyaksky",
    "indicatorId": "bdmo_y48014006",
    "year": 2024,
    "value": 68.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "blagovarsky",
    "indicatorId": "bdmo_y48014006",
    "year": 2024,
    "value": 51.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "blagoveshchensky",
    "indicatorId": "bdmo_y48014006",
    "year": 2024,
    "value": 80.1,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "buraevsky",
    "indicatorId": "bdmo_y48014006",
    "year": 2024,
    "value": 67.7,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "burzyansky",
    "indicatorId": "bdmo_y48014006",
    "year": 2024,
    "value": 61.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "buzdyaksky",
    "indicatorId": "bdmo_y48014006",
    "year": 2024,
    "value": 61.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "chekmagushevsky",
    "indicatorId": "bdmo_y48014006",
    "year": 2024,
    "value": 60.9,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "chishminsky",
    "indicatorId": "bdmo_y48014006",
    "year": 2024,
    "value": 49.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "davlekanovsky",
    "indicatorId": "bdmo_y48014006",
    "year": 2024,
    "value": 61.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "duvansky",
    "indicatorId": "bdmo_y48014006",
    "year": 2024,
    "value": 76.9,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "dyurtyulinsky",
    "indicatorId": "bdmo_y48014006",
    "year": 2024,
    "value": 64.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ermekeyevsky",
    "indicatorId": "bdmo_y48014006",
    "year": 2024,
    "value": 35.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "fedorovsky",
    "indicatorId": "bdmo_y48014006",
    "year": 2024,
    "value": 35.2,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "gafuriysky",
    "indicatorId": "bdmo_y48014006",
    "year": 2024,
    "value": 61.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "iglinsky",
    "indicatorId": "bdmo_y48014006",
    "year": 2024,
    "value": 56.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ilishevsky",
    "indicatorId": "bdmo_y48014006",
    "year": 2024,
    "value": 69.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ishimbay",
    "indicatorId": "bdmo_y48014006",
    "year": 2024,
    "value": 102.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kaltasinsky",
    "indicatorId": "bdmo_y48014006",
    "year": 2024,
    "value": 82.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "karaidelsky",
    "indicatorId": "bdmo_y48014006",
    "year": 2024,
    "value": 64.2,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "karmaskalinsky",
    "indicatorId": "bdmo_y48014006",
    "year": 2024,
    "value": 62.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "khaibullinsky",
    "indicatorId": "bdmo_y48014006",
    "year": 2024,
    "value": 64.2,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kiginsky",
    "indicatorId": "bdmo_y48014006",
    "year": 2024,
    "value": 64.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "krasnokamsky",
    "indicatorId": "bdmo_y48014006",
    "year": 2024,
    "value": 72.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kugarchinsky",
    "indicatorId": "bdmo_y48014006",
    "year": 2024,
    "value": 62.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kumertau",
    "indicatorId": "bdmo_y48014006",
    "year": 2024,
    "value": 85.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kushnarenkovsky",
    "indicatorId": "bdmo_y48014006",
    "year": 2024,
    "value": 64.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kuyurgazinsky",
    "indicatorId": "bdmo_y48014006",
    "year": 2024,
    "value": 58.2,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "mechetlinsky",
    "indicatorId": "bdmo_y48014006",
    "year": 2024,
    "value": 79.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "meleuz",
    "indicatorId": "bdmo_y48014006",
    "year": 2024,
    "value": 75.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "mishkinsky",
    "indicatorId": "bdmo_y48014006",
    "year": 2024,
    "value": 59.7,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "miyakinsky",
    "indicatorId": "bdmo_y48014006",
    "year": 2024,
    "value": 67.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "neftekamsk",
    "indicatorId": "bdmo_y48014006",
    "year": 2024,
    "value": 93.2,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "nurimanovsky",
    "indicatorId": "bdmo_y48014006",
    "year": 2024,
    "value": 65.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "oktyabrsky",
    "indicatorId": "bdmo_y48014006",
    "year": 2024,
    "value": 89.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "salavat",
    "indicatorId": "bdmo_y48014006",
    "year": 2024,
    "value": 76.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "salavatsky",
    "indicatorId": "bdmo_y48014006",
    "year": 2024,
    "value": 62.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sharansky",
    "indicatorId": "bdmo_y48014006",
    "year": 2024,
    "value": 70.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sibay",
    "indicatorId": "bdmo_y48014006",
    "year": 2024,
    "value": 93.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlibashevsky",
    "indicatorId": "bdmo_y48014006",
    "year": 2024,
    "value": 59.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamak",
    "indicatorId": "bdmo_y48014006",
    "year": 2024,
    "value": 89.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamaksky",
    "indicatorId": "bdmo_y48014006",
    "year": 2024,
    "value": 36.1,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "tatyshlinsky",
    "indicatorId": "bdmo_y48014006",
    "year": 2024,
    "value": 70.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "tuymazy",
    "indicatorId": "bdmo_y48014006",
    "year": 2024,
    "value": 77.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "uchaly",
    "indicatorId": "bdmo_y48014006",
    "year": 2024,
    "value": 66.7,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufa",
    "indicatorId": "bdmo_y48014006",
    "year": 2024,
    "value": 79.2,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufimsky",
    "indicatorId": "bdmo_y48014006",
    "year": 2024,
    "value": 99.1,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "yanaulsky",
    "indicatorId": "bdmo_y48014006",
    "year": 2024,
    "value": 80.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "zianchurinsky",
    "indicatorId": "bdmo_y48014006",
    "year": 2024,
    "value": 72.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "zilairsky",
    "indicatorId": "bdmo_y48014006",
    "year": 2024,
    "value": 65.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "abzelilovsky",
    "indicatorId": "bdmo_y48014007",
    "year": 2024,
    "value": 40.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "agidel",
    "indicatorId": "bdmo_y48014007",
    "year": 2024,
    "value": 66.7,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "alsheevsky",
    "indicatorId": "bdmo_y48014007",
    "year": 2024,
    "value": 28.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "arkhangelsky",
    "indicatorId": "bdmo_y48014007",
    "year": 2024,
    "value": 33.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "askinsky",
    "indicatorId": "bdmo_y48014007",
    "year": 2024,
    "value": 40.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "aurgazinsky",
    "indicatorId": "bdmo_y48014007",
    "year": 2024,
    "value": 80.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "bakalinsky",
    "indicatorId": "bdmo_y48014007",
    "year": 2024,
    "value": 66.7,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "baltachevsky",
    "indicatorId": "bdmo_y48014007",
    "year": 2024,
    "value": 0.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "baymaksky",
    "indicatorId": "bdmo_y48014007",
    "year": 2024,
    "value": 50.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "belebeyevsky",
    "indicatorId": "bdmo_y48014007",
    "year": 2024,
    "value": 33.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "belokataysky",
    "indicatorId": "bdmo_y48014007",
    "year": 2024,
    "value": 75.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "beloretsk",
    "indicatorId": "bdmo_y48014007",
    "year": 2024,
    "value": 29.2,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "birsk",
    "indicatorId": "bdmo_y48014007",
    "year": 2024,
    "value": 83.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "bizhbulyaksky",
    "indicatorId": "bdmo_y48014007",
    "year": 2024,
    "value": 66.7,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "blagovarsky",
    "indicatorId": "bdmo_y48014007",
    "year": 2024,
    "value": 25.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "blagoveshchensky",
    "indicatorId": "bdmo_y48014007",
    "year": 2024,
    "value": 80.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "buraevsky",
    "indicatorId": "bdmo_y48014007",
    "year": 2024,
    "value": 50.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "burzyansky",
    "indicatorId": "bdmo_y48014007",
    "year": 2024,
    "value": 0.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "buzdyaksky",
    "indicatorId": "bdmo_y48014007",
    "year": 2024,
    "value": 25.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "chekmagushevsky",
    "indicatorId": "bdmo_y48014007",
    "year": 2024,
    "value": 41.7,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "chishminsky",
    "indicatorId": "bdmo_y48014007",
    "year": 2024,
    "value": 50.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "davlekanovsky",
    "indicatorId": "bdmo_y48014007",
    "year": 2024,
    "value": 50.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "duvansky",
    "indicatorId": "bdmo_y48014007",
    "year": 2024,
    "value": 40.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "dyurtyulinsky",
    "indicatorId": "bdmo_y48014007",
    "year": 2024,
    "value": 26.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ermekeyevsky",
    "indicatorId": "bdmo_y48014007",
    "year": 2024,
    "value": 100.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "fedorovsky",
    "indicatorId": "bdmo_y48014007",
    "year": 2024,
    "value": 57.1,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "gafuriysky",
    "indicatorId": "bdmo_y48014007",
    "year": 2024,
    "value": 25.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "iglinsky",
    "indicatorId": "bdmo_y48014007",
    "year": 2024,
    "value": 30.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ilishevsky",
    "indicatorId": "bdmo_y48014007",
    "year": 2024,
    "value": 66.7,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ishimbay",
    "indicatorId": "bdmo_y48014007",
    "year": 2024,
    "value": 84.2,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kaltasinsky",
    "indicatorId": "bdmo_y48014007",
    "year": 2024,
    "value": 57.1,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "karaidelsky",
    "indicatorId": "bdmo_y48014007",
    "year": 2024,
    "value": 33.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "karmaskalinsky",
    "indicatorId": "bdmo_y48014007",
    "year": 2024,
    "value": 87.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "khaibullinsky",
    "indicatorId": "bdmo_y48014007",
    "year": 2024,
    "value": 46.2,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kiginsky",
    "indicatorId": "bdmo_y48014007",
    "year": 2024,
    "value": 80.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "krasnokamsky",
    "indicatorId": "bdmo_y48014007",
    "year": 2024,
    "value": 100.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kugarchinsky",
    "indicatorId": "bdmo_y48014007",
    "year": 2024,
    "value": 6.7,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kumertau",
    "indicatorId": "bdmo_y48014007",
    "year": 2024,
    "value": 42.9,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kushnarenkovsky",
    "indicatorId": "bdmo_y48014007",
    "year": 2024,
    "value": 50.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kuyurgazinsky",
    "indicatorId": "bdmo_y48014007",
    "year": 2024,
    "value": 33.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "mechetlinsky",
    "indicatorId": "bdmo_y48014007",
    "year": 2024,
    "value": 80.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "meleuz",
    "indicatorId": "bdmo_y48014007",
    "year": 2024,
    "value": 12.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "mishkinsky",
    "indicatorId": "bdmo_y48014007",
    "year": 2024,
    "value": 100.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "miyakinsky",
    "indicatorId": "bdmo_y48014007",
    "year": 2024,
    "value": 37.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "neftekamsk",
    "indicatorId": "bdmo_y48014007",
    "year": 2024,
    "value": 83.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "nurimanovsky",
    "indicatorId": "bdmo_y48014007",
    "year": 2024,
    "value": 100.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "oktyabrsky",
    "indicatorId": "bdmo_y48014007",
    "year": 2024,
    "value": 41.7,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "salavat",
    "indicatorId": "bdmo_y48014007",
    "year": 2024,
    "value": 25.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "salavatsky",
    "indicatorId": "bdmo_y48014007",
    "year": 2024,
    "value": 40.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sharansky",
    "indicatorId": "bdmo_y48014007",
    "year": 2024,
    "value": 50.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sibay",
    "indicatorId": "bdmo_y48014007",
    "year": 2024,
    "value": 68.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlibashevsky",
    "indicatorId": "bdmo_y48014007",
    "year": 2024,
    "value": 83.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamak",
    "indicatorId": "bdmo_y48014007",
    "year": 2024,
    "value": 25.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamaksky",
    "indicatorId": "bdmo_y48014007",
    "year": 2024,
    "value": 25.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "tatyshlinsky",
    "indicatorId": "bdmo_y48014007",
    "year": 2024,
    "value": 100.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "tuymazy",
    "indicatorId": "bdmo_y48014007",
    "year": 2024,
    "value": 16.1,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "uchaly",
    "indicatorId": "bdmo_y48014007",
    "year": 2024,
    "value": 15.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufa",
    "indicatorId": "bdmo_y48014007",
    "year": 2024,
    "value": 45.7,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufimsky",
    "indicatorId": "bdmo_y48014007",
    "year": 2024,
    "value": 41.7,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "yanaulsky",
    "indicatorId": "bdmo_y48014007",
    "year": 2024,
    "value": 36.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "zianchurinsky",
    "indicatorId": "bdmo_y48014007",
    "year": 2024,
    "value": 37.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "zilairsky",
    "indicatorId": "bdmo_y48014007",
    "year": 2024,
    "value": 37.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "abzelilovsky",
    "indicatorId": "bdmo_y48043001",
    "year": 2024,
    "value": 26.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "alsheevsky",
    "indicatorId": "bdmo_y48043001",
    "year": 2024,
    "value": 16.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "arkhangelsky",
    "indicatorId": "bdmo_y48043001",
    "year": 2024,
    "value": 5.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "askinsky",
    "indicatorId": "bdmo_y48043001",
    "year": 2024,
    "value": 10.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "aurgazinsky",
    "indicatorId": "bdmo_y48043001",
    "year": 2024,
    "value": 5.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "bakalinsky",
    "indicatorId": "bdmo_y48043001",
    "year": 2024,
    "value": 25.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "baltachevsky",
    "indicatorId": "bdmo_y48043001",
    "year": 2024,
    "value": 15.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "baymaksky",
    "indicatorId": "bdmo_y48043001",
    "year": 2024,
    "value": 28.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "belebeyevsky",
    "indicatorId": "bdmo_y48043001",
    "year": 2024,
    "value": 14.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "belokataysky",
    "indicatorId": "bdmo_y48043001",
    "year": 2024,
    "value": 2.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "beloretsk",
    "indicatorId": "bdmo_y48043001",
    "year": 2024,
    "value": 61.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "birsk",
    "indicatorId": "bdmo_y48043001",
    "year": 2024,
    "value": 18.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "bizhbulyaksky",
    "indicatorId": "bdmo_y48043001",
    "year": 2024,
    "value": 6.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "blagovarsky",
    "indicatorId": "bdmo_y48043001",
    "year": 2024,
    "value": 3.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "blagoveshchensky",
    "indicatorId": "bdmo_y48043001",
    "year": 2024,
    "value": 2.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "buraevsky",
    "indicatorId": "bdmo_y48043001",
    "year": 2024,
    "value": 6.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "burzyansky",
    "indicatorId": "bdmo_y48043001",
    "year": 2024,
    "value": 4.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "buzdyaksky",
    "indicatorId": "bdmo_y48043001",
    "year": 2024,
    "value": 5.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "chekmagushevsky",
    "indicatorId": "bdmo_y48043001",
    "year": 2024,
    "value": 18.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "chishminsky",
    "indicatorId": "bdmo_y48043001",
    "year": 2024,
    "value": 39.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "davlekanovsky",
    "indicatorId": "bdmo_y48043001",
    "year": 2024,
    "value": 17.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "duvansky",
    "indicatorId": "bdmo_y48043001",
    "year": 2024,
    "value": 24.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "dyurtyulinsky",
    "indicatorId": "bdmo_y48043001",
    "year": 2024,
    "value": 19.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ermekeyevsky",
    "indicatorId": "bdmo_y48043001",
    "year": 2024,
    "value": 6.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "fedorovsky",
    "indicatorId": "bdmo_y48043001",
    "year": 2024,
    "value": 1.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "gafuriysky",
    "indicatorId": "bdmo_y48043001",
    "year": 2024,
    "value": 28.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "iglinsky",
    "indicatorId": "bdmo_y48043001",
    "year": 2024,
    "value": 58.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ilishevsky",
    "indicatorId": "bdmo_y48043001",
    "year": 2024,
    "value": 9.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ishimbay",
    "indicatorId": "bdmo_y48043001",
    "year": 2024,
    "value": 42.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kaltasinsky",
    "indicatorId": "bdmo_y48043001",
    "year": 2024,
    "value": 1.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "karaidelsky",
    "indicatorId": "bdmo_y48043001",
    "year": 2024,
    "value": 44.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "karmaskalinsky",
    "indicatorId": "bdmo_y48043001",
    "year": 2024,
    "value": 53.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "khaibullinsky",
    "indicatorId": "bdmo_y48043001",
    "year": 2024,
    "value": 17.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kiginsky",
    "indicatorId": "bdmo_y48043001",
    "year": 2024,
    "value": 5.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "krasnokamsky",
    "indicatorId": "bdmo_y48043001",
    "year": 2024,
    "value": 10.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kugarchinsky",
    "indicatorId": "bdmo_y48043001",
    "year": 2024,
    "value": 17.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kumertau",
    "indicatorId": "bdmo_y48043001",
    "year": 2024,
    "value": 44.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kushnarenkovsky",
    "indicatorId": "bdmo_y48043001",
    "year": 2024,
    "value": 12.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kuyurgazinsky",
    "indicatorId": "bdmo_y48043001",
    "year": 2024,
    "value": 1.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "mechetlinsky",
    "indicatorId": "bdmo_y48043001",
    "year": 2024,
    "value": 23.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "meleuz",
    "indicatorId": "bdmo_y48043001",
    "year": 2024,
    "value": 26.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "mishkinsky",
    "indicatorId": "bdmo_y48043001",
    "year": 2024,
    "value": 6.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "miyakinsky",
    "indicatorId": "bdmo_y48043001",
    "year": 2024,
    "value": 7.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "neftekamsk",
    "indicatorId": "bdmo_y48043001",
    "year": 2024,
    "value": 120.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "nurimanovsky",
    "indicatorId": "bdmo_y48043001",
    "year": 2024,
    "value": 8.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "oktyabrsky",
    "indicatorId": "bdmo_y48043001",
    "year": 2024,
    "value": 41.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "salavat",
    "indicatorId": "bdmo_y48043001",
    "year": 2024,
    "value": 13.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "salavatsky",
    "indicatorId": "bdmo_y48043001",
    "year": 2024,
    "value": 15.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sharansky",
    "indicatorId": "bdmo_y48043001",
    "year": 2024,
    "value": 7.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sibay",
    "indicatorId": "bdmo_y48043001",
    "year": 2024,
    "value": 28.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlibashevsky",
    "indicatorId": "bdmo_y48043001",
    "year": 2024,
    "value": 8.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamak",
    "indicatorId": "bdmo_y48043001",
    "year": 2024,
    "value": 42.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamaksky",
    "indicatorId": "bdmo_y48043001",
    "year": 2024,
    "value": 76.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "tatyshlinsky",
    "indicatorId": "bdmo_y48043001",
    "year": 2024,
    "value": 9.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "tuymazy",
    "indicatorId": "bdmo_y48043001",
    "year": 2024,
    "value": 76.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "uchaly",
    "indicatorId": "bdmo_y48043001",
    "year": 2024,
    "value": 18.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufa",
    "indicatorId": "bdmo_y48043001",
    "year": 2024,
    "value": 595.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufimsky",
    "indicatorId": "bdmo_y48043001",
    "year": 2024,
    "value": 334.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "yanaulsky",
    "indicatorId": "bdmo_y48043001",
    "year": 2024,
    "value": 16.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "zianchurinsky",
    "indicatorId": "bdmo_y48043001",
    "year": 2024,
    "value": 11.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "zilairsky",
    "indicatorId": "bdmo_y48043001",
    "year": 2024,
    "value": 10.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "abzelilovsky",
    "indicatorId": "bdmo_y48043002",
    "year": 2024,
    "value": 1.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "alsheevsky",
    "indicatorId": "bdmo_y48043002",
    "year": 2024,
    "value": 16.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "arkhangelsky",
    "indicatorId": "bdmo_y48043002",
    "year": 2024,
    "value": 2.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "askinsky",
    "indicatorId": "bdmo_y48043002",
    "year": 2024,
    "value": 7.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "aurgazinsky",
    "indicatorId": "bdmo_y48043002",
    "year": 2024,
    "value": 3.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "bakalinsky",
    "indicatorId": "bdmo_y48043002",
    "year": 2024,
    "value": 13.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "baltachevsky",
    "indicatorId": "bdmo_y48043002",
    "year": 2024,
    "value": 7.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "baymaksky",
    "indicatorId": "bdmo_y48043002",
    "year": 2024,
    "value": 18.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "belebeyevsky",
    "indicatorId": "bdmo_y48043002",
    "year": 2024,
    "value": 6.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "belokataysky",
    "indicatorId": "bdmo_y48043002",
    "year": 2024,
    "value": 2.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "beloretsk",
    "indicatorId": "bdmo_y48043002",
    "year": 2024,
    "value": 39.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "birsk",
    "indicatorId": "bdmo_y48043002",
    "year": 2024,
    "value": 16.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "bizhbulyaksky",
    "indicatorId": "bdmo_y48043002",
    "year": 2024,
    "value": 4.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "blagovarsky",
    "indicatorId": "bdmo_y48043002",
    "year": 2024,
    "value": 3.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "blagoveshchensky",
    "indicatorId": "bdmo_y48043002",
    "year": 2024,
    "value": 9.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "buraevsky",
    "indicatorId": "bdmo_y48043002",
    "year": 2024,
    "value": 8.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "burzyansky",
    "indicatorId": "bdmo_y48043002",
    "year": 2024,
    "value": 3.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "buzdyaksky",
    "indicatorId": "bdmo_y48043002",
    "year": 2024,
    "value": 9.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "chekmagushevsky",
    "indicatorId": "bdmo_y48043002",
    "year": 2024,
    "value": 13.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "chishminsky",
    "indicatorId": "bdmo_y48043002",
    "year": 2024,
    "value": 15.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "davlekanovsky",
    "indicatorId": "bdmo_y48043002",
    "year": 2024,
    "value": 14.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "duvansky",
    "indicatorId": "bdmo_y48043002",
    "year": 2024,
    "value": 17.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "dyurtyulinsky",
    "indicatorId": "bdmo_y48043002",
    "year": 2024,
    "value": 1.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ermekeyevsky",
    "indicatorId": "bdmo_y48043002",
    "year": 2024,
    "value": 5.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "fedorovsky",
    "indicatorId": "bdmo_y48043002",
    "year": 2024,
    "value": 1.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "gafuriysky",
    "indicatorId": "bdmo_y48043002",
    "year": 2024,
    "value": 24.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "iglinsky",
    "indicatorId": "bdmo_y48043002",
    "year": 2024,
    "value": 51.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ilishevsky",
    "indicatorId": "bdmo_y48043002",
    "year": 2024,
    "value": 13.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ishimbay",
    "indicatorId": "bdmo_y48043002",
    "year": 2024,
    "value": 19.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kaltasinsky",
    "indicatorId": "bdmo_y48043002",
    "year": 2024,
    "value": 8.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "karaidelsky",
    "indicatorId": "bdmo_y48043002",
    "year": 2024,
    "value": 17.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "karmaskalinsky",
    "indicatorId": "bdmo_y48043002",
    "year": 2024,
    "value": 47.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "khaibullinsky",
    "indicatorId": "bdmo_y48043002",
    "year": 2024,
    "value": 11.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kiginsky",
    "indicatorId": "bdmo_y48043002",
    "year": 2024,
    "value": 3.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "krasnokamsky",
    "indicatorId": "bdmo_y48043002",
    "year": 2024,
    "value": 17.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kugarchinsky",
    "indicatorId": "bdmo_y48043002",
    "year": 2024,
    "value": 8.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kumertau",
    "indicatorId": "bdmo_y48043002",
    "year": 2024,
    "value": 1.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kushnarenkovsky",
    "indicatorId": "bdmo_y48043002",
    "year": 2024,
    "value": 5.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kuyurgazinsky",
    "indicatorId": "bdmo_y48043002",
    "year": 2024,
    "value": 7.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "mechetlinsky",
    "indicatorId": "bdmo_y48043002",
    "year": 2024,
    "value": 27.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "meleuz",
    "indicatorId": "bdmo_y48043002",
    "year": 2024,
    "value": 21.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "mezhgorye",
    "indicatorId": "bdmo_y48043002",
    "year": 2024,
    "value": 3.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "mishkinsky",
    "indicatorId": "bdmo_y48043002",
    "year": 2024,
    "value": 4.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "miyakinsky",
    "indicatorId": "bdmo_y48043002",
    "year": 2024,
    "value": 5.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "neftekamsk",
    "indicatorId": "bdmo_y48043002",
    "year": 2024,
    "value": 140.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "nurimanovsky",
    "indicatorId": "bdmo_y48043002",
    "year": 2024,
    "value": 5.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "oktyabrsky",
    "indicatorId": "bdmo_y48043002",
    "year": 2024,
    "value": 85.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "salavat",
    "indicatorId": "bdmo_y48043002",
    "year": 2024,
    "value": 14.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "salavatsky",
    "indicatorId": "bdmo_y48043002",
    "year": 2024,
    "value": 5.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sharansky",
    "indicatorId": "bdmo_y48043002",
    "year": 2024,
    "value": 10.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sibay",
    "indicatorId": "bdmo_y48043002",
    "year": 2024,
    "value": 34.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlibashevsky",
    "indicatorId": "bdmo_y48043002",
    "year": 2024,
    "value": 6.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamak",
    "indicatorId": "bdmo_y48043002",
    "year": 2024,
    "value": 34.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamaksky",
    "indicatorId": "bdmo_y48043002",
    "year": 2024,
    "value": 30.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "tuymazy",
    "indicatorId": "bdmo_y48043002",
    "year": 2024,
    "value": 42.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "uchaly",
    "indicatorId": "bdmo_y48043002",
    "year": 2024,
    "value": 12.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufa",
    "indicatorId": "bdmo_y48043002",
    "year": 2024,
    "value": 201.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufimsky",
    "indicatorId": "bdmo_y48043002",
    "year": 2024,
    "value": 259.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "yanaulsky",
    "indicatorId": "bdmo_y48043002",
    "year": 2024,
    "value": 11.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "zianchurinsky",
    "indicatorId": "bdmo_y48043002",
    "year": 2024,
    "value": 15.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "zilairsky",
    "indicatorId": "bdmo_y48043002",
    "year": 2024,
    "value": 2.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "abzelilovsky",
    "indicatorId": "bdmo_y48043004",
    "year": 2024,
    "value": 212.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "agidel",
    "indicatorId": "bdmo_y48043004",
    "year": 2024,
    "value": 1.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "alsheevsky",
    "indicatorId": "bdmo_y48043004",
    "year": 2024,
    "value": 97.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "arkhangelsky",
    "indicatorId": "bdmo_y48043004",
    "year": 2024,
    "value": 62.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "askinsky",
    "indicatorId": "bdmo_y48043004",
    "year": 2024,
    "value": 123.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "aurgazinsky",
    "indicatorId": "bdmo_y48043004",
    "year": 2024,
    "value": 92.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "bakalinsky",
    "indicatorId": "bdmo_y48043004",
    "year": 2024,
    "value": 66.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "baltachevsky",
    "indicatorId": "bdmo_y48043004",
    "year": 2024,
    "value": 73.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "baymaksky",
    "indicatorId": "bdmo_y48043004",
    "year": 2024,
    "value": 76.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "belebeyevsky",
    "indicatorId": "bdmo_y48043004",
    "year": 2024,
    "value": 99.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "belokataysky",
    "indicatorId": "bdmo_y48043004",
    "year": 2024,
    "value": 26.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "beloretsk",
    "indicatorId": "bdmo_y48043004",
    "year": 2024,
    "value": 168.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "birsk",
    "indicatorId": "bdmo_y48043004",
    "year": 2024,
    "value": 43.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "bizhbulyaksky",
    "indicatorId": "bdmo_y48043004",
    "year": 2024,
    "value": 5.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "blagovarsky",
    "indicatorId": "bdmo_y48043004",
    "year": 2024,
    "value": 31.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "blagoveshchensky",
    "indicatorId": "bdmo_y48043004",
    "year": 2024,
    "value": 89.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "buraevsky",
    "indicatorId": "bdmo_y48043004",
    "year": 2024,
    "value": 107.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "burzyansky",
    "indicatorId": "bdmo_y48043004",
    "year": 2024,
    "value": 84.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "buzdyaksky",
    "indicatorId": "bdmo_y48043004",
    "year": 2024,
    "value": 43.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "chekmagushevsky",
    "indicatorId": "bdmo_y48043004",
    "year": 2024,
    "value": 52.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "chishminsky",
    "indicatorId": "bdmo_y48043004",
    "year": 2024,
    "value": 167.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "davlekanovsky",
    "indicatorId": "bdmo_y48043004",
    "year": 2024,
    "value": 51.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "duvansky",
    "indicatorId": "bdmo_y48043004",
    "year": 2024,
    "value": 176.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "dyurtyulinsky",
    "indicatorId": "bdmo_y48043004",
    "year": 2024,
    "value": 165.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ermekeyevsky",
    "indicatorId": "bdmo_y48043004",
    "year": 2024,
    "value": 7.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "fedorovsky",
    "indicatorId": "bdmo_y48043004",
    "year": 2024,
    "value": 2.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "gafuriysky",
    "indicatorId": "bdmo_y48043004",
    "year": 2024,
    "value": 115.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ilishevsky",
    "indicatorId": "bdmo_y48043004",
    "year": 2024,
    "value": 62.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ishimbay",
    "indicatorId": "bdmo_y48043004",
    "year": 2024,
    "value": 134.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kaltasinsky",
    "indicatorId": "bdmo_y48043004",
    "year": 2024,
    "value": 42.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "karaidelsky",
    "indicatorId": "bdmo_y48043004",
    "year": 2024,
    "value": 91.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "karmaskalinsky",
    "indicatorId": "bdmo_y48043004",
    "year": 2024,
    "value": 511.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "khaibullinsky",
    "indicatorId": "bdmo_y48043004",
    "year": 2024,
    "value": 94.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kiginsky",
    "indicatorId": "bdmo_y48043004",
    "year": 2024,
    "value": 46.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "krasnokamsky",
    "indicatorId": "bdmo_y48043004",
    "year": 2024,
    "value": 75.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kugarchinsky",
    "indicatorId": "bdmo_y48043004",
    "year": 2024,
    "value": 58.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kumertau",
    "indicatorId": "bdmo_y48043004",
    "year": 2024,
    "value": 45.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kushnarenkovsky",
    "indicatorId": "bdmo_y48043004",
    "year": 2024,
    "value": 82.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kuyurgazinsky",
    "indicatorId": "bdmo_y48043004",
    "year": 2024,
    "value": 62.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "mechetlinsky",
    "indicatorId": "bdmo_y48043004",
    "year": 2024,
    "value": 80.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "meleuz",
    "indicatorId": "bdmo_y48043004",
    "year": 2024,
    "value": 280.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "mishkinsky",
    "indicatorId": "bdmo_y48043004",
    "year": 2024,
    "value": 86.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "miyakinsky",
    "indicatorId": "bdmo_y48043004",
    "year": 2024,
    "value": 69.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "neftekamsk",
    "indicatorId": "bdmo_y48043004",
    "year": 2024,
    "value": 54.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "nurimanovsky",
    "indicatorId": "bdmo_y48043004",
    "year": 2024,
    "value": 114.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "oktyabrsky",
    "indicatorId": "bdmo_y48043004",
    "year": 2024,
    "value": 143.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "salavat",
    "indicatorId": "bdmo_y48043004",
    "year": 2024,
    "value": 51.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "salavatsky",
    "indicatorId": "bdmo_y48043004",
    "year": 2024,
    "value": 91.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sharansky",
    "indicatorId": "bdmo_y48043004",
    "year": 2024,
    "value": 53.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sibay",
    "indicatorId": "bdmo_y48043004",
    "year": 2024,
    "value": 96.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlibashevsky",
    "indicatorId": "bdmo_y48043004",
    "year": 2024,
    "value": 34.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamak",
    "indicatorId": "bdmo_y48043004",
    "year": 2024,
    "value": 53.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamaksky",
    "indicatorId": "bdmo_y48043004",
    "year": 2024,
    "value": 289.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "tatyshlinsky",
    "indicatorId": "bdmo_y48043004",
    "year": 2024,
    "value": 61.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "tuymazy",
    "indicatorId": "bdmo_y48043004",
    "year": 2024,
    "value": 229.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "uchaly",
    "indicatorId": "bdmo_y48043004",
    "year": 2024,
    "value": 125.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufimsky",
    "indicatorId": "bdmo_y48043004",
    "year": 2024,
    "value": 1357.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "yanaulsky",
    "indicatorId": "bdmo_y48043004",
    "year": 2024,
    "value": 172.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "zianchurinsky",
    "indicatorId": "bdmo_y48043004",
    "year": 2024,
    "value": 36.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "zilairsky",
    "indicatorId": "bdmo_y48043004",
    "year": 2024,
    "value": 68.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "abzelilovsky",
    "indicatorId": "bdmo_y48043005",
    "year": 2024,
    "value": 117.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "alsheevsky",
    "indicatorId": "bdmo_y48043005",
    "year": 2024,
    "value": 69.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "arkhangelsky",
    "indicatorId": "bdmo_y48043005",
    "year": 2024,
    "value": 3.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "askinsky",
    "indicatorId": "bdmo_y48043005",
    "year": 2024,
    "value": 39.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "aurgazinsky",
    "indicatorId": "bdmo_y48043005",
    "year": 2024,
    "value": 22.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "bakalinsky",
    "indicatorId": "bdmo_y48043005",
    "year": 2024,
    "value": 60.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "baltachevsky",
    "indicatorId": "bdmo_y48043005",
    "year": 2024,
    "value": 61.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "baymaksky",
    "indicatorId": "bdmo_y48043005",
    "year": 2024,
    "value": 1.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "belebeyevsky",
    "indicatorId": "bdmo_y48043005",
    "year": 2024,
    "value": 10.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "belokataysky",
    "indicatorId": "bdmo_y48043005",
    "year": 2024,
    "value": 14.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "beloretsk",
    "indicatorId": "bdmo_y48043005",
    "year": 2024,
    "value": 12.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "birsk",
    "indicatorId": "bdmo_y48043005",
    "year": 2024,
    "value": 5.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "bizhbulyaksky",
    "indicatorId": "bdmo_y48043005",
    "year": 2024,
    "value": 1.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "blagovarsky",
    "indicatorId": "bdmo_y48043005",
    "year": 2024,
    "value": 15.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "blagoveshchensky",
    "indicatorId": "bdmo_y48043005",
    "year": 2024,
    "value": 112.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "buraevsky",
    "indicatorId": "bdmo_y48043005",
    "year": 2024,
    "value": 86.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "burzyansky",
    "indicatorId": "bdmo_y48043005",
    "year": 2024,
    "value": 5.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "buzdyaksky",
    "indicatorId": "bdmo_y48043005",
    "year": 2024,
    "value": 29.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "chekmagushevsky",
    "indicatorId": "bdmo_y48043005",
    "year": 2024,
    "value": 23.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "chishminsky",
    "indicatorId": "bdmo_y48043005",
    "year": 2024,
    "value": 44.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "davlekanovsky",
    "indicatorId": "bdmo_y48043005",
    "year": 2024,
    "value": 21.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "duvansky",
    "indicatorId": "bdmo_y48043005",
    "year": 2024,
    "value": 159.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "dyurtyulinsky",
    "indicatorId": "bdmo_y48043005",
    "year": 2024,
    "value": 258.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ermekeyevsky",
    "indicatorId": "bdmo_y48043005",
    "year": 2024,
    "value": 9.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "gafuriysky",
    "indicatorId": "bdmo_y48043005",
    "year": 2024,
    "value": 14.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ishimbay",
    "indicatorId": "bdmo_y48043005",
    "year": 2024,
    "value": 25.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kaltasinsky",
    "indicatorId": "bdmo_y48043005",
    "year": 2024,
    "value": 50.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "karaidelsky",
    "indicatorId": "bdmo_y48043005",
    "year": 2024,
    "value": 38.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "karmaskalinsky",
    "indicatorId": "bdmo_y48043005",
    "year": 2024,
    "value": 239.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "khaibullinsky",
    "indicatorId": "bdmo_y48043005",
    "year": 2024,
    "value": 48.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kiginsky",
    "indicatorId": "bdmo_y48043005",
    "year": 2024,
    "value": 84.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kugarchinsky",
    "indicatorId": "bdmo_y48043005",
    "year": 2024,
    "value": 5.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kumertau",
    "indicatorId": "bdmo_y48043005",
    "year": 2024,
    "value": 2.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kushnarenkovsky",
    "indicatorId": "bdmo_y48043005",
    "year": 2024,
    "value": 37.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kuyurgazinsky",
    "indicatorId": "bdmo_y48043005",
    "year": 2024,
    "value": 19.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "mechetlinsky",
    "indicatorId": "bdmo_y48043005",
    "year": 2024,
    "value": 62.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "meleuz",
    "indicatorId": "bdmo_y48043005",
    "year": 2024,
    "value": 24.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "mishkinsky",
    "indicatorId": "bdmo_y48043005",
    "year": 2024,
    "value": 73.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "miyakinsky",
    "indicatorId": "bdmo_y48043005",
    "year": 2024,
    "value": 66.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "neftekamsk",
    "indicatorId": "bdmo_y48043005",
    "year": 2024,
    "value": 11.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "nurimanovsky",
    "indicatorId": "bdmo_y48043005",
    "year": 2024,
    "value": 18.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "oktyabrsky",
    "indicatorId": "bdmo_y48043005",
    "year": 2024,
    "value": 52.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "salavat",
    "indicatorId": "bdmo_y48043005",
    "year": 2024,
    "value": 13.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "salavatsky",
    "indicatorId": "bdmo_y48043005",
    "year": 2024,
    "value": 75.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sharansky",
    "indicatorId": "bdmo_y48043005",
    "year": 2024,
    "value": 41.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sibay",
    "indicatorId": "bdmo_y48043005",
    "year": 2024,
    "value": 7.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlibashevsky",
    "indicatorId": "bdmo_y48043005",
    "year": 2024,
    "value": 4.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamak",
    "indicatorId": "bdmo_y48043005",
    "year": 2024,
    "value": 25.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamaksky",
    "indicatorId": "bdmo_y48043005",
    "year": 2024,
    "value": 106.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "tatyshlinsky",
    "indicatorId": "bdmo_y48043005",
    "year": 2024,
    "value": 87.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "tuymazy",
    "indicatorId": "bdmo_y48043005",
    "year": 2024,
    "value": 112.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "uchaly",
    "indicatorId": "bdmo_y48043005",
    "year": 2024,
    "value": 20.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufimsky",
    "indicatorId": "bdmo_y48043005",
    "year": 2024,
    "value": 522.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "yanaulsky",
    "indicatorId": "bdmo_y48043005",
    "year": 2024,
    "value": 134.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "zianchurinsky",
    "indicatorId": "bdmo_y48043005",
    "year": 2024,
    "value": 3.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "zilairsky",
    "indicatorId": "bdmo_y48043005",
    "year": 2024,
    "value": 53.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "abzelilovsky",
    "indicatorId": "bdmo_y48055001",
    "year": 2024,
    "value": 13657.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "agidel",
    "indicatorId": "bdmo_y48055001",
    "year": 2024,
    "value": 20805.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "alsheevsky",
    "indicatorId": "bdmo_y48055001",
    "year": 2024,
    "value": 9570.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "baymaksky",
    "indicatorId": "bdmo_y48055001",
    "year": 2024,
    "value": 7593.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "belebeyevsky",
    "indicatorId": "bdmo_y48055001",
    "year": 2024,
    "value": 365104.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "beloretsk",
    "indicatorId": "bdmo_y48055001",
    "year": 2024,
    "value": 295562.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "birsk",
    "indicatorId": "bdmo_y48055001",
    "year": 2024,
    "value": 11475.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "blagovarsky",
    "indicatorId": "bdmo_y48055001",
    "year": 2024,
    "value": 16080.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "blagoveshchensky",
    "indicatorId": "bdmo_y48055001",
    "year": 2024,
    "value": 651044.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "buzdyaksky",
    "indicatorId": "bdmo_y48055001",
    "year": 2024,
    "value": 1044.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "chishminsky",
    "indicatorId": "bdmo_y48055001",
    "year": 2024,
    "value": 75320.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "davlekanovsky",
    "indicatorId": "bdmo_y48055001",
    "year": 2024,
    "value": 4632.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "duvansky",
    "indicatorId": "bdmo_y48055001",
    "year": 2024,
    "value": 5974.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "dyurtyulinsky",
    "indicatorId": "bdmo_y48055001",
    "year": 2024,
    "value": 68443.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "iglinsky",
    "indicatorId": "bdmo_y48055001",
    "year": 2024,
    "value": 14312.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ilishevsky",
    "indicatorId": "bdmo_y48055001",
    "year": 2024,
    "value": 16456.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ishimbay",
    "indicatorId": "bdmo_y48055001",
    "year": 2024,
    "value": 172172.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kaltasinsky",
    "indicatorId": "bdmo_y48055001",
    "year": 2024,
    "value": 62704.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "karmaskalinsky",
    "indicatorId": "bdmo_y48055001",
    "year": 2024,
    "value": 202151.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "khaibullinsky",
    "indicatorId": "bdmo_y48055001",
    "year": 2024,
    "value": 917938.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "krasnokamsky",
    "indicatorId": "bdmo_y48055001",
    "year": 2024,
    "value": 72151.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kugarchinsky",
    "indicatorId": "bdmo_y48055001",
    "year": 2024,
    "value": 2312.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kumertau",
    "indicatorId": "bdmo_y48055001",
    "year": 2024,
    "value": 125685.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kuyurgazinsky",
    "indicatorId": "bdmo_y48055001",
    "year": 2024,
    "value": 8913.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "meleuz",
    "indicatorId": "bdmo_y48055001",
    "year": 2024,
    "value": 153019.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "mishkinsky",
    "indicatorId": "bdmo_y48055001",
    "year": 2024,
    "value": 18953.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "neftekamsk",
    "indicatorId": "bdmo_y48055001",
    "year": 2024,
    "value": 410099.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "nurimanovsky",
    "indicatorId": "bdmo_y48055001",
    "year": 2024,
    "value": 1537.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "oktyabrsky",
    "indicatorId": "bdmo_y48055001",
    "year": 2024,
    "value": 71513.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "salavat",
    "indicatorId": "bdmo_y48055001",
    "year": 2024,
    "value": 3298841.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "salavatsky",
    "indicatorId": "bdmo_y48055001",
    "year": 2024,
    "value": 4079.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sharansky",
    "indicatorId": "bdmo_y48055001",
    "year": 2024,
    "value": 19060.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sibay",
    "indicatorId": "bdmo_y48055001",
    "year": 2024,
    "value": 258917.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamak",
    "indicatorId": "bdmo_y48055001",
    "year": 2024,
    "value": 3361978.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamaksky",
    "indicatorId": "bdmo_y48055001",
    "year": 2024,
    "value": 45770.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "tatyshlinsky",
    "indicatorId": "bdmo_y48055001",
    "year": 2024,
    "value": 15931.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "tuymazy",
    "indicatorId": "bdmo_y48055001",
    "year": 2024,
    "value": 246098.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "uchaly",
    "indicatorId": "bdmo_y48055001",
    "year": 2024,
    "value": 1617199.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufa",
    "indicatorId": "bdmo_y48055001",
    "year": 2024,
    "value": 11513826.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufimsky",
    "indicatorId": "bdmo_y48055001",
    "year": 2024,
    "value": 298521.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "yanaulsky",
    "indicatorId": "bdmo_y48055001",
    "year": 2024,
    "value": 17188.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "zianchurinsky",
    "indicatorId": "bdmo_y48055001",
    "year": 2024,
    "value": 864.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "abzelilovsky",
    "indicatorId": "bdmo_y48060001",
    "year": 2024,
    "value": 19.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "agidel",
    "indicatorId": "bdmo_y48060001",
    "year": 2024,
    "value": 1.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "alsheevsky",
    "indicatorId": "bdmo_y48060001",
    "year": 2024,
    "value": 5.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "arkhangelsky",
    "indicatorId": "bdmo_y48060001",
    "year": 2024,
    "value": 5.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "askinsky",
    "indicatorId": "bdmo_y48060001",
    "year": 2024,
    "value": 6.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "aurgazinsky",
    "indicatorId": "bdmo_y48060001",
    "year": 2024,
    "value": 5.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "bakalinsky",
    "indicatorId": "bdmo_y48060001",
    "year": 2024,
    "value": 1.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "baltachevsky",
    "indicatorId": "bdmo_y48060001",
    "year": 2024,
    "value": 6.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "baymaksky",
    "indicatorId": "bdmo_y48060001",
    "year": 2024,
    "value": 8.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "belebeyevsky",
    "indicatorId": "bdmo_y48060001",
    "year": 2024,
    "value": 10.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "belokataysky",
    "indicatorId": "bdmo_y48060001",
    "year": 2024,
    "value": 2.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "beloretsk",
    "indicatorId": "bdmo_y48060001",
    "year": 2024,
    "value": 46.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "birsk",
    "indicatorId": "bdmo_y48060001",
    "year": 2024,
    "value": 9.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "bizhbulyaksky",
    "indicatorId": "bdmo_y48060001",
    "year": 2024,
    "value": 3.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "blagovarsky",
    "indicatorId": "bdmo_y48060001",
    "year": 2024,
    "value": 5.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "blagoveshchensky",
    "indicatorId": "bdmo_y48060001",
    "year": 2024,
    "value": 9.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "buraevsky",
    "indicatorId": "bdmo_y48060001",
    "year": 2024,
    "value": 4.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "burzyansky",
    "indicatorId": "bdmo_y48060001",
    "year": 2024,
    "value": 7.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "buzdyaksky",
    "indicatorId": "bdmo_y48060001",
    "year": 2024,
    "value": 2.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "chekmagushevsky",
    "indicatorId": "bdmo_y48060001",
    "year": 2024,
    "value": 6.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "chishminsky",
    "indicatorId": "bdmo_y48060001",
    "year": 2024,
    "value": 6.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "davlekanovsky",
    "indicatorId": "bdmo_y48060001",
    "year": 2024,
    "value": 3.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "duvansky",
    "indicatorId": "bdmo_y48060001",
    "year": 2024,
    "value": 4.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "dyurtyulinsky",
    "indicatorId": "bdmo_y48060001",
    "year": 2024,
    "value": 7.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ermekeyevsky",
    "indicatorId": "bdmo_y48060001",
    "year": 2024,
    "value": 3.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "fedorovsky",
    "indicatorId": "bdmo_y48060001",
    "year": 2024,
    "value": 2.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "gafuriysky",
    "indicatorId": "bdmo_y48060001",
    "year": 2024,
    "value": 6.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "iglinsky",
    "indicatorId": "bdmo_y48060001",
    "year": 2024,
    "value": 8.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ilishevsky",
    "indicatorId": "bdmo_y48060001",
    "year": 2024,
    "value": 6.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ishimbay",
    "indicatorId": "bdmo_y48060001",
    "year": 2024,
    "value": 12.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kaltasinsky",
    "indicatorId": "bdmo_y48060001",
    "year": 2024,
    "value": 2.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "karaidelsky",
    "indicatorId": "bdmo_y48060001",
    "year": 2024,
    "value": 12.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "karmaskalinsky",
    "indicatorId": "bdmo_y48060001",
    "year": 2024,
    "value": 2.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "khaibullinsky",
    "indicatorId": "bdmo_y48060001",
    "year": 2024,
    "value": 6.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kiginsky",
    "indicatorId": "bdmo_y48060001",
    "year": 2024,
    "value": 4.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "krasnokamsky",
    "indicatorId": "bdmo_y48060001",
    "year": 2024,
    "value": 10.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kugarchinsky",
    "indicatorId": "bdmo_y48060001",
    "year": 2024,
    "value": 4.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kumertau",
    "indicatorId": "bdmo_y48060001",
    "year": 2024,
    "value": 8.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kushnarenkovsky",
    "indicatorId": "bdmo_y48060001",
    "year": 2024,
    "value": 9.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kuyurgazinsky",
    "indicatorId": "bdmo_y48060001",
    "year": 2024,
    "value": 2.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "mechetlinsky",
    "indicatorId": "bdmo_y48060001",
    "year": 2024,
    "value": 7.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "meleuz",
    "indicatorId": "bdmo_y48060001",
    "year": 2024,
    "value": 40.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "mishkinsky",
    "indicatorId": "bdmo_y48060001",
    "year": 2024,
    "value": 2.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "miyakinsky",
    "indicatorId": "bdmo_y48060001",
    "year": 2024,
    "value": 6.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "neftekamsk",
    "indicatorId": "bdmo_y48060001",
    "year": 2024,
    "value": 9.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "nurimanovsky",
    "indicatorId": "bdmo_y48060001",
    "year": 2024,
    "value": 16.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "oktyabrsky",
    "indicatorId": "bdmo_y48060001",
    "year": 2024,
    "value": 17.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "salavat",
    "indicatorId": "bdmo_y48060001",
    "year": 2024,
    "value": 9.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "salavatsky",
    "indicatorId": "bdmo_y48060001",
    "year": 2024,
    "value": 6.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sharansky",
    "indicatorId": "bdmo_y48060001",
    "year": 2024,
    "value": 4.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sibay",
    "indicatorId": "bdmo_y48060001",
    "year": 2024,
    "value": 16.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlibashevsky",
    "indicatorId": "bdmo_y48060001",
    "year": 2024,
    "value": 4.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamak",
    "indicatorId": "bdmo_y48060001",
    "year": 2024,
    "value": 16.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamaksky",
    "indicatorId": "bdmo_y48060001",
    "year": 2024,
    "value": 12.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "tatyshlinsky",
    "indicatorId": "bdmo_y48060001",
    "year": 2024,
    "value": 4.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "tuymazy",
    "indicatorId": "bdmo_y48060001",
    "year": 2024,
    "value": 22.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "uchaly",
    "indicatorId": "bdmo_y48060001",
    "year": 2024,
    "value": 15.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufa",
    "indicatorId": "bdmo_y48060001",
    "year": 2024,
    "value": 132.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufimsky",
    "indicatorId": "bdmo_y48060001",
    "year": 2024,
    "value": 25.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "yanaulsky",
    "indicatorId": "bdmo_y48060001",
    "year": 2024,
    "value": 3.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "zianchurinsky",
    "indicatorId": "bdmo_y48060001",
    "year": 2024,
    "value": 3.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "zilairsky",
    "indicatorId": "bdmo_y48060001",
    "year": 2024,
    "value": 4.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "abzelilovsky",
    "indicatorId": "bdmo_y48060002",
    "year": 2024,
    "value": 4420.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "alsheevsky",
    "indicatorId": "bdmo_y48060002",
    "year": 2024,
    "value": 894.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "arkhangelsky",
    "indicatorId": "bdmo_y48060002",
    "year": 2024,
    "value": 58.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "askinsky",
    "indicatorId": "bdmo_y48060002",
    "year": 2024,
    "value": 350.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "aurgazinsky",
    "indicatorId": "bdmo_y48060002",
    "year": 2024,
    "value": 182.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "baltachevsky",
    "indicatorId": "bdmo_y48060002",
    "year": 2024,
    "value": 111.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "baymaksky",
    "indicatorId": "bdmo_y48060002",
    "year": 2024,
    "value": 531.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "belebeyevsky",
    "indicatorId": "bdmo_y48060002",
    "year": 2024,
    "value": 1025.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "beloretsk",
    "indicatorId": "bdmo_y48060002",
    "year": 2024,
    "value": 4152.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "birsk",
    "indicatorId": "bdmo_y48060002",
    "year": 2024,
    "value": 896.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "bizhbulyaksky",
    "indicatorId": "bdmo_y48060002",
    "year": 2024,
    "value": 43.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "blagovarsky",
    "indicatorId": "bdmo_y48060002",
    "year": 2024,
    "value": 289.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "blagoveshchensky",
    "indicatorId": "bdmo_y48060002",
    "year": 2024,
    "value": 1167.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "buraevsky",
    "indicatorId": "bdmo_y48060002",
    "year": 2024,
    "value": 168.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "burzyansky",
    "indicatorId": "bdmo_y48060002",
    "year": 2024,
    "value": 349.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "chekmagushevsky",
    "indicatorId": "bdmo_y48060002",
    "year": 2024,
    "value": 197.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "chishminsky",
    "indicatorId": "bdmo_y48060002",
    "year": 2024,
    "value": 896.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "davlekanovsky",
    "indicatorId": "bdmo_y48060002",
    "year": 2024,
    "value": 149.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "duvansky",
    "indicatorId": "bdmo_y48060002",
    "year": 2024,
    "value": 200.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "dyurtyulinsky",
    "indicatorId": "bdmo_y48060002",
    "year": 2024,
    "value": 438.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ermekeyevsky",
    "indicatorId": "bdmo_y48060002",
    "year": 2024,
    "value": 92.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "gafuriysky",
    "indicatorId": "bdmo_y48060002",
    "year": 2024,
    "value": 1077.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "iglinsky",
    "indicatorId": "bdmo_y48060002",
    "year": 2024,
    "value": 271.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ilishevsky",
    "indicatorId": "bdmo_y48060002",
    "year": 2024,
    "value": 534.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ishimbay",
    "indicatorId": "bdmo_y48060002",
    "year": 2024,
    "value": 1851.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "karaidelsky",
    "indicatorId": "bdmo_y48060002",
    "year": 2024,
    "value": 1535.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "khaibullinsky",
    "indicatorId": "bdmo_y48060002",
    "year": 2024,
    "value": 582.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kiginsky",
    "indicatorId": "bdmo_y48060002",
    "year": 2024,
    "value": 46.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "krasnokamsky",
    "indicatorId": "bdmo_y48060002",
    "year": 2024,
    "value": 1115.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kugarchinsky",
    "indicatorId": "bdmo_y48060002",
    "year": 2024,
    "value": 113.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kumertau",
    "indicatorId": "bdmo_y48060002",
    "year": 2024,
    "value": 275.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kushnarenkovsky",
    "indicatorId": "bdmo_y48060002",
    "year": 2024,
    "value": 372.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "mechetlinsky",
    "indicatorId": "bdmo_y48060002",
    "year": 2024,
    "value": 522.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "meleuz",
    "indicatorId": "bdmo_y48060002",
    "year": 2024,
    "value": 3701.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "miyakinsky",
    "indicatorId": "bdmo_y48060002",
    "year": 2024,
    "value": 333.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "neftekamsk",
    "indicatorId": "bdmo_y48060002",
    "year": 2024,
    "value": 545.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "nurimanovsky",
    "indicatorId": "bdmo_y48060002",
    "year": 2024,
    "value": 1780.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "oktyabrsky",
    "indicatorId": "bdmo_y48060002",
    "year": 2024,
    "value": 1241.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "salavat",
    "indicatorId": "bdmo_y48060002",
    "year": 2024,
    "value": 590.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "salavatsky",
    "indicatorId": "bdmo_y48060002",
    "year": 2024,
    "value": 1052.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sharansky",
    "indicatorId": "bdmo_y48060002",
    "year": 2024,
    "value": 43.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sibay",
    "indicatorId": "bdmo_y48060002",
    "year": 2024,
    "value": 722.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlibashevsky",
    "indicatorId": "bdmo_y48060002",
    "year": 2024,
    "value": 334.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamak",
    "indicatorId": "bdmo_y48060002",
    "year": 2024,
    "value": 1010.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamaksky",
    "indicatorId": "bdmo_y48060002",
    "year": 2024,
    "value": 1703.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "tatyshlinsky",
    "indicatorId": "bdmo_y48060002",
    "year": 2024,
    "value": 176.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "tuymazy",
    "indicatorId": "bdmo_y48060002",
    "year": 2024,
    "value": 1535.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "uchaly",
    "indicatorId": "bdmo_y48060002",
    "year": 2024,
    "value": 1097.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufa",
    "indicatorId": "bdmo_y48060002",
    "year": 2024,
    "value": 9152.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufimsky",
    "indicatorId": "bdmo_y48060002",
    "year": 2024,
    "value": 3552.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "yanaulsky",
    "indicatorId": "bdmo_y48060002",
    "year": 2024,
    "value": 210.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "zianchurinsky",
    "indicatorId": "bdmo_y48060002",
    "year": 2024,
    "value": 127.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "zilairsky",
    "indicatorId": "bdmo_y48060002",
    "year": 2024,
    "value": 148.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "abzelilovsky",
    "indicatorId": "bdmo_y48097016",
    "year": 2024,
    "value": 45784.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "alsheevsky",
    "indicatorId": "bdmo_y48097016",
    "year": 2024,
    "value": 270958.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "arkhangelsky",
    "indicatorId": "bdmo_y48097016",
    "year": 2024,
    "value": 6349.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "askinsky",
    "indicatorId": "bdmo_y48097016",
    "year": 2024,
    "value": 752.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "aurgazinsky",
    "indicatorId": "bdmo_y48097016",
    "year": 2024,
    "value": 21208.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "bakalinsky",
    "indicatorId": "bdmo_y48097016",
    "year": 2024,
    "value": 13281.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "baltachevsky",
    "indicatorId": "bdmo_y48097016",
    "year": 2024,
    "value": 1888.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "baymaksky",
    "indicatorId": "bdmo_y48097016",
    "year": 2024,
    "value": 40610.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "belebeyevsky",
    "indicatorId": "bdmo_y48097016",
    "year": 2024,
    "value": 14559.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "belokataysky",
    "indicatorId": "bdmo_y48097016",
    "year": 2024,
    "value": 58.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "beloretsk",
    "indicatorId": "bdmo_y48097016",
    "year": 2024,
    "value": 23.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "birsk",
    "indicatorId": "bdmo_y48097016",
    "year": 2024,
    "value": 593.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "bizhbulyaksky",
    "indicatorId": "bdmo_y48097016",
    "year": 2024,
    "value": 223649.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "blagovarsky",
    "indicatorId": "bdmo_y48097016",
    "year": 2024,
    "value": 453779.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "blagoveshchensky",
    "indicatorId": "bdmo_y48097016",
    "year": 2024,
    "value": 104.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "buraevsky",
    "indicatorId": "bdmo_y48097016",
    "year": 2024,
    "value": 9250.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "burzyansky",
    "indicatorId": "bdmo_y48097016",
    "year": 2024,
    "value": 70.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "buzdyaksky",
    "indicatorId": "bdmo_y48097016",
    "year": 2024,
    "value": 71051.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "chekmagushevsky",
    "indicatorId": "bdmo_y48097016",
    "year": 2024,
    "value": 547557.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "chishminsky",
    "indicatorId": "bdmo_y48097016",
    "year": 2024,
    "value": 2577.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "davlekanovsky",
    "indicatorId": "bdmo_y48097016",
    "year": 2024,
    "value": 134861.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "duvansky",
    "indicatorId": "bdmo_y48097016",
    "year": 2024,
    "value": 22.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "dyurtyulinsky",
    "indicatorId": "bdmo_y48097016",
    "year": 2024,
    "value": 5.67,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ermekeyevsky",
    "indicatorId": "bdmo_y48097016",
    "year": 2024,
    "value": 16404.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "fedorovsky",
    "indicatorId": "bdmo_y48097016",
    "year": 2024,
    "value": 3.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "gafuriysky",
    "indicatorId": "bdmo_y48097016",
    "year": 2024,
    "value": 164607.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "iglinsky",
    "indicatorId": "bdmo_y48097016",
    "year": 2024,
    "value": 5310.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ilishevsky",
    "indicatorId": "bdmo_y48097016",
    "year": 2024,
    "value": 30764.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ishimbay",
    "indicatorId": "bdmo_y48097016",
    "year": 2024,
    "value": 16074.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kaltasinsky",
    "indicatorId": "bdmo_y48097016",
    "year": 2024,
    "value": 197526.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "karaidelsky",
    "indicatorId": "bdmo_y48097016",
    "year": 2024,
    "value": 4667.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "karmaskalinsky",
    "indicatorId": "bdmo_y48097016",
    "year": 2024,
    "value": 386619.23,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "khaibullinsky",
    "indicatorId": "bdmo_y48097016",
    "year": 2024,
    "value": 2.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kiginsky",
    "indicatorId": "bdmo_y48097016",
    "year": 2024,
    "value": 12455.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "krasnokamsky",
    "indicatorId": "bdmo_y48097016",
    "year": 2024,
    "value": 2300.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kugarchinsky",
    "indicatorId": "bdmo_y48097016",
    "year": 2024,
    "value": 1148.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kumertau",
    "indicatorId": "bdmo_y48097016",
    "year": 2024,
    "value": 5231.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kushnarenkovsky",
    "indicatorId": "bdmo_y48097016",
    "year": 2024,
    "value": 77613.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kuyurgazinsky",
    "indicatorId": "bdmo_y48097016",
    "year": 2024,
    "value": 12701.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "mechetlinsky",
    "indicatorId": "bdmo_y48097016",
    "year": 2024,
    "value": 50887.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "meleuz",
    "indicatorId": "bdmo_y48097016",
    "year": 2024,
    "value": 13548.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "mishkinsky",
    "indicatorId": "bdmo_y48097016",
    "year": 2024,
    "value": 1921.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "miyakinsky",
    "indicatorId": "bdmo_y48097016",
    "year": 2024,
    "value": 11595.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "nurimanovsky",
    "indicatorId": "bdmo_y48097016",
    "year": 2024,
    "value": 6312.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "salavatsky",
    "indicatorId": "bdmo_y48097016",
    "year": 2024,
    "value": 28769.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sharansky",
    "indicatorId": "bdmo_y48097016",
    "year": 2024,
    "value": 106746.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlibashevsky",
    "indicatorId": "bdmo_y48097016",
    "year": 2024,
    "value": 58715.65,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamaksky",
    "indicatorId": "bdmo_y48097016",
    "year": 2024,
    "value": 1255315.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "tatyshlinsky",
    "indicatorId": "bdmo_y48097016",
    "year": 2024,
    "value": 11141.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "tuymazy",
    "indicatorId": "bdmo_y48097016",
    "year": 2024,
    "value": 3060.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "uchaly",
    "indicatorId": "bdmo_y48097016",
    "year": 2024,
    "value": 12224.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufa",
    "indicatorId": "bdmo_y48097016",
    "year": 2024,
    "value": 480.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufimsky",
    "indicatorId": "bdmo_y48097016",
    "year": 2024,
    "value": 94787.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "yanaulsky",
    "indicatorId": "bdmo_y48097016",
    "year": 2024,
    "value": 9224.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "zianchurinsky",
    "indicatorId": "bdmo_y48097016",
    "year": 2024,
    "value": 23.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "zilairsky",
    "indicatorId": "bdmo_y48097016",
    "year": 2024,
    "value": 1510.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "abzelilovsky",
    "indicatorId": "bdmo_y48106005",
    "year": 2024,
    "value": 2.2,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "agidel",
    "indicatorId": "bdmo_y48106005",
    "year": 2024,
    "value": 11.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "alsheevsky",
    "indicatorId": "bdmo_y48106005",
    "year": 2024,
    "value": 28.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "arkhangelsky",
    "indicatorId": "bdmo_y48106005",
    "year": 2024,
    "value": 20.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "askinsky",
    "indicatorId": "bdmo_y48106005",
    "year": 2024,
    "value": 46.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "aurgazinsky",
    "indicatorId": "bdmo_y48106005",
    "year": 2024,
    "value": 47.7,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "bakalinsky",
    "indicatorId": "bdmo_y48106005",
    "year": 2024,
    "value": 10.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "baltachevsky",
    "indicatorId": "bdmo_y48106005",
    "year": 2024,
    "value": 39.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "baymaksky",
    "indicatorId": "bdmo_y48106005",
    "year": 2024,
    "value": 57.2,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "belebeyevsky",
    "indicatorId": "bdmo_y48106005",
    "year": 2024,
    "value": 9.9,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "belokataysky",
    "indicatorId": "bdmo_y48106005",
    "year": 2024,
    "value": 10.9,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "beloretsk",
    "indicatorId": "bdmo_y48106005",
    "year": 2024,
    "value": 48.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "birsk",
    "indicatorId": "bdmo_y48106005",
    "year": 2024,
    "value": 67.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "bizhbulyaksky",
    "indicatorId": "bdmo_y48106005",
    "year": 2024,
    "value": 42.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "blagovarsky",
    "indicatorId": "bdmo_y48106005",
    "year": 2024,
    "value": 22.2,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "blagoveshchensky",
    "indicatorId": "bdmo_y48106005",
    "year": 2024,
    "value": 38.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "buraevsky",
    "indicatorId": "bdmo_y48106005",
    "year": 2024,
    "value": 9.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "burzyansky",
    "indicatorId": "bdmo_y48106005",
    "year": 2024,
    "value": 8.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "buzdyaksky",
    "indicatorId": "bdmo_y48106005",
    "year": 2024,
    "value": 3.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "chekmagushevsky",
    "indicatorId": "bdmo_y48106005",
    "year": 2024,
    "value": 8.1,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "chishminsky",
    "indicatorId": "bdmo_y48106005",
    "year": 2024,
    "value": 26.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "davlekanovsky",
    "indicatorId": "bdmo_y48106005",
    "year": 2024,
    "value": 30.7,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "duvansky",
    "indicatorId": "bdmo_y48106005",
    "year": 2024,
    "value": 19.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "dyurtyulinsky",
    "indicatorId": "bdmo_y48106005",
    "year": 2024,
    "value": 17.9,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ermekeyevsky",
    "indicatorId": "bdmo_y48106005",
    "year": 2024,
    "value": 12.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "fedorovsky",
    "indicatorId": "bdmo_y48106005",
    "year": 2024,
    "value": 12.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "gafuriysky",
    "indicatorId": "bdmo_y48106005",
    "year": 2024,
    "value": 26.9,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "iglinsky",
    "indicatorId": "bdmo_y48106005",
    "year": 2024,
    "value": 48.2,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ilishevsky",
    "indicatorId": "bdmo_y48106005",
    "year": 2024,
    "value": 12.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ishimbay",
    "indicatorId": "bdmo_y48106005",
    "year": 2024,
    "value": 16.9,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kaltasinsky",
    "indicatorId": "bdmo_y48106005",
    "year": 2024,
    "value": 72.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "karaidelsky",
    "indicatorId": "bdmo_y48106005",
    "year": 2024,
    "value": 7.2,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "karmaskalinsky",
    "indicatorId": "bdmo_y48106005",
    "year": 2024,
    "value": 12.1,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "khaibullinsky",
    "indicatorId": "bdmo_y48106005",
    "year": 2024,
    "value": 59.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kiginsky",
    "indicatorId": "bdmo_y48106005",
    "year": 2024,
    "value": 5.2,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "krasnokamsky",
    "indicatorId": "bdmo_y48106005",
    "year": 2024,
    "value": 47.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kugarchinsky",
    "indicatorId": "bdmo_y48106005",
    "year": 2024,
    "value": 72.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kumertau",
    "indicatorId": "bdmo_y48106005",
    "year": 2024,
    "value": 6.2,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kushnarenkovsky",
    "indicatorId": "bdmo_y48106005",
    "year": 2024,
    "value": 19.9,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kuyurgazinsky",
    "indicatorId": "bdmo_y48106005",
    "year": 2024,
    "value": 28.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "mechetlinsky",
    "indicatorId": "bdmo_y48106005",
    "year": 2024,
    "value": 28.1,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "meleuz",
    "indicatorId": "bdmo_y48106005",
    "year": 2024,
    "value": 7.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "mishkinsky",
    "indicatorId": "bdmo_y48106005",
    "year": 2024,
    "value": 61.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "miyakinsky",
    "indicatorId": "bdmo_y48106005",
    "year": 2024,
    "value": 1.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "neftekamsk",
    "indicatorId": "bdmo_y48106005",
    "year": 2024,
    "value": 28.2,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "nurimanovsky",
    "indicatorId": "bdmo_y48106005",
    "year": 2024,
    "value": 1.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "oktyabrsky",
    "indicatorId": "bdmo_y48106005",
    "year": 2024,
    "value": 13.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "salavat",
    "indicatorId": "bdmo_y48106005",
    "year": 2024,
    "value": 17.1,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "salavatsky",
    "indicatorId": "bdmo_y48106005",
    "year": 2024,
    "value": 13.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sharansky",
    "indicatorId": "bdmo_y48106005",
    "year": 2024,
    "value": 2.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sibay",
    "indicatorId": "bdmo_y48106005",
    "year": 2024,
    "value": 9.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlibashevsky",
    "indicatorId": "bdmo_y48106005",
    "year": 2024,
    "value": 14.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamak",
    "indicatorId": "bdmo_y48106005",
    "year": 2024,
    "value": 2.7,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamaksky",
    "indicatorId": "bdmo_y48106005",
    "year": 2024,
    "value": 40.9,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "tatyshlinsky",
    "indicatorId": "bdmo_y48106005",
    "year": 2024,
    "value": 3.7,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "tuymazy",
    "indicatorId": "bdmo_y48106005",
    "year": 2024,
    "value": 38.1,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "uchaly",
    "indicatorId": "bdmo_y48106005",
    "year": 2024,
    "value": 60.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufa",
    "indicatorId": "bdmo_y48106005",
    "year": 2024,
    "value": 20.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufimsky",
    "indicatorId": "bdmo_y48106005",
    "year": 2024,
    "value": 12.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "yanaulsky",
    "indicatorId": "bdmo_y48106005",
    "year": 2024,
    "value": 49.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "zianchurinsky",
    "indicatorId": "bdmo_y48106005",
    "year": 2024,
    "value": 5.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "zilairsky",
    "indicatorId": "bdmo_y48106005",
    "year": 2024,
    "value": 7.9,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "abzelilovsky",
    "indicatorId": "bdmo_y48109003",
    "year": 2024,
    "value": 23545.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "agidel",
    "indicatorId": "bdmo_y48109003",
    "year": 2024,
    "value": 4618.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "alsheevsky",
    "indicatorId": "bdmo_y48109003",
    "year": 2024,
    "value": 15826.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "arkhangelsky",
    "indicatorId": "bdmo_y48109003",
    "year": 2024,
    "value": 6019.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "askinsky",
    "indicatorId": "bdmo_y48109003",
    "year": 2024,
    "value": 5795.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "aurgazinsky",
    "indicatorId": "bdmo_y48109003",
    "year": 2024,
    "value": 72882.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "bakalinsky",
    "indicatorId": "bdmo_y48109003",
    "year": 2024,
    "value": 895.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "baltachevsky",
    "indicatorId": "bdmo_y48109003",
    "year": 2024,
    "value": 2775.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "baymaksky",
    "indicatorId": "bdmo_y48109003",
    "year": 2024,
    "value": 2321.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "belebeyevsky",
    "indicatorId": "bdmo_y48109003",
    "year": 2024,
    "value": 45161.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "belokataysky",
    "indicatorId": "bdmo_y48109003",
    "year": 2024,
    "value": 2153.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "beloretsk",
    "indicatorId": "bdmo_y48109003",
    "year": 2024,
    "value": 20309.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "birsk",
    "indicatorId": "bdmo_y48109003",
    "year": 2024,
    "value": 10117.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "bizhbulyaksky",
    "indicatorId": "bdmo_y48109003",
    "year": 2024,
    "value": 10787.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "blagovarsky",
    "indicatorId": "bdmo_y48109003",
    "year": 2024,
    "value": 23783.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "blagoveshchensky",
    "indicatorId": "bdmo_y48109003",
    "year": 2024,
    "value": 131843.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "buraevsky",
    "indicatorId": "bdmo_y48109003",
    "year": 2024,
    "value": 3505.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "burzyansky",
    "indicatorId": "bdmo_y48109003",
    "year": 2024,
    "value": 2585.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "buzdyaksky",
    "indicatorId": "bdmo_y48109003",
    "year": 2024,
    "value": 24280.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "chekmagushevsky",
    "indicatorId": "bdmo_y48109003",
    "year": 2024,
    "value": 42729.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "chishminsky",
    "indicatorId": "bdmo_y48109003",
    "year": 2024,
    "value": 13345.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "davlekanovsky",
    "indicatorId": "bdmo_y48109003",
    "year": 2024,
    "value": 17944.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "duvansky",
    "indicatorId": "bdmo_y48109003",
    "year": 2024,
    "value": 18970.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "dyurtyulinsky",
    "indicatorId": "bdmo_y48109003",
    "year": 2024,
    "value": 15103.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ermekeyevsky",
    "indicatorId": "bdmo_y48109003",
    "year": 2024,
    "value": 26517.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "fedorovsky",
    "indicatorId": "bdmo_y48109003",
    "year": 2024,
    "value": 829.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "gafuriysky",
    "indicatorId": "bdmo_y48109003",
    "year": 2024,
    "value": 9002.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "iglinsky",
    "indicatorId": "bdmo_y48109003",
    "year": 2024,
    "value": 12279.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ilishevsky",
    "indicatorId": "bdmo_y48109003",
    "year": 2024,
    "value": 23094.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ishimbay",
    "indicatorId": "bdmo_y48109003",
    "year": 2024,
    "value": 27290.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kaltasinsky",
    "indicatorId": "bdmo_y48109003",
    "year": 2024,
    "value": 16391.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "karaidelsky",
    "indicatorId": "bdmo_y48109003",
    "year": 2024,
    "value": 3250.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "karmaskalinsky",
    "indicatorId": "bdmo_y48109003",
    "year": 2024,
    "value": 32317.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "khaibullinsky",
    "indicatorId": "bdmo_y48109003",
    "year": 2024,
    "value": 571020.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kiginsky",
    "indicatorId": "bdmo_y48109003",
    "year": 2024,
    "value": 1585.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "krasnokamsky",
    "indicatorId": "bdmo_y48109003",
    "year": 2024,
    "value": 7103.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kugarchinsky",
    "indicatorId": "bdmo_y48109003",
    "year": 2024,
    "value": 9364.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kumertau",
    "indicatorId": "bdmo_y48109003",
    "year": 2024,
    "value": 17818.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kushnarenkovsky",
    "indicatorId": "bdmo_y48109003",
    "year": 2024,
    "value": 3259.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kuyurgazinsky",
    "indicatorId": "bdmo_y48109003",
    "year": 2024,
    "value": 35938.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "mechetlinsky",
    "indicatorId": "bdmo_y48109003",
    "year": 2024,
    "value": 4670.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "meleuz",
    "indicatorId": "bdmo_y48109003",
    "year": 2024,
    "value": 28916.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "mishkinsky",
    "indicatorId": "bdmo_y48109003",
    "year": 2024,
    "value": 1395.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "miyakinsky",
    "indicatorId": "bdmo_y48109003",
    "year": 2024,
    "value": 5065.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "neftekamsk",
    "indicatorId": "bdmo_y48109003",
    "year": 2024,
    "value": 45442.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "nurimanovsky",
    "indicatorId": "bdmo_y48109003",
    "year": 2024,
    "value": 19187.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "oktyabrsky",
    "indicatorId": "bdmo_y48109003",
    "year": 2024,
    "value": 43079.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "salavat",
    "indicatorId": "bdmo_y48109003",
    "year": 2024,
    "value": 158258.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "salavatsky",
    "indicatorId": "bdmo_y48109003",
    "year": 2024,
    "value": 16303.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sharansky",
    "indicatorId": "bdmo_y48109003",
    "year": 2024,
    "value": 50288.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sibay",
    "indicatorId": "bdmo_y48109003",
    "year": 2024,
    "value": 15476.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlibashevsky",
    "indicatorId": "bdmo_y48109003",
    "year": 2024,
    "value": 2768.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamak",
    "indicatorId": "bdmo_y48109003",
    "year": 2024,
    "value": 48136.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamaksky",
    "indicatorId": "bdmo_y48109003",
    "year": 2024,
    "value": 36001.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "tatyshlinsky",
    "indicatorId": "bdmo_y48109003",
    "year": 2024,
    "value": 72917.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "tuymazy",
    "indicatorId": "bdmo_y48109003",
    "year": 2024,
    "value": 16049.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "uchaly",
    "indicatorId": "bdmo_y48109003",
    "year": 2024,
    "value": 197344.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufa",
    "indicatorId": "bdmo_y48109003",
    "year": 2024,
    "value": 193783.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufimsky",
    "indicatorId": "bdmo_y48109003",
    "year": 2024,
    "value": 46695.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "yanaulsky",
    "indicatorId": "bdmo_y48109003",
    "year": 2024,
    "value": 10733.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "zianchurinsky",
    "indicatorId": "bdmo_y48109003",
    "year": 2024,
    "value": 6152.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "zilairsky",
    "indicatorId": "bdmo_y48109003",
    "year": 2024,
    "value": 5366.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "abzelilovsky",
    "indicatorId": "bdmo_y48112013",
    "year": 2024,
    "value": 43793.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "agidel",
    "indicatorId": "bdmo_y48112013",
    "year": 2024,
    "value": 13638.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "alsheevsky",
    "indicatorId": "bdmo_y48112013",
    "year": 2024,
    "value": 35184.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "arkhangelsky",
    "indicatorId": "bdmo_y48112013",
    "year": 2024,
    "value": 16498.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "askinsky",
    "indicatorId": "bdmo_y48112013",
    "year": 2024,
    "value": 17252.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "aurgazinsky",
    "indicatorId": "bdmo_y48112013",
    "year": 2024,
    "value": 29470.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "bakalinsky",
    "indicatorId": "bdmo_y48112013",
    "year": 2024,
    "value": 24608.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "baltachevsky",
    "indicatorId": "bdmo_y48112013",
    "year": 2024,
    "value": 17661.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "baymaksky",
    "indicatorId": "bdmo_y48112013",
    "year": 2024,
    "value": 53009.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "belebeyevsky",
    "indicatorId": "bdmo_y48112013",
    "year": 2024,
    "value": 94648.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "belokataysky",
    "indicatorId": "bdmo_y48112013",
    "year": 2024,
    "value": 17212.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "beloretsk",
    "indicatorId": "bdmo_y48112013",
    "year": 2024,
    "value": 96064.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "birsk",
    "indicatorId": "bdmo_y48112013",
    "year": 2024,
    "value": 61231.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "bizhbulyaksky",
    "indicatorId": "bdmo_y48112013",
    "year": 2024,
    "value": 20703.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "blagovarsky",
    "indicatorId": "bdmo_y48112013",
    "year": 2024,
    "value": 23662.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "blagoveshchensky",
    "indicatorId": "bdmo_y48112013",
    "year": 2024,
    "value": 48477.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "buraevsky",
    "indicatorId": "bdmo_y48112013",
    "year": 2024,
    "value": 20624.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "burzyansky",
    "indicatorId": "bdmo_y48112013",
    "year": 2024,
    "value": 17011.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "buzdyaksky",
    "indicatorId": "bdmo_y48112013",
    "year": 2024,
    "value": 25227.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "chekmagushevsky",
    "indicatorId": "bdmo_y48112013",
    "year": 2024,
    "value": 27550.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "chishminsky",
    "indicatorId": "bdmo_y48112013",
    "year": 2024,
    "value": 50211.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "davlekanovsky",
    "indicatorId": "bdmo_y48112013",
    "year": 2024,
    "value": 35308.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "duvansky",
    "indicatorId": "bdmo_y48112013",
    "year": 2024,
    "value": 30633.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "dyurtyulinsky",
    "indicatorId": "bdmo_y48112013",
    "year": 2024,
    "value": 58723.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ermekeyevsky",
    "indicatorId": "bdmo_y48112013",
    "year": 2024,
    "value": 14161.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "fedorovsky",
    "indicatorId": "bdmo_y48112013",
    "year": 2024,
    "value": 15274.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "gafuriysky",
    "indicatorId": "bdmo_y48112013",
    "year": 2024,
    "value": 29251.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "iglinsky",
    "indicatorId": "bdmo_y48112013",
    "year": 2024,
    "value": 71406.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ilishevsky",
    "indicatorId": "bdmo_y48112013",
    "year": 2024,
    "value": 30210.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ishimbay",
    "indicatorId": "bdmo_y48112013",
    "year": 2024,
    "value": 82416.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kaltasinsky",
    "indicatorId": "bdmo_y48112013",
    "year": 2024,
    "value": 20887.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "karaidelsky",
    "indicatorId": "bdmo_y48112013",
    "year": 2024,
    "value": 22863.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "karmaskalinsky",
    "indicatorId": "bdmo_y48112013",
    "year": 2024,
    "value": 51322.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "khaibullinsky",
    "indicatorId": "bdmo_y48112013",
    "year": 2024,
    "value": 28971.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kiginsky",
    "indicatorId": "bdmo_y48112013",
    "year": 2024,
    "value": 16193.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "krasnokamsky",
    "indicatorId": "bdmo_y48112013",
    "year": 2024,
    "value": 25136.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kugarchinsky",
    "indicatorId": "bdmo_y48112013",
    "year": 2024,
    "value": 26124.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kumertau",
    "indicatorId": "bdmo_y48112013",
    "year": 2024,
    "value": 60855.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kushnarenkovsky",
    "indicatorId": "bdmo_y48112013",
    "year": 2024,
    "value": 26222.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kuyurgazinsky",
    "indicatorId": "bdmo_y48112013",
    "year": 2024,
    "value": 20471.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "mechetlinsky",
    "indicatorId": "bdmo_y48112013",
    "year": 2024,
    "value": 21598.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "meleuz",
    "indicatorId": "bdmo_y48112013",
    "year": 2024,
    "value": 79332.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "mishkinsky",
    "indicatorId": "bdmo_y48112013",
    "year": 2024,
    "value": 20471.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "miyakinsky",
    "indicatorId": "bdmo_y48112013",
    "year": 2024,
    "value": 22818.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "neftekamsk",
    "indicatorId": "bdmo_y48112013",
    "year": 2024,
    "value": 144501.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "nurimanovsky",
    "indicatorId": "bdmo_y48112013",
    "year": 2024,
    "value": 19796.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "oktyabrsky",
    "indicatorId": "bdmo_y48112013",
    "year": 2024,
    "value": 116468.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "salavat",
    "indicatorId": "bdmo_y48112013",
    "year": 2024,
    "value": 145801.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "salavatsky",
    "indicatorId": "bdmo_y48112013",
    "year": 2024,
    "value": 23074.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sharansky",
    "indicatorId": "bdmo_y48112013",
    "year": 2024,
    "value": 18519.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sibay",
    "indicatorId": "bdmo_y48112013",
    "year": 2024,
    "value": 56204.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlibashevsky",
    "indicatorId": "bdmo_y48112013",
    "year": 2024,
    "value": 16202.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamak",
    "indicatorId": "bdmo_y48112013",
    "year": 2024,
    "value": 280492.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamaksky",
    "indicatorId": "bdmo_y48112013",
    "year": 2024,
    "value": 47548.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "tatyshlinsky",
    "indicatorId": "bdmo_y48112013",
    "year": 2024,
    "value": 20509.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "tuymazy",
    "indicatorId": "bdmo_y48112013",
    "year": 2024,
    "value": 130016.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "uchaly",
    "indicatorId": "bdmo_y48112013",
    "year": 2024,
    "value": 68132.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufa",
    "indicatorId": "bdmo_y48112013",
    "year": 2024,
    "value": 1188484.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufimsky",
    "indicatorId": "bdmo_y48112013",
    "year": 2024,
    "value": 118372.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "yanaulsky",
    "indicatorId": "bdmo_y48112013",
    "year": 2024,
    "value": 42114.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "zianchurinsky",
    "indicatorId": "bdmo_y48112013",
    "year": 2024,
    "value": 23170.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "zilairsky",
    "indicatorId": "bdmo_y48112013",
    "year": 2024,
    "value": 14114.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "abzelilovsky",
    "indicatorId": "bdmo_y48155002",
    "year": 2024,
    "value": 8.9,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "alsheevsky",
    "indicatorId": "bdmo_y48155002",
    "year": 2024,
    "value": 22.7,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "arkhangelsky",
    "indicatorId": "bdmo_y48155002",
    "year": 2024,
    "value": 4.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "askinsky",
    "indicatorId": "bdmo_y48155002",
    "year": 2024,
    "value": 4.55,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "aurgazinsky",
    "indicatorId": "bdmo_y48155002",
    "year": 2024,
    "value": 3.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "bakalinsky",
    "indicatorId": "bdmo_y48155002",
    "year": 2024,
    "value": 10.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "baltachevsky",
    "indicatorId": "bdmo_y48155002",
    "year": 2024,
    "value": 34.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "baymaksky",
    "indicatorId": "bdmo_y48155002",
    "year": 2024,
    "value": 2.62,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "belokataysky",
    "indicatorId": "bdmo_y48155002",
    "year": 2024,
    "value": 0.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "beloretsk",
    "indicatorId": "bdmo_y48155002",
    "year": 2024,
    "value": 2.15,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "birsk",
    "indicatorId": "bdmo_y48155002",
    "year": 2024,
    "value": 6.27,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "bizhbulyaksky",
    "indicatorId": "bdmo_y48155002",
    "year": 2024,
    "value": 7.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "blagovarsky",
    "indicatorId": "bdmo_y48155002",
    "year": 2024,
    "value": 21.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "blagoveshchensky",
    "indicatorId": "bdmo_y48155002",
    "year": 2024,
    "value": 0.21,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "buraevsky",
    "indicatorId": "bdmo_y48155002",
    "year": 2024,
    "value": 1.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "burzyansky",
    "indicatorId": "bdmo_y48155002",
    "year": 2024,
    "value": 45.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "buzdyaksky",
    "indicatorId": "bdmo_y48155002",
    "year": 2024,
    "value": 66.28,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "chekmagushevsky",
    "indicatorId": "bdmo_y48155002",
    "year": 2024,
    "value": 2.17,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "chishminsky",
    "indicatorId": "bdmo_y48155002",
    "year": 2024,
    "value": 19.54,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "davlekanovsky",
    "indicatorId": "bdmo_y48155002",
    "year": 2024,
    "value": 10.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "duvansky",
    "indicatorId": "bdmo_y48155002",
    "year": 2024,
    "value": 1.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "dyurtyulinsky",
    "indicatorId": "bdmo_y48155002",
    "year": 2024,
    "value": 0.2,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ermekeyevsky",
    "indicatorId": "bdmo_y48155002",
    "year": 2024,
    "value": 28.9,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "fedorovsky",
    "indicatorId": "bdmo_y48155002",
    "year": 2024,
    "value": 25.12,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "gafuriysky",
    "indicatorId": "bdmo_y48155002",
    "year": 2024,
    "value": 3.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "iglinsky",
    "indicatorId": "bdmo_y48155002",
    "year": 2024,
    "value": 2.56,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ilishevsky",
    "indicatorId": "bdmo_y48155002",
    "year": 2024,
    "value": 2.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ishimbay",
    "indicatorId": "bdmo_y48155002",
    "year": 2024,
    "value": 1.32,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kaltasinsky",
    "indicatorId": "bdmo_y48155002",
    "year": 2024,
    "value": 8.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "karaidelsky",
    "indicatorId": "bdmo_y48155002",
    "year": 2024,
    "value": 20.1,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "karmaskalinsky",
    "indicatorId": "bdmo_y48155002",
    "year": 2024,
    "value": 3.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "khaibullinsky",
    "indicatorId": "bdmo_y48155002",
    "year": 2024,
    "value": 2.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "krasnokamsky",
    "indicatorId": "bdmo_y48155002",
    "year": 2024,
    "value": 10.2,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kugarchinsky",
    "indicatorId": "bdmo_y48155002",
    "year": 2024,
    "value": 14.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kushnarenkovsky",
    "indicatorId": "bdmo_y48155002",
    "year": 2024,
    "value": 3.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "mechetlinsky",
    "indicatorId": "bdmo_y48155002",
    "year": 2024,
    "value": 6.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "mishkinsky",
    "indicatorId": "bdmo_y48155002",
    "year": 2024,
    "value": 3.28,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "miyakinsky",
    "indicatorId": "bdmo_y48155002",
    "year": 2024,
    "value": 68.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "nurimanovsky",
    "indicatorId": "bdmo_y48155002",
    "year": 2024,
    "value": 0.1,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sharansky",
    "indicatorId": "bdmo_y48155002",
    "year": 2024,
    "value": 30.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlibashevsky",
    "indicatorId": "bdmo_y48155002",
    "year": 2024,
    "value": 5.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamaksky",
    "indicatorId": "bdmo_y48155002",
    "year": 2024,
    "value": 0.64,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "tatyshlinsky",
    "indicatorId": "bdmo_y48155002",
    "year": 2024,
    "value": 7.55,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "tuymazy",
    "indicatorId": "bdmo_y48155002",
    "year": 2024,
    "value": 0.09,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "uchaly",
    "indicatorId": "bdmo_y48155002",
    "year": 2024,
    "value": 2.44,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufa",
    "indicatorId": "bdmo_y48155002",
    "year": 2024,
    "value": 0.02,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufimsky",
    "indicatorId": "bdmo_y48155002",
    "year": 2024,
    "value": 2.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "yanaulsky",
    "indicatorId": "bdmo_y48155002",
    "year": 2024,
    "value": 5.7,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "zianchurinsky",
    "indicatorId": "bdmo_y48155002",
    "year": 2024,
    "value": 12.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "zilairsky",
    "indicatorId": "bdmo_y48155002",
    "year": 2024,
    "value": 19.2,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "abzelilovsky",
    "indicatorId": "bdmo_y48155006",
    "year": 2024,
    "value": 70.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "agidel",
    "indicatorId": "bdmo_y48155006",
    "year": 2024,
    "value": 48.77,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "alsheevsky",
    "indicatorId": "bdmo_y48155006",
    "year": 2024,
    "value": 80.05,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "arkhangelsky",
    "indicatorId": "bdmo_y48155006",
    "year": 2024,
    "value": 60.24,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "askinsky",
    "indicatorId": "bdmo_y48155006",
    "year": 2024,
    "value": 71.37,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "aurgazinsky",
    "indicatorId": "bdmo_y48155006",
    "year": 2024,
    "value": 62.97,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "bakalinsky",
    "indicatorId": "bdmo_y48155006",
    "year": 2024,
    "value": 84.75,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "baltachevsky",
    "indicatorId": "bdmo_y48155006",
    "year": 2024,
    "value": 76.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "baymaksky",
    "indicatorId": "bdmo_y48155006",
    "year": 2024,
    "value": 65.48,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "belebeyevsky",
    "indicatorId": "bdmo_y48155006",
    "year": 2024,
    "value": 65.18,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "belokataysky",
    "indicatorId": "bdmo_y48155006",
    "year": 2024,
    "value": 49.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "beloretsk",
    "indicatorId": "bdmo_y48155006",
    "year": 2024,
    "value": 23.61,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "birsk",
    "indicatorId": "bdmo_y48155006",
    "year": 2024,
    "value": 52.38,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "bizhbulyaksky",
    "indicatorId": "bdmo_y48155006",
    "year": 2024,
    "value": 68.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "blagovarsky",
    "indicatorId": "bdmo_y48155006",
    "year": 2024,
    "value": 49.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "blagoveshchensky",
    "indicatorId": "bdmo_y48155006",
    "year": 2024,
    "value": 52.14,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "buraevsky",
    "indicatorId": "bdmo_y48155006",
    "year": 2024,
    "value": 75.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "burzyansky",
    "indicatorId": "bdmo_y48155006",
    "year": 2024,
    "value": 60.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "buzdyaksky",
    "indicatorId": "bdmo_y48155006",
    "year": 2024,
    "value": 66.28,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "chekmagushevsky",
    "indicatorId": "bdmo_y48155006",
    "year": 2024,
    "value": 81.52,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "chishminsky",
    "indicatorId": "bdmo_y48155006",
    "year": 2024,
    "value": 83.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "davlekanovsky",
    "indicatorId": "bdmo_y48155006",
    "year": 2024,
    "value": 70.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "duvansky",
    "indicatorId": "bdmo_y48155006",
    "year": 2024,
    "value": 80.75,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "dyurtyulinsky",
    "indicatorId": "bdmo_y48155006",
    "year": 2024,
    "value": 48.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ermekeyevsky",
    "indicatorId": "bdmo_y48155006",
    "year": 2024,
    "value": 43.42,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "fedorovsky",
    "indicatorId": "bdmo_y48155006",
    "year": 2024,
    "value": 87.03,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "gafuriysky",
    "indicatorId": "bdmo_y48155006",
    "year": 2024,
    "value": 77.2,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "iglinsky",
    "indicatorId": "bdmo_y48155006",
    "year": 2024,
    "value": 99.7,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ilishevsky",
    "indicatorId": "bdmo_y48155006",
    "year": 2024,
    "value": 70.44,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ishimbay",
    "indicatorId": "bdmo_y48155006",
    "year": 2024,
    "value": 74.9,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kaltasinsky",
    "indicatorId": "bdmo_y48155006",
    "year": 2024,
    "value": 88.43,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "karaidelsky",
    "indicatorId": "bdmo_y48155006",
    "year": 2024,
    "value": 63.07,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "karmaskalinsky",
    "indicatorId": "bdmo_y48155006",
    "year": 2024,
    "value": 82.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "khaibullinsky",
    "indicatorId": "bdmo_y48155006",
    "year": 2024,
    "value": 37.81,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kiginsky",
    "indicatorId": "bdmo_y48155006",
    "year": 2024,
    "value": 84.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "krasnokamsky",
    "indicatorId": "bdmo_y48155006",
    "year": 2024,
    "value": 94.81,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kugarchinsky",
    "indicatorId": "bdmo_y48155006",
    "year": 2024,
    "value": 70.83,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kumertau",
    "indicatorId": "bdmo_y48155006",
    "year": 2024,
    "value": 59.53,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kushnarenkovsky",
    "indicatorId": "bdmo_y48155006",
    "year": 2024,
    "value": 41.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kuyurgazinsky",
    "indicatorId": "bdmo_y48155006",
    "year": 2024,
    "value": 84.52,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "mechetlinsky",
    "indicatorId": "bdmo_y48155006",
    "year": 2024,
    "value": 100.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "meleuz",
    "indicatorId": "bdmo_y48155006",
    "year": 2024,
    "value": 98.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "mishkinsky",
    "indicatorId": "bdmo_y48155006",
    "year": 2024,
    "value": 82.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "miyakinsky",
    "indicatorId": "bdmo_y48155006",
    "year": 2024,
    "value": 50.09,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "neftekamsk",
    "indicatorId": "bdmo_y48155006",
    "year": 2024,
    "value": 38.81,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "nurimanovsky",
    "indicatorId": "bdmo_y48155006",
    "year": 2024,
    "value": 62.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "oktyabrsky",
    "indicatorId": "bdmo_y48155006",
    "year": 2024,
    "value": 45.94,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "salavat",
    "indicatorId": "bdmo_y48155006",
    "year": 2024,
    "value": 80.22,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "salavatsky",
    "indicatorId": "bdmo_y48155006",
    "year": 2024,
    "value": 81.59,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sharansky",
    "indicatorId": "bdmo_y48155006",
    "year": 2024,
    "value": 78.43,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sibay",
    "indicatorId": "bdmo_y48155006",
    "year": 2024,
    "value": 54.65,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlibashevsky",
    "indicatorId": "bdmo_y48155006",
    "year": 2024,
    "value": 55.46,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamak",
    "indicatorId": "bdmo_y48155006",
    "year": 2024,
    "value": 58.1,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamaksky",
    "indicatorId": "bdmo_y48155006",
    "year": 2024,
    "value": 85.38,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "tatyshlinsky",
    "indicatorId": "bdmo_y48155006",
    "year": 2024,
    "value": 54.22,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "tuymazy",
    "indicatorId": "bdmo_y48155006",
    "year": 2024,
    "value": 76.9,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "uchaly",
    "indicatorId": "bdmo_y48155006",
    "year": 2024,
    "value": 61.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufa",
    "indicatorId": "bdmo_y48155006",
    "year": 2024,
    "value": 61.61,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufimsky",
    "indicatorId": "bdmo_y48155006",
    "year": 2024,
    "value": 68.37,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "yanaulsky",
    "indicatorId": "bdmo_y48155006",
    "year": 2024,
    "value": 55.37,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "zianchurinsky",
    "indicatorId": "bdmo_y48155006",
    "year": 2024,
    "value": 83.16,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "zilairsky",
    "indicatorId": "bdmo_y48155006",
    "year": 2024,
    "value": 98.7,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "beloretsk",
    "indicatorId": "bdmo_y48155008",
    "year": 2024,
    "value": 15511.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "blagoveshchensky",
    "indicatorId": "bdmo_y48155008",
    "year": 2024,
    "value": 22429.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kumertau",
    "indicatorId": "bdmo_y48155008",
    "year": 2024,
    "value": 140000.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "nurimanovsky",
    "indicatorId": "bdmo_y48155008",
    "year": 2024,
    "value": 2400.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sibay",
    "indicatorId": "bdmo_y48155008",
    "year": 2024,
    "value": 2171.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "uchaly",
    "indicatorId": "bdmo_y48155008",
    "year": 2024,
    "value": 22000.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "beloretsk",
    "indicatorId": "bdmo_y48155009",
    "year": 2024,
    "value": 121112.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kumertau",
    "indicatorId": "bdmo_y48155009",
    "year": 2024,
    "value": 80500.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "nurimanovsky",
    "indicatorId": "bdmo_y48155009",
    "year": 2024,
    "value": 4450.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sibay",
    "indicatorId": "bdmo_y48155009",
    "year": 2024,
    "value": 30281.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "uchaly",
    "indicatorId": "bdmo_y48155009",
    "year": 2024,
    "value": 27500.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "abzelilovsky",
    "indicatorId": "bdmo_y48155018",
    "year": 2024,
    "value": 100.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "agidel",
    "indicatorId": "bdmo_y48155018",
    "year": 2024,
    "value": 100.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "alsheevsky",
    "indicatorId": "bdmo_y48155018",
    "year": 2024,
    "value": 100.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "arkhangelsky",
    "indicatorId": "bdmo_y48155018",
    "year": 2024,
    "value": 100.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "askinsky",
    "indicatorId": "bdmo_y48155018",
    "year": 2024,
    "value": 100.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "aurgazinsky",
    "indicatorId": "bdmo_y48155018",
    "year": 2024,
    "value": 100.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "bakalinsky",
    "indicatorId": "bdmo_y48155018",
    "year": 2024,
    "value": 100.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "baltachevsky",
    "indicatorId": "bdmo_y48155018",
    "year": 2024,
    "value": 100.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "baymaksky",
    "indicatorId": "bdmo_y48155018",
    "year": 2024,
    "value": 100.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "belebeyevsky",
    "indicatorId": "bdmo_y48155018",
    "year": 2024,
    "value": 100.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "belokataysky",
    "indicatorId": "bdmo_y48155018",
    "year": 2024,
    "value": 100.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "beloretsk",
    "indicatorId": "bdmo_y48155018",
    "year": 2024,
    "value": 100.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "birsk",
    "indicatorId": "bdmo_y48155018",
    "year": 2024,
    "value": 100.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "bizhbulyaksky",
    "indicatorId": "bdmo_y48155018",
    "year": 2024,
    "value": 100.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "blagovarsky",
    "indicatorId": "bdmo_y48155018",
    "year": 2024,
    "value": 100.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "blagoveshchensky",
    "indicatorId": "bdmo_y48155018",
    "year": 2024,
    "value": 100.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "buraevsky",
    "indicatorId": "bdmo_y48155018",
    "year": 2024,
    "value": 100.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "burzyansky",
    "indicatorId": "bdmo_y48155018",
    "year": 2024,
    "value": 100.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "buzdyaksky",
    "indicatorId": "bdmo_y48155018",
    "year": 2024,
    "value": 100.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "chekmagushevsky",
    "indicatorId": "bdmo_y48155018",
    "year": 2024,
    "value": 100.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "chishminsky",
    "indicatorId": "bdmo_y48155018",
    "year": 2024,
    "value": 100.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "davlekanovsky",
    "indicatorId": "bdmo_y48155018",
    "year": 2024,
    "value": 100.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "duvansky",
    "indicatorId": "bdmo_y48155018",
    "year": 2024,
    "value": 100.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "dyurtyulinsky",
    "indicatorId": "bdmo_y48155018",
    "year": 2024,
    "value": 100.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ermekeyevsky",
    "indicatorId": "bdmo_y48155018",
    "year": 2024,
    "value": 100.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "fedorovsky",
    "indicatorId": "bdmo_y48155018",
    "year": 2024,
    "value": 100.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "gafuriysky",
    "indicatorId": "bdmo_y48155018",
    "year": 2024,
    "value": 100.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "iglinsky",
    "indicatorId": "bdmo_y48155018",
    "year": 2024,
    "value": 100.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ilishevsky",
    "indicatorId": "bdmo_y48155018",
    "year": 2024,
    "value": 100.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ishimbay",
    "indicatorId": "bdmo_y48155018",
    "year": 2024,
    "value": 100.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kaltasinsky",
    "indicatorId": "bdmo_y48155018",
    "year": 2024,
    "value": 100.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "karaidelsky",
    "indicatorId": "bdmo_y48155018",
    "year": 2024,
    "value": 100.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "karmaskalinsky",
    "indicatorId": "bdmo_y48155018",
    "year": 2024,
    "value": 100.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "khaibullinsky",
    "indicatorId": "bdmo_y48155018",
    "year": 2024,
    "value": 100.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kiginsky",
    "indicatorId": "bdmo_y48155018",
    "year": 2024,
    "value": 100.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "krasnokamsky",
    "indicatorId": "bdmo_y48155018",
    "year": 2024,
    "value": 100.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kugarchinsky",
    "indicatorId": "bdmo_y48155018",
    "year": 2024,
    "value": 100.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kumertau",
    "indicatorId": "bdmo_y48155018",
    "year": 2024,
    "value": 100.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kushnarenkovsky",
    "indicatorId": "bdmo_y48155018",
    "year": 2024,
    "value": 100.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kuyurgazinsky",
    "indicatorId": "bdmo_y48155018",
    "year": 2024,
    "value": 100.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "mechetlinsky",
    "indicatorId": "bdmo_y48155018",
    "year": 2024,
    "value": 100.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "meleuz",
    "indicatorId": "bdmo_y48155018",
    "year": 2024,
    "value": 100.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "mishkinsky",
    "indicatorId": "bdmo_y48155018",
    "year": 2024,
    "value": 100.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "miyakinsky",
    "indicatorId": "bdmo_y48155018",
    "year": 2024,
    "value": 100.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "neftekamsk",
    "indicatorId": "bdmo_y48155018",
    "year": 2024,
    "value": 100.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "nurimanovsky",
    "indicatorId": "bdmo_y48155018",
    "year": 2024,
    "value": 100.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "oktyabrsky",
    "indicatorId": "bdmo_y48155018",
    "year": 2024,
    "value": 100.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "salavat",
    "indicatorId": "bdmo_y48155018",
    "year": 2024,
    "value": 100.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "salavatsky",
    "indicatorId": "bdmo_y48155018",
    "year": 2024,
    "value": 100.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sharansky",
    "indicatorId": "bdmo_y48155018",
    "year": 2024,
    "value": 100.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sibay",
    "indicatorId": "bdmo_y48155018",
    "year": 2024,
    "value": 100.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlibashevsky",
    "indicatorId": "bdmo_y48155018",
    "year": 2024,
    "value": 100.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamak",
    "indicatorId": "bdmo_y48155018",
    "year": 2024,
    "value": 100.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamaksky",
    "indicatorId": "bdmo_y48155018",
    "year": 2024,
    "value": 100.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "tatyshlinsky",
    "indicatorId": "bdmo_y48155018",
    "year": 2024,
    "value": 100.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "tuymazy",
    "indicatorId": "bdmo_y48155018",
    "year": 2024,
    "value": 100.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "uchaly",
    "indicatorId": "bdmo_y48155018",
    "year": 2024,
    "value": 100.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufa",
    "indicatorId": "bdmo_y48155018",
    "year": 2024,
    "value": 100.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufimsky",
    "indicatorId": "bdmo_y48155018",
    "year": 2024,
    "value": 100.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "yanaulsky",
    "indicatorId": "bdmo_y48155018",
    "year": 2024,
    "value": 100.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "zianchurinsky",
    "indicatorId": "bdmo_y48155018",
    "year": 2024,
    "value": 100.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "zilairsky",
    "indicatorId": "bdmo_y48155018",
    "year": 2024,
    "value": 100.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "baymaksky",
    "indicatorId": "bdmo_y48155023",
    "year": 2024,
    "value": 0.79,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "beloretsk",
    "indicatorId": "bdmo_y48155023",
    "year": 2024,
    "value": 0.02,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "birsk",
    "indicatorId": "bdmo_y48155023",
    "year": 2024,
    "value": 0.07,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "burzyansky",
    "indicatorId": "bdmo_y48155023",
    "year": 2024,
    "value": 100.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufa",
    "indicatorId": "bdmo_y48155023",
    "year": 2024,
    "value": 8.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "iglinsky",
    "indicatorId": "bdmo_y48155033",
    "year": 2024,
    "value": 8037.86,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "karmaskalinsky",
    "indicatorId": "bdmo_y48155033",
    "year": 2024,
    "value": 68775.46,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sibay",
    "indicatorId": "bdmo_y48155033",
    "year": 2024,
    "value": 197481.2,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamaksky",
    "indicatorId": "bdmo_y48155033",
    "year": 2024,
    "value": 903.89,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufa",
    "indicatorId": "bdmo_y48155033",
    "year": 2024,
    "value": 57124.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "abzelilovsky",
    "indicatorId": "bdmo_y48155041",
    "year": 2024,
    "value": 488.9,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "agidel",
    "indicatorId": "bdmo_y48155041",
    "year": 2024,
    "value": 890.95,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "alsheevsky",
    "indicatorId": "bdmo_y48155041",
    "year": 2024,
    "value": 1186.33,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "arkhangelsky",
    "indicatorId": "bdmo_y48155041",
    "year": 2024,
    "value": 290.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "askinsky",
    "indicatorId": "bdmo_y48155041",
    "year": 2024,
    "value": 1189.7,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "aurgazinsky",
    "indicatorId": "bdmo_y48155041",
    "year": 2024,
    "value": 1008.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "bakalinsky",
    "indicatorId": "bdmo_y48155041",
    "year": 2024,
    "value": 649.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "baltachevsky",
    "indicatorId": "bdmo_y48155041",
    "year": 2024,
    "value": 518.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "baymaksky",
    "indicatorId": "bdmo_y48155041",
    "year": 2024,
    "value": 1078.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "belebeyevsky",
    "indicatorId": "bdmo_y48155041",
    "year": 2024,
    "value": 333.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "belokataysky",
    "indicatorId": "bdmo_y48155041",
    "year": 2024,
    "value": 645.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "beloretsk",
    "indicatorId": "bdmo_y48155041",
    "year": 2024,
    "value": 650.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "birsk",
    "indicatorId": "bdmo_y48155041",
    "year": 2024,
    "value": 628.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "bizhbulyaksky",
    "indicatorId": "bdmo_y48155041",
    "year": 2024,
    "value": 262.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "blagovarsky",
    "indicatorId": "bdmo_y48155041",
    "year": 2024,
    "value": 656.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "blagoveshchensky",
    "indicatorId": "bdmo_y48155041",
    "year": 2024,
    "value": 115.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "buraevsky",
    "indicatorId": "bdmo_y48155041",
    "year": 2024,
    "value": 330.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "burzyansky",
    "indicatorId": "bdmo_y48155041",
    "year": 2024,
    "value": 395.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "buzdyaksky",
    "indicatorId": "bdmo_y48155041",
    "year": 2024,
    "value": 598.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "chekmagushevsky",
    "indicatorId": "bdmo_y48155041",
    "year": 2024,
    "value": 365.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "chishminsky",
    "indicatorId": "bdmo_y48155041",
    "year": 2024,
    "value": 624.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "davlekanovsky",
    "indicatorId": "bdmo_y48155041",
    "year": 2024,
    "value": 791.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "duvansky",
    "indicatorId": "bdmo_y48155041",
    "year": 2024,
    "value": 826.35,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "dyurtyulinsky",
    "indicatorId": "bdmo_y48155041",
    "year": 2024,
    "value": 340.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ermekeyevsky",
    "indicatorId": "bdmo_y48155041",
    "year": 2024,
    "value": 607.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "fedorovsky",
    "indicatorId": "bdmo_y48155041",
    "year": 2024,
    "value": 337.65,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "gafuriysky",
    "indicatorId": "bdmo_y48155041",
    "year": 2024,
    "value": 206.63,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "iglinsky",
    "indicatorId": "bdmo_y48155041",
    "year": 2024,
    "value": 324.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ilishevsky",
    "indicatorId": "bdmo_y48155041",
    "year": 2024,
    "value": 342.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ishimbay",
    "indicatorId": "bdmo_y48155041",
    "year": 2024,
    "value": 536.2,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kaltasinsky",
    "indicatorId": "bdmo_y48155041",
    "year": 2024,
    "value": 915.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "karaidelsky",
    "indicatorId": "bdmo_y48155041",
    "year": 2024,
    "value": 460.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "karmaskalinsky",
    "indicatorId": "bdmo_y48155041",
    "year": 2024,
    "value": 1280.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "khaibullinsky",
    "indicatorId": "bdmo_y48155041",
    "year": 2024,
    "value": 168.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kiginsky",
    "indicatorId": "bdmo_y48155041",
    "year": 2024,
    "value": 760.97,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "krasnokamsky",
    "indicatorId": "bdmo_y48155041",
    "year": 2024,
    "value": 673.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kugarchinsky",
    "indicatorId": "bdmo_y48155041",
    "year": 2024,
    "value": 341.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kumertau",
    "indicatorId": "bdmo_y48155041",
    "year": 2024,
    "value": 339.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kushnarenkovsky",
    "indicatorId": "bdmo_y48155041",
    "year": 2024,
    "value": 409.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kuyurgazinsky",
    "indicatorId": "bdmo_y48155041",
    "year": 2024,
    "value": 563.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "mechetlinsky",
    "indicatorId": "bdmo_y48155041",
    "year": 2024,
    "value": 617.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "meleuz",
    "indicatorId": "bdmo_y48155041",
    "year": 2024,
    "value": 483.9,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "mishkinsky",
    "indicatorId": "bdmo_y48155041",
    "year": 2024,
    "value": 612.09,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "miyakinsky",
    "indicatorId": "bdmo_y48155041",
    "year": 2024,
    "value": 492.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "neftekamsk",
    "indicatorId": "bdmo_y48155041",
    "year": 2024,
    "value": 431.96,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "nurimanovsky",
    "indicatorId": "bdmo_y48155041",
    "year": 2024,
    "value": 235.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "oktyabrsky",
    "indicatorId": "bdmo_y48155041",
    "year": 2024,
    "value": 518.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "salavat",
    "indicatorId": "bdmo_y48155041",
    "year": 2024,
    "value": 649.7,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "salavatsky",
    "indicatorId": "bdmo_y48155041",
    "year": 2024,
    "value": 570.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sharansky",
    "indicatorId": "bdmo_y48155041",
    "year": 2024,
    "value": 540.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sibay",
    "indicatorId": "bdmo_y48155041",
    "year": 2024,
    "value": 318.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlibashevsky",
    "indicatorId": "bdmo_y48155041",
    "year": 2024,
    "value": 742.35,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamak",
    "indicatorId": "bdmo_y48155041",
    "year": 2024,
    "value": 637.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamaksky",
    "indicatorId": "bdmo_y48155041",
    "year": 2024,
    "value": 292.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "tatyshlinsky",
    "indicatorId": "bdmo_y48155041",
    "year": 2024,
    "value": 501.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "tuymazy",
    "indicatorId": "bdmo_y48155041",
    "year": 2024,
    "value": 431.16,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "uchaly",
    "indicatorId": "bdmo_y48155041",
    "year": 2024,
    "value": 606.78,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufa",
    "indicatorId": "bdmo_y48155041",
    "year": 2024,
    "value": 1027.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufimsky",
    "indicatorId": "bdmo_y48155041",
    "year": 2024,
    "value": 803.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "yanaulsky",
    "indicatorId": "bdmo_y48155041",
    "year": 2024,
    "value": 586.95,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "zianchurinsky",
    "indicatorId": "bdmo_y48155041",
    "year": 2024,
    "value": 456.32,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "zilairsky",
    "indicatorId": "bdmo_y48155041",
    "year": 2024,
    "value": 762.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "abzelilovsky",
    "indicatorId": "bdmo_y48155042",
    "year": 2024,
    "value": 0.14,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "agidel",
    "indicatorId": "bdmo_y48155042",
    "year": 2024,
    "value": 0.16,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "alsheevsky",
    "indicatorId": "bdmo_y48155042",
    "year": 2024,
    "value": 0.29,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "arkhangelsky",
    "indicatorId": "bdmo_y48155042",
    "year": 2024,
    "value": 0.36,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "aurgazinsky",
    "indicatorId": "bdmo_y48155042",
    "year": 2024,
    "value": 0.19,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "bakalinsky",
    "indicatorId": "bdmo_y48155042",
    "year": 2024,
    "value": 0.15,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "baltachevsky",
    "indicatorId": "bdmo_y48155042",
    "year": 2024,
    "value": 0.26,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "baymaksky",
    "indicatorId": "bdmo_y48155042",
    "year": 2024,
    "value": 0.19,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "belebeyevsky",
    "indicatorId": "bdmo_y48155042",
    "year": 2024,
    "value": 0.02,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "beloretsk",
    "indicatorId": "bdmo_y48155042",
    "year": 2024,
    "value": 0.15,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "birsk",
    "indicatorId": "bdmo_y48155042",
    "year": 2024,
    "value": 0.17,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "bizhbulyaksky",
    "indicatorId": "bdmo_y48155042",
    "year": 2024,
    "value": 0.14,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "blagoveshchensky",
    "indicatorId": "bdmo_y48155042",
    "year": 2024,
    "value": 0.18,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "burzyansky",
    "indicatorId": "bdmo_y48155042",
    "year": 2024,
    "value": 0.23,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "buzdyaksky",
    "indicatorId": "bdmo_y48155042",
    "year": 2024,
    "value": 0.21,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "chekmagushevsky",
    "indicatorId": "bdmo_y48155042",
    "year": 2024,
    "value": 0.26,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "chishminsky",
    "indicatorId": "bdmo_y48155042",
    "year": 2024,
    "value": 0.17,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "davlekanovsky",
    "indicatorId": "bdmo_y48155042",
    "year": 2024,
    "value": 0.17,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "duvansky",
    "indicatorId": "bdmo_y48155042",
    "year": 2024,
    "value": 0.2,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "dyurtyulinsky",
    "indicatorId": "bdmo_y48155042",
    "year": 2024,
    "value": 0.08,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ermekeyevsky",
    "indicatorId": "bdmo_y48155042",
    "year": 2024,
    "value": 0.13,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "fedorovsky",
    "indicatorId": "bdmo_y48155042",
    "year": 2024,
    "value": 0.19,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "gafuriysky",
    "indicatorId": "bdmo_y48155042",
    "year": 2024,
    "value": 0.18,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "iglinsky",
    "indicatorId": "bdmo_y48155042",
    "year": 2024,
    "value": 0.16,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ilishevsky",
    "indicatorId": "bdmo_y48155042",
    "year": 2024,
    "value": 0.19,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ishimbay",
    "indicatorId": "bdmo_y48155042",
    "year": 2024,
    "value": 0.19,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kaltasinsky",
    "indicatorId": "bdmo_y48155042",
    "year": 2024,
    "value": 0.27,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "karaidelsky",
    "indicatorId": "bdmo_y48155042",
    "year": 2024,
    "value": 0.16,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "karmaskalinsky",
    "indicatorId": "bdmo_y48155042",
    "year": 2024,
    "value": 0.28,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "khaibullinsky",
    "indicatorId": "bdmo_y48155042",
    "year": 2024,
    "value": 0.23,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kiginsky",
    "indicatorId": "bdmo_y48155042",
    "year": 2024,
    "value": 0.36,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "krasnokamsky",
    "indicatorId": "bdmo_y48155042",
    "year": 2024,
    "value": 0.23,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kugarchinsky",
    "indicatorId": "bdmo_y48155042",
    "year": 2024,
    "value": 0.18,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kumertau",
    "indicatorId": "bdmo_y48155042",
    "year": 2024,
    "value": 0.13,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kushnarenkovsky",
    "indicatorId": "bdmo_y48155042",
    "year": 2024,
    "value": 0.27,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kuyurgazinsky",
    "indicatorId": "bdmo_y48155042",
    "year": 2024,
    "value": 0.15,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "meleuz",
    "indicatorId": "bdmo_y48155042",
    "year": 2024,
    "value": 0.2,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "mishkinsky",
    "indicatorId": "bdmo_y48155042",
    "year": 2024,
    "value": 0.2,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "miyakinsky",
    "indicatorId": "bdmo_y48155042",
    "year": 2024,
    "value": 0.16,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "neftekamsk",
    "indicatorId": "bdmo_y48155042",
    "year": 2024,
    "value": 0.19,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "nurimanovsky",
    "indicatorId": "bdmo_y48155042",
    "year": 2024,
    "value": 0.1,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "oktyabrsky",
    "indicatorId": "bdmo_y48155042",
    "year": 2024,
    "value": 0.18,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "salavat",
    "indicatorId": "bdmo_y48155042",
    "year": 2024,
    "value": 0.15,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "salavatsky",
    "indicatorId": "bdmo_y48155042",
    "year": 2024,
    "value": 0.28,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sharansky",
    "indicatorId": "bdmo_y48155042",
    "year": 2024,
    "value": 0.18,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sibay",
    "indicatorId": "bdmo_y48155042",
    "year": 2024,
    "value": 0.15,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamak",
    "indicatorId": "bdmo_y48155042",
    "year": 2024,
    "value": 0.15,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamaksky",
    "indicatorId": "bdmo_y48155042",
    "year": 2024,
    "value": 0.1,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "tatyshlinsky",
    "indicatorId": "bdmo_y48155042",
    "year": 2024,
    "value": 0.07,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "tuymazy",
    "indicatorId": "bdmo_y48155042",
    "year": 2024,
    "value": 0.18,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "uchaly",
    "indicatorId": "bdmo_y48155042",
    "year": 2024,
    "value": 0.2,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufa",
    "indicatorId": "bdmo_y48155042",
    "year": 2024,
    "value": 0.17,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufimsky",
    "indicatorId": "bdmo_y48155042",
    "year": 2024,
    "value": 0.55,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "yanaulsky",
    "indicatorId": "bdmo_y48155042",
    "year": 2024,
    "value": 0.16,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "zianchurinsky",
    "indicatorId": "bdmo_y48155042",
    "year": 2024,
    "value": 0.2,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "agidel",
    "indicatorId": "bdmo_y48155043",
    "year": 2024,
    "value": 9.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "belebeyevsky",
    "indicatorId": "bdmo_y48155043",
    "year": 2024,
    "value": 6.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "beloretsk",
    "indicatorId": "bdmo_y48155043",
    "year": 2024,
    "value": 13.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "blagoveshchensky",
    "indicatorId": "bdmo_y48155043",
    "year": 2024,
    "value": 16.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "chishminsky",
    "indicatorId": "bdmo_y48155043",
    "year": 2024,
    "value": 9.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "dyurtyulinsky",
    "indicatorId": "bdmo_y48155043",
    "year": 2024,
    "value": 4.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ishimbay",
    "indicatorId": "bdmo_y48155043",
    "year": 2024,
    "value": 7.31,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "karmaskalinsky",
    "indicatorId": "bdmo_y48155043",
    "year": 2024,
    "value": 0.06,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kumertau",
    "indicatorId": "bdmo_y48155043",
    "year": 2024,
    "value": 17.9,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "meleuz",
    "indicatorId": "bdmo_y48155043",
    "year": 2024,
    "value": 11.85,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "neftekamsk",
    "indicatorId": "bdmo_y48155043",
    "year": 2024,
    "value": 19.43,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "oktyabrsky",
    "indicatorId": "bdmo_y48155043",
    "year": 2024,
    "value": 14.7,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "salavat",
    "indicatorId": "bdmo_y48155043",
    "year": 2024,
    "value": 14.7,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sibay",
    "indicatorId": "bdmo_y48155043",
    "year": 2024,
    "value": 10.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamak",
    "indicatorId": "bdmo_y48155043",
    "year": 2024,
    "value": 11.1,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamaksky",
    "indicatorId": "bdmo_y48155043",
    "year": 2024,
    "value": 8.55,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "tuymazy",
    "indicatorId": "bdmo_y48155043",
    "year": 2024,
    "value": 21.21,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "uchaly",
    "indicatorId": "bdmo_y48155043",
    "year": 2024,
    "value": 14.58,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufa",
    "indicatorId": "bdmo_y48155043",
    "year": 2024,
    "value": 15.9,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufimsky",
    "indicatorId": "bdmo_y48155043",
    "year": 2024,
    "value": 16.9,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "yanaulsky",
    "indicatorId": "bdmo_y48155043",
    "year": 2024,
    "value": 4.43,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "abzelilovsky",
    "indicatorId": "bdmo_y48155044",
    "year": 2024,
    "value": 17.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "agidel",
    "indicatorId": "bdmo_y48155044",
    "year": 2024,
    "value": 25.26,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "alsheevsky",
    "indicatorId": "bdmo_y48155044",
    "year": 2024,
    "value": 15.47,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "arkhangelsky",
    "indicatorId": "bdmo_y48155044",
    "year": 2024,
    "value": 45.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "askinsky",
    "indicatorId": "bdmo_y48155044",
    "year": 2024,
    "value": 29.1,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "aurgazinsky",
    "indicatorId": "bdmo_y48155044",
    "year": 2024,
    "value": 41.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "bakalinsky",
    "indicatorId": "bdmo_y48155044",
    "year": 2024,
    "value": 25.22,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "baltachevsky",
    "indicatorId": "bdmo_y48155044",
    "year": 2024,
    "value": 26.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "baymaksky",
    "indicatorId": "bdmo_y48155044",
    "year": 2024,
    "value": 30.75,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "belebeyevsky",
    "indicatorId": "bdmo_y48155044",
    "year": 2024,
    "value": 19.23,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "belokataysky",
    "indicatorId": "bdmo_y48155044",
    "year": 2024,
    "value": 15.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "beloretsk",
    "indicatorId": "bdmo_y48155044",
    "year": 2024,
    "value": 58.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "birsk",
    "indicatorId": "bdmo_y48155044",
    "year": 2024,
    "value": 28.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "bizhbulyaksky",
    "indicatorId": "bdmo_y48155044",
    "year": 2024,
    "value": 19.7,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "blagovarsky",
    "indicatorId": "bdmo_y48155044",
    "year": 2024,
    "value": 13.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "blagoveshchensky",
    "indicatorId": "bdmo_y48155044",
    "year": 2024,
    "value": 30.2,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "buraevsky",
    "indicatorId": "bdmo_y48155044",
    "year": 2024,
    "value": 12.66,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "burzyansky",
    "indicatorId": "bdmo_y48155044",
    "year": 2024,
    "value": 2.85,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "buzdyaksky",
    "indicatorId": "bdmo_y48155044",
    "year": 2024,
    "value": 18.03,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "chekmagushevsky",
    "indicatorId": "bdmo_y48155044",
    "year": 2024,
    "value": 21.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "chishminsky",
    "indicatorId": "bdmo_y48155044",
    "year": 2024,
    "value": 28.1,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "davlekanovsky",
    "indicatorId": "bdmo_y48155044",
    "year": 2024,
    "value": 23.2,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "duvansky",
    "indicatorId": "bdmo_y48155044",
    "year": 2024,
    "value": 24.22,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "dyurtyulinsky",
    "indicatorId": "bdmo_y48155044",
    "year": 2024,
    "value": 12.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ermekeyevsky",
    "indicatorId": "bdmo_y48155044",
    "year": 2024,
    "value": 12.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "fedorovsky",
    "indicatorId": "bdmo_y48155044",
    "year": 2024,
    "value": 18.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "gafuriysky",
    "indicatorId": "bdmo_y48155044",
    "year": 2024,
    "value": 44.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "iglinsky",
    "indicatorId": "bdmo_y48155044",
    "year": 2024,
    "value": 11.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ilishevsky",
    "indicatorId": "bdmo_y48155044",
    "year": 2024,
    "value": 24.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ishimbay",
    "indicatorId": "bdmo_y48155044",
    "year": 2024,
    "value": 31.46,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kaltasinsky",
    "indicatorId": "bdmo_y48155044",
    "year": 2024,
    "value": 26.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "karaidelsky",
    "indicatorId": "bdmo_y48155044",
    "year": 2024,
    "value": 20.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "karmaskalinsky",
    "indicatorId": "bdmo_y48155044",
    "year": 2024,
    "value": 27.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "khaibullinsky",
    "indicatorId": "bdmo_y48155044",
    "year": 2024,
    "value": 9.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kiginsky",
    "indicatorId": "bdmo_y48155044",
    "year": 2024,
    "value": 65.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "krasnokamsky",
    "indicatorId": "bdmo_y48155044",
    "year": 2024,
    "value": 32.9,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kugarchinsky",
    "indicatorId": "bdmo_y48155044",
    "year": 2024,
    "value": 65.27,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kumertau",
    "indicatorId": "bdmo_y48155044",
    "year": 2024,
    "value": 45.7,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kushnarenkovsky",
    "indicatorId": "bdmo_y48155044",
    "year": 2024,
    "value": 26.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kuyurgazinsky",
    "indicatorId": "bdmo_y48155044",
    "year": 2024,
    "value": 68.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "mechetlinsky",
    "indicatorId": "bdmo_y48155044",
    "year": 2024,
    "value": 23.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "meleuz",
    "indicatorId": "bdmo_y48155044",
    "year": 2024,
    "value": 28.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "mishkinsky",
    "indicatorId": "bdmo_y48155044",
    "year": 2024,
    "value": 20.08,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "miyakinsky",
    "indicatorId": "bdmo_y48155044",
    "year": 2024,
    "value": 34.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "neftekamsk",
    "indicatorId": "bdmo_y48155044",
    "year": 2024,
    "value": 38.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "nurimanovsky",
    "indicatorId": "bdmo_y48155044",
    "year": 2024,
    "value": 24.9,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "oktyabrsky",
    "indicatorId": "bdmo_y48155044",
    "year": 2024,
    "value": 40.58,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "salavat",
    "indicatorId": "bdmo_y48155044",
    "year": 2024,
    "value": 36.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "salavatsky",
    "indicatorId": "bdmo_y48155044",
    "year": 2024,
    "value": 32.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sharansky",
    "indicatorId": "bdmo_y48155044",
    "year": 2024,
    "value": 14.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sibay",
    "indicatorId": "bdmo_y48155044",
    "year": 2024,
    "value": 26.1,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlibashevsky",
    "indicatorId": "bdmo_y48155044",
    "year": 2024,
    "value": 18.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamak",
    "indicatorId": "bdmo_y48155044",
    "year": 2024,
    "value": 45.2,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamaksky",
    "indicatorId": "bdmo_y48155044",
    "year": 2024,
    "value": 32.78,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "tatyshlinsky",
    "indicatorId": "bdmo_y48155044",
    "year": 2024,
    "value": 7.91,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "tuymazy",
    "indicatorId": "bdmo_y48155044",
    "year": 2024,
    "value": 34.11,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "uchaly",
    "indicatorId": "bdmo_y48155044",
    "year": 2024,
    "value": 28.35,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufa",
    "indicatorId": "bdmo_y48155044",
    "year": 2024,
    "value": 46.1,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufimsky",
    "indicatorId": "bdmo_y48155044",
    "year": 2024,
    "value": 38.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "yanaulsky",
    "indicatorId": "bdmo_y48155044",
    "year": 2024,
    "value": 24.43,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "zianchurinsky",
    "indicatorId": "bdmo_y48155044",
    "year": 2024,
    "value": 26.1,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "zilairsky",
    "indicatorId": "bdmo_y48155044",
    "year": 2024,
    "value": 12.1,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "abzelilovsky",
    "indicatorId": "bdmo_y48155045",
    "year": 2024,
    "value": 144.7,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "alsheevsky",
    "indicatorId": "bdmo_y48155045",
    "year": 2024,
    "value": 227.45,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "arkhangelsky",
    "indicatorId": "bdmo_y48155045",
    "year": 2024,
    "value": 85.2,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "askinsky",
    "indicatorId": "bdmo_y48155045",
    "year": 2024,
    "value": 252.7,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "aurgazinsky",
    "indicatorId": "bdmo_y48155045",
    "year": 2024,
    "value": 180.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "bakalinsky",
    "indicatorId": "bdmo_y48155045",
    "year": 2024,
    "value": 123.2,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "baltachevsky",
    "indicatorId": "bdmo_y48155045",
    "year": 2024,
    "value": 168.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "baymaksky",
    "indicatorId": "bdmo_y48155045",
    "year": 2024,
    "value": 289.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "belebeyevsky",
    "indicatorId": "bdmo_y48155045",
    "year": 2024,
    "value": 62.7,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "belokataysky",
    "indicatorId": "bdmo_y48155045",
    "year": 2024,
    "value": 198.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "beloretsk",
    "indicatorId": "bdmo_y48155045",
    "year": 2024,
    "value": 156.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "birsk",
    "indicatorId": "bdmo_y48155045",
    "year": 2024,
    "value": 178.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "bizhbulyaksky",
    "indicatorId": "bdmo_y48155045",
    "year": 2024,
    "value": 719.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "blagovarsky",
    "indicatorId": "bdmo_y48155045",
    "year": 2024,
    "value": 181.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "blagoveshchensky",
    "indicatorId": "bdmo_y48155045",
    "year": 2024,
    "value": 179.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "buraevsky",
    "indicatorId": "bdmo_y48155045",
    "year": 2024,
    "value": 545.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "burzyansky",
    "indicatorId": "bdmo_y48155045",
    "year": 2024,
    "value": 80.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "buzdyaksky",
    "indicatorId": "bdmo_y48155045",
    "year": 2024,
    "value": 189.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "chekmagushevsky",
    "indicatorId": "bdmo_y48155045",
    "year": 2024,
    "value": 129.7,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "chishminsky",
    "indicatorId": "bdmo_y48155045",
    "year": 2024,
    "value": 179.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "davlekanovsky",
    "indicatorId": "bdmo_y48155045",
    "year": 2024,
    "value": 75.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "duvansky",
    "indicatorId": "bdmo_y48155045",
    "year": 2024,
    "value": 69.05,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "dyurtyulinsky",
    "indicatorId": "bdmo_y48155045",
    "year": 2024,
    "value": 107.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ermekeyevsky",
    "indicatorId": "bdmo_y48155045",
    "year": 2024,
    "value": 277.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "fedorovsky",
    "indicatorId": "bdmo_y48155045",
    "year": 2024,
    "value": 85.95,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "gafuriysky",
    "indicatorId": "bdmo_y48155045",
    "year": 2024,
    "value": 168.25,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "iglinsky",
    "indicatorId": "bdmo_y48155045",
    "year": 2024,
    "value": 97.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ilishevsky",
    "indicatorId": "bdmo_y48155045",
    "year": 2024,
    "value": 124.2,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ishimbay",
    "indicatorId": "bdmo_y48155045",
    "year": 2024,
    "value": 51.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kaltasinsky",
    "indicatorId": "bdmo_y48155045",
    "year": 2024,
    "value": 140.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "karaidelsky",
    "indicatorId": "bdmo_y48155045",
    "year": 2024,
    "value": 170.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "karmaskalinsky",
    "indicatorId": "bdmo_y48155045",
    "year": 2024,
    "value": 120.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "khaibullinsky",
    "indicatorId": "bdmo_y48155045",
    "year": 2024,
    "value": 210.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kiginsky",
    "indicatorId": "bdmo_y48155045",
    "year": 2024,
    "value": 102.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "krasnokamsky",
    "indicatorId": "bdmo_y48155045",
    "year": 2024,
    "value": 171.2,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kugarchinsky",
    "indicatorId": "bdmo_y48155045",
    "year": 2024,
    "value": 174.9,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kumertau",
    "indicatorId": "bdmo_y48155045",
    "year": 2024,
    "value": 115.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kushnarenkovsky",
    "indicatorId": "bdmo_y48155045",
    "year": 2024,
    "value": 102.1,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kuyurgazinsky",
    "indicatorId": "bdmo_y48155045",
    "year": 2024,
    "value": 263.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "mechetlinsky",
    "indicatorId": "bdmo_y48155045",
    "year": 2024,
    "value": 315.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "meleuz",
    "indicatorId": "bdmo_y48155045",
    "year": 2024,
    "value": 82.46,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "mishkinsky",
    "indicatorId": "bdmo_y48155045",
    "year": 2024,
    "value": 144.25,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "miyakinsky",
    "indicatorId": "bdmo_y48155045",
    "year": 2024,
    "value": 200.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "neftekamsk",
    "indicatorId": "bdmo_y48155045",
    "year": 2024,
    "value": 113.9,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "nurimanovsky",
    "indicatorId": "bdmo_y48155045",
    "year": 2024,
    "value": 164.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "oktyabrsky",
    "indicatorId": "bdmo_y48155045",
    "year": 2024,
    "value": 132.45,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "salavat",
    "indicatorId": "bdmo_y48155045",
    "year": 2024,
    "value": 102.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "salavatsky",
    "indicatorId": "bdmo_y48155045",
    "year": 2024,
    "value": 166.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sharansky",
    "indicatorId": "bdmo_y48155045",
    "year": 2024,
    "value": 98.2,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sibay",
    "indicatorId": "bdmo_y48155045",
    "year": 2024,
    "value": 21.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlibashevsky",
    "indicatorId": "bdmo_y48155045",
    "year": 2024,
    "value": 135.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamak",
    "indicatorId": "bdmo_y48155045",
    "year": 2024,
    "value": 82.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamaksky",
    "indicatorId": "bdmo_y48155045",
    "year": 2024,
    "value": 176.12,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "tatyshlinsky",
    "indicatorId": "bdmo_y48155045",
    "year": 2024,
    "value": 115.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "tuymazy",
    "indicatorId": "bdmo_y48155045",
    "year": 2024,
    "value": 100.88,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "uchaly",
    "indicatorId": "bdmo_y48155045",
    "year": 2024,
    "value": 114.7,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufa",
    "indicatorId": "bdmo_y48155045",
    "year": 2024,
    "value": 119.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufimsky",
    "indicatorId": "bdmo_y48155045",
    "year": 2024,
    "value": 160.2,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "yanaulsky",
    "indicatorId": "bdmo_y48155045",
    "year": 2024,
    "value": 182.1,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "zianchurinsky",
    "indicatorId": "bdmo_y48155045",
    "year": 2024,
    "value": 270.34,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "zilairsky",
    "indicatorId": "bdmo_y48155045",
    "year": 2024,
    "value": 692.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "abzelilovsky",
    "indicatorId": "bdmo_y48155047",
    "year": 2024,
    "value": 96.94,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "agidel",
    "indicatorId": "bdmo_y48155047",
    "year": 2024,
    "value": 45.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "alsheevsky",
    "indicatorId": "bdmo_y48155047",
    "year": 2024,
    "value": 110.32,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "arkhangelsky",
    "indicatorId": "bdmo_y48155047",
    "year": 2024,
    "value": 61.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "askinsky",
    "indicatorId": "bdmo_y48155047",
    "year": 2024,
    "value": 122.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "aurgazinsky",
    "indicatorId": "bdmo_y48155047",
    "year": 2024,
    "value": 238.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "bakalinsky",
    "indicatorId": "bdmo_y48155047",
    "year": 2024,
    "value": 119.19,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "baltachevsky",
    "indicatorId": "bdmo_y48155047",
    "year": 2024,
    "value": 173.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "baymaksky",
    "indicatorId": "bdmo_y48155047",
    "year": 2024,
    "value": 117.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "belebeyevsky",
    "indicatorId": "bdmo_y48155047",
    "year": 2024,
    "value": 40.79,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "belokataysky",
    "indicatorId": "bdmo_y48155047",
    "year": 2024,
    "value": 120.2,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "beloretsk",
    "indicatorId": "bdmo_y48155047",
    "year": 2024,
    "value": 64.7,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "birsk",
    "indicatorId": "bdmo_y48155047",
    "year": 2024,
    "value": 115.2,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "bizhbulyaksky",
    "indicatorId": "bdmo_y48155047",
    "year": 2024,
    "value": 107.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "blagovarsky",
    "indicatorId": "bdmo_y48155047",
    "year": 2024,
    "value": 29.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "blagoveshchensky",
    "indicatorId": "bdmo_y48155047",
    "year": 2024,
    "value": 88.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "buraevsky",
    "indicatorId": "bdmo_y48155047",
    "year": 2024,
    "value": 25.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "burzyansky",
    "indicatorId": "bdmo_y48155047",
    "year": 2024,
    "value": 76.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "buzdyaksky",
    "indicatorId": "bdmo_y48155047",
    "year": 2024,
    "value": 74.25,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "chekmagushevsky",
    "indicatorId": "bdmo_y48155047",
    "year": 2024,
    "value": 111.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "chishminsky",
    "indicatorId": "bdmo_y48155047",
    "year": 2024,
    "value": 43.51,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "davlekanovsky",
    "indicatorId": "bdmo_y48155047",
    "year": 2024,
    "value": 101.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "duvansky",
    "indicatorId": "bdmo_y48155047",
    "year": 2024,
    "value": 52.28,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "dyurtyulinsky",
    "indicatorId": "bdmo_y48155047",
    "year": 2024,
    "value": 45.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ermekeyevsky",
    "indicatorId": "bdmo_y48155047",
    "year": 2024,
    "value": 47.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "fedorovsky",
    "indicatorId": "bdmo_y48155047",
    "year": 2024,
    "value": 97.12,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "gafuriysky",
    "indicatorId": "bdmo_y48155047",
    "year": 2024,
    "value": 176.58,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "iglinsky",
    "indicatorId": "bdmo_y48155047",
    "year": 2024,
    "value": 127.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ilishevsky",
    "indicatorId": "bdmo_y48155047",
    "year": 2024,
    "value": 182.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ishimbay",
    "indicatorId": "bdmo_y48155047",
    "year": 2024,
    "value": 38.9,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kaltasinsky",
    "indicatorId": "bdmo_y48155047",
    "year": 2024,
    "value": 108.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "karaidelsky",
    "indicatorId": "bdmo_y48155047",
    "year": 2024,
    "value": 100.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "karmaskalinsky",
    "indicatorId": "bdmo_y48155047",
    "year": 2024,
    "value": 119.49,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "khaibullinsky",
    "indicatorId": "bdmo_y48155047",
    "year": 2024,
    "value": 155.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kiginsky",
    "indicatorId": "bdmo_y48155047",
    "year": 2024,
    "value": 122.69,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "krasnokamsky",
    "indicatorId": "bdmo_y48155047",
    "year": 2024,
    "value": 213.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kugarchinsky",
    "indicatorId": "bdmo_y48155047",
    "year": 2024,
    "value": 74.06,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kumertau",
    "indicatorId": "bdmo_y48155047",
    "year": 2024,
    "value": 17.43,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kushnarenkovsky",
    "indicatorId": "bdmo_y48155047",
    "year": 2024,
    "value": 99.2,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kuyurgazinsky",
    "indicatorId": "bdmo_y48155047",
    "year": 2024,
    "value": 53.2,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "mechetlinsky",
    "indicatorId": "bdmo_y48155047",
    "year": 2024,
    "value": 75.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "meleuz",
    "indicatorId": "bdmo_y48155047",
    "year": 2024,
    "value": 41.31,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "mishkinsky",
    "indicatorId": "bdmo_y48155047",
    "year": 2024,
    "value": 159.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "miyakinsky",
    "indicatorId": "bdmo_y48155047",
    "year": 2024,
    "value": 72.39,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "neftekamsk",
    "indicatorId": "bdmo_y48155047",
    "year": 2024,
    "value": 34.91,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "nurimanovsky",
    "indicatorId": "bdmo_y48155047",
    "year": 2024,
    "value": 79.1,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "oktyabrsky",
    "indicatorId": "bdmo_y48155047",
    "year": 2024,
    "value": 66.9,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "salavat",
    "indicatorId": "bdmo_y48155047",
    "year": 2024,
    "value": 61.1,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "salavatsky",
    "indicatorId": "bdmo_y48155047",
    "year": 2024,
    "value": 89.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sharansky",
    "indicatorId": "bdmo_y48155047",
    "year": 2024,
    "value": 92.39,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sibay",
    "indicatorId": "bdmo_y48155047",
    "year": 2024,
    "value": 154.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlibashevsky",
    "indicatorId": "bdmo_y48155047",
    "year": 2024,
    "value": 132.15,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamak",
    "indicatorId": "bdmo_y48155047",
    "year": 2024,
    "value": 57.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamaksky",
    "indicatorId": "bdmo_y48155047",
    "year": 2024,
    "value": 238.7,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "tatyshlinsky",
    "indicatorId": "bdmo_y48155047",
    "year": 2024,
    "value": 284.7,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "tuymazy",
    "indicatorId": "bdmo_y48155047",
    "year": 2024,
    "value": 58.87,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "uchaly",
    "indicatorId": "bdmo_y48155047",
    "year": 2024,
    "value": 54.9,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufa",
    "indicatorId": "bdmo_y48155047",
    "year": 2024,
    "value": 45.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufimsky",
    "indicatorId": "bdmo_y48155047",
    "year": 2024,
    "value": 38.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "yanaulsky",
    "indicatorId": "bdmo_y48155047",
    "year": 2024,
    "value": 92.75,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "zianchurinsky",
    "indicatorId": "bdmo_y48155047",
    "year": 2024,
    "value": 82.72,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "zilairsky",
    "indicatorId": "bdmo_y48155047",
    "year": 2024,
    "value": 111.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "abzelilovsky",
    "indicatorId": "bdmo_y48155048",
    "year": 2024,
    "value": 0.23,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "agidel",
    "indicatorId": "bdmo_y48155048",
    "year": 2024,
    "value": 0.21,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "alsheevsky",
    "indicatorId": "bdmo_y48155048",
    "year": 2024,
    "value": 0.26,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "arkhangelsky",
    "indicatorId": "bdmo_y48155048",
    "year": 2024,
    "value": 0.36,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "askinsky",
    "indicatorId": "bdmo_y48155048",
    "year": 2024,
    "value": 0.36,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "aurgazinsky",
    "indicatorId": "bdmo_y48155048",
    "year": 2024,
    "value": 0.05,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "bakalinsky",
    "indicatorId": "bdmo_y48155048",
    "year": 2024,
    "value": 0.14,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "baltachevsky",
    "indicatorId": "bdmo_y48155048",
    "year": 2024,
    "value": 0.19,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "baymaksky",
    "indicatorId": "bdmo_y48155048",
    "year": 2024,
    "value": 0.14,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "belebeyevsky",
    "indicatorId": "bdmo_y48155048",
    "year": 2024,
    "value": 0.08,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "belokataysky",
    "indicatorId": "bdmo_y48155048",
    "year": 2024,
    "value": 0.48,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "beloretsk",
    "indicatorId": "bdmo_y48155048",
    "year": 2024,
    "value": 0.12,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "birsk",
    "indicatorId": "bdmo_y48155048",
    "year": 2024,
    "value": 0.16,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "bizhbulyaksky",
    "indicatorId": "bdmo_y48155048",
    "year": 2024,
    "value": 0.02,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "blagovarsky",
    "indicatorId": "bdmo_y48155048",
    "year": 2024,
    "value": 0.2,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "blagoveshchensky",
    "indicatorId": "bdmo_y48155048",
    "year": 2024,
    "value": 0.28,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "buraevsky",
    "indicatorId": "bdmo_y48155048",
    "year": 2024,
    "value": 0.16,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "burzyansky",
    "indicatorId": "bdmo_y48155048",
    "year": 2024,
    "value": 0.02,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "buzdyaksky",
    "indicatorId": "bdmo_y48155048",
    "year": 2024,
    "value": 0.24,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "chekmagushevsky",
    "indicatorId": "bdmo_y48155048",
    "year": 2024,
    "value": 0.03,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "chishminsky",
    "indicatorId": "bdmo_y48155048",
    "year": 2024,
    "value": 0.27,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "davlekanovsky",
    "indicatorId": "bdmo_y48155048",
    "year": 2024,
    "value": 0.7,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "duvansky",
    "indicatorId": "bdmo_y48155048",
    "year": 2024,
    "value": 0.13,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "dyurtyulinsky",
    "indicatorId": "bdmo_y48155048",
    "year": 2024,
    "value": 0.06,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ermekeyevsky",
    "indicatorId": "bdmo_y48155048",
    "year": 2024,
    "value": 0.15,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "fedorovsky",
    "indicatorId": "bdmo_y48155048",
    "year": 2024,
    "value": 0.15,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "gafuriysky",
    "indicatorId": "bdmo_y48155048",
    "year": 2024,
    "value": 0.21,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "iglinsky",
    "indicatorId": "bdmo_y48155048",
    "year": 2024,
    "value": 0.09,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ilishevsky",
    "indicatorId": "bdmo_y48155048",
    "year": 2024,
    "value": 0.11,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ishimbay",
    "indicatorId": "bdmo_y48155048",
    "year": 2024,
    "value": 0.18,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kaltasinsky",
    "indicatorId": "bdmo_y48155048",
    "year": 2024,
    "value": 0.11,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "karaidelsky",
    "indicatorId": "bdmo_y48155048",
    "year": 2024,
    "value": 0.14,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "karmaskalinsky",
    "indicatorId": "bdmo_y48155048",
    "year": 2024,
    "value": 0.17,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "khaibullinsky",
    "indicatorId": "bdmo_y48155048",
    "year": 2024,
    "value": 0.02,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kiginsky",
    "indicatorId": "bdmo_y48155048",
    "year": 2024,
    "value": 0.21,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "krasnokamsky",
    "indicatorId": "bdmo_y48155048",
    "year": 2024,
    "value": 0.21,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kugarchinsky",
    "indicatorId": "bdmo_y48155048",
    "year": 2024,
    "value": 0.21,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kumertau",
    "indicatorId": "bdmo_y48155048",
    "year": 2024,
    "value": 0.16,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kushnarenkovsky",
    "indicatorId": "bdmo_y48155048",
    "year": 2024,
    "value": 0.06,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kuyurgazinsky",
    "indicatorId": "bdmo_y48155048",
    "year": 2024,
    "value": 0.14,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "mechetlinsky",
    "indicatorId": "bdmo_y48155048",
    "year": 2024,
    "value": 0.03,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "meleuz",
    "indicatorId": "bdmo_y48155048",
    "year": 2024,
    "value": 0.09,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "mishkinsky",
    "indicatorId": "bdmo_y48155048",
    "year": 2024,
    "value": 0.01,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "miyakinsky",
    "indicatorId": "bdmo_y48155048",
    "year": 2024,
    "value": 0.09,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "neftekamsk",
    "indicatorId": "bdmo_y48155048",
    "year": 2024,
    "value": 0.15,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "nurimanovsky",
    "indicatorId": "bdmo_y48155048",
    "year": 2024,
    "value": 0.1,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "oktyabrsky",
    "indicatorId": "bdmo_y48155048",
    "year": 2024,
    "value": 0.17,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "salavat",
    "indicatorId": "bdmo_y48155048",
    "year": 2024,
    "value": 0.34,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "salavatsky",
    "indicatorId": "bdmo_y48155048",
    "year": 2024,
    "value": 0.07,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sharansky",
    "indicatorId": "bdmo_y48155048",
    "year": 2024,
    "value": 0.1,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sibay",
    "indicatorId": "bdmo_y48155048",
    "year": 2024,
    "value": 0.15,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlibashevsky",
    "indicatorId": "bdmo_y48155048",
    "year": 2024,
    "value": 0.34,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamak",
    "indicatorId": "bdmo_y48155048",
    "year": 2024,
    "value": 0.12,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamaksky",
    "indicatorId": "bdmo_y48155048",
    "year": 2024,
    "value": 0.23,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "tatyshlinsky",
    "indicatorId": "bdmo_y48155048",
    "year": 2024,
    "value": 0.09,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "tuymazy",
    "indicatorId": "bdmo_y48155048",
    "year": 2024,
    "value": 0.15,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "uchaly",
    "indicatorId": "bdmo_y48155048",
    "year": 2024,
    "value": 0.1,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufa",
    "indicatorId": "bdmo_y48155048",
    "year": 2024,
    "value": 0.19,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufimsky",
    "indicatorId": "bdmo_y48155048",
    "year": 2024,
    "value": 0.16,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "yanaulsky",
    "indicatorId": "bdmo_y48155048",
    "year": 2024,
    "value": 0.12,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "zianchurinsky",
    "indicatorId": "bdmo_y48155048",
    "year": 2024,
    "value": 0.2,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "agidel",
    "indicatorId": "bdmo_y48155049",
    "year": 2024,
    "value": 0.45,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "belebeyevsky",
    "indicatorId": "bdmo_y48155049",
    "year": 2024,
    "value": 0.2,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "beloretsk",
    "indicatorId": "bdmo_y48155049",
    "year": 2024,
    "value": 0.36,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "blagoveshchensky",
    "indicatorId": "bdmo_y48155049",
    "year": 2024,
    "value": 0.23,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "dyurtyulinsky",
    "indicatorId": "bdmo_y48155049",
    "year": 2024,
    "value": 0.08,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "gafuriysky",
    "indicatorId": "bdmo_y48155049",
    "year": 2024,
    "value": 0.07,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ishimbay",
    "indicatorId": "bdmo_y48155049",
    "year": 2024,
    "value": 0.01,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kumertau",
    "indicatorId": "bdmo_y48155049",
    "year": 2024,
    "value": 0.07,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "neftekamsk",
    "indicatorId": "bdmo_y48155049",
    "year": 2024,
    "value": 0.21,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "oktyabrsky",
    "indicatorId": "bdmo_y48155049",
    "year": 2024,
    "value": 0.22,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "salavat",
    "indicatorId": "bdmo_y48155049",
    "year": 2024,
    "value": 0.32,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sibay",
    "indicatorId": "bdmo_y48155049",
    "year": 2024,
    "value": 0.37,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamak",
    "indicatorId": "bdmo_y48155049",
    "year": 2024,
    "value": 0.28,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamaksky",
    "indicatorId": "bdmo_y48155049",
    "year": 2024,
    "value": 0.24,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "tuymazy",
    "indicatorId": "bdmo_y48155049",
    "year": 2024,
    "value": 0.05,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "uchaly",
    "indicatorId": "bdmo_y48155049",
    "year": 2024,
    "value": 0.1,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufa",
    "indicatorId": "bdmo_y48155049",
    "year": 2024,
    "value": 0.17,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufimsky",
    "indicatorId": "bdmo_y48155049",
    "year": 2024,
    "value": 0.16,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "yanaulsky",
    "indicatorId": "bdmo_y48155049",
    "year": 2024,
    "value": 0.08,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "abzelilovsky",
    "indicatorId": "bdmo_y48155050",
    "year": 2024,
    "value": 0.77,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "agidel",
    "indicatorId": "bdmo_y48155050",
    "year": 2024,
    "value": 2.02,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "alsheevsky",
    "indicatorId": "bdmo_y48155050",
    "year": 2024,
    "value": 0.54,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "arkhangelsky",
    "indicatorId": "bdmo_y48155050",
    "year": 2024,
    "value": 1.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "askinsky",
    "indicatorId": "bdmo_y48155050",
    "year": 2024,
    "value": 0.91,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "aurgazinsky",
    "indicatorId": "bdmo_y48155050",
    "year": 2024,
    "value": 0.11,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "bakalinsky",
    "indicatorId": "bdmo_y48155050",
    "year": 2024,
    "value": 0.58,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "baltachevsky",
    "indicatorId": "bdmo_y48155050",
    "year": 2024,
    "value": 0.49,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "baymaksky",
    "indicatorId": "bdmo_y48155050",
    "year": 2024,
    "value": 1.42,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "belebeyevsky",
    "indicatorId": "bdmo_y48155050",
    "year": 2024,
    "value": 0.75,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "belokataysky",
    "indicatorId": "bdmo_y48155050",
    "year": 2024,
    "value": 0.92,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "beloretsk",
    "indicatorId": "bdmo_y48155050",
    "year": 2024,
    "value": 1.14,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "birsk",
    "indicatorId": "bdmo_y48155050",
    "year": 2024,
    "value": 1.39,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "bizhbulyaksky",
    "indicatorId": "bdmo_y48155050",
    "year": 2024,
    "value": 1.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "blagovarsky",
    "indicatorId": "bdmo_y48155050",
    "year": 2024,
    "value": 0.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "blagoveshchensky",
    "indicatorId": "bdmo_y48155050",
    "year": 2024,
    "value": 1.76,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "buraevsky",
    "indicatorId": "bdmo_y48155050",
    "year": 2024,
    "value": 0.54,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "burzyansky",
    "indicatorId": "bdmo_y48155050",
    "year": 2024,
    "value": 1.18,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "buzdyaksky",
    "indicatorId": "bdmo_y48155050",
    "year": 2024,
    "value": 0.39,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "chekmagushevsky",
    "indicatorId": "bdmo_y48155050",
    "year": 2024,
    "value": 0.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "chishminsky",
    "indicatorId": "bdmo_y48155050",
    "year": 2024,
    "value": 0.36,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "davlekanovsky",
    "indicatorId": "bdmo_y48155050",
    "year": 2024,
    "value": 0.67,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "duvansky",
    "indicatorId": "bdmo_y48155050",
    "year": 2024,
    "value": 0.81,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "dyurtyulinsky",
    "indicatorId": "bdmo_y48155050",
    "year": 2024,
    "value": 0.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ermekeyevsky",
    "indicatorId": "bdmo_y48155050",
    "year": 2024,
    "value": 0.65,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "fedorovsky",
    "indicatorId": "bdmo_y48155050",
    "year": 2024,
    "value": 0.82,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "gafuriysky",
    "indicatorId": "bdmo_y48155050",
    "year": 2024,
    "value": 1.1,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "iglinsky",
    "indicatorId": "bdmo_y48155050",
    "year": 2024,
    "value": 0.79,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ilishevsky",
    "indicatorId": "bdmo_y48155050",
    "year": 2024,
    "value": 0.57,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ishimbay",
    "indicatorId": "bdmo_y48155050",
    "year": 2024,
    "value": 0.54,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kaltasinsky",
    "indicatorId": "bdmo_y48155050",
    "year": 2024,
    "value": 0.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "karaidelsky",
    "indicatorId": "bdmo_y48155050",
    "year": 2024,
    "value": 0.25,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "karmaskalinsky",
    "indicatorId": "bdmo_y48155050",
    "year": 2024,
    "value": 0.59,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "khaibullinsky",
    "indicatorId": "bdmo_y48155050",
    "year": 2024,
    "value": 1.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kiginsky",
    "indicatorId": "bdmo_y48155050",
    "year": 2024,
    "value": 1.54,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "krasnokamsky",
    "indicatorId": "bdmo_y48155050",
    "year": 2024,
    "value": 2.93,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kugarchinsky",
    "indicatorId": "bdmo_y48155050",
    "year": 2024,
    "value": 0.68,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kumertau",
    "indicatorId": "bdmo_y48155050",
    "year": 2024,
    "value": 0.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kushnarenkovsky",
    "indicatorId": "bdmo_y48155050",
    "year": 2024,
    "value": 1.7,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kuyurgazinsky",
    "indicatorId": "bdmo_y48155050",
    "year": 2024,
    "value": 0.74,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "mechetlinsky",
    "indicatorId": "bdmo_y48155050",
    "year": 2024,
    "value": 1.05,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "meleuz",
    "indicatorId": "bdmo_y48155050",
    "year": 2024,
    "value": 1.18,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "mishkinsky",
    "indicatorId": "bdmo_y48155050",
    "year": 2024,
    "value": 0.59,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "miyakinsky",
    "indicatorId": "bdmo_y48155050",
    "year": 2024,
    "value": 0.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "neftekamsk",
    "indicatorId": "bdmo_y48155050",
    "year": 2024,
    "value": 1.09,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "nurimanovsky",
    "indicatorId": "bdmo_y48155050",
    "year": 2024,
    "value": 0.58,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "oktyabrsky",
    "indicatorId": "bdmo_y48155050",
    "year": 2024,
    "value": 0.74,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "salavat",
    "indicatorId": "bdmo_y48155050",
    "year": 2024,
    "value": 0.78,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "salavatsky",
    "indicatorId": "bdmo_y48155050",
    "year": 2024,
    "value": 0.9,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sharansky",
    "indicatorId": "bdmo_y48155050",
    "year": 2024,
    "value": 0.67,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sibay",
    "indicatorId": "bdmo_y48155050",
    "year": 2024,
    "value": 2.38,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlibashevsky",
    "indicatorId": "bdmo_y48155050",
    "year": 2024,
    "value": 0.56,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamak",
    "indicatorId": "bdmo_y48155050",
    "year": 2024,
    "value": 1.02,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamaksky",
    "indicatorId": "bdmo_y48155050",
    "year": 2024,
    "value": 0.76,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "tatyshlinsky",
    "indicatorId": "bdmo_y48155050",
    "year": 2024,
    "value": 0.24,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "tuymazy",
    "indicatorId": "bdmo_y48155050",
    "year": 2024,
    "value": 1.39,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "uchaly",
    "indicatorId": "bdmo_y48155050",
    "year": 2024,
    "value": 1.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufa",
    "indicatorId": "bdmo_y48155050",
    "year": 2024,
    "value": 2.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufimsky",
    "indicatorId": "bdmo_y48155050",
    "year": 2024,
    "value": 0.62,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "yanaulsky",
    "indicatorId": "bdmo_y48155050",
    "year": 2024,
    "value": 1.05,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "zianchurinsky",
    "indicatorId": "bdmo_y48155050",
    "year": 2024,
    "value": 0.61,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "zilairsky",
    "indicatorId": "bdmo_y48155050",
    "year": 2024,
    "value": 2.2,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "abzelilovsky",
    "indicatorId": "bdmo_y48155051",
    "year": 2024,
    "value": 64.57,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "alsheevsky",
    "indicatorId": "bdmo_y48155051",
    "year": 2024,
    "value": 78.53,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "arkhangelsky",
    "indicatorId": "bdmo_y48155051",
    "year": 2024,
    "value": 18.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "askinsky",
    "indicatorId": "bdmo_y48155051",
    "year": 2024,
    "value": 103.2,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "aurgazinsky",
    "indicatorId": "bdmo_y48155051",
    "year": 2024,
    "value": 40.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "bakalinsky",
    "indicatorId": "bdmo_y48155051",
    "year": 2024,
    "value": 53.83,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "baltachevsky",
    "indicatorId": "bdmo_y48155051",
    "year": 2024,
    "value": 56.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "baymaksky",
    "indicatorId": "bdmo_y48155051",
    "year": 2024,
    "value": 34.85,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "belebeyevsky",
    "indicatorId": "bdmo_y48155051",
    "year": 2024,
    "value": 1.05,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "belokataysky",
    "indicatorId": "bdmo_y48155051",
    "year": 2024,
    "value": 82.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "beloretsk",
    "indicatorId": "bdmo_y48155051",
    "year": 2024,
    "value": 12.9,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "birsk",
    "indicatorId": "bdmo_y48155051",
    "year": 2024,
    "value": 21.03,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "bizhbulyaksky",
    "indicatorId": "bdmo_y48155051",
    "year": 2024,
    "value": 110.9,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "blagovarsky",
    "indicatorId": "bdmo_y48155051",
    "year": 2024,
    "value": 69.2,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "blagoveshchensky",
    "indicatorId": "bdmo_y48155051",
    "year": 2024,
    "value": 42.9,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "buraevsky",
    "indicatorId": "bdmo_y48155051",
    "year": 2024,
    "value": 22.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "burzyansky",
    "indicatorId": "bdmo_y48155051",
    "year": 2024,
    "value": 42.41,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "buzdyaksky",
    "indicatorId": "bdmo_y48155051",
    "year": 2024,
    "value": 0.06,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "chekmagushevsky",
    "indicatorId": "bdmo_y48155051",
    "year": 2024,
    "value": 28.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "chishminsky",
    "indicatorId": "bdmo_y48155051",
    "year": 2024,
    "value": 21.12,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "davlekanovsky",
    "indicatorId": "bdmo_y48155051",
    "year": 2024,
    "value": 44.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "duvansky",
    "indicatorId": "bdmo_y48155051",
    "year": 2024,
    "value": 52.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "dyurtyulinsky",
    "indicatorId": "bdmo_y48155051",
    "year": 2024,
    "value": 14.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ermekeyevsky",
    "indicatorId": "bdmo_y48155051",
    "year": 2024,
    "value": 66.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "fedorovsky",
    "indicatorId": "bdmo_y48155051",
    "year": 2024,
    "value": 75.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "gafuriysky",
    "indicatorId": "bdmo_y48155051",
    "year": 2024,
    "value": 67.65,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "iglinsky",
    "indicatorId": "bdmo_y48155051",
    "year": 2024,
    "value": 26.42,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ilishevsky",
    "indicatorId": "bdmo_y48155051",
    "year": 2024,
    "value": 60.25,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ishimbay",
    "indicatorId": "bdmo_y48155051",
    "year": 2024,
    "value": 23.1,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kaltasinsky",
    "indicatorId": "bdmo_y48155051",
    "year": 2024,
    "value": 21.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "karaidelsky",
    "indicatorId": "bdmo_y48155051",
    "year": 2024,
    "value": 35.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "karmaskalinsky",
    "indicatorId": "bdmo_y48155051",
    "year": 2024,
    "value": 34.26,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "khaibullinsky",
    "indicatorId": "bdmo_y48155051",
    "year": 2024,
    "value": 200.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kiginsky",
    "indicatorId": "bdmo_y48155051",
    "year": 2024,
    "value": 76.85,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "krasnokamsky",
    "indicatorId": "bdmo_y48155051",
    "year": 2024,
    "value": 88.36,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kugarchinsky",
    "indicatorId": "bdmo_y48155051",
    "year": 2024,
    "value": 0.01,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kumertau",
    "indicatorId": "bdmo_y48155051",
    "year": 2024,
    "value": 0.02,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kushnarenkovsky",
    "indicatorId": "bdmo_y48155051",
    "year": 2024,
    "value": 52.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kuyurgazinsky",
    "indicatorId": "bdmo_y48155051",
    "year": 2024,
    "value": 64.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "mechetlinsky",
    "indicatorId": "bdmo_y48155051",
    "year": 2024,
    "value": 74.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "meleuz",
    "indicatorId": "bdmo_y48155051",
    "year": 2024,
    "value": 8.34,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "mishkinsky",
    "indicatorId": "bdmo_y48155051",
    "year": 2024,
    "value": 31.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "miyakinsky",
    "indicatorId": "bdmo_y48155051",
    "year": 2024,
    "value": 91.16,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "neftekamsk",
    "indicatorId": "bdmo_y48155051",
    "year": 2024,
    "value": 0.52,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "nurimanovsky",
    "indicatorId": "bdmo_y48155051",
    "year": 2024,
    "value": 50.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "oktyabrsky",
    "indicatorId": "bdmo_y48155051",
    "year": 2024,
    "value": 0.81,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "salavat",
    "indicatorId": "bdmo_y48155051",
    "year": 2024,
    "value": 0.17,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "salavatsky",
    "indicatorId": "bdmo_y48155051",
    "year": 2024,
    "value": 50.2,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sharansky",
    "indicatorId": "bdmo_y48155051",
    "year": 2024,
    "value": 65.7,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sibay",
    "indicatorId": "bdmo_y48155051",
    "year": 2024,
    "value": 3.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlibashevsky",
    "indicatorId": "bdmo_y48155051",
    "year": 2024,
    "value": 56.95,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamak",
    "indicatorId": "bdmo_y48155051",
    "year": 2024,
    "value": 0.29,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamaksky",
    "indicatorId": "bdmo_y48155051",
    "year": 2024,
    "value": 44.7,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "tatyshlinsky",
    "indicatorId": "bdmo_y48155051",
    "year": 2024,
    "value": 1.22,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "tuymazy",
    "indicatorId": "bdmo_y48155051",
    "year": 2024,
    "value": 23.16,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "uchaly",
    "indicatorId": "bdmo_y48155051",
    "year": 2024,
    "value": 21.7,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufa",
    "indicatorId": "bdmo_y48155051",
    "year": 2024,
    "value": 1.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufimsky",
    "indicatorId": "bdmo_y48155051",
    "year": 2024,
    "value": 48.2,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "yanaulsky",
    "indicatorId": "bdmo_y48155051",
    "year": 2024,
    "value": 30.9,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "zianchurinsky",
    "indicatorId": "bdmo_y48155051",
    "year": 2024,
    "value": 88.17,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "zilairsky",
    "indicatorId": "bdmo_y48155051",
    "year": 2024,
    "value": 91.7,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "abzelilovsky",
    "indicatorId": "bdmo_y48155054",
    "year": 2024,
    "value": 3.12,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "agidel",
    "indicatorId": "bdmo_y48155054",
    "year": 2024,
    "value": 1.52,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "alsheevsky",
    "indicatorId": "bdmo_y48155054",
    "year": 2024,
    "value": 5.68,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "arkhangelsky",
    "indicatorId": "bdmo_y48155054",
    "year": 2024,
    "value": 9.09,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "askinsky",
    "indicatorId": "bdmo_y48155054",
    "year": 2024,
    "value": 4.9,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "aurgazinsky",
    "indicatorId": "bdmo_y48155054",
    "year": 2024,
    "value": 2.53,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "bakalinsky",
    "indicatorId": "bdmo_y48155054",
    "year": 2024,
    "value": 8.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "baltachevsky",
    "indicatorId": "bdmo_y48155054",
    "year": 2024,
    "value": 2.9,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "baymaksky",
    "indicatorId": "bdmo_y48155054",
    "year": 2024,
    "value": 19.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "belebeyevsky",
    "indicatorId": "bdmo_y48155054",
    "year": 2024,
    "value": 12.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "belokataysky",
    "indicatorId": "bdmo_y48155054",
    "year": 2024,
    "value": 1.7,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "beloretsk",
    "indicatorId": "bdmo_y48155054",
    "year": 2024,
    "value": 3.2,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "birsk",
    "indicatorId": "bdmo_y48155054",
    "year": 2024,
    "value": 7.16,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "bizhbulyaksky",
    "indicatorId": "bdmo_y48155054",
    "year": 2024,
    "value": 3.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "blagovarsky",
    "indicatorId": "bdmo_y48155054",
    "year": 2024,
    "value": 2.86,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "blagoveshchensky",
    "indicatorId": "bdmo_y48155054",
    "year": 2024,
    "value": 3.36,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "buraevsky",
    "indicatorId": "bdmo_y48155054",
    "year": 2024,
    "value": 4.05,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "burzyansky",
    "indicatorId": "bdmo_y48155054",
    "year": 2024,
    "value": 12.73,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "buzdyaksky",
    "indicatorId": "bdmo_y48155054",
    "year": 2024,
    "value": 2.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "chekmagushevsky",
    "indicatorId": "bdmo_y48155054",
    "year": 2024,
    "value": 2.42,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "chishminsky",
    "indicatorId": "bdmo_y48155054",
    "year": 2024,
    "value": 1.13,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "davlekanovsky",
    "indicatorId": "bdmo_y48155054",
    "year": 2024,
    "value": 5.46,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "duvansky",
    "indicatorId": "bdmo_y48155054",
    "year": 2024,
    "value": 6.44,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "dyurtyulinsky",
    "indicatorId": "bdmo_y48155054",
    "year": 2024,
    "value": 8.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ermekeyevsky",
    "indicatorId": "bdmo_y48155054",
    "year": 2024,
    "value": 2.48,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "fedorovsky",
    "indicatorId": "bdmo_y48155054",
    "year": 2024,
    "value": 1.47,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "gafuriysky",
    "indicatorId": "bdmo_y48155054",
    "year": 2024,
    "value": 23.45,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "iglinsky",
    "indicatorId": "bdmo_y48155054",
    "year": 2024,
    "value": 2.42,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ilishevsky",
    "indicatorId": "bdmo_y48155054",
    "year": 2024,
    "value": 1.03,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ishimbay",
    "indicatorId": "bdmo_y48155054",
    "year": 2024,
    "value": 43.89,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kaltasinsky",
    "indicatorId": "bdmo_y48155054",
    "year": 2024,
    "value": 18.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "karaidelsky",
    "indicatorId": "bdmo_y48155054",
    "year": 2024,
    "value": 13.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "karmaskalinsky",
    "indicatorId": "bdmo_y48155054",
    "year": 2024,
    "value": 7.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "khaibullinsky",
    "indicatorId": "bdmo_y48155054",
    "year": 2024,
    "value": 22.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kiginsky",
    "indicatorId": "bdmo_y48155054",
    "year": 2024,
    "value": 6.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "krasnokamsky",
    "indicatorId": "bdmo_y48155054",
    "year": 2024,
    "value": 0.36,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kugarchinsky",
    "indicatorId": "bdmo_y48155054",
    "year": 2024,
    "value": 2.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kumertau",
    "indicatorId": "bdmo_y48155054",
    "year": 2024,
    "value": 1.9,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kushnarenkovsky",
    "indicatorId": "bdmo_y48155054",
    "year": 2024,
    "value": 7.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kuyurgazinsky",
    "indicatorId": "bdmo_y48155054",
    "year": 2024,
    "value": 11.87,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "mechetlinsky",
    "indicatorId": "bdmo_y48155054",
    "year": 2024,
    "value": 0.44,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "meleuz",
    "indicatorId": "bdmo_y48155054",
    "year": 2024,
    "value": 3.98,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "mishkinsky",
    "indicatorId": "bdmo_y48155054",
    "year": 2024,
    "value": 20.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "miyakinsky",
    "indicatorId": "bdmo_y48155054",
    "year": 2024,
    "value": 10.01,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "neftekamsk",
    "indicatorId": "bdmo_y48155054",
    "year": 2024,
    "value": 1.35,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "nurimanovsky",
    "indicatorId": "bdmo_y48155054",
    "year": 2024,
    "value": 1.52,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "oktyabrsky",
    "indicatorId": "bdmo_y48155054",
    "year": 2024,
    "value": 0.91,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "salavat",
    "indicatorId": "bdmo_y48155054",
    "year": 2024,
    "value": 0.59,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "salavatsky",
    "indicatorId": "bdmo_y48155054",
    "year": 2024,
    "value": 15.22,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sharansky",
    "indicatorId": "bdmo_y48155054",
    "year": 2024,
    "value": 1.52,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sibay",
    "indicatorId": "bdmo_y48155054",
    "year": 2024,
    "value": 30.12,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlibashevsky",
    "indicatorId": "bdmo_y48155054",
    "year": 2024,
    "value": 2.43,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamak",
    "indicatorId": "bdmo_y48155054",
    "year": 2024,
    "value": 3.45,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamaksky",
    "indicatorId": "bdmo_y48155054",
    "year": 2024,
    "value": 3.37,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "tatyshlinsky",
    "indicatorId": "bdmo_y48155054",
    "year": 2024,
    "value": 7.9,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "tuymazy",
    "indicatorId": "bdmo_y48155054",
    "year": 2024,
    "value": 2.03,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "uchaly",
    "indicatorId": "bdmo_y48155054",
    "year": 2024,
    "value": 14.17,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufa",
    "indicatorId": "bdmo_y48155054",
    "year": 2024,
    "value": 0.23,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufimsky",
    "indicatorId": "bdmo_y48155054",
    "year": 2024,
    "value": 43.32,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "yanaulsky",
    "indicatorId": "bdmo_y48155054",
    "year": 2024,
    "value": 0.99,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "zianchurinsky",
    "indicatorId": "bdmo_y48155054",
    "year": 2024,
    "value": 8.24,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "zilairsky",
    "indicatorId": "bdmo_y48155054",
    "year": 2024,
    "value": 10.2,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "abzelilovsky",
    "indicatorId": "bdmo_y48155055",
    "year": 2024,
    "value": 1.63,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "agidel",
    "indicatorId": "bdmo_y48155055",
    "year": 2024,
    "value": 1.52,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "alsheevsky",
    "indicatorId": "bdmo_y48155055",
    "year": 2024,
    "value": 0.74,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "arkhangelsky",
    "indicatorId": "bdmo_y48155055",
    "year": 2024,
    "value": 9.09,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "askinsky",
    "indicatorId": "bdmo_y48155055",
    "year": 2024,
    "value": 2.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "aurgazinsky",
    "indicatorId": "bdmo_y48155055",
    "year": 2024,
    "value": 2.47,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "bakalinsky",
    "indicatorId": "bdmo_y48155055",
    "year": 2024,
    "value": 2.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "baltachevsky",
    "indicatorId": "bdmo_y48155055",
    "year": 2024,
    "value": 2.9,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "baymaksky",
    "indicatorId": "bdmo_y48155055",
    "year": 2024,
    "value": 14.1,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "belebeyevsky",
    "indicatorId": "bdmo_y48155055",
    "year": 2024,
    "value": 3.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "belokataysky",
    "indicatorId": "bdmo_y48155055",
    "year": 2024,
    "value": 1.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "beloretsk",
    "indicatorId": "bdmo_y48155055",
    "year": 2024,
    "value": 0.86,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "birsk",
    "indicatorId": "bdmo_y48155055",
    "year": 2024,
    "value": 1.89,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "bizhbulyaksky",
    "indicatorId": "bdmo_y48155055",
    "year": 2024,
    "value": 1.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "blagovarsky",
    "indicatorId": "bdmo_y48155055",
    "year": 2024,
    "value": 2.69,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "blagoveshchensky",
    "indicatorId": "bdmo_y48155055",
    "year": 2024,
    "value": 2.68,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "buraevsky",
    "indicatorId": "bdmo_y48155055",
    "year": 2024,
    "value": 4.05,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "burzyansky",
    "indicatorId": "bdmo_y48155055",
    "year": 2024,
    "value": 10.55,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "buzdyaksky",
    "indicatorId": "bdmo_y48155055",
    "year": 2024,
    "value": 2.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "chekmagushevsky",
    "indicatorId": "bdmo_y48155055",
    "year": 2024,
    "value": 2.33,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "chishminsky",
    "indicatorId": "bdmo_y48155055",
    "year": 2024,
    "value": 1.13,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "davlekanovsky",
    "indicatorId": "bdmo_y48155055",
    "year": 2024,
    "value": 5.46,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "duvansky",
    "indicatorId": "bdmo_y48155055",
    "year": 2024,
    "value": 6.44,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "dyurtyulinsky",
    "indicatorId": "bdmo_y48155055",
    "year": 2024,
    "value": 8.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ermekeyevsky",
    "indicatorId": "bdmo_y48155055",
    "year": 2024,
    "value": 0.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "fedorovsky",
    "indicatorId": "bdmo_y48155055",
    "year": 2024,
    "value": 1.47,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "gafuriysky",
    "indicatorId": "bdmo_y48155055",
    "year": 2024,
    "value": 19.16,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "iglinsky",
    "indicatorId": "bdmo_y48155055",
    "year": 2024,
    "value": 2.39,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ilishevsky",
    "indicatorId": "bdmo_y48155055",
    "year": 2024,
    "value": 0.98,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ishimbay",
    "indicatorId": "bdmo_y48155055",
    "year": 2024,
    "value": 0.56,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kaltasinsky",
    "indicatorId": "bdmo_y48155055",
    "year": 2024,
    "value": 0.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "karaidelsky",
    "indicatorId": "bdmo_y48155055",
    "year": 2024,
    "value": 13.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "karmaskalinsky",
    "indicatorId": "bdmo_y48155055",
    "year": 2024,
    "value": 7.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "khaibullinsky",
    "indicatorId": "bdmo_y48155055",
    "year": 2024,
    "value": 18.7,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kiginsky",
    "indicatorId": "bdmo_y48155055",
    "year": 2024,
    "value": 6.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "krasnokamsky",
    "indicatorId": "bdmo_y48155055",
    "year": 2024,
    "value": 0.36,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kugarchinsky",
    "indicatorId": "bdmo_y48155055",
    "year": 2024,
    "value": 1.02,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kumertau",
    "indicatorId": "bdmo_y48155055",
    "year": 2024,
    "value": 1.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kushnarenkovsky",
    "indicatorId": "bdmo_y48155055",
    "year": 2024,
    "value": 5.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kuyurgazinsky",
    "indicatorId": "bdmo_y48155055",
    "year": 2024,
    "value": 11.87,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "mechetlinsky",
    "indicatorId": "bdmo_y48155055",
    "year": 2024,
    "value": 0.44,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "meleuz",
    "indicatorId": "bdmo_y48155055",
    "year": 2024,
    "value": 1.84,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "mishkinsky",
    "indicatorId": "bdmo_y48155055",
    "year": 2024,
    "value": 11.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "miyakinsky",
    "indicatorId": "bdmo_y48155055",
    "year": 2024,
    "value": 1.9,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "neftekamsk",
    "indicatorId": "bdmo_y48155055",
    "year": 2024,
    "value": 0.93,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "nurimanovsky",
    "indicatorId": "bdmo_y48155055",
    "year": 2024,
    "value": 1.52,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "oktyabrsky",
    "indicatorId": "bdmo_y48155055",
    "year": 2024,
    "value": 0.7,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "salavat",
    "indicatorId": "bdmo_y48155055",
    "year": 2024,
    "value": 0.29,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "salavatsky",
    "indicatorId": "bdmo_y48155055",
    "year": 2024,
    "value": 4.78,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sharansky",
    "indicatorId": "bdmo_y48155055",
    "year": 2024,
    "value": 1.52,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sibay",
    "indicatorId": "bdmo_y48155055",
    "year": 2024,
    "value": 0.73,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlibashevsky",
    "indicatorId": "bdmo_y48155055",
    "year": 2024,
    "value": 1.42,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamak",
    "indicatorId": "bdmo_y48155055",
    "year": 2024,
    "value": 3.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamaksky",
    "indicatorId": "bdmo_y48155055",
    "year": 2024,
    "value": 3.37,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "tatyshlinsky",
    "indicatorId": "bdmo_y48155055",
    "year": 2024,
    "value": 1.89,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "tuymazy",
    "indicatorId": "bdmo_y48155055",
    "year": 2024,
    "value": 1.54,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "uchaly",
    "indicatorId": "bdmo_y48155055",
    "year": 2024,
    "value": 4.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufa",
    "indicatorId": "bdmo_y48155055",
    "year": 2024,
    "value": 0.19,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufimsky",
    "indicatorId": "bdmo_y48155055",
    "year": 2024,
    "value": 3.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "yanaulsky",
    "indicatorId": "bdmo_y48155055",
    "year": 2024,
    "value": 0.99,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "zianchurinsky",
    "indicatorId": "bdmo_y48155055",
    "year": 2024,
    "value": 2.07,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "zilairsky",
    "indicatorId": "bdmo_y48155055",
    "year": 2024,
    "value": 7.7,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "abzelilovsky",
    "indicatorId": "bdmo_y48155056",
    "year": 2024,
    "value": 7.7,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "agidel",
    "indicatorId": "bdmo_y48155056",
    "year": 2024,
    "value": 12.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "alsheevsky",
    "indicatorId": "bdmo_y48155056",
    "year": 2024,
    "value": 6.87,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "arkhangelsky",
    "indicatorId": "bdmo_y48155056",
    "year": 2024,
    "value": 3.2,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "askinsky",
    "indicatorId": "bdmo_y48155056",
    "year": 2024,
    "value": 2.21,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "aurgazinsky",
    "indicatorId": "bdmo_y48155056",
    "year": 2024,
    "value": 17.08,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "bakalinsky",
    "indicatorId": "bdmo_y48155056",
    "year": 2024,
    "value": 2.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "baltachevsky",
    "indicatorId": "bdmo_y48155056",
    "year": 2024,
    "value": 12.94,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "baymaksky",
    "indicatorId": "bdmo_y48155056",
    "year": 2024,
    "value": 7.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "belebeyevsky",
    "indicatorId": "bdmo_y48155056",
    "year": 2024,
    "value": 10.16,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "belokataysky",
    "indicatorId": "bdmo_y48155056",
    "year": 2024,
    "value": 4.2,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "beloretsk",
    "indicatorId": "bdmo_y48155056",
    "year": 2024,
    "value": 23.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "birsk",
    "indicatorId": "bdmo_y48155056",
    "year": 2024,
    "value": 5.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "bizhbulyaksky",
    "indicatorId": "bdmo_y48155056",
    "year": 2024,
    "value": 7.53,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "blagovarsky",
    "indicatorId": "bdmo_y48155056",
    "year": 2024,
    "value": 14.89,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "blagoveshchensky",
    "indicatorId": "bdmo_y48155056",
    "year": 2024,
    "value": 1.73,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "buraevsky",
    "indicatorId": "bdmo_y48155056",
    "year": 2024,
    "value": 9.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "burzyansky",
    "indicatorId": "bdmo_y48155056",
    "year": 2024,
    "value": 5.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "buzdyaksky",
    "indicatorId": "bdmo_y48155056",
    "year": 2024,
    "value": 28.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "chekmagushevsky",
    "indicatorId": "bdmo_y48155056",
    "year": 2024,
    "value": 9.09,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "chishminsky",
    "indicatorId": "bdmo_y48155056",
    "year": 2024,
    "value": 2.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "davlekanovsky",
    "indicatorId": "bdmo_y48155056",
    "year": 2024,
    "value": 7.83,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "duvansky",
    "indicatorId": "bdmo_y48155056",
    "year": 2024,
    "value": 2.02,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "dyurtyulinsky",
    "indicatorId": "bdmo_y48155056",
    "year": 2024,
    "value": 11.68,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ermekeyevsky",
    "indicatorId": "bdmo_y48155056",
    "year": 2024,
    "value": 8.46,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "fedorovsky",
    "indicatorId": "bdmo_y48155056",
    "year": 2024,
    "value": 13.1,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "gafuriysky",
    "indicatorId": "bdmo_y48155056",
    "year": 2024,
    "value": 29.68,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "iglinsky",
    "indicatorId": "bdmo_y48155056",
    "year": 2024,
    "value": 8.22,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ilishevsky",
    "indicatorId": "bdmo_y48155056",
    "year": 2024,
    "value": 5.82,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ishimbay",
    "indicatorId": "bdmo_y48155056",
    "year": 2024,
    "value": 8.29,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kaltasinsky",
    "indicatorId": "bdmo_y48155056",
    "year": 2024,
    "value": 7.1,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "karaidelsky",
    "indicatorId": "bdmo_y48155056",
    "year": 2024,
    "value": 3.14,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "karmaskalinsky",
    "indicatorId": "bdmo_y48155056",
    "year": 2024,
    "value": 1.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "khaibullinsky",
    "indicatorId": "bdmo_y48155056",
    "year": 2024,
    "value": 2.38,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kiginsky",
    "indicatorId": "bdmo_y48155056",
    "year": 2024,
    "value": 1.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "krasnokamsky",
    "indicatorId": "bdmo_y48155056",
    "year": 2024,
    "value": 1.7,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kugarchinsky",
    "indicatorId": "bdmo_y48155056",
    "year": 2024,
    "value": 2.37,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kumertau",
    "indicatorId": "bdmo_y48155056",
    "year": 2024,
    "value": 7.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kushnarenkovsky",
    "indicatorId": "bdmo_y48155056",
    "year": 2024,
    "value": 6.7,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kuyurgazinsky",
    "indicatorId": "bdmo_y48155056",
    "year": 2024,
    "value": 14.43,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "mechetlinsky",
    "indicatorId": "bdmo_y48155056",
    "year": 2024,
    "value": 6.17,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "meleuz",
    "indicatorId": "bdmo_y48155056",
    "year": 2024,
    "value": 5.49,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "mishkinsky",
    "indicatorId": "bdmo_y48155056",
    "year": 2024,
    "value": 1.55,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "miyakinsky",
    "indicatorId": "bdmo_y48155056",
    "year": 2024,
    "value": 6.47,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "neftekamsk",
    "indicatorId": "bdmo_y48155056",
    "year": 2024,
    "value": 2.87,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "nurimanovsky",
    "indicatorId": "bdmo_y48155056",
    "year": 2024,
    "value": 13.91,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "oktyabrsky",
    "indicatorId": "bdmo_y48155056",
    "year": 2024,
    "value": 7.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "salavat",
    "indicatorId": "bdmo_y48155056",
    "year": 2024,
    "value": 7.31,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "salavatsky",
    "indicatorId": "bdmo_y48155056",
    "year": 2024,
    "value": 5.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sharansky",
    "indicatorId": "bdmo_y48155056",
    "year": 2024,
    "value": 7.7,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sibay",
    "indicatorId": "bdmo_y48155056",
    "year": 2024,
    "value": 0.53,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlibashevsky",
    "indicatorId": "bdmo_y48155056",
    "year": 2024,
    "value": 6.85,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamak",
    "indicatorId": "bdmo_y48155056",
    "year": 2024,
    "value": 5.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamaksky",
    "indicatorId": "bdmo_y48155056",
    "year": 2024,
    "value": 8.18,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "tatyshlinsky",
    "indicatorId": "bdmo_y48155056",
    "year": 2024,
    "value": 1.44,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "tuymazy",
    "indicatorId": "bdmo_y48155056",
    "year": 2024,
    "value": 4.21,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "uchaly",
    "indicatorId": "bdmo_y48155056",
    "year": 2024,
    "value": 5.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufa",
    "indicatorId": "bdmo_y48155056",
    "year": 2024,
    "value": 3.9,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufimsky",
    "indicatorId": "bdmo_y48155056",
    "year": 2024,
    "value": 20.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "yanaulsky",
    "indicatorId": "bdmo_y48155056",
    "year": 2024,
    "value": 8.51,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "zianchurinsky",
    "indicatorId": "bdmo_y48155056",
    "year": 2024,
    "value": 2.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "zilairsky",
    "indicatorId": "bdmo_y48155056",
    "year": 2024,
    "value": 2.04,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "abzelilovsky",
    "indicatorId": "bdmo_y48155057",
    "year": 2024,
    "value": 1.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "agidel",
    "indicatorId": "bdmo_y48155057",
    "year": 2024,
    "value": 1.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "alsheevsky",
    "indicatorId": "bdmo_y48155057",
    "year": 2024,
    "value": 1.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "arkhangelsky",
    "indicatorId": "bdmo_y48155057",
    "year": 2024,
    "value": 1.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "askinsky",
    "indicatorId": "bdmo_y48155057",
    "year": 2024,
    "value": 1.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "aurgazinsky",
    "indicatorId": "bdmo_y48155057",
    "year": 2024,
    "value": 1.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "bakalinsky",
    "indicatorId": "bdmo_y48155057",
    "year": 2024,
    "value": 1.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "baltachevsky",
    "indicatorId": "bdmo_y48155057",
    "year": 2024,
    "value": 1.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "baymaksky",
    "indicatorId": "bdmo_y48155057",
    "year": 2024,
    "value": 1.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "belebeyevsky",
    "indicatorId": "bdmo_y48155057",
    "year": 2024,
    "value": 1.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "belokataysky",
    "indicatorId": "bdmo_y48155057",
    "year": 2024,
    "value": 1.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "beloretsk",
    "indicatorId": "bdmo_y48155057",
    "year": 2024,
    "value": 1.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "birsk",
    "indicatorId": "bdmo_y48155057",
    "year": 2024,
    "value": 1.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "bizhbulyaksky",
    "indicatorId": "bdmo_y48155057",
    "year": 2024,
    "value": 1.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "blagovarsky",
    "indicatorId": "bdmo_y48155057",
    "year": 2024,
    "value": 1.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "blagoveshchensky",
    "indicatorId": "bdmo_y48155057",
    "year": 2024,
    "value": 1.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "buraevsky",
    "indicatorId": "bdmo_y48155057",
    "year": 2024,
    "value": 1.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "burzyansky",
    "indicatorId": "bdmo_y48155057",
    "year": 2024,
    "value": 1.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "buzdyaksky",
    "indicatorId": "bdmo_y48155057",
    "year": 2024,
    "value": 1.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "chekmagushevsky",
    "indicatorId": "bdmo_y48155057",
    "year": 2024,
    "value": 1.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "chishminsky",
    "indicatorId": "bdmo_y48155057",
    "year": 2024,
    "value": 1.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "davlekanovsky",
    "indicatorId": "bdmo_y48155057",
    "year": 2024,
    "value": 1.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "duvansky",
    "indicatorId": "bdmo_y48155057",
    "year": 2024,
    "value": 1.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "dyurtyulinsky",
    "indicatorId": "bdmo_y48155057",
    "year": 2024,
    "value": 1.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ermekeyevsky",
    "indicatorId": "bdmo_y48155057",
    "year": 2024,
    "value": 1.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "fedorovsky",
    "indicatorId": "bdmo_y48155057",
    "year": 2024,
    "value": 1.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "gafuriysky",
    "indicatorId": "bdmo_y48155057",
    "year": 2024,
    "value": 1.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "iglinsky",
    "indicatorId": "bdmo_y48155057",
    "year": 2024,
    "value": 1.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ilishevsky",
    "indicatorId": "bdmo_y48155057",
    "year": 2024,
    "value": 1.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ishimbay",
    "indicatorId": "bdmo_y48155057",
    "year": 2024,
    "value": 1.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kaltasinsky",
    "indicatorId": "bdmo_y48155057",
    "year": 2024,
    "value": 1.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "karaidelsky",
    "indicatorId": "bdmo_y48155057",
    "year": 2024,
    "value": 1.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "karmaskalinsky",
    "indicatorId": "bdmo_y48155057",
    "year": 2024,
    "value": 1.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "khaibullinsky",
    "indicatorId": "bdmo_y48155057",
    "year": 2024,
    "value": 1.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kiginsky",
    "indicatorId": "bdmo_y48155057",
    "year": 2024,
    "value": 1.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "krasnokamsky",
    "indicatorId": "bdmo_y48155057",
    "year": 2024,
    "value": 1.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kugarchinsky",
    "indicatorId": "bdmo_y48155057",
    "year": 2024,
    "value": 1.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kumertau",
    "indicatorId": "bdmo_y48155057",
    "year": 2024,
    "value": 1.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kushnarenkovsky",
    "indicatorId": "bdmo_y48155057",
    "year": 2024,
    "value": 1.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kuyurgazinsky",
    "indicatorId": "bdmo_y48155057",
    "year": 2024,
    "value": 1.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "mechetlinsky",
    "indicatorId": "bdmo_y48155057",
    "year": 2024,
    "value": 1.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "meleuz",
    "indicatorId": "bdmo_y48155057",
    "year": 2024,
    "value": 1.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "mishkinsky",
    "indicatorId": "bdmo_y48155057",
    "year": 2024,
    "value": 1.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "miyakinsky",
    "indicatorId": "bdmo_y48155057",
    "year": 2024,
    "value": 1.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "neftekamsk",
    "indicatorId": "bdmo_y48155057",
    "year": 2024,
    "value": 1.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "nurimanovsky",
    "indicatorId": "bdmo_y48155057",
    "year": 2024,
    "value": 1.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "oktyabrsky",
    "indicatorId": "bdmo_y48155057",
    "year": 2024,
    "value": 1.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "salavat",
    "indicatorId": "bdmo_y48155057",
    "year": 2024,
    "value": 1.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "salavatsky",
    "indicatorId": "bdmo_y48155057",
    "year": 2024,
    "value": 1.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sharansky",
    "indicatorId": "bdmo_y48155057",
    "year": 2024,
    "value": 1.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sibay",
    "indicatorId": "bdmo_y48155057",
    "year": 2024,
    "value": 1.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlibashevsky",
    "indicatorId": "bdmo_y48155057",
    "year": 2024,
    "value": 1.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamak",
    "indicatorId": "bdmo_y48155057",
    "year": 2024,
    "value": 1.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamaksky",
    "indicatorId": "bdmo_y48155057",
    "year": 2024,
    "value": 1.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "tatyshlinsky",
    "indicatorId": "bdmo_y48155057",
    "year": 2024,
    "value": 1.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "tuymazy",
    "indicatorId": "bdmo_y48155057",
    "year": 2024,
    "value": 1.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "uchaly",
    "indicatorId": "bdmo_y48155057",
    "year": 2024,
    "value": 1.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufa",
    "indicatorId": "bdmo_y48155057",
    "year": 2024,
    "value": 1.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufimsky",
    "indicatorId": "bdmo_y48155057",
    "year": 2024,
    "value": 1.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "yanaulsky",
    "indicatorId": "bdmo_y48155057",
    "year": 2024,
    "value": 1.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "zianchurinsky",
    "indicatorId": "bdmo_y48155057",
    "year": 2024,
    "value": 1.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "zilairsky",
    "indicatorId": "bdmo_y48155057",
    "year": 2024,
    "value": 1.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "abzelilovsky",
    "indicatorId": "bdmo_y48211001",
    "year": 2024,
    "value": 36.01,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "agidel",
    "indicatorId": "bdmo_y48211001",
    "year": 2024,
    "value": 26.31,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "alsheevsky",
    "indicatorId": "bdmo_y48211001",
    "year": 2024,
    "value": 34.87,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "arkhangelsky",
    "indicatorId": "bdmo_y48211001",
    "year": 2024,
    "value": 32.72,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "askinsky",
    "indicatorId": "bdmo_y48211001",
    "year": 2024,
    "value": 31.62,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "aurgazinsky",
    "indicatorId": "bdmo_y48211001",
    "year": 2024,
    "value": 38.32,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "bakalinsky",
    "indicatorId": "bdmo_y48211001",
    "year": 2024,
    "value": 34.42,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "baltachevsky",
    "indicatorId": "bdmo_y48211001",
    "year": 2024,
    "value": 31.83,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "baymaksky",
    "indicatorId": "bdmo_y48211001",
    "year": 2024,
    "value": 27.37,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "belebeyevsky",
    "indicatorId": "bdmo_y48211001",
    "year": 2024,
    "value": 26.76,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "belokataysky",
    "indicatorId": "bdmo_y48211001",
    "year": 2024,
    "value": 28.01,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "beloretsk",
    "indicatorId": "bdmo_y48211001",
    "year": 2024,
    "value": 27.75,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "birsk",
    "indicatorId": "bdmo_y48211001",
    "year": 2024,
    "value": 25.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "bizhbulyaksky",
    "indicatorId": "bdmo_y48211001",
    "year": 2024,
    "value": 34.85,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "blagovarsky",
    "indicatorId": "bdmo_y48211001",
    "year": 2024,
    "value": 28.49,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "blagoveshchensky",
    "indicatorId": "bdmo_y48211001",
    "year": 2024,
    "value": 28.43,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "buraevsky",
    "indicatorId": "bdmo_y48211001",
    "year": 2024,
    "value": 35.96,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "burzyansky",
    "indicatorId": "bdmo_y48211001",
    "year": 2024,
    "value": 25.12,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "buzdyaksky",
    "indicatorId": "bdmo_y48211001",
    "year": 2024,
    "value": 30.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "chekmagushevsky",
    "indicatorId": "bdmo_y48211001",
    "year": 2024,
    "value": 32.58,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "chishminsky",
    "indicatorId": "bdmo_y48211001",
    "year": 2024,
    "value": 37.15,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "davlekanovsky",
    "indicatorId": "bdmo_y48211001",
    "year": 2024,
    "value": 31.31,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "duvansky",
    "indicatorId": "bdmo_y48211001",
    "year": 2024,
    "value": 25.63,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "dyurtyulinsky",
    "indicatorId": "bdmo_y48211001",
    "year": 2024,
    "value": 30.94,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ermekeyevsky",
    "indicatorId": "bdmo_y48211001",
    "year": 2024,
    "value": 32.65,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "fedorovsky",
    "indicatorId": "bdmo_y48211001",
    "year": 2024,
    "value": 31.47,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "gafuriysky",
    "indicatorId": "bdmo_y48211001",
    "year": 2024,
    "value": 33.86,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "iglinsky",
    "indicatorId": "bdmo_y48211001",
    "year": 2024,
    "value": 41.86,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ilishevsky",
    "indicatorId": "bdmo_y48211001",
    "year": 2024,
    "value": 33.53,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ishimbay",
    "indicatorId": "bdmo_y48211001",
    "year": 2024,
    "value": 32.66,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kaltasinsky",
    "indicatorId": "bdmo_y48211001",
    "year": 2024,
    "value": 28.96,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "karaidelsky",
    "indicatorId": "bdmo_y48211001",
    "year": 2024,
    "value": 35.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "karmaskalinsky",
    "indicatorId": "bdmo_y48211001",
    "year": 2024,
    "value": 33.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "khaibullinsky",
    "indicatorId": "bdmo_y48211001",
    "year": 2024,
    "value": 31.41,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kiginsky",
    "indicatorId": "bdmo_y48211001",
    "year": 2024,
    "value": 24.98,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "krasnokamsky",
    "indicatorId": "bdmo_y48211001",
    "year": 2024,
    "value": 34.38,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kugarchinsky",
    "indicatorId": "bdmo_y48211001",
    "year": 2024,
    "value": 33.26,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kumertau",
    "indicatorId": "bdmo_y48211001",
    "year": 2024,
    "value": 28.27,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kushnarenkovsky",
    "indicatorId": "bdmo_y48211001",
    "year": 2024,
    "value": 40.63,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kuyurgazinsky",
    "indicatorId": "bdmo_y48211001",
    "year": 2024,
    "value": 33.24,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "mechetlinsky",
    "indicatorId": "bdmo_y48211001",
    "year": 2024,
    "value": 29.13,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "meleuz",
    "indicatorId": "bdmo_y48211001",
    "year": 2024,
    "value": 34.25,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "mishkinsky",
    "indicatorId": "bdmo_y48211001",
    "year": 2024,
    "value": 28.2,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "miyakinsky",
    "indicatorId": "bdmo_y48211001",
    "year": 2024,
    "value": 37.05,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "neftekamsk",
    "indicatorId": "bdmo_y48211001",
    "year": 2024,
    "value": 28.02,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "nurimanovsky",
    "indicatorId": "bdmo_y48211001",
    "year": 2024,
    "value": 34.95,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "oktyabrsky",
    "indicatorId": "bdmo_y48211001",
    "year": 2024,
    "value": 28.36,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "salavat",
    "indicatorId": "bdmo_y48211001",
    "year": 2024,
    "value": 24.92,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "salavatsky",
    "indicatorId": "bdmo_y48211001",
    "year": 2024,
    "value": 29.17,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sharansky",
    "indicatorId": "bdmo_y48211001",
    "year": 2024,
    "value": 34.37,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sibay",
    "indicatorId": "bdmo_y48211001",
    "year": 2024,
    "value": 26.47,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlibashevsky",
    "indicatorId": "bdmo_y48211001",
    "year": 2024,
    "value": 37.35,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamak",
    "indicatorId": "bdmo_y48211001",
    "year": 2024,
    "value": 23.81,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamaksky",
    "indicatorId": "bdmo_y48211001",
    "year": 2024,
    "value": 43.46,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "tatyshlinsky",
    "indicatorId": "bdmo_y48211001",
    "year": 2024,
    "value": 31.72,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "tuymazy",
    "indicatorId": "bdmo_y48211001",
    "year": 2024,
    "value": 31.39,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "uchaly",
    "indicatorId": "bdmo_y48211001",
    "year": 2024,
    "value": 27.37,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufa",
    "indicatorId": "bdmo_y48211001",
    "year": 2024,
    "value": 28.27,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufimsky",
    "indicatorId": "bdmo_y48211001",
    "year": 2024,
    "value": 60.19,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "yanaulsky",
    "indicatorId": "bdmo_y48211001",
    "year": 2024,
    "value": 32.09,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "zianchurinsky",
    "indicatorId": "bdmo_y48211001",
    "year": 2024,
    "value": 31.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "zilairsky",
    "indicatorId": "bdmo_y48211001",
    "year": 2024,
    "value": 31.22,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "abzelilovsky",
    "indicatorId": "bdmo_y48213002",
    "year": 2024,
    "value": 52673.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "agidel",
    "indicatorId": "bdmo_y48213002",
    "year": 2024,
    "value": 63802.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "alsheevsky",
    "indicatorId": "bdmo_y48213002",
    "year": 2024,
    "value": 60609.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "arkhangelsky",
    "indicatorId": "bdmo_y48213002",
    "year": 2024,
    "value": 46871.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "askinsky",
    "indicatorId": "bdmo_y48213002",
    "year": 2024,
    "value": 47944.1,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "aurgazinsky",
    "indicatorId": "bdmo_y48213002",
    "year": 2024,
    "value": 47303.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "bakalinsky",
    "indicatorId": "bdmo_y48213002",
    "year": 2024,
    "value": 43414.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "baltachevsky",
    "indicatorId": "bdmo_y48213002",
    "year": 2024,
    "value": 45217.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "baymaksky",
    "indicatorId": "bdmo_y48213002",
    "year": 2024,
    "value": 47395.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "belebeyevsky",
    "indicatorId": "bdmo_y48213002",
    "year": 2024,
    "value": 58297.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "belokataysky",
    "indicatorId": "bdmo_y48213002",
    "year": 2024,
    "value": 50585.9,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "beloretsk",
    "indicatorId": "bdmo_y48213002",
    "year": 2024,
    "value": 57286.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "birsk",
    "indicatorId": "bdmo_y48213002",
    "year": 2024,
    "value": 50586.9,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "bizhbulyaksky",
    "indicatorId": "bdmo_y48213002",
    "year": 2024,
    "value": 50782.7,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "blagovarsky",
    "indicatorId": "bdmo_y48213002",
    "year": 2024,
    "value": 57138.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "blagoveshchensky",
    "indicatorId": "bdmo_y48213002",
    "year": 2024,
    "value": 75715.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "buraevsky",
    "indicatorId": "bdmo_y48213002",
    "year": 2024,
    "value": 71323.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "burzyansky",
    "indicatorId": "bdmo_y48213002",
    "year": 2024,
    "value": 37911.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "buzdyaksky",
    "indicatorId": "bdmo_y48213002",
    "year": 2024,
    "value": 52308.9,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "chekmagushevsky",
    "indicatorId": "bdmo_y48213002",
    "year": 2024,
    "value": 54175.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "chishminsky",
    "indicatorId": "bdmo_y48213002",
    "year": 2024,
    "value": 61702.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "davlekanovsky",
    "indicatorId": "bdmo_y48213002",
    "year": 2024,
    "value": 49262.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "duvansky",
    "indicatorId": "bdmo_y48213002",
    "year": 2024,
    "value": 51092.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "dyurtyulinsky",
    "indicatorId": "bdmo_y48213002",
    "year": 2024,
    "value": 56946.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ermekeyevsky",
    "indicatorId": "bdmo_y48213002",
    "year": 2024,
    "value": 56981.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "fedorovsky",
    "indicatorId": "bdmo_y48213002",
    "year": 2024,
    "value": 45108.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "gafuriysky",
    "indicatorId": "bdmo_y48213002",
    "year": 2024,
    "value": 48074.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "iglinsky",
    "indicatorId": "bdmo_y48213002",
    "year": 2024,
    "value": 63419.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ilishevsky",
    "indicatorId": "bdmo_y48213002",
    "year": 2024,
    "value": 62935.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ishimbay",
    "indicatorId": "bdmo_y48213002",
    "year": 2024,
    "value": 62428.7,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kaltasinsky",
    "indicatorId": "bdmo_y48213002",
    "year": 2024,
    "value": 66702.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "karaidelsky",
    "indicatorId": "bdmo_y48213002",
    "year": 2024,
    "value": 44545.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "karmaskalinsky",
    "indicatorId": "bdmo_y48213002",
    "year": 2024,
    "value": 55837.1,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "khaibullinsky",
    "indicatorId": "bdmo_y48213002",
    "year": 2024,
    "value": 79129.2,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kiginsky",
    "indicatorId": "bdmo_y48213002",
    "year": 2024,
    "value": 43959.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "krasnokamsky",
    "indicatorId": "bdmo_y48213002",
    "year": 2024,
    "value": 64901.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kugarchinsky",
    "indicatorId": "bdmo_y48213002",
    "year": 2024,
    "value": 47305.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kumertau",
    "indicatorId": "bdmo_y48213002",
    "year": 2024,
    "value": 60446.9,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kushnarenkovsky",
    "indicatorId": "bdmo_y48213002",
    "year": 2024,
    "value": 50295.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kuyurgazinsky",
    "indicatorId": "bdmo_y48213002",
    "year": 2024,
    "value": 59356.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "mechetlinsky",
    "indicatorId": "bdmo_y48213002",
    "year": 2024,
    "value": 45561.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "meleuz",
    "indicatorId": "bdmo_y48213002",
    "year": 2024,
    "value": 54630.9,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "mishkinsky",
    "indicatorId": "bdmo_y48213002",
    "year": 2024,
    "value": 45268.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "miyakinsky",
    "indicatorId": "bdmo_y48213002",
    "year": 2024,
    "value": 47598.1,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "neftekamsk",
    "indicatorId": "bdmo_y48213002",
    "year": 2024,
    "value": 63974.7,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "nurimanovsky",
    "indicatorId": "bdmo_y48213002",
    "year": 2024,
    "value": 45435.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "oktyabrsky",
    "indicatorId": "bdmo_y48213002",
    "year": 2024,
    "value": 68419.2,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "salavat",
    "indicatorId": "bdmo_y48213002",
    "year": 2024,
    "value": 73747.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "salavatsky",
    "indicatorId": "bdmo_y48213002",
    "year": 2024,
    "value": 51691.7,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sharansky",
    "indicatorId": "bdmo_y48213002",
    "year": 2024,
    "value": 54072.2,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sibay",
    "indicatorId": "bdmo_y48213002",
    "year": 2024,
    "value": 56023.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlibashevsky",
    "indicatorId": "bdmo_y48213002",
    "year": 2024,
    "value": 42737.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamak",
    "indicatorId": "bdmo_y48213002",
    "year": 2024,
    "value": 65443.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamaksky",
    "indicatorId": "bdmo_y48213002",
    "year": 2024,
    "value": 57412.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "tatyshlinsky",
    "indicatorId": "bdmo_y48213002",
    "year": 2024,
    "value": 72519.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "tuymazy",
    "indicatorId": "bdmo_y48213002",
    "year": 2024,
    "value": 61257.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "uchaly",
    "indicatorId": "bdmo_y48213002",
    "year": 2024,
    "value": 81713.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufa",
    "indicatorId": "bdmo_y48213002",
    "year": 2024,
    "value": 87313.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufimsky",
    "indicatorId": "bdmo_y48213002",
    "year": 2024,
    "value": 90380.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "yanaulsky",
    "indicatorId": "bdmo_y48213002",
    "year": 2024,
    "value": 62296.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "zianchurinsky",
    "indicatorId": "bdmo_y48213002",
    "year": 2024,
    "value": 43741.2,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "zilairsky",
    "indicatorId": "bdmo_y48213002",
    "year": 2024,
    "value": 45957.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "abzelilovsky",
    "indicatorId": "bdmo_y48213003",
    "year": 2024,
    "value": 32315.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "agidel",
    "indicatorId": "bdmo_y48213003",
    "year": 2024,
    "value": 37435.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "alsheevsky",
    "indicatorId": "bdmo_y48213003",
    "year": 2024,
    "value": 34584.9,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "arkhangelsky",
    "indicatorId": "bdmo_y48213003",
    "year": 2024,
    "value": 37857.1,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "askinsky",
    "indicatorId": "bdmo_y48213003",
    "year": 2024,
    "value": 30670.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "aurgazinsky",
    "indicatorId": "bdmo_y48213003",
    "year": 2024,
    "value": 27745.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "bakalinsky",
    "indicatorId": "bdmo_y48213003",
    "year": 2024,
    "value": 36941.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "baltachevsky",
    "indicatorId": "bdmo_y48213003",
    "year": 2024,
    "value": 28858.2,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "baymaksky",
    "indicatorId": "bdmo_y48213003",
    "year": 2024,
    "value": 32870.1,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "belebeyevsky",
    "indicatorId": "bdmo_y48213003",
    "year": 2024,
    "value": 43703.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "belokataysky",
    "indicatorId": "bdmo_y48213003",
    "year": 2024,
    "value": 37824.7,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "beloretsk",
    "indicatorId": "bdmo_y48213003",
    "year": 2024,
    "value": 36354.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "birsk",
    "indicatorId": "bdmo_y48213003",
    "year": 2024,
    "value": 32826.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "bizhbulyaksky",
    "indicatorId": "bdmo_y48213003",
    "year": 2024,
    "value": 34514.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "blagovarsky",
    "indicatorId": "bdmo_y48213003",
    "year": 2024,
    "value": 31004.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "blagoveshchensky",
    "indicatorId": "bdmo_y48213003",
    "year": 2024,
    "value": 41301.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "buraevsky",
    "indicatorId": "bdmo_y48213003",
    "year": 2024,
    "value": 32463.9,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "burzyansky",
    "indicatorId": "bdmo_y48213003",
    "year": 2024,
    "value": 28774.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "buzdyaksky",
    "indicatorId": "bdmo_y48213003",
    "year": 2024,
    "value": 32933.9,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "chekmagushevsky",
    "indicatorId": "bdmo_y48213003",
    "year": 2024,
    "value": 34380.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "chishminsky",
    "indicatorId": "bdmo_y48213003",
    "year": 2024,
    "value": 37158.7,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "davlekanovsky",
    "indicatorId": "bdmo_y48213003",
    "year": 2024,
    "value": 34601.9,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "duvansky",
    "indicatorId": "bdmo_y48213003",
    "year": 2024,
    "value": 38630.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "dyurtyulinsky",
    "indicatorId": "bdmo_y48213003",
    "year": 2024,
    "value": 31707.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "fedorovsky",
    "indicatorId": "bdmo_y48213003",
    "year": 2024,
    "value": 27275.9,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "gafuriysky",
    "indicatorId": "bdmo_y48213003",
    "year": 2024,
    "value": 33294.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "iglinsky",
    "indicatorId": "bdmo_y48213003",
    "year": 2024,
    "value": 35382.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ilishevsky",
    "indicatorId": "bdmo_y48213003",
    "year": 2024,
    "value": 28496.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ishimbay",
    "indicatorId": "bdmo_y48213003",
    "year": 2024,
    "value": 38268.1,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kaltasinsky",
    "indicatorId": "bdmo_y48213003",
    "year": 2024,
    "value": 33340.9,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "karaidelsky",
    "indicatorId": "bdmo_y48213003",
    "year": 2024,
    "value": 28783.1,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "karmaskalinsky",
    "indicatorId": "bdmo_y48213003",
    "year": 2024,
    "value": 39286.2,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "khaibullinsky",
    "indicatorId": "bdmo_y48213003",
    "year": 2024,
    "value": 30366.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kiginsky",
    "indicatorId": "bdmo_y48213003",
    "year": 2024,
    "value": 28803.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "krasnokamsky",
    "indicatorId": "bdmo_y48213003",
    "year": 2024,
    "value": 34593.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kugarchinsky",
    "indicatorId": "bdmo_y48213003",
    "year": 2024,
    "value": 28250.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kumertau",
    "indicatorId": "bdmo_y48213003",
    "year": 2024,
    "value": 44057.2,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kushnarenkovsky",
    "indicatorId": "bdmo_y48213003",
    "year": 2024,
    "value": 32918.7,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kuyurgazinsky",
    "indicatorId": "bdmo_y48213003",
    "year": 2024,
    "value": 33440.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "mechetlinsky",
    "indicatorId": "bdmo_y48213003",
    "year": 2024,
    "value": 36365.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "meleuz",
    "indicatorId": "bdmo_y48213003",
    "year": 2024,
    "value": 40943.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "mishkinsky",
    "indicatorId": "bdmo_y48213003",
    "year": 2024,
    "value": 28158.9,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "miyakinsky",
    "indicatorId": "bdmo_y48213003",
    "year": 2024,
    "value": 36513.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "neftekamsk",
    "indicatorId": "bdmo_y48213003",
    "year": 2024,
    "value": 39076.9,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "nurimanovsky",
    "indicatorId": "bdmo_y48213003",
    "year": 2024,
    "value": 31281.7,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "oktyabrsky",
    "indicatorId": "bdmo_y48213003",
    "year": 2024,
    "value": 41400.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "salavat",
    "indicatorId": "bdmo_y48213003",
    "year": 2024,
    "value": 39649.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "salavatsky",
    "indicatorId": "bdmo_y48213003",
    "year": 2024,
    "value": 29135.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sharansky",
    "indicatorId": "bdmo_y48213003",
    "year": 2024,
    "value": 34000.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sibay",
    "indicatorId": "bdmo_y48213003",
    "year": 2024,
    "value": 42066.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlibashevsky",
    "indicatorId": "bdmo_y48213003",
    "year": 2024,
    "value": 27222.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamak",
    "indicatorId": "bdmo_y48213003",
    "year": 2024,
    "value": 44326.1,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamaksky",
    "indicatorId": "bdmo_y48213003",
    "year": 2024,
    "value": 33531.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "tatyshlinsky",
    "indicatorId": "bdmo_y48213003",
    "year": 2024,
    "value": 29935.1,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "tuymazy",
    "indicatorId": "bdmo_y48213003",
    "year": 2024,
    "value": 35405.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "uchaly",
    "indicatorId": "bdmo_y48213003",
    "year": 2024,
    "value": 29575.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufa",
    "indicatorId": "bdmo_y48213003",
    "year": 2024,
    "value": 46298.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufimsky",
    "indicatorId": "bdmo_y48213003",
    "year": 2024,
    "value": 45503.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "yanaulsky",
    "indicatorId": "bdmo_y48213003",
    "year": 2024,
    "value": 36242.7,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "zianchurinsky",
    "indicatorId": "bdmo_y48213003",
    "year": 2024,
    "value": 38088.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "zilairsky",
    "indicatorId": "bdmo_y48213003",
    "year": 2024,
    "value": 31273.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "abzelilovsky",
    "indicatorId": "bdmo_y48213004",
    "year": 2024,
    "value": 45475.2,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "agidel",
    "indicatorId": "bdmo_y48213004",
    "year": 2024,
    "value": 46881.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "alsheevsky",
    "indicatorId": "bdmo_y48213004",
    "year": 2024,
    "value": 47476.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "arkhangelsky",
    "indicatorId": "bdmo_y48213004",
    "year": 2024,
    "value": 43129.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "askinsky",
    "indicatorId": "bdmo_y48213004",
    "year": 2024,
    "value": 40280.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "aurgazinsky",
    "indicatorId": "bdmo_y48213004",
    "year": 2024,
    "value": 41265.1,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "bakalinsky",
    "indicatorId": "bdmo_y48213004",
    "year": 2024,
    "value": 36060.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "baltachevsky",
    "indicatorId": "bdmo_y48213004",
    "year": 2024,
    "value": 42048.9,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "baymaksky",
    "indicatorId": "bdmo_y48213004",
    "year": 2024,
    "value": 38993.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "belebeyevsky",
    "indicatorId": "bdmo_y48213004",
    "year": 2024,
    "value": 49556.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "belokataysky",
    "indicatorId": "bdmo_y48213004",
    "year": 2024,
    "value": 44400.7,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "beloretsk",
    "indicatorId": "bdmo_y48213004",
    "year": 2024,
    "value": 43367.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "birsk",
    "indicatorId": "bdmo_y48213004",
    "year": 2024,
    "value": 47635.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "bizhbulyaksky",
    "indicatorId": "bdmo_y48213004",
    "year": 2024,
    "value": 40859.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "blagovarsky",
    "indicatorId": "bdmo_y48213004",
    "year": 2024,
    "value": 46123.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "blagoveshchensky",
    "indicatorId": "bdmo_y48213004",
    "year": 2024,
    "value": 57232.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "buraevsky",
    "indicatorId": "bdmo_y48213004",
    "year": 2024,
    "value": 42799.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "burzyansky",
    "indicatorId": "bdmo_y48213004",
    "year": 2024,
    "value": 32059.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "buzdyaksky",
    "indicatorId": "bdmo_y48213004",
    "year": 2024,
    "value": 41340.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "chekmagushevsky",
    "indicatorId": "bdmo_y48213004",
    "year": 2024,
    "value": 43266.9,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "chishminsky",
    "indicatorId": "bdmo_y48213004",
    "year": 2024,
    "value": 57171.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "davlekanovsky",
    "indicatorId": "bdmo_y48213004",
    "year": 2024,
    "value": 38400.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "duvansky",
    "indicatorId": "bdmo_y48213004",
    "year": 2024,
    "value": 49378.7,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "dyurtyulinsky",
    "indicatorId": "bdmo_y48213004",
    "year": 2024,
    "value": 42722.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ermekeyevsky",
    "indicatorId": "bdmo_y48213004",
    "year": 2024,
    "value": 43960.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "fedorovsky",
    "indicatorId": "bdmo_y48213004",
    "year": 2024,
    "value": 38955.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "gafuriysky",
    "indicatorId": "bdmo_y48213004",
    "year": 2024,
    "value": 45885.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "iglinsky",
    "indicatorId": "bdmo_y48213004",
    "year": 2024,
    "value": 70478.1,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ilishevsky",
    "indicatorId": "bdmo_y48213004",
    "year": 2024,
    "value": 38871.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ishimbay",
    "indicatorId": "bdmo_y48213004",
    "year": 2024,
    "value": 45637.2,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kaltasinsky",
    "indicatorId": "bdmo_y48213004",
    "year": 2024,
    "value": 49924.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "karaidelsky",
    "indicatorId": "bdmo_y48213004",
    "year": 2024,
    "value": 37086.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "karmaskalinsky",
    "indicatorId": "bdmo_y48213004",
    "year": 2024,
    "value": 51102.1,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "khaibullinsky",
    "indicatorId": "bdmo_y48213004",
    "year": 2024,
    "value": 47431.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kiginsky",
    "indicatorId": "bdmo_y48213004",
    "year": 2024,
    "value": 41075.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "krasnokamsky",
    "indicatorId": "bdmo_y48213004",
    "year": 2024,
    "value": 50104.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kugarchinsky",
    "indicatorId": "bdmo_y48213004",
    "year": 2024,
    "value": 41034.7,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kumertau",
    "indicatorId": "bdmo_y48213004",
    "year": 2024,
    "value": 56592.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kushnarenkovsky",
    "indicatorId": "bdmo_y48213004",
    "year": 2024,
    "value": 53934.2,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kuyurgazinsky",
    "indicatorId": "bdmo_y48213004",
    "year": 2024,
    "value": 43378.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "mechetlinsky",
    "indicatorId": "bdmo_y48213004",
    "year": 2024,
    "value": 42929.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "meleuz",
    "indicatorId": "bdmo_y48213004",
    "year": 2024,
    "value": 54522.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "mishkinsky",
    "indicatorId": "bdmo_y48213004",
    "year": 2024,
    "value": 40400.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "miyakinsky",
    "indicatorId": "bdmo_y48213004",
    "year": 2024,
    "value": 45484.9,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "neftekamsk",
    "indicatorId": "bdmo_y48213004",
    "year": 2024,
    "value": 54016.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "nurimanovsky",
    "indicatorId": "bdmo_y48213004",
    "year": 2024,
    "value": 44626.2,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "oktyabrsky",
    "indicatorId": "bdmo_y48213004",
    "year": 2024,
    "value": 65409.7,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "salavat",
    "indicatorId": "bdmo_y48213004",
    "year": 2024,
    "value": 53110.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "salavatsky",
    "indicatorId": "bdmo_y48213004",
    "year": 2024,
    "value": 43312.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sharansky",
    "indicatorId": "bdmo_y48213004",
    "year": 2024,
    "value": 42437.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sibay",
    "indicatorId": "bdmo_y48213004",
    "year": 2024,
    "value": 56625.9,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlibashevsky",
    "indicatorId": "bdmo_y48213004",
    "year": 2024,
    "value": 36788.1,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamak",
    "indicatorId": "bdmo_y48213004",
    "year": 2024,
    "value": 51894.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamaksky",
    "indicatorId": "bdmo_y48213004",
    "year": 2024,
    "value": 52904.9,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "tatyshlinsky",
    "indicatorId": "bdmo_y48213004",
    "year": 2024,
    "value": 40191.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "tuymazy",
    "indicatorId": "bdmo_y48213004",
    "year": 2024,
    "value": 55833.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "uchaly",
    "indicatorId": "bdmo_y48213004",
    "year": 2024,
    "value": 42068.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufa",
    "indicatorId": "bdmo_y48213004",
    "year": 2024,
    "value": 63865.1,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufimsky",
    "indicatorId": "bdmo_y48213004",
    "year": 2024,
    "value": 84177.9,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "yanaulsky",
    "indicatorId": "bdmo_y48213004",
    "year": 2024,
    "value": 45583.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "zianchurinsky",
    "indicatorId": "bdmo_y48213004",
    "year": 2024,
    "value": 40685.2,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "zilairsky",
    "indicatorId": "bdmo_y48213004",
    "year": 2024,
    "value": 37008.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "abzelilovsky",
    "indicatorId": "bdmo_y48213007",
    "year": 2024,
    "value": 44597.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "agidel",
    "indicatorId": "bdmo_y48213007",
    "year": 2024,
    "value": 42138.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "arkhangelsky",
    "indicatorId": "bdmo_y48213007",
    "year": 2024,
    "value": 41313.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "askinsky",
    "indicatorId": "bdmo_y48213007",
    "year": 2024,
    "value": 38675.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "aurgazinsky",
    "indicatorId": "bdmo_y48213007",
    "year": 2024,
    "value": 38053.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "bakalinsky",
    "indicatorId": "bdmo_y48213007",
    "year": 2024,
    "value": 39838.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "baltachevsky",
    "indicatorId": "bdmo_y48213007",
    "year": 2024,
    "value": 45554.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "baymaksky",
    "indicatorId": "bdmo_y48213007",
    "year": 2024,
    "value": 42812.7,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "belebeyevsky",
    "indicatorId": "bdmo_y48213007",
    "year": 2024,
    "value": 45715.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "belokataysky",
    "indicatorId": "bdmo_y48213007",
    "year": 2024,
    "value": 36731.2,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "beloretsk",
    "indicatorId": "bdmo_y48213007",
    "year": 2024,
    "value": 46448.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "birsk",
    "indicatorId": "bdmo_y48213007",
    "year": 2024,
    "value": 43665.7,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "bizhbulyaksky",
    "indicatorId": "bdmo_y48213007",
    "year": 2024,
    "value": 39933.1,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "blagovarsky",
    "indicatorId": "bdmo_y48213007",
    "year": 2024,
    "value": 50353.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "blagoveshchensky",
    "indicatorId": "bdmo_y48213007",
    "year": 2024,
    "value": 42561.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "buraevsky",
    "indicatorId": "bdmo_y48213007",
    "year": 2024,
    "value": 40380.2,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "burzyansky",
    "indicatorId": "bdmo_y48213007",
    "year": 2024,
    "value": 32970.2,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "buzdyaksky",
    "indicatorId": "bdmo_y48213007",
    "year": 2024,
    "value": 42525.2,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "chekmagushevsky",
    "indicatorId": "bdmo_y48213007",
    "year": 2024,
    "value": 38516.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "chishminsky",
    "indicatorId": "bdmo_y48213007",
    "year": 2024,
    "value": 45232.9,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "davlekanovsky",
    "indicatorId": "bdmo_y48213007",
    "year": 2024,
    "value": 39680.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "duvansky",
    "indicatorId": "bdmo_y48213007",
    "year": 2024,
    "value": 42365.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "dyurtyulinsky",
    "indicatorId": "bdmo_y48213007",
    "year": 2024,
    "value": 43716.7,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ermekeyevsky",
    "indicatorId": "bdmo_y48213007",
    "year": 2024,
    "value": 40871.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "gafuriysky",
    "indicatorId": "bdmo_y48213007",
    "year": 2024,
    "value": 40962.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "iglinsky",
    "indicatorId": "bdmo_y48213007",
    "year": 2024,
    "value": 46895.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ilishevsky",
    "indicatorId": "bdmo_y48213007",
    "year": 2024,
    "value": 41745.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ishimbay",
    "indicatorId": "bdmo_y48213007",
    "year": 2024,
    "value": 42403.9,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kaltasinsky",
    "indicatorId": "bdmo_y48213007",
    "year": 2024,
    "value": 36797.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "karaidelsky",
    "indicatorId": "bdmo_y48213007",
    "year": 2024,
    "value": 41742.9,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "karmaskalinsky",
    "indicatorId": "bdmo_y48213007",
    "year": 2024,
    "value": 36371.1,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "khaibullinsky",
    "indicatorId": "bdmo_y48213007",
    "year": 2024,
    "value": 43300.7,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kiginsky",
    "indicatorId": "bdmo_y48213007",
    "year": 2024,
    "value": 39031.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "krasnokamsky",
    "indicatorId": "bdmo_y48213007",
    "year": 2024,
    "value": 39946.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kugarchinsky",
    "indicatorId": "bdmo_y48213007",
    "year": 2024,
    "value": 40682.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kumertau",
    "indicatorId": "bdmo_y48213007",
    "year": 2024,
    "value": 41822.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kushnarenkovsky",
    "indicatorId": "bdmo_y48213007",
    "year": 2024,
    "value": 43296.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kuyurgazinsky",
    "indicatorId": "bdmo_y48213007",
    "year": 2024,
    "value": 44615.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "mechetlinsky",
    "indicatorId": "bdmo_y48213007",
    "year": 2024,
    "value": 36988.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "meleuz",
    "indicatorId": "bdmo_y48213007",
    "year": 2024,
    "value": 43672.7,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "mishkinsky",
    "indicatorId": "bdmo_y48213007",
    "year": 2024,
    "value": 38408.1,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "miyakinsky",
    "indicatorId": "bdmo_y48213007",
    "year": 2024,
    "value": 41079.1,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "neftekamsk",
    "indicatorId": "bdmo_y48213007",
    "year": 2024,
    "value": 45491.9,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "nurimanovsky",
    "indicatorId": "bdmo_y48213007",
    "year": 2024,
    "value": 40188.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "oktyabrsky",
    "indicatorId": "bdmo_y48213007",
    "year": 2024,
    "value": 48999.9,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "salavat",
    "indicatorId": "bdmo_y48213007",
    "year": 2024,
    "value": 37447.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "salavatsky",
    "indicatorId": "bdmo_y48213007",
    "year": 2024,
    "value": 36873.7,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sharansky",
    "indicatorId": "bdmo_y48213007",
    "year": 2024,
    "value": 39159.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sibay",
    "indicatorId": "bdmo_y48213007",
    "year": 2024,
    "value": 42148.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlibashevsky",
    "indicatorId": "bdmo_y48213007",
    "year": 2024,
    "value": 40493.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamak",
    "indicatorId": "bdmo_y48213007",
    "year": 2024,
    "value": 48588.7,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamaksky",
    "indicatorId": "bdmo_y48213007",
    "year": 2024,
    "value": 45865.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "tatyshlinsky",
    "indicatorId": "bdmo_y48213007",
    "year": 2024,
    "value": 45454.7,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "tuymazy",
    "indicatorId": "bdmo_y48213007",
    "year": 2024,
    "value": 44612.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "uchaly",
    "indicatorId": "bdmo_y48213007",
    "year": 2024,
    "value": 44321.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufa",
    "indicatorId": "bdmo_y48213007",
    "year": 2024,
    "value": 50228.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufimsky",
    "indicatorId": "bdmo_y48213007",
    "year": 2024,
    "value": 50941.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "yanaulsky",
    "indicatorId": "bdmo_y48213007",
    "year": 2024,
    "value": 39470.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "zianchurinsky",
    "indicatorId": "bdmo_y48213007",
    "year": 2024,
    "value": 36298.9,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "zilairsky",
    "indicatorId": "bdmo_y48213007",
    "year": 2024,
    "value": 39380.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "beloretsk",
    "indicatorId": "bdmo_y48213008",
    "year": 2024,
    "value": 39764.9,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "birsk",
    "indicatorId": "bdmo_y48213008",
    "year": 2024,
    "value": 40246.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "blagoveshchensky",
    "indicatorId": "bdmo_y48213008",
    "year": 2024,
    "value": 45800.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "iglinsky",
    "indicatorId": "bdmo_y48213008",
    "year": 2024,
    "value": 38272.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ishimbay",
    "indicatorId": "bdmo_y48213008",
    "year": 2024,
    "value": 40889.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kumertau",
    "indicatorId": "bdmo_y48213008",
    "year": 2024,
    "value": 43605.7,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "meleuz",
    "indicatorId": "bdmo_y48213008",
    "year": 2024,
    "value": 44011.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "oktyabrsky",
    "indicatorId": "bdmo_y48213008",
    "year": 2024,
    "value": 53939.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "salavat",
    "indicatorId": "bdmo_y48213008",
    "year": 2024,
    "value": 47017.1,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamak",
    "indicatorId": "bdmo_y48213008",
    "year": 2024,
    "value": 52785.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "tuymazy",
    "indicatorId": "bdmo_y48213008",
    "year": 2024,
    "value": 42963.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "uchaly",
    "indicatorId": "bdmo_y48213008",
    "year": 2024,
    "value": 39517.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufa",
    "indicatorId": "bdmo_y48213008",
    "year": 2024,
    "value": 50065.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "abzelilovsky",
    "indicatorId": "bdmo_y48215001",
    "year": 2024,
    "value": 1.826,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "agidel",
    "indicatorId": "bdmo_y48215001",
    "year": 2024,
    "value": 0.09,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "alsheevsky",
    "indicatorId": "bdmo_y48215001",
    "year": 2024,
    "value": 0.347,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "arkhangelsky",
    "indicatorId": "bdmo_y48215001",
    "year": 2024,
    "value": 0.747,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "askinsky",
    "indicatorId": "bdmo_y48215001",
    "year": 2024,
    "value": 0.301,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "aurgazinsky",
    "indicatorId": "bdmo_y48215001",
    "year": 2024,
    "value": 0.396,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "bakalinsky",
    "indicatorId": "bdmo_y48215001",
    "year": 2024,
    "value": 0.499,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "baltachevsky",
    "indicatorId": "bdmo_y48215001",
    "year": 2024,
    "value": 0.384,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "baymaksky",
    "indicatorId": "bdmo_y48215001",
    "year": 2024,
    "value": 0.547,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "belebeyevsky",
    "indicatorId": "bdmo_y48215001",
    "year": 2024,
    "value": 0.304,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "belokataysky",
    "indicatorId": "bdmo_y48215001",
    "year": 2024,
    "value": 0.189,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "beloretsk",
    "indicatorId": "bdmo_y48215001",
    "year": 2024,
    "value": 0.528,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "birsk",
    "indicatorId": "bdmo_y48215001",
    "year": 2024,
    "value": 0.426,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "bizhbulyaksky",
    "indicatorId": "bdmo_y48215001",
    "year": 2024,
    "value": 0.187,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "blagovarsky",
    "indicatorId": "bdmo_y48215001",
    "year": 2024,
    "value": 0.254,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "blagoveshchensky",
    "indicatorId": "bdmo_y48215001",
    "year": 2024,
    "value": 0.669,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "buraevsky",
    "indicatorId": "bdmo_y48215001",
    "year": 2024,
    "value": 0.432,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "burzyansky",
    "indicatorId": "bdmo_y48215001",
    "year": 2024,
    "value": 0.697,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "buzdyaksky",
    "indicatorId": "bdmo_y48215001",
    "year": 2024,
    "value": 0.263,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "chekmagushevsky",
    "indicatorId": "bdmo_y48215001",
    "year": 2024,
    "value": 0.608,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "chishminsky",
    "indicatorId": "bdmo_y48215001",
    "year": 2024,
    "value": 0.761,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "davlekanovsky",
    "indicatorId": "bdmo_y48215001",
    "year": 2024,
    "value": 0.384,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "duvansky",
    "indicatorId": "bdmo_y48215001",
    "year": 2024,
    "value": 0.612,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "dyurtyulinsky",
    "indicatorId": "bdmo_y48215001",
    "year": 2024,
    "value": 0.496,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ermekeyevsky",
    "indicatorId": "bdmo_y48215001",
    "year": 2024,
    "value": 0.145,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "fedorovsky",
    "indicatorId": "bdmo_y48215001",
    "year": 2024,
    "value": 0.134,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "gafuriysky",
    "indicatorId": "bdmo_y48215001",
    "year": 2024,
    "value": 0.913,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "iglinsky",
    "indicatorId": "bdmo_y48215001",
    "year": 2024,
    "value": 2.633,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ilishevsky",
    "indicatorId": "bdmo_y48215001",
    "year": 2024,
    "value": 0.543,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ishimbay",
    "indicatorId": "bdmo_y48215001",
    "year": 2024,
    "value": 0.683,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kaltasinsky",
    "indicatorId": "bdmo_y48215001",
    "year": 2024,
    "value": 0.38,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "karaidelsky",
    "indicatorId": "bdmo_y48215001",
    "year": 2024,
    "value": 0.784,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "karmaskalinsky",
    "indicatorId": "bdmo_y48215001",
    "year": 2024,
    "value": 1.628,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "khaibullinsky",
    "indicatorId": "bdmo_y48215001",
    "year": 2024,
    "value": 0.352,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kiginsky",
    "indicatorId": "bdmo_y48215001",
    "year": 2024,
    "value": 0.347,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "krasnokamsky",
    "indicatorId": "bdmo_y48215001",
    "year": 2024,
    "value": 0.972,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kugarchinsky",
    "indicatorId": "bdmo_y48215001",
    "year": 2024,
    "value": 0.529,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kumertau",
    "indicatorId": "bdmo_y48215001",
    "year": 2024,
    "value": 0.167,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kushnarenkovsky",
    "indicatorId": "bdmo_y48215001",
    "year": 2024,
    "value": 1.336,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kuyurgazinsky",
    "indicatorId": "bdmo_y48215001",
    "year": 2024,
    "value": 0.303,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "mechetlinsky",
    "indicatorId": "bdmo_y48215001",
    "year": 2024,
    "value": 0.311,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "meleuz",
    "indicatorId": "bdmo_y48215001",
    "year": 2024,
    "value": 0.956,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "mishkinsky",
    "indicatorId": "bdmo_y48215001",
    "year": 2024,
    "value": 0.517,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "miyakinsky",
    "indicatorId": "bdmo_y48215001",
    "year": 2024,
    "value": 0.407,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "neftekamsk",
    "indicatorId": "bdmo_y48215001",
    "year": 2024,
    "value": 0.508,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "nurimanovsky",
    "indicatorId": "bdmo_y48215001",
    "year": 2024,
    "value": 0.978,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "oktyabrsky",
    "indicatorId": "bdmo_y48215001",
    "year": 2024,
    "value": 0.954,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "salavat",
    "indicatorId": "bdmo_y48215001",
    "year": 2024,
    "value": 0.13,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "salavatsky",
    "indicatorId": "bdmo_y48215001",
    "year": 2024,
    "value": 0.391,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sharansky",
    "indicatorId": "bdmo_y48215001",
    "year": 2024,
    "value": 0.405,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sibay",
    "indicatorId": "bdmo_y48215001",
    "year": 2024,
    "value": 0.383,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlibashevsky",
    "indicatorId": "bdmo_y48215001",
    "year": 2024,
    "value": 0.385,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamak",
    "indicatorId": "bdmo_y48215001",
    "year": 2024,
    "value": 0.406,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamaksky",
    "indicatorId": "bdmo_y48215001",
    "year": 2024,
    "value": 2.303,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "tatyshlinsky",
    "indicatorId": "bdmo_y48215001",
    "year": 2024,
    "value": 0.499,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "tuymazy",
    "indicatorId": "bdmo_y48215001",
    "year": 2024,
    "value": 0.744,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "uchaly",
    "indicatorId": "bdmo_y48215001",
    "year": 2024,
    "value": 0.464,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufa",
    "indicatorId": "bdmo_y48215001",
    "year": 2024,
    "value": 0.956,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufimsky",
    "indicatorId": "bdmo_y48215001",
    "year": 2024,
    "value": 4.028,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "yanaulsky",
    "indicatorId": "bdmo_y48215001",
    "year": 2024,
    "value": 0.455,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "zianchurinsky",
    "indicatorId": "bdmo_y48215001",
    "year": 2024,
    "value": 0.353,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "zilairsky",
    "indicatorId": "bdmo_y48215001",
    "year": 2024,
    "value": 0.39,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "abzelilovsky",
    "indicatorId": "bdmo_y48313004",
    "year": 2024,
    "value": 3231.9,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "agidel",
    "indicatorId": "bdmo_y48313004",
    "year": 2024,
    "value": 4016.1,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "alsheevsky",
    "indicatorId": "bdmo_y48313004",
    "year": 2024,
    "value": 4597.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "arkhangelsky",
    "indicatorId": "bdmo_y48313004",
    "year": 2024,
    "value": 5690.1,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "askinsky",
    "indicatorId": "bdmo_y48313004",
    "year": 2024,
    "value": 6439.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "aurgazinsky",
    "indicatorId": "bdmo_y48313004",
    "year": 2024,
    "value": 4481.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "bakalinsky",
    "indicatorId": "bdmo_y48313004",
    "year": 2024,
    "value": 4631.1,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "baltachevsky",
    "indicatorId": "bdmo_y48313004",
    "year": 2024,
    "value": 5241.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "baymaksky",
    "indicatorId": "bdmo_y48313004",
    "year": 2024,
    "value": 2957.2,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "belebeyevsky",
    "indicatorId": "bdmo_y48313004",
    "year": 2024,
    "value": 2083.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "belokataysky",
    "indicatorId": "bdmo_y48313004",
    "year": 2024,
    "value": 5198.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "beloretsk",
    "indicatorId": "bdmo_y48313004",
    "year": 2024,
    "value": 2467.1,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "birsk",
    "indicatorId": "bdmo_y48313004",
    "year": 2024,
    "value": 3375.7,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "bizhbulyaksky",
    "indicatorId": "bdmo_y48313004",
    "year": 2024,
    "value": 5169.2,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "blagovarsky",
    "indicatorId": "bdmo_y48313004",
    "year": 2024,
    "value": 4559.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "blagoveshchensky",
    "indicatorId": "bdmo_y48313004",
    "year": 2024,
    "value": 3223.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "buraevsky",
    "indicatorId": "bdmo_y48313004",
    "year": 2024,
    "value": 7005.1,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "burzyansky",
    "indicatorId": "bdmo_y48313004",
    "year": 2024,
    "value": 5153.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "buzdyaksky",
    "indicatorId": "bdmo_y48313004",
    "year": 2024,
    "value": 3273.1,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "chekmagushevsky",
    "indicatorId": "bdmo_y48313004",
    "year": 2024,
    "value": 4217.7,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "chishminsky",
    "indicatorId": "bdmo_y48313004",
    "year": 2024,
    "value": 3027.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "davlekanovsky",
    "indicatorId": "bdmo_y48313004",
    "year": 2024,
    "value": 3471.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "duvansky",
    "indicatorId": "bdmo_y48313004",
    "year": 2024,
    "value": 3414.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "dyurtyulinsky",
    "indicatorId": "bdmo_y48313004",
    "year": 2024,
    "value": 3240.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ermekeyevsky",
    "indicatorId": "bdmo_y48313004",
    "year": 2024,
    "value": 5405.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "fedorovsky",
    "indicatorId": "bdmo_y48313004",
    "year": 2024,
    "value": 5459.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "gafuriysky",
    "indicatorId": "bdmo_y48313004",
    "year": 2024,
    "value": 4524.2,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "iglinsky",
    "indicatorId": "bdmo_y48313004",
    "year": 2024,
    "value": 2933.2,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ilishevsky",
    "indicatorId": "bdmo_y48313004",
    "year": 2024,
    "value": 5731.9,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ishimbay",
    "indicatorId": "bdmo_y48313004",
    "year": 2024,
    "value": 2196.7,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kaltasinsky",
    "indicatorId": "bdmo_y48313004",
    "year": 2024,
    "value": 4471.1,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "karaidelsky",
    "indicatorId": "bdmo_y48313004",
    "year": 2024,
    "value": 6069.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "karmaskalinsky",
    "indicatorId": "bdmo_y48313004",
    "year": 2024,
    "value": 3299.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "khaibullinsky",
    "indicatorId": "bdmo_y48313004",
    "year": 2024,
    "value": 4938.1,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kiginsky",
    "indicatorId": "bdmo_y48313004",
    "year": 2024,
    "value": 4110.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "krasnokamsky",
    "indicatorId": "bdmo_y48313004",
    "year": 2024,
    "value": 5308.1,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kugarchinsky",
    "indicatorId": "bdmo_y48313004",
    "year": 2024,
    "value": 3232.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kumertau",
    "indicatorId": "bdmo_y48313004",
    "year": 2024,
    "value": 1559.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kushnarenkovsky",
    "indicatorId": "bdmo_y48313004",
    "year": 2024,
    "value": 4653.2,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kuyurgazinsky",
    "indicatorId": "bdmo_y48313004",
    "year": 2024,
    "value": 5099.1,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "mechetlinsky",
    "indicatorId": "bdmo_y48313004",
    "year": 2024,
    "value": 3657.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "meleuz",
    "indicatorId": "bdmo_y48313004",
    "year": 2024,
    "value": 2359.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "mishkinsky",
    "indicatorId": "bdmo_y48313004",
    "year": 2024,
    "value": 3843.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "miyakinsky",
    "indicatorId": "bdmo_y48313004",
    "year": 2024,
    "value": 5145.7,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "neftekamsk",
    "indicatorId": "bdmo_y48313004",
    "year": 2024,
    "value": 1155.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "nurimanovsky",
    "indicatorId": "bdmo_y48313004",
    "year": 2024,
    "value": 4674.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "oktyabrsky",
    "indicatorId": "bdmo_y48313004",
    "year": 2024,
    "value": 1133.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "salavat",
    "indicatorId": "bdmo_y48313004",
    "year": 2024,
    "value": 1081.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "salavatsky",
    "indicatorId": "bdmo_y48313004",
    "year": 2024,
    "value": 4428.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sharansky",
    "indicatorId": "bdmo_y48313004",
    "year": 2024,
    "value": 5026.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sibay",
    "indicatorId": "bdmo_y48313004",
    "year": 2024,
    "value": 1821.9,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlibashevsky",
    "indicatorId": "bdmo_y48313004",
    "year": 2024,
    "value": 4472.7,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamak",
    "indicatorId": "bdmo_y48313004",
    "year": 2024,
    "value": 848.2,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamaksky",
    "indicatorId": "bdmo_y48313004",
    "year": 2024,
    "value": 3960.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "tatyshlinsky",
    "indicatorId": "bdmo_y48313004",
    "year": 2024,
    "value": 4554.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "tuymazy",
    "indicatorId": "bdmo_y48313004",
    "year": 2024,
    "value": 1880.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "uchaly",
    "indicatorId": "bdmo_y48313004",
    "year": 2024,
    "value": 2908.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufa",
    "indicatorId": "bdmo_y48313004",
    "year": 2024,
    "value": 1666.7,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufimsky",
    "indicatorId": "bdmo_y48313004",
    "year": 2024,
    "value": 3795.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "yanaulsky",
    "indicatorId": "bdmo_y48313004",
    "year": 2024,
    "value": 4033.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "zianchurinsky",
    "indicatorId": "bdmo_y48313004",
    "year": 2024,
    "value": 5232.2,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "zilairsky",
    "indicatorId": "bdmo_y48313004",
    "year": 2024,
    "value": 7638.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "abzelilovsky",
    "indicatorId": "bdmo_y48313015",
    "year": 2024,
    "value": 25.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "agidel",
    "indicatorId": "bdmo_y48313015",
    "year": 2024,
    "value": 27.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "alsheevsky",
    "indicatorId": "bdmo_y48313015",
    "year": 2024,
    "value": 30.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "arkhangelsky",
    "indicatorId": "bdmo_y48313015",
    "year": 2024,
    "value": 26.7,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "askinsky",
    "indicatorId": "bdmo_y48313015",
    "year": 2024,
    "value": 17.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "aurgazinsky",
    "indicatorId": "bdmo_y48313015",
    "year": 2024,
    "value": 24.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "bakalinsky",
    "indicatorId": "bdmo_y48313015",
    "year": 2024,
    "value": 19.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "baltachevsky",
    "indicatorId": "bdmo_y48313015",
    "year": 2024,
    "value": 17.9,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "baymaksky",
    "indicatorId": "bdmo_y48313015",
    "year": 2024,
    "value": 20.2,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "belebeyevsky",
    "indicatorId": "bdmo_y48313015",
    "year": 2024,
    "value": 41.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "belokataysky",
    "indicatorId": "bdmo_y48313015",
    "year": 2024,
    "value": 15.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "beloretsk",
    "indicatorId": "bdmo_y48313015",
    "year": 2024,
    "value": 40.1,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "birsk",
    "indicatorId": "bdmo_y48313015",
    "year": 2024,
    "value": 26.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "bizhbulyaksky",
    "indicatorId": "bdmo_y48313015",
    "year": 2024,
    "value": 21.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "blagovarsky",
    "indicatorId": "bdmo_y48313015",
    "year": 2024,
    "value": 29.9,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "blagoveshchensky",
    "indicatorId": "bdmo_y48313015",
    "year": 2024,
    "value": 40.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "buraevsky",
    "indicatorId": "bdmo_y48313015",
    "year": 2024,
    "value": 16.7,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "burzyansky",
    "indicatorId": "bdmo_y48313015",
    "year": 2024,
    "value": 16.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "buzdyaksky",
    "indicatorId": "bdmo_y48313015",
    "year": 2024,
    "value": 28.9,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "chekmagushevsky",
    "indicatorId": "bdmo_y48313015",
    "year": 2024,
    "value": 23.1,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "chishminsky",
    "indicatorId": "bdmo_y48313015",
    "year": 2024,
    "value": 35.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "davlekanovsky",
    "indicatorId": "bdmo_y48313015",
    "year": 2024,
    "value": 29.2,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "duvansky",
    "indicatorId": "bdmo_y48313015",
    "year": 2024,
    "value": 21.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "dyurtyulinsky",
    "indicatorId": "bdmo_y48313015",
    "year": 2024,
    "value": 31.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ermekeyevsky",
    "indicatorId": "bdmo_y48313015",
    "year": 2024,
    "value": 19.1,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "fedorovsky",
    "indicatorId": "bdmo_y48313015",
    "year": 2024,
    "value": 19.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "gafuriysky",
    "indicatorId": "bdmo_y48313015",
    "year": 2024,
    "value": 19.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "iglinsky",
    "indicatorId": "bdmo_y48313015",
    "year": 2024,
    "value": 41.7,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ilishevsky",
    "indicatorId": "bdmo_y48313015",
    "year": 2024,
    "value": 22.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ishimbay",
    "indicatorId": "bdmo_y48313015",
    "year": 2024,
    "value": 31.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kaltasinsky",
    "indicatorId": "bdmo_y48313015",
    "year": 2024,
    "value": 20.9,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "karaidelsky",
    "indicatorId": "bdmo_y48313015",
    "year": 2024,
    "value": 21.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "karmaskalinsky",
    "indicatorId": "bdmo_y48313015",
    "year": 2024,
    "value": 35.9,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "khaibullinsky",
    "indicatorId": "bdmo_y48313015",
    "year": 2024,
    "value": 24.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kiginsky",
    "indicatorId": "bdmo_y48313015",
    "year": 2024,
    "value": 14.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "krasnokamsky",
    "indicatorId": "bdmo_y48313015",
    "year": 2024,
    "value": 30.9,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kugarchinsky",
    "indicatorId": "bdmo_y48313015",
    "year": 2024,
    "value": 16.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kumertau",
    "indicatorId": "bdmo_y48313015",
    "year": 2024,
    "value": 39.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kushnarenkovsky",
    "indicatorId": "bdmo_y48313015",
    "year": 2024,
    "value": 27.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kuyurgazinsky",
    "indicatorId": "bdmo_y48313015",
    "year": 2024,
    "value": 25.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "mechetlinsky",
    "indicatorId": "bdmo_y48313015",
    "year": 2024,
    "value": 15.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "meleuz",
    "indicatorId": "bdmo_y48313015",
    "year": 2024,
    "value": 40.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "mishkinsky",
    "indicatorId": "bdmo_y48313015",
    "year": 2024,
    "value": 15.7,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "miyakinsky",
    "indicatorId": "bdmo_y48313015",
    "year": 2024,
    "value": 17.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "neftekamsk",
    "indicatorId": "bdmo_y48313015",
    "year": 2024,
    "value": 52.1,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "nurimanovsky",
    "indicatorId": "bdmo_y48313015",
    "year": 2024,
    "value": 23.2,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "oktyabrsky",
    "indicatorId": "bdmo_y48313015",
    "year": 2024,
    "value": 54.7,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "salavat",
    "indicatorId": "bdmo_y48313015",
    "year": 2024,
    "value": 53.7,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "salavatsky",
    "indicatorId": "bdmo_y48313015",
    "year": 2024,
    "value": 21.1,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sharansky",
    "indicatorId": "bdmo_y48313015",
    "year": 2024,
    "value": 16.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sibay",
    "indicatorId": "bdmo_y48313015",
    "year": 2024,
    "value": 34.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamak",
    "indicatorId": "bdmo_y48313015",
    "year": 2024,
    "value": 59.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamaksky",
    "indicatorId": "bdmo_y48313015",
    "year": 2024,
    "value": 38.9,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "tatyshlinsky",
    "indicatorId": "bdmo_y48313015",
    "year": 2024,
    "value": 21.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "tuymazy",
    "indicatorId": "bdmo_y48313015",
    "year": 2024,
    "value": 41.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "uchaly",
    "indicatorId": "bdmo_y48313015",
    "year": 2024,
    "value": 41.2,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufa",
    "indicatorId": "bdmo_y48313015",
    "year": 2024,
    "value": 57.9,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufimsky",
    "indicatorId": "bdmo_y48313015",
    "year": 2024,
    "value": 66.9,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "yanaulsky",
    "indicatorId": "bdmo_y48313015",
    "year": 2024,
    "value": 23.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "zianchurinsky",
    "indicatorId": "bdmo_y48313015",
    "year": 2024,
    "value": 16.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "zilairsky",
    "indicatorId": "bdmo_y48313015",
    "year": 2024,
    "value": 15.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "abzelilovsky",
    "indicatorId": "bdmo_y48401003",
    "year": 2024,
    "value": 227356.9,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "agidel",
    "indicatorId": "bdmo_y48401003",
    "year": 2024,
    "value": 629365.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "alsheevsky",
    "indicatorId": "bdmo_y48401003",
    "year": 2024,
    "value": 200865.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "arkhangelsky",
    "indicatorId": "bdmo_y48401003",
    "year": 2024,
    "value": 672265.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "askinsky",
    "indicatorId": "bdmo_y48401003",
    "year": 2024,
    "value": 310626.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "aurgazinsky",
    "indicatorId": "bdmo_y48401003",
    "year": 2024,
    "value": 2038721.9,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "bakalinsky",
    "indicatorId": "bdmo_y48401003",
    "year": 2024,
    "value": 922824.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "baltachevsky",
    "indicatorId": "bdmo_y48401003",
    "year": 2024,
    "value": 303821.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "baymaksky",
    "indicatorId": "bdmo_y48401003",
    "year": 2024,
    "value": 2973248.9,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "belebeyevsky",
    "indicatorId": "bdmo_y48401003",
    "year": 2024,
    "value": 7555404.2,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "belokataysky",
    "indicatorId": "bdmo_y48401003",
    "year": 2024,
    "value": 219346.1,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "beloretsk",
    "indicatorId": "bdmo_y48401003",
    "year": 2024,
    "value": 5330105.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "birsk",
    "indicatorId": "bdmo_y48401003",
    "year": 2024,
    "value": 2514802.1,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "bizhbulyaksky",
    "indicatorId": "bdmo_y48401003",
    "year": 2024,
    "value": 985855.1,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "blagovarsky",
    "indicatorId": "bdmo_y48401003",
    "year": 2024,
    "value": 1104923.9,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "blagoveshchensky",
    "indicatorId": "bdmo_y48401003",
    "year": 2024,
    "value": 3289947.9,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "buraevsky",
    "indicatorId": "bdmo_y48401003",
    "year": 2024,
    "value": 740463.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "burzyansky",
    "indicatorId": "bdmo_y48401003",
    "year": 2024,
    "value": 631107.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "buzdyaksky",
    "indicatorId": "bdmo_y48401003",
    "year": 2024,
    "value": 914353.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "chekmagushevsky",
    "indicatorId": "bdmo_y48401003",
    "year": 2024,
    "value": 1049157.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "chishminsky",
    "indicatorId": "bdmo_y48401003",
    "year": 2024,
    "value": 2368608.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "davlekanovsky",
    "indicatorId": "bdmo_y48401003",
    "year": 2024,
    "value": 182591.2,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "duvansky",
    "indicatorId": "bdmo_y48401003",
    "year": 2024,
    "value": 1470530.1,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "dyurtyulinsky",
    "indicatorId": "bdmo_y48401003",
    "year": 2024,
    "value": 160106.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ermekeyevsky",
    "indicatorId": "bdmo_y48401003",
    "year": 2024,
    "value": 511079.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "fedorovsky",
    "indicatorId": "bdmo_y48401003",
    "year": 2024,
    "value": 547656.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "gafuriysky",
    "indicatorId": "bdmo_y48401003",
    "year": 2024,
    "value": 864875.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "iglinsky",
    "indicatorId": "bdmo_y48401003",
    "year": 2024,
    "value": 1338401.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ilishevsky",
    "indicatorId": "bdmo_y48401003",
    "year": 2024,
    "value": 2801152.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ishimbay",
    "indicatorId": "bdmo_y48401003",
    "year": 2024,
    "value": 8719807.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kaltasinsky",
    "indicatorId": "bdmo_y48401003",
    "year": 2024,
    "value": 144359.1,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "karaidelsky",
    "indicatorId": "bdmo_y48401003",
    "year": 2024,
    "value": 1349301.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "karmaskalinsky",
    "indicatorId": "bdmo_y48401003",
    "year": 2024,
    "value": 4130080.1,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "khaibullinsky",
    "indicatorId": "bdmo_y48401003",
    "year": 2024,
    "value": 478207.1,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kiginsky",
    "indicatorId": "bdmo_y48401003",
    "year": 2024,
    "value": 272122.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "krasnokamsky",
    "indicatorId": "bdmo_y48401003",
    "year": 2024,
    "value": 1222531.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kugarchinsky",
    "indicatorId": "bdmo_y48401003",
    "year": 2024,
    "value": 884697.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kumertau",
    "indicatorId": "bdmo_y48401003",
    "year": 2024,
    "value": 1665907.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kushnarenkovsky",
    "indicatorId": "bdmo_y48401003",
    "year": 2024,
    "value": 2403687.9,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kuyurgazinsky",
    "indicatorId": "bdmo_y48401003",
    "year": 2024,
    "value": 564621.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "mechetlinsky",
    "indicatorId": "bdmo_y48401003",
    "year": 2024,
    "value": 1544880.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "meleuz",
    "indicatorId": "bdmo_y48401003",
    "year": 2024,
    "value": 2983422.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "mishkinsky",
    "indicatorId": "bdmo_y48401003",
    "year": 2024,
    "value": 1076698.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "miyakinsky",
    "indicatorId": "bdmo_y48401003",
    "year": 2024,
    "value": 675429.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "neftekamsk",
    "indicatorId": "bdmo_y48401003",
    "year": 2024,
    "value": 319471.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "nurimanovsky",
    "indicatorId": "bdmo_y48401003",
    "year": 2024,
    "value": 614057.1,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "oktyabrsky",
    "indicatorId": "bdmo_y48401003",
    "year": 2024,
    "value": 2898083.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "salavat",
    "indicatorId": "bdmo_y48401003",
    "year": 2024,
    "value": 417521.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "salavatsky",
    "indicatorId": "bdmo_y48401003",
    "year": 2024,
    "value": 1918736.1,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sharansky",
    "indicatorId": "bdmo_y48401003",
    "year": 2024,
    "value": 735200.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sibay",
    "indicatorId": "bdmo_y48401003",
    "year": 2024,
    "value": 1602957.7,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlibashevsky",
    "indicatorId": "bdmo_y48401003",
    "year": 2024,
    "value": 1010581.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamak",
    "indicatorId": "bdmo_y48401003",
    "year": 2024,
    "value": 925386.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamaksky",
    "indicatorId": "bdmo_y48401003",
    "year": 2024,
    "value": 1856077.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "tatyshlinsky",
    "indicatorId": "bdmo_y48401003",
    "year": 2024,
    "value": 970180.2,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "tuymazy",
    "indicatorId": "bdmo_y48401003",
    "year": 2024,
    "value": 4090652.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "uchaly",
    "indicatorId": "bdmo_y48401003",
    "year": 2024,
    "value": 237090.9,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufa",
    "indicatorId": "bdmo_y48401003",
    "year": 2024,
    "value": 50065777.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufimsky",
    "indicatorId": "bdmo_y48401003",
    "year": 2024,
    "value": 4852691.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "yanaulsky",
    "indicatorId": "bdmo_y48401003",
    "year": 2024,
    "value": 935385.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "zianchurinsky",
    "indicatorId": "bdmo_y48401003",
    "year": 2024,
    "value": 222562.7,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "zilairsky",
    "indicatorId": "bdmo_y48401003",
    "year": 2024,
    "value": 381991.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "abzelilovsky",
    "indicatorId": "bdmo_y48401006",
    "year": 2024,
    "value": 128568.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "bakalinsky",
    "indicatorId": "bdmo_y48401006",
    "year": 2024,
    "value": 10291.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "baymaksky",
    "indicatorId": "bdmo_y48401006",
    "year": 2024,
    "value": 4489.1,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "belebeyevsky",
    "indicatorId": "bdmo_y48401006",
    "year": 2024,
    "value": 13648.2,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "beloretsk",
    "indicatorId": "bdmo_y48401006",
    "year": 2024,
    "value": 116431.7,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "birsk",
    "indicatorId": "bdmo_y48401006",
    "year": 2024,
    "value": 469.1,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "bizhbulyaksky",
    "indicatorId": "bdmo_y48401006",
    "year": 2024,
    "value": 10.2,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "blagoveshchensky",
    "indicatorId": "bdmo_y48401006",
    "year": 2024,
    "value": 32338.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "buzdyaksky",
    "indicatorId": "bdmo_y48401006",
    "year": 2024,
    "value": 2030.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "davlekanovsky",
    "indicatorId": "bdmo_y48401006",
    "year": 2024,
    "value": 223.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "duvansky",
    "indicatorId": "bdmo_y48401006",
    "year": 2024,
    "value": 3788.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "dyurtyulinsky",
    "indicatorId": "bdmo_y48401006",
    "year": 2024,
    "value": 20273.7,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ermekeyevsky",
    "indicatorId": "bdmo_y48401006",
    "year": 2024,
    "value": 14.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ishimbay",
    "indicatorId": "bdmo_y48401006",
    "year": 2024,
    "value": 20406.9,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "karaidelsky",
    "indicatorId": "bdmo_y48401006",
    "year": 2024,
    "value": 7833.7,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "khaibullinsky",
    "indicatorId": "bdmo_y48401006",
    "year": 2024,
    "value": 10597.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kugarchinsky",
    "indicatorId": "bdmo_y48401006",
    "year": 2024,
    "value": 4612.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kumertau",
    "indicatorId": "bdmo_y48401006",
    "year": 2024,
    "value": 48738.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kushnarenkovsky",
    "indicatorId": "bdmo_y48401006",
    "year": 2024,
    "value": 5770.2,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "mechetlinsky",
    "indicatorId": "bdmo_y48401006",
    "year": 2024,
    "value": 4814.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "meleuz",
    "indicatorId": "bdmo_y48401006",
    "year": 2024,
    "value": 8654.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "mishkinsky",
    "indicatorId": "bdmo_y48401006",
    "year": 2024,
    "value": 626.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "neftekamsk",
    "indicatorId": "bdmo_y48401006",
    "year": 2024,
    "value": 120011.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "oktyabrsky",
    "indicatorId": "bdmo_y48401006",
    "year": 2024,
    "value": 254220.2,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "salavat",
    "indicatorId": "bdmo_y48401006",
    "year": 2024,
    "value": 102000.7,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sharansky",
    "indicatorId": "bdmo_y48401006",
    "year": 2024,
    "value": 20548.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sibay",
    "indicatorId": "bdmo_y48401006",
    "year": 2024,
    "value": 8228.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamak",
    "indicatorId": "bdmo_y48401006",
    "year": 2024,
    "value": 236539.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamaksky",
    "indicatorId": "bdmo_y48401006",
    "year": 2024,
    "value": 24437.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "tuymazy",
    "indicatorId": "bdmo_y48401006",
    "year": 2024,
    "value": 146211.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufa",
    "indicatorId": "bdmo_y48401006",
    "year": 2024,
    "value": 2654418.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufimsky",
    "indicatorId": "bdmo_y48401006",
    "year": 2024,
    "value": 1355614.2,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "zianchurinsky",
    "indicatorId": "bdmo_y48401006",
    "year": 2024,
    "value": 13362.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "abzelilovsky",
    "indicatorId": "bdmo_y48401008",
    "year": 2024,
    "value": 65019.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "agidel",
    "indicatorId": "bdmo_y48401008",
    "year": 2024,
    "value": 278299.2,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "alsheevsky",
    "indicatorId": "bdmo_y48401008",
    "year": 2024,
    "value": 9845924.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "arkhangelsky",
    "indicatorId": "bdmo_y48401008",
    "year": 2024,
    "value": 227856.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "askinsky",
    "indicatorId": "bdmo_y48401008",
    "year": 2024,
    "value": 96792.1,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "aurgazinsky",
    "indicatorId": "bdmo_y48401008",
    "year": 2024,
    "value": 683587.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "bakalinsky",
    "indicatorId": "bdmo_y48401008",
    "year": 2024,
    "value": 111732.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "baltachevsky",
    "indicatorId": "bdmo_y48401008",
    "year": 2024,
    "value": 179835.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "baymaksky",
    "indicatorId": "bdmo_y48401008",
    "year": 2024,
    "value": 2669411.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "belebeyevsky",
    "indicatorId": "bdmo_y48401008",
    "year": 2024,
    "value": 5582082.1,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "belokataysky",
    "indicatorId": "bdmo_y48401008",
    "year": 2024,
    "value": 217093.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "beloretsk",
    "indicatorId": "bdmo_y48401008",
    "year": 2024,
    "value": 42644025.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "birsk",
    "indicatorId": "bdmo_y48401008",
    "year": 2024,
    "value": 666276.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "bizhbulyaksky",
    "indicatorId": "bdmo_y48401008",
    "year": 2024,
    "value": 125868.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "blagovarsky",
    "indicatorId": "bdmo_y48401008",
    "year": 2024,
    "value": 6081315.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "blagoveshchensky",
    "indicatorId": "bdmo_y48401008",
    "year": 2024,
    "value": 10271976.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "buraevsky",
    "indicatorId": "bdmo_y48401008",
    "year": 2024,
    "value": 111022.1,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "burzyansky",
    "indicatorId": "bdmo_y48401008",
    "year": 2024,
    "value": 40275.1,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "buzdyaksky",
    "indicatorId": "bdmo_y48401008",
    "year": 2024,
    "value": 3808623.7,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "chekmagushevsky",
    "indicatorId": "bdmo_y48401008",
    "year": 2024,
    "value": 94359.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "chishminsky",
    "indicatorId": "bdmo_y48401008",
    "year": 2024,
    "value": 9074627.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "davlekanovsky",
    "indicatorId": "bdmo_y48401008",
    "year": 2024,
    "value": 9626836.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "duvansky",
    "indicatorId": "bdmo_y48401008",
    "year": 2024,
    "value": 11967.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "dyurtyulinsky",
    "indicatorId": "bdmo_y48401008",
    "year": 2024,
    "value": 1762472.1,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ermekeyevsky",
    "indicatorId": "bdmo_y48401008",
    "year": 2024,
    "value": 453702.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "fedorovsky",
    "indicatorId": "bdmo_y48401008",
    "year": 2024,
    "value": 339791.1,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "gafuriysky",
    "indicatorId": "bdmo_y48401008",
    "year": 2024,
    "value": 1036832.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "iglinsky",
    "indicatorId": "bdmo_y48401008",
    "year": 2024,
    "value": 78477.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ilishevsky",
    "indicatorId": "bdmo_y48401008",
    "year": 2024,
    "value": 596578.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ishimbay",
    "indicatorId": "bdmo_y48401008",
    "year": 2024,
    "value": 512962.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kaltasinsky",
    "indicatorId": "bdmo_y48401008",
    "year": 2024,
    "value": 1079154.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "karaidelsky",
    "indicatorId": "bdmo_y48401008",
    "year": 2024,
    "value": 644948.7,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "karmaskalinsky",
    "indicatorId": "bdmo_y48401008",
    "year": 2024,
    "value": 1965341.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "khaibullinsky",
    "indicatorId": "bdmo_y48401008",
    "year": 2024,
    "value": 3892397.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kiginsky",
    "indicatorId": "bdmo_y48401008",
    "year": 2024,
    "value": 96325.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "krasnokamsky",
    "indicatorId": "bdmo_y48401008",
    "year": 2024,
    "value": 2441712.7,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kugarchinsky",
    "indicatorId": "bdmo_y48401008",
    "year": 2024,
    "value": 271846.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kumertau",
    "indicatorId": "bdmo_y48401008",
    "year": 2024,
    "value": 2051123.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kushnarenkovsky",
    "indicatorId": "bdmo_y48401008",
    "year": 2024,
    "value": 1206441.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kuyurgazinsky",
    "indicatorId": "bdmo_y48401008",
    "year": 2024,
    "value": 7764.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "mechetlinsky",
    "indicatorId": "bdmo_y48401008",
    "year": 2024,
    "value": 38140.7,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "meleuz",
    "indicatorId": "bdmo_y48401008",
    "year": 2024,
    "value": 5807771.9,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "mishkinsky",
    "indicatorId": "bdmo_y48401008",
    "year": 2024,
    "value": 196606.7,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "miyakinsky",
    "indicatorId": "bdmo_y48401008",
    "year": 2024,
    "value": 27871.2,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "neftekamsk",
    "indicatorId": "bdmo_y48401008",
    "year": 2024,
    "value": 3368970.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "nurimanovsky",
    "indicatorId": "bdmo_y48401008",
    "year": 2024,
    "value": 446111.7,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "oktyabrsky",
    "indicatorId": "bdmo_y48401008",
    "year": 2024,
    "value": 34614577.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "salavat",
    "indicatorId": "bdmo_y48401008",
    "year": 2024,
    "value": 7137687.7,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "salavatsky",
    "indicatorId": "bdmo_y48401008",
    "year": 2024,
    "value": 2814309.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sharansky",
    "indicatorId": "bdmo_y48401008",
    "year": 2024,
    "value": 388933.7,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sibay",
    "indicatorId": "bdmo_y48401008",
    "year": 2024,
    "value": 2202612.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlibashevsky",
    "indicatorId": "bdmo_y48401008",
    "year": 2024,
    "value": 1004867.1,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamak",
    "indicatorId": "bdmo_y48401008",
    "year": 2024,
    "value": 137026188.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamaksky",
    "indicatorId": "bdmo_y48401008",
    "year": 2024,
    "value": 3732393.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "tatyshlinsky",
    "indicatorId": "bdmo_y48401008",
    "year": 2024,
    "value": 6017268.9,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "tuymazy",
    "indicatorId": "bdmo_y48401008",
    "year": 2024,
    "value": 332188.1,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "uchaly",
    "indicatorId": "bdmo_y48401008",
    "year": 2024,
    "value": 22527398.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufa",
    "indicatorId": "bdmo_y48401008",
    "year": 2024,
    "value": 868448053.2,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufimsky",
    "indicatorId": "bdmo_y48401008",
    "year": 2024,
    "value": 224233.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "yanaulsky",
    "indicatorId": "bdmo_y48401008",
    "year": 2024,
    "value": 6176773.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "zianchurinsky",
    "indicatorId": "bdmo_y48401008",
    "year": 2024,
    "value": 923955.2,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "zilairsky",
    "indicatorId": "bdmo_y48401008",
    "year": 2024,
    "value": 249185.9,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "abzelilovsky",
    "indicatorId": "bdmo_y48401011",
    "year": 2024,
    "value": 6388913.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "agidel",
    "indicatorId": "bdmo_y48401011",
    "year": 2024,
    "value": 589185.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "alsheevsky",
    "indicatorId": "bdmo_y48401011",
    "year": 2024,
    "value": 241838.7,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "arkhangelsky",
    "indicatorId": "bdmo_y48401011",
    "year": 2024,
    "value": 14144.2,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "askinsky",
    "indicatorId": "bdmo_y48401011",
    "year": 2024,
    "value": 375682.9,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "aurgazinsky",
    "indicatorId": "bdmo_y48401011",
    "year": 2024,
    "value": 5214544.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "bakalinsky",
    "indicatorId": "bdmo_y48401011",
    "year": 2024,
    "value": 112522.1,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "baltachevsky",
    "indicatorId": "bdmo_y48401011",
    "year": 2024,
    "value": 577137.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "baymaksky",
    "indicatorId": "bdmo_y48401011",
    "year": 2024,
    "value": 1367815.7,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "belebeyevsky",
    "indicatorId": "bdmo_y48401011",
    "year": 2024,
    "value": 16828493.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "belokataysky",
    "indicatorId": "bdmo_y48401011",
    "year": 2024,
    "value": 226705.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "beloretsk",
    "indicatorId": "bdmo_y48401011",
    "year": 2024,
    "value": 13692213.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "birsk",
    "indicatorId": "bdmo_y48401011",
    "year": 2024,
    "value": 3245920.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "bizhbulyaksky",
    "indicatorId": "bdmo_y48401011",
    "year": 2024,
    "value": 129377.1,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "blagovarsky",
    "indicatorId": "bdmo_y48401011",
    "year": 2024,
    "value": 6082925.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "blagoveshchensky",
    "indicatorId": "bdmo_y48401011",
    "year": 2024,
    "value": 25643053.7,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "buraevsky",
    "indicatorId": "bdmo_y48401011",
    "year": 2024,
    "value": 16842533.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "burzyansky",
    "indicatorId": "bdmo_y48401011",
    "year": 2024,
    "value": 215988.2,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "buzdyaksky",
    "indicatorId": "bdmo_y48401011",
    "year": 2024,
    "value": 2620552.9,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "chekmagushevsky",
    "indicatorId": "bdmo_y48401011",
    "year": 2024,
    "value": 4139170.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "chishminsky",
    "indicatorId": "bdmo_y48401011",
    "year": 2024,
    "value": 11742379.2,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "davlekanovsky",
    "indicatorId": "bdmo_y48401011",
    "year": 2024,
    "value": 3862066.7,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "duvansky",
    "indicatorId": "bdmo_y48401011",
    "year": 2024,
    "value": 209212.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "dyurtyulinsky",
    "indicatorId": "bdmo_y48401011",
    "year": 2024,
    "value": 1480625.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ermekeyevsky",
    "indicatorId": "bdmo_y48401011",
    "year": 2024,
    "value": 454502.9,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "fedorovsky",
    "indicatorId": "bdmo_y48401011",
    "year": 2024,
    "value": 235914.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "gafuriysky",
    "indicatorId": "bdmo_y48401011",
    "year": 2024,
    "value": 198736.1,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "iglinsky",
    "indicatorId": "bdmo_y48401011",
    "year": 2024,
    "value": 1332831.1,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ilishevsky",
    "indicatorId": "bdmo_y48401011",
    "year": 2024,
    "value": 598990.1,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ishimbay",
    "indicatorId": "bdmo_y48401011",
    "year": 2024,
    "value": 179743.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kaltasinsky",
    "indicatorId": "bdmo_y48401011",
    "year": 2024,
    "value": 94745.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "karaidelsky",
    "indicatorId": "bdmo_y48401011",
    "year": 2024,
    "value": 22294.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "karmaskalinsky",
    "indicatorId": "bdmo_y48401011",
    "year": 2024,
    "value": 1347991.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "khaibullinsky",
    "indicatorId": "bdmo_y48401011",
    "year": 2024,
    "value": 11581707.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kiginsky",
    "indicatorId": "bdmo_y48401011",
    "year": 2024,
    "value": 409653.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "krasnokamsky",
    "indicatorId": "bdmo_y48401011",
    "year": 2024,
    "value": 3953792.7,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kugarchinsky",
    "indicatorId": "bdmo_y48401011",
    "year": 2024,
    "value": 84601.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kumertau",
    "indicatorId": "bdmo_y48401011",
    "year": 2024,
    "value": 3069525.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kushnarenkovsky",
    "indicatorId": "bdmo_y48401011",
    "year": 2024,
    "value": 654399.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kuyurgazinsky",
    "indicatorId": "bdmo_y48401011",
    "year": 2024,
    "value": 1090557.7,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "mechetlinsky",
    "indicatorId": "bdmo_y48401011",
    "year": 2024,
    "value": 54318.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "meleuz",
    "indicatorId": "bdmo_y48401011",
    "year": 2024,
    "value": 20842275.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "mishkinsky",
    "indicatorId": "bdmo_y48401011",
    "year": 2024,
    "value": 133725.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "miyakinsky",
    "indicatorId": "bdmo_y48401011",
    "year": 2024,
    "value": 44160.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "neftekamsk",
    "indicatorId": "bdmo_y48401011",
    "year": 2024,
    "value": 102353573.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "nurimanovsky",
    "indicatorId": "bdmo_y48401011",
    "year": 2024,
    "value": 2482878.1,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "oktyabrsky",
    "indicatorId": "bdmo_y48401011",
    "year": 2024,
    "value": 10796297.2,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "salavat",
    "indicatorId": "bdmo_y48401011",
    "year": 2024,
    "value": 254940717.9,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "salavatsky",
    "indicatorId": "bdmo_y48401011",
    "year": 2024,
    "value": 1486367.7,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sharansky",
    "indicatorId": "bdmo_y48401011",
    "year": 2024,
    "value": 389393.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sibay",
    "indicatorId": "bdmo_y48401011",
    "year": 2024,
    "value": 2200163.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlibashevsky",
    "indicatorId": "bdmo_y48401011",
    "year": 2024,
    "value": 1248263.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamak",
    "indicatorId": "bdmo_y48401011",
    "year": 2024,
    "value": 153886790.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamaksky",
    "indicatorId": "bdmo_y48401011",
    "year": 2024,
    "value": 9857860.1,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "tatyshlinsky",
    "indicatorId": "bdmo_y48401011",
    "year": 2024,
    "value": 15277313.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "tuymazy",
    "indicatorId": "bdmo_y48401011",
    "year": 2024,
    "value": 445091.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "uchaly",
    "indicatorId": "bdmo_y48401011",
    "year": 2024,
    "value": 21502474.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufa",
    "indicatorId": "bdmo_y48401011",
    "year": 2024,
    "value": 9184142.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufimsky",
    "indicatorId": "bdmo_y48401011",
    "year": 2024,
    "value": 1136806.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "yanaulsky",
    "indicatorId": "bdmo_y48401011",
    "year": 2024,
    "value": 2223428.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "zianchurinsky",
    "indicatorId": "bdmo_y48401011",
    "year": 2024,
    "value": 600000.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "zilairsky",
    "indicatorId": "bdmo_y48401011",
    "year": 2024,
    "value": 147745.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "abzelilovsky",
    "indicatorId": "bdmo_y48401012",
    "year": 2024,
    "value": 2096783.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "agidel",
    "indicatorId": "bdmo_y48401012",
    "year": 2024,
    "value": 844127.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "alsheevsky",
    "indicatorId": "bdmo_y48401012",
    "year": 2024,
    "value": 1541278.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "arkhangelsky",
    "indicatorId": "bdmo_y48401012",
    "year": 2024,
    "value": 580182.7,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "askinsky",
    "indicatorId": "bdmo_y48401012",
    "year": 2024,
    "value": 639208.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "aurgazinsky",
    "indicatorId": "bdmo_y48401012",
    "year": 2024,
    "value": 466559.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "bakalinsky",
    "indicatorId": "bdmo_y48401012",
    "year": 2024,
    "value": 925679.9,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "baltachevsky",
    "indicatorId": "bdmo_y48401012",
    "year": 2024,
    "value": 635400.2,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "baymaksky",
    "indicatorId": "bdmo_y48401012",
    "year": 2024,
    "value": 2892245.1,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "belebeyevsky",
    "indicatorId": "bdmo_y48401012",
    "year": 2024,
    "value": 262202.7,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "belokataysky",
    "indicatorId": "bdmo_y48401012",
    "year": 2024,
    "value": 721021.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "beloretsk",
    "indicatorId": "bdmo_y48401012",
    "year": 2024,
    "value": 787539.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "birsk",
    "indicatorId": "bdmo_y48401012",
    "year": 2024,
    "value": 6548931.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "bizhbulyaksky",
    "indicatorId": "bdmo_y48401012",
    "year": 2024,
    "value": 602830.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "blagovarsky",
    "indicatorId": "bdmo_y48401012",
    "year": 2024,
    "value": 1754045.1,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "blagoveshchensky",
    "indicatorId": "bdmo_y48401012",
    "year": 2024,
    "value": 682687.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "buraevsky",
    "indicatorId": "bdmo_y48401012",
    "year": 2024,
    "value": 2008228.2,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "burzyansky",
    "indicatorId": "bdmo_y48401012",
    "year": 2024,
    "value": 377274.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "buzdyaksky",
    "indicatorId": "bdmo_y48401012",
    "year": 2024,
    "value": 1006721.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "chekmagushevsky",
    "indicatorId": "bdmo_y48401012",
    "year": 2024,
    "value": 131615.9,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "chishminsky",
    "indicatorId": "bdmo_y48401012",
    "year": 2024,
    "value": 1719565.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "davlekanovsky",
    "indicatorId": "bdmo_y48401012",
    "year": 2024,
    "value": 1305701.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "duvansky",
    "indicatorId": "bdmo_y48401012",
    "year": 2024,
    "value": 264851.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "dyurtyulinsky",
    "indicatorId": "bdmo_y48401012",
    "year": 2024,
    "value": 1487949.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ermekeyevsky",
    "indicatorId": "bdmo_y48401012",
    "year": 2024,
    "value": 138668.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "fedorovsky",
    "indicatorId": "bdmo_y48401012",
    "year": 2024,
    "value": 55342.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "gafuriysky",
    "indicatorId": "bdmo_y48401012",
    "year": 2024,
    "value": 1672674.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "iglinsky",
    "indicatorId": "bdmo_y48401012",
    "year": 2024,
    "value": 12356941.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ilishevsky",
    "indicatorId": "bdmo_y48401012",
    "year": 2024,
    "value": 698193.2,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ishimbay",
    "indicatorId": "bdmo_y48401012",
    "year": 2024,
    "value": 9059647.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kaltasinsky",
    "indicatorId": "bdmo_y48401012",
    "year": 2024,
    "value": 742503.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "karaidelsky",
    "indicatorId": "bdmo_y48401012",
    "year": 2024,
    "value": 306986.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "karmaskalinsky",
    "indicatorId": "bdmo_y48401012",
    "year": 2024,
    "value": 3190476.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "khaibullinsky",
    "indicatorId": "bdmo_y48401012",
    "year": 2024,
    "value": 619423.7,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kiginsky",
    "indicatorId": "bdmo_y48401012",
    "year": 2024,
    "value": 105399.9,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "krasnokamsky",
    "indicatorId": "bdmo_y48401012",
    "year": 2024,
    "value": 1044853.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kugarchinsky",
    "indicatorId": "bdmo_y48401012",
    "year": 2024,
    "value": 1480029.7,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kumertau",
    "indicatorId": "bdmo_y48401012",
    "year": 2024,
    "value": 1880472.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kushnarenkovsky",
    "indicatorId": "bdmo_y48401012",
    "year": 2024,
    "value": 1672056.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kuyurgazinsky",
    "indicatorId": "bdmo_y48401012",
    "year": 2024,
    "value": 589603.1,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "mechetlinsky",
    "indicatorId": "bdmo_y48401012",
    "year": 2024,
    "value": 150253.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "meleuz",
    "indicatorId": "bdmo_y48401012",
    "year": 2024,
    "value": 4227627.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "mishkinsky",
    "indicatorId": "bdmo_y48401012",
    "year": 2024,
    "value": 232703.7,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "miyakinsky",
    "indicatorId": "bdmo_y48401012",
    "year": 2024,
    "value": 1478329.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "neftekamsk",
    "indicatorId": "bdmo_y48401012",
    "year": 2024,
    "value": 3036489.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "nurimanovsky",
    "indicatorId": "bdmo_y48401012",
    "year": 2024,
    "value": 1040319.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "oktyabrsky",
    "indicatorId": "bdmo_y48401012",
    "year": 2024,
    "value": 7627860.2,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "salavat",
    "indicatorId": "bdmo_y48401012",
    "year": 2024,
    "value": 31231274.2,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "salavatsky",
    "indicatorId": "bdmo_y48401012",
    "year": 2024,
    "value": 1945251.1,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sharansky",
    "indicatorId": "bdmo_y48401012",
    "year": 2024,
    "value": 1013571.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sibay",
    "indicatorId": "bdmo_y48401012",
    "year": 2024,
    "value": 7642841.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlibashevsky",
    "indicatorId": "bdmo_y48401012",
    "year": 2024,
    "value": 75632.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamak",
    "indicatorId": "bdmo_y48401012",
    "year": 2024,
    "value": 2596523.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamaksky",
    "indicatorId": "bdmo_y48401012",
    "year": 2024,
    "value": 1334734.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "tatyshlinsky",
    "indicatorId": "bdmo_y48401012",
    "year": 2024,
    "value": 1969899.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "tuymazy",
    "indicatorId": "bdmo_y48401012",
    "year": 2024,
    "value": 7299131.7,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "uchaly",
    "indicatorId": "bdmo_y48401012",
    "year": 2024,
    "value": 5615837.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufa",
    "indicatorId": "bdmo_y48401012",
    "year": 2024,
    "value": 920272891.9,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufimsky",
    "indicatorId": "bdmo_y48401012",
    "year": 2024,
    "value": 73591165.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "yanaulsky",
    "indicatorId": "bdmo_y48401012",
    "year": 2024,
    "value": 3779474.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "zianchurinsky",
    "indicatorId": "bdmo_y48401012",
    "year": 2024,
    "value": 773270.1,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "zilairsky",
    "indicatorId": "bdmo_y48401012",
    "year": 2024,
    "value": 179452.9,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "abzelilovsky",
    "indicatorId": "bdmo_y48406005",
    "year": 2024,
    "value": 467.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "alsheevsky",
    "indicatorId": "bdmo_y48406005",
    "year": 2024,
    "value": 444.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "askinsky",
    "indicatorId": "bdmo_y48406005",
    "year": 2024,
    "value": 425.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "aurgazinsky",
    "indicatorId": "bdmo_y48406005",
    "year": 2024,
    "value": 223.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "bakalinsky",
    "indicatorId": "bdmo_y48406005",
    "year": 2024,
    "value": 2629.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "baltachevsky",
    "indicatorId": "bdmo_y48406005",
    "year": 2024,
    "value": 474.2,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "baymaksky",
    "indicatorId": "bdmo_y48406005",
    "year": 2024,
    "value": 244.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "belebeyevsky",
    "indicatorId": "bdmo_y48406005",
    "year": 2024,
    "value": 140.2,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "belokataysky",
    "indicatorId": "bdmo_y48406005",
    "year": 2024,
    "value": 1052.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "beloretsk",
    "indicatorId": "bdmo_y48406005",
    "year": 2024,
    "value": 3012.1,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "birsk",
    "indicatorId": "bdmo_y48406005",
    "year": 2024,
    "value": 125.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "bizhbulyaksky",
    "indicatorId": "bdmo_y48406005",
    "year": 2024,
    "value": 438.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "blagovarsky",
    "indicatorId": "bdmo_y48406005",
    "year": 2024,
    "value": 201.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "blagoveshchensky",
    "indicatorId": "bdmo_y48406005",
    "year": 2024,
    "value": 68.7,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "buraevsky",
    "indicatorId": "bdmo_y48406005",
    "year": 2024,
    "value": 940.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "burzyansky",
    "indicatorId": "bdmo_y48406005",
    "year": 2024,
    "value": 834.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "buzdyaksky",
    "indicatorId": "bdmo_y48406005",
    "year": 2024,
    "value": 324.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "chekmagushevsky",
    "indicatorId": "bdmo_y48406005",
    "year": 2024,
    "value": 285.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "chishminsky",
    "indicatorId": "bdmo_y48406005",
    "year": 2024,
    "value": 632.9,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "davlekanovsky",
    "indicatorId": "bdmo_y48406005",
    "year": 2024,
    "value": 280.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "duvansky",
    "indicatorId": "bdmo_y48406005",
    "year": 2024,
    "value": 545.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "dyurtyulinsky",
    "indicatorId": "bdmo_y48406005",
    "year": 2024,
    "value": 274.7,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ermekeyevsky",
    "indicatorId": "bdmo_y48406005",
    "year": 2024,
    "value": 1060.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "fedorovsky",
    "indicatorId": "bdmo_y48406005",
    "year": 2024,
    "value": 367.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "gafuriysky",
    "indicatorId": "bdmo_y48406005",
    "year": 2024,
    "value": 560.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "iglinsky",
    "indicatorId": "bdmo_y48406005",
    "year": 2024,
    "value": 289.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ilishevsky",
    "indicatorId": "bdmo_y48406005",
    "year": 2024,
    "value": 630.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ishimbay",
    "indicatorId": "bdmo_y48406005",
    "year": 2024,
    "value": 630.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kaltasinsky",
    "indicatorId": "bdmo_y48406005",
    "year": 2024,
    "value": 159.1,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "karaidelsky",
    "indicatorId": "bdmo_y48406005",
    "year": 2024,
    "value": 460.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "karmaskalinsky",
    "indicatorId": "bdmo_y48406005",
    "year": 2024,
    "value": 413.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "khaibullinsky",
    "indicatorId": "bdmo_y48406005",
    "year": 2024,
    "value": 931.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kiginsky",
    "indicatorId": "bdmo_y48406005",
    "year": 2024,
    "value": 785.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "krasnokamsky",
    "indicatorId": "bdmo_y48406005",
    "year": 2024,
    "value": 174.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kugarchinsky",
    "indicatorId": "bdmo_y48406005",
    "year": 2024,
    "value": 470.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kumertau",
    "indicatorId": "bdmo_y48406005",
    "year": 2024,
    "value": 1010.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kushnarenkovsky",
    "indicatorId": "bdmo_y48406005",
    "year": 2024,
    "value": 194.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kuyurgazinsky",
    "indicatorId": "bdmo_y48406005",
    "year": 2024,
    "value": 567.9,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "mechetlinsky",
    "indicatorId": "bdmo_y48406005",
    "year": 2024,
    "value": 479.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "meleuz",
    "indicatorId": "bdmo_y48406005",
    "year": 2024,
    "value": 1772.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "mishkinsky",
    "indicatorId": "bdmo_y48406005",
    "year": 2024,
    "value": 306.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "miyakinsky",
    "indicatorId": "bdmo_y48406005",
    "year": 2024,
    "value": 163.7,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "neftekamsk",
    "indicatorId": "bdmo_y48406005",
    "year": 2024,
    "value": 775.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "nurimanovsky",
    "indicatorId": "bdmo_y48406005",
    "year": 2024,
    "value": 69.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "oktyabrsky",
    "indicatorId": "bdmo_y48406005",
    "year": 2024,
    "value": 392.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "salavat",
    "indicatorId": "bdmo_y48406005",
    "year": 2024,
    "value": 886.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "salavatsky",
    "indicatorId": "bdmo_y48406005",
    "year": 2024,
    "value": 145.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sharansky",
    "indicatorId": "bdmo_y48406005",
    "year": 2024,
    "value": 710.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sibay",
    "indicatorId": "bdmo_y48406005",
    "year": 2024,
    "value": 223.1,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlibashevsky",
    "indicatorId": "bdmo_y48406005",
    "year": 2024,
    "value": 957.1,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamak",
    "indicatorId": "bdmo_y48406005",
    "year": 2024,
    "value": 1296.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamaksky",
    "indicatorId": "bdmo_y48406005",
    "year": 2024,
    "value": 748.2,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "tatyshlinsky",
    "indicatorId": "bdmo_y48406005",
    "year": 2024,
    "value": 228.7,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "tuymazy",
    "indicatorId": "bdmo_y48406005",
    "year": 2024,
    "value": 1161.9,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "uchaly",
    "indicatorId": "bdmo_y48406005",
    "year": 2024,
    "value": 494.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufa",
    "indicatorId": "bdmo_y48406005",
    "year": 2024,
    "value": 9139.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufimsky",
    "indicatorId": "bdmo_y48406005",
    "year": 2024,
    "value": 345.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "yanaulsky",
    "indicatorId": "bdmo_y48406005",
    "year": 2024,
    "value": 383.2,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "zianchurinsky",
    "indicatorId": "bdmo_y48406005",
    "year": 2024,
    "value": 414.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "zilairsky",
    "indicatorId": "bdmo_y48406005",
    "year": 2024,
    "value": 109.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "abzelilovsky",
    "indicatorId": "bdmo_y48801004",
    "year": 2024,
    "value": 2563241.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "agidel",
    "indicatorId": "bdmo_y48801004",
    "year": 2024,
    "value": 1634041.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "alsheevsky",
    "indicatorId": "bdmo_y48801004",
    "year": 2024,
    "value": 2476315.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "arkhangelsky",
    "indicatorId": "bdmo_y48801004",
    "year": 2024,
    "value": 1150195.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "askinsky",
    "indicatorId": "bdmo_y48801004",
    "year": 2024,
    "value": 1258320.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "aurgazinsky",
    "indicatorId": "bdmo_y48801004",
    "year": 2024,
    "value": 1721755.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "bakalinsky",
    "indicatorId": "bdmo_y48801004",
    "year": 2024,
    "value": 2094475.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "baltachevsky",
    "indicatorId": "bdmo_y48801004",
    "year": 2024,
    "value": 1752957.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "baymaksky",
    "indicatorId": "bdmo_y48801004",
    "year": 2024,
    "value": 3996797.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "belebeyevsky",
    "indicatorId": "bdmo_y48801004",
    "year": 2024,
    "value": 11179788.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "belokataysky",
    "indicatorId": "bdmo_y48801004",
    "year": 2024,
    "value": 1148005.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "beloretsk",
    "indicatorId": "bdmo_y48801004",
    "year": 2024,
    "value": 13319680.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "birsk",
    "indicatorId": "bdmo_y48801004",
    "year": 2024,
    "value": 8088220.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "bizhbulyaksky",
    "indicatorId": "bdmo_y48801004",
    "year": 2024,
    "value": 1190373.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "blagovarsky",
    "indicatorId": "bdmo_y48801004",
    "year": 2024,
    "value": 1204897.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "blagoveshchensky",
    "indicatorId": "bdmo_y48801004",
    "year": 2024,
    "value": 7174057.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "buraevsky",
    "indicatorId": "bdmo_y48801004",
    "year": 2024,
    "value": 1531214.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "burzyansky",
    "indicatorId": "bdmo_y48801004",
    "year": 2024,
    "value": 851408.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "buzdyaksky",
    "indicatorId": "bdmo_y48801004",
    "year": 2024,
    "value": 1774813.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "chekmagushevsky",
    "indicatorId": "bdmo_y48801004",
    "year": 2024,
    "value": 1956799.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "chishminsky",
    "indicatorId": "bdmo_y48801004",
    "year": 2024,
    "value": 4478756.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "davlekanovsky",
    "indicatorId": "bdmo_y48801004",
    "year": 2024,
    "value": 3859453.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "duvansky",
    "indicatorId": "bdmo_y48801004",
    "year": 2024,
    "value": 2465050.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "dyurtyulinsky",
    "indicatorId": "bdmo_y48801004",
    "year": 2024,
    "value": 5676766.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ermekeyevsky",
    "indicatorId": "bdmo_y48801004",
    "year": 2024,
    "value": 598968.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "fedorovsky",
    "indicatorId": "bdmo_y48801004",
    "year": 2024,
    "value": 730550.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "gafuriysky",
    "indicatorId": "bdmo_y48801004",
    "year": 2024,
    "value": 2296154.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "iglinsky",
    "indicatorId": "bdmo_y48801004",
    "year": 2024,
    "value": 8890713.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ilishevsky",
    "indicatorId": "bdmo_y48801004",
    "year": 2024,
    "value": 2192859.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ishimbay",
    "indicatorId": "bdmo_y48801004",
    "year": 2024,
    "value": 10530804.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kaltasinsky",
    "indicatorId": "bdmo_y48801004",
    "year": 2024,
    "value": 1288281.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "karaidelsky",
    "indicatorId": "bdmo_y48801004",
    "year": 2024,
    "value": 1194095.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "karmaskalinsky",
    "indicatorId": "bdmo_y48801004",
    "year": 2024,
    "value": 3337954.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "khaibullinsky",
    "indicatorId": "bdmo_y48801004",
    "year": 2024,
    "value": 2030897.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kiginsky",
    "indicatorId": "bdmo_y48801004",
    "year": 2024,
    "value": 1109914.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "krasnokamsky",
    "indicatorId": "bdmo_y48801004",
    "year": 2024,
    "value": 1492814.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kugarchinsky",
    "indicatorId": "bdmo_y48801004",
    "year": 2024,
    "value": 2090340.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kumertau",
    "indicatorId": "bdmo_y48801004",
    "year": 2024,
    "value": 13215271.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kushnarenkovsky",
    "indicatorId": "bdmo_y48801004",
    "year": 2024,
    "value": 2112042.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kuyurgazinsky",
    "indicatorId": "bdmo_y48801004",
    "year": 2024,
    "value": 1192174.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "mechetlinsky",
    "indicatorId": "bdmo_y48801004",
    "year": 2024,
    "value": 1489831.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "meleuz",
    "indicatorId": "bdmo_y48801004",
    "year": 2024,
    "value": 8742238.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "mishkinsky",
    "indicatorId": "bdmo_y48801004",
    "year": 2024,
    "value": 1213853.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "miyakinsky",
    "indicatorId": "bdmo_y48801004",
    "year": 2024,
    "value": 1327395.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "neftekamsk",
    "indicatorId": "bdmo_y48801004",
    "year": 2024,
    "value": 30343258.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "nurimanovsky",
    "indicatorId": "bdmo_y48801004",
    "year": 2024,
    "value": 1337617.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "oktyabrsky",
    "indicatorId": "bdmo_y48801004",
    "year": 2024,
    "value": 29632991.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "salavat",
    "indicatorId": "bdmo_y48801004",
    "year": 2024,
    "value": 23886189.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "salavatsky",
    "indicatorId": "bdmo_y48801004",
    "year": 2024,
    "value": 1653960.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sharansky",
    "indicatorId": "bdmo_y48801004",
    "year": 2024,
    "value": 1088885.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sibay",
    "indicatorId": "bdmo_y48801004",
    "year": 2024,
    "value": 12532910.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlibashevsky",
    "indicatorId": "bdmo_y48801004",
    "year": 2024,
    "value": 1180705.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamak",
    "indicatorId": "bdmo_y48801004",
    "year": 2024,
    "value": 58537212.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamaksky",
    "indicatorId": "bdmo_y48801004",
    "year": 2024,
    "value": 2413162.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "tatyshlinsky",
    "indicatorId": "bdmo_y48801004",
    "year": 2024,
    "value": 1435501.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "tuymazy",
    "indicatorId": "bdmo_y48801004",
    "year": 2024,
    "value": 26267994.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "uchaly",
    "indicatorId": "bdmo_y48801004",
    "year": 2024,
    "value": 10429360.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufa",
    "indicatorId": "bdmo_y48801004",
    "year": 2024,
    "value": 327172493.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufimsky",
    "indicatorId": "bdmo_y48801004",
    "year": 2024,
    "value": 13942204.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "yanaulsky",
    "indicatorId": "bdmo_y48801004",
    "year": 2024,
    "value": 5366307.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "zianchurinsky",
    "indicatorId": "bdmo_y48801004",
    "year": 2024,
    "value": 1640471.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "zilairsky",
    "indicatorId": "bdmo_y48801004",
    "year": 2024,
    "value": 725664.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "abzelilovsky",
    "indicatorId": "bdmo_y48942001",
    "year": 2024,
    "value": 154228.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "agidel",
    "indicatorId": "bdmo_y48942001",
    "year": 2024,
    "value": 59709.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "alsheevsky",
    "indicatorId": "bdmo_y48942001",
    "year": 2024,
    "value": 69022.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "aurgazinsky",
    "indicatorId": "bdmo_y48942001",
    "year": 2024,
    "value": 490215.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "baymaksky",
    "indicatorId": "bdmo_y48942001",
    "year": 2024,
    "value": 41195.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "belebeyevsky",
    "indicatorId": "bdmo_y48942001",
    "year": 2024,
    "value": 1805290.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "beloretsk",
    "indicatorId": "bdmo_y48942001",
    "year": 2024,
    "value": 362508.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "birsk",
    "indicatorId": "bdmo_y48942001",
    "year": 2024,
    "value": 1288.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "blagovarsky",
    "indicatorId": "bdmo_y48942001",
    "year": 2024,
    "value": 2790184.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "blagoveshchensky",
    "indicatorId": "bdmo_y48942001",
    "year": 2024,
    "value": 4042975.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "buzdyaksky",
    "indicatorId": "bdmo_y48942001",
    "year": 2024,
    "value": 945068.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "chekmagushevsky",
    "indicatorId": "bdmo_y48942001",
    "year": 2024,
    "value": 1829255.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "chishminsky",
    "indicatorId": "bdmo_y48942001",
    "year": 2024,
    "value": 1883273.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "davlekanovsky",
    "indicatorId": "bdmo_y48942001",
    "year": 2024,
    "value": 170095.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "duvansky",
    "indicatorId": "bdmo_y48942001",
    "year": 2024,
    "value": 12677.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "dyurtyulinsky",
    "indicatorId": "bdmo_y48942001",
    "year": 2024,
    "value": 30911.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "iglinsky",
    "indicatorId": "bdmo_y48942001",
    "year": 2024,
    "value": 83916.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ilishevsky",
    "indicatorId": "bdmo_y48942001",
    "year": 2024,
    "value": 280553.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ishimbay",
    "indicatorId": "bdmo_y48942001",
    "year": 2024,
    "value": 1249171.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kaltasinsky",
    "indicatorId": "bdmo_y48942001",
    "year": 2024,
    "value": 950.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "karaidelsky",
    "indicatorId": "bdmo_y48942001",
    "year": 2024,
    "value": 43986.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "karmaskalinsky",
    "indicatorId": "bdmo_y48942001",
    "year": 2024,
    "value": 125628.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "khaibullinsky",
    "indicatorId": "bdmo_y48942001",
    "year": 2024,
    "value": -418512.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kugarchinsky",
    "indicatorId": "bdmo_y48942001",
    "year": 2024,
    "value": -10177.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kumertau",
    "indicatorId": "bdmo_y48942001",
    "year": 2024,
    "value": 3138440.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kuyurgazinsky",
    "indicatorId": "bdmo_y48942001",
    "year": 2024,
    "value": 1471778.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "meleuz",
    "indicatorId": "bdmo_y48942001",
    "year": 2024,
    "value": 900588.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "miyakinsky",
    "indicatorId": "bdmo_y48942001",
    "year": 2024,
    "value": -39971.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "neftekamsk",
    "indicatorId": "bdmo_y48942001",
    "year": 2024,
    "value": 2209985.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "oktyabrsky",
    "indicatorId": "bdmo_y48942001",
    "year": 2024,
    "value": 1851292.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "salavat",
    "indicatorId": "bdmo_y48942001",
    "year": 2024,
    "value": 20508613.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sibay",
    "indicatorId": "bdmo_y48942001",
    "year": 2024,
    "value": 81220.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamak",
    "indicatorId": "bdmo_y48942001",
    "year": 2024,
    "value": 112782.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamaksky",
    "indicatorId": "bdmo_y48942001",
    "year": 2024,
    "value": 1012091.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "tatyshlinsky",
    "indicatorId": "bdmo_y48942001",
    "year": 2024,
    "value": 45412.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "tuymazy",
    "indicatorId": "bdmo_y48942001",
    "year": 2024,
    "value": -10119.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "uchaly",
    "indicatorId": "bdmo_y48942001",
    "year": 2024,
    "value": 2779952.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufa",
    "indicatorId": "bdmo_y48942001",
    "year": 2024,
    "value": 4576857.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufimsky",
    "indicatorId": "bdmo_y48942001",
    "year": 2024,
    "value": -294398.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "yanaulsky",
    "indicatorId": "bdmo_y48942001",
    "year": 2024,
    "value": 16431.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "abzelilovsky",
    "indicatorId": "bdmo_y48942002",
    "year": 2024,
    "value": -180499.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "agidel",
    "indicatorId": "bdmo_y48942002",
    "year": 2024,
    "value": 41759.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "alsheevsky",
    "indicatorId": "bdmo_y48942002",
    "year": 2024,
    "value": 398545.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "aurgazinsky",
    "indicatorId": "bdmo_y48942002",
    "year": 2024,
    "value": 1705118.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "baymaksky",
    "indicatorId": "bdmo_y48942002",
    "year": 2024,
    "value": -20703.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "belebeyevsky",
    "indicatorId": "bdmo_y48942002",
    "year": 2024,
    "value": 1231168.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "beloretsk",
    "indicatorId": "bdmo_y48942002",
    "year": 2024,
    "value": 3089800.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "birsk",
    "indicatorId": "bdmo_y48942002",
    "year": 2024,
    "value": 250918.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "blagovarsky",
    "indicatorId": "bdmo_y48942002",
    "year": 2024,
    "value": 2827337.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "blagoveshchensky",
    "indicatorId": "bdmo_y48942002",
    "year": 2024,
    "value": 4495602.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "buzdyaksky",
    "indicatorId": "bdmo_y48942002",
    "year": 2024,
    "value": 801815.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "chekmagushevsky",
    "indicatorId": "bdmo_y48942002",
    "year": 2024,
    "value": 1189912.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "chishminsky",
    "indicatorId": "bdmo_y48942002",
    "year": 2024,
    "value": -14582.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "davlekanovsky",
    "indicatorId": "bdmo_y48942002",
    "year": 2024,
    "value": 191407.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "duvansky",
    "indicatorId": "bdmo_y48942002",
    "year": 2024,
    "value": 21638.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "dyurtyulinsky",
    "indicatorId": "bdmo_y48942002",
    "year": 2024,
    "value": 68771.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "gafuriysky",
    "indicatorId": "bdmo_y48942002",
    "year": 2024,
    "value": 43796.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "iglinsky",
    "indicatorId": "bdmo_y48942002",
    "year": 2024,
    "value": 278513.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ilishevsky",
    "indicatorId": "bdmo_y48942002",
    "year": 2024,
    "value": 126188.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ishimbay",
    "indicatorId": "bdmo_y48942002",
    "year": 2024,
    "value": 1563229.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kaltasinsky",
    "indicatorId": "bdmo_y48942002",
    "year": 2024,
    "value": -39968.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "karaidelsky",
    "indicatorId": "bdmo_y48942002",
    "year": 2024,
    "value": 47474.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "karmaskalinsky",
    "indicatorId": "bdmo_y48942002",
    "year": 2024,
    "value": 76779.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "khaibullinsky",
    "indicatorId": "bdmo_y48942002",
    "year": 2024,
    "value": 1266224.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kugarchinsky",
    "indicatorId": "bdmo_y48942002",
    "year": 2024,
    "value": -50323.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kumertau",
    "indicatorId": "bdmo_y48942002",
    "year": 2024,
    "value": 6670279.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kuyurgazinsky",
    "indicatorId": "bdmo_y48942002",
    "year": 2024,
    "value": 1165025.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "meleuz",
    "indicatorId": "bdmo_y48942002",
    "year": 2024,
    "value": 524796.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "miyakinsky",
    "indicatorId": "bdmo_y48942002",
    "year": 2024,
    "value": -40225.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "neftekamsk",
    "indicatorId": "bdmo_y48942002",
    "year": 2024,
    "value": 166049.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "oktyabrsky",
    "indicatorId": "bdmo_y48942002",
    "year": 2024,
    "value": 27647.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "salavat",
    "indicatorId": "bdmo_y48942002",
    "year": 2024,
    "value": -13621.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sibay",
    "indicatorId": "bdmo_y48942002",
    "year": 2024,
    "value": -813712.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamak",
    "indicatorId": "bdmo_y48942002",
    "year": 2024,
    "value": 20599457.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamaksky",
    "indicatorId": "bdmo_y48942002",
    "year": 2024,
    "value": 833981.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "tatyshlinsky",
    "indicatorId": "bdmo_y48942002",
    "year": 2024,
    "value": 23652.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "tuymazy",
    "indicatorId": "bdmo_y48942002",
    "year": 2024,
    "value": 1408181.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "uchaly",
    "indicatorId": "bdmo_y48942002",
    "year": 2024,
    "value": 3512869.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufa",
    "indicatorId": "bdmo_y48942002",
    "year": 2024,
    "value": 91451.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufimsky",
    "indicatorId": "bdmo_y48942002",
    "year": 2024,
    "value": -561503.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "yanaulsky",
    "indicatorId": "bdmo_y48942002",
    "year": 2024,
    "value": 43304.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "zianchurinsky",
    "indicatorId": "bdmo_y48942002",
    "year": 2024,
    "value": 19830.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "abzelilovsky",
    "indicatorId": "bdmo_y48942003",
    "year": 2024,
    "value": 780271.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "agidel",
    "indicatorId": "bdmo_y48942003",
    "year": 2024,
    "value": 457364.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "alsheevsky",
    "indicatorId": "bdmo_y48942003",
    "year": 2024,
    "value": 2277454.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "aurgazinsky",
    "indicatorId": "bdmo_y48942003",
    "year": 2024,
    "value": 4482773.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "baymaksky",
    "indicatorId": "bdmo_y48942003",
    "year": 2024,
    "value": 169281.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "belebeyevsky",
    "indicatorId": "bdmo_y48942003",
    "year": 2024,
    "value": 4747814.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "beloretsk",
    "indicatorId": "bdmo_y48942003",
    "year": 2024,
    "value": 16215783.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "birsk",
    "indicatorId": "bdmo_y48942003",
    "year": 2024,
    "value": 38996.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "blagovarsky",
    "indicatorId": "bdmo_y48942003",
    "year": 2024,
    "value": 2857314.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "blagoveshchensky",
    "indicatorId": "bdmo_y48942003",
    "year": 2024,
    "value": 6236376.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "buzdyaksky",
    "indicatorId": "bdmo_y48942003",
    "year": 2024,
    "value": 1344960.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "chekmagushevsky",
    "indicatorId": "bdmo_y48942003",
    "year": 2024,
    "value": 393400.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "chishminsky",
    "indicatorId": "bdmo_y48942003",
    "year": 2024,
    "value": 16566207.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "davlekanovsky",
    "indicatorId": "bdmo_y48942003",
    "year": 2024,
    "value": 4215709.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "duvansky",
    "indicatorId": "bdmo_y48942003",
    "year": 2024,
    "value": 70006.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "dyurtyulinsky",
    "indicatorId": "bdmo_y48942003",
    "year": 2024,
    "value": 86122.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "gafuriysky",
    "indicatorId": "bdmo_y48942003",
    "year": 2024,
    "value": 92030.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "iglinsky",
    "indicatorId": "bdmo_y48942003",
    "year": 2024,
    "value": 145714.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ilishevsky",
    "indicatorId": "bdmo_y48942003",
    "year": 2024,
    "value": 3343.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ishimbay",
    "indicatorId": "bdmo_y48942003",
    "year": 2024,
    "value": 461366.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kaltasinsky",
    "indicatorId": "bdmo_y48942003",
    "year": 2024,
    "value": 68360.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "karaidelsky",
    "indicatorId": "bdmo_y48942003",
    "year": 2024,
    "value": 16483.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "karmaskalinsky",
    "indicatorId": "bdmo_y48942003",
    "year": 2024,
    "value": 460171.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "khaibullinsky",
    "indicatorId": "bdmo_y48942003",
    "year": 2024,
    "value": 2400700.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kugarchinsky",
    "indicatorId": "bdmo_y48942003",
    "year": 2024,
    "value": 67439.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kumertau",
    "indicatorId": "bdmo_y48942003",
    "year": 2024,
    "value": 23700445.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kuyurgazinsky",
    "indicatorId": "bdmo_y48942003",
    "year": 2024,
    "value": 327477.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "meleuz",
    "indicatorId": "bdmo_y48942003",
    "year": 2024,
    "value": 11087.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "miyakinsky",
    "indicatorId": "bdmo_y48942003",
    "year": 2024,
    "value": 11962.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "neftekamsk",
    "indicatorId": "bdmo_y48942003",
    "year": 2024,
    "value": 10772478.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "oktyabrsky",
    "indicatorId": "bdmo_y48942003",
    "year": 2024,
    "value": 17095273.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "salavat",
    "indicatorId": "bdmo_y48942003",
    "year": 2024,
    "value": 323727.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sibay",
    "indicatorId": "bdmo_y48942003",
    "year": 2024,
    "value": 1063457.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamak",
    "indicatorId": "bdmo_y48942003",
    "year": 2024,
    "value": 34174060.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamaksky",
    "indicatorId": "bdmo_y48942003",
    "year": 2024,
    "value": 1991533.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "tatyshlinsky",
    "indicatorId": "bdmo_y48942003",
    "year": 2024,
    "value": 60610.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "tuymazy",
    "indicatorId": "bdmo_y48942003",
    "year": 2024,
    "value": 43851.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "uchaly",
    "indicatorId": "bdmo_y48942003",
    "year": 2024,
    "value": 1709472.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufa",
    "indicatorId": "bdmo_y48942003",
    "year": 2024,
    "value": 9369957.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufimsky",
    "indicatorId": "bdmo_y48942003",
    "year": 2024,
    "value": 3327799.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "yanaulsky",
    "indicatorId": "bdmo_y48942003",
    "year": 2024,
    "value": 163426.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "abzelilovsky",
    "indicatorId": "bdmo_y48942005",
    "year": 2024,
    "value": 1447714.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "agidel",
    "indicatorId": "bdmo_y48942005",
    "year": 2024,
    "value": 257974.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "alsheevsky",
    "indicatorId": "bdmo_y48942005",
    "year": 2024,
    "value": 2233202.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "aurgazinsky",
    "indicatorId": "bdmo_y48942005",
    "year": 2024,
    "value": 2715940.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "baymaksky",
    "indicatorId": "bdmo_y48942005",
    "year": 2024,
    "value": 574605.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "belebeyevsky",
    "indicatorId": "bdmo_y48942005",
    "year": 2024,
    "value": 3957532.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "beloretsk",
    "indicatorId": "bdmo_y48942005",
    "year": 2024,
    "value": 2456471.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "birsk",
    "indicatorId": "bdmo_y48942005",
    "year": 2024,
    "value": 36074.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "blagovarsky",
    "indicatorId": "bdmo_y48942005",
    "year": 2024,
    "value": 8767561.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "blagoveshchensky",
    "indicatorId": "bdmo_y48942005",
    "year": 2024,
    "value": 979123.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "buzdyaksky",
    "indicatorId": "bdmo_y48942005",
    "year": 2024,
    "value": 1172722.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "chekmagushevsky",
    "indicatorId": "bdmo_y48942005",
    "year": 2024,
    "value": 120841.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "chishminsky",
    "indicatorId": "bdmo_y48942005",
    "year": 2024,
    "value": 10564370.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "davlekanovsky",
    "indicatorId": "bdmo_y48942005",
    "year": 2024,
    "value": 3489963.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "duvansky",
    "indicatorId": "bdmo_y48942005",
    "year": 2024,
    "value": 266069.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "dyurtyulinsky",
    "indicatorId": "bdmo_y48942005",
    "year": 2024,
    "value": 77649.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "gafuriysky",
    "indicatorId": "bdmo_y48942005",
    "year": 2024,
    "value": 171445.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "iglinsky",
    "indicatorId": "bdmo_y48942005",
    "year": 2024,
    "value": 111527.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ilishevsky",
    "indicatorId": "bdmo_y48942005",
    "year": 2024,
    "value": 288.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ishimbay",
    "indicatorId": "bdmo_y48942005",
    "year": 2024,
    "value": 5376492.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kaltasinsky",
    "indicatorId": "bdmo_y48942005",
    "year": 2024,
    "value": 89902.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "karaidelsky",
    "indicatorId": "bdmo_y48942005",
    "year": 2024,
    "value": 4945.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "karmaskalinsky",
    "indicatorId": "bdmo_y48942005",
    "year": 2024,
    "value": 323089.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "khaibullinsky",
    "indicatorId": "bdmo_y48942005",
    "year": 2024,
    "value": 4662746.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kugarchinsky",
    "indicatorId": "bdmo_y48942005",
    "year": 2024,
    "value": 278463.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kumertau",
    "indicatorId": "bdmo_y48942005",
    "year": 2024,
    "value": 19551312.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kuyurgazinsky",
    "indicatorId": "bdmo_y48942005",
    "year": 2024,
    "value": 212505.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "meleuz",
    "indicatorId": "bdmo_y48942005",
    "year": 2024,
    "value": 2550495.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "miyakinsky",
    "indicatorId": "bdmo_y48942005",
    "year": 2024,
    "value": 25915.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "neftekamsk",
    "indicatorId": "bdmo_y48942005",
    "year": 2024,
    "value": 11014816.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "oktyabrsky",
    "indicatorId": "bdmo_y48942005",
    "year": 2024,
    "value": 4746.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "salavat",
    "indicatorId": "bdmo_y48942005",
    "year": 2024,
    "value": 54823.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sibay",
    "indicatorId": "bdmo_y48942005",
    "year": 2024,
    "value": 3337502.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamak",
    "indicatorId": "bdmo_y48942005",
    "year": 2024,
    "value": 166942.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamaksky",
    "indicatorId": "bdmo_y48942005",
    "year": 2024,
    "value": 1896547.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "tatyshlinsky",
    "indicatorId": "bdmo_y48942005",
    "year": 2024,
    "value": 34242.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "tuymazy",
    "indicatorId": "bdmo_y48942005",
    "year": 2024,
    "value": 4424103.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "uchaly",
    "indicatorId": "bdmo_y48942005",
    "year": 2024,
    "value": 1471882.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufa",
    "indicatorId": "bdmo_y48942005",
    "year": 2024,
    "value": 26130.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufimsky",
    "indicatorId": "bdmo_y48942005",
    "year": 2024,
    "value": 4825696.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "yanaulsky",
    "indicatorId": "bdmo_y48942005",
    "year": 2024,
    "value": 561341.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "abzelilovsky",
    "indicatorId": "bdmo_y48942006",
    "year": 2024,
    "value": 108887.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "agidel",
    "indicatorId": "bdmo_y48942006",
    "year": 2024,
    "value": 29327.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "alsheevsky",
    "indicatorId": "bdmo_y48942006",
    "year": 2024,
    "value": 14898.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "aurgazinsky",
    "indicatorId": "bdmo_y48942006",
    "year": 2024,
    "value": 1830.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "baymaksky",
    "indicatorId": "bdmo_y48942006",
    "year": 2024,
    "value": 56707.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "belebeyevsky",
    "indicatorId": "bdmo_y48942006",
    "year": 2024,
    "value": 323344.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "beloretsk",
    "indicatorId": "bdmo_y48942006",
    "year": 2024,
    "value": 330802.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "birsk",
    "indicatorId": "bdmo_y48942006",
    "year": 2024,
    "value": 7747.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "blagovarsky",
    "indicatorId": "bdmo_y48942006",
    "year": 2024,
    "value": 196539.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "blagoveshchensky",
    "indicatorId": "bdmo_y48942006",
    "year": 2024,
    "value": 146980.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "buzdyaksky",
    "indicatorId": "bdmo_y48942006",
    "year": 2024,
    "value": 18310.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "chekmagushevsky",
    "indicatorId": "bdmo_y48942006",
    "year": 2024,
    "value": 5057.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "chishminsky",
    "indicatorId": "bdmo_y48942006",
    "year": 2024,
    "value": 31528.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "davlekanovsky",
    "indicatorId": "bdmo_y48942006",
    "year": 2024,
    "value": 64959.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "duvansky",
    "indicatorId": "bdmo_y48942006",
    "year": 2024,
    "value": 9173.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "dyurtyulinsky",
    "indicatorId": "bdmo_y48942006",
    "year": 2024,
    "value": 14780.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "gafuriysky",
    "indicatorId": "bdmo_y48942006",
    "year": 2024,
    "value": 33512.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "iglinsky",
    "indicatorId": "bdmo_y48942006",
    "year": 2024,
    "value": 56732.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ishimbay",
    "indicatorId": "bdmo_y48942006",
    "year": 2024,
    "value": 29301.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kaltasinsky",
    "indicatorId": "bdmo_y48942006",
    "year": 2024,
    "value": 16154.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "karaidelsky",
    "indicatorId": "bdmo_y48942006",
    "year": 2024,
    "value": 1247.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "karmaskalinsky",
    "indicatorId": "bdmo_y48942006",
    "year": 2024,
    "value": 16459.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "khaibullinsky",
    "indicatorId": "bdmo_y48942006",
    "year": 2024,
    "value": 572342.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kugarchinsky",
    "indicatorId": "bdmo_y48942006",
    "year": 2024,
    "value": 8443.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kumertau",
    "indicatorId": "bdmo_y48942006",
    "year": 2024,
    "value": 546794.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kuyurgazinsky",
    "indicatorId": "bdmo_y48942006",
    "year": 2024,
    "value": 106447.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "meleuz",
    "indicatorId": "bdmo_y48942006",
    "year": 2024,
    "value": 135646.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "miyakinsky",
    "indicatorId": "bdmo_y48942006",
    "year": 2024,
    "value": 2517.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "neftekamsk",
    "indicatorId": "bdmo_y48942006",
    "year": 2024,
    "value": 427575.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "oktyabrsky",
    "indicatorId": "bdmo_y48942006",
    "year": 2024,
    "value": 380.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "salavat",
    "indicatorId": "bdmo_y48942006",
    "year": 2024,
    "value": 2030363.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sibay",
    "indicatorId": "bdmo_y48942006",
    "year": 2024,
    "value": 159010.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamak",
    "indicatorId": "bdmo_y48942006",
    "year": 2024,
    "value": 11964.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamaksky",
    "indicatorId": "bdmo_y48942006",
    "year": 2024,
    "value": 2442.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "tuymazy",
    "indicatorId": "bdmo_y48942006",
    "year": 2024,
    "value": 18010.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "uchaly",
    "indicatorId": "bdmo_y48942006",
    "year": 2024,
    "value": 194523.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufa",
    "indicatorId": "bdmo_y48942006",
    "year": 2024,
    "value": 3194246.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufimsky",
    "indicatorId": "bdmo_y48942006",
    "year": 2024,
    "value": 387845.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "yanaulsky",
    "indicatorId": "bdmo_y48942006",
    "year": 2024,
    "value": 15609.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "abzelilovsky",
    "indicatorId": "bdmo_y48942007",
    "year": 2024,
    "value": 49857.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "agidel",
    "indicatorId": "bdmo_y48942007",
    "year": 2024,
    "value": 14509.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "alsheevsky",
    "indicatorId": "bdmo_y48942007",
    "year": 2024,
    "value": 14321.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "aurgazinsky",
    "indicatorId": "bdmo_y48942007",
    "year": 2024,
    "value": 12960.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "baymaksky",
    "indicatorId": "bdmo_y48942007",
    "year": 2024,
    "value": 15104.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "belebeyevsky",
    "indicatorId": "bdmo_y48942007",
    "year": 2024,
    "value": 125300.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "beloretsk",
    "indicatorId": "bdmo_y48942007",
    "year": 2024,
    "value": 154600.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "birsk",
    "indicatorId": "bdmo_y48942007",
    "year": 2024,
    "value": 7383.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "blagovarsky",
    "indicatorId": "bdmo_y48942007",
    "year": 2024,
    "value": 30744.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "blagoveshchensky",
    "indicatorId": "bdmo_y48942007",
    "year": 2024,
    "value": 171406.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "buzdyaksky",
    "indicatorId": "bdmo_y48942007",
    "year": 2024,
    "value": 11592.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "chekmagushevsky",
    "indicatorId": "bdmo_y48942007",
    "year": 2024,
    "value": 9931.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "chishminsky",
    "indicatorId": "bdmo_y48942007",
    "year": 2024,
    "value": 45662.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "davlekanovsky",
    "indicatorId": "bdmo_y48942007",
    "year": 2024,
    "value": 12985.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "duvansky",
    "indicatorId": "bdmo_y48942007",
    "year": 2024,
    "value": 20075.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "dyurtyulinsky",
    "indicatorId": "bdmo_y48942007",
    "year": 2024,
    "value": 4773.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "iglinsky",
    "indicatorId": "bdmo_y48942007",
    "year": 2024,
    "value": 7699.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ishimbay",
    "indicatorId": "bdmo_y48942007",
    "year": 2024,
    "value": 130679.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kaltasinsky",
    "indicatorId": "bdmo_y48942007",
    "year": 2024,
    "value": 7224.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "karmaskalinsky",
    "indicatorId": "bdmo_y48942007",
    "year": 2024,
    "value": 3192.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "khaibullinsky",
    "indicatorId": "bdmo_y48942007",
    "year": 2024,
    "value": 205950.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kumertau",
    "indicatorId": "bdmo_y48942007",
    "year": 2024,
    "value": 1871.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kuyurgazinsky",
    "indicatorId": "bdmo_y48942007",
    "year": 2024,
    "value": 4324.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "meleuz",
    "indicatorId": "bdmo_y48942007",
    "year": 2024,
    "value": 58150.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "miyakinsky",
    "indicatorId": "bdmo_y48942007",
    "year": 2024,
    "value": 2078.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "neftekamsk",
    "indicatorId": "bdmo_y48942007",
    "year": 2024,
    "value": 19762.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "oktyabrsky",
    "indicatorId": "bdmo_y48942007",
    "year": 2024,
    "value": 21133.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "salavat",
    "indicatorId": "bdmo_y48942007",
    "year": 2024,
    "value": 668008.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sibay",
    "indicatorId": "bdmo_y48942007",
    "year": 2024,
    "value": 27391.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamak",
    "indicatorId": "bdmo_y48942007",
    "year": 2024,
    "value": 7976.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamaksky",
    "indicatorId": "bdmo_y48942007",
    "year": 2024,
    "value": 33317.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "tuymazy",
    "indicatorId": "bdmo_y48942007",
    "year": 2024,
    "value": 127808.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "uchaly",
    "indicatorId": "bdmo_y48942007",
    "year": 2024,
    "value": 5409.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufa",
    "indicatorId": "bdmo_y48942007",
    "year": 2024,
    "value": 3266.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufimsky",
    "indicatorId": "bdmo_y48942007",
    "year": 2024,
    "value": 73289.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "yanaulsky",
    "indicatorId": "bdmo_y48942007",
    "year": 2024,
    "value": 4919.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "abzelilovsky",
    "indicatorId": "bdmo_y48942008",
    "year": 2024,
    "value": 653073.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "agidel",
    "indicatorId": "bdmo_y48942008",
    "year": 2024,
    "value": 154247.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "alsheevsky",
    "indicatorId": "bdmo_y48942008",
    "year": 2024,
    "value": 1648454.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "aurgazinsky",
    "indicatorId": "bdmo_y48942008",
    "year": 2024,
    "value": 867514.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "baymaksky",
    "indicatorId": "bdmo_y48942008",
    "year": 2024,
    "value": 416755.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "belebeyevsky",
    "indicatorId": "bdmo_y48942008",
    "year": 2024,
    "value": 2970174.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "beloretsk",
    "indicatorId": "bdmo_y48942008",
    "year": 2024,
    "value": 3258905.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "birsk",
    "indicatorId": "bdmo_y48942008",
    "year": 2024,
    "value": 152448.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "blagovarsky",
    "indicatorId": "bdmo_y48942008",
    "year": 2024,
    "value": 734490.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "blagoveshchensky",
    "indicatorId": "bdmo_y48942008",
    "year": 2024,
    "value": 254800.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "buzdyaksky",
    "indicatorId": "bdmo_y48942008",
    "year": 2024,
    "value": 75126.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "chekmagushevsky",
    "indicatorId": "bdmo_y48942008",
    "year": 2024,
    "value": 51389.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "chishminsky",
    "indicatorId": "bdmo_y48942008",
    "year": 2024,
    "value": 2280668.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "davlekanovsky",
    "indicatorId": "bdmo_y48942008",
    "year": 2024,
    "value": 538810.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "duvansky",
    "indicatorId": "bdmo_y48942008",
    "year": 2024,
    "value": 118570.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "dyurtyulinsky",
    "indicatorId": "bdmo_y48942008",
    "year": 2024,
    "value": 143078.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "gafuriysky",
    "indicatorId": "bdmo_y48942008",
    "year": 2024,
    "value": 68191.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "iglinsky",
    "indicatorId": "bdmo_y48942008",
    "year": 2024,
    "value": 34657.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ilishevsky",
    "indicatorId": "bdmo_y48942008",
    "year": 2024,
    "value": 51086.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ishimbay",
    "indicatorId": "bdmo_y48942008",
    "year": 2024,
    "value": 168681.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kaltasinsky",
    "indicatorId": "bdmo_y48942008",
    "year": 2024,
    "value": 62169.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "karaidelsky",
    "indicatorId": "bdmo_y48942008",
    "year": 2024,
    "value": 2974.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "karmaskalinsky",
    "indicatorId": "bdmo_y48942008",
    "year": 2024,
    "value": 277871.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "khaibullinsky",
    "indicatorId": "bdmo_y48942008",
    "year": 2024,
    "value": 3004432.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kugarchinsky",
    "indicatorId": "bdmo_y48942008",
    "year": 2024,
    "value": 231221.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kumertau",
    "indicatorId": "bdmo_y48942008",
    "year": 2024,
    "value": 5457686.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kuyurgazinsky",
    "indicatorId": "bdmo_y48942008",
    "year": 2024,
    "value": 80731.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "meleuz",
    "indicatorId": "bdmo_y48942008",
    "year": 2024,
    "value": 8678.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "miyakinsky",
    "indicatorId": "bdmo_y48942008",
    "year": 2024,
    "value": 19407.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "neftekamsk",
    "indicatorId": "bdmo_y48942008",
    "year": 2024,
    "value": 5935078.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "oktyabrsky",
    "indicatorId": "bdmo_y48942008",
    "year": 2024,
    "value": 1975993.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "salavat",
    "indicatorId": "bdmo_y48942008",
    "year": 2024,
    "value": 80902208.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sibay",
    "indicatorId": "bdmo_y48942008",
    "year": 2024,
    "value": 1543745.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamak",
    "indicatorId": "bdmo_y48942008",
    "year": 2024,
    "value": 464322.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamaksky",
    "indicatorId": "bdmo_y48942008",
    "year": 2024,
    "value": 1773904.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "tatyshlinsky",
    "indicatorId": "bdmo_y48942008",
    "year": 2024,
    "value": 25204.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "tuymazy",
    "indicatorId": "bdmo_y48942008",
    "year": 2024,
    "value": 62822.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "uchaly",
    "indicatorId": "bdmo_y48942008",
    "year": 2024,
    "value": 92446.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufa",
    "indicatorId": "bdmo_y48942008",
    "year": 2024,
    "value": 427658360.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufimsky",
    "indicatorId": "bdmo_y48942008",
    "year": 2024,
    "value": 5076997.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "yanaulsky",
    "indicatorId": "bdmo_y48942008",
    "year": 2024,
    "value": 442154.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "abzelilovsky",
    "indicatorId": "bdmo_y48942009",
    "year": 2024,
    "value": 7413302.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "aurgazinsky",
    "indicatorId": "bdmo_y48942009",
    "year": 2024,
    "value": 12297152.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "belebeyevsky",
    "indicatorId": "bdmo_y48942009",
    "year": 2024,
    "value": 7340881.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "beloretsk",
    "indicatorId": "bdmo_y48942009",
    "year": 2024,
    "value": 1313692.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "birsk",
    "indicatorId": "bdmo_y48942009",
    "year": 2024,
    "value": 362472.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "blagovarsky",
    "indicatorId": "bdmo_y48942009",
    "year": 2024,
    "value": 2312444.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "blagoveshchensky",
    "indicatorId": "bdmo_y48942009",
    "year": 2024,
    "value": 3394439.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "buzdyaksky",
    "indicatorId": "bdmo_y48942009",
    "year": 2024,
    "value": 3492956.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "chekmagushevsky",
    "indicatorId": "bdmo_y48942009",
    "year": 2024,
    "value": 495896.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "chishminsky",
    "indicatorId": "bdmo_y48942009",
    "year": 2024,
    "value": 13239243.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "davlekanovsky",
    "indicatorId": "bdmo_y48942009",
    "year": 2024,
    "value": 2838539.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "duvansky",
    "indicatorId": "bdmo_y48942009",
    "year": 2024,
    "value": 250468.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "dyurtyulinsky",
    "indicatorId": "bdmo_y48942009",
    "year": 2024,
    "value": 170738.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ishimbay",
    "indicatorId": "bdmo_y48942009",
    "year": 2024,
    "value": 2959294.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "karmaskalinsky",
    "indicatorId": "bdmo_y48942009",
    "year": 2024,
    "value": 566341.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kumertau",
    "indicatorId": "bdmo_y48942009",
    "year": 2024,
    "value": 22634002.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kuyurgazinsky",
    "indicatorId": "bdmo_y48942009",
    "year": 2024,
    "value": 217537.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "meleuz",
    "indicatorId": "bdmo_y48942009",
    "year": 2024,
    "value": 1634651.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "neftekamsk",
    "indicatorId": "bdmo_y48942009",
    "year": 2024,
    "value": 242784.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "oktyabrsky",
    "indicatorId": "bdmo_y48942009",
    "year": 2024,
    "value": 210010.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "salavat",
    "indicatorId": "bdmo_y48942009",
    "year": 2024,
    "value": 15542672.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sibay",
    "indicatorId": "bdmo_y48942009",
    "year": 2024,
    "value": 3807079.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamak",
    "indicatorId": "bdmo_y48942009",
    "year": 2024,
    "value": 178950.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamaksky",
    "indicatorId": "bdmo_y48942009",
    "year": 2024,
    "value": 2321250.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "tuymazy",
    "indicatorId": "bdmo_y48942009",
    "year": 2024,
    "value": 2381014.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "uchaly",
    "indicatorId": "bdmo_y48942009",
    "year": 2024,
    "value": 7133593.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufa",
    "indicatorId": "bdmo_y48942009",
    "year": 2024,
    "value": 20042503.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufimsky",
    "indicatorId": "bdmo_y48942009",
    "year": 2024,
    "value": 4994291.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "abzelilovsky",
    "indicatorId": "bdmo_y48942010",
    "year": 2024,
    "value": 3.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "agidel",
    "indicatorId": "bdmo_y48942010",
    "year": 2024,
    "value": 5.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "alsheevsky",
    "indicatorId": "bdmo_y48942010",
    "year": 2024,
    "value": 5.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "aurgazinsky",
    "indicatorId": "bdmo_y48942010",
    "year": 2024,
    "value": 3.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "baymaksky",
    "indicatorId": "bdmo_y48942010",
    "year": 2024,
    "value": 7.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "belebeyevsky",
    "indicatorId": "bdmo_y48942010",
    "year": 2024,
    "value": 18.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "beloretsk",
    "indicatorId": "bdmo_y48942010",
    "year": 2024,
    "value": 5.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "birsk",
    "indicatorId": "bdmo_y48942010",
    "year": 2024,
    "value": 4.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "blagovarsky",
    "indicatorId": "bdmo_y48942010",
    "year": 2024,
    "value": 3.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "blagoveshchensky",
    "indicatorId": "bdmo_y48942010",
    "year": 2024,
    "value": 3.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "buzdyaksky",
    "indicatorId": "bdmo_y48942010",
    "year": 2024,
    "value": 3.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "chekmagushevsky",
    "indicatorId": "bdmo_y48942010",
    "year": 2024,
    "value": 5.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "chishminsky",
    "indicatorId": "bdmo_y48942010",
    "year": 2024,
    "value": 12.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "davlekanovsky",
    "indicatorId": "bdmo_y48942010",
    "year": 2024,
    "value": 8.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "duvansky",
    "indicatorId": "bdmo_y48942010",
    "year": 2024,
    "value": 5.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "dyurtyulinsky",
    "indicatorId": "bdmo_y48942010",
    "year": 2024,
    "value": 4.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "gafuriysky",
    "indicatorId": "bdmo_y48942010",
    "year": 2024,
    "value": 3.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "iglinsky",
    "indicatorId": "bdmo_y48942010",
    "year": 2024,
    "value": 4.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ilishevsky",
    "indicatorId": "bdmo_y48942010",
    "year": 2024,
    "value": 5.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ishimbay",
    "indicatorId": "bdmo_y48942010",
    "year": 2024,
    "value": 7.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kaltasinsky",
    "indicatorId": "bdmo_y48942010",
    "year": 2024,
    "value": 3.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "karaidelsky",
    "indicatorId": "bdmo_y48942010",
    "year": 2024,
    "value": 3.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "karmaskalinsky",
    "indicatorId": "bdmo_y48942010",
    "year": 2024,
    "value": 5.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "khaibullinsky",
    "indicatorId": "bdmo_y48942010",
    "year": 2024,
    "value": 4.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kugarchinsky",
    "indicatorId": "bdmo_y48942010",
    "year": 2024,
    "value": 5.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kumertau",
    "indicatorId": "bdmo_y48942010",
    "year": 2024,
    "value": 16.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kuyurgazinsky",
    "indicatorId": "bdmo_y48942010",
    "year": 2024,
    "value": 5.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "meleuz",
    "indicatorId": "bdmo_y48942010",
    "year": 2024,
    "value": 4.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "miyakinsky",
    "indicatorId": "bdmo_y48942010",
    "year": 2024,
    "value": 4.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "neftekamsk",
    "indicatorId": "bdmo_y48942010",
    "year": 2024,
    "value": 21.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "oktyabrsky",
    "indicatorId": "bdmo_y48942010",
    "year": 2024,
    "value": 4.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "salavat",
    "indicatorId": "bdmo_y48942010",
    "year": 2024,
    "value": 7.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sharansky",
    "indicatorId": "bdmo_y48942010",
    "year": 2024,
    "value": 3.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sibay",
    "indicatorId": "bdmo_y48942010",
    "year": 2024,
    "value": 9.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamak",
    "indicatorId": "bdmo_y48942010",
    "year": 2024,
    "value": 61.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamaksky",
    "indicatorId": "bdmo_y48942010",
    "year": 2024,
    "value": 9.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "tatyshlinsky",
    "indicatorId": "bdmo_y48942010",
    "year": 2024,
    "value": 3.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "tuymazy",
    "indicatorId": "bdmo_y48942010",
    "year": 2024,
    "value": 8.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "uchaly",
    "indicatorId": "bdmo_y48942010",
    "year": 2024,
    "value": 7.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufa",
    "indicatorId": "bdmo_y48942010",
    "year": 2024,
    "value": 12.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufimsky",
    "indicatorId": "bdmo_y48942010",
    "year": 2024,
    "value": 3.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "yanaulsky",
    "indicatorId": "bdmo_y48942010",
    "year": 2024,
    "value": 4.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "zianchurinsky",
    "indicatorId": "bdmo_y48942010",
    "year": 2024,
    "value": 3.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "abzelilovsky",
    "indicatorId": "bdmo_y48942011",
    "year": 2024,
    "value": 4.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "baymaksky",
    "indicatorId": "bdmo_y48942011",
    "year": 2024,
    "value": 3.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "belebeyevsky",
    "indicatorId": "bdmo_y48942011",
    "year": 2024,
    "value": 3.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "beloretsk",
    "indicatorId": "bdmo_y48942011",
    "year": 2024,
    "value": 4.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "blagoveshchensky",
    "indicatorId": "bdmo_y48942011",
    "year": 2024,
    "value": 7.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "chishminsky",
    "indicatorId": "bdmo_y48942011",
    "year": 2024,
    "value": 4.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ishimbay",
    "indicatorId": "bdmo_y48942011",
    "year": 2024,
    "value": 5.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kumertau",
    "indicatorId": "bdmo_y48942011",
    "year": 2024,
    "value": 5.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "meleuz",
    "indicatorId": "bdmo_y48942011",
    "year": 2024,
    "value": 3.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "neftekamsk",
    "indicatorId": "bdmo_y48942011",
    "year": 2024,
    "value": 3.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "oktyabrsky",
    "indicatorId": "bdmo_y48942011",
    "year": 2024,
    "value": 9.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "salavat",
    "indicatorId": "bdmo_y48942011",
    "year": 2024,
    "value": 8.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sibay",
    "indicatorId": "bdmo_y48942011",
    "year": 2024,
    "value": 4.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamak",
    "indicatorId": "bdmo_y48942011",
    "year": 2024,
    "value": 3.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamaksky",
    "indicatorId": "bdmo_y48942011",
    "year": 2024,
    "value": 4.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "tuymazy",
    "indicatorId": "bdmo_y48942011",
    "year": 2024,
    "value": 3.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "uchaly",
    "indicatorId": "bdmo_y48942011",
    "year": 2024,
    "value": 3.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufa",
    "indicatorId": "bdmo_y48942011",
    "year": 2024,
    "value": 10.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufimsky",
    "indicatorId": "bdmo_y48942011",
    "year": 2024,
    "value": 3.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "yanaulsky",
    "indicatorId": "bdmo_y48942011",
    "year": 2024,
    "value": 3.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "abzelilovsky",
    "indicatorId": "bdmo_y48942013",
    "year": 2024,
    "value": 6.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "agidel",
    "indicatorId": "bdmo_y48942013",
    "year": 2024,
    "value": 3.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "alsheevsky",
    "indicatorId": "bdmo_y48942013",
    "year": 2024,
    "value": 4.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "aurgazinsky",
    "indicatorId": "bdmo_y48942013",
    "year": 2024,
    "value": 3.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "baymaksky",
    "indicatorId": "bdmo_y48942013",
    "year": 2024,
    "value": 4.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "belebeyevsky",
    "indicatorId": "bdmo_y48942013",
    "year": 2024,
    "value": 7.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "beloretsk",
    "indicatorId": "bdmo_y48942013",
    "year": 2024,
    "value": 3.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "birsk",
    "indicatorId": "bdmo_y48942013",
    "year": 2024,
    "value": 10.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "blagovarsky",
    "indicatorId": "bdmo_y48942013",
    "year": 2024,
    "value": 3.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "blagoveshchensky",
    "indicatorId": "bdmo_y48942013",
    "year": 2024,
    "value": 10.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "buzdyaksky",
    "indicatorId": "bdmo_y48942013",
    "year": 2024,
    "value": 3.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "chekmagushevsky",
    "indicatorId": "bdmo_y48942013",
    "year": 2024,
    "value": 6.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "chishminsky",
    "indicatorId": "bdmo_y48942013",
    "year": 2024,
    "value": 8.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "davlekanovsky",
    "indicatorId": "bdmo_y48942013",
    "year": 2024,
    "value": 5.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "duvansky",
    "indicatorId": "bdmo_y48942013",
    "year": 2024,
    "value": 3.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "dyurtyulinsky",
    "indicatorId": "bdmo_y48942013",
    "year": 2024,
    "value": 4.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "gafuriysky",
    "indicatorId": "bdmo_y48942013",
    "year": 2024,
    "value": 3.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "iglinsky",
    "indicatorId": "bdmo_y48942013",
    "year": 2024,
    "value": 4.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ilishevsky",
    "indicatorId": "bdmo_y48942013",
    "year": 2024,
    "value": 4.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ishimbay",
    "indicatorId": "bdmo_y48942013",
    "year": 2024,
    "value": 4.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "karmaskalinsky",
    "indicatorId": "bdmo_y48942013",
    "year": 2024,
    "value": 5.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "khaibullinsky",
    "indicatorId": "bdmo_y48942013",
    "year": 2024,
    "value": 3.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kugarchinsky",
    "indicatorId": "bdmo_y48942013",
    "year": 2024,
    "value": 4.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kumertau",
    "indicatorId": "bdmo_y48942013",
    "year": 2024,
    "value": 3.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kuyurgazinsky",
    "indicatorId": "bdmo_y48942013",
    "year": 2024,
    "value": 4.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "meleuz",
    "indicatorId": "bdmo_y48942013",
    "year": 2024,
    "value": 7.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "miyakinsky",
    "indicatorId": "bdmo_y48942013",
    "year": 2024,
    "value": 3.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "neftekamsk",
    "indicatorId": "bdmo_y48942013",
    "year": 2024,
    "value": 16.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "oktyabrsky",
    "indicatorId": "bdmo_y48942013",
    "year": 2024,
    "value": 4.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "salavat",
    "indicatorId": "bdmo_y48942013",
    "year": 2024,
    "value": 9.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sibay",
    "indicatorId": "bdmo_y48942013",
    "year": 2024,
    "value": 5.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamak",
    "indicatorId": "bdmo_y48942013",
    "year": 2024,
    "value": 5.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamaksky",
    "indicatorId": "bdmo_y48942013",
    "year": 2024,
    "value": 3.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "tatyshlinsky",
    "indicatorId": "bdmo_y48942013",
    "year": 2024,
    "value": 3.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "tuymazy",
    "indicatorId": "bdmo_y48942013",
    "year": 2024,
    "value": 21.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "uchaly",
    "indicatorId": "bdmo_y48942013",
    "year": 2024,
    "value": 6.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufa",
    "indicatorId": "bdmo_y48942013",
    "year": 2024,
    "value": 18.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufimsky",
    "indicatorId": "bdmo_y48942013",
    "year": 2024,
    "value": 5.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "yanaulsky",
    "indicatorId": "bdmo_y48942013",
    "year": 2024,
    "value": 3.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "abzelilovsky",
    "indicatorId": "bdmo_y48942015",
    "year": 2024,
    "value": -149530.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "baymaksky",
    "indicatorId": "bdmo_y48942015",
    "year": 2024,
    "value": -126701.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "belebeyevsky",
    "indicatorId": "bdmo_y48942015",
    "year": 2024,
    "value": -34832.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "beloretsk",
    "indicatorId": "bdmo_y48942015",
    "year": 2024,
    "value": -37484.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "blagoveshchensky",
    "indicatorId": "bdmo_y48942015",
    "year": 2024,
    "value": -283307.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "chishminsky",
    "indicatorId": "bdmo_y48942015",
    "year": 2024,
    "value": -372980.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ishimbay",
    "indicatorId": "bdmo_y48942015",
    "year": 2024,
    "value": -83953.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kumertau",
    "indicatorId": "bdmo_y48942015",
    "year": 2024,
    "value": -301015.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "meleuz",
    "indicatorId": "bdmo_y48942015",
    "year": 2024,
    "value": -67507.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "neftekamsk",
    "indicatorId": "bdmo_y48942015",
    "year": 2024,
    "value": -225192.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "oktyabrsky",
    "indicatorId": "bdmo_y48942015",
    "year": 2024,
    "value": -152004.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "salavat",
    "indicatorId": "bdmo_y48942015",
    "year": 2024,
    "value": -7014.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sibay",
    "indicatorId": "bdmo_y48942015",
    "year": 2024,
    "value": -471612.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamak",
    "indicatorId": "bdmo_y48942015",
    "year": 2024,
    "value": -26865.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamaksky",
    "indicatorId": "bdmo_y48942015",
    "year": 2024,
    "value": -66979.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "tuymazy",
    "indicatorId": "bdmo_y48942015",
    "year": 2024,
    "value": -114880.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "uchaly",
    "indicatorId": "bdmo_y48942015",
    "year": 2024,
    "value": -1186442.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufa",
    "indicatorId": "bdmo_y48942015",
    "year": 2024,
    "value": -349003.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufimsky",
    "indicatorId": "bdmo_y48942015",
    "year": 2024,
    "value": -496525.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "yanaulsky",
    "indicatorId": "bdmo_y48942015",
    "year": 2024,
    "value": -26751.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "abzelilovsky",
    "indicatorId": "bdmo_y48942016",
    "year": 2024,
    "value": 303758.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "agidel",
    "indicatorId": "bdmo_y48942016",
    "year": 2024,
    "value": 63142.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "alsheevsky",
    "indicatorId": "bdmo_y48942016",
    "year": 2024,
    "value": 158554.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "aurgazinsky",
    "indicatorId": "bdmo_y48942016",
    "year": 2024,
    "value": 498778.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "baymaksky",
    "indicatorId": "bdmo_y48942016",
    "year": 2024,
    "value": 167896.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "belebeyevsky",
    "indicatorId": "bdmo_y48942016",
    "year": 2024,
    "value": 1840122.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "beloretsk",
    "indicatorId": "bdmo_y48942016",
    "year": 2024,
    "value": 368705.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "birsk",
    "indicatorId": "bdmo_y48942016",
    "year": 2024,
    "value": 215628.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "blagovarsky",
    "indicatorId": "bdmo_y48942016",
    "year": 2024,
    "value": 2790184.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "blagoveshchensky",
    "indicatorId": "bdmo_y48942016",
    "year": 2024,
    "value": 2640501.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "buzdyaksky",
    "indicatorId": "bdmo_y48942016",
    "year": 2024,
    "value": 1014439.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "chekmagushevsky",
    "indicatorId": "bdmo_y48942016",
    "year": 2024,
    "value": 1829255.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "chishminsky",
    "indicatorId": "bdmo_y48942016",
    "year": 2024,
    "value": 2256253.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "davlekanovsky",
    "indicatorId": "bdmo_y48942016",
    "year": 2024,
    "value": 170095.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "duvansky",
    "indicatorId": "bdmo_y48942016",
    "year": 2024,
    "value": 19041.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "dyurtyulinsky",
    "indicatorId": "bdmo_y48942016",
    "year": 2024,
    "value": 39273.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "gafuriysky",
    "indicatorId": "bdmo_y48942016",
    "year": 2024,
    "value": 54825.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "iglinsky",
    "indicatorId": "bdmo_y48942016",
    "year": 2024,
    "value": 83916.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ilishevsky",
    "indicatorId": "bdmo_y48942016",
    "year": 2024,
    "value": 280748.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ishimbay",
    "indicatorId": "bdmo_y48942016",
    "year": 2024,
    "value": 15799.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "karmaskalinsky",
    "indicatorId": "bdmo_y48942016",
    "year": 2024,
    "value": 125628.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "khaibullinsky",
    "indicatorId": "bdmo_y48942016",
    "year": 2024,
    "value": 149972.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kugarchinsky",
    "indicatorId": "bdmo_y48942016",
    "year": 2024,
    "value": 33065.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kumertau",
    "indicatorId": "bdmo_y48942016",
    "year": 2024,
    "value": 3439455.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kuyurgazinsky",
    "indicatorId": "bdmo_y48942016",
    "year": 2024,
    "value": 1478407.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "meleuz",
    "indicatorId": "bdmo_y48942016",
    "year": 2024,
    "value": 900588.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "miyakinsky",
    "indicatorId": "bdmo_y48942016",
    "year": 2024,
    "value": 5169.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "neftekamsk",
    "indicatorId": "bdmo_y48942016",
    "year": 2024,
    "value": 1935116.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "oktyabrsky",
    "indicatorId": "bdmo_y48942016",
    "year": 2024,
    "value": 5419.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "salavat",
    "indicatorId": "bdmo_y48942016",
    "year": 2024,
    "value": 240160.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sibay",
    "indicatorId": "bdmo_y48942016",
    "year": 2024,
    "value": 552832.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamak",
    "indicatorId": "bdmo_y48942016",
    "year": 2024,
    "value": 102500.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamaksky",
    "indicatorId": "bdmo_y48942016",
    "year": 2024,
    "value": 3337118.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "tatyshlinsky",
    "indicatorId": "bdmo_y48942016",
    "year": 2024,
    "value": 45412.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "tuymazy",
    "indicatorId": "bdmo_y48942016",
    "year": 2024,
    "value": 1913412.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "uchaly",
    "indicatorId": "bdmo_y48942016",
    "year": 2024,
    "value": 9270.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufa",
    "indicatorId": "bdmo_y48942016",
    "year": 2024,
    "value": 277514291.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufimsky",
    "indicatorId": "bdmo_y48942016",
    "year": 2024,
    "value": 814732.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "yanaulsky",
    "indicatorId": "bdmo_y48942016",
    "year": 2024,
    "value": 37952.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "abzelilovsky",
    "indicatorId": "bdmo_y48942017",
    "year": 2024,
    "value": 40.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "agidel",
    "indicatorId": "bdmo_y48942017",
    "year": 2024,
    "value": 100.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "alsheevsky",
    "indicatorId": "bdmo_y48942017",
    "year": 2024,
    "value": 20.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "arkhangelsky",
    "indicatorId": "bdmo_y48942017",
    "year": 2024,
    "value": 100.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "aurgazinsky",
    "indicatorId": "bdmo_y48942017",
    "year": 2024,
    "value": 40.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "bakalinsky",
    "indicatorId": "bdmo_y48942017",
    "year": 2024,
    "value": 100.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "baymaksky",
    "indicatorId": "bdmo_y48942017",
    "year": 2024,
    "value": 100.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "belebeyevsky",
    "indicatorId": "bdmo_y48942017",
    "year": 2024,
    "value": 22.2,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "beloretsk",
    "indicatorId": "bdmo_y48942017",
    "year": 2024,
    "value": 25.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "blagoveshchensky",
    "indicatorId": "bdmo_y48942017",
    "year": 2024,
    "value": 41.2,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "buzdyaksky",
    "indicatorId": "bdmo_y48942017",
    "year": 2024,
    "value": 25.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "chekmagushevsky",
    "indicatorId": "bdmo_y48942017",
    "year": 2024,
    "value": 66.7,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "chishminsky",
    "indicatorId": "bdmo_y48942017",
    "year": 2024,
    "value": 33.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "duvansky",
    "indicatorId": "bdmo_y48942017",
    "year": 2024,
    "value": 100.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "dyurtyulinsky",
    "indicatorId": "bdmo_y48942017",
    "year": 2024,
    "value": 20.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "fedorovsky",
    "indicatorId": "bdmo_y48942017",
    "year": 2024,
    "value": 100.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ilishevsky",
    "indicatorId": "bdmo_y48942017",
    "year": 2024,
    "value": 20.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ishimbay",
    "indicatorId": "bdmo_y48942017",
    "year": 2024,
    "value": 100.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kaltasinsky",
    "indicatorId": "bdmo_y48942017",
    "year": 2024,
    "value": 66.7,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "karaidelsky",
    "indicatorId": "bdmo_y48942017",
    "year": 2024,
    "value": 100.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "khaibullinsky",
    "indicatorId": "bdmo_y48942017",
    "year": 2024,
    "value": 50.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kugarchinsky",
    "indicatorId": "bdmo_y48942017",
    "year": 2024,
    "value": 50.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kumertau",
    "indicatorId": "bdmo_y48942017",
    "year": 2024,
    "value": 100.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kushnarenkovsky",
    "indicatorId": "bdmo_y48942017",
    "year": 2024,
    "value": 100.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kuyurgazinsky",
    "indicatorId": "bdmo_y48942017",
    "year": 2024,
    "value": 100.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "meleuz",
    "indicatorId": "bdmo_y48942017",
    "year": 2024,
    "value": 14.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "miyakinsky",
    "indicatorId": "bdmo_y48942017",
    "year": 2024,
    "value": 50.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "neftekamsk",
    "indicatorId": "bdmo_y48942017",
    "year": 2024,
    "value": 100.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "nurimanovsky",
    "indicatorId": "bdmo_y48942017",
    "year": 2024,
    "value": 100.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "oktyabrsky",
    "indicatorId": "bdmo_y48942017",
    "year": 2024,
    "value": 20.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "salavat",
    "indicatorId": "bdmo_y48942017",
    "year": 2024,
    "value": 24.2,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "salavatsky",
    "indicatorId": "bdmo_y48942017",
    "year": 2024,
    "value": 100.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sharansky",
    "indicatorId": "bdmo_y48942017",
    "year": 2024,
    "value": 100.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sibay",
    "indicatorId": "bdmo_y48942017",
    "year": 2024,
    "value": 100.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamak",
    "indicatorId": "bdmo_y48942017",
    "year": 2024,
    "value": 100.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamaksky",
    "indicatorId": "bdmo_y48942017",
    "year": 2024,
    "value": 25.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "tuymazy",
    "indicatorId": "bdmo_y48942017",
    "year": 2024,
    "value": 16.7,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "uchaly",
    "indicatorId": "bdmo_y48942017",
    "year": 2024,
    "value": 14.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufa",
    "indicatorId": "bdmo_y48942017",
    "year": 2024,
    "value": 12.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufimsky",
    "indicatorId": "bdmo_y48942017",
    "year": 2024,
    "value": 50.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "yanaulsky",
    "indicatorId": "bdmo_y48942017",
    "year": 2024,
    "value": 50.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "zianchurinsky",
    "indicatorId": "bdmo_y48942017",
    "year": 2024,
    "value": 100.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "abzelilovsky",
    "indicatorId": "bdmo_y48942018",
    "year": 2024,
    "value": 100.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "agidel",
    "indicatorId": "bdmo_y48942018",
    "year": 2024,
    "value": 100.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "alsheevsky",
    "indicatorId": "bdmo_y48942018",
    "year": 2024,
    "value": 80.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "askinsky",
    "indicatorId": "bdmo_y48942018",
    "year": 2024,
    "value": 100.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "aurgazinsky",
    "indicatorId": "bdmo_y48942018",
    "year": 2024,
    "value": 100.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "bakalinsky",
    "indicatorId": "bdmo_y48942018",
    "year": 2024,
    "value": 100.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "baymaksky",
    "indicatorId": "bdmo_y48942018",
    "year": 2024,
    "value": 57.1,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "belebeyevsky",
    "indicatorId": "bdmo_y48942018",
    "year": 2024,
    "value": 100.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "beloretsk",
    "indicatorId": "bdmo_y48942018",
    "year": 2024,
    "value": 100.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "birsk",
    "indicatorId": "bdmo_y48942018",
    "year": 2024,
    "value": 100.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "bizhbulyaksky",
    "indicatorId": "bdmo_y48942018",
    "year": 2024,
    "value": 100.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "blagovarsky",
    "indicatorId": "bdmo_y48942018",
    "year": 2024,
    "value": 100.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "blagoveshchensky",
    "indicatorId": "bdmo_y48942018",
    "year": 2024,
    "value": 77.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "buraevsky",
    "indicatorId": "bdmo_y48942018",
    "year": 2024,
    "value": 100.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "burzyansky",
    "indicatorId": "bdmo_y48942018",
    "year": 2024,
    "value": 100.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "buzdyaksky",
    "indicatorId": "bdmo_y48942018",
    "year": 2024,
    "value": 100.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "chekmagushevsky",
    "indicatorId": "bdmo_y48942018",
    "year": 2024,
    "value": 100.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "chishminsky",
    "indicatorId": "bdmo_y48942018",
    "year": 2024,
    "value": 100.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "davlekanovsky",
    "indicatorId": "bdmo_y48942018",
    "year": 2024,
    "value": 100.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "duvansky",
    "indicatorId": "bdmo_y48942018",
    "year": 2024,
    "value": 100.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "dyurtyulinsky",
    "indicatorId": "bdmo_y48942018",
    "year": 2024,
    "value": 100.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ermekeyevsky",
    "indicatorId": "bdmo_y48942018",
    "year": 2024,
    "value": 100.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "gafuriysky",
    "indicatorId": "bdmo_y48942018",
    "year": 2024,
    "value": 100.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "iglinsky",
    "indicatorId": "bdmo_y48942018",
    "year": 2024,
    "value": 100.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ilishevsky",
    "indicatorId": "bdmo_y48942018",
    "year": 2024,
    "value": 100.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ishimbay",
    "indicatorId": "bdmo_y48942018",
    "year": 2024,
    "value": 100.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kaltasinsky",
    "indicatorId": "bdmo_y48942018",
    "year": 2024,
    "value": 33.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "karaidelsky",
    "indicatorId": "bdmo_y48942018",
    "year": 2024,
    "value": 66.7,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "karmaskalinsky",
    "indicatorId": "bdmo_y48942018",
    "year": 2024,
    "value": 100.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "khaibullinsky",
    "indicatorId": "bdmo_y48942018",
    "year": 2024,
    "value": 50.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "krasnokamsky",
    "indicatorId": "bdmo_y48942018",
    "year": 2024,
    "value": 100.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kugarchinsky",
    "indicatorId": "bdmo_y48942018",
    "year": 2024,
    "value": 50.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kumertau",
    "indicatorId": "bdmo_y48942018",
    "year": 2024,
    "value": 68.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kuyurgazinsky",
    "indicatorId": "bdmo_y48942018",
    "year": 2024,
    "value": 50.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "mechetlinsky",
    "indicatorId": "bdmo_y48942018",
    "year": 2024,
    "value": 100.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "meleuz",
    "indicatorId": "bdmo_y48942018",
    "year": 2024,
    "value": 100.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "mishkinsky",
    "indicatorId": "bdmo_y48942018",
    "year": 2024,
    "value": 100.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "miyakinsky",
    "indicatorId": "bdmo_y48942018",
    "year": 2024,
    "value": 50.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "neftekamsk",
    "indicatorId": "bdmo_y48942018",
    "year": 2024,
    "value": 100.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "nurimanovsky",
    "indicatorId": "bdmo_y48942018",
    "year": 2024,
    "value": 100.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "oktyabrsky",
    "indicatorId": "bdmo_y48942018",
    "year": 2024,
    "value": 100.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "salavat",
    "indicatorId": "bdmo_y48942018",
    "year": 2024,
    "value": 100.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "salavatsky",
    "indicatorId": "bdmo_y48942018",
    "year": 2024,
    "value": 50.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sharansky",
    "indicatorId": "bdmo_y48942018",
    "year": 2024,
    "value": 100.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sibay",
    "indicatorId": "bdmo_y48942018",
    "year": 2024,
    "value": 100.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlibashevsky",
    "indicatorId": "bdmo_y48942018",
    "year": 2024,
    "value": 100.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamak",
    "indicatorId": "bdmo_y48942018",
    "year": 2024,
    "value": 60.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamaksky",
    "indicatorId": "bdmo_y48942018",
    "year": 2024,
    "value": 75.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "tatyshlinsky",
    "indicatorId": "bdmo_y48942018",
    "year": 2024,
    "value": 100.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "tuymazy",
    "indicatorId": "bdmo_y48942018",
    "year": 2024,
    "value": 83.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "uchaly",
    "indicatorId": "bdmo_y48942018",
    "year": 2024,
    "value": 50.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufa",
    "indicatorId": "bdmo_y48942018",
    "year": 2024,
    "value": 70.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufimsky",
    "indicatorId": "bdmo_y48942018",
    "year": 2024,
    "value": 50.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "yanaulsky",
    "indicatorId": "bdmo_y48942018",
    "year": 2024,
    "value": 75.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "zianchurinsky",
    "indicatorId": "bdmo_y48942018",
    "year": 2024,
    "value": 66.7,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "zilairsky",
    "indicatorId": "bdmo_y48942018",
    "year": 2024,
    "value": 100.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "abzelilovsky",
    "indicatorId": "bdmo_y48942019",
    "year": 2024,
    "value": 100.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "aurgazinsky",
    "indicatorId": "bdmo_y48942019",
    "year": 2024,
    "value": 100.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "baymaksky",
    "indicatorId": "bdmo_y48942019",
    "year": 2024,
    "value": 100.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "belebeyevsky",
    "indicatorId": "bdmo_y48942019",
    "year": 2024,
    "value": 50.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "birsk",
    "indicatorId": "bdmo_y48942019",
    "year": 2024,
    "value": 100.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "blagovarsky",
    "indicatorId": "bdmo_y48942019",
    "year": 2024,
    "value": 100.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "buzdyaksky",
    "indicatorId": "bdmo_y48942019",
    "year": 2024,
    "value": 66.7,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "chekmagushevsky",
    "indicatorId": "bdmo_y48942019",
    "year": 2024,
    "value": 100.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "duvansky",
    "indicatorId": "bdmo_y48942019",
    "year": 2024,
    "value": 100.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "dyurtyulinsky",
    "indicatorId": "bdmo_y48942019",
    "year": 2024,
    "value": 100.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "iglinsky",
    "indicatorId": "bdmo_y48942019",
    "year": 2024,
    "value": 100.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ilishevsky",
    "indicatorId": "bdmo_y48942019",
    "year": 2024,
    "value": 100.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "karmaskalinsky",
    "indicatorId": "bdmo_y48942019",
    "year": 2024,
    "value": 100.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "krasnokamsky",
    "indicatorId": "bdmo_y48942019",
    "year": 2024,
    "value": 100.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kugarchinsky",
    "indicatorId": "bdmo_y48942019",
    "year": 2024,
    "value": 100.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kuyurgazinsky",
    "indicatorId": "bdmo_y48942019",
    "year": 2024,
    "value": 100.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "mechetlinsky",
    "indicatorId": "bdmo_y48942019",
    "year": 2024,
    "value": 100.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "meleuz",
    "indicatorId": "bdmo_y48942019",
    "year": 2024,
    "value": 100.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "miyakinsky",
    "indicatorId": "bdmo_y48942019",
    "year": 2024,
    "value": 50.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlibashevsky",
    "indicatorId": "bdmo_y48942019",
    "year": 2024,
    "value": 100.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamaksky",
    "indicatorId": "bdmo_y48942019",
    "year": 2024,
    "value": 75.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "tatyshlinsky",
    "indicatorId": "bdmo_y48942019",
    "year": 2024,
    "value": 100.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "tuymazy",
    "indicatorId": "bdmo_y48942019",
    "year": 2024,
    "value": 100.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "uchaly",
    "indicatorId": "bdmo_y48942019",
    "year": 2024,
    "value": 100.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufimsky",
    "indicatorId": "bdmo_y48942019",
    "year": 2024,
    "value": 50.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "yanaulsky",
    "indicatorId": "bdmo_y48942019",
    "year": 2024,
    "value": 75.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "zianchurinsky",
    "indicatorId": "bdmo_y48942019",
    "year": 2024,
    "value": 100.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "aurgazinsky",
    "indicatorId": "bdmo_y49010001",
    "year": 2024,
    "value": 96490.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "bakalinsky",
    "indicatorId": "bdmo_y49010001",
    "year": 2024,
    "value": 13000.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "baltachevsky",
    "indicatorId": "bdmo_y49010001",
    "year": 2024,
    "value": 35397.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "belebeyevsky",
    "indicatorId": "bdmo_y49010001",
    "year": 2024,
    "value": 27425.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "chekmagushevsky",
    "indicatorId": "bdmo_y49010001",
    "year": 2024,
    "value": 109579.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "davlekanovsky",
    "indicatorId": "bdmo_y49010001",
    "year": 2024,
    "value": 191600.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "duvansky",
    "indicatorId": "bdmo_y49010001",
    "year": 2024,
    "value": 32897.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "dyurtyulinsky",
    "indicatorId": "bdmo_y49010001",
    "year": 2024,
    "value": 111806.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ermekeyevsky",
    "indicatorId": "bdmo_y49010001",
    "year": 2024,
    "value": 88500.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "fedorovsky",
    "indicatorId": "bdmo_y49010001",
    "year": 2024,
    "value": 92015.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ilishevsky",
    "indicatorId": "bdmo_y49010001",
    "year": 2024,
    "value": 144233.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kugarchinsky",
    "indicatorId": "bdmo_y49010001",
    "year": 2024,
    "value": 20410.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kuyurgazinsky",
    "indicatorId": "bdmo_y49010001",
    "year": 2024,
    "value": 138261.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "meleuz",
    "indicatorId": "bdmo_y49010001",
    "year": 2024,
    "value": 133613.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "miyakinsky",
    "indicatorId": "bdmo_y49010001",
    "year": 2024,
    "value": 107249.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "tatyshlinsky",
    "indicatorId": "bdmo_y49010001",
    "year": 2024,
    "value": 115974.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "tuymazy",
    "indicatorId": "bdmo_y49010001",
    "year": 2024,
    "value": 86503.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "zianchurinsky",
    "indicatorId": "bdmo_y49010001",
    "year": 2024,
    "value": 19010.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "abzelilovsky",
    "indicatorId": "bdmo_y49010002",
    "year": 2024,
    "value": 553.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "agidel",
    "indicatorId": "bdmo_y49010002",
    "year": 2024,
    "value": 129.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "alsheevsky",
    "indicatorId": "bdmo_y49010002",
    "year": 2024,
    "value": 368.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "arkhangelsky",
    "indicatorId": "bdmo_y49010002",
    "year": 2024,
    "value": 197.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "askinsky",
    "indicatorId": "bdmo_y49010002",
    "year": 2024,
    "value": 193.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "aurgazinsky",
    "indicatorId": "bdmo_y49010002",
    "year": 2024,
    "value": 288.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "bakalinsky",
    "indicatorId": "bdmo_y49010002",
    "year": 2024,
    "value": 246.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "baltachevsky",
    "indicatorId": "bdmo_y49010002",
    "year": 2024,
    "value": 174.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "baymaksky",
    "indicatorId": "bdmo_y49010002",
    "year": 2024,
    "value": 485.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "belebeyevsky",
    "indicatorId": "bdmo_y49010002",
    "year": 2024,
    "value": 760.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "belokataysky",
    "indicatorId": "bdmo_y49010002",
    "year": 2024,
    "value": 154.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "beloretsk",
    "indicatorId": "bdmo_y49010002",
    "year": 2024,
    "value": 924.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "birsk",
    "indicatorId": "bdmo_y49010002",
    "year": 2024,
    "value": 495.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "bizhbulyaksky",
    "indicatorId": "bdmo_y49010002",
    "year": 2024,
    "value": 184.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "blagovarsky",
    "indicatorId": "bdmo_y49010002",
    "year": 2024,
    "value": 231.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "blagoveshchensky",
    "indicatorId": "bdmo_y49010002",
    "year": 2024,
    "value": 655.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "buraevsky",
    "indicatorId": "bdmo_y49010002",
    "year": 2024,
    "value": 201.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "burzyansky",
    "indicatorId": "bdmo_y49010002",
    "year": 2024,
    "value": 185.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "buzdyaksky",
    "indicatorId": "bdmo_y49010002",
    "year": 2024,
    "value": 218.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "chekmagushevsky",
    "indicatorId": "bdmo_y49010002",
    "year": 2024,
    "value": 223.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "chishminsky",
    "indicatorId": "bdmo_y49010002",
    "year": 2024,
    "value": 670.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "davlekanovsky",
    "indicatorId": "bdmo_y49010002",
    "year": 2024,
    "value": 432.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "duvansky",
    "indicatorId": "bdmo_y49010002",
    "year": 2024,
    "value": 292.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "dyurtyulinsky",
    "indicatorId": "bdmo_y49010002",
    "year": 2024,
    "value": 474.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ermekeyevsky",
    "indicatorId": "bdmo_y49010002",
    "year": 2024,
    "value": 144.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "fedorovsky",
    "indicatorId": "bdmo_y49010002",
    "year": 2024,
    "value": 181.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "gafuriysky",
    "indicatorId": "bdmo_y49010002",
    "year": 2024,
    "value": 320.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "iglinsky",
    "indicatorId": "bdmo_y49010002",
    "year": 2024,
    "value": 752.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ilishevsky",
    "indicatorId": "bdmo_y49010002",
    "year": 2024,
    "value": 308.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ishimbay",
    "indicatorId": "bdmo_y49010002",
    "year": 2024,
    "value": 853.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kaltasinsky",
    "indicatorId": "bdmo_y49010002",
    "year": 2024,
    "value": 165.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "karaidelsky",
    "indicatorId": "bdmo_y49010002",
    "year": 2024,
    "value": 329.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "karmaskalinsky",
    "indicatorId": "bdmo_y49010002",
    "year": 2024,
    "value": 593.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "khaibullinsky",
    "indicatorId": "bdmo_y49010002",
    "year": 2024,
    "value": 231.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kiginsky",
    "indicatorId": "bdmo_y49010002",
    "year": 2024,
    "value": 172.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "krasnokamsky",
    "indicatorId": "bdmo_y49010002",
    "year": 2024,
    "value": 280.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kugarchinsky",
    "indicatorId": "bdmo_y49010002",
    "year": 2024,
    "value": 266.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kumertau",
    "indicatorId": "bdmo_y49010002",
    "year": 2024,
    "value": 632.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kushnarenkovsky",
    "indicatorId": "bdmo_y49010002",
    "year": 2024,
    "value": 351.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kuyurgazinsky",
    "indicatorId": "bdmo_y49010002",
    "year": 2024,
    "value": 213.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "mechetlinsky",
    "indicatorId": "bdmo_y49010002",
    "year": 2024,
    "value": 189.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "meleuz",
    "indicatorId": "bdmo_y49010002",
    "year": 2024,
    "value": 784.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "mishkinsky",
    "indicatorId": "bdmo_y49010002",
    "year": 2024,
    "value": 137.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "miyakinsky",
    "indicatorId": "bdmo_y49010002",
    "year": 2024,
    "value": 256.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "neftekamsk",
    "indicatorId": "bdmo_y49010002",
    "year": 2024,
    "value": 1630.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "nurimanovsky",
    "indicatorId": "bdmo_y49010002",
    "year": 2024,
    "value": 225.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "oktyabrsky",
    "indicatorId": "bdmo_y49010002",
    "year": 2024,
    "value": 1514.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "salavat",
    "indicatorId": "bdmo_y49010002",
    "year": 2024,
    "value": 1485.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "salavatsky",
    "indicatorId": "bdmo_y49010002",
    "year": 2024,
    "value": 221.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sharansky",
    "indicatorId": "bdmo_y49010002",
    "year": 2024,
    "value": 178.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sibay",
    "indicatorId": "bdmo_y49010002",
    "year": 2024,
    "value": 652.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlibashevsky",
    "indicatorId": "bdmo_y49010002",
    "year": 2024,
    "value": 195.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamak",
    "indicatorId": "bdmo_y49010002",
    "year": 2024,
    "value": 3209.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamaksky",
    "indicatorId": "bdmo_y49010002",
    "year": 2024,
    "value": 608.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "tatyshlinsky",
    "indicatorId": "bdmo_y49010002",
    "year": 2024,
    "value": 178.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "tuymazy",
    "indicatorId": "bdmo_y49010002",
    "year": 2024,
    "value": 1425.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "uchaly",
    "indicatorId": "bdmo_y49010002",
    "year": 2024,
    "value": 745.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufa",
    "indicatorId": "bdmo_y49010002",
    "year": 2024,
    "value": 36334.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufimsky",
    "indicatorId": "bdmo_y49010002",
    "year": 2024,
    "value": 2451.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "yanaulsky",
    "indicatorId": "bdmo_y49010002",
    "year": 2024,
    "value": 284.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "zianchurinsky",
    "indicatorId": "bdmo_y49010002",
    "year": 2024,
    "value": 219.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "zilairsky",
    "indicatorId": "bdmo_y49010002",
    "year": 2024,
    "value": 160.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "abzelilovsky",
    "indicatorId": "bdmo_y49010003",
    "year": 2024,
    "value": 921.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "agidel",
    "indicatorId": "bdmo_y49010003",
    "year": 2024,
    "value": 294.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "alsheevsky",
    "indicatorId": "bdmo_y49010003",
    "year": 2024,
    "value": 824.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "arkhangelsky",
    "indicatorId": "bdmo_y49010003",
    "year": 2024,
    "value": 336.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "askinsky",
    "indicatorId": "bdmo_y49010003",
    "year": 2024,
    "value": 369.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "aurgazinsky",
    "indicatorId": "bdmo_y49010003",
    "year": 2024,
    "value": 657.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "bakalinsky",
    "indicatorId": "bdmo_y49010003",
    "year": 2024,
    "value": 463.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "baltachevsky",
    "indicatorId": "bdmo_y49010003",
    "year": 2024,
    "value": 309.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "baymaksky",
    "indicatorId": "bdmo_y49010003",
    "year": 2024,
    "value": 1123.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "belebeyevsky",
    "indicatorId": "bdmo_y49010003",
    "year": 2024,
    "value": 1699.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "belokataysky",
    "indicatorId": "bdmo_y49010003",
    "year": 2024,
    "value": 303.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "beloretsk",
    "indicatorId": "bdmo_y49010003",
    "year": 2024,
    "value": 2288.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "birsk",
    "indicatorId": "bdmo_y49010003",
    "year": 2024,
    "value": 1126.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "bizhbulyaksky",
    "indicatorId": "bdmo_y49010003",
    "year": 2024,
    "value": 460.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "blagovarsky",
    "indicatorId": "bdmo_y49010003",
    "year": 2024,
    "value": 444.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "blagoveshchensky",
    "indicatorId": "bdmo_y49010003",
    "year": 2024,
    "value": 1098.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "buraevsky",
    "indicatorId": "bdmo_y49010003",
    "year": 2024,
    "value": 433.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "burzyansky",
    "indicatorId": "bdmo_y49010003",
    "year": 2024,
    "value": 412.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "buzdyaksky",
    "indicatorId": "bdmo_y49010003",
    "year": 2024,
    "value": 542.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "chekmagushevsky",
    "indicatorId": "bdmo_y49010003",
    "year": 2024,
    "value": 572.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "chishminsky",
    "indicatorId": "bdmo_y49010003",
    "year": 2024,
    "value": 1177.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "davlekanovsky",
    "indicatorId": "bdmo_y49010003",
    "year": 2024,
    "value": 823.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "duvansky",
    "indicatorId": "bdmo_y49010003",
    "year": 2024,
    "value": 628.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "dyurtyulinsky",
    "indicatorId": "bdmo_y49010003",
    "year": 2024,
    "value": 1144.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ermekeyevsky",
    "indicatorId": "bdmo_y49010003",
    "year": 2024,
    "value": 227.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "fedorovsky",
    "indicatorId": "bdmo_y49010003",
    "year": 2024,
    "value": 282.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "gafuriysky",
    "indicatorId": "bdmo_y49010003",
    "year": 2024,
    "value": 587.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "iglinsky",
    "indicatorId": "bdmo_y49010003",
    "year": 2024,
    "value": 1945.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ilishevsky",
    "indicatorId": "bdmo_y49010003",
    "year": 2024,
    "value": 646.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ishimbay",
    "indicatorId": "bdmo_y49010003",
    "year": 2024,
    "value": 1670.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kaltasinsky",
    "indicatorId": "bdmo_y49010003",
    "year": 2024,
    "value": 297.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "karaidelsky",
    "indicatorId": "bdmo_y49010003",
    "year": 2024,
    "value": 520.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "karmaskalinsky",
    "indicatorId": "bdmo_y49010003",
    "year": 2024,
    "value": 1127.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "khaibullinsky",
    "indicatorId": "bdmo_y49010003",
    "year": 2024,
    "value": 527.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kiginsky",
    "indicatorId": "bdmo_y49010003",
    "year": 2024,
    "value": 371.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "krasnokamsky",
    "indicatorId": "bdmo_y49010003",
    "year": 2024,
    "value": 544.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kugarchinsky",
    "indicatorId": "bdmo_y49010003",
    "year": 2024,
    "value": 491.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kumertau",
    "indicatorId": "bdmo_y49010003",
    "year": 2024,
    "value": 1260.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kushnarenkovsky",
    "indicatorId": "bdmo_y49010003",
    "year": 2024,
    "value": 704.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kuyurgazinsky",
    "indicatorId": "bdmo_y49010003",
    "year": 2024,
    "value": 461.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "mechetlinsky",
    "indicatorId": "bdmo_y49010003",
    "year": 2024,
    "value": 489.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "meleuz",
    "indicatorId": "bdmo_y49010003",
    "year": 2024,
    "value": 1749.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "mishkinsky",
    "indicatorId": "bdmo_y49010003",
    "year": 2024,
    "value": 278.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "miyakinsky",
    "indicatorId": "bdmo_y49010003",
    "year": 2024,
    "value": 454.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "neftekamsk",
    "indicatorId": "bdmo_y49010003",
    "year": 2024,
    "value": 3512.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "nurimanovsky",
    "indicatorId": "bdmo_y49010003",
    "year": 2024,
    "value": 428.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "oktyabrsky",
    "indicatorId": "bdmo_y49010003",
    "year": 2024,
    "value": 3018.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "salavat",
    "indicatorId": "bdmo_y49010003",
    "year": 2024,
    "value": 2337.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "salavatsky",
    "indicatorId": "bdmo_y49010003",
    "year": 2024,
    "value": 440.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sharansky",
    "indicatorId": "bdmo_y49010003",
    "year": 2024,
    "value": 334.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sibay",
    "indicatorId": "bdmo_y49010003",
    "year": 2024,
    "value": 1340.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlibashevsky",
    "indicatorId": "bdmo_y49010003",
    "year": 2024,
    "value": 376.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamak",
    "indicatorId": "bdmo_y49010003",
    "year": 2024,
    "value": 5857.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamaksky",
    "indicatorId": "bdmo_y49010003",
    "year": 2024,
    "value": 1341.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "tatyshlinsky",
    "indicatorId": "bdmo_y49010003",
    "year": 2024,
    "value": 346.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "tuymazy",
    "indicatorId": "bdmo_y49010003",
    "year": 2024,
    "value": 2984.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "uchaly",
    "indicatorId": "bdmo_y49010003",
    "year": 2024,
    "value": 1487.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufa",
    "indicatorId": "bdmo_y49010003",
    "year": 2024,
    "value": 35189.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufimsky",
    "indicatorId": "bdmo_y49010003",
    "year": 2024,
    "value": 4565.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "yanaulsky",
    "indicatorId": "bdmo_y49010003",
    "year": 2024,
    "value": 803.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "zianchurinsky",
    "indicatorId": "bdmo_y49010003",
    "year": 2024,
    "value": 421.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "zilairsky",
    "indicatorId": "bdmo_y49010003",
    "year": 2024,
    "value": 253.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "abzelilovsky",
    "indicatorId": "bdmo_y49010004",
    "year": 2024,
    "value": 1148.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "agidel",
    "indicatorId": "bdmo_y49010004",
    "year": 2024,
    "value": 356.41,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "alsheevsky",
    "indicatorId": "bdmo_y49010004",
    "year": 2024,
    "value": 540.86,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "arkhangelsky",
    "indicatorId": "bdmo_y49010004",
    "year": 2024,
    "value": 282.88,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "askinsky",
    "indicatorId": "bdmo_y49010004",
    "year": 2024,
    "value": 251.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "aurgazinsky",
    "indicatorId": "bdmo_y49010004",
    "year": 2024,
    "value": 562.79,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "bakalinsky",
    "indicatorId": "bdmo_y49010004",
    "year": 2024,
    "value": 311.94,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "baltachevsky",
    "indicatorId": "bdmo_y49010004",
    "year": 2024,
    "value": 362.89,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "baymaksky",
    "indicatorId": "bdmo_y49010004",
    "year": 2024,
    "value": 421.13,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "belebeyevsky",
    "indicatorId": "bdmo_y49010004",
    "year": 2024,
    "value": 2265.83,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "belokataysky",
    "indicatorId": "bdmo_y49010004",
    "year": 2024,
    "value": 139.74,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "beloretsk",
    "indicatorId": "bdmo_y49010004",
    "year": 2024,
    "value": 1398.76,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "birsk",
    "indicatorId": "bdmo_y49010004",
    "year": 2024,
    "value": 1228.62,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "bizhbulyaksky",
    "indicatorId": "bdmo_y49010004",
    "year": 2024,
    "value": 558.67,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "blagovarsky",
    "indicatorId": "bdmo_y49010004",
    "year": 2024,
    "value": 248.63,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "blagoveshchensky",
    "indicatorId": "bdmo_y49010004",
    "year": 2024,
    "value": 1113.32,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "buraevsky",
    "indicatorId": "bdmo_y49010004",
    "year": 2024,
    "value": 306.59,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "burzyansky",
    "indicatorId": "bdmo_y49010004",
    "year": 2024,
    "value": 38.35,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "buzdyaksky",
    "indicatorId": "bdmo_y49010004",
    "year": 2024,
    "value": 318.69,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "chekmagushevsky",
    "indicatorId": "bdmo_y49010004",
    "year": 2024,
    "value": 452.32,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "chishminsky",
    "indicatorId": "bdmo_y49010004",
    "year": 2024,
    "value": 875.33,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "davlekanovsky",
    "indicatorId": "bdmo_y49010004",
    "year": 2024,
    "value": 638.71,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "duvansky",
    "indicatorId": "bdmo_y49010004",
    "year": 2024,
    "value": 254.19,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "dyurtyulinsky",
    "indicatorId": "bdmo_y49010004",
    "year": 2024,
    "value": 1275.76,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ermekeyevsky",
    "indicatorId": "bdmo_y49010004",
    "year": 2024,
    "value": 365.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "fedorovsky",
    "indicatorId": "bdmo_y49010004",
    "year": 2024,
    "value": 237.23,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "gafuriysky",
    "indicatorId": "bdmo_y49010004",
    "year": 2024,
    "value": 547.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "iglinsky",
    "indicatorId": "bdmo_y49010004",
    "year": 2024,
    "value": 1703.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ilishevsky",
    "indicatorId": "bdmo_y49010004",
    "year": 2024,
    "value": 505.1,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ishimbay",
    "indicatorId": "bdmo_y49010004",
    "year": 2024,
    "value": 1612.12,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kaltasinsky",
    "indicatorId": "bdmo_y49010004",
    "year": 2024,
    "value": 328.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "karaidelsky",
    "indicatorId": "bdmo_y49010004",
    "year": 2024,
    "value": 303.42,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "karmaskalinsky",
    "indicatorId": "bdmo_y49010004",
    "year": 2024,
    "value": 857.77,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "khaibullinsky",
    "indicatorId": "bdmo_y49010004",
    "year": 2024,
    "value": 369.36,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kiginsky",
    "indicatorId": "bdmo_y49010004",
    "year": 2024,
    "value": 194.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "krasnokamsky",
    "indicatorId": "bdmo_y49010004",
    "year": 2024,
    "value": 271.77,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kugarchinsky",
    "indicatorId": "bdmo_y49010004",
    "year": 2024,
    "value": 231.7,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kumertau",
    "indicatorId": "bdmo_y49010004",
    "year": 2024,
    "value": 1535.91,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kushnarenkovsky",
    "indicatorId": "bdmo_y49010004",
    "year": 2024,
    "value": 550.22,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kuyurgazinsky",
    "indicatorId": "bdmo_y49010004",
    "year": 2024,
    "value": 300.83,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "meleuz",
    "indicatorId": "bdmo_y49010004",
    "year": 2024,
    "value": 2076.82,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "mishkinsky",
    "indicatorId": "bdmo_y49010004",
    "year": 2024,
    "value": 280.36,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "miyakinsky",
    "indicatorId": "bdmo_y49010004",
    "year": 2024,
    "value": 411.38,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "neftekamsk",
    "indicatorId": "bdmo_y49010004",
    "year": 2024,
    "value": 3650.04,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "nurimanovsky",
    "indicatorId": "bdmo_y49010004",
    "year": 2024,
    "value": 324.45,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "oktyabrsky",
    "indicatorId": "bdmo_y49010004",
    "year": 2024,
    "value": 3174.12,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "salavat",
    "indicatorId": "bdmo_y49010004",
    "year": 2024,
    "value": 3495.9,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "salavatsky",
    "indicatorId": "bdmo_y49010004",
    "year": 2024,
    "value": 191.01,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sharansky",
    "indicatorId": "bdmo_y49010004",
    "year": 2024,
    "value": 331.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sibay",
    "indicatorId": "bdmo_y49010004",
    "year": 2024,
    "value": 1277.47,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlibashevsky",
    "indicatorId": "bdmo_y49010004",
    "year": 2024,
    "value": 277.74,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamak",
    "indicatorId": "bdmo_y49010004",
    "year": 2024,
    "value": 6057.2,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamaksky",
    "indicatorId": "bdmo_y49010004",
    "year": 2024,
    "value": 1285.16,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "tatyshlinsky",
    "indicatorId": "bdmo_y49010004",
    "year": 2024,
    "value": 338.03,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "tuymazy",
    "indicatorId": "bdmo_y49010004",
    "year": 2024,
    "value": 3329.98,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "uchaly",
    "indicatorId": "bdmo_y49010004",
    "year": 2024,
    "value": 856.67,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufa",
    "indicatorId": "bdmo_y49010004",
    "year": 2024,
    "value": 30962.34,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufimsky",
    "indicatorId": "bdmo_y49010004",
    "year": 2024,
    "value": 4331.16,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "yanaulsky",
    "indicatorId": "bdmo_y49010004",
    "year": 2024,
    "value": 936.71,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "zianchurinsky",
    "indicatorId": "bdmo_y49010004",
    "year": 2024,
    "value": 393.37,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "zilairsky",
    "indicatorId": "bdmo_y49010004",
    "year": 2024,
    "value": 119.39,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "abzelilovsky",
    "indicatorId": "bdmo_y49010005",
    "year": 2024,
    "value": 4193563.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "agidel",
    "indicatorId": "bdmo_y49010005",
    "year": 2024,
    "value": 602377.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "alsheevsky",
    "indicatorId": "bdmo_y49010005",
    "year": 2024,
    "value": 7176472.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "aurgazinsky",
    "indicatorId": "bdmo_y49010005",
    "year": 2024,
    "value": 5391997.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "baymaksky",
    "indicatorId": "bdmo_y49010005",
    "year": 2024,
    "value": 1334130.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "belebeyevsky",
    "indicatorId": "bdmo_y49010005",
    "year": 2024,
    "value": 20765943.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "beloretsk",
    "indicatorId": "bdmo_y49010005",
    "year": 2024,
    "value": 49209292.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "birsk",
    "indicatorId": "bdmo_y49010005",
    "year": 2024,
    "value": 2010187.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "blagovarsky",
    "indicatorId": "bdmo_y49010005",
    "year": 2024,
    "value": 9639530.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "blagoveshchensky",
    "indicatorId": "bdmo_y49010005",
    "year": 2024,
    "value": 45297657.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "buzdyaksky",
    "indicatorId": "bdmo_y49010005",
    "year": 2024,
    "value": 2928582.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "chekmagushevsky",
    "indicatorId": "bdmo_y49010005",
    "year": 2024,
    "value": 2443212.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "chishminsky",
    "indicatorId": "bdmo_y49010005",
    "year": 2024,
    "value": 538743.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "davlekanovsky",
    "indicatorId": "bdmo_y49010005",
    "year": 2024,
    "value": 7521317.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "duvansky",
    "indicatorId": "bdmo_y49010005",
    "year": 2024,
    "value": 2843859.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "dyurtyulinsky",
    "indicatorId": "bdmo_y49010005",
    "year": 2024,
    "value": 812898.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "gafuriysky",
    "indicatorId": "bdmo_y49010005",
    "year": 2024,
    "value": 1081823.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "iglinsky",
    "indicatorId": "bdmo_y49010005",
    "year": 2024,
    "value": 4133467.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ilishevsky",
    "indicatorId": "bdmo_y49010005",
    "year": 2024,
    "value": 1072995.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ishimbay",
    "indicatorId": "bdmo_y49010005",
    "year": 2024,
    "value": 440454.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kaltasinsky",
    "indicatorId": "bdmo_y49010005",
    "year": 2024,
    "value": 189335.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "karmaskalinsky",
    "indicatorId": "bdmo_y49010005",
    "year": 2024,
    "value": 1486289.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "khaibullinsky",
    "indicatorId": "bdmo_y49010005",
    "year": 2024,
    "value": 17251132.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kugarchinsky",
    "indicatorId": "bdmo_y49010005",
    "year": 2024,
    "value": 394128.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kumertau",
    "indicatorId": "bdmo_y49010005",
    "year": 2024,
    "value": 28205892.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kuyurgazinsky",
    "indicatorId": "bdmo_y49010005",
    "year": 2024,
    "value": 1129602.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "meleuz",
    "indicatorId": "bdmo_y49010005",
    "year": 2024,
    "value": 1930775.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "miyakinsky",
    "indicatorId": "bdmo_y49010005",
    "year": 2024,
    "value": 229107.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "neftekamsk",
    "indicatorId": "bdmo_y49010005",
    "year": 2024,
    "value": 74303458.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "oktyabrsky",
    "indicatorId": "bdmo_y49010005",
    "year": 2024,
    "value": 2034007.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "salavat",
    "indicatorId": "bdmo_y49010005",
    "year": 2024,
    "value": 466307358.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sharansky",
    "indicatorId": "bdmo_y49010005",
    "year": 2024,
    "value": 263774.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sibay",
    "indicatorId": "bdmo_y49010005",
    "year": 2024,
    "value": 4293629.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamak",
    "indicatorId": "bdmo_y49010005",
    "year": 2024,
    "value": 3023803.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamaksky",
    "indicatorId": "bdmo_y49010005",
    "year": 2024,
    "value": 4620530.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "tatyshlinsky",
    "indicatorId": "bdmo_y49010005",
    "year": 2024,
    "value": 261210.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "tuymazy",
    "indicatorId": "bdmo_y49010005",
    "year": 2024,
    "value": 19720496.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "uchaly",
    "indicatorId": "bdmo_y49010005",
    "year": 2024,
    "value": 51771739.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufa",
    "indicatorId": "bdmo_y49010005",
    "year": 2024,
    "value": 2846443811.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufimsky",
    "indicatorId": "bdmo_y49010005",
    "year": 2024,
    "value": 502809.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "yanaulsky",
    "indicatorId": "bdmo_y49010005",
    "year": 2024,
    "value": 1680759.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "abzelilovsky",
    "indicatorId": "bdmo_y49010006",
    "year": 2024,
    "value": 146493.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "agidel",
    "indicatorId": "bdmo_y49010006",
    "year": 2024,
    "value": 95091.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "alsheevsky",
    "indicatorId": "bdmo_y49010006",
    "year": 2024,
    "value": 386519.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "aurgazinsky",
    "indicatorId": "bdmo_y49010006",
    "year": 2024,
    "value": 473382.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "baymaksky",
    "indicatorId": "bdmo_y49010006",
    "year": 2024,
    "value": 203649.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "belebeyevsky",
    "indicatorId": "bdmo_y49010006",
    "year": 2024,
    "value": 2063950.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "beloretsk",
    "indicatorId": "bdmo_y49010006",
    "year": 2024,
    "value": 663684.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "birsk",
    "indicatorId": "bdmo_y49010006",
    "year": 2024,
    "value": 271611.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "blagoveshchensky",
    "indicatorId": "bdmo_y49010006",
    "year": 2024,
    "value": 5865012.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "buzdyaksky",
    "indicatorId": "bdmo_y49010006",
    "year": 2024,
    "value": 113552.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "chishminsky",
    "indicatorId": "bdmo_y49010006",
    "year": 2024,
    "value": 2501864.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "davlekanovsky",
    "indicatorId": "bdmo_y49010006",
    "year": 2024,
    "value": 545795.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "duvansky",
    "indicatorId": "bdmo_y49010006",
    "year": 2024,
    "value": 37651.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ishimbay",
    "indicatorId": "bdmo_y49010006",
    "year": 2024,
    "value": 1461626.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "karmaskalinsky",
    "indicatorId": "bdmo_y49010006",
    "year": 2024,
    "value": 252675.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "khaibullinsky",
    "indicatorId": "bdmo_y49010006",
    "year": 2024,
    "value": 2459562.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kugarchinsky",
    "indicatorId": "bdmo_y49010006",
    "year": 2024,
    "value": 70248.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kumertau",
    "indicatorId": "bdmo_y49010006",
    "year": 2024,
    "value": 8342805.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "meleuz",
    "indicatorId": "bdmo_y49010006",
    "year": 2024,
    "value": 3274545.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "neftekamsk",
    "indicatorId": "bdmo_y49010006",
    "year": 2024,
    "value": 3588762.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "oktyabrsky",
    "indicatorId": "bdmo_y49010006",
    "year": 2024,
    "value": 3723307.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "salavat",
    "indicatorId": "bdmo_y49010006",
    "year": 2024,
    "value": 316188.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sibay",
    "indicatorId": "bdmo_y49010006",
    "year": 2024,
    "value": 566804.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamak",
    "indicatorId": "bdmo_y49010006",
    "year": 2024,
    "value": 11585.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamaksky",
    "indicatorId": "bdmo_y49010006",
    "year": 2024,
    "value": 695961.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "tatyshlinsky",
    "indicatorId": "bdmo_y49010006",
    "year": 2024,
    "value": 9484.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "tuymazy",
    "indicatorId": "bdmo_y49010006",
    "year": 2024,
    "value": 1620417.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "uchaly",
    "indicatorId": "bdmo_y49010006",
    "year": 2024,
    "value": 38671.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufa",
    "indicatorId": "bdmo_y49010006",
    "year": 2024,
    "value": 111533117.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufimsky",
    "indicatorId": "bdmo_y49010006",
    "year": 2024,
    "value": 4951985.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "abzelilovsky",
    "indicatorId": "bdmo_y49010007",
    "year": 2024,
    "value": 784023.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "agidel",
    "indicatorId": "bdmo_y49010007",
    "year": 2024,
    "value": 50784.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "alsheevsky",
    "indicatorId": "bdmo_y49010007",
    "year": 2024,
    "value": 178687.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "aurgazinsky",
    "indicatorId": "bdmo_y49010007",
    "year": 2024,
    "value": 1104825.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "baymaksky",
    "indicatorId": "bdmo_y49010007",
    "year": 2024,
    "value": 63662.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "belebeyevsky",
    "indicatorId": "bdmo_y49010007",
    "year": 2024,
    "value": 2024192.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "beloretsk",
    "indicatorId": "bdmo_y49010007",
    "year": 2024,
    "value": 669907.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "birsk",
    "indicatorId": "bdmo_y49010007",
    "year": 2024,
    "value": 295366.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "blagovarsky",
    "indicatorId": "bdmo_y49010007",
    "year": 2024,
    "value": 2794052.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "blagoveshchensky",
    "indicatorId": "bdmo_y49010007",
    "year": 2024,
    "value": 4491366.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "buzdyaksky",
    "indicatorId": "bdmo_y49010007",
    "year": 2024,
    "value": 1076773.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "chekmagushevsky",
    "indicatorId": "bdmo_y49010007",
    "year": 2024,
    "value": 1207260.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "chishminsky",
    "indicatorId": "bdmo_y49010007",
    "year": 2024,
    "value": -75341.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "davlekanovsky",
    "indicatorId": "bdmo_y49010007",
    "year": 2024,
    "value": 496106.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "duvansky",
    "indicatorId": "bdmo_y49010007",
    "year": 2024,
    "value": 6956.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "dyurtyulinsky",
    "indicatorId": "bdmo_y49010007",
    "year": 2024,
    "value": 37047.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "gafuriysky",
    "indicatorId": "bdmo_y49010007",
    "year": 2024,
    "value": 56557.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "iglinsky",
    "indicatorId": "bdmo_y49010007",
    "year": 2024,
    "value": 109081.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ilishevsky",
    "indicatorId": "bdmo_y49010007",
    "year": 2024,
    "value": 232856.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ishimbay",
    "indicatorId": "bdmo_y49010007",
    "year": 2024,
    "value": -55155.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kaltasinsky",
    "indicatorId": "bdmo_y49010007",
    "year": 2024,
    "value": -6897.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "karaidelsky",
    "indicatorId": "bdmo_y49010007",
    "year": 2024,
    "value": 40971.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "karmaskalinsky",
    "indicatorId": "bdmo_y49010007",
    "year": 2024,
    "value": 125258.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "khaibullinsky",
    "indicatorId": "bdmo_y49010007",
    "year": 2024,
    "value": 4109254.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kugarchinsky",
    "indicatorId": "bdmo_y49010007",
    "year": 2024,
    "value": -9458.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kumertau",
    "indicatorId": "bdmo_y49010007",
    "year": 2024,
    "value": 4831.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kuyurgazinsky",
    "indicatorId": "bdmo_y49010007",
    "year": 2024,
    "value": 1172681.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "meleuz",
    "indicatorId": "bdmo_y49010007",
    "year": 2024,
    "value": 1946748.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "miyakinsky",
    "indicatorId": "bdmo_y49010007",
    "year": 2024,
    "value": -16178.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "neftekamsk",
    "indicatorId": "bdmo_y49010007",
    "year": 2024,
    "value": 3447663.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "oktyabrsky",
    "indicatorId": "bdmo_y49010007",
    "year": 2024,
    "value": 1806.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "salavat",
    "indicatorId": "bdmo_y49010007",
    "year": 2024,
    "value": -103670433.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sibay",
    "indicatorId": "bdmo_y49010007",
    "year": 2024,
    "value": 561573.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamak",
    "indicatorId": "bdmo_y49010007",
    "year": 2024,
    "value": 18865515.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamaksky",
    "indicatorId": "bdmo_y49010007",
    "year": 2024,
    "value": 1086753.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "tatyshlinsky",
    "indicatorId": "bdmo_y49010007",
    "year": 2024,
    "value": 44740.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "tuymazy",
    "indicatorId": "bdmo_y49010007",
    "year": 2024,
    "value": -5531.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "uchaly",
    "indicatorId": "bdmo_y49010007",
    "year": 2024,
    "value": 6730318.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufa",
    "indicatorId": "bdmo_y49010007",
    "year": 2024,
    "value": 2144263.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufimsky",
    "indicatorId": "bdmo_y49010007",
    "year": 2024,
    "value": 7383558.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "yanaulsky",
    "indicatorId": "bdmo_y49010007",
    "year": 2024,
    "value": 101459.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "abzelilovsky",
    "indicatorId": "bdmo_y49010024",
    "year": 2024,
    "value": 193.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "agidel",
    "indicatorId": "bdmo_y49010024",
    "year": 2024,
    "value": 418.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "alsheevsky",
    "indicatorId": "bdmo_y49010024",
    "year": 2024,
    "value": 1654.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "askinsky",
    "indicatorId": "bdmo_y49010024",
    "year": 2024,
    "value": 317.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "aurgazinsky",
    "indicatorId": "bdmo_y49010024",
    "year": 2024,
    "value": 242.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "bakalinsky",
    "indicatorId": "bdmo_y49010024",
    "year": 2024,
    "value": 1550.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "baltachevsky",
    "indicatorId": "bdmo_y49010024",
    "year": 2024,
    "value": 496.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "baymaksky",
    "indicatorId": "bdmo_y49010024",
    "year": 2024,
    "value": 1750.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "belebeyevsky",
    "indicatorId": "bdmo_y49010024",
    "year": 2024,
    "value": 3888.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "belokataysky",
    "indicatorId": "bdmo_y49010024",
    "year": 2024,
    "value": 475.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "beloretsk",
    "indicatorId": "bdmo_y49010024",
    "year": 2024,
    "value": 2317.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "birsk",
    "indicatorId": "bdmo_y49010024",
    "year": 2024,
    "value": 1609.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "bizhbulyaksky",
    "indicatorId": "bdmo_y49010024",
    "year": 2024,
    "value": 603.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "blagovarsky",
    "indicatorId": "bdmo_y49010024",
    "year": 2024,
    "value": 315.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "blagoveshchensky",
    "indicatorId": "bdmo_y49010024",
    "year": 2024,
    "value": 5023.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "buraevsky",
    "indicatorId": "bdmo_y49010024",
    "year": 2024,
    "value": 1499.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "burzyansky",
    "indicatorId": "bdmo_y49010024",
    "year": 2024,
    "value": 309.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "buzdyaksky",
    "indicatorId": "bdmo_y49010024",
    "year": 2024,
    "value": 261.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "chekmagushevsky",
    "indicatorId": "bdmo_y49010024",
    "year": 2024,
    "value": 115.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "chishminsky",
    "indicatorId": "bdmo_y49010024",
    "year": 2024,
    "value": 2995.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "davlekanovsky",
    "indicatorId": "bdmo_y49010024",
    "year": 2024,
    "value": 380.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "duvansky",
    "indicatorId": "bdmo_y49010024",
    "year": 2024,
    "value": 187.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "dyurtyulinsky",
    "indicatorId": "bdmo_y49010024",
    "year": 2024,
    "value": 5195.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "gafuriysky",
    "indicatorId": "bdmo_y49010024",
    "year": 2024,
    "value": 760.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "iglinsky",
    "indicatorId": "bdmo_y49010024",
    "year": 2024,
    "value": 536.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ilishevsky",
    "indicatorId": "bdmo_y49010024",
    "year": 2024,
    "value": 1117.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ishimbay",
    "indicatorId": "bdmo_y49010024",
    "year": 2024,
    "value": 6031.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kaltasinsky",
    "indicatorId": "bdmo_y49010024",
    "year": 2024,
    "value": 1202.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "karaidelsky",
    "indicatorId": "bdmo_y49010024",
    "year": 2024,
    "value": 132.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "karmaskalinsky",
    "indicatorId": "bdmo_y49010024",
    "year": 2024,
    "value": 436.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "khaibullinsky",
    "indicatorId": "bdmo_y49010024",
    "year": 2024,
    "value": 588.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kiginsky",
    "indicatorId": "bdmo_y49010024",
    "year": 2024,
    "value": 541.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "krasnokamsky",
    "indicatorId": "bdmo_y49010024",
    "year": 2024,
    "value": 922.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kugarchinsky",
    "indicatorId": "bdmo_y49010024",
    "year": 2024,
    "value": 832.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kumertau",
    "indicatorId": "bdmo_y49010024",
    "year": 2024,
    "value": 2837.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kushnarenkovsky",
    "indicatorId": "bdmo_y49010024",
    "year": 2024,
    "value": 236.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kuyurgazinsky",
    "indicatorId": "bdmo_y49010024",
    "year": 2024,
    "value": 635.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "mechetlinsky",
    "indicatorId": "bdmo_y49010024",
    "year": 2024,
    "value": 893.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "meleuz",
    "indicatorId": "bdmo_y49010024",
    "year": 2024,
    "value": 2953.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "mishkinsky",
    "indicatorId": "bdmo_y49010024",
    "year": 2024,
    "value": 588.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "miyakinsky",
    "indicatorId": "bdmo_y49010024",
    "year": 2024,
    "value": 577.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "neftekamsk",
    "indicatorId": "bdmo_y49010024",
    "year": 2024,
    "value": 6676.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "nurimanovsky",
    "indicatorId": "bdmo_y49010024",
    "year": 2024,
    "value": 2721.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "oktyabrsky",
    "indicatorId": "bdmo_y49010024",
    "year": 2024,
    "value": 5043.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "salavat",
    "indicatorId": "bdmo_y49010024",
    "year": 2024,
    "value": 3936.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "salavatsky",
    "indicatorId": "bdmo_y49010024",
    "year": 2024,
    "value": 1929.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sibay",
    "indicatorId": "bdmo_y49010024",
    "year": 2024,
    "value": 590.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamak",
    "indicatorId": "bdmo_y49010024",
    "year": 2024,
    "value": 1247.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamaksky",
    "indicatorId": "bdmo_y49010024",
    "year": 2024,
    "value": 508.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "tuymazy",
    "indicatorId": "bdmo_y49010024",
    "year": 2024,
    "value": 1457.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "uchaly",
    "indicatorId": "bdmo_y49010024",
    "year": 2024,
    "value": 5074.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufa",
    "indicatorId": "bdmo_y49010024",
    "year": 2024,
    "value": 76828.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufimsky",
    "indicatorId": "bdmo_y49010024",
    "year": 2024,
    "value": 10754.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "yanaulsky",
    "indicatorId": "bdmo_y49010024",
    "year": 2024,
    "value": 1938.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "zianchurinsky",
    "indicatorId": "bdmo_y49010024",
    "year": 2024,
    "value": 483.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "zilairsky",
    "indicatorId": "bdmo_y49010024",
    "year": 2024,
    "value": 224.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "abzelilovsky",
    "indicatorId": "bdmo_y49010025",
    "year": 2024,
    "value": 198.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "agidel",
    "indicatorId": "bdmo_y49010025",
    "year": 2024,
    "value": 89.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "alsheevsky",
    "indicatorId": "bdmo_y49010025",
    "year": 2024,
    "value": 197.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "askinsky",
    "indicatorId": "bdmo_y49010025",
    "year": 2024,
    "value": 99.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "aurgazinsky",
    "indicatorId": "bdmo_y49010025",
    "year": 2024,
    "value": 98.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "bakalinsky",
    "indicatorId": "bdmo_y49010025",
    "year": 2024,
    "value": 236.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "baltachevsky",
    "indicatorId": "bdmo_y49010025",
    "year": 2024,
    "value": 85.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "baymaksky",
    "indicatorId": "bdmo_y49010025",
    "year": 2024,
    "value": 244.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "belebeyevsky",
    "indicatorId": "bdmo_y49010025",
    "year": 2024,
    "value": 589.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "belokataysky",
    "indicatorId": "bdmo_y49010025",
    "year": 2024,
    "value": 63.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "beloretsk",
    "indicatorId": "bdmo_y49010025",
    "year": 2024,
    "value": 635.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "birsk",
    "indicatorId": "bdmo_y49010025",
    "year": 2024,
    "value": 333.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "bizhbulyaksky",
    "indicatorId": "bdmo_y49010025",
    "year": 2024,
    "value": 163.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "blagovarsky",
    "indicatorId": "bdmo_y49010025",
    "year": 2024,
    "value": 100.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "blagoveshchensky",
    "indicatorId": "bdmo_y49010025",
    "year": 2024,
    "value": 226.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "buraevsky",
    "indicatorId": "bdmo_y49010025",
    "year": 2024,
    "value": 136.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "burzyansky",
    "indicatorId": "bdmo_y49010025",
    "year": 2024,
    "value": 59.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "buzdyaksky",
    "indicatorId": "bdmo_y49010025",
    "year": 2024,
    "value": 114.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "chekmagushevsky",
    "indicatorId": "bdmo_y49010025",
    "year": 2024,
    "value": 198.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "chishminsky",
    "indicatorId": "bdmo_y49010025",
    "year": 2024,
    "value": 158.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "davlekanovsky",
    "indicatorId": "bdmo_y49010025",
    "year": 2024,
    "value": 213.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "duvansky",
    "indicatorId": "bdmo_y49010025",
    "year": 2024,
    "value": 153.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "dyurtyulinsky",
    "indicatorId": "bdmo_y49010025",
    "year": 2024,
    "value": 835.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "fedorovsky",
    "indicatorId": "bdmo_y49010025",
    "year": 2024,
    "value": 38.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "gafuriysky",
    "indicatorId": "bdmo_y49010025",
    "year": 2024,
    "value": 58.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "iglinsky",
    "indicatorId": "bdmo_y49010025",
    "year": 2024,
    "value": 164.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ilishevsky",
    "indicatorId": "bdmo_y49010025",
    "year": 2024,
    "value": 103.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ishimbay",
    "indicatorId": "bdmo_y49010025",
    "year": 2024,
    "value": 600.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kaltasinsky",
    "indicatorId": "bdmo_y49010025",
    "year": 2024,
    "value": 176.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "karaidelsky",
    "indicatorId": "bdmo_y49010025",
    "year": 2024,
    "value": 76.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "karmaskalinsky",
    "indicatorId": "bdmo_y49010025",
    "year": 2024,
    "value": 139.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "khaibullinsky",
    "indicatorId": "bdmo_y49010025",
    "year": 2024,
    "value": 172.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kiginsky",
    "indicatorId": "bdmo_y49010025",
    "year": 2024,
    "value": 85.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "krasnokamsky",
    "indicatorId": "bdmo_y49010025",
    "year": 2024,
    "value": 98.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kugarchinsky",
    "indicatorId": "bdmo_y49010025",
    "year": 2024,
    "value": 78.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kumertau",
    "indicatorId": "bdmo_y49010025",
    "year": 2024,
    "value": 558.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kushnarenkovsky",
    "indicatorId": "bdmo_y49010025",
    "year": 2024,
    "value": 97.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kuyurgazinsky",
    "indicatorId": "bdmo_y49010025",
    "year": 2024,
    "value": 65.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "mechetlinsky",
    "indicatorId": "bdmo_y49010025",
    "year": 2024,
    "value": 81.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "meleuz",
    "indicatorId": "bdmo_y49010025",
    "year": 2024,
    "value": 345.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "mishkinsky",
    "indicatorId": "bdmo_y49010025",
    "year": 2024,
    "value": 57.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "miyakinsky",
    "indicatorId": "bdmo_y49010025",
    "year": 2024,
    "value": 73.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "neftekamsk",
    "indicatorId": "bdmo_y49010025",
    "year": 2024,
    "value": 914.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "nurimanovsky",
    "indicatorId": "bdmo_y49010025",
    "year": 2024,
    "value": 70.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "oktyabrsky",
    "indicatorId": "bdmo_y49010025",
    "year": 2024,
    "value": 527.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "salavat",
    "indicatorId": "bdmo_y49010025",
    "year": 2024,
    "value": 893.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "salavatsky",
    "indicatorId": "bdmo_y49010025",
    "year": 2024,
    "value": 295.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sharansky",
    "indicatorId": "bdmo_y49010025",
    "year": 2024,
    "value": 84.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sibay",
    "indicatorId": "bdmo_y49010025",
    "year": 2024,
    "value": 313.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlibashevsky",
    "indicatorId": "bdmo_y49010025",
    "year": 2024,
    "value": 58.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamak",
    "indicatorId": "bdmo_y49010025",
    "year": 2024,
    "value": 1784.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamaksky",
    "indicatorId": "bdmo_y49010025",
    "year": 2024,
    "value": 132.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "tatyshlinsky",
    "indicatorId": "bdmo_y49010025",
    "year": 2024,
    "value": 50.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "tuymazy",
    "indicatorId": "bdmo_y49010025",
    "year": 2024,
    "value": 763.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "uchaly",
    "indicatorId": "bdmo_y49010025",
    "year": 2024,
    "value": 719.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufa",
    "indicatorId": "bdmo_y49010025",
    "year": 2024,
    "value": 8888.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufimsky",
    "indicatorId": "bdmo_y49010025",
    "year": 2024,
    "value": 683.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "yanaulsky",
    "indicatorId": "bdmo_y49010025",
    "year": 2024,
    "value": 193.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "zianchurinsky",
    "indicatorId": "bdmo_y49010025",
    "year": 2024,
    "value": 123.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "zilairsky",
    "indicatorId": "bdmo_y49010025",
    "year": 2024,
    "value": 90.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "abzelilovsky",
    "indicatorId": "bdmo_y49010026",
    "year": 2024,
    "value": 146.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "agidel",
    "indicatorId": "bdmo_y49010026",
    "year": 2024,
    "value": 68.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "alsheevsky",
    "indicatorId": "bdmo_y49010026",
    "year": 2024,
    "value": 128.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "askinsky",
    "indicatorId": "bdmo_y49010026",
    "year": 2024,
    "value": 83.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "aurgazinsky",
    "indicatorId": "bdmo_y49010026",
    "year": 2024,
    "value": 80.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "bakalinsky",
    "indicatorId": "bdmo_y49010026",
    "year": 2024,
    "value": 214.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "baltachevsky",
    "indicatorId": "bdmo_y49010026",
    "year": 2024,
    "value": 70.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "baymaksky",
    "indicatorId": "bdmo_y49010026",
    "year": 2024,
    "value": 201.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "belebeyevsky",
    "indicatorId": "bdmo_y49010026",
    "year": 2024,
    "value": 525.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "belokataysky",
    "indicatorId": "bdmo_y49010026",
    "year": 2024,
    "value": 47.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "beloretsk",
    "indicatorId": "bdmo_y49010026",
    "year": 2024,
    "value": 485.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "birsk",
    "indicatorId": "bdmo_y49010026",
    "year": 2024,
    "value": 298.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "bizhbulyaksky",
    "indicatorId": "bdmo_y49010026",
    "year": 2024,
    "value": 149.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "blagovarsky",
    "indicatorId": "bdmo_y49010026",
    "year": 2024,
    "value": 75.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "blagoveshchensky",
    "indicatorId": "bdmo_y49010026",
    "year": 2024,
    "value": 203.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "buraevsky",
    "indicatorId": "bdmo_y49010026",
    "year": 2024,
    "value": 95.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "burzyansky",
    "indicatorId": "bdmo_y49010026",
    "year": 2024,
    "value": 53.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "buzdyaksky",
    "indicatorId": "bdmo_y49010026",
    "year": 2024,
    "value": 86.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "chekmagushevsky",
    "indicatorId": "bdmo_y49010026",
    "year": 2024,
    "value": 152.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "chishminsky",
    "indicatorId": "bdmo_y49010026",
    "year": 2024,
    "value": 129.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "davlekanovsky",
    "indicatorId": "bdmo_y49010026",
    "year": 2024,
    "value": 157.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "duvansky",
    "indicatorId": "bdmo_y49010026",
    "year": 2024,
    "value": 148.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "dyurtyulinsky",
    "indicatorId": "bdmo_y49010026",
    "year": 2024,
    "value": 775.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "fedorovsky",
    "indicatorId": "bdmo_y49010026",
    "year": 2024,
    "value": 21.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "gafuriysky",
    "indicatorId": "bdmo_y49010026",
    "year": 2024,
    "value": 45.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "iglinsky",
    "indicatorId": "bdmo_y49010026",
    "year": 2024,
    "value": 139.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ilishevsky",
    "indicatorId": "bdmo_y49010026",
    "year": 2024,
    "value": 55.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ishimbay",
    "indicatorId": "bdmo_y49010026",
    "year": 2024,
    "value": 535.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kaltasinsky",
    "indicatorId": "bdmo_y49010026",
    "year": 2024,
    "value": 135.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "karaidelsky",
    "indicatorId": "bdmo_y49010026",
    "year": 2024,
    "value": 52.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "karmaskalinsky",
    "indicatorId": "bdmo_y49010026",
    "year": 2024,
    "value": 115.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "khaibullinsky",
    "indicatorId": "bdmo_y49010026",
    "year": 2024,
    "value": 141.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kiginsky",
    "indicatorId": "bdmo_y49010026",
    "year": 2024,
    "value": 67.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "krasnokamsky",
    "indicatorId": "bdmo_y49010026",
    "year": 2024,
    "value": 70.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kugarchinsky",
    "indicatorId": "bdmo_y49010026",
    "year": 2024,
    "value": 53.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kumertau",
    "indicatorId": "bdmo_y49010026",
    "year": 2024,
    "value": 469.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kushnarenkovsky",
    "indicatorId": "bdmo_y49010026",
    "year": 2024,
    "value": 42.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kuyurgazinsky",
    "indicatorId": "bdmo_y49010026",
    "year": 2024,
    "value": 49.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "mechetlinsky",
    "indicatorId": "bdmo_y49010026",
    "year": 2024,
    "value": 68.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "meleuz",
    "indicatorId": "bdmo_y49010026",
    "year": 2024,
    "value": 264.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "mishkinsky",
    "indicatorId": "bdmo_y49010026",
    "year": 2024,
    "value": 46.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "miyakinsky",
    "indicatorId": "bdmo_y49010026",
    "year": 2024,
    "value": 54.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "neftekamsk",
    "indicatorId": "bdmo_y49010026",
    "year": 2024,
    "value": 768.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "nurimanovsky",
    "indicatorId": "bdmo_y49010026",
    "year": 2024,
    "value": 44.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "oktyabrsky",
    "indicatorId": "bdmo_y49010026",
    "year": 2024,
    "value": 377.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "salavat",
    "indicatorId": "bdmo_y49010026",
    "year": 2024,
    "value": 760.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "salavatsky",
    "indicatorId": "bdmo_y49010026",
    "year": 2024,
    "value": 268.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sharansky",
    "indicatorId": "bdmo_y49010026",
    "year": 2024,
    "value": 45.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sibay",
    "indicatorId": "bdmo_y49010026",
    "year": 2024,
    "value": 252.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlibashevsky",
    "indicatorId": "bdmo_y49010026",
    "year": 2024,
    "value": 36.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamak",
    "indicatorId": "bdmo_y49010026",
    "year": 2024,
    "value": 1601.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamaksky",
    "indicatorId": "bdmo_y49010026",
    "year": 2024,
    "value": 121.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "tatyshlinsky",
    "indicatorId": "bdmo_y49010026",
    "year": 2024,
    "value": 37.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "tuymazy",
    "indicatorId": "bdmo_y49010026",
    "year": 2024,
    "value": 555.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "uchaly",
    "indicatorId": "bdmo_y49010026",
    "year": 2024,
    "value": 650.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufa",
    "indicatorId": "bdmo_y49010026",
    "year": 2024,
    "value": 7533.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufimsky",
    "indicatorId": "bdmo_y49010026",
    "year": 2024,
    "value": 642.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "yanaulsky",
    "indicatorId": "bdmo_y49010026",
    "year": 2024,
    "value": 169.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "zianchurinsky",
    "indicatorId": "bdmo_y49010026",
    "year": 2024,
    "value": 119.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "zilairsky",
    "indicatorId": "bdmo_y49010026",
    "year": 2024,
    "value": 68.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "abzelilovsky",
    "indicatorId": "bdmo_y49010027",
    "year": 2024,
    "value": 14985.1,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "agidel",
    "indicatorId": "bdmo_y49010027",
    "year": 2024,
    "value": 6023.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "alsheevsky",
    "indicatorId": "bdmo_y49010027",
    "year": 2024,
    "value": 7302.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "askinsky",
    "indicatorId": "bdmo_y49010027",
    "year": 2024,
    "value": 2486.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "aurgazinsky",
    "indicatorId": "bdmo_y49010027",
    "year": 2024,
    "value": 2680.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "bakalinsky",
    "indicatorId": "bdmo_y49010027",
    "year": 2024,
    "value": 4974.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "baltachevsky",
    "indicatorId": "bdmo_y49010027",
    "year": 2024,
    "value": 892.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "baymaksky",
    "indicatorId": "bdmo_y49010027",
    "year": 2024,
    "value": 3682.1,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "belebeyevsky",
    "indicatorId": "bdmo_y49010027",
    "year": 2024,
    "value": 16891.9,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "belokataysky",
    "indicatorId": "bdmo_y49010027",
    "year": 2024,
    "value": 3466.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "beloretsk",
    "indicatorId": "bdmo_y49010027",
    "year": 2024,
    "value": 20131.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "birsk",
    "indicatorId": "bdmo_y49010027",
    "year": 2024,
    "value": 7727.7,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "blagovarsky",
    "indicatorId": "bdmo_y49010027",
    "year": 2024,
    "value": 3250.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "blagoveshchensky",
    "indicatorId": "bdmo_y49010027",
    "year": 2024,
    "value": 6575.1,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "buraevsky",
    "indicatorId": "bdmo_y49010027",
    "year": 2024,
    "value": 9917.2,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "burzyansky",
    "indicatorId": "bdmo_y49010027",
    "year": 2024,
    "value": 1588.9,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "chekmagushevsky",
    "indicatorId": "bdmo_y49010027",
    "year": 2024,
    "value": 6933.1,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "chishminsky",
    "indicatorId": "bdmo_y49010027",
    "year": 2024,
    "value": 14413.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "davlekanovsky",
    "indicatorId": "bdmo_y49010027",
    "year": 2024,
    "value": 7540.9,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "duvansky",
    "indicatorId": "bdmo_y49010027",
    "year": 2024,
    "value": 2264.2,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "dyurtyulinsky",
    "indicatorId": "bdmo_y49010027",
    "year": 2024,
    "value": 6881.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "fedorovsky",
    "indicatorId": "bdmo_y49010027",
    "year": 2024,
    "value": 4911.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "gafuriysky",
    "indicatorId": "bdmo_y49010027",
    "year": 2024,
    "value": 1874.7,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "iglinsky",
    "indicatorId": "bdmo_y49010027",
    "year": 2024,
    "value": 2086.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ilishevsky",
    "indicatorId": "bdmo_y49010027",
    "year": 2024,
    "value": 8208.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ishimbay",
    "indicatorId": "bdmo_y49010027",
    "year": 2024,
    "value": 15411.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kaltasinsky",
    "indicatorId": "bdmo_y49010027",
    "year": 2024,
    "value": 8619.1,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "karaidelsky",
    "indicatorId": "bdmo_y49010027",
    "year": 2024,
    "value": 2785.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "karmaskalinsky",
    "indicatorId": "bdmo_y49010027",
    "year": 2024,
    "value": 10416.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "khaibullinsky",
    "indicatorId": "bdmo_y49010027",
    "year": 2024,
    "value": 8197.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kiginsky",
    "indicatorId": "bdmo_y49010027",
    "year": 2024,
    "value": 3566.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "krasnokamsky",
    "indicatorId": "bdmo_y49010027",
    "year": 2024,
    "value": 7643.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kugarchinsky",
    "indicatorId": "bdmo_y49010027",
    "year": 2024,
    "value": 10059.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kumertau",
    "indicatorId": "bdmo_y49010027",
    "year": 2024,
    "value": 27133.9,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kushnarenkovsky",
    "indicatorId": "bdmo_y49010027",
    "year": 2024,
    "value": 9266.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kuyurgazinsky",
    "indicatorId": "bdmo_y49010027",
    "year": 2024,
    "value": 3152.1,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "mechetlinsky",
    "indicatorId": "bdmo_y49010027",
    "year": 2024,
    "value": 3590.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "meleuz",
    "indicatorId": "bdmo_y49010027",
    "year": 2024,
    "value": 27600.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "mishkinsky",
    "indicatorId": "bdmo_y49010027",
    "year": 2024,
    "value": 2508.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "miyakinsky",
    "indicatorId": "bdmo_y49010027",
    "year": 2024,
    "value": 7734.2,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "neftekamsk",
    "indicatorId": "bdmo_y49010027",
    "year": 2024,
    "value": 25575.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "nurimanovsky",
    "indicatorId": "bdmo_y49010027",
    "year": 2024,
    "value": 5535.1,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "oktyabrsky",
    "indicatorId": "bdmo_y49010027",
    "year": 2024,
    "value": 21859.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "salavat",
    "indicatorId": "bdmo_y49010027",
    "year": 2024,
    "value": 25522.9,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "salavatsky",
    "indicatorId": "bdmo_y49010027",
    "year": 2024,
    "value": 2420.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sharansky",
    "indicatorId": "bdmo_y49010027",
    "year": 2024,
    "value": 6851.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sibay",
    "indicatorId": "bdmo_y49010027",
    "year": 2024,
    "value": 20187.2,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlibashevsky",
    "indicatorId": "bdmo_y49010027",
    "year": 2024,
    "value": 3717.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamak",
    "indicatorId": "bdmo_y49010027",
    "year": 2024,
    "value": 46044.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamaksky",
    "indicatorId": "bdmo_y49010027",
    "year": 2024,
    "value": 5030.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "tuymazy",
    "indicatorId": "bdmo_y49010027",
    "year": 2024,
    "value": 34496.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "uchaly",
    "indicatorId": "bdmo_y49010027",
    "year": 2024,
    "value": 18196.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufa",
    "indicatorId": "bdmo_y49010027",
    "year": 2024,
    "value": 209988.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufimsky",
    "indicatorId": "bdmo_y49010027",
    "year": 2024,
    "value": 4433.7,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "yanaulsky",
    "indicatorId": "bdmo_y49010027",
    "year": 2024,
    "value": 3545.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "zilairsky",
    "indicatorId": "bdmo_y49010027",
    "year": 2024,
    "value": 5584.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "abzelilovsky",
    "indicatorId": "bdmo_y49010028",
    "year": 2024,
    "value": 12.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "alsheevsky",
    "indicatorId": "bdmo_y49010028",
    "year": 2024,
    "value": 5.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "aurgazinsky",
    "indicatorId": "bdmo_y49010028",
    "year": 2024,
    "value": 3.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "bakalinsky",
    "indicatorId": "bdmo_y49010028",
    "year": 2024,
    "value": 5.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "belebeyevsky",
    "indicatorId": "bdmo_y49010028",
    "year": 2024,
    "value": 13.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "beloretsk",
    "indicatorId": "bdmo_y49010028",
    "year": 2024,
    "value": 13.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "birsk",
    "indicatorId": "bdmo_y49010028",
    "year": 2024,
    "value": 4.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "blagovarsky",
    "indicatorId": "bdmo_y49010028",
    "year": 2024,
    "value": 5.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "blagoveshchensky",
    "indicatorId": "bdmo_y49010028",
    "year": 2024,
    "value": 8.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "buraevsky",
    "indicatorId": "bdmo_y49010028",
    "year": 2024,
    "value": 6.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "chishminsky",
    "indicatorId": "bdmo_y49010028",
    "year": 2024,
    "value": 5.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "davlekanovsky",
    "indicatorId": "bdmo_y49010028",
    "year": 2024,
    "value": 5.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "dyurtyulinsky",
    "indicatorId": "bdmo_y49010028",
    "year": 2024,
    "value": 7.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "fedorovsky",
    "indicatorId": "bdmo_y49010028",
    "year": 2024,
    "value": 4.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "iglinsky",
    "indicatorId": "bdmo_y49010028",
    "year": 2024,
    "value": 3.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ilishevsky",
    "indicatorId": "bdmo_y49010028",
    "year": 2024,
    "value": 5.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ishimbay",
    "indicatorId": "bdmo_y49010028",
    "year": 2024,
    "value": 8.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kaltasinsky",
    "indicatorId": "bdmo_y49010028",
    "year": 2024,
    "value": 5.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "karmaskalinsky",
    "indicatorId": "bdmo_y49010028",
    "year": 2024,
    "value": 3.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "khaibullinsky",
    "indicatorId": "bdmo_y49010028",
    "year": 2024,
    "value": 6.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "krasnokamsky",
    "indicatorId": "bdmo_y49010028",
    "year": 2024,
    "value": 3.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kugarchinsky",
    "indicatorId": "bdmo_y49010028",
    "year": 2024,
    "value": 5.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kumertau",
    "indicatorId": "bdmo_y49010028",
    "year": 2024,
    "value": 7.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kuyurgazinsky",
    "indicatorId": "bdmo_y49010028",
    "year": 2024,
    "value": 3.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "meleuz",
    "indicatorId": "bdmo_y49010028",
    "year": 2024,
    "value": 11.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "mishkinsky",
    "indicatorId": "bdmo_y49010028",
    "year": 2024,
    "value": 3.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "neftekamsk",
    "indicatorId": "bdmo_y49010028",
    "year": 2024,
    "value": 11.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "nurimanovsky",
    "indicatorId": "bdmo_y49010028",
    "year": 2024,
    "value": 6.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "oktyabrsky",
    "indicatorId": "bdmo_y49010028",
    "year": 2024,
    "value": 10.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "salavat",
    "indicatorId": "bdmo_y49010028",
    "year": 2024,
    "value": 16.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "salavatsky",
    "indicatorId": "bdmo_y49010028",
    "year": 2024,
    "value": 5.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sharansky",
    "indicatorId": "bdmo_y49010028",
    "year": 2024,
    "value": 5.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sibay",
    "indicatorId": "bdmo_y49010028",
    "year": 2024,
    "value": 9.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlibashevsky",
    "indicatorId": "bdmo_y49010028",
    "year": 2024,
    "value": 4.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamak",
    "indicatorId": "bdmo_y49010028",
    "year": 2024,
    "value": 20.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamaksky",
    "indicatorId": "bdmo_y49010028",
    "year": 2024,
    "value": 4.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "tuymazy",
    "indicatorId": "bdmo_y49010028",
    "year": 2024,
    "value": 16.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "uchaly",
    "indicatorId": "bdmo_y49010028",
    "year": 2024,
    "value": 16.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufa",
    "indicatorId": "bdmo_y49010028",
    "year": 2024,
    "value": 141.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufimsky",
    "indicatorId": "bdmo_y49010028",
    "year": 2024,
    "value": 5.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "yanaulsky",
    "indicatorId": "bdmo_y49010028",
    "year": 2024,
    "value": 3.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "aurgazinsky",
    "indicatorId": "bdmo_y49010029",
    "year": 2024,
    "value": 3.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "baymaksky",
    "indicatorId": "bdmo_y49010029",
    "year": 2024,
    "value": 5.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "beloretsk",
    "indicatorId": "bdmo_y49010029",
    "year": 2024,
    "value": 50.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "dyurtyulinsky",
    "indicatorId": "bdmo_y49010029",
    "year": 2024,
    "value": 5.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ishimbay",
    "indicatorId": "bdmo_y49010029",
    "year": 2024,
    "value": 7.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kaltasinsky",
    "indicatorId": "bdmo_y49010029",
    "year": 2024,
    "value": 3.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "karmaskalinsky",
    "indicatorId": "bdmo_y49010029",
    "year": 2024,
    "value": 50.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kumertau",
    "indicatorId": "bdmo_y49010029",
    "year": 2024,
    "value": 12.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "meleuz",
    "indicatorId": "bdmo_y49010029",
    "year": 2024,
    "value": 5.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "neftekamsk",
    "indicatorId": "bdmo_y49010029",
    "year": 2024,
    "value": 9.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "oktyabrsky",
    "indicatorId": "bdmo_y49010029",
    "year": 2024,
    "value": 9.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "salavat",
    "indicatorId": "bdmo_y49010029",
    "year": 2024,
    "value": 16.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "salavatsky",
    "indicatorId": "bdmo_y49010029",
    "year": 2024,
    "value": 5.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamak",
    "indicatorId": "bdmo_y49010029",
    "year": 2024,
    "value": 23.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "tuymazy",
    "indicatorId": "bdmo_y49010029",
    "year": 2024,
    "value": 11.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "uchaly",
    "indicatorId": "bdmo_y49010029",
    "year": 2024,
    "value": 14.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufa",
    "indicatorId": "bdmo_y49010029",
    "year": 2024,
    "value": 112.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "blagovarsky",
    "indicatorId": "bdmo_y49010031",
    "year": 2024,
    "value": 3.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "fedorovsky",
    "indicatorId": "bdmo_y49010031",
    "year": 2024,
    "value": 3.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ishimbay",
    "indicatorId": "bdmo_y49010031",
    "year": 2024,
    "value": 3.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "neftekamsk",
    "indicatorId": "bdmo_y49010031",
    "year": 2024,
    "value": 9.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "salavat",
    "indicatorId": "bdmo_y49010031",
    "year": 2024,
    "value": 5.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamak",
    "indicatorId": "bdmo_y49010031",
    "year": 2024,
    "value": 7.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "uchaly",
    "indicatorId": "bdmo_y49010031",
    "year": 2024,
    "value": 7.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufa",
    "indicatorId": "bdmo_y49010031",
    "year": 2024,
    "value": 29.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "abzelilovsky",
    "indicatorId": "bdmo_y48401003",
    "year": 2025,
    "value": 898732.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "agidel",
    "indicatorId": "bdmo_y48401003",
    "year": 2025,
    "value": 328171.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "alsheevsky",
    "indicatorId": "bdmo_y48401003",
    "year": 2025,
    "value": 432036.2,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "arkhangelsky",
    "indicatorId": "bdmo_y48401003",
    "year": 2025,
    "value": 199417.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "askinsky",
    "indicatorId": "bdmo_y48401003",
    "year": 2025,
    "value": 358764.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "aurgazinsky",
    "indicatorId": "bdmo_y48401003",
    "year": 2025,
    "value": 493230.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "bakalinsky",
    "indicatorId": "bdmo_y48401003",
    "year": 2025,
    "value": 48133.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "baltachevsky",
    "indicatorId": "bdmo_y48401003",
    "year": 2025,
    "value": 12725.7,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "baymaksky",
    "indicatorId": "bdmo_y48401003",
    "year": 2025,
    "value": 734377.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "belebeyevsky",
    "indicatorId": "bdmo_y48401003",
    "year": 2025,
    "value": 2722007.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "belokataysky",
    "indicatorId": "bdmo_y48401003",
    "year": 2025,
    "value": 26949.9,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "beloretsk",
    "indicatorId": "bdmo_y48401003",
    "year": 2025,
    "value": 136504.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "birsk",
    "indicatorId": "bdmo_y48401003",
    "year": 2025,
    "value": 1684570.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "bizhbulyaksky",
    "indicatorId": "bdmo_y48401003",
    "year": 2025,
    "value": 333487.2,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "blagovarsky",
    "indicatorId": "bdmo_y48401003",
    "year": 2025,
    "value": 226902.7,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "blagoveshchensky",
    "indicatorId": "bdmo_y48401003",
    "year": 2025,
    "value": 94520.1,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "buraevsky",
    "indicatorId": "bdmo_y48401003",
    "year": 2025,
    "value": 474503.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "burzyansky",
    "indicatorId": "bdmo_y48401003",
    "year": 2025,
    "value": 194601.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "buzdyaksky",
    "indicatorId": "bdmo_y48401003",
    "year": 2025,
    "value": 290816.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "chekmagushevsky",
    "indicatorId": "bdmo_y48401003",
    "year": 2025,
    "value": 578863.1,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "chishminsky",
    "indicatorId": "bdmo_y48401003",
    "year": 2025,
    "value": 1280948.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "davlekanovsky",
    "indicatorId": "bdmo_y48401003",
    "year": 2025,
    "value": 128605.9,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "duvansky",
    "indicatorId": "bdmo_y48401003",
    "year": 2025,
    "value": 854513.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "dyurtyulinsky",
    "indicatorId": "bdmo_y48401003",
    "year": 2025,
    "value": 61031.1,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ermekeyevsky",
    "indicatorId": "bdmo_y48401003",
    "year": 2025,
    "value": 124066.7,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "fedorovsky",
    "indicatorId": "bdmo_y48401003",
    "year": 2025,
    "value": 163258.2,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "gafuriysky",
    "indicatorId": "bdmo_y48401003",
    "year": 2025,
    "value": 581497.9,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "iglinsky",
    "indicatorId": "bdmo_y48401003",
    "year": 2025,
    "value": 2860093.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ilishevsky",
    "indicatorId": "bdmo_y48401003",
    "year": 2025,
    "value": 315930.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ishimbay",
    "indicatorId": "bdmo_y48401003",
    "year": 2025,
    "value": 2264082.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kaltasinsky",
    "indicatorId": "bdmo_y48401003",
    "year": 2025,
    "value": 49456.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "karaidelsky",
    "indicatorId": "bdmo_y48401003",
    "year": 2025,
    "value": 306893.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "karmaskalinsky",
    "indicatorId": "bdmo_y48401003",
    "year": 2025,
    "value": 47986.9,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "khaibullinsky",
    "indicatorId": "bdmo_y48401003",
    "year": 2025,
    "value": 567957.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kiginsky",
    "indicatorId": "bdmo_y48401003",
    "year": 2025,
    "value": 330354.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "krasnokamsky",
    "indicatorId": "bdmo_y48401003",
    "year": 2025,
    "value": 148200.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kugarchinsky",
    "indicatorId": "bdmo_y48401003",
    "year": 2025,
    "value": 508012.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kumertau",
    "indicatorId": "bdmo_y48401003",
    "year": 2025,
    "value": 1960510.9,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kushnarenkovsky",
    "indicatorId": "bdmo_y48401003",
    "year": 2025,
    "value": 796635.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kuyurgazinsky",
    "indicatorId": "bdmo_y48401003",
    "year": 2025,
    "value": 308908.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "mechetlinsky",
    "indicatorId": "bdmo_y48401003",
    "year": 2025,
    "value": 521965.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "meleuz",
    "indicatorId": "bdmo_y48401003",
    "year": 2025,
    "value": 1109549.9,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "mishkinsky",
    "indicatorId": "bdmo_y48401003",
    "year": 2025,
    "value": 17317.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "miyakinsky",
    "indicatorId": "bdmo_y48401003",
    "year": 2025,
    "value": 198912.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "neftekamsk",
    "indicatorId": "bdmo_y48401003",
    "year": 2025,
    "value": 378633.2,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "nurimanovsky",
    "indicatorId": "bdmo_y48401003",
    "year": 2025,
    "value": 228116.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "oktyabrsky",
    "indicatorId": "bdmo_y48401003",
    "year": 2025,
    "value": 1765181.1,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "salavat",
    "indicatorId": "bdmo_y48401003",
    "year": 2025,
    "value": 4638874.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "salavatsky",
    "indicatorId": "bdmo_y48401003",
    "year": 2025,
    "value": 502436.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sharansky",
    "indicatorId": "bdmo_y48401003",
    "year": 2025,
    "value": 243343.1,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sibay",
    "indicatorId": "bdmo_y48401003",
    "year": 2025,
    "value": 1837950.1,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlibashevsky",
    "indicatorId": "bdmo_y48401003",
    "year": 2025,
    "value": 136004.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamak",
    "indicatorId": "bdmo_y48401003",
    "year": 2025,
    "value": 10584686.7,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamaksky",
    "indicatorId": "bdmo_y48401003",
    "year": 2025,
    "value": 472557.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "tatyshlinsky",
    "indicatorId": "bdmo_y48401003",
    "year": 2025,
    "value": 242384.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "tuymazy",
    "indicatorId": "bdmo_y48401003",
    "year": 2025,
    "value": 342287.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "uchaly",
    "indicatorId": "bdmo_y48401003",
    "year": 2025,
    "value": 118489.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufa",
    "indicatorId": "bdmo_y48401003",
    "year": 2025,
    "value": 27968258.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufimsky",
    "indicatorId": "bdmo_y48401003",
    "year": 2025,
    "value": 351476.9,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "yanaulsky",
    "indicatorId": "bdmo_y48401003",
    "year": 2025,
    "value": 589686.7,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "zianchurinsky",
    "indicatorId": "bdmo_y48401003",
    "year": 2025,
    "value": 425355.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "zilairsky",
    "indicatorId": "bdmo_y48401003",
    "year": 2025,
    "value": 215420.2,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "abzelilovsky",
    "indicatorId": "bdmo_y48401006",
    "year": 2025,
    "value": 70629.1,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "bakalinsky",
    "indicatorId": "bdmo_y48401006",
    "year": 2025,
    "value": 2580.2,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "baymaksky",
    "indicatorId": "bdmo_y48401006",
    "year": 2025,
    "value": 6620.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "belebeyevsky",
    "indicatorId": "bdmo_y48401006",
    "year": 2025,
    "value": 16292.7,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "beloretsk",
    "indicatorId": "bdmo_y48401006",
    "year": 2025,
    "value": 54416.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "blagoveshchensky",
    "indicatorId": "bdmo_y48401006",
    "year": 2025,
    "value": 7381.7,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "buzdyaksky",
    "indicatorId": "bdmo_y48401006",
    "year": 2025,
    "value": 933.9,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "duvansky",
    "indicatorId": "bdmo_y48401006",
    "year": 2025,
    "value": 917.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "dyurtyulinsky",
    "indicatorId": "bdmo_y48401006",
    "year": 2025,
    "value": 18436.7,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ishimbay",
    "indicatorId": "bdmo_y48401006",
    "year": 2025,
    "value": 19124.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "karaidelsky",
    "indicatorId": "bdmo_y48401006",
    "year": 2025,
    "value": 3529.7,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "khaibullinsky",
    "indicatorId": "bdmo_y48401006",
    "year": 2025,
    "value": 4061.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kugarchinsky",
    "indicatorId": "bdmo_y48401006",
    "year": 2025,
    "value": 4326.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kumertau",
    "indicatorId": "bdmo_y48401006",
    "year": 2025,
    "value": 5220.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "mechetlinsky",
    "indicatorId": "bdmo_y48401006",
    "year": 2025,
    "value": 606.1,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "meleuz",
    "indicatorId": "bdmo_y48401006",
    "year": 2025,
    "value": 10812.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "neftekamsk",
    "indicatorId": "bdmo_y48401006",
    "year": 2025,
    "value": 128493.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "oktyabrsky",
    "indicatorId": "bdmo_y48401006",
    "year": 2025,
    "value": 91824.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "salavat",
    "indicatorId": "bdmo_y48401006",
    "year": 2025,
    "value": 79064.9,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sharansky",
    "indicatorId": "bdmo_y48401006",
    "year": 2025,
    "value": 9746.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sibay",
    "indicatorId": "bdmo_y48401006",
    "year": 2025,
    "value": 2981.1,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamak",
    "indicatorId": "bdmo_y48401006",
    "year": 2025,
    "value": 228851.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamaksky",
    "indicatorId": "bdmo_y48401006",
    "year": 2025,
    "value": 6034.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "tuymazy",
    "indicatorId": "bdmo_y48401006",
    "year": 2025,
    "value": 81166.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufa",
    "indicatorId": "bdmo_y48401006",
    "year": 2025,
    "value": 2678589.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufimsky",
    "indicatorId": "bdmo_y48401006",
    "year": 2025,
    "value": 323623.9,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "zianchurinsky",
    "indicatorId": "bdmo_y48401006",
    "year": 2025,
    "value": 4189.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "abzelilovsky",
    "indicatorId": "bdmo_y48401008",
    "year": 2025,
    "value": 41088.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "alsheevsky",
    "indicatorId": "bdmo_y48401008",
    "year": 2025,
    "value": 34831.9,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "aurgazinsky",
    "indicatorId": "bdmo_y48401008",
    "year": 2025,
    "value": 55.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "baymaksky",
    "indicatorId": "bdmo_y48401008",
    "year": 2025,
    "value": 18914.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "belebeyevsky",
    "indicatorId": "bdmo_y48401008",
    "year": 2025,
    "value": 846798.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "beloretsk",
    "indicatorId": "bdmo_y48401008",
    "year": 2025,
    "value": 110651.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "birsk",
    "indicatorId": "bdmo_y48401008",
    "year": 2025,
    "value": 800741.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "bizhbulyaksky",
    "indicatorId": "bdmo_y48401008",
    "year": 2025,
    "value": 43526.7,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "blagoveshchensky",
    "indicatorId": "bdmo_y48401008",
    "year": 2025,
    "value": 1107951.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "burzyansky",
    "indicatorId": "bdmo_y48401008",
    "year": 2025,
    "value": 12479.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "chekmagushevsky",
    "indicatorId": "bdmo_y48401008",
    "year": 2025,
    "value": 9544.2,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "chishminsky",
    "indicatorId": "bdmo_y48401008",
    "year": 2025,
    "value": 5561240.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "davlekanovsky",
    "indicatorId": "bdmo_y48401008",
    "year": 2025,
    "value": 2990566.2,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "duvansky",
    "indicatorId": "bdmo_y48401008",
    "year": 2025,
    "value": 700736.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "dyurtyulinsky",
    "indicatorId": "bdmo_y48401008",
    "year": 2025,
    "value": 31359.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "gafuriysky",
    "indicatorId": "bdmo_y48401008",
    "year": 2025,
    "value": 211152.1,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "iglinsky",
    "indicatorId": "bdmo_y48401008",
    "year": 2025,
    "value": 18388.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ishimbay",
    "indicatorId": "bdmo_y48401008",
    "year": 2025,
    "value": 3854733.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kaltasinsky",
    "indicatorId": "bdmo_y48401008",
    "year": 2025,
    "value": 223832.9,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "karaidelsky",
    "indicatorId": "bdmo_y48401008",
    "year": 2025,
    "value": 19008.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "karmaskalinsky",
    "indicatorId": "bdmo_y48401008",
    "year": 2025,
    "value": 652.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "khaibullinsky",
    "indicatorId": "bdmo_y48401008",
    "year": 2025,
    "value": 2742210.9,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "krasnokamsky",
    "indicatorId": "bdmo_y48401008",
    "year": 2025,
    "value": 629137.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kugarchinsky",
    "indicatorId": "bdmo_y48401008",
    "year": 2025,
    "value": 71634.7,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kumertau",
    "indicatorId": "bdmo_y48401008",
    "year": 2025,
    "value": 1086855.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kuyurgazinsky",
    "indicatorId": "bdmo_y48401008",
    "year": 2025,
    "value": 234608.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "mechetlinsky",
    "indicatorId": "bdmo_y48401008",
    "year": 2025,
    "value": 11784.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "meleuz",
    "indicatorId": "bdmo_y48401008",
    "year": 2025,
    "value": 7749992.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "miyakinsky",
    "indicatorId": "bdmo_y48401008",
    "year": 2025,
    "value": 24625.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "neftekamsk",
    "indicatorId": "bdmo_y48401008",
    "year": 2025,
    "value": 179390.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "oktyabrsky",
    "indicatorId": "bdmo_y48401008",
    "year": 2025,
    "value": 1550656.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "salavat",
    "indicatorId": "bdmo_y48401008",
    "year": 2025,
    "value": 676655.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "salavatsky",
    "indicatorId": "bdmo_y48401008",
    "year": 2025,
    "value": 24136.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sibay",
    "indicatorId": "bdmo_y48401008",
    "year": 2025,
    "value": 788369.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlibashevsky",
    "indicatorId": "bdmo_y48401008",
    "year": 2025,
    "value": 331069.1,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamak",
    "indicatorId": "bdmo_y48401008",
    "year": 2025,
    "value": 3907977.1,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamaksky",
    "indicatorId": "bdmo_y48401008",
    "year": 2025,
    "value": 1706818.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "tatyshlinsky",
    "indicatorId": "bdmo_y48401008",
    "year": 2025,
    "value": 3319524.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "tuymazy",
    "indicatorId": "bdmo_y48401008",
    "year": 2025,
    "value": 374947.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "uchaly",
    "indicatorId": "bdmo_y48401008",
    "year": 2025,
    "value": 8787403.7,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufa",
    "indicatorId": "bdmo_y48401008",
    "year": 2025,
    "value": 213095963.2,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufimsky",
    "indicatorId": "bdmo_y48401008",
    "year": 2025,
    "value": 3754368.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "yanaulsky",
    "indicatorId": "bdmo_y48401008",
    "year": 2025,
    "value": 9278.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "zianchurinsky",
    "indicatorId": "bdmo_y48401008",
    "year": 2025,
    "value": 388544.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "abzelilovsky",
    "indicatorId": "bdmo_y48401011",
    "year": 2025,
    "value": 1523141.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "agidel",
    "indicatorId": "bdmo_y48401011",
    "year": 2025,
    "value": 149426.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "alsheevsky",
    "indicatorId": "bdmo_y48401011",
    "year": 2025,
    "value": 7337.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "arkhangelsky",
    "indicatorId": "bdmo_y48401011",
    "year": 2025,
    "value": 12107.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "askinsky",
    "indicatorId": "bdmo_y48401011",
    "year": 2025,
    "value": 188.9,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "aurgazinsky",
    "indicatorId": "bdmo_y48401011",
    "year": 2025,
    "value": 607.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "bakalinsky",
    "indicatorId": "bdmo_y48401011",
    "year": 2025,
    "value": 1073.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "baltachevsky",
    "indicatorId": "bdmo_y48401011",
    "year": 2025,
    "value": 154675.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "baymaksky",
    "indicatorId": "bdmo_y48401011",
    "year": 2025,
    "value": 318035.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "belebeyevsky",
    "indicatorId": "bdmo_y48401011",
    "year": 2025,
    "value": 15109.7,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "belokataysky",
    "indicatorId": "bdmo_y48401011",
    "year": 2025,
    "value": 215.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "beloretsk",
    "indicatorId": "bdmo_y48401011",
    "year": 2025,
    "value": 127387.9,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "birsk",
    "indicatorId": "bdmo_y48401011",
    "year": 2025,
    "value": 1320759.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "bizhbulyaksky",
    "indicatorId": "bdmo_y48401011",
    "year": 2025,
    "value": 1225.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "blagovarsky",
    "indicatorId": "bdmo_y48401011",
    "year": 2025,
    "value": 5249.2,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "blagoveshchensky",
    "indicatorId": "bdmo_y48401011",
    "year": 2025,
    "value": 50255.7,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "buraevsky",
    "indicatorId": "bdmo_y48401011",
    "year": 2025,
    "value": 6459003.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "burzyansky",
    "indicatorId": "bdmo_y48401011",
    "year": 2025,
    "value": 2750.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "buzdyaksky",
    "indicatorId": "bdmo_y48401011",
    "year": 2025,
    "value": 1457387.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "chekmagushevsky",
    "indicatorId": "bdmo_y48401011",
    "year": 2025,
    "value": 4477.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "chishminsky",
    "indicatorId": "bdmo_y48401011",
    "year": 2025,
    "value": 5562654.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "davlekanovsky",
    "indicatorId": "bdmo_y48401011",
    "year": 2025,
    "value": 7659.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "duvansky",
    "indicatorId": "bdmo_y48401011",
    "year": 2025,
    "value": 1060.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "dyurtyulinsky",
    "indicatorId": "bdmo_y48401011",
    "year": 2025,
    "value": 11143.7,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ermekeyevsky",
    "indicatorId": "bdmo_y48401011",
    "year": 2025,
    "value": 670.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "fedorovsky",
    "indicatorId": "bdmo_y48401011",
    "year": 2025,
    "value": 53199.7,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "gafuriysky",
    "indicatorId": "bdmo_y48401011",
    "year": 2025,
    "value": 3463.2,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "iglinsky",
    "indicatorId": "bdmo_y48401011",
    "year": 2025,
    "value": 18293.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ilishevsky",
    "indicatorId": "bdmo_y48401011",
    "year": 2025,
    "value": 2220.1,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ishimbay",
    "indicatorId": "bdmo_y48401011",
    "year": 2025,
    "value": 8642.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kaltasinsky",
    "indicatorId": "bdmo_y48401011",
    "year": 2025,
    "value": 7835.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "karaidelsky",
    "indicatorId": "bdmo_y48401011",
    "year": 2025,
    "value": 448.2,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "karmaskalinsky",
    "indicatorId": "bdmo_y48401011",
    "year": 2025,
    "value": 5504.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "khaibullinsky",
    "indicatorId": "bdmo_y48401011",
    "year": 2025,
    "value": 27720.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kiginsky",
    "indicatorId": "bdmo_y48401011",
    "year": 2025,
    "value": 653.2,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "krasnokamsky",
    "indicatorId": "bdmo_y48401011",
    "year": 2025,
    "value": 629864.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kugarchinsky",
    "indicatorId": "bdmo_y48401011",
    "year": 2025,
    "value": 216.9,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kumertau",
    "indicatorId": "bdmo_y48401011",
    "year": 2025,
    "value": 40082.1,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kushnarenkovsky",
    "indicatorId": "bdmo_y48401011",
    "year": 2025,
    "value": 9431.2,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kuyurgazinsky",
    "indicatorId": "bdmo_y48401011",
    "year": 2025,
    "value": 2335.2,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "mechetlinsky",
    "indicatorId": "bdmo_y48401011",
    "year": 2025,
    "value": 1733.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "meleuz",
    "indicatorId": "bdmo_y48401011",
    "year": 2025,
    "value": 23450.1,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "mishkinsky",
    "indicatorId": "bdmo_y48401011",
    "year": 2025,
    "value": 3.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "miyakinsky",
    "indicatorId": "bdmo_y48401011",
    "year": 2025,
    "value": 735.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "neftekamsk",
    "indicatorId": "bdmo_y48401011",
    "year": 2025,
    "value": 436923.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "nurimanovsky",
    "indicatorId": "bdmo_y48401011",
    "year": 2025,
    "value": 230.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "oktyabrsky",
    "indicatorId": "bdmo_y48401011",
    "year": 2025,
    "value": 2059568.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "salavat",
    "indicatorId": "bdmo_y48401011",
    "year": 2025,
    "value": 12681.1,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "salavatsky",
    "indicatorId": "bdmo_y48401011",
    "year": 2025,
    "value": 224.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sharansky",
    "indicatorId": "bdmo_y48401011",
    "year": 2025,
    "value": 98983.9,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sibay",
    "indicatorId": "bdmo_y48401011",
    "year": 2025,
    "value": 23142.2,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlibashevsky",
    "indicatorId": "bdmo_y48401011",
    "year": 2025,
    "value": 2152.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamak",
    "indicatorId": "bdmo_y48401011",
    "year": 2025,
    "value": 1088035.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamaksky",
    "indicatorId": "bdmo_y48401011",
    "year": 2025,
    "value": 8763.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "tatyshlinsky",
    "indicatorId": "bdmo_y48401011",
    "year": 2025,
    "value": 3319524.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "tuymazy",
    "indicatorId": "bdmo_y48401011",
    "year": 2025,
    "value": 5935409.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "uchaly",
    "indicatorId": "bdmo_y48401011",
    "year": 2025,
    "value": 1737748.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufa",
    "indicatorId": "bdmo_y48401011",
    "year": 2025,
    "value": 34901137.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufimsky",
    "indicatorId": "bdmo_y48401011",
    "year": 2025,
    "value": 21047709.2,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "yanaulsky",
    "indicatorId": "bdmo_y48401011",
    "year": 2025,
    "value": 760779.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "zianchurinsky",
    "indicatorId": "bdmo_y48401011",
    "year": 2025,
    "value": 7375.7,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "zilairsky",
    "indicatorId": "bdmo_y48401011",
    "year": 2025,
    "value": 44548.2,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "abzelilovsky",
    "indicatorId": "bdmo_y48401012",
    "year": 2025,
    "value": 13441.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "agidel",
    "indicatorId": "bdmo_y48401012",
    "year": 2025,
    "value": 284728.7,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "alsheevsky",
    "indicatorId": "bdmo_y48401012",
    "year": 2025,
    "value": 712858.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "arkhangelsky",
    "indicatorId": "bdmo_y48401012",
    "year": 2025,
    "value": 282260.7,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "askinsky",
    "indicatorId": "bdmo_y48401012",
    "year": 2025,
    "value": 346629.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "aurgazinsky",
    "indicatorId": "bdmo_y48401012",
    "year": 2025,
    "value": 415307.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "bakalinsky",
    "indicatorId": "bdmo_y48401012",
    "year": 2025,
    "value": 443687.2,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "baltachevsky",
    "indicatorId": "bdmo_y48401012",
    "year": 2025,
    "value": 331283.2,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "baymaksky",
    "indicatorId": "bdmo_y48401012",
    "year": 2025,
    "value": 628625.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "belebeyevsky",
    "indicatorId": "bdmo_y48401012",
    "year": 2025,
    "value": 2367984.9,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "belokataysky",
    "indicatorId": "bdmo_y48401012",
    "year": 2025,
    "value": 224048.1,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "beloretsk",
    "indicatorId": "bdmo_y48401012",
    "year": 2025,
    "value": 44775.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "birsk",
    "indicatorId": "bdmo_y48401012",
    "year": 2025,
    "value": 1690308.1,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "bizhbulyaksky",
    "indicatorId": "bdmo_y48401012",
    "year": 2025,
    "value": 287118.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "blagovarsky",
    "indicatorId": "bdmo_y48401012",
    "year": 2025,
    "value": 417273.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "blagoveshchensky",
    "indicatorId": "bdmo_y48401012",
    "year": 2025,
    "value": 417997.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "buraevsky",
    "indicatorId": "bdmo_y48401012",
    "year": 2025,
    "value": 408803.1,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "burzyansky",
    "indicatorId": "bdmo_y48401012",
    "year": 2025,
    "value": 32701.1,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "buzdyaksky",
    "indicatorId": "bdmo_y48401012",
    "year": 2025,
    "value": 570304.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "chekmagushevsky",
    "indicatorId": "bdmo_y48401012",
    "year": 2025,
    "value": 578535.2,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "chishminsky",
    "indicatorId": "bdmo_y48401012",
    "year": 2025,
    "value": 1548674.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "davlekanovsky",
    "indicatorId": "bdmo_y48401012",
    "year": 2025,
    "value": 325027.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "duvansky",
    "indicatorId": "bdmo_y48401012",
    "year": 2025,
    "value": 835654.7,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "dyurtyulinsky",
    "indicatorId": "bdmo_y48401012",
    "year": 2025,
    "value": 1447069.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ermekeyevsky",
    "indicatorId": "bdmo_y48401012",
    "year": 2025,
    "value": 107331.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "fedorovsky",
    "indicatorId": "bdmo_y48401012",
    "year": 2025,
    "value": 175592.2,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "gafuriysky",
    "indicatorId": "bdmo_y48401012",
    "year": 2025,
    "value": 596568.2,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "iglinsky",
    "indicatorId": "bdmo_y48401012",
    "year": 2025,
    "value": 3415804.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ilishevsky",
    "indicatorId": "bdmo_y48401012",
    "year": 2025,
    "value": 521772.1,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ishimbay",
    "indicatorId": "bdmo_y48401012",
    "year": 2025,
    "value": 2404545.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kaltasinsky",
    "indicatorId": "bdmo_y48401012",
    "year": 2025,
    "value": 420606.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "karaidelsky",
    "indicatorId": "bdmo_y48401012",
    "year": 2025,
    "value": 74078.7,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "karmaskalinsky",
    "indicatorId": "bdmo_y48401012",
    "year": 2025,
    "value": 1177963.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "khaibullinsky",
    "indicatorId": "bdmo_y48401012",
    "year": 2025,
    "value": 489437.2,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kiginsky",
    "indicatorId": "bdmo_y48401012",
    "year": 2025,
    "value": 284458.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "krasnokamsky",
    "indicatorId": "bdmo_y48401012",
    "year": 2025,
    "value": 348408.1,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kugarchinsky",
    "indicatorId": "bdmo_y48401012",
    "year": 2025,
    "value": 435814.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kumertau",
    "indicatorId": "bdmo_y48401012",
    "year": 2025,
    "value": 1947149.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kushnarenkovsky",
    "indicatorId": "bdmo_y48401012",
    "year": 2025,
    "value": 905966.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kuyurgazinsky",
    "indicatorId": "bdmo_y48401012",
    "year": 2025,
    "value": 331726.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "mechetlinsky",
    "indicatorId": "bdmo_y48401012",
    "year": 2025,
    "value": 43168.3,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "meleuz",
    "indicatorId": "bdmo_y48401012",
    "year": 2025,
    "value": 2812319.1,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "mishkinsky",
    "indicatorId": "bdmo_y48401012",
    "year": 2025,
    "value": 219687.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "miyakinsky",
    "indicatorId": "bdmo_y48401012",
    "year": 2025,
    "value": 334073.7,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "neftekamsk",
    "indicatorId": "bdmo_y48401012",
    "year": 2025,
    "value": 26462.1,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "nurimanovsky",
    "indicatorId": "bdmo_y48401012",
    "year": 2025,
    "value": 365463.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "oktyabrsky",
    "indicatorId": "bdmo_y48401012",
    "year": 2025,
    "value": 5149041.2,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "salavat",
    "indicatorId": "bdmo_y48401012",
    "year": 2025,
    "value": 2536882.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "salavatsky",
    "indicatorId": "bdmo_y48401012",
    "year": 2025,
    "value": 483539.7,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sharansky",
    "indicatorId": "bdmo_y48401012",
    "year": 2025,
    "value": 209755.1,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sibay",
    "indicatorId": "bdmo_y48401012",
    "year": 2025,
    "value": 1628622.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlibashevsky",
    "indicatorId": "bdmo_y48401012",
    "year": 2025,
    "value": 206951.9,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamak",
    "indicatorId": "bdmo_y48401012",
    "year": 2025,
    "value": 33782729.7,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamaksky",
    "indicatorId": "bdmo_y48401012",
    "year": 2025,
    "value": 636524.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "tatyshlinsky",
    "indicatorId": "bdmo_y48401012",
    "year": 2025,
    "value": 452056.7,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "tuymazy",
    "indicatorId": "bdmo_y48401012",
    "year": 2025,
    "value": 3856723.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "uchaly",
    "indicatorId": "bdmo_y48401012",
    "year": 2025,
    "value": 629143.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufa",
    "indicatorId": "bdmo_y48401012",
    "year": 2025,
    "value": 37709390.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufimsky",
    "indicatorId": "bdmo_y48401012",
    "year": 2025,
    "value": 14428653.6,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "yanaulsky",
    "indicatorId": "bdmo_y48401012",
    "year": 2025,
    "value": 862493.8,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "zianchurinsky",
    "indicatorId": "bdmo_y48401012",
    "year": 2025,
    "value": 363273.5,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "zilairsky",
    "indicatorId": "bdmo_y48401012",
    "year": 2025,
    "value": 183539.4,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "abzelilovsky",
    "indicatorId": "bdmo_y49010002",
    "year": 2025,
    "value": 576.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "agidel",
    "indicatorId": "bdmo_y49010002",
    "year": 2025,
    "value": 159.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "alsheevsky",
    "indicatorId": "bdmo_y49010002",
    "year": 2025,
    "value": 350.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "arkhangelsky",
    "indicatorId": "bdmo_y49010002",
    "year": 2025,
    "value": 204.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "askinsky",
    "indicatorId": "bdmo_y49010002",
    "year": 2025,
    "value": 194.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "aurgazinsky",
    "indicatorId": "bdmo_y49010002",
    "year": 2025,
    "value": 283.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "bakalinsky",
    "indicatorId": "bdmo_y49010002",
    "year": 2025,
    "value": 237.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "baltachevsky",
    "indicatorId": "bdmo_y49010002",
    "year": 2025,
    "value": 175.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "baymaksky",
    "indicatorId": "bdmo_y49010002",
    "year": 2025,
    "value": 479.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "belebeyevsky",
    "indicatorId": "bdmo_y49010002",
    "year": 2025,
    "value": 756.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "belokataysky",
    "indicatorId": "bdmo_y49010002",
    "year": 2025,
    "value": 157.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "beloretsk",
    "indicatorId": "bdmo_y49010002",
    "year": 2025,
    "value": 933.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "birsk",
    "indicatorId": "bdmo_y49010002",
    "year": 2025,
    "value": 504.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "bizhbulyaksky",
    "indicatorId": "bdmo_y49010002",
    "year": 2025,
    "value": 185.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "blagovarsky",
    "indicatorId": "bdmo_y49010002",
    "year": 2025,
    "value": 231.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "blagoveshchensky",
    "indicatorId": "bdmo_y49010002",
    "year": 2025,
    "value": 662.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "buraevsky",
    "indicatorId": "bdmo_y49010002",
    "year": 2025,
    "value": 200.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "burzyansky",
    "indicatorId": "bdmo_y49010002",
    "year": 2025,
    "value": 185.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "buzdyaksky",
    "indicatorId": "bdmo_y49010002",
    "year": 2025,
    "value": 209.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "chekmagushevsky",
    "indicatorId": "bdmo_y49010002",
    "year": 2025,
    "value": 224.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "chishminsky",
    "indicatorId": "bdmo_y49010002",
    "year": 2025,
    "value": 684.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "davlekanovsky",
    "indicatorId": "bdmo_y49010002",
    "year": 2025,
    "value": 427.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "duvansky",
    "indicatorId": "bdmo_y49010002",
    "year": 2025,
    "value": 290.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "dyurtyulinsky",
    "indicatorId": "bdmo_y49010002",
    "year": 2025,
    "value": 470.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ermekeyevsky",
    "indicatorId": "bdmo_y49010002",
    "year": 2025,
    "value": 142.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "fedorovsky",
    "indicatorId": "bdmo_y49010002",
    "year": 2025,
    "value": 181.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "gafuriysky",
    "indicatorId": "bdmo_y49010002",
    "year": 2025,
    "value": 325.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "iglinsky",
    "indicatorId": "bdmo_y49010002",
    "year": 2025,
    "value": 765.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ilishevsky",
    "indicatorId": "bdmo_y49010002",
    "year": 2025,
    "value": 307.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ishimbay",
    "indicatorId": "bdmo_y49010002",
    "year": 2025,
    "value": 861.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kaltasinsky",
    "indicatorId": "bdmo_y49010002",
    "year": 2025,
    "value": 168.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "karaidelsky",
    "indicatorId": "bdmo_y49010002",
    "year": 2025,
    "value": 335.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "karmaskalinsky",
    "indicatorId": "bdmo_y49010002",
    "year": 2025,
    "value": 587.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "khaibullinsky",
    "indicatorId": "bdmo_y49010002",
    "year": 2025,
    "value": 240.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kiginsky",
    "indicatorId": "bdmo_y49010002",
    "year": 2025,
    "value": 182.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "krasnokamsky",
    "indicatorId": "bdmo_y49010002",
    "year": 2025,
    "value": 285.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kugarchinsky",
    "indicatorId": "bdmo_y49010002",
    "year": 2025,
    "value": 273.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kumertau",
    "indicatorId": "bdmo_y49010002",
    "year": 2025,
    "value": 638.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kushnarenkovsky",
    "indicatorId": "bdmo_y49010002",
    "year": 2025,
    "value": 348.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kuyurgazinsky",
    "indicatorId": "bdmo_y49010002",
    "year": 2025,
    "value": 216.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "mechetlinsky",
    "indicatorId": "bdmo_y49010002",
    "year": 2025,
    "value": 188.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "meleuz",
    "indicatorId": "bdmo_y49010002",
    "year": 2025,
    "value": 787.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "mishkinsky",
    "indicatorId": "bdmo_y49010002",
    "year": 2025,
    "value": 142.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "miyakinsky",
    "indicatorId": "bdmo_y49010002",
    "year": 2025,
    "value": 256.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "neftekamsk",
    "indicatorId": "bdmo_y49010002",
    "year": 2025,
    "value": 1646.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "nurimanovsky",
    "indicatorId": "bdmo_y49010002",
    "year": 2025,
    "value": 228.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "oktyabrsky",
    "indicatorId": "bdmo_y49010002",
    "year": 2025,
    "value": 1515.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "salavat",
    "indicatorId": "bdmo_y49010002",
    "year": 2025,
    "value": 1475.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "salavatsky",
    "indicatorId": "bdmo_y49010002",
    "year": 2025,
    "value": 226.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sharansky",
    "indicatorId": "bdmo_y49010002",
    "year": 2025,
    "value": 167.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sibay",
    "indicatorId": "bdmo_y49010002",
    "year": 2025,
    "value": 650.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlibashevsky",
    "indicatorId": "bdmo_y49010002",
    "year": 2025,
    "value": 189.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamak",
    "indicatorId": "bdmo_y49010002",
    "year": 2025,
    "value": 3251.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamaksky",
    "indicatorId": "bdmo_y49010002",
    "year": 2025,
    "value": 620.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "tatyshlinsky",
    "indicatorId": "bdmo_y49010002",
    "year": 2025,
    "value": 182.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "tuymazy",
    "indicatorId": "bdmo_y49010002",
    "year": 2025,
    "value": 1417.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "uchaly",
    "indicatorId": "bdmo_y49010002",
    "year": 2025,
    "value": 745.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufa",
    "indicatorId": "bdmo_y49010002",
    "year": 2025,
    "value": 36435.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufimsky",
    "indicatorId": "bdmo_y49010002",
    "year": 2025,
    "value": 2599.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "yanaulsky",
    "indicatorId": "bdmo_y49010002",
    "year": 2025,
    "value": 284.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "zianchurinsky",
    "indicatorId": "bdmo_y49010002",
    "year": 2025,
    "value": 224.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "zilairsky",
    "indicatorId": "bdmo_y49010002",
    "year": 2025,
    "value": 161.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "abzelilovsky",
    "indicatorId": "bdmo_y49010003",
    "year": 2025,
    "value": 962.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "agidel",
    "indicatorId": "bdmo_y49010003",
    "year": 2025,
    "value": 361.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "alsheevsky",
    "indicatorId": "bdmo_y49010003",
    "year": 2025,
    "value": 839.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "arkhangelsky",
    "indicatorId": "bdmo_y49010003",
    "year": 2025,
    "value": 332.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "askinsky",
    "indicatorId": "bdmo_y49010003",
    "year": 2025,
    "value": 395.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "aurgazinsky",
    "indicatorId": "bdmo_y49010003",
    "year": 2025,
    "value": 657.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "bakalinsky",
    "indicatorId": "bdmo_y49010003",
    "year": 2025,
    "value": 467.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "baltachevsky",
    "indicatorId": "bdmo_y49010003",
    "year": 2025,
    "value": 306.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "baymaksky",
    "indicatorId": "bdmo_y49010003",
    "year": 2025,
    "value": 1173.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "belebeyevsky",
    "indicatorId": "bdmo_y49010003",
    "year": 2025,
    "value": 1756.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "belokataysky",
    "indicatorId": "bdmo_y49010003",
    "year": 2025,
    "value": 279.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "beloretsk",
    "indicatorId": "bdmo_y49010003",
    "year": 2025,
    "value": 2336.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "birsk",
    "indicatorId": "bdmo_y49010003",
    "year": 2025,
    "value": 1139.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "bizhbulyaksky",
    "indicatorId": "bdmo_y49010003",
    "year": 2025,
    "value": 438.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "blagovarsky",
    "indicatorId": "bdmo_y49010003",
    "year": 2025,
    "value": 485.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "blagoveshchensky",
    "indicatorId": "bdmo_y49010003",
    "year": 2025,
    "value": 1118.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "buraevsky",
    "indicatorId": "bdmo_y49010003",
    "year": 2025,
    "value": 434.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "burzyansky",
    "indicatorId": "bdmo_y49010003",
    "year": 2025,
    "value": 398.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "buzdyaksky",
    "indicatorId": "bdmo_y49010003",
    "year": 2025,
    "value": 530.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "chekmagushevsky",
    "indicatorId": "bdmo_y49010003",
    "year": 2025,
    "value": 661.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "chishminsky",
    "indicatorId": "bdmo_y49010003",
    "year": 2025,
    "value": 1288.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "davlekanovsky",
    "indicatorId": "bdmo_y49010003",
    "year": 2025,
    "value": 813.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "duvansky",
    "indicatorId": "bdmo_y49010003",
    "year": 2025,
    "value": 643.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "dyurtyulinsky",
    "indicatorId": "bdmo_y49010003",
    "year": 2025,
    "value": 1230.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ermekeyevsky",
    "indicatorId": "bdmo_y49010003",
    "year": 2025,
    "value": 228.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "fedorovsky",
    "indicatorId": "bdmo_y49010003",
    "year": 2025,
    "value": 295.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "gafuriysky",
    "indicatorId": "bdmo_y49010003",
    "year": 2025,
    "value": 581.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "iglinsky",
    "indicatorId": "bdmo_y49010003",
    "year": 2025,
    "value": 2185.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ilishevsky",
    "indicatorId": "bdmo_y49010003",
    "year": 2025,
    "value": 646.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ishimbay",
    "indicatorId": "bdmo_y49010003",
    "year": 2025,
    "value": 1710.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kaltasinsky",
    "indicatorId": "bdmo_y49010003",
    "year": 2025,
    "value": 300.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "karaidelsky",
    "indicatorId": "bdmo_y49010003",
    "year": 2025,
    "value": 521.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "karmaskalinsky",
    "indicatorId": "bdmo_y49010003",
    "year": 2025,
    "value": 1234.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "khaibullinsky",
    "indicatorId": "bdmo_y49010003",
    "year": 2025,
    "value": 513.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kiginsky",
    "indicatorId": "bdmo_y49010003",
    "year": 2025,
    "value": 391.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "krasnokamsky",
    "indicatorId": "bdmo_y49010003",
    "year": 2025,
    "value": 578.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kugarchinsky",
    "indicatorId": "bdmo_y49010003",
    "year": 2025,
    "value": 503.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kumertau",
    "indicatorId": "bdmo_y49010003",
    "year": 2025,
    "value": 1331.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kushnarenkovsky",
    "indicatorId": "bdmo_y49010003",
    "year": 2025,
    "value": 733.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "kuyurgazinsky",
    "indicatorId": "bdmo_y49010003",
    "year": 2025,
    "value": 491.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "mechetlinsky",
    "indicatorId": "bdmo_y49010003",
    "year": 2025,
    "value": 469.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "meleuz",
    "indicatorId": "bdmo_y49010003",
    "year": 2025,
    "value": 1790.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "mishkinsky",
    "indicatorId": "bdmo_y49010003",
    "year": 2025,
    "value": 273.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "miyakinsky",
    "indicatorId": "bdmo_y49010003",
    "year": 2025,
    "value": 486.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "neftekamsk",
    "indicatorId": "bdmo_y49010003",
    "year": 2025,
    "value": 3702.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "nurimanovsky",
    "indicatorId": "bdmo_y49010003",
    "year": 2025,
    "value": 443.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "oktyabrsky",
    "indicatorId": "bdmo_y49010003",
    "year": 2025,
    "value": 3232.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "salavat",
    "indicatorId": "bdmo_y49010003",
    "year": 2025,
    "value": 2468.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "salavatsky",
    "indicatorId": "bdmo_y49010003",
    "year": 2025,
    "value": 461.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sharansky",
    "indicatorId": "bdmo_y49010003",
    "year": 2025,
    "value": 334.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sibay",
    "indicatorId": "bdmo_y49010003",
    "year": 2025,
    "value": 1394.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlibashevsky",
    "indicatorId": "bdmo_y49010003",
    "year": 2025,
    "value": 391.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamak",
    "indicatorId": "bdmo_y49010003",
    "year": 2025,
    "value": 6168.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "sterlitamaksky",
    "indicatorId": "bdmo_y49010003",
    "year": 2025,
    "value": 1379.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "tatyshlinsky",
    "indicatorId": "bdmo_y49010003",
    "year": 2025,
    "value": 352.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "tuymazy",
    "indicatorId": "bdmo_y49010003",
    "year": 2025,
    "value": 3035.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "uchaly",
    "indicatorId": "bdmo_y49010003",
    "year": 2025,
    "value": 1519.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufa",
    "indicatorId": "bdmo_y49010003",
    "year": 2025,
    "value": 36800.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "ufimsky",
    "indicatorId": "bdmo_y49010003",
    "year": 2025,
    "value": 5232.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "yanaulsky",
    "indicatorId": "bdmo_y49010003",
    "year": 2025,
    "value": 825.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "zianchurinsky",
    "indicatorId": "bdmo_y49010003",
    "year": 2025,
    "value": 431.0,
    "sourceId": "bdmo_rosstat"
  },
  {
    "districtId": "zilairsky",
    "indicatorId": "bdmo_y49010003",
    "year": 2025,
    "value": 263.0,
    "sourceId": "bdmo_rosstat"
  }
];
