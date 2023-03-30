import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import MediaCastCards from './cards';
import 'swiper/css';
import "swiper/css/pagination";

function MediaCastCarousel({ info }) {
  
  return (
    <>
        <Swiper
          className='mt-10'
          spaceBetween={20}
          slidesPerView={2}
          breakpoints={{
            600: {
                slidesPerView: 2,
            },
            900: {
                slidesPerView: 3,
            },
            1250: {
                slidesPerView: 4,
            },
            1470: {
                slidesPerView: 5,
            },
            2200: {
                slidesPerView: 6,
            },
            2700: {
                slidesPerView: 7,
            }
          }}
        >
          {info[1].cast.map((cast, index) => {
            return cast.profile_path !== null ? (
              <SwiperSlide key={index}>
                <MediaCastCards name={cast.name} image={cast.profile_path} type={"person"} id={cast.id} key={index}></MediaCastCards>
              </SwiperSlide>
            ) : null;
          })}
        </Swiper>
    </>
  );
}

export default MediaCastCarousel;
