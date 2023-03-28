import React from 'react'
import Recomended from "../../components/recommendations"
import Footer from '../../layouts/footer';
import Carousel from '../../components/carousels/mainCarousel';
import homeData from "../../languages/homeData.json"
import YouTube from 'react-youtube';

function Home({language, region}) {
  // Title of each recomendation section
  const recomendations = [
  {title: `${homeData.Languages[language][0]['First section']}`, route: "/movie/now_playing", type: "movie", page: "page=1", language: `language=${language}`, region: `region=${region}`}, // movie
  {title: `${homeData.Languages[language][0]['Second section']}`, route: "/trending/all/week", type: "", page: "page=1", language: `language=${language}`, region: `region=${region}`},
  {title: `${homeData.Languages[language][0]['Third section']}`, route: "/tv/top_rated", type: "tv", page: "page=1", language: `language=${language}`, region: `region=${region}`}, // movie and tv
  {title: `${homeData.Languages[language][0]['Fourth section']}`, route: "/movie/top_rated", type: "movie", page: "page=1", language: `language=${language}`, region: `region=${region}`}, // movie
  {title: `${homeData.Languages[language][0]['Fifth section']}`, route: "/movie/popular", type: "movie", page: "page=1", language: `language=${language}`, region: `region=${region}`}, // movie
  {title: `${homeData.Languages[language][0]['Sixth section']}`, route: "/tv/popular", type: "tv", page: "page=3", language: `language=${language}`, region: `region=${region}`}]; // tv

  const carrouselInfos = {carrouselType: "trending", carrouselRoute: "all/day", page: "page=1", language: `language=${language}`, region: `region=${region}`};

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

export default Home