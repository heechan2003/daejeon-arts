import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";
import { getDocs } from "firebase/firestore";
import { newsLetterCollectionRef } from "../../../firebase";
import { announcementCollectionRef } from "../../../firebase";
import { reviewsCollectionRef } from "../../../firebase";
import { NewsLetter } from "../../../types/news";
import { Announcement } from "../../../types/news";
import { Review } from "../../../types/news";
import NewsContent from "./NewsContent/NewsContent";
import styles from "./News.module.css";

const types: { label: string; value: "announcement" | "review" | "newsletter" }[] = [
    { label: "공지사항", value: "announcement" },
    { label: "공연후기", value: "review" },
    { label: "뉴스레터", value: "newsletter" },
];

const News = () => {
    const [selectedType, setSelectedType] = useState<"announcement" | "review" | "newsletter">("announcement");
    const [data, setData] = useState<Announcement[] | Review[] | NewsLetter[]>([]);

    // Fetch data from collection ref of selected type
    useEffect(() => {
        const fetchData = async () => {
            try {
                let querySnapshot;
                if (selectedType === "announcement") {
                    querySnapshot = await getDocs(announcementCollectionRef);
                    const data = querySnapshot.docs.map(doc => doc.data() as Announcement);
                    setData(data);
                } else if (selectedType === "review") {
                    querySnapshot = await getDocs(reviewsCollectionRef);
                    const data = querySnapshot.docs.map(doc => doc.data() as Review);
                    setData(data);
                } else if (selectedType === "newsletter") {
                    querySnapshot = await getDocs(newsLetterCollectionRef);
                    const data = querySnapshot.docs.map(doc => doc.data() as NewsLetter);
                    setData(data);
                }
            } catch (err) {
                console.error("Failed to fetch reviews:", err);
            }
        };

        fetchData();
    }, [selectedType]);

    return (
        <div className={styles.news}>
            <div className={styles.newsInner}>
                <div className={styles.newsNav}>
                    {types.map((type) => (
                        <button
                            key={type.value}
                            onClick={() => setSelectedType(type.value)}
                            className={clsx(
                                styles.newsButton,
                                selectedType === type.value ? styles.active : ""
                            )}
                        >
                            {type.label}
                        </button>
                    ))}
                </div>
                <NewsContent
                    data={data}
                />
                <Link to='/' className={clsx(
                    styles.newsMore,
                    styles.newsButton
                )}>더 보기</Link>
            </div>
        </div>
    );
};

export default News;