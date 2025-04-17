import useIsMobile from "../../../hooks/useIsMobile";
import DesktopLandingSwiper from "./LandingSwiper/DesktopLandingSwiper/DesktopLandingSwiper";
import MobileLandingSwiper from "./LandingSwiper/MobileLandingSwiper/MobileLandingSwiper";

const Landing = () => {
    const isMobile = useIsMobile();

    return (
        <div>
            {isMobile ?
                <MobileLandingSwiper /> :
                <DesktopLandingSwiper />
            }
        </div>
    );
};

export default Landing;