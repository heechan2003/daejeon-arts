import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useDevice } from '../../../../context/DeviceContext';
import { useLazyBackgrounds } from '../../../../hooks/useLazyBackground';
import { Performance } from "../../../../types/performance";
import './performancesSlide.css'

interface PerformancesSwiperProps {
    performancesMeta: Performance[] | null;
    setSelectedPerformance: React.Dispatch<React.SetStateAction<Performance | null>>;
}

const PerformancesSwiper = ({ performancesMeta, setSelectedPerformance }:PerformancesSwiperProps) => {
    const { isMobile }= useDevice();
    useLazyBackgrounds();

    return (
        
        <div className='performance-swiper-wrap'>
            {isMobile ? null :
            <button className="performance-prev-el chevron">
                <FaChevronLeft />
            </button>}
            <Swiper
                spaceBetween={isMobile ? 0 : 10}
                slidesPerView={3}
                centeredSlides={true}
                navigation={isMobile ? false : {
                    nextEl: '.performance-next-el',
                    prevEl: '.performance-prev-el',
                }}
                pagination={{
                    el: '.performance-swiper-pagination',
                    clickable: true,
                }}
                modules={[Pagination, Navigation]}
                className='performance-swiper'
            >
                {performancesMeta?.map((performance, index) => (
                    <SwiperSlide 
                        key={index}
                        className='performance-swiper-slide'
                        onClick={() => setSelectedPerformance(performance)}
                    >
                        <img src={performance.image} alt={`${performance.title}-image`} loading='lazy'/>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className='performance-swiper-pagination'></div>
            {isMobile ? null :
            <button className="performance-next-el chevron">
                <FaChevronRight/>
            </button>}
        </div>
    );
};

export default PerformancesSwiper;