import React from 'react'
import Header from '../../layouts/header'
import Recomended from '../../components/recomendations'
import Footer from '../../layouts/footer';
import Carousel from '../../layouts/carousel';

function Home() {
  // Title of each recomendation section
  const recomendations = [{title: "In the theaters"}, {title: "Hyped"}, {title: "Top rated"}];

  return (
    <>
        <Carousel></Carousel>
        <div className="m-auto left-0 right-0 w-3/4 mt-20 max-[600px]:w-full min-h-[800px] flex flex-col items-center justify-center">
          {recomendations.map((text,index) => {
            return <Recomended title={text.title} key={index}></Recomended>
          })}
        </div>
        <Footer></Footer>
    </>
  )
}

export default Home