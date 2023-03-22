import React from 'react'
import Recomended from "../../components/recommendations"
import Footer from '../../layouts/footer';
import Carousel from '../../components/carousel';

function Home() {
  // Title of each recomendation section
  const recomendations = [
  {title: "On the theaters", route: "/movie/now_playing", type: "movie", page: "page=1"}, // movie
  {title: "Trending", route: "/trending/all/week", type: "", page: "page=1"},
  {title: "Top Rated Tv shows", route: "/tv/top_rated", type: "tv", page: "page=1"}, // movie and tv
  {title: "Top Rated Movies", route: "/movie/top_rated", type: "movie", page: "page=1"}, // movie
  {title: "Popular Movies", route: "/movie/popular", type: "movie", page: "page=1"}, // movie
  {title: "Popular Tv shows", route: "/tv/popular", type: "tv", page: "page=3"}]; // tv

  const carrouselInfos = {carrouselType: "trending", carrouselRoute: "all/day", page: "page=1"}

  return (
    <>
        <Carousel type={carrouselInfos.carrouselType} route={carrouselInfos.carrouselRoute} page={carrouselInfos.page}></Carousel>
        <div className="m-auto w-3/4 mt-20 max-[600px]:w-[95%] min-h-[800px]">
          {recomendations.map((text,index) => {
            return <Recomended title={text.title} route={text.route} type={text.type} page={text.page} key={index}></Recomended>
          })}
        </div>
        <Footer></Footer>
    </>
  )
}

export default Home