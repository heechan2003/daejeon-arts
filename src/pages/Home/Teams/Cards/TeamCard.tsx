import clsx from "clsx";
import { formatDesc } from "../../../../utils/formatDesc";
import styles from "./Card.module.css";
import layoutStyles from "../Teams.module.css";

interface TeamCardProps {
    className: string;
    label: string;
    desc: string;
    url: string;
    imageUrl: string;
    activeCard: string | null;
    mobileToggleCard: (label:string) => void;
}

const TeamCard = ({ className, label, desc, url, imageUrl, activeCard, mobileToggleCard }:TeamCardProps) => {
    return (
        <div
            className={clsx(
                styles.card,
                layoutStyles[className],
                'lazy-bg'
            )}
            data-bg={imageUrl}
            onClick={() => mobileToggleCard(label)}
        >
            <div className={clsx(
                styles.cardText,
                styles.teamText,
                activeCard === label && styles.visible
            )}>
                <h3>{label}</h3>
                <p >{formatDesc(desc)}</p>
                <a
                    className={styles.teamLink}
                    href={url}
                    target='_blank'
                >
                    사이트 바로가기
                </a>
            </div>
        </div>
    );
};

export default TeamCard;