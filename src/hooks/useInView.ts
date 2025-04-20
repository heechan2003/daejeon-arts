import { useEffect, useRef, useState } from "react";

// Returns a ref and a boolean indicating if the element has entered the viewport (once)
const useInView = (options?: IntersectionObserverInit) => {
    const ref = useRef<HTMLDivElement | null>(null);
    const [hasIntersected, setHasIntersected] = useState(false);

    useEffect(() => {
        if (hasIntersected) return;

        const observer = new IntersectionObserver(([entry], observerInstance) => {
            if (entry.isIntersecting) {
                setHasIntersected(true);
                observerInstance.disconnect();
            }
        }, options);

        const currentRef = ref.current;
        if (currentRef) observer.observe(currentRef);

        return () => observer.disconnect();
    }, [options, hasIntersected]);

    return { ref, isIntersecting: hasIntersected };
};

export default useInView;