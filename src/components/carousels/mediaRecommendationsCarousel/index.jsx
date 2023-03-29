import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import Cards from '../../cardsRecommendations';
import 'swiper/css';
import "swiper/css/navigation";
import Placeholder from '../../cardsRecommendations/placeholder';

function MediaRecommendationsCarousel({info}) {
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
            {info[4].recommendations !== null ?  info[4].recommendations.map((media, index) => {
                {const mediaName = media.name === undefined ? media.title : media.name
                return <SwiperSlide key={index}><Cards name={mediaName} poster={`https://image.tmdb.org/t/p/w500${media.poster_path}`} type={media.media_type} id={media.id} key={index}/></SwiperSlide>}
            }) : description.map((media, index) => {
                return <SwiperSlide key={index}><Placeholder key={index}></Placeholder></SwiperSlide>
            })}

        </Swiper>
    )
}

export default MediaRecommendationsCarousel