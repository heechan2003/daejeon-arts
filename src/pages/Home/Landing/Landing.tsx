import { useState, useMemo } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import clsx from 'clsx';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useDevice } from '../../../context/DeviceContext';
import { useLazyBackgrounds } from '../../../hooks/useLazyBackground';
import './Landing.css';
import LandingSlide from './LandingSlide/LandingSlide';
import { landingSlides } from './landingSlides';

const Landing = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const { isMobile } = useDevice();
    useLazyBackgrounds();

    // Swiper props shared by both desktop and mobile
    const sharedProps = useMemo(() => ({
        spaceBetween: 0,
        effect: 'fade',
        fadeEffect: { crossFade: true },
        loop: true,
        speed: 1200,
        autoplay: {
            delay: 6000,
            disableOnInteraction: false,
        },
        modules: [Autoplay, EffectFade, Pagination, Navigation],
    }), []);

    // Custom bullet pagination for desktop swiper
    const desktopPagination = useMemo(() => ({
        clickable: true,
        renderBullet: (index: number, className: string) =>
            `<span class="${className}">${landingSlides[index].label}</span>`,
    }), []);

    return (
        <div className={clsx(
            'landing-swiper-wrap',
            isMobile ? 'mobile-landing-swiper-wrap' : 'desktop-landing-swiper-wrap'
        )}>
            <Swiper
                {...sharedProps}
                navigation={
                    isMobile
                        ? {
                            nextEl: '.landing-next-el',
                            prevEl: '.landing-prev-el',
                        }
                        : false
                }
                pagination={isMobile ? false : desktopPagination}
                onInit={(swiper) => {
                    setCurrentSlide(swiper.realIndex);
                }}
                onSlideChange={(swiper) => {
                    setCurrentSlide(swiper.realIndex);
                }}
                className={isMobile ? 'mobile-landing-swiper' : 'desktop-landing-swiper'}
            >
                {landingSlides.map(({url, imageUrl}, key) => (
                    <SwiperSlide
                        key={key}
                        className='lazy-bg landing-swiper-slide'
                        data-bg={imageUrl}
                    >
                        <LandingSlide url={url}/>
                    </SwiperSlide>
                ))}
            </Swiper>

            {isMobile &&
                <div className='mobile-landing-pagination'>
                    <button className='landing-prev-el landing-chevron'>
                        <FaChevronLeft />
                    </button>
                    <span>{landingSlides[currentSlide].label}</span>
                    <button className='landing-next-el landing-chevron'>
                        <FaChevronRight />
                    </button>
                </div>
            }
        </div>
    );
};

export default Landing;