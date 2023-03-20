import React from 'react'
import Recomended from "../../components/recommendations"
import Footer from '../../layouts/footer';
import Carousel from '../../components/carousel';

function Home() {
  // Title of each recomendation section
  const recomendations = [
  {title: "On the theaters", route: "/movie/now_playing", type: "movie"}, // movie
  {title: "Trending", route: "/trending/all/week", type: ""},
  {title: "Top Rated Series", route: "/tv/top_rated", type: "tv"}, // movie and tv
  {title: "Top Rated Movies", route: "/movie/top_rated", type: "movie"}, // movie
  {title: "Popular Movies", route: "/movie/popular", type: "movie"}, // movie
  {title: "Popular Series", route: "/tv/popular", type: "tv"}]; // tv

  const carrouselInfos = {carrouselType: "trending", carrouselRoute: "all/day"}

  return (
    <>
        <Carousel type={carrouselInfos.carrouselType} route={carrouselInfos.carrouselRoute}></Carousel>
        <div className="m-auto w-3/4 mt-20 max-[600px]:w-[95%] min-h-[800px]">
          {recomendations.map((text,index) => {
            return <Recomended title={text.title} route={text.route} type={text.type} key={index}></Recomended>
          })}
        </div>
        <Footer></Footer>
    </>
  )
}

export default Home