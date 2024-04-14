import dateFormat from "dateformat";
import styles from "./index.module.scss"
import {useEffect, useState} from "react";

const Main = () => {
    const now = new Date();
    const [timeNow, setTimeNow] = useState(dateFormat(now, "HH:MM:ss"))

    useEffect(() => {
        const timer = setInterval(() => {
            const now = new Date();
            setTimeNow(dateFormat(now, "HH:MM:ss"));
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, []);

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