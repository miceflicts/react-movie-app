import React from 'react'
import Header from '../layouts/header'
import Recomended from '../components/recomendations'
import Footer from '../layouts/footer';

function Home() {
  // Title of each recomendation section
  const recomendations = [{title: "In the theaters"}, {title: "Hyped"}, {title: "Top rated"}];

  return (
    <>
        <Header></Header>
        <div className="content m-auto left-0 right-0 w-3/4 mt-20 max-[600px]:w-full min-h-[800px]">
          {recomendations.map((text,index) => {
            return <Recomended title={text.title} key={index}></Recomended>
          })}
        </div>
        <Footer></Footer>
    </>
  )
}

export default Home