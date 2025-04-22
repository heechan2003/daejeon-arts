import { useState, useEffect } from "react";
import { getPerformancesMeta } from "../../../utils/getPerformancesMeta";
import Calendar from "../../../components/Calendar/Calendar";
import PerformancesSwiper from "./PerformancesSwiper.tsx/PerformancesSwiper";
import PerformanceDetail from "./PerformanceDetails.tsx/PerformanceDetail";
import styles from "./Performances.module.css"
import { Performance } from "../../../types/performance";

const Performances = () => {
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [performancesMeta, setPerformancesMeta] = useState<Performance[] | null>(null);
    const [selectedPerformance, setSelectedPerformance] = useState<Performance | null>(null);

    useEffect(() => {
        if (!selectedDate) return;

        const fetchMeta = async () => {
            const meta = await getPerformancesMeta(selectedDate);
            setPerformancesMeta(meta);
        };

        fetchMeta();
    }, [selectedDate]);

    return (
        <div className={styles.performance}>
            <Calendar
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
            />
            <PerformancesSwiper
                performancesMeta={performancesMeta}
                setSelectedPerformance={setSelectedPerformance}
            />
            <PerformanceDetail
                selectedPerformance={selectedPerformance}
            />
        </div>
    );
};

export default Performances;