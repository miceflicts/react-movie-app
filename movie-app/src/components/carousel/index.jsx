import React,{useState, useEffect} from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import { CarouselRecomendation } from '../../api';
import 'swiper/css';
import "swiper/css/autoplay";
import "swiper/css/pagination";
import CarouselCards from './cards';


function Carousel() {
    const [carouselInfo, setCarouselInfo] = useState(null);

    const handleFetch = (event) => {
        setCarouselInfo(event);
    };

    useEffect(() => {
      console.log(carouselInfo);
    }, [carouselInfo])
    
    
    return (
        <>
            <CarouselRecomendation onFetch={handleFetch}></CarouselRecomendation>
            <Swiper
            modules={[Pagination, Autoplay]}
            loop={true}
            autoplay={{delay: 5000}}
            pagination={{ clickable: true}}
            slidesPerView={1}
            >
                {carouselInfo !== null ? carouselInfo.map((media, index) => (
                <SwiperSlide key={index}>
                    <CarouselCards name={media.name} backdrop={`https://image.tmdb.org/t/p/original${media.backdrop}`} genre={media.genre_id} overview={media.overview} vote={media.vote}></CarouselCards>
                </SwiperSlide>
                )) : null}

                
            </Swiper>
        </>
    )
}

export default Carousel