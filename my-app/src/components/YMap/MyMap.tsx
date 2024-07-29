import React from 'react';
import { YMaps, Map, Placemark, Clusterer } from 'react-yandex-maps';
import useStore from "../Store";

const jsonka:any = [
        {
            "latitude": "55.734466",
            "longitude": "37.635778",
            "title": "Бахрушина улица, 18с3",
            "is_fast": "false",
            "power": "22",
            "is_payment": "false"
        },
        {
            "latitude": "55.736257",
            "longitude": "37.655623",
            "title": "улица Большие Каменщики, 6с1",
            "is_fast": "false",
            "power": "22",
            "is_payment": "false"
        },
        {
            "latitude": "55.736257",
            "longitude": "37.655623",
            "title": "улица Большие Каменщики, 6с1",
            "is_fast": "false",
            "power": "22",
            "is_payment": "false"
        },
        {
            "latitude": "55.743136",
            "longitude": "37.570812",
            "title": "Площадь Европы (со стороны Бережковской набережной)",
            "is_fast": "true",
            "power": "50",
            "is_payment": "false"
        },
        {
            "latitude": "55.743171",
            "longitude": "37.570838",
            "title": "Площадь Европы (со стороны Бережковской набережной)",
            "is_fast": "true",
            "power": "50",
            "is_payment": "false"
        },
        {
            "latitude": "55.743213",
            "longitude": "37.570876",
            "title": "Площадь Европы (со стороны Бережковской набережной)",
            "is_fast": "true",
            "power": "50",
            "is_payment": "false"
        },
        {
            "latitude": "55.707937",
            "longitude": "37.682267",
            "title": "Улица Петра Романова, 9",
            "is_fast": "false",
            "power": "22",
            "is_payment": "false"
        },
        {
            "latitude": "55.744595",
            "longitude": "37.568778",
            "title": "площадь Киевского Вокзала",
            "is_fast": "false",
            "power": "22",
            "is_payment": "false"
        },
        {
            "latitude": "55.744595",
            "longitude": "37.568778",
            "title": "площадь Киевского Вокзала",
            "is_fast": "false",
            "power": "22",
            "is_payment": "false"
        },
        {
            "latitude": "55.869806",
            "longitude": "37.66209",
            "title": "улица Менжинского, 23к1",
            "is_fast": "false",
            "power": "22",
            "is_payment": "false"
        },
        {
            "latitude": "55.740392",
            "longitude": "37.768559",
            "title": "Плеханова улица, 26к4",
            "is_fast": "false",
            "power": "22",
            "is_payment": "false"
        },
        {
            "latitude": "55.668696",
            "longitude": "37.767115",
            "title": "Цимлянская улица, 7с4",
            "is_fast": "false",
            "power": "22",
            "is_payment": "false"
        },
        {
            "latitude": "55.895731",
            "longitude": "37.587701",
            "title": "Алтуфьевское шоссе, 84 (дублёр)",
            "is_fast": "false",
            "power": "22",
            "is_payment": "false"
        },
        {
            "latitude": "55.591351",
            "longitude": "37.602019",
            "title": "Варшавское шоссе, 139",
            "is_fast": "false",
            "power": "22",
            "is_payment": "false"
        },
        {
            "latitude": "55.670689",
            "longitude": "37.541344",
            "title": "Академика Пилюгина улица, 8с2",
            "is_fast": "false",
            "power": "22",
            "is_payment": "false"
        },
        {
            "latitude": "55.643048",
            "longitude": "37.49634",
            "title": "улица Островитянова, 9",
            "is_fast": "false",
            "power": "22",
            "is_payment": "false"
        },
        {
            "latitude": "55.698177",
            "longitude": "37.502618",
            "title": "Мичуринский проспект, 21к3",
            "is_fast": "false",
            "power": "22",
            "is_payment": "false"
        },
        {
            "latitude": "55.665112",
            "longitude": "37.480556",
            "title": "улица Покрышкина, 4",
            "is_fast": "false",
            "power": "22",
            "is_payment": "false"
        },
        {
            "latitude": "55.567082",
            "longitude": "37.572122",
            "title": "улица Грина, 22А",
            "is_fast": "false",
            "power": "22",
            "is_payment": "false"
        },
        {
            "latitude": "55.544262",
            "longitude": "37.524752",
            "title": "улица Адмирала Руднева, 2",
            "is_fast": "false",
            "power": "22",
            "is_payment": "false"
        },
        {
            "latitude": "55.740018",
            "longitude": "37.859036",
            "title": "Новокосинская улица, 19",
            "is_fast": "false",
            "power": "22",
            "is_payment": "false"
        },
        {
            "latitude": "55.884831",
            "longitude": "37.661692",
            "title": "улица Грекова, 3Ж",
            "is_fast": "false",
            "power": "22",
            "is_payment": "false"
        },
        {
            "latitude": "55.82101",
            "longitude": "37.650452",
            "title": "улица Космонавтов, 10к1",
            "is_fast": "false",
            "power": "22",
            "is_payment": "false"
        },
        {
            "latitude": "55.675289",
            "longitude": "37.758368",
            "title": "Новороссийская улица, 24 корп. 1",
            "is_fast": "false",
            "power": "22",
            "is_payment": "false"
        },
        {
            "latitude": "55.825606",
            "longitude": "37.452106",
            "title": "улица Свободы, 6\/3",
            "is_fast": "false",
            "power": "22",
            "is_payment": "false"
        },
        {
            "latitude": "55.784965",
            "longitude": "37.541257",
            "title": "улица Авиаконструктора Сухого, 1Ас1",
            "is_fast": "true",
            "power": "50",
            "is_payment": "false"
        },
        {
            "latitude": "55.869689",
            "longitude": "37.512867",
            "title": "Талдомская улица, 1",
            "is_fast": "false",
            "power": "22",
            "is_payment": "false"
        },
        {
            "latitude": "55.750587",
            "longitude": "37.816958",
            "title": "Свободный проспект, 35А",
            "is_fast": "false",
            "power": "22",
            "is_payment": "false"
        },
        {
            "latitude": "55.796711",
            "longitude": "37.598593",
            "title": "улица Двинцев, 12к1Б",
            "is_fast": "false",
            "power": "22",
            "is_payment": "false"
        },
        {
            "latitude": "55.8502222",
            "longitude": "37.4368556",
            "title": "бульвар Яна Райниса, 1",
            "is_fast": "true",
            "power": "50",
            "is_payment": "false"
        },
        {
            "latitude": "55.774072",
            "longitude": "37.825249",
            "title": "Энтузиастов шоссе, 53 (со стороны Магнитогорской улицы)",
            "is_fast": "false",
            "power": "22",
            "is_payment": "false"
        },
        {
            "latitude": "55.614248",
            "longitude": "37.750902",
            "title": "Ореховый бульвар, 24к3А",
            "is_fast": "false",
            "power": "22",
            "is_payment": "false"
        },
        {
            "latitude": "55.7184877",
            "longitude": "37.7839845",
            "title": "Рязанский проспект, 30к2",
            "is_fast": "false",
            "power": "22",
            "is_payment": "false"
        },
        {
            "latitude": "55.7925538",
            "longitude": "37.5629092",
            "title": "улица Верхняя Масловка, 11",
            "is_fast": "false",
            "power": "22",
            "is_payment": "false"
        },
        {
            "latitude": "55.723952",
            "longitude": "37.634941",
            "title": "Дубининская улица, 42",
            "is_fast": "true",
            "power": "50",
            "is_payment": "false"
        },
        {
            "latitude": "55.704453",
            "longitude": "37.657505",
            "title": "1-й Автозаводский проезд, 5",
            "is_fast": "false",
            "power": "22",
            "is_payment": "false"
        },
        {
            "latitude": "55.7478603",
            "longitude": "37.6930725",
            "title": "шоссе Энтузиастов, 3к2",
            "is_fast": "true",
            "power": "50",
            "is_payment": "false"
        },
        {
            "latitude": "55.7549661",
            "longitude": "37.5085956",
            "title": "Береговой проезд, 5Ак1",
            "is_fast": "false",
            "power": "22",
            "is_payment": "false"
        },
        {
            "latitude": "55.809206",
            "longitude": "37.460662",
            "title": "Авиационная улица, 66",
            "is_fast": "false",
            "power": "22",
            "is_payment": "false"
        },
        {
            "latitude": "55.6650492",
            "longitude": "37.4693602",
            "title": "улица Покрышкина, 5 (напротив)",
            "is_fast": "false",
            "power": "22",
            "is_payment": "false"
        },
        {
            "latitude": "55.774608",
            "longitude": "37.537736",
            "title": "Хорошевское шоссе, 7с2",
            "is_fast": "false",
            "power": "22",
            "is_payment": "false"
        },
        {
            "latitude": "55.854365",
            "longitude": "37.498549",
            "title": "улица Ляпидевского, 2",
            "is_fast": "false",
            "power": "22",
            "is_payment": "false"
        },
        {
            "latitude": "55.71831",
            "longitude": "37.399043",
            "title": "улица Толбухина, 5к4 (со стороны проезда Толбухина)",
            "is_fast": "false",
            "power": "22",
            "is_payment": "false"
        },
        {
            "latitude": "55.696402",
            "longitude": "37.8525049",
            "title": "Жулебинский бульвар, 16",
            "is_fast": "false",
            "power": "22",
            "is_payment": "false"
        },
        {
            "latitude": "55.865292",
            "longitude": "37.467872",
            "title": "Валдайский проезд, 6",
            "is_fast": "false",
            "power": "22",
            "is_payment": "false"
        },
        {
            "latitude": "55.8097963",
            "longitude": "37.6369909",
            "title": "проспект Мира, 97",
            "is_fast": "false",
            "power": "22",
            "is_payment": "false"
        },
        {
            "latitude": "55.720451",
            "longitude": "37.61523",
            "title": "Мытная улица, 46с5 (со стороны Конного пер.)",
            "is_fast": "true",
            "power": "50",
            "is_payment": "false"
        },
        {
            "latitude": "55.781508",
            "longitude": "37.47171",
            "title": "Генерала Карбышева бульвар, 18",
            "is_fast": "false",
            "power": "22",
            "is_payment": "false"
        },
        {
            "latitude": "55.854092",
            "longitude": "37.650217",
            "title": "Снежная улица, 19к2",
            "is_fast": "false",
            "power": "22",
            "is_payment": "false"
        },
        {
            "latitude": "55.795599",
            "longitude": "37.573471",
            "title": "Полтавская улица, 6",
            "is_fast": "false",
            "power": "22",
            "is_payment": "false"
        },
        {
            "latitude": "55.8065",
            "longitude": "37.519489",
            "title": "улица Усиевича, 29с2 (со стороны Авиаконструктора Яковлева)",
            "is_fast": "false",
            "power": "22",
            "is_payment": "false"
        },
        {
            "latitude": "55.770355",
            "longitude": "37.51662",
            "title": "4-я Магистральная улица, 11",
            "is_fast": "false",
            "power": "22",
            "is_payment": "false"
        },
        {
            "latitude": "55.793736",
            "longitude": "37.483274",
            "title": "улица Расплетина, 22к1",
            "is_fast": "false",
            "power": "22",
            "is_payment": "false"
        },
        {
            "latitude": "55.837515",
            "longitude": "37.488143",
            "title": "улица Адмирала Макарова, 10",
            "is_fast": "false",
            "power": "22",
            "is_payment": "false"
        },
        {
            "latitude": "55.844095",
            "longitude": "37.482368",
            "title": "Ленинградское шоссе, 53с58 (со стороны Пулковской ул.)",
            "is_fast": "false",
            "power": "22",
            "is_payment": "false"
        },
        {
            "latitude": "55.799979",
            "longitude": "37.404923",
            "title": "Таллинская улица, 19к1",
            "is_fast": "false",
            "power": "22",
            "is_payment": "false"
        },
        {
            "latitude": "55.735509",
            "longitude": "37.402976",
            "title": "Бобруйская улица, 3",
            "is_fast": "false",
            "power": "22",
            "is_payment": "false"
        },
        {
            "latitude": "55.756966",
            "longitude": "37.419352",
            "title": "улица Крылатские Холмы, 33к1с1",
            "is_fast": "false",
            "power": "22",
            "is_payment": "false"
        },
        {
            "latitude": "55.762598",
            "longitude": "37.662061",
            "title": "улица Казакова, 8",
            "is_fast": "true",
            "power": "50",
            "is_payment": "false"
        },
        {
            "latitude": "55.788918",
            "longitude": "37.627454",
            "title": "Трифоновская улица, 49",
            "is_fast": "false",
            "power": "22",
            "is_payment": "false"
        },
        {
            "latitude": "55.7618966",
            "longitude": "37.607005",
            "title": "Леонтьевский переулок, 25",
            "is_fast": "false",
            "power": "22",
            "is_payment": "false"
        },
        {
            "latitude": "55.766483",
            "longitude": "37.654541",
            "title": "Хомутовский тупик, 4к1",
            "is_fast": "false",
            "power": "22",
            "is_payment": "false"
        },
        {
            "latitude": "55.741922",
            "longitude": "37.577354",
            "title": "улица Плющиха, 42",
            "is_fast": "true",
            "power": "50",
            "is_payment": "false"
        },
        {
            "latitude": "55.798976",
            "longitude": "37.50342",
            "title": "улица Алабяна, 19к1",
            "is_fast": "true",
            "power": "50",
            "is_payment": "false"
        },
        {
            "latitude": "55.777508",
            "longitude": "37.572809",
            "title": "Скаковая улица, 34к1",
            "is_fast": "false",
            "power": "22",
            "is_payment": "false"
        },
        {
            "latitude": "55.791432",
            "longitude": "37.506686",
            "title": "улица Зорге, 28к1",
            "is_fast": "false",
            "power": "22",
            "is_payment": "false"
        },
        {
            "latitude": "55.821986",
            "longitude": "37.514165",
            "title": "улица Зои и Александра Космодемьянских, 11\/15с1А",
            "is_fast": "false",
            "power": "22",
            "is_payment": "false"
        },
        {
            "latitude": "55.808288",
            "longitude": "37.562823",
            "title": "проезд Соломенной Сторожки, 12",
            "is_fast": "true",
            "power": "50",
            "is_payment": "false"
        },
        {
            "latitude": "55.72563",
            "longitude": "37.526778",
            "title": "Пырьева улица, 5А",
            "is_fast": "false",
            "power": "22",
            "is_payment": "false"
        },
        {
            "latitude": "55.71265",
            "longitude": "37.522488",
            "title": "Дружбы улица, 2\/19",
            "is_fast": "false",
            "power": "22",
            "is_payment": "false"
        },
        {
            "latitude": "55.672392",
            "longitude": "37.516677",
            "title": "улица Удальцова, 5к3",
            "is_fast": "false",
            "power": "22",
            "is_payment": "false"
        },
        {
            "latitude": "55.709332",
            "longitude": "37.585537",
            "title": "Ленинский проспект, 37А",
            "is_fast": "true",
            "power": "50",
            "is_payment": "false"
        },
        {
            "latitude": "55.686442",
            "longitude": "37.564049",
            "title": "улица Кедрова, 4к1",
            "is_fast": "false",
            "power": "22",
            "is_payment": "false"
        },
        {
            "latitude": "55.681444",
            "longitude": "37.579268",
            "title": "Новочерёмушкинская улица, 23",
            "is_fast": "false",
            "power": "22",
            "is_payment": "false"
        },
        {
            "latitude": "55.680314",
            "longitude": "37.595629",
            "title": "улица Дмитрия Ульянова, 51",
            "is_fast": "false",
            "power": "22",
            "is_payment": "false"
        },
        {
            "latitude": "55.664352",
            "longitude": "37.577133",
            "title": "Севастопольский проспект, 28Г",
            "is_fast": "false",
            "power": "22",
            "is_payment": "false"
        },
        {
            "latitude": "55.660062",
            "longitude": "37.595103",
            "title": "Одесская улица, 6с4",
            "is_fast": "false",
            "power": "22",
            "is_payment": "false"
        },
        {
            "latitude": "55.694636",
            "longitude": "37.598479",
            "title": "Загородное шоссе, 18Ас14",
            "is_fast": "false",
            "power": "22",
            "is_payment": "false"
        },
        {
            "latitude": "55.693982",
            "longitude": "37.607902",
            "title": "Загородное шоссе, 9к3",
            "is_fast": "false",
            "power": "22",
            "is_payment": "false"
        },
        {
            "latitude": "55.677045",
            "longitude": "37.632834",
            "title": "1-й Нагатинский проезд, 11к3",
            "is_fast": "false",
            "power": "22",
            "is_payment": "false"
        },
        {
            "latitude": "55.671718",
            "longitude": "37.661902",
            "title": "проспект Андропова, 42к1",
            "is_fast": "false",
            "power": "22",
            "is_payment": "false"
        },
        {
            "latitude": "55.690618",
            "longitude": "37.688296",
            "title": "Нагатинская набережная, 56",
            "is_fast": "false",
            "power": "22",
            "is_payment": "false"
        },
        {
            "latitude": "55.676837",
            "longitude": "37.667702",
            "title": "улица Новинки, 4",
            "is_fast": "false",
            "power": "22",
            "is_payment": "false"
        },
        {
            "latitude": "55.676205",
            "longitude": "37.67669",
            "title": "улица Новинки, 27к1",
            "is_fast": "false",
            "power": "22",
            "is_payment": "false"
        },
        {
            "latitude": "55.686592",
            "longitude": "37.6738",
            "title": "Нагатинская набережная, 40\/1",
            "is_fast": "false",
            "power": "22",
            "is_payment": "false"
        },
        {
            "latitude": "55.724336",
            "longitude": "37.689185",
            "title": "Волгоградский проспект, 32к1",
            "is_fast": "false",
            "power": "22",
            "is_payment": "false"
        },
        {
            "latitude": "55.730786",
            "longitude": "37.738983",
            "title": "Рязанский проспект, 2Б",
            "is_fast": "true",
            "power": "50",
            "is_payment": "false"
        },
        {
            "latitude": "55.736659",
            "longitude": "37.687055",
            "title": "Большая Калитниковская улица, 42А",
            "is_fast": "false",
            "power": "22",
            "is_payment": "false"
        },
        {
            "latitude": "55.567337",
            "longitude": "37.571959",
            "title": "улица Грина, 22А",
            "is_fast": "false",
            "power": "22",
            "is_payment": "false"
        },
        {
            "latitude": "55.546956",
            "longitude": "37.555613",
            "title": "Скобелевская улица, 20",
            "is_fast": "false",
            "power": "22",
            "is_payment": "false"
        },
        {
            "latitude": "55.893865",
            "longitude": "37.396389",
            "title": "Родионовская улица, 8",
            "is_fast": "false",
            "power": "22",
            "is_payment": "false"
        },
        {
            "latitude": "55.743121",
            "longitude": "37.412895",
            "title": "Ярцевская улица, 27к8 (со стороны Ельнинской ул.)",
            "is_fast": "false",
            "power": "22",
            "is_payment": "false"
        },
        {
            "latitude": "55.860971",
            "longitude": "37.416528",
            "title": "улица Вилиса Лациса, 27к2",
            "is_fast": "false",
            "power": "22",
            "is_payment": "false"
        },
        {
            "latitude": "55.68432",
            "longitude": "37.460325",
            "title": "1-й Очаковский переулок, 10",
            "is_fast": "false",
            "power": "22",
            "is_payment": "false"
        },
        {
            "latitude": "55.891804",
            "longitude": "37.399143",
            "title": "улица Соловьиная Роща, 8к1 (напротив)",
            "is_fast": "false",
            "power": "22",
            "is_payment": "false"
        },
        {
            "latitude": "55.889548",
            "longitude": "37.388627",
            "title": "Воротынская улица, 18",
            "is_fast": "false",
            "power": "22",
            "is_payment": "false"
        },
        {
            "latitude": "55.905152",
            "longitude": "37.385273",
            "title": "Соколово-Мещерская улица, 29",
            "is_fast": "false",
            "power": "22",
            "is_payment": "false"
        },
        {
            "latitude": "55.769777",
            "longitude": "37.626053",
            "title": "Последний переулок, 3",
            "is_fast": "true",
            "power": "50",
            "is_payment": "false"
        },
        {
            "latitude": "55.782186",
            "longitude": "37.593955",
            "title": "Лесная улица, 61с1",
            "is_fast": "true",
            "power": "50",
            "is_payment": "false"
        },
        {
            "latitude": "55.784131",
            "longitude": "37.63694",
            "title": "Слесарный переулок, 3",
            "is_fast": "false",
            "power": "22",
            "is_payment": "false"
        },
        {
            "latitude": "55.74566",
            "longitude": "37.658371",
            "title": "Большой Дровяной переулок, 18 (напротив)",
            "is_fast": "true",
            "power": "50",
            "is_payment": "false"
        },
        {
            "latitude": "55.760298",
            "longitude": "37.713782",
            "title": "Авиамоторная улица, 4к2",
            "is_fast": "false",
            "power": "22",
            "is_payment": "false"
        },
        {
            "latitude": "55.752329",
            "longitude": "37.53128",
            "title": "Тестовская улица, 9",
            "is_fast": "false",
            "power": "22",
            "is_payment": "false"
        },
        {
            "latitude": "55.752278",
            "longitude": "37.531274",
            "title": "Тестовская улица, 9",
            "is_fast": "true",
            "power": "50",
            "is_payment": "false"
        },
        {
            "latitude": "55.722141",
            "longitude": "37.461983",
            "title": "Кременчугская улица, 5к1",
            "is_fast": "false",
            "power": "22",
            "is_payment": "false"
        },
        {
            "latitude": "55.770014",
            "longitude": "37.637516",
            "title": "Даев переулок, 14",
            "is_fast": "false",
            "power": "22",
            "is_payment": "false"
        },
        {
            "latitude": "55.668124",
            "longitude": "37.534093",
            "title": "улица Академика Пилюгина, 18 (напротив)",
            "is_fast": "false",
            "power": "22",
            "is_payment": "false"
        },
        {
            "latitude": "55.744757",
            "longitude": "37.610572",
            "title": "Берсеневская набережная, 20\/2 (напротив)",
            "is_fast": "false",
            "power": "22",
            "is_payment": "false"
        },
        {
            "latitude": "55.763335",
            "longitude": "37.664936",
            "title": "Малый Демидовский переулок, 6",
            "is_fast": "false",
            "power": "22",
            "is_payment": "false"
        },
        {
            "latitude": "55.7771434",
            "longitude": "37.6356943",
            "title": "проспект Мира, 26с7",
            "is_fast": "false",
            "power": "22",
            "is_payment": "false"
        },
        {
            "latitude": "55.761126",
            "longitude": "37.607307",
            "title": "Леонтьевский переулок, д. 22 (со стороны Вознесенского пер.)",
            "is_fast": "true",
            "power": "50",
            "is_payment": "false"
        },
        {
            "latitude": "55.761126",
            "longitude": "37.607307",
            "title": "Леонтьевский переулок, д. 22 (со стороны Вознесенского пер.)",
            "is_fast": "true",
            "power": "50",
            "is_payment": "false"
        },
        {
            "latitude": "55.674795",
            "longitude": "37.663653",
            "title": "проспект Андропова, 31",
            "is_fast": "false",
            "power": "22",
            "is_payment": "false"
        },
        {
            "latitude": "55.594447",
            "longitude": "37.672099",
            "title": "Липецкая улица, 20",
            "is_fast": "false",
            "power": "22",
            "is_payment": "false"
        },
        {
            "latitude": "55.743999",
            "longitude": "37.640854",
            "title": "Космодамианская набережная, 4\/22А",
            "is_fast": "true",
            "power": "50",
            "is_payment": "false"
        },
        {
            "latitude": "55.660388",
            "longitude": "37.595477",
            "title": "Одесская улица, 6с4",
            "is_fast": "false",
            "power": "22",
            "is_payment": "false"
        },
        {
            "latitude": "55.649204",
            "longitude": "37.59842",
            "title": "Азовская улица, д. 24, корп. 1",
            "is_fast": "false",
            "power": "22",
            "is_payment": "false"
        },
        {
            "latitude": "55.748021",
            "longitude": "37.676282",
            "title": "Гжельский переулок, 12\/3с1",
            "is_fast": "false",
            "power": "22",
            "is_payment": "false"
        },
        {
            "latitude": "55.725079",
            "longitude": "37.575356",
            "title": "Улица Ефремова, 10",
            "is_fast": "false",
            "power": "22",
            "is_payment": "false"
        },
        {
            "latitude": "55.701173",
            "longitude": "37.756069",
            "title": "улица Юных Ленинцев, 47к2",
            "is_fast": "false",
            "power": "22",
            "is_payment": "false"
        },
        {
            "latitude": "55.648598",
            "longitude": "37.663698",
            "title": "Каширское шоссе, 44к1",
            "is_fast": "false",
            "power": "22",
            "is_payment": "false"
        },
        {
            "latitude": "55.801469",
            "longitude": "37.614183",
            "title": "9-й проезд Марьиной Рощи, 6",
            "is_fast": "false",
            "power": "22",
            "is_payment": "false"
        },
        {
            "latitude": "55.852777",
            "longitude": "37.342641",
            "title": "улица Барышиха, 40",
            "is_fast": "false",
            "power": "22",
            "is_payment": "false"
        },
        {
            "latitude": "55.84459",
            "longitude": "37.357742",
            "title": "Дубравная улица, 35",
            "is_fast": "false",
            "power": "22",
            "is_payment": "false"
        },
        {
            "latitude": "55.644546",
            "longitude": "37.6532",
            "title": "Улица Москворечье, 4к1",
            "is_fast": "false",
            "power": "22",
            "is_payment": "false"
        },
        {
            "latitude": "55.719309",
            "longitude": "37.445078",
            "title": "улица Вересаева, 10",
            "is_fast": "true",
            "power": "50",
            "is_payment": "false"
        },
        {
            "latitude": "55.739632",
            "longitude": "37.574675",
            "title": "1-ый Вражский переулок, 4",
            "is_fast": "true",
            "power": "50",
            "is_payment": "false"
        },
        {
            "latitude": "55.775221",
            "longitude": "37.630456",
            "title": "улица Гиляровского, 6с2",
            "is_fast": "false",
            "power": "22",
            "is_payment": "false"
        },
        {
            "latitude": "55.697615",
            "longitude": "37.461244",
            "title": "Очаковское шоссе, 2А",
            "is_fast": "false",
            "power": "22",
            "is_payment": "false"
        },
        {
            "latitude": "55.755928",
            "longitude": "37.538727",
            "title": "Шмитовский проезд, 28",
            "is_fast": "true",
            "power": "50",
            "is_payment": "false"
        },
        {
            "latitude": "55.665859",
            "longitude": "37.752541",
            "title": "Братиславская улица, 1",
            "is_fast": "false",
            "power": "22",
            "is_payment": "false"
        },
        {
            "latitude": "55.780912",
            "longitude": "37.587847",
            "title": "2-й Лесной переулок, 8",
            "is_fast": "true",
            "power": "50",
            "is_payment": "false"
        },
        {
            "latitude": "55.785548",
            "longitude": "37.738739",
            "title": "Фортунатовская улица, 31\/35",
            "is_fast": "false",
            "power": "22",
            "is_payment": "false"
        },
        {
            "latitude": "55.770712",
            "longitude": "37.630562",
            "title": "Большой Сухаревский переулок, 24",
            "is_fast": "true",
            "power": "50",
            "is_payment": "false"
        },
        {
            "latitude": "55.716859",
            "longitude": "37.774732",
            "title": "Окская улица, 42\/1к1",
            "is_fast": "false",
            "power": "22",
            "is_payment": "false"
        },
        {
            "latitude": "55.779923",
            "longitude": "37.5297",
            "title": "улица Полины Осипенко, 18к1",
            "is_fast": "true",
            "power": "50",
            "is_payment": "false"
        },
        {
            "latitude": "55.702274",
            "longitude": "37.778004",
            "title": "Волгоградский проспект, 116к1с2 (со стороны Есенинского бул.)",
            "is_fast": "false",
            "power": "22",
            "is_payment": "false"
        },
        {
            "latitude": "55.703327",
            "longitude": "37.793189",
            "title": "улица Академика Скрябина, 30к1",
            "is_fast": "false",
            "power": "22",
            "is_payment": "false"
        },
        {
            "latitude": "55.797356",
            "longitude": "37.802148",
            "title": "Измайловский бульвар, 55 (напротив)",
            "is_fast": "false",
            "power": "22",
            "is_payment": "false"
        },
        {
            "latitude": "55.630307",
            "longitude": "37.612708",
            "title": "Кировоградская улица, 4к1 (напротив)",
            "is_fast": "false",
            "power": "22",
            "is_payment": "false"
        },
        {
            "latitude": "55.730424",
            "longitude": "37.468811",
            "title": "улица Герасима Курина, 20",
            "is_fast": "true",
            "power": "50",
            "is_payment": "false"
        },
        {
            "latitude": "55.769535",
            "longitude": "37.480419",
            "title": "Карамышевская набережная, 18к1",
            "is_fast": "true",
            "power": "50",
            "is_payment": "false"
        },
        {
            "latitude": "55.863284",
            "longitude": "37.540502",
            "title": "Дегунинская улица, 1к1",
            "is_fast": "false",
            "power": "22",
            "is_payment": "false"
        },
        {
            "latitude": "55.648354",
            "longitude": "37.388054",
            "title": "улица Богданова, 58 (со стороны Попутной ул.)",
            "is_fast": "false",
            "power": "22",
            "is_payment": "false"
        },
        {
            "latitude": "55.817836",
            "longitude": "37.712592",
            "title": "бульвар Маршала Рокоссовского, 37",
            "is_fast": "false",
            "power": "22",
            "is_payment": "false"
        },
        {
            "latitude": "55.891793",
            "longitude": "37.662347",
            "title": "улица Грекова, 22",
            "is_fast": "false",
            "power": "22",
            "is_payment": "false"
        },
        {
            "latitude": "55.859193",
            "longitude": "37.492805",
            "title": "Фестивальная улица, 8с2 (со стороны ул. Ляпидевского)",
            "is_fast": "false",
            "power": "22",
            "is_payment": "false"
        },
        {
            "latitude": "55.655694",
            "longitude": "37.761169",
            "title": "Братиславская улица, 22 (со стороны Новомарьинской ул.)",
            "is_fast": "false",
            "power": "22",
            "is_payment": "false"
        },
        {
            "latitude": "55.716557",
            "longitude": "37.677858",
            "title": "Шарикоподшипниковская улица, 13А",
            "is_fast": "false",
            "power": "22",
            "is_payment": "false"
        },
        {
            "latitude": "55.632092",
            "longitude": "37.743917",
            "title": "улица Борисовские Пруды, 14к4 (напротив)",
            "is_fast": "false",
            "power": "22",
            "is_payment": "false"
        },
        {
            "latitude": "55.659409",
            "longitude": "37.749815",
            "title": "улица Перерва, 43к1",
            "is_fast": "false",
            "power": "22",
            "is_payment": "false"
        },
        {
            "latitude": "55.651548",
            "longitude": "37.613187",
            "title": "Чонгарский бульвар, 7 (со стороны Артековской ул.)",
            "is_fast": "false",
            "power": "22",
            "is_payment": "false"
        },
        {
            "latitude": "55.737769",
            "longitude": "37.433502",
            "title": "Истринская улица, 10к1 (напротив)",
            "is_fast": "false",
            "power": "22",
            "is_payment": "false"
        },
        {
            "latitude": "55.756188",
            "longitude": "37.703229",
            "title": "Красноказарменная улица, 13с1",
            "is_fast": "true",
            "power": "50",
            "is_payment": "false"
        },
        {
            "latitude": "55.652522",
            "longitude": "37.470567",
            "title": "улица Академика Анохина, 7",
            "is_fast": "false",
            "power": "22",
            "is_payment": "false"
        },
        {
            "latitude": "55.647218",
            "longitude": "37.47559",
            "title": "проспект Вернадского, 102А (со стороны Рузской ул.)",
            "is_fast": "false",
            "power": "22",
            "is_payment": "false"
        },
        {
            "latitude": "55.857799",
            "longitude": "37.607994",
            "title": "Отрадная улица, 8А",
            "is_fast": "false",
            "power": "22",
            "is_payment": "false"
        },
        {
            "latitude": "55.795075",
            "longitude": "37.711579",
            "title": "Преображенская площадь, 6",
            "is_fast": "false",
            "power": "22",
            "is_payment": "false"
        },
        {
            "latitude": "55.607365",
            "longitude": "37.590254",
            "title": "Чертановская улица, 48А",
            "is_fast": "false",
            "power": "22",
            "is_payment": "false"
        },
        {
            "latitude": "55.71376",
            "longitude": "37.474631",
            "title": "Нежинская улица, 5Б",
            "is_fast": "false",
            "power": "22",
            "is_payment": "false"
        },
        {
            "latitude": "55.589088",
            "longitude": "37.598325",
            "title": "Варшавское шоссе, 154к1",
            "is_fast": "false",
            "power": "22",
            "is_payment": "false"
        },
        {
            "latitude": "55.744091",
            "longitude": "37.497124",
            "title": "улица Барклая, 11 (со стороны ул. Сеславинской)",
            "is_fast": "true",
            "power": "50",
            "is_payment": "false"
        },
        {
            "latitude": "55.870923",
            "longitude": "37.462917",
            "title": "Ленинградское шоссе, 130к3",
            "is_fast": "false",
            "power": "22",
            "is_payment": "false"
        },
        {
            "latitude": "55.736183",
            "longitude": "37.498613",
            "title": "Улица Василисы Кожиной, 12",
            "is_fast": "true",
            "power": "50",
            "is_payment": "false"
        },
        {
            "latitude": "55.785943",
            "longitude": "37.638055",
            "title": "Банный переулок, 7к1",
            "is_fast": "false",
            "power": "22",
            "is_payment": "false"
        },
        {
            "latitude": "55.791283",
            "longitude": "37.629141",
            "title": "Улица Верземнека, 6",
            "is_fast": "false",
            "power": "22",
            "is_payment": "false"
        },
        {
            "latitude": "55.708774",
            "longitude": "37.661821",
            "title": "Автозаводская улица, 5",
            "is_fast": "false",
            "power": "22",
            "is_payment": "false"
        },
        {
            "latitude": "55.760039",
            "longitude": "37.655039",
            "title": "Большой Казенный переулок, 6с1",
            "is_fast": "false",
            "power": "22",
            "is_payment": "false"
        },
        {
            "latitude": "55.733991",
            "longitude": "37.578849",
            "title": "Олсуфьевский переулок, 10с1",
            "is_fast": "false",
            "power": "22",
            "is_payment": "false"
        },
        {
            "latitude": "55.73397",
            "longitude": "37.578878",
            "title": "Олсуфьевский переулок, 10с1",
            "is_fast": "false",
            "power": "22",
            "is_payment": "false"
        },
        {
            "latitude": "55.774288",
            "longitude": "37.628823",
            "title": "улица Щепкина, 3",
            "is_fast": "false",
            "power": "22",
            "is_payment": "false"
        },
        {
            "latitude": "55.782778",
            "longitude": "37.629186",
            "title": "улица Щепкина, 49А",
            "is_fast": "false",
            "power": "22",
            "is_payment": "false"
        },
        {
            "latitude": "55.755576",
            "longitude": "37.538151",
            "title": "улица Большая Переяславская, 17",
            "is_fast": "false",
            "power": "22",
            "is_payment": "false"
        },
        {
            "latitude": "55.823752",
            "longitude": "37.642799",
            "title": "Проспект Мира, 123 (со стороны 2-го Поперечного пр.)",
            "is_fast": "true",
            "power": "50",
            "is_payment": "false"
        },
        {
            "latitude": "55.805819",
            "longitude": "37.545366",
            "title": "улица Академика Ильюшина, 12",
            "is_fast": "true",
            "power": "60",
            "is_payment": "false"
        },
        {
            "latitude": "55.817253",
            "longitude": "37.592315",
            "title": "улица Добролюбова, 20",
            "is_fast": "true",
            "power": "60",
            "is_payment": "false"
        },
        {
            "latitude": "55.797652",
            "longitude": "37.688938",
            "title": "ул. Короленко, д. 1, корп. 2",
            "is_fast": "true",
            "power": "60",
            "is_payment": "false"
        },
        {
            "latitude": "55.863476",
            "longitude": "37.599864",
            "title": "ул. Санникова, д. 17",
            "is_fast": "true",
            "power": "60",
            "is_payment": "false"
        },
        {
            "latitude": "55.808165",
            "longitude": "37.531598",
            "title": "ул. Часовая, д. 12",
            "is_fast": "true",
            "power": "60",
            "is_payment": "false"
        },
        {
            "latitude": "55.816879",
            "longitude": "37.46384",
            "title": "Волоколамское шоссе, д. 60, корп. 1",
            "is_fast": "true",
            "power": "60",
            "is_payment": "false"
        },
        {
            "latitude": "55.866782",
            "longitude": "37.481115",
            "title": "ул. Беломорская, д. 38",
            "is_fast": "true",
            "power": "60",
            "is_payment": "false"
        },
        {
            "latitude": "55.820638",
            "longitude": "37.585877",
            "title": "ул. Фонвизина, д. 13",
            "is_fast": "true",
            "power": "60",
            "is_payment": "false"
        },
        {
            "latitude": "55.862223",
            "longitude": "37.620326",
            "title": "ул. Мусоргского, д. 1Б",
            "is_fast": "true",
            "power": "60",
            "is_payment": "false"
        },
        {
            "latitude": "55.859451",
            "longitude": "37.657628",
            "title": "ул. Кольская, д. 2, корп. 5, стр. 1 (со стороны Радужной ул.)",
            "is_fast": "true",
            "power": "60",
            "is_payment": "false"
        },
        {
            "latitude": "55.854668",
            "longitude": "37.617848",
            "title": "ул. Отрадная, д. 18",
            "is_fast": "true",
            "power": "60",
            "is_payment": "false"
        },
        {
            "latitude": "55.838566",
            "longitude": "37.497068",
            "title": "Головинское ш., д. 10Г",
            "is_fast": "true",
            "power": "60",
            "is_payment": "false"
        },
        {
            "latitude": "55.844507",
            "longitude": "37.500706",
            "title": "ул. Смольная, д. 2",
            "is_fast": "true",
            "power": "60",
            "is_payment": "false"
        },
        {
            "latitude": "55.823934",
            "longitude": "37.560356",
            "title": "Красностуденческий пр., д. 21",
            "is_fast": "true",
            "power": "60",
            "is_payment": "false"
        },
        {
            "latitude": "55.846419",
            "longitude": "37.565412",
            "title": "3-й Нижнелихоборский пр., д. 5, стр. 8 (со стороны 1-го Нижнелихоборского пр.)",
            "is_fast": "true",
            "power": "60",
            "is_payment": "false"
        },
        {
            "latitude": "55.876737",
            "longitude": "37.537791",
            "title": "ул. 800-летия Москвы, д. 6",
            "is_fast": "true",
            "power": "60",
            "is_payment": "false"
        },
        {
            "latitude": "55.904207",
            "longitude": "37.550427",
            "title": "ул. Псковская, д. 7, корп. 1",
            "is_fast": "true",
            "power": "60",
            "is_payment": "false"
        },
        {
            "latitude": "55.863575",
            "longitude": "37.503058",
            "title": "Петрозаводская ул., д. 8",
            "is_fast": "true",
            "power": "60",
            "is_payment": "false"
        },
        {
            "latitude": "55.862283",
            "longitude": "37.674386",
            "title": "ул. Лётчика Бабушкина, д. 10\/1",
            "is_fast": "true",
            "power": "60",
            "is_payment": "false"
        },
        {
            "latitude": "55.837373",
            "longitude": "37.6556",
            "title": "ул. Докукина, д. 4",
            "is_fast": "true",
            "power": "60",
            "is_payment": "false"
        },
        {
            "latitude": "55.884396",
            "longitude": "37.539208",
            "title": "ул. Яхромская, д. 6",
            "is_fast": "true",
            "power": "60",
            "is_payment": "false"
        },
        {
            "latitude": "55.823646",
            "longitude": "37.603501",
            "title": "ул. Академика Королёва, д. 12 (со стороны 1-ой Останкинской ул.)",
            "is_fast": "true",
            "power": "60",
            "is_payment": "false"
        },
        {
            "latitude": "55.879456",
            "longitude": "37.714619",
            "title": "ул. Егора Абакумова, д. 10, корп. 1",
            "is_fast": "true",
            "power": "60",
            "is_payment": "false"
        },
        {
            "latitude": "55.845672",
            "longitude": "37.580018",
            "title": "ул. Гостиничная, д. 9",
            "is_fast": "true",
            "power": "60",
            "is_payment": "false"
        },
        {
            "latitude": "55.827332",
            "longitude": "37.522147",
            "title": "ул. Новопетровская, д. 14",
            "is_fast": "true",
            "power": "60",
            "is_payment": "false"
        },
        {
            "latitude": "55.874746",
            "longitude": "37.608516",
            "title": "ул. Римского-Корсакова, д. 18",
            "is_fast": "true",
            "power": "60",
            "is_payment": "false"
        },
        {
            "latitude": "55.887995",
            "longitude": "37.600164",
            "title": "ул. Пришвина, д. 13",
            "is_fast": "true",
            "power": "60",
            "is_payment": "false"
        },
        {
            "latitude": "55.849359",
            "longitude": "37.642417",
            "title": "ул. Снежная, д. 8",
            "is_fast": "true",
            "power": "60",
            "is_payment": "false"
        },
        {
            "latitude": "55.832575",
            "longitude": "37.593023",
            "title": "ул. Малая Ботаническая, д. 3",
            "is_fast": "true",
            "power": "60",
            "is_payment": "false"
        },
        {
            "latitude": "55.842043",
            "longitude": "37.547928",
            "title": "ул. Лихоборские Бугры, д. 3",
            "is_fast": "true",
            "power": "60",
            "is_payment": "false"
        },
        {
            "latitude": "55.861483",
            "longitude": "37.56775",
            "title": "ул. Дубнинская, д. 10, корп. 1",
            "is_fast": "true",
            "power": "60",
            "is_payment": "false"
        },
        {
            "latitude": "55.862077",
            "longitude": "37.521376",
            "title": "ул. Солнечногорская, д. 21",
            "is_fast": "true",
            "power": "60",
            "is_payment": "false"
        },
        {
            "latitude": "55.893435",
            "longitude": "37.534228",
            "title": "Карельский бул., д. 5",
            "is_fast": "true",
            "power": "60",
            "is_payment": "false"
        },
        {
            "latitude": "55.845076",
            "longitude": "37.454993",
            "title": "ул. Свободы, д. 42",
            "is_fast": "true",
            "power": "60",
            "is_payment": "false"
        },
        {
            "latitude": "55.834954",
            "longitude": "37.450228",
            "title": "ул. Малая Набережная, д. 13",
            "is_fast": "true",
            "power": "60",
            "is_payment": "false"
        },
        {
            "latitude": "55.878467",
            "longitude": "37.557684",
            "title": "ул. 800-летия Москвы, д. 26, корп. 2 (со стороны Дубнинской ул.)",
            "is_fast": "true",
            "power": "60",
            "is_payment": "false"
        },
        {
            "latitude": "55.881867",
            "longitude": "37.715994",
            "title": "ул. Холмогорская, д. 8",
            "is_fast": "true",
            "power": "60",
            "is_payment": "false"
        },
        {
            "latitude": "55.795348",
            "longitude": "37.581197",
            "title": "ул. 2-я Квесисская, д. 11",
            "is_fast": "true",
            "power": "60",
            "is_payment": "false"
        },
        {
            "latitude": "55.884787",
            "longitude": "37.587394",
            "title": "Алтуфьевское ш., д. 64",
            "is_fast": "true",
            "power": "60",
            "is_payment": "false"
        },
        {
            "latitude": "55.838746",
            "longitude": "37.576578",
            "title": "Локомотивный пр., д. 3",
            "is_fast": "true",
            "power": "60",
            "is_payment": "false"
        },
        {
            "latitude": "55.795224",
            "longitude": "37.619133",
            "title": "2-я улица Марьиной Рощи, 10\/14",
            "is_fast": "true",
            "power": "60",
            "is_payment": "false"
        },
        {
            "latitude": "55.878149",
            "longitude": "37.482344",
            "title": "ул. Дыбенко, д. 44",
            "is_fast": "true",
            "power": "60",
            "is_payment": "false"
        },
        {
            "latitude": "55.8515",
            "longitude": "37.593442",
            "title": "Сигнальный пр., д.37А, стр.2",
            "is_fast": "true",
            "power": "60",
            "is_payment": "false"
        },
        {
            "latitude": "55.820117",
            "longitude": "37.69977",
            "title": "Погонный пр., д. 1, корп. 6, стр. 1 (со стороны Проектируемого пр. № 6503)",
            "is_fast": "true",
            "power": "60",
            "is_payment": "false"
        },
        {
            "latitude": "55.7636592",
            "longitude": "37.5741167",
            "title": "переулок Волков, 13с1",
            "is_fast": "false",
            "power": "22",
            "is_payment": "false"
        },
        {
            "latitude": "55.7481329",
            "longitude": "37.5949903",
            "title": "Староконюшенный пер., 26",
            "is_fast": "false",
            "power": "22",
            "is_payment": "false"
        },
        {
            "latitude": "55.7551588",
            "longitude": "37.5679326",
            "title": "Николаева улица, 1",
            "is_fast": "false",
            "power": "22",
            "is_payment": "false"
        },
        {
            "latitude": "55.7551588",
            "longitude": "37.5679326",
            "title": "Николаева улица, 1",
            "is_fast": "false",
            "power": "22",
            "is_payment": "false"
        },
        {
            "latitude": "55.7678229",
            "longitude": "37.5683192",
            "title": "улица Климашкина, 17",
            "is_fast": "false",
            "power": "22",
            "is_payment": "false"
        },
        {
            "latitude": "55.7631992",
            "longitude": "37.6102114",
            "title": "Глинищевский переулок, 6",
            "is_fast": "false",
            "power": "22",
            "is_payment": "false"
        },
        {
            "latitude": "55.773724",
            "longitude": "37.6123058",
            "title": "Садовая-Самотечная улица, 1",
            "is_fast": "false",
            "power": "22",
            "is_payment": "false"
        },
        {
            "latitude": "55.773724",
            "longitude": "37.6123058",
            "title": "Садовая-Самотечная улица, 1",
            "is_fast": "false",
            "power": "22",
            "is_payment": "false"
        },
        {
            "latitude": "55.7389878",
            "longitude": "37.5957655",
            "title": "улица Остоженка, 36",
            "is_fast": "false",
            "power": "22",
            "is_payment": "false"
        },
        {
            "latitude": "55.7580499",
            "longitude": "37.6092567",
            "title": "Газетный переулок, 12к2",
            "is_fast": "false",
            "power": "22",
            "is_payment": "false"
        },
        {
            "latitude": "55.7080656",
            "longitude": "37.6603201",
            "title": "Автозаводская улица, 7",
            "is_fast": "false",
            "power": "22",
            "is_payment": "false"
        },
        {
            "latitude": "55.7610556",
            "longitude": "37.6460003",
            "title": "улица Макаренко, 1\/19",
            "is_fast": "false",
            "power": "22",
            "is_payment": "false"
        },
        {
            "latitude": "55.7364533",
            "longitude": "37.6393556",
            "title": "Озерковская набережная, 44",
            "is_fast": "false",
            "power": "22",
            "is_payment": "false"
        },
        {
            "latitude": "55.7570434",
            "longitude": "37.6444246",
            "title": "Хохловский переулок, 13с1",
            "is_fast": "false",
            "power": "22",
            "is_payment": "false"
        },
        {
            "latitude": "55.7595419",
            "longitude": "37.6415248",
            "title": "Потаповский переулок, 14",
            "is_fast": "false",
            "power": "22",
            "is_payment": "false"
        },
        {
            "latitude": "55.7418913",
            "longitude": "37.6042302",
            "title": "2-й Обыденский переулок, 4",
            "is_fast": "false",
            "power": "22",
            "is_payment": "false"
        },
        {
            "latitude": "55.7671987",
            "longitude": "37.5644663",
            "title": "улица Пресненский Вал, 7с1",
            "is_fast": "false",
            "power": "22",
            "is_payment": "false"
        },
        {
            "latitude": "55.7671987",
            "longitude": "37.5644663",
            "title": "улица Пресненский Вал, 7с1",
            "is_fast": "false",
            "power": "22",
            "is_payment": "false"
        },
        {
            "latitude": "55.7544634",
            "longitude": "37.6463334",
            "title": "Малый Трехсвятительский переулок, 3с6",
            "is_fast": "false",
            "power": "22",
            "is_payment": "false"
        },
        {
            "latitude": "55.7046359",
            "longitude": "37.6585101",
            "title": "1-й Кожуховский проезд, 1\/7",
            "is_fast": "false",
            "power": "22",
            "is_payment": "false"
        },
        {
            "latitude": "55.7521674",
            "longitude": "37.5609555",
            "title": "набережная Тараса Шевченко, 9",
            "is_fast": "false",
            "power": "22",
            "is_payment": "false"
        },
        {
            "latitude": "55.7521674",
            "longitude": "37.5609555",
            "title": "набережная Тараса Шевченко, 9",
            "is_fast": "false",
            "power": "22",
            "is_payment": "false"
        },
        {
            "latitude": "55.7427949",
            "longitude": "37.6349566",
            "title": "Руновский переулок, 5с1",
            "is_fast": "false",
            "power": "22",
            "is_payment": "false"
        },
        {
            "latitude": "55.7472328",
            "longitude": "37.6258936",
            "title": "улица Балчуг, 5",
            "is_fast": "false",
            "power": "22",
            "is_payment": "false"
        },
        {
            "latitude": "55.7472328",
            "longitude": "37.6258936",
            "title": "улица Балчуг, 5",
            "is_fast": "false",
            "power": "22",
            "is_payment": "false"
        },
        {
            "latitude": "55.7573793",
            "longitude": "37.5866686",
            "title": "Поварская улица, 33с1",
            "is_fast": "false",
            "power": "22",
            "is_payment": "false"
        },
        {
            "latitude": "55.77474",
            "longitude": "37.628835",
            "title": "улица Щепкина, 3",
            "is_fast": "false",
            "power": "22",
            "is_payment": "false"
        },
        {
            "latitude": "55.7872693",
            "longitude": "37.6326665",
            "title": "улица Гиляровского, 57",
            "is_fast": "false",
            "power": "22",
            "is_payment": "false"
        },
        {
            "latitude": "55.7879034",
            "longitude": "37.6400797",
            "title": "Большая Переяславская улица, 17",
            "is_fast": "false",
            "power": "22",
            "is_payment": "false"
        },
        {
            "latitude": "55.7908055",
            "longitude": "37.6290187",
            "title": "улица Верземнека, 5",
            "is_fast": "false",
            "power": "22",
            "is_payment": "false"
        },
        {
            "latitude": "55.7190729",
            "longitude": "37.6004365",
            "title": "Малый Калужский переулок, 1с4",
            "is_fast": "false",
            "power": "22",
            "is_payment": "false"
        },
        {
            "latitude": "55.7467572",
            "longitude": "37.5991958",
            "title": "Гоголевский бульвар, 17",
            "is_fast": "false",
            "power": "22",
            "is_payment": "false"
        },
        {
            "latitude": "55.7810797",
            "longitude": "37.6118099",
            "title": "Селезневская улица, 32",
            "is_fast": "false",
            "power": "22",
            "is_payment": "false"
        },
        {
            "latitude": "55.7420574",
            "longitude": "37.6161721",
            "title": "улица Большая Полянка, 1\/3",
            "is_fast": "false",
            "power": "22",
            "is_payment": "false"
        },
        {
            "latitude": "55.7707135",
            "longitude": "37.5681649",
            "title": "улица Пресненский Вал, 30",
            "is_fast": "false",
            "power": "22",
            "is_payment": "false"
        },
        {
            "latitude": "55.7234276",
            "longitude": "37.5721988",
            "title": "3-я Фрунзенская улица, 19",
            "is_fast": "false",
            "power": "22",
            "is_payment": "false"
        },
        {
            "latitude": "55.7519001",
            "longitude": "37.6482201",
            "title": "Большой Николоворобинский переулок, 7с2",
            "is_fast": "false",
            "power": "22",
            "is_payment": "false"
        },
        {
            "latitude": "55.7392502",
            "longitude": "37.6137454",
            "title": "1-й Голутвинский переулок, 3-5 строение 1",
            "is_fast": "false",
            "power": "22",
            "is_payment": "false"
        },
        {
            "latitude": "55.7117853",
            "longitude": "37.6189792",
            "title": "улица Серпуховский Вал, 4",
            "is_fast": "false",
            "power": "22",
            "is_payment": "false"
        },
        {
            "latitude": "55.7117853",
            "longitude": "37.6189792",
            "title": "улица Серпуховский Вал, 4",
            "is_fast": "false",
            "power": "22",
            "is_payment": "false"
        },
        {
            "latitude": "55.7443386",
            "longitude": "37.6633801",
            "title": "улица Александра Солженицына, 23Ас1",
            "is_fast": "false",
            "power": "22",
            "is_payment": "false"
        },
        {
            "latitude": "55.7393598",
            "longitude": "37.6334389",
            "title": "Большая Татарская улица, 26",
            "is_fast": "false",
            "power": "22",
            "is_payment": "false"
        },
        {
            "latitude": "55.7584055",
            "longitude": "37.6432062",
            "title": "Колпачный переулок, 3с2",
            "is_fast": "false",
            "power": "22",
            "is_payment": "false"
        },
        {
            "latitude": "55.7584055",
            "longitude": "37.6432062",
            "title": "Колпачный переулок, 3с2",
            "is_fast": "false",
            "power": "22",
            "is_payment": "false"
        },
        {
            "latitude": "55.712859",
            "longitude": "37.6591169",
            "title": "Восточная улица, 11",
            "is_fast": "false",
            "power": "22",
            "is_payment": "false"
        },
        {
            "latitude": "55.7415957",
            "longitude": "37.6058017",
            "title": "Курсовой переулок, 4",
            "is_fast": "false",
            "power": "22",
            "is_payment": "false"
        },
        {
            "latitude": "55.741102",
            "longitude": "37.6182332",
            "title": "Старомонетный переулок, 11",
            "is_fast": "false",
            "power": "22",
            "is_payment": "false"
        },
        {
            "latitude": "55.722518",
            "longitude": "37.562834",
            "title": "Улица Савельева, д. 5",
            "is_fast": "false",
            "power": "22",
            "is_payment": "false"
        },
        {
            "latitude": "55.722518",
            "longitude": "37.562834",
            "title": "Улица Савельева, д. 5",
            "is_fast": "false",
            "power": "22",
            "is_payment": "false"
        },
        {
            "latitude": "55.765334",
            "longitude": "37.598419",
            "title": "Трехпрудный переулок, д. 8",
            "is_fast": "false",
            "power": "22",
            "is_payment": "false"
        },
        {
            "latitude": "55.714324",
            "longitude": "37.5931",
            "title": "Стасовой улица, 4",
            "is_fast": "false",
            "power": "22",
            "is_payment": "false"
        },
        {
            "latitude": "55.738584",
            "longitude": "37.53858",
            "title": "Студенческая улица, 44",
            "is_fast": "false",
            "power": "22",
            "is_payment": "false"
        },
        {
            "latitude": "55.826181",
            "longitude": "37.642025",
            "title": "площадь ВВЦ (справа от входа)",
            "is_fast": "false",
            "power": "22",
            "is_payment": "false"
        },
        {
            "latitude": "55.826181",
            "longitude": "37.642025",
            "title": "площадь ВВЦ (справа от входа)",
            "is_fast": "false",
            "power": "22",
            "is_payment": "false"
        },
        {
            "latitude": "55.77446",
            "longitude": "37.642319",
            "title": "Докучаев переулок, 3с1",
            "is_fast": "false",
            "power": "22",
            "is_payment": "false"
        },
        {
            "latitude": "55.735861",
            "longitude": "37.619224",
            "title": "улица Большая Полянка, 28к1",
            "is_fast": "false",
            "power": "22",
            "is_payment": "false"
        },
        {
            "latitude": "55.762374",
            "longitude": "37.600115",
            "title": "Большая Бронная улица, 14",
            "is_fast": "false",
            "power": "22",
            "is_payment": "false"
        },
        {
            "latitude": "55.744322",
            "longitude": "37.64819",
            "title": "Гончарная улица, 20\/1с1",
            "is_fast": "false",
            "power": "22",
            "is_payment": "false"
        },
        {
            "latitude": "55.65649",
            "longitude": "37.760156",
            "title": "Братиславская улица, 20",
            "is_fast": "false",
            "power": "22",
            "is_payment": "false"
        },
        {
            "latitude": "55.735821",
            "longitude": "37.610556",
            "title": "Мароновский переулок, 1\/7",
            "is_fast": "false",
            "power": "22",
            "is_payment": "false"
        },
        {
            "latitude": "55.804471",
            "longitude": "37.590344",
            "title": "ул. Новодмитровская, д. 2, к. 2",
            "is_fast": "false",
            "power": "22",
            "is_payment": "false"
        },
        {
            "latitude": "55.841484",
            "longitude": "37.626674",
            "title": "Проспект Мира, 119с195",
            "is_fast": "true",
            "power": "50",
            "is_payment": "false"
        },
        {
            "latitude": "55.830991",
            "longitude": "37.637121",
            "title": "Проспект Мира, 119с75",
            "is_fast": "true",
            "power": "50",
            "is_payment": "false"
        },
        {
            "latitude": "55.82943",
            "longitude": "37.623075",
            "title": "Хованская улица, 22с2",
            "is_fast": "false",
            "power": "22",
            "is_payment": "false"
        },
        {
            "latitude": "55.827112",
            "longitude": "37.622983",
            "title": "Хованская улица, 18",
            "is_fast": "true",
            "power": "50",
            "is_payment": "false"
        },
        {
            "latitude": "55.837407",
            "longitude": "37.628536",
            "title": "Проспект Мира, 119с232",
            "is_fast": "true",
            "power": "50",
            "is_payment": "false"
        },
        {
            "latitude": "55.704453",
            "longitude": "37.657505",
            "title": "1-й Автозаводский проезд, 5",
            "is_fast": "false",
            "power": "22",
            "is_payment": "false"
        },
        {
            "latitude": "56.007824",
            "longitude": "37.15795",
            "title": "Конструктора Лукина, 14с1",
            "is_fast": "true",
            "power": "50",
            "is_payment": "false"
        },
        {
            "latitude": "56.007509",
            "longitude": "37.158764",
            "title": "Конструктора Лукина, 14с1",
            "is_fast": "false",
            "power": "22",
            "is_payment": "false"
        },
        {
            "latitude": "55.733613",
            "longitude": "37.609598",
            "title": "Якиманский переулок, 6с1",
            "is_fast": "false",
            "power": "22",
            "is_payment": "false"
        },
        {
            "latitude": "55.733628",
            "longitude": "37.609602",
            "title": "Якиманский переулок, 6с1",
            "is_fast": "false",
            "power": "22",
            "is_payment": "false"
        },
        {
            "latitude": "55.646737",
            "longitude": "37.468923",
            "title": "  Ленинский проспект, 162",
            "is_fast": "false",
            "power": "22",
            "is_payment": "false"
        },
        {
            "latitude": "55.760698",
            "longitude": "37.543811",
            "title": "  Красногвардейский бульвар, 9",
            "is_fast": "false",
            "power": "22",
            "is_payment": "false"
        },
        {
            "latitude": "55.70852",
            "longitude": "37.54166",
            "title": "Университетская площадь (со стороны ул. Косыгина)",
            "is_fast": "true",
            "power": "80",
            "is_payment": "false"
        },
        {
            "latitude": "55.705173",
            "longitude": "37.587419",
            "title": "улица Вавилова, д.7Б",
            "is_fast": "true",
            "power": "50",
            "is_payment": "false"
        },
        {
            "latitude": "55.792028",
            "longitude": "37.560279",
            "title": "Ленинградский проспект, д. 36",
            "is_fast": "true",
            "power": "60",
            "is_payment": "false"
        },
        {
            "latitude": "55.764152",
            "longitude": "37.574044",
            "title": "Волков переулок, д. 17 ",
            "is_fast": "true",
            "power": "50",
            "is_payment": "false"
        },
        {
            "latitude": "55.712879",
            "longitude": "37.632807",
            "title": "Дубининская улица, д. 98",
            "is_fast": "true",
            "power": "50",
            "is_payment": "false"
        },
        {
            "latitude": "55.696763",
            "longitude": "37.740542",
            "title": "улица Чистова, д.9\/19",
            "is_fast": "true",
            "power": "50",
            "is_payment": "false"
        },
        {
            "latitude": "55.664811",
            "longitude": "37.770453",
            "title": "Белореченская улица, д.37к1",
            "is_fast": "true",
            "power": "50",
            "is_payment": "false"
        },
        {
            "latitude": "55.844189",
            "longitude": "37.399123",
            "title": "Окружная улица, д.6",
            "is_fast": "true",
            "power": "50",
            "is_payment": "false"
        },
        {
            "latitude": "55.727443",
            "longitude": "37.680014",
            "title": "Волгоградский проспект, д.24",
            "is_fast": "true",
            "power": "50",
            "is_payment": "false"
        },
        {
            "latitude": "55.720029",
            "longitude": "37.609698",
            "title": "улица Шаболовка, д.31Г",
            "is_fast": "true",
            "power": "50",
            "is_payment": "false"
        },
        {
            "latitude": "55.72014",
            "longitude": "37.609735",
            "title": "улица Шаболовка, д.31Г",
            "is_fast": "true",
            "power": "50",
            "is_payment": "false"
        },
        {
            "latitude": "55.720261",
            "longitude": "37.609785",
            "title": "улица Шаболовка, д.31Г",
            "is_fast": "true",
            "power": "50",
            "is_payment": "false"
        },
        {
            "latitude": "55.65109",
            "longitude": "37.344813",
            "title": "6-я улица Новые Сады, д.2 (со стороны Лукинской улицы)",
            "is_fast": "true",
            "power": "50",
            "is_payment": "false"
        },
        {
            "latitude": "55.638781",
            "longitude": "37.540924",
            "title": "улица Миклухо-Маклая, д.61",
            "is_fast": "true",
            "power": "50",
            "is_payment": "false"
        },
        {
            "latitude": "55.786215",
            "longitude": "37.636178",
            "title": "проспект Мира, д.64",
            "is_fast": "false",
            "power": "22",
            "is_payment": "false"
        },
        {
            "latitude": "55.75379",
            "longitude": "37.575734",
            "title": "Новый Арбат, д. 36",
            "is_fast": "true",
            "power": "50",
            "is_payment": "false"
        }
    ]

const YMap = () => {

    const Coords:any = useStore((state: any) => state.Coordinates)

    return (
        <YMaps>
            <Map
                defaultState={{
                    center: [55.751574, 37.573856],
                    zoom: 10,
                }}
                width="100vw"
                height="100vh">
                <Clusterer>
                <Placemark defaultGeometry={[55.751574, 37.573856]} />
                {jsonka.map((baloon:any) => (
                    <Placemark
                        modules={['geoObject.addon.balloon']}
                        defaultGeometry={[baloon.latitude, baloon.longitude]}

                        properties={{
                            iconContent: baloon.is_fast === `true` ? `быстрая` : `медленная`,
                            balloonContentHeader: '',
                            balloonContentBody: `зарядная станция]`,
                            balloonContentFooter: `100 ВТ`
                        }}

                        options={{
                            preset: baloon.is_fast === `true` ? 'islands#greenStretchyIcon' : 'islands#redStretchyIcon',
                        }}

                        key={baloon.id}>
                    </Placemark>
                ))}
                </Clusterer>
                {Coords && (<Placemark defaultGeometry={[Coords[0], Coords[1]]} />)}

            </Map>
        </YMaps>
    );
};

export default YMap;