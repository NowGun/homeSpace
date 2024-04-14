import dateFormat from "dateformat";
import styles from "./index.module.scss"
import {useEffect, useState} from "react";

const Time = () => {
    const now = new Date();
    const [timeNow, setTimeNow] = useState(dateFormat(now, "HH:MM"))

    useEffect(() => {
        const timer = setInterval(() => {
            const now = new Date()
            setTimeNow(dateFormat(now, "HH:MM"))
        }, 1000)

        return () => {
            clearInterval(timer)
        }
    }, [])

    return (
        <div className={styles.dates}>
            <p className={styles.date}>{dateFormat(now, "dddd, mmmm dS")}</p>
            <p className={styles.time}>{timeNow}</p>
        </div>
    )
}

export {
    Time
}