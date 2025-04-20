import { useRef } from "react";
import { useState } from "react";
import { FaChevronUp } from "react-icons/fa";
import clsx from "clsx";
import useClickOutside from "../../../hooks/useClickOutside";
import styles from "./LinksSelect.module.css";

const links = [
    { label: '대전광역시청', path: '/' },
    { label: '대전예술의전당', path: '/' },
    { label: '대전문화재단', path: '/' },
    { label: '대전시립미술관', path: '/' },
    { label: '대전얘술가의집', path: '/' },
    { label: '대전예총', path: '/' },
    { label: '대전관광', path: '/' },
];

const LinksSelect = () => {
    const [isOpen, setIsOpen] = useState(false);
    const selectRef =  useRef<HTMLDivElement>(null);

    useClickOutside(selectRef, () => setIsOpen(false))

    return (
        <div
            className={styles.selectWrap}
            ref={selectRef}
        >
            <button
                className={styles.selectToggle}
                onClick={() => setIsOpen(prev => !prev)}
            >
                <span>관련사이트</span>
                <FaChevronUp className={clsx(
                    styles.chevron,
                    isOpen && styles.chevronOpen
                )}/>
            </button>
            <ul
                className={clsx(
                    styles.linksList,
                    isOpen && styles.linksListOpen
                )}
            >
                {links.map((link) => (
                    <li key={link.label}>
                        <a
                            className={styles.link}
                            href={link.path}
                            target="_blank"
                        >
                            {link.label}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default LinksSelect;