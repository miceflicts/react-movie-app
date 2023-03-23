import React from 'react';
import Carousel from '../../components/carousel';
import Recomended from '../../components/recommendations';
import movieData from "../../languages/movieData.json"

function Movie({language, region}) {
  // Title of each recomendation section
  const recomendations = [
    {title: `${movieData.Languages[language][0]['First section']}`, route: "/movie/popular", type: "movie", page: "page=2", language: `language=${language}`, region: `region=${region}`}, // movie
    {title: `${movieData.Languages[language][0]['Second section']}`, route: "/movie/top_rated", type: "movie", page: "page=2", language: `language=${language}`, region: `region=${region}`},
    {title: `${movieData.Languages[language][0]['Third section']}`, route: "/movie/upcoming", type: "movie", page: "page=1", language: `language=${language}`, region: `region=${region}`}, // movie
    {title: `${movieData.Languages[language][0]['Fourth section']}`, route: "/movie/now_playing", type: "movie", page: "page=2", language: `language=${language}`, region: `region=${region}`}]; // movie
  
    const carrouselInfos = {carrouselType: "movie/", carrouselRoute: "popular", page: "page=3", language: `language=${language}`, region: `region=${region}`} // 10
  
    return (
      <>
          <Carousel type={carrouselInfos.carrouselType} route={carrouselInfos.carrouselRoute} page={carrouselInfos.page} language={carrouselInfos.language} region={carrouselInfos.region}></Carousel>
          <div className="m-auto w-3/4 mt-20 max-[600px]:w-[95%] min-h-[800px]">
            {recomendations.map((text,index) => {
              return <Recomended title={text.title} route={text.route} type={text.type} page={text.page} language={text.language} region={text.region} key={index}></Recomended>
            })}
          </div>
          <Footer language={language}></Footer>
      </>
    )
  }

export default Movie;
