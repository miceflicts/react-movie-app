import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper";
import 'swiper/css';
import "swiper/css/autoplay";
import "swiper/css/pagination";

function BackdropsCarousel({ info }) {
  
  return (
    <>
        <Swiper
          className='mt-10'
          slidesPerView={1}
          modules={[Pagination, Autoplay, Navigation]}
          navigation
          loop={false}
          autoplay={{delay: 5000}}
          pagination={{ clickable: true}}
          centeredSlides={true}
        >
          {info[2].mediaBackdrops.map((media, index) => {
            return (
              <SwiperSlide key={index} className="flex justify-center">
                <img
                  key={index}
                  src={`https://image.tmdb.org/t/p/original${media.file_path}`}
                  className="max-w-[1200px] min-w-[0px]"
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
    </>
  );
}

export default BackdropsCarousel;
