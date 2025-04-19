import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import styles from "./SlideInner.module.css";

interface SlideInnerProps {
    url: string;
}

const SlideInner = ({ url }: SlideInnerProps) => {
    return (
        <div className={styles.slideInner}>
            <div className={styles.slideTitle}>
                <FaQuoteLeft className={styles.quote} />
                <h2>
                    <span className={styles.slideFirstWord}>예술</span>로 마음을 움직이다
                </h2>
                <FaQuoteRight className={styles.quote} />
            </div>
            <a
                className={styles.slideButton}
                href={url}
                target='_blank'
            >
                <span>공연 바로가기</span>
            </a>
        </div>
    );
};

export default SlideInner