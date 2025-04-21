import styles from "./YearMonthSelector.module.css";

interface YearMonthSelectorProps {
    onChange: (year: number, month: number) => void;
    year: number;
    month: number;
    startYear: number;
    endYear: number;
};

const YearMonthSelector = ({ onChange, year, month, startYear, endYear }:YearMonthSelectorProps) => {
    return (
        <div className={styles.yearMonthSelector}>
            <select
                className={styles.yearSelector}
                value={year}
                onChange={(e) => {
                    const newYear = Number(e.target.value);
                    onChange(newYear, month);
                }}
            >
                {Array.from({ length: endYear - startYear + 1 }, (_, i) => {
                const y = startYear + i;
                    return (
                        <option key={y} value={y}>
                        {y}
                        </option>
                    );
                })}
            </select>
            <span className={styles.slash}>/</span>
            <select
                className={styles.monthSelector}
                value={month}
                onChange={(e) => {
                    const newMonth = Number(e.target.value);
                    onChange(year, newMonth);
                }}
            >
                {Array.from({ length: 12 }, (_, i) => {
                const m = i + 1;
                    return (
                        <option key={m} value={m}>
                            {String(m).padStart(2, "0")}
                        </option>
                    );
                })}
            </select>
        </div>
    );
};

export default YearMonthSelector;
