import React from 'react'
import Recomended from "../../components/recommendations"
import Footer from '../../layouts/footer';
import Carousel from '../../components/carousel';
import GetRecomended from '../../api';

function Home() {
  // Title of each recomendation section
  const recomendations = [
  {title: "On the theaters", type: "/movie/now_playing"}, // movie
  {title: "Trending", type: "/trending/all/week"}, // tv
  {title: "Top Rated Series", type: "/tv/top_rated"}, // movie and tv
  {title: "Top Rated Movies", type: "/movie/top_rated"}, // movie
  {title: "Popular Movies", type: "/movie/popular"}, // movie
  {title: "Popular Series", type: "/tv/popular"}];

  return (
    <>
        <Carousel></Carousel>
        <div className="m-auto w-3/4 mt-20 max-[600px]:w-[95%] min-h-[800px]">
          {recomendations.map((text,index) => {
            return <Recomended title={text.title} type={text.type} key={index}></Recomended>
          })}
        </div>
        <Footer></Footer>
    </>
  )
}

export default Home