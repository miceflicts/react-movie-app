import React from 'react';
import Carousel from '../../components/carousel';
import Recomended from '../../components/recommendations';

function Movie() {
  // Title of each recomendation section
  const recomendations = [
    {title: "Popular", route: "/movie/popular", type: "movie", page: "page=2"}, // movie
    {title: "Top Rated", route: "/movie/top_rated", type: "movie", page: "page=2"},
    {title: "Upcoming", route: "/movie/upcoming", type: "movie", page: "page=1"}, // movie
    {title: "On the theaters", route: "/movie/now_playing", type: "movie", page: "page=2"}]; // movie
  
    const carrouselInfos = {carrouselType: "movie/", carrouselRoute: "popular", page: "page=10"} // 10
  
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

export default Movie;
