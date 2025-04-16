import { useState, useEffect } from "react";

const useAnimation = (isOpen: boolean, duration: number) => {
    const [isVisible, setIsVisible] = useState(false);
    const [shouldRender, setShouldRender] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setShouldRender(true);
            setTimeout(() => setIsVisible(true), 10);
        } else {
            setIsVisible(false);
            const timeout = setTimeout(() => setShouldRender(false), 400);
            return () => clearTimeout(timeout);
        }
    }, [isOpen, duration]);

    return { isVisible, shouldRender };
};

export default useAnimation;
