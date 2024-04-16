import useSWR from "swr";
import {fetcher} from "@/shared/api/utils/apiUtils.tsx";
import {Badge} from "@/shared/ui/Badge";
import {conditionStatus} from "../lib/condition.ts";
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
        ? `/v2/forecast?lat=${coords.latitude}&lon=${coords.longitude}&lang=ru_RU&limit=1&hours=false`
        : "/v2/forecast?lat=51.741511&lon=36.140976&lang=ru_RU&limit=1&hours=false"

    const {data, error, isLoading} =
        useSWR(getPathRequestWeather, fetcher)

    const getPathIcon = data?.fact?.icon ? `https://yastatic.net/weather/i/icons/funky/dark/${data?.fact?.icon}.svg` : ""

    const {data: dataIcon} =
        useSWR(getPathIcon, fetcher)

    const getCondition = conditionStatus.find(item => item.status == data?.fact?.condition)

    if (!isGeolocationEnabled) {
        console.log(positionError)
    }

    if (isLoading && !data)
        return <Skeleton height={175} width={115} borderRadius={12}/>

    if (error) {
        console.error(error)
        return <Skeleton height={200} width={200} borderRadius={12}/>
    }

    return (
        <Badge className={styles.main}>
            <div className={styles.header}>
                <div dangerouslySetInnerHTML={{__html: dataIcon}} className={styles.icon}/>

                <div className={styles.headerInfo}>
                    <p className={styles.city}>{data?.geo_object?.locality?.name}</p>
                    <p className={styles.condition}>{getCondition?.localised}</p>
                </div>
            </div>

            <div>
                <p className={styles.temp}>{data?.fact?.temp}°C</p>
                <p className={styles.feelsLike}>Ощущается как {data?.fact?.feels_like}°C</p>
            </div>
        </Badge>
    )
}

export {
    Weather
}