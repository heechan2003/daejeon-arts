import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import styles from "./LandingSlide.module.css";

interface LandingSlideProps {
    url: string;
}

const LandingSlide = ({ url }: LandingSlideProps) => {
    return (
        <div className={styles.landingSlideInner}>
            <div className={styles.landingSlideTitle}>
                <FaQuoteLeft className={styles.quote} />
                <h2>
                    <span className={styles.landingSlideFirstWord}>예술</span>로 마음을 움직이다
                </h2>
                <FaQuoteRight className={styles.quote} />
            </div>
            <a
                className={styles.landingSlideButton}
                href={url}
                target='_blank'
            >
                공연 바로가기
            </a>
        </div>
    );
};

export default LandingSlide