import React from 'react'
import Carousel from '../../components/carousels/mainCarousel';
import Recomended from '../../components/recommendations';
import tvData from "../../languages/tvData.json"
import Footer from '../../layouts/footer';

function TvShow({language, region}) {
  // Title of each recomendation section
  const recomendations = [
    {title: `${tvData.Languages[language][0]['First section']}`, route: "/tv/popular", type: "tv", page: "page=2", language: `language=${language}`, region: `region=${region}`},
    {title: `${tvData.Languages[language][0]['Second section']}`, route: "/tv/top_rated", type: "tv", page: "page=1", language: `language=${language}`, region: `region=${region}`},
    {title: `${tvData.Languages[language][0]['Third section']}`, route: "/movie/upcoming", type: "tv", page: "page=1", language: `language=${language}`, region: `region=${region}`},
    {title: `${tvData.Languages[language][0]['Fourth section']}`, route: "/tv/on_the_air", type: "tv", page: "page=3", language: `language=${language}`, region: `region=${region}`}];
  
    const carrouselInfos = {carrouselType: "tv", carrouselRoute: "popular", page: "page=10", language: `language=${language}`, region: `region=${region}`}
  
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

export default TvShow;