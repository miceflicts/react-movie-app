import React,{useState, useEffect} from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import { CarouselRecomendation } from '../../api';
import 'swiper/css';
import "swiper/css/autoplay";
import "swiper/css/pagination";
import CarouselCards from './cards';


function Carousel({type, route, page}) {
    const [carouselInfo, setCarouselInfo] = useState(null);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    const handleWidthChange = () => {
        let newWidth = window.innerWidth;
        setScreenWidth(newWidth)
    };

    useEffect(() => {
        handleWidthChange();
    }, [])

    useEffect(() => {
        window.addEventListener("resize", handleWidthChange);
        
        return () => {
        window.removeEventListener("resize", handleWidthChange);
        }
    }, [screenWidth])

    const handleFetch = (event) => {
        setCarouselInfo(event);
    };

    useEffect(() => {
      /* onsole.log(carouselInfo); */
    }, [carouselInfo])
    
    
    return (
        <>
            <CarouselRecomendation onFetch={handleFetch} type={type} page={page} route={route}></CarouselRecomendation>
            <Swiper
            modules={[Pagination, Autoplay]}
            loop={true}
            autoplay={{delay: 5000}}
            pagination={{ clickable: true}}
            slidesPerView={1}
            >
                {carouselInfo !== null ? carouselInfo.map((media, index) => {
                    const setType = type === "trending" ? media.type : type;
                    return (
                        <SwiperSlide key={index}>
                            <CarouselCards 
                                name={media.name}
                                backdrop={`https://image.tmdb.org/t/p/original${media.backdrop}`}
                                poster={`https://image.tmdb.org/t/p/original${media.poster}`}
                                genres={media.genre_id}
                                overview={media.overview}
                                vote={media.vote}
                                id={media.id}
                                type={setType}
                                screenWidth={screenWidth}
                            />
                        </SwiperSlide>
                    );
                }) : null}

            </Swiper>
        </>
    )
}

export default Carousel