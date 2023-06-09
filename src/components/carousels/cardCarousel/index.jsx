import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import Cards from '../../cardsRecommendations';
import 'swiper/css';
import "swiper/css/navigation";
import Placeholder from '../../cardsRecommendations/placeholder';

function CardCarousel({recommendations, type}) {
    const description = [{description: "Loading"}, {description: "Loading"},{description: "Loading"}, {description: "Loading"}, {description: "Loading"}, {description: "Loading"}, {description: "Loading"}, {description: "Loading"}];

    return (
        <Swiper
        modules={[Navigation]}
        navigation
        style={{
            "--swiper-navigation-color": "rgba(255, 255, 255, 0.8)",
            "--swiper-navigation-size": "25px",
        }}
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
            {recommendations !== null ?  recommendations.map((media, index) => {
                {const mediaType = media.type === undefined ? type : media.type;
                return <SwiperSlide key={index}><Cards name={media.name} poster={`https://image.tmdb.org/t/p/w500${media.poster}`} type={mediaType} id={media.id} key={index}/></SwiperSlide>}
            }) : description.map((media, index) => {
                return <SwiperSlide key={index}><Placeholder key={index}></Placeholder></SwiperSlide>
            })}

        </Swiper>
    )
}

export default CardCarousel