import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import "swiper/css/autoplay";

function Carousel() {
  return (
    <Swiper
    loop={true}
    slidesPerView={1}
    >
    <SwiperSlide>
            <div className="bg-black w-screen h-[500px]"></div>
    </SwiperSlide>
    <SwiperSlide>
            <div className=" bg-yellow-400 w-screen h-[500px]"></div>
    </SwiperSlide>
    <SwiperSlide>
            <div className=" bg-stone-500 w-screen h-[500px]"></div>
    </SwiperSlide>
    <SwiperSlide>
            <div className=" bg-emerald-800 w-screen h-[500px]"></div>
    </SwiperSlide>
    <SwiperSlide>
            <div className=" bg-indigo-900 w-screen h-[500px]"></div>
    </SwiperSlide>
    </Swiper>
  )
}

export default Carousel