import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import "swiper/css/pagination";

function PosterCarousel({ info }) {

  return (
    <>
        <Swiper
          className='mt-10'
          centeredSlides={false} // Add this prop to align the slides to the start
          slidesPerView={2}
          spaceBetween={20}
          width={650}
        >
          {info[2].mediaPosters.map((media, index) => {
            return (
              <SwiperSlide key={index}>
                <img
                  key={index}
                  src={`https://image.tmdb.org/t/p/original${media.file_path}`}
                  className="aspect-[3.5/5]"
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
    </>
  );
}

export default PosterCarousel;
