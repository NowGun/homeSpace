import useSWR from "swr";
import {fetcher, setWeatherApiHeader} from "@/shared/api/utils/apiUtils.tsx";
import {Badge} from "@/shared/ui/Badge";
import styles from "./index.module.scss";
import Skeleton from "react-loading-skeleton";
import {useGeolocated} from "react-geolocated";

const Weather = () => {
    const {coords, isGeolocationEnabled, positionError} =
        useGeolocated({
            positionOptions: {
                enableHighAccuracy: true,
            },
            userDecisionTimeout: 5000,
        })

    const getPathRequestWeather = coords?.latitude && coords.longitude
        ? `${import.meta.env.VITE_API_WEATHER_PATH}/current.json?q=${coords.latitude},${coords.longitude}&lang=ru`
        : `${import.meta.env.VITE_API_WEATHER_PATH}/current.json?q=auto:ip&lang=ru`

    setWeatherApiHeader(`${import.meta.env.VITE_API_WEATHER_KEY}`)

    const {data, error, isLoading} =
        useSWR(getPathRequestWeather, fetcher)


    if (!isGeolocationEnabled) {
        console.log(positionError)
    }

    if (isLoading && !data)
        return <Skeleton height={175} width={115} borderRadius={12}/>

    if (error) {
        console.error(error)
        return <Skeleton height={200} width={200} borderRadius={12}/>
    }

    console.log(getPathRequestWeather)

    return (
        <Badge className={styles.main}>
            <div className={styles.header}>
                <img src={data?.current?.condition.icon} className={styles.icon} alt="Weather Icon"/>

                <div className={styles.headerInfo}>
                    <p className={styles.city}>{data?.location?.name}</p>
                    <p className={styles.condition}>{data?.current?.condition.text}</p>
                </div>
            </div>

            <div>
                <p className={styles.temp}>{data?.current?.temp_c}°C</p>
                <p className={styles.feelsLike}>Ощущается как {data?.current?.feelslike_c}°C</p>
            </div>
        </Badge>
    )
}

export {
    Weather
}