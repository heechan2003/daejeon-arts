import { FaRegCalendarAlt } from "react-icons/fa";
import { Performance } from "../../../../types/performance";
import styles from "./PerformanceDetail.module.css";

interface PerformanceDetail {
    selectedPerformance: Performance | null
};

const PerformanceDetail = ({ selectedPerformance }:PerformanceDetail) => {
    // Format date into string yyyy/mm/dd
    function formatDate(year: number, month: number, day: number): string {
        const yyyy = String(year)
        const mm = String(month).padStart(2, '0');
        const dd = String(day).padStart(2, '0');
        return `${yyyy}/${mm}/${dd}`;
    };

    return (
            <div id="performance-detail" className={styles.performanceDetail}>
                {selectedPerformance ? 
                    <div className={styles.performanceDetailInner}>
                        <div className={styles.performanceDetailImage}>
                            <img
                                src={selectedPerformance.image}
                                alt={`${selectedPerformance.title}-image`}
                                loading="lazy"
                            />
                        </div>
                        <div className={styles.performanceDetailText}>
                            <div className={styles.performanceDetailTextStart}>
                                <h3>{selectedPerformance.title}</h3>
                                <span>{selectedPerformance.host}</span>
                            </div>
                            <div className={styles.performanceDetailTextCenter}>
                                <p>장소: <span>{selectedPerformance.place}</span></p>
                                <p>일자: <span>{formatDate(selectedPerformance.year, selectedPerformance.month, selectedPerformance.date)}</span></p>
                                <p>시간: <span>{selectedPerformance.time}</span></p>
                                <p>티켓: <span>{selectedPerformance.ticket}</span></p>
                                <p>관람등급: <span>{selectedPerformance.rating}</span></p>
                            </div>
                            <div className={styles.performanceDetailBook}>
                                <a href="#bookingPlaceholder">예매</a>
                            </div>
                        </div>
                    </div> :
                    <div className={styles.performanceDetailEmpty}>
                        <FaRegCalendarAlt className={styles.calendarIcon}/>
                        <p>공연을 선택하면 상세 정보를 볼 수 있습니다</p>
                    </div>
                }
            </div>
    );
};

export default PerformanceDetail;