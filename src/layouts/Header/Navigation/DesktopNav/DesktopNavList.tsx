import { useState } from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";
import styles from "./DesktopNav.module.css";

interface DesktopNavListProps {
    title: string;
    links: { label: string; path: string }[];
}

const DesktopNavList = ({ title, links }: DesktopNavListProps) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className={styles.listWrap}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => {
                setIsHovered(false);
            }}
        >
            <span 
                className={clsx(
                    styles.main,
                    isHovered && styles.mainHovered
                )}>
                {title}
            </span>
            {isHovered && (
                <ul className={styles.list}>
                {links.map(({ label, path }) => (
                    <li key={label}>
                    <Link
                        to={path}
                        className={styles.sub}
                    >
                        {label}
                    </Link>
                    </li>
                ))}
                </ul>
            )}
        </div>
    );
};

export default DesktopNavList;
