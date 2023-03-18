import React from 'react'
import Header from '../../layouts/header'
import Recomended from "../../components/recomendations"
import Footer from '../../layouts/footer';
import Carousel from '../../components/carousel';
import CardCarousel from '../../components/cardCarousel';

function Home() {
  // Title of each recomendation section
  const recomendations = [{title: "In the theaters"}, {title: "Hyped"}, {title: "Top rated"}];

  return (
    <>
        <Carousel></Carousel>
        <div className="m-auto w-3/4 mt-20 max-[600px]:w-full min-h-[800px]">
          {recomendations.map((text,index) => {
            return <Recomended title={text.title} key={index}></Recomended>
          })}
        </div>
        <Footer></Footer>
    </>
  )
}

export default Home