import { useEffect } from 'react';

// Lazy-loads background images for elements with the 'lazy-bg' class when they come into view
export const useLazyBackgrounds = () => {
    useEffect(() => {
        const lazyBackgrounds = document.querySelectorAll('.lazy-bg');

        if (!lazyBackgrounds.length) return;

        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                const el = entry.target as HTMLElement;
                const bg = el.getAttribute('data-bg');
                if (bg) {
                    el.style.backgroundImage = `url(${bg})`;
                    el.classList.remove('lazy-bg');
                    obs.unobserve(el);
                }
                }
            });
        }, {
            rootMargin: '0px 0px 200px 0px',
        });
        lazyBackgrounds.forEach(el => observer.observe(el));

        return () => observer.disconnect();
    }, []);
};
