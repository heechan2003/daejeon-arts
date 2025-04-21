/**
 * Returns an array of all days in the given month and year.
 * Each entry contains the date and the day of the week.
 */
export const getMonthDays = (year: number, month: number): { date: number; day: string }[] => {
    const days: { date: number; day: string }[] = [];
    const totalDays = new Date(year, month, 0).getDate();

    for (let day = 1; day <= totalDays; day++) {
        const dateObj = new Date(year, month - 1, day);
        const dayName = dateObj.toLocaleDateString("en-US", { weekday: "short" });
        days.push({ date: day, day: dayName });
    }

    return days;
};