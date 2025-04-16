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
    const [hoveredSub, setHoveredSub] = useState<string | null>(null);

    return (
        <div
            className={styles.listWrap}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => {
                setIsHovered(false);
                setHoveredSub(null);
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
                        className={clsx(
                            styles.sub,
                            hoveredSub === label && styles.subHovered
                        )}
                        onMouseEnter={() => setHoveredSub(label)}
                        onMouseLeave={() => setHoveredSub(null)}
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
