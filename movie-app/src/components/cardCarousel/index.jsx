import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import 'swiper/css';
import "swiper/css/pagination";
/* import "swiper/css/navigation";
 */
function CardCarousel() {
  return (
    <Swiper
    modules={[Pagination, Navigation]}
    loop={true}
    spaceBetween={30}
    navigation 
    pagination={{ clickable: true}}
    slidesPerView={2}
    >
        <SwiperSlide>
            <div className="min-w-[260px] max-[600px]:min-w-[300px] h-72 rounded-md bg-black"></div>
        </SwiperSlide>

        <SwiperSlide>
            <div className="min-w-[260px] max-[600px]:min-w-[300px] h-72 rounded-md bg-yellow-600"></div>
        </SwiperSlide>

        <SwiperSlide>
            <div className="min-w-[260px] max-[600px]:min-w-[300px] h-72 rounded-md bg-red-700"></div>
        </SwiperSlide>

        <SwiperSlide>
            <div className="min-w-[260px] max-[600px]:min-w-[300px] h-72 rounded-md bg-blue-800"></div>
        </SwiperSlide>

        <SwiperSlide>
            <div className="min-w-[260px] max-[600px]:min-w-[300px] h-72 rounded-md bg-gray-900"></div>
        </SwiperSlide>
    </Swiper>
  )
}

export default CardCarousel