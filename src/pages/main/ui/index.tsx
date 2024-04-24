import styles from "./index.module.scss"
import {Time, Weather} from "@/widgets"

const Main = () => {

    console.log(import.meta.env.VITE_API_WEATHER_PATH, import.meta.env.VITE_API_WEATHER_ICON_PATH)

    return (
        <div className={styles.main}>
            <div className={styles.image}></div>

            <div className={styles.container}>
                <Time/>
                <Weather/>
            </div>

            <div className={styles.settings}>\
            </div>
        </div>
    )
}

export {
    Main
}