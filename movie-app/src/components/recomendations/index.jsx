import React from 'react'
import Cards from "../cards"
import CardCarousel from '../cardCarousel'

function Recomended({title}) {
  const description = [{description: "Sigma movie"}, {description: "Wandinha"},{description: "Sigma movie"}, {description: "Wandinha"}, {description: "Sigma movie"}]

  return (
    <>
    <div className='flex flex-col justify-start mb-10'>
        <h5 className='text-white font-medium text-lg ml-2'>{title}</h5>
        <div className=''>
          {/* {description.map((desc, index) => {
            return <Cards description={desc.description} key={index} index={index}/>
          })} */}
        </div>
    </div>
    <div className='mb-10'>
      <CardCarousel></CardCarousel>
    </div>
    </>
  )
}

export default Recomended