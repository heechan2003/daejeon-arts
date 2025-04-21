import { useMemo } from "react";
import clsx from "clsx";
import { getMonthDays } from "../../../utils/getMonthDays";
import styles from "./DateSelector.module.css";

interface DateSelectorProps {
    selectedDate: Date | null;
    setSelectedDate: React.Dispatch<React.SetStateAction<Date | null>>;
    year: number;
    month: number;
    monthMeta: Record<number, boolean>;
};

const DateSelector = ({ selectedDate, setSelectedDate, year, month, monthMeta }:DateSelectorProps) => {
    // MonthDays memoized to prevent unneccessary rerenders.
    const monthDays = useMemo(() => getMonthDays(year, month), [year, month]);

    return (
        <div className={styles.dateSelector}>
            {monthDays.map(({ date, day }, key) => {
                const formattedDate = new Date(year, month - 1, date);
                const isSunday = day === "Sun";
                const hasPerformance = monthMeta[date];
                return (
                    <div
                        key={key}
                        className={styles.date}
                        onClick={() => {
                            setSelectedDate(formattedDate);
                        }}
                    >
                        {key < 7 && (
                            <div className={clsx(styles.mobileDay, isSunday && styles.sunday)}>
                                {day.toUpperCase()}
                            </div>
                        )}
                        <div className={clsx(
                            styles.number, 
                            hasPerformance && styles.hasPerformance,
                            selectedDate?.getTime() === formattedDate.getTime() && styles.selectedDate
                        )}>
                            {date}
                        </div>
                        <div className={clsx(styles.day, isSunday && styles.sunday)}>
                            {day.toUpperCase()}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default DateSelector;