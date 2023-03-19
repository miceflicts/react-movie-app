import React from 'react'
import Recomended from "../../components/recomendations"
import Footer from '../../layouts/footer';
import Carousel from '../../components/carousel';
import ApiTests from '../../api';

function Home() {
  // Title of each recomendation section
  const recomendations = [
  {title: "Trending", type: "/trending/all/week"}, // movie and tv
  {title: "On the theaters", type: "/movie/now_playing"}, // movie
  {title: "Popular Movies", type: "/movie/popular"}, // movie
  {title: "Top Rated Movies", type: "/movie/top_rated"}, // movie
  {title: "Popular Series", type: "/tv/popular"}, // tv
  {title: "Top Rated Series", type: "/tv/top_rated"}]; // tv

  return (
    <>
        <Carousel></Carousel>
        <div className="m-auto w-3/4 mt-20 max-[600px]:w-full min-h-[800px]">
          {recomendations.map((text,index) => {
            return <Recomended title={text.title} key={index}></Recomended>
          })}
        </div>
        <ApiTests></ApiTests>
        <Footer></Footer>
    </>
  )
}

export default Home