import clsx from "clsx";
import styles from "./Card.module.css";
import layoutStyles from "../Teams.module.css";

interface ArthallCardProps {
    label: string;
    imageUrl: string;
    activeCard: string | null;
    mobileToggleCard: (label:string) => void;
};

const ArthallCard = ({ label, imageUrl, activeCard, mobileToggleCard }: ArthallCardProps) => {
    return (
        <div 
            className={clsx(
                styles.card,
                layoutStyles.arthall,
                'lazy-bg'
            )}
            data-bg={imageUrl}
            onClick={() => mobileToggleCard(label)}
        >
            <div 
                className={clsx(
                    styles.cardText,
                    styles.arthallCard,
                    activeCard === label && styles.visible
                )}
            >
                <div className={styles.arthallInner}>
                    <p className={clsx(styles.arthall, styles.arthallStart)}>여러분의 마음을 움직일</p>
                    <p className={clsx(styles.arthall, styles.arthallCenter)}>
                        <span  className={clsx(styles.arthall, styles.arthallAccent)}>공연단</span>들을
                    </p>
                    <p className={clsx(styles.arthall, styles.arthallEnd)}>소개합니다</p>
                </div>
            </div>
        </div>
    );
};

export default ArthallCard;