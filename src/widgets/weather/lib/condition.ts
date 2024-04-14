interface ICondition {
    status: string;
    localised: string;
}

const conditionStatus: ICondition[] = [
    {
        status: "clear",
        localised: "Ясно"
    },
    {
        status: "partly-cloudy",
        localised: "Малооблачно"
    },
    {
        status: "cloudy",
        localised: "Облачно с прояснениями"
    },
    {
        status: "overcast",
        localised: "Пасмурно"
    },
    {
        status: "light-rain",
        localised: "Небольшой дождь"
    },
    {
        status: "rain",
        localised: "Дождь"
    },
    {
        status: "heavy-rain",
        localised: "Сильный дождь"
    },
    {
        status: "showers",
        localised: "Ливень"
    },
    {
        status: "wet-snow",
        localised: "Дождь со снегом"
    },
    {
        status: "light-snow",
        localised: "Небольшой снег"
    },
    {
        status: "snow",
        localised: "Снег"
    },
    {
        status: "snow-showers",
        localised: "Снегопад"
    },
    {
        status: "hail",
        localised: "Град"
    },
    {
        status: "thunderstorm",
        localised: "Гроза"
    },
    {
        status: "thunderstorm-with-rain",
        localised: "Дождь с грозой"
    },
    {
        status: "thunderstorm-with-hail",
        localised: "Гроза с градом"
    }
]

export {
    conditionStatus
}