import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper";
import 'swiper/css';
import "swiper/css/autoplay";
import "swiper/css/pagination";

function MediaBackdropsCarousel({ info }) {
  
  return (
    <>
        <Swiper
          className='mt-10'
          style={{
            "--swiper-navigation-color": "rgba(255, 255, 255, 0.8)",
            "--swiper-navigation-size": "25px",
          }}
          slidesPerView={1}
          modules={[Pagination, Autoplay, Navigation]}
          navigation
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
                  className="max-w-[65vw] min-w-[0px] max-[1300px]:max-w-[100vw]"
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
    </>
  );
}

export default MediaBackdropsCarousel;
