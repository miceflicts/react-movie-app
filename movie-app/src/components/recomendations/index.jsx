import React from 'react'
import Cards from '../cards'

function Recomended({title}) {
  const description = [{description: "Sigma movie"}, {description: "Wandinha"},{description: "Sigma movie"}, {description: "Wandinha"}, {description: "Sigma movie"}]

  return (
    <div className='flex flex-col justify-start mb-10'>
        <h5 className='text-white font-medium text-lg ml-2'>{title}</h5>
        <div className='gap-10 mt-4 flex flex-row'>
          {description.map((desc, index) => {
            return <Cards description={desc.description} key={index} index={index}/>
          })}
        </div>
    </div>
  )
}

export default Recomended