import clsx from "clsx";
import DesktopNavList from "./DesktopNavList";
import { navLinks } from "../navLinks";
import styles from "./DesktopNav.module.css";

type DesktopNavProps = {
    isScrolled: boolean;
};

const DesktopNav = ( { isScrolled }: DesktopNavProps) => {
    return (
        <nav className={clsx(
            styles.nav,
            isScrolled && styles.navScrolled
        )}>
            <DesktopNavList title={navLinks.general.title} links={navLinks.general.generalLinks} />
            <DesktopNavList title={navLinks.teams.title} links={navLinks.teams.teamLinks} />
            <DesktopNavList title={navLinks.community.title} links={navLinks.community.communityLinks} />
        </nav>
    );
};

export default DesktopNav;