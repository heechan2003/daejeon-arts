import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";
import useClickOutside from "../../../../hooks/useClickOutside";
import MobileNavList from "./MobileNavList";
import { navLinks } from "../navLinks";
import styles from "./MobileNav.module.css";

interface MobileNavProps {
    isMobileNavOpen: boolean
    onClose: () => void;
};

const MobileNav = ({ isMobileNavOpen, onClose }:MobileNavProps) => {
    const navRef = useRef<HTMLDivElement>(null);

    useClickOutside(navRef, onClose);
    
    useEffect(() => {
        if (isMobileNavOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
    
        return () => {
            document.body.style.overflow = "";
        };
    }, [isMobileNavOpen]);

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
                <Link 
                    className={styles.mobileLogoWrap}
                    to='/'
                >
                        <img className={styles.logo} src="/logo.png" alt="logo" />
                        <h1 className={styles.logoHeader}>대전시립예술단</h1>
                </Link>
                <nav className={styles.mobileNav}>
                    <MobileNavList title={navLinks.general.title} links={navLinks.general.generalLinks} />
                    <MobileNavList title={navLinks.teams.title} links={navLinks.teams.teamLinks} />
                    <MobileNavList title={navLinks.community.title} links={navLinks.community.communityLinks} />
                </nav>
            </div>
        </div>
    );
};

export default MobileNav;