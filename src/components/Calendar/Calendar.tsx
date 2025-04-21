import { useEffect, useState, useCallback } from "react";
import { getMonthMeta } from "../../utils/getMonthMeta";
import YearMonthSelector from "./YearMonthSelector/YearMonthSelector";
import DateSelector from "./DateSelector/DateSelector";
import styles from "./Calendar.module.css";

interface CalendarProps {
    selectedDate: Date | null;
    setSelectedDate: React.Dispatch<React.SetStateAction<Date | null>>;
};

const Calendar = ({ selectedDate, setSelectedDate }:CalendarProps) => {
    const [monthMeta, setMonthMeta] = useState<Record<number, boolean>>({});
    const [year, setYear] = useState(new Date().getFullYear());
    const [month, setMonth] = useState(new Date().getMonth() + 1);

    // Fetch month metadata from selected month of the year
    useEffect(() => {
        const fetchMeta = async () => {
            const meta = await getMonthMeta(year, month);
            setMonthMeta(meta);

            // Select the first performance date of the month
            const dates = Object.keys(meta).map(Number).sort((a, b) => a - b);
            if (dates.length > 0) {
                const firstDate = new Date(year, month - 1, dates[0]);
                setSelectedDate(firstDate);
            } else {
                setSelectedDate(null);
            }
        };
        
        fetchMeta();
    }, [year, month, setSelectedDate]);

    // YearMonthSelector onChange memoize
    const handleYearMonthChange = useCallback((y: number, m: number) => {
        if (y !== year || m !== month) {
            setYear(y);
            setMonth(m);
        }
    }, [year, month]);

    return (
        <div className={styles.calendar}>
            <YearMonthSelector
                onChange={handleYearMonthChange}
                year={year}
                month={month}
                startYear={2020}
                endYear={2030}
            />
            <DateSelector
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
                year={year}
                month={month}
                monthMeta={monthMeta}
            />
        </div>
    );
};

export default Calendar;