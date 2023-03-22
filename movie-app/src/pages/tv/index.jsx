import React from 'react'
import Carousel from '../../components/carousel';
import Recomended from '../../components/recommendations';

function TvShow() {
  // Title of each recomendation section
  const recomendations = [
    {title: "Popular", route: "/tv/popular", type: "tv", page: "page=2"},
    {title: "Top Rated", route: "/tv/top_rated", type: "tv", page: "page=1"},
    {title: "Upcoming", route: "/movie/upcoming", type: "tv", page: "page=1"},
    {title: "On the air", route: "/tv/on_the_air", type: "tv", page: "page=3"}];
  
    const carrouselInfos = {carrouselType: "tv/", carrouselRoute: "popular", page: "page=3"}
  
    return (
      <>
          <Carousel type={carrouselInfos.carrouselType} route={carrouselInfos.carrouselRoute} page={carrouselInfos.page}></Carousel>
          <div className="m-auto w-3/4 mt-20 max-[600px]:w-[95%] min-h-[800px]">
            {recomendations.map((text,index) => {
              return <Recomended title={text.title} route={text.route} type={text.type} page={text.page} key={index}></Recomended>
            })}
          </div>
      </>
    )
  }

export default TvShow;