import { getDocs, query, where } from "firebase/firestore";
import { performanceCollectionRef } from "../firebase";
import { Performance } from "../types/performance";

/**
 * Fetch all performances for a specific date.
 */
export const getPerformancesMeta = async (date: Date): Promise<Performance[]> => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    const q = query(
        performanceCollectionRef,
        where("year", "==", year),
        where("month", "==", month),
        where("date", "==", day)
    );

    const snapshot = await getDocs(q);
    const performances: Performance[] = [];

    snapshot.forEach((doc) => {
        performances.push(doc.data() as Performance);
    });

    return performances;
};
