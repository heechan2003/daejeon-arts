import { NewsLetter } from "../../../../types/news";
import { Announcement } from "../../../../types/news";
import { Review } from "../../../../types/news";
import styles from "./NewsContent.module.css";

interface NewsContentProp {
    data: Announcement[] | Review[] | NewsLetter[];
};

//item type checking with category(announcement) and group(review)
const isAnnouncement = (item: Announcement): item is Announcement => 'category' in item;
const isReview = (item: Review): item is Review => 'group' in item;

const NewsContent = ({data}: NewsContentProp) => {
    return (
        <div className={styles.newsContent}>
            {data.slice(0, 8).map((item, index) => {
                let groupOrCategory = null;
                let className;
            
                if (isAnnouncement(item)) {
                    groupOrCategory = item.category;
                    className = styles.category;
                } else if (isReview(item)) {
                    groupOrCategory = item.group;
                    if (item.group === "무용단") className = styles.reviewDance;
                    else if (item.group === "합창단") className = styles.reviewVocal;
                    else if (item.group === "교향악단") className = styles.reviewOrchestra;
                }

                return (
                    <div key={index} className={styles.newsCard}>
                        <h4>{item.title}</h4>
                        <p className={styles.newsCardContent}>
                            로렘 입숨 지방의회의 조직·권한·의원선거와 지방자치단체의 장의 선임방법 ...
                        </p>
                        <div className={styles.newsCardBottomText}>
                            <p>{item.date}</p>
                            {groupOrCategory && <span className={className}>{groupOrCategory}</span>}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default NewsContent;