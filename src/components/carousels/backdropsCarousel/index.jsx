import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import 'swiper/css';
import "swiper/css/autoplay";
import "swiper/css/pagination";

function BackdropsCarousel({ info }) {
  
  return (
    <>
        <Swiper
          className='mt-10'
          slidesPerView={1}
          modules={[Pagination, Autoplay]}
          loop={false}
          autoplay={{delay: 5000}}
          pagination={{ clickable: true}}
          centeredSlides={true}
        >
          {info[2].mediaBackdrops.map((media, index) => {
            return (
              <SwiperSlide key={index}>
                <img
                  key={index}
                  src={`https://image.tmdb.org/t/p/original${media.file_path}`}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
    </>
  );
}

export default BackdropsCarousel;
