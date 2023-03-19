import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import Cards from '../cards';
import 'swiper/css';
import "swiper/css/navigation";
import "./style.css"

function CardCarousel({recommendations}) {
    const description = [{description: "Loading"}, {description: "Loading"},{description: "Loading"}, {description: "Loading"}, {description: "Loading"}, {description: "Loading"}, {description: "Loading"}, {description: "Loading"}];

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
            {recommendations !== null ? recommendations.map((media, index) => {
                return <SwiperSlide key={index}><Cards name={media.name} key={index}/></SwiperSlide>
            }) : description.map((media, index) => {
                return <SwiperSlide key={index}><Cards description={""} key={index}/></SwiperSlide>
            })}

        </Swiper>
    )
}

export default CardCarousel