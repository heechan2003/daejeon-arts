import { useState } from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";
import { FaChevronDown } from "react-icons/fa";
import styles from "./MobileNav.module.css";

interface MobileNavListProps {
    title: string;
    links: { label: string; path: string }[];
};

const MobileNavList = ({ title, links }: MobileNavListProps) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            className={styles.listWrap}
        >
            <div
                className={clsx(
                    styles.main,
                    isOpen && styles.mainOpen
                )}
                onClick={() => setIsOpen(prev => !prev)}
            >
                <span>{title}</span>
                {<FaChevronDown 
                    className={clsx(
                        styles.chevron,
                        isOpen && styles.chevronOpen
                    )}
                />}
            </div>
            <ul 
                className={clsx(
                    styles.list,
                    isOpen && styles.listOpen
                )}
            >
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
        </div>
    );
};

export default MobileNavList;