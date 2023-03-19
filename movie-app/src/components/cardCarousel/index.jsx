import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import Cards from '../cards';
import 'swiper/css';
import "swiper/css/navigation";
import "./style.css"

function CardCarousel() {
  const description = [{description: "Sigma movie"}, {description: "Wandinha"},{description: "Sigma movie"}, {description: "Wandinha"}, {description: "Sigma movie"}, {description: "Sigma movie"}, {description: "Sigma movie"}, {description: "Sigma movie"}];

  return (
    <Swiper
    modules={[Navigation]}
    navigation
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
        {description.map((desc, index) => {
            return <SwiperSlide key={index}><Cards description={desc.description} key={index}/></SwiperSlide>
        })}

    </Swiper>
  )
}

export default CardCarousel