import { useEffect, useState } from "react";

// Tracks the vertical scroll position and direction (up/down) of the window
const useScrollPosition = () => {
    const [scrollY, setScrollY] = useState(window.scrollY);
    const [scrollDirection, setScrollDirection] = useState<"up" | "down" | null>(null);

    useEffect(() => {
        let lastScrollY = window.scrollY;

        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            setScrollY(currentScrollY);

            if (currentScrollY > lastScrollY) {
                setScrollDirection("down");
            } else if (currentScrollY < lastScrollY) {
                setScrollDirection("up");
            }

            lastScrollY = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return { scrollY, scrollDirection };
};

export default useScrollPosition;