import { useState, useEffect } from "react";
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

    return (
        <header className={styles.header}>
            <div className={clsx(
                styles.logoWrap,
                isMobileNavOpen && styles.noLogoWrap
            )}>
                <img className={styles.logo} src="/logo.png" alt="logo" />
                <h1 className={styles.logoHeader}>대전시립예술단</h1>
            </div>

            {isMobile ? (
                <>
                    <MobileNav
                        isMobileNavOpen={isMobileNavOpen}
                        onClose={() => setIsMobileNavOpen(false)}
                    />
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