import { useEffect, useRef } from "react";
import clsx from "clsx";
import MobileNavList from "./MobileNavList";
import { navLinks } from "../navLinks";
import styles from "./MobileNav.module.css";

interface MobileNavProps {
    isMobileNavOpen: boolean
    onClose: () => void;
}

const MobileNav = ({ isMobileNavOpen, onClose }:MobileNavProps) => {
    const navRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
        if (navRef.current && !navRef.current.contains(e.target as Node)) {
            onClose();
        };
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
        document.removeEventListener("mousedown", handleClickOutside);
    };
    }, [onClose]);

    return (
        <div className={clsx(
            styles.overlay,
            isMobileNavOpen && styles.overlayOpen
        )}>
            <div 
                ref={navRef} 
                className={clsx(
                    styles.mobileNavContainer,
                    isMobileNavOpen && styles.mobileNavContainerOpen
                )}
            >
                <div className={styles.mobileLogoWrap}>
                        <img className={styles.logo} src="/logo.png" alt="logo" />
                        <h1 className={styles.logoHeader}>대전시립예술단</h1>
                </div>
                <nav className={styles.mobileNav}>
                    <MobileNavList title={navLinks.general.title} links={navLinks.general.generalLinks} />
                    <MobileNavList title={navLinks.teams.title} links={navLinks.teams.teamLinks} />
                    <MobileNavList title={navLinks.community.title} links={navLinks.community. communityLinks} />
                </nav>
            </div>
        </div>
    );
};

export default MobileNav;