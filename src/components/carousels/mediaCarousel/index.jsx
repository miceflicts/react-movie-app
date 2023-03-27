import React,{useState, useEffect} from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import 'swiper/css';
import "swiper/css/pagination";

function MediaCarousel({info}) {
  console.log(info)

  return (
    <>
        {info !== null ? 
        <Swiper
            className='mt-10'
            modules={[Pagination]}
            loop={true}
            pagination={{ clickable: true}}
            slidesPerView={2}
            >
            {info[1].cast.map((media, index) => {
                return (
                    <SwiperSlide key={index}>
                        <img key={index} className="h-96" src={`https://image.tmdb.org/t/p/original${media.profile_path}`}></img>
                    </SwiperSlide>
                );
            })}
        </Swiper> : null}
    </>
  )
}

export default MediaCarousel