import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import clsx from "clsx";
import { FaBars } from "react-icons/fa";
import DesktopNav from "./Navigation/DesktopNav/DesktopNav";
import MobileNav from "./Navigation/MobileNav/MobileNav";
import useIsMobile from "../../hooks/useIsMobile";
import styles from "./Header.module.css";

const Header = () => {
    const isMobile = useIsMobile();
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

    useEffect(() => {
        if (!isMobile) {
            setIsMobileNavOpen(false);
        }
    }, [isMobile]);

    const portalTarget = document.getElementById("mobile-nav-root");

    return (
        <header className={clsx(
            styles.header,
            isMobileNavOpen && styles.noHeader
        )}>
            <Link 
                className={styles.logoWrap}
                to='/'
            >
                <img className={styles.logo} src="/logo.png" alt="logo" />
                <h1 className={styles.logoHeader}>대전시립예술단</h1>
            </Link>

            {isMobile ? (
                <>
                    {portalTarget && createPortal(
                            <MobileNav
                                isMobileNavOpen={isMobileNavOpen}
                                onClose={() => setIsMobileNavOpen(false)}
                            />,
                            portalTarget
                    )}
                    <button
                    className={styles.navButton}
                    onClick={() => setIsMobileNavOpen(true)}
                    >
                        <FaBars />
                    </button>
                </>
            ) : (
                <DesktopNav />
            )}
        </header>
    );
};

export default Header;