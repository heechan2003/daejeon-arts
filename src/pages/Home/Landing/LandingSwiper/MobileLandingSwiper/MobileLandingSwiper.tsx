import { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation } from 'swiper/modules';
import SwiperCore from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import './MobileLandingSwiper.css'
import { FaChevronLeft } from 'react-icons/fa';
import { FaChevronRight } from 'react-icons/fa';
import { landingSlides } from '../landingSlides';

const MobileLandingSwiper = () => {
    const swiperRef = useRef<SwiperCore>(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const swiper = swiperRef.current;
        if (!swiper) return;

        const handleSlideChange = () => {
            setCurrentIndex(swiper.realIndex);
        };

        swiper.on('slideChange', handleSlideChange);

        setCurrentIndex(swiper.realIndex);

        return () => {
            swiper.off('slideChange', handleSlideChange);
        };
    }, []);

    return (
        <div className='mobile-swiper-wrap'>
            <Swiper
                spaceBetween={0}
                navigation={{
                    nextEl: '.next-el',
                    prevEl: '.prev-el',
                }}
                effect='fade'
                fadeEffect={{crossFade: true}}
                loop={true}
                speed={1200}
                autoplay={{
                    delay: 6000,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay, EffectFade, Navigation]}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                className="mobile-swiper"
            >
                {landingSlides.map((slide, key) => (
                    <SwiperSlide
                        key={key}
                        style={{
                            backgroundImage: `url(${slide.url})`
                        }}
                    >
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="custom-pagination">
                    <button className="prev-el chevron">
                        <FaChevronLeft/>
                    </button>
                    <span className="custom-label">
                        {landingSlides[currentIndex].label}
                    </span>
                    <button className="next-el chevron">
                        <FaChevronRight/>
                    </button>
            </div>
        </div>
    );
};

export default MobileLandingSwiper;