import dateFormat from "dateformat";
import styles from "./index.module.scss"
import {useEffect, useState} from "react";

const Main = () => {
    const now = new Date();
    const time = dateFormat(now, "HH:MM:ss")

    const [timeNow, setTimeNow] = useState(time)

    useEffect(() => {
            const timer = setInterval(() => {
                setTimeNow(time)
            }, 1000)

            return () => {
                clearInterval(timer)
            }
        },
        [time]);

    return (
        <div className={styles.main}>
            <div className={styles.image}></div>

            <div className={styles.container}>
                <div className={styles.dates}>
                    <p className={styles.date}>{dateFormat(now, "dddd, mmmm dS")}</p>
                    <p className={styles.time}>{timeNow}</p>
                </div>

            </div>

            <div className={styles.settings}>\
            </div>
        </div>
    )
}

export {
    Main
}