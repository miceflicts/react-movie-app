import React from 'react'

function CarouselCards({name, backdrop, genre, overview, vote}) {
  return (
    <div className=" w-screen h-[75vh]">
        <img src={backdrop} className=" opacity-40 w-full" />
    </div>
  )
}

export default CarouselCards