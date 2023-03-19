import React from 'react'
import CardCarousel from '../cardCarousel'

function Recomended({title}) {
  // get the movies here

  return (
    <>
    <div className='flex flex-col justify-start mb-5'>
        <h5 className='text-white font-medium text-lg ml-2'>{title}</h5>
    </div>
    <div className='mb-14'>
      <CardCarousel></CardCarousel>
    </div>
    </>
  )
}

export default Recomended