import React from 'react';
import Select from 'react-select';

const connectors = [
    {
        "id": 3,
        "name": "CHAdeMO",
        "image_url": "https://2chargers.net/uploads/connectors/Chademo.png",
        "extra": {
            "alias": "Chademo",
            "explanation": "Любой, первой или второй ревизии",
            "has_multiple_type": false,
            "color_scheme": "#FE6E00",
            "socket_type": "DC"
        }
    },
    {
        "id": 37,
        "name": "CCS Combo 2",
        "image_url": "https://2chargers.net/uploads/connectors/Ccs2.png",
        "extra": {
            "alias": "Ccs2",
            "explanation": "Точно — Европейский CCS/SAE Combo 2",
            "has_multiple_type": false,
            "color_scheme": "#FE6E00",
            "socket_type": "DC"
        }
    },
    {
        "id": 7,
        "name": "Type 2",
        "image_url": "https://2chargers.net/uploads/connectors/Type2.png",
        "extra": {
            "alias": "Type2",
            "explanation": "Разъём переменного тока, розетка или кабель",
            "has_multiple_type": true,
            "color_scheme": "#03C03C",
            "socket_type": "AC"
        }
    },
    {
        "id": 13,
        "name": "GB/T DC",
        "image_url": "https://2chargers.net/uploads/connectors/Gbt2.png",
        "extra": {
            "alias": "Gbt2",
            "explanation": "Китайский ГОСТовый быстрый разъем",
            "has_multiple_type": false,
            "color_scheme": "#FE6E00",
            "socket_type": "DC"
        }
    },
    {
        "id": 4,
        "name": "Type 1",
        "image_url": "https://2chargers.net/uploads/connectors/J1772.png",
        "extra": {
            "alias": "J1772",
            "explanation": "Он же, J-1772",
            "has_multiple_type": false,
            "color_scheme": "#03C03C",
            "socket_type": "AC"
        }
    },
    {
        "id": 50,
        "name": "Type1/Type2(Multi)",
        "image_url": "https://2chargers.net/uploads/connectors/multi.type2.type1.png",
        "extra": {
            "alias": "multi.type2.type1",
            "explanation": null,
            "has_multiple_type": true,
            "color_scheme": "#03C03C",
            "socket_type": "AC"
        }
    },
    {
        "id": 17,
        "name": "Розетка RU/Euro",
        "image_url": "https://2chargers.net/uploads/connectors/WallEuro.png",
        "extra": {
            "alias": "WallEuro",
            "explanation": "Обычная розетка 230V под 16А, часто упоминаемая как \"Евро\" или \"Шуко\" (Schuko)",
            "has_multiple_type": false,
            "color_scheme": "#005B96",
            "socket_type": "LV"
        }
    },
    {
        "id": 12,
        "name": "GB/T AC",
        "image_url": "https://2chargers.net/uploads/connectors/Gbt.png",
        "extra": {
            "alias": "Gbt",
            "explanation": "Китайский ГОСТовый медленный разъем. Внешне похож на Type 2",
            "has_multiple_type": false,
            "color_scheme": "#03C03C",
            "socket_type": "AC"
        }
    },
    {
        "id": 41,
        "name": "Tesla Supercharger US",
        "image_url": "https://2chargers.net/uploads/connectors/TeslaFast.US.png",
        "extra": {
            "alias": "TeslaFast.US",
            "explanation": "US: под американский разъем NACS DC",
            "has_multiple_type": false,
            "color_scheme": "#FE6E00",
            "socket_type": "DC"
        }
    },
    {
        "id": 23,
        "name": "5-pin 32А, красная ",
        "image_url": "https://2chargers.net/uploads/connectors/ThreePhase.5pin.all.png",
        "extra": {
            "alias": "ThreePhase.5pin.all",
            "explanation": "CEE-розетка \"-6h\" под три фазы",
            "has_multiple_type": false,
            "color_scheme": "#005B96",
            "socket_type": "LV"
        }
    },
    {
        "id": 9,
        "name": "Красная (на три фазы)",
        "image_url": "https://2chargers.net/uploads/connectors/ThreePhase.Unknown.png",
        "extra": {
            "alias": "ThreePhase.Unknown",
            "explanation": "Пока не рассортированные промышленные разъемы на три фазы",
            "has_multiple_type": false,
            "color_scheme": "#005B96",
            "socket_type": "LV"
        }
    },
    {
        "id": 24,
        "name": "5-pin 16А, красная",
        "image_url": "https://2chargers.net/uploads/connectors/ThreePhase.5pin.all.png",
        "extra": {
            "alias": "ThreePhase.5pin.all",
            "explanation": "CEE-розетка \"-6h\" под три фазы",
            "has_multiple_type": false,
            "color_scheme": "#005B96",
            "socket_type": "LV"
        }
    },
    {
        "id": 39,
        "name": "Tesla Supercharger Type 2",
        "image_url": "https://2chargers.net/uploads/connectors/TeslaFast.EU.Type2.png",
        "extra": {
            "alias": "TeslaFast.EU.Type2",
            "explanation": "EU: с разъемом как Type 2 (есть в Сколково)",
            "has_multiple_type": false,
            "color_scheme": "#FE6E00",
            "socket_type": "DC"
        }
    },
    {
        "id": 8,
        "name": "Type 3",
        "image_url": "https://2chargers.net/uploads/connectors/Type3.png",
        "extra": {
            "alias": "Type3",
            "explanation": "IT/FR, Крайне редкие 1-/3- фазные разъемы семейства Scame.",
            "has_multiple_type": false,
            "color_scheme": "#03C03C",
            "socket_type": "AC"
        }
    },
    {
        "id": 5,
        "name": "Tesla US",
        "image_url": "https://2chargers.net/uploads/connectors/Tesla.png",
        "extra": {
            "alias": "Tesla",
            "explanation": "US: Американский медленный Wall/Mobile Charger NACS AC",
            "has_multiple_type": false,
            "color_scheme": "#03C03C",
            "socket_type": "AC"
        }
    },
    {
        "id": 1,
        "name": "Tesla Supercharger (unsorted)",
        "image_url": "https://2chargers.net/uploads/connectors/TeslaFast.png",
        "extra": {
            "alias": "TeslaFast",
            "explanation": "Не рассортированные разъемы Supercharger. Это один из: Type 2 / CCS / US / GB/T",
            "has_multiple_type": false,
            "color_scheme": "#FE6E00",
            "socket_type": "DC"
        }
    },
    {
        "id": 11,
        "name": "Синяя, 32A",
        "image_url": "https://2chargers.net/uploads/connectors/BlueCommando.png",
        "extra": {
            "alias": "BlueCommando",
            "explanation": "Промышленная розетка Commando Mains Socket, CEE 3-pin",
            "has_multiple_type": false,
            "color_scheme": "#005B96",
            "socket_type": "LV"
        }
    },
    {
        "id": 38,
        "name": "CCS 1",
        "image_url": "https://2chargers.net/uploads/connectors/Ccs1.png",
        "extra": {
            "alias": "Ccs1",
            "explanation": "Точно — Американский CCS/SAE Combo 1",
            "has_multiple_type": false,
            "color_scheme": "#FE6E00",
            "socket_type": "DC"
        }
    },
    {
        "id": 10,
        "name": "Синяя, 16A",
        "image_url": "https://2chargers.net/uploads/connectors/CaravanMainsSocket.png",
        "extra": {
            "alias": "CaravanMainsSocket",
            "explanation": "Промышленная розетка Caravan Mains Socket, CEE 3-pin",
            "has_multiple_type": false,
            "color_scheme": "#005B96",
            "socket_type": "LV"
        }
    },
    {
        "id": 2,
        "name": "CCS",
        "image_url": "https://2chargers.net/uploads/connectors/Ccs.png",
        "extra": {
            "alias": "Ccs",
            "explanation": "Неопределенно CCS1 или CCS2",
            "has_multiple_type": false,
            "color_scheme": "#FE6E00",
            "socket_type": "DC"
        }
    },
    {
        "id": 42,
        "name": "Tesla EU (только для Tesla)",
        "image_url": "https://2chargers.net/uploads/connectors/Tesla.EU.png",
        "extra": {
            "alias": "Tesla.EU",
            "explanation": "EU: Европейский разъем Type 2 AC, настроенный заряжать ТОЛЬКО Теслы",
            "has_multiple_type": false,
            "color_scheme": "#03C03C",
            "socket_type": "AC"
        }
    },
    {
        "id": 25,
        "name": "4-pin 32А, красная",
        "image_url": "https://2chargers.net/uploads/connectors/ThreePhase.4pin.all.png",
        "extra": {
            "alias": "ThreePhase.4pin.all",
            "explanation": "Редкая CEE-розетка с четырьмя штырьками \"-6h\" под три фазы",
            "has_multiple_type": false,
            "color_scheme": "#005B96",
            "socket_type": "LV"
        }
    },
    {
        "id": 6,
        "name": "Tesla Roadster (Gen. I)",
        "image_url": "https://2chargers.net/uploads/connectors/TeslaRoadster.png",
        "extra": {
            "alias": "TeslaRoadster",
            "explanation": "Пропиетарный разъем Roadster первого поколения",
            "has_multiple_type": false,
            "color_scheme": "#03C03C",
            "socket_type": "AC"
        }
    },
    {
        "id": 26,
        "name": "4-pin 16А, красная ",
        "image_url": "https://2chargers.net/uploads/connectors/ThreePhase.4pin.all.png",
        "extra": {
            "alias": "ThreePhase.4pin.all",
            "explanation": "Редкая CEE-розетка с четырьмя штырьками \"-6h\" под три фазы",
            "has_multiple_type": false,
            "color_scheme": "#005B96",
            "socket_type": "LV"
        }
    },
    {
        "id": 40,
        "name": "Tesla Supercharger CCS 2",
        "image_url": "https://2chargers.net/uploads/connectors/TeslaFast.EU.CCS2.png",
        "extra": {
            "alias": "TeslaFast.EU.CCS2",
            "explanation": "EU: с разъемом CCS 2",
            "has_multiple_type": false,
            "color_scheme": "#FE6E00",
            "socket_type": "DC"
        }
    },
    {
        "id": 27,
        "name": "Подключение к щитку (3ф, 400V)",
        "image_url": "https://2chargers.net/uploads/connectors/OwnWires.3Phase.png",
        "extra": {
            "alias": "OwnWires.3Phase",
            "explanation": "Подключение к трем фазам со своими проводами",
            "has_multiple_type": false,
            "color_scheme": "#005B96",
            "socket_type": "LV"
        }
    },
    {
        "id": 28,
        "name": "Подключение к щитку (1ф, 230V)",
        "image_url": "https://2chargers.net/uploads/connectors/OwnWires.1Phase.png",
        "extra": {
            "alias": "OwnWires.1Phase",
            "explanation": "Подключение к 230V со своими проводами",
            "has_multiple_type": false,
            "color_scheme": "#005B96",
            "socket_type": "LV"
        }
    },
    {
        "id": 33,
        "name": "5-pin 63А",
        "image_url": "https://2chargers.net/uploads/connectors/ThreePhase.4pin.ExtremePowered.png",
        "extra": {
            "alias": "ThreePhase.4pin.ExtremePowered",
            "explanation": "Красная гигантская, три фазы, 5 пинов + \"пилотный\" контакт в центре",
            "has_multiple_type": false,
            "color_scheme": "#005B96",
            "socket_type": "LV"
        }
    },
    {
        "id": 14,
        "name": "NEMA 14-50",
        "image_url": "https://2chargers.net/uploads/connectors/NEMA1450.png",
        "extra": {
            "alias": "NEMA1450",
            "explanation": "Американская бытовая силовая, до 50А",
            "has_multiple_type": false,
            "color_scheme": "#005B96",
            "socket_type": "LV"
        }
    },
    {
        "id": 15,
        "name": "Розетка US/JP",
        "image_url": "https://2chargers.net/uploads/connectors/WallOutlet.US.png",
        "extra": {
            "alias": "WallOutlet.US",
            "explanation": "US/JP: \"домашние\" семейства NEMA 5 и совместимые",
            "has_multiple_type": false,
            "color_scheme": "#005B96",
            "socket_type": "LV"
        }
    },
    {
        "id": 16,
        "name": "Розетка UK",
        "image_url": "https://2chargers.net/uploads/connectors/WallOutlet.UK.BS1363.png",
        "extra": {
            "alias": "WallOutlet.UK.BS1363",
            "explanation": "BS1363: Британия / сателлиты",
            "has_multiple_type": false,
            "color_scheme": "#005B96",
            "socket_type": "LV"
        }
    },
    {
        "id": 18,
        "name": "Розетка AU/NZ",
        "image_url": "https://2chargers.net/uploads/connectors/WallOutlet.AU.NZ.3112.png",
        "extra": {
            "alias": "WallOutlet.AU.NZ.3112",
            "explanation": "3112: Австралия, Новая Зеландия, Аргентина, т.п.",
            "has_multiple_type": false,
            "color_scheme": "#005B96",
            "socket_type": "LV"
        }
    },
    {
        "id": 19,
        "name": "Type 3A",
        "image_url": "https://2chargers.net/uploads/connectors/Type3A.png",
        "extra": {
            "alias": "Type3A",
            "explanation": "IT/FR, 1 фаза, 16А. 4 контакта, крайне редкий",
            "has_multiple_type": false,
            "color_scheme": "#03C03C",
            "socket_type": "AC"
        }
    },
    {
        "id": 29,
        "name": "Type 3C",
        "image_url": "https://2chargers.net/uploads/connectors/Type3.png",
        "extra": {
            "alias": "Type3",
            "explanation": "IT/FR, 3 фазы 32А, 7 контактов, крайне редкий",
            "has_multiple_type": false,
            "color_scheme": "#03C03C",
            "socket_type": "AC"
        }
    },
    {
        "id": 30,
        "name": "Промышленный разъем",
        "image_url": "https://2chargers.net/uploads/connectors/Industrial.SU.Other.png",
        "extra": {
            "alias": "Industrial.SU.Other",
            "explanation": "Разъем электроплиты 3 фазы: РШ30, РА32 или \"УХЛ4\" 25А/32А",
            "has_multiple_type": false,
            "color_scheme": "#005B96",
            "socket_type": "LV"
        }
    },
    {
        "id": 31,
        "name": "4-pin 63А ",
        "image_url": "https://2chargers.net/uploads/connectors/ThreePhase.5pin.ExtremePowered.png",
        "extra": {
            "alias": "ThreePhase.5pin.ExtremePowered",
            "explanation": "Красная гигантская, три фазы, 4 пинов + \"пилотный\" контакт в центре",
            "has_multiple_type": false,
            "color_scheme": "#005B96",
            "socket_type": "LV"
        }
    },
    {
        "id": 32,
        "name": "4-pin 125А",
        "image_url": "https://2chargers.net/uploads/connectors/ThreePhase.5pin.ExtremePowered.png",
        "extra": {
            "alias": "ThreePhase.5pin.ExtremePowered",
            "explanation": "Красная гигантская, три фазы, 4 пинов + \"пилотный\" контакт в центре",
            "has_multiple_type": false,
            "color_scheme": "#005B96",
            "socket_type": "LV"
        }
    },
    {
        "id": 34,
        "name": "5-pin 125А",
        "image_url": "https://2chargers.net/uploads/connectors/ThreePhase.4pin.ExtremePowered.png",
        "extra": {
            "alias": "ThreePhase.4pin.ExtremePowered",
            "explanation": "Красная гигантская, три фазы, 5 пинов + \"пилотный\" контакт в центре",
            "has_multiple_type": false,
            "color_scheme": "#005B96",
            "socket_type": "LV"
        }
    },
    {
        "id": 35,
        "name": "3-pin 63А",
        "image_url": "https://2chargers.net/uploads/connectors/SinglePhase.3pin.ExtremePowered.png",
        "extra": {
            "alias": "SinglePhase.3pin.ExtremePowered",
            "explanation": "Синяя гигантская, одна фаза, 4 контакта: 3 пина основных + \"пилотный\" контакт на общем кольце контактов",
            "has_multiple_type": false,
            "color_scheme": "#005B96",
            "socket_type": "LV"
        }
    },
    {
        "id": 36,
        "name": "Прочие бытовые розетки",
        "image_url": "https://2chargers.net/uploads/connectors/WallOutlet.WW.Other.png",
        "extra": {
            "alias": "WallOutlet.WW.Other",
            "explanation": "Прочие бытовые розетки, не перечисленные в перечне",
            "has_multiple_type": false,
            "color_scheme": "#005B96",
            "socket_type": "LV"
        }
    },
    {
        "id": 43,
        "name": "Розетка CN",
        "image_url": "https://2chargers.net/uploads/connectors/WallOutlet.CN.png",
        "extra": {
            "alias": "WallOutlet.CN",
            "explanation": "Китайская розетка",
            "has_multiple_type": false,
            "color_scheme": "#005B96",
            "socket_type": "LV"
        }
    },
    {
        "id": 44,
        "name": "Прочий промышленный разъем",
        "image_url": "https://2chargers.net/uploads/connectors/Industrial.WW.Other.png",
        "extra": {
            "alias": "Industrial.WW.Other",
            "explanation": null,
            "has_multiple_type": false,
            "color_scheme": "#005B96",
            "socket_type": "LV"
        }
    },
    {
        "id": 49,
        "name": "Советский РШ30 УХЛ4",
        "image_url": "https://2chargers.net/uploads/connectors/Industrial.SU.RSh30.png",
        "extra": {
            "alias": "Industrial.SU.RSh30",
            "explanation": "Разъем электроплиты 3 фазы: РШ30, РА32 или \"УХЛ4\" 25А/32А",
            "has_multiple_type": false,
            "color_scheme": "#005B96",
            "socket_type": "LV"
        }
    }
]

const connectorList = connectors.map((connector) => ({
    label: connector.name, // Using the name as the label
    value: connector.id.toString(), // Using the id as the value, converted to string
}));

export default () => {
    return (
        <>
            <Select
                className="basic-single"
                classNamePrefix="select"
                defaultValue={{ label: connectorList[0].label, value: connectorList[0].value }} // Set initial selected value
                name="connector"
                options={connectorList} // Now correctly formatted for react-select
            />
        </>
    );
};
