import { createContext, useContext } from "react";

export const DeviceContext = createContext<{ isMobile: boolean }>({ isMobile: false });

export const useDevice = () => useContext(DeviceContext);