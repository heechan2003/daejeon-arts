import { useState } from "react";
import Calendar from "../../../components/Calendar/Calendar";
import PerformanceSwiper from "./PerformanceSwiper.tsx/PerformanceSwiper";
import PerformanceDetail from "./PerformanceDetails.tsx/PerformanceDetail";
import styles from "./Performance.module.css"

const Performance = () => {
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);

    return (
        <div className={styles.performance}>
            <Calendar
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
            />
            <PerformanceSwiper />
            <PerformanceDetail />
        </div>
    );
};

export default Performance;