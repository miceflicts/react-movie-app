import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import "swiper/css/pagination";

function MediaCarousel({ info }) {
  console.log(info);
  

  return (
    <>
        <Swiper
          className='mt-10'
          centeredSlides={false} // Add this prop to align the slides to the start
          slidesPerView={2}
          width={550}
        >
          {info[1].cast.map((media, index) => {
            return (
              <SwiperSlide key={index}>
                <img
                  key={index}
                  className="h-96"
                  src={`https://image.tmdb.org/t/p/original${media.profile_path}`}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
    </>
  );
}

export default MediaCarousel;
