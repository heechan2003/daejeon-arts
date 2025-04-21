import { getDocs, query, where } from "firebase/firestore";
import { performanceCollectionRef } from "../firebase";

/**
 * Fetches performance metadata for a given year and month.
 * Returns a mapping like: { 20: "performance_10", ... }
 */
export const getMonthMeta = async (year: number, month: number): Promise<Record<number, boolean>> => {
    const q = query(
        performanceCollectionRef,
        where("year", "==", year),
        where("month", "==", month)
    );

    const snapshot = await getDocs(q);
    const meta: Record<number, boolean> = {};

    snapshot.forEach((doc) => {
        const data = doc.data();
        const key = data.date;
        meta[key] = true;
    });

    return meta;
};