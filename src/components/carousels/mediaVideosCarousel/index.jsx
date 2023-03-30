import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import 'swiper/css';
import YoutubeEmbed from '../../youtubeEmbed';

function MediaVideosCarousel({ info }) {
  
  return (
    <>
        <Swiper
          className='mt-10'
          style={{
            "--swiper-navigation-color": "rgba(255, 255, 255, 0.8)",
            "--swiper-navigation-size": "25px",
          }}
          slidesPerView={1}
          modules={[Navigation]}
          navigation
          centeredSlides={true}
        >
          {info[3].videos.map((media, index) => {
            return (
              <SwiperSlide key={index} className="flex justify-center">
                <YoutubeEmbed id={media.key}></YoutubeEmbed>
              </SwiperSlide>
            );
          })}
        </Swiper>
    </>
  );
}

export default MediaVideosCarousel;
