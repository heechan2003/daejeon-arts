import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules'
import './DesktopLandingSwiper.css';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import { landingSlides } from '../landingSlides';

const DesktopLandingSwiper = () => {
    const pagination = {
        clickable: true,
        renderBullet: (index: number, className: string) => {
            return `<span class="${className}">${landingSlides[index].label}</span>`;
        }
    };

    return (
        <div>
            <Swiper
                spaceBetween={0}
                pagination={pagination}
                effect='fade'
                fadeEffect={{crossFade: true}}
                loop={true}
                speed={1200}
                autoplay={{
                    delay: 6000,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay, EffectFade, Pagination]}
                className="desktop-swiper"
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
        </div>
    );
};

export default DesktopLandingSwiper;