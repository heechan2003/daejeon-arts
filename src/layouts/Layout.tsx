import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { Outlet } from "react-router-dom";
import useIsMobile from "../hooks/useIsMobile";
import { DeviceContext } from "../context/DeviceContext";

const Layout = () => {
    const isMobile = useIsMobile();

    return (
        <DeviceContext.Provider value={{ isMobile }}>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </DeviceContext.Provider>
    );
};

export default Layout;