import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import Cards from '../../cardsRecommendations';
import 'swiper/css';
import "swiper/css/navigation";

function MediaRecommendationsCarousel({info}) {
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
            {info[4].recommendations !== null ? info[4].recommendations.map((media, index) => {
            const mediaName = media.name === undefined ? media.title : media.name;
            return media.poster_path !== null ? (
                <SwiperSlide key={index}>
                    <Cards name={mediaName} poster={`https://image.tmdb.org/t/p/w500${media.poster_path}`} type={media.media_type} id={media.id} key={index}/>
                </SwiperSlide>
            ) : null;
            }) : null}


        </Swiper>
    )
}

export default MediaRecommendationsCarousel