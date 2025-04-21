import clsx from "clsx";
import { useLazyBackgrounds } from "../../hooks/useLazyBackground";
import styles from "./Banner.module.css";

interface BannerProps {
    link: string;
    imageUrl: string;
};

const Banner = ({ link, imageUrl }:BannerProps) => {
    useLazyBackgrounds();

    return (
        <a 
            className={clsx(styles.banner, 'lazy-bg')}
            data-bg={imageUrl}
            href={link}
            target="_blank"
        >
        </a>
    );
};

export default Banner;