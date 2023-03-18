import React from 'react'
import CardCarousel from '../cardCarousel'

function Recomended({title}) {

  return (
    <>
    <div className='flex flex-col justify-start mb-10'>
        <h5 className='text-white font-medium text-lg ml-2'>{title}</h5>
    </div>
    <div className='mb-10'>
      <CardCarousel></CardCarousel>
    </div>
    </>
  )
}

export default Recomended