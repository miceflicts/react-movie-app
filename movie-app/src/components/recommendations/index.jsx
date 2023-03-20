import React,{useState, useEffect} from 'react'
import GetRecomended from '../../api'
import CardCarousel from '../cardCarousel'

function Recomended({title, route, type}) {
  const [mediaInfo, setMediaInfo] = useState(null)

  const handleMediaChange = (event) => {
    setMediaInfo(event);
  }
  
  return (
    <>
    <div className='flex flex-col justify-start mb-5'>
        <h5 className='text-white font-medium text-lg ml-2'>{title}</h5>
    </div>
    <GetRecomended type={route} onMediaChange={handleMediaChange}></GetRecomended>
    <div className='mb-14'>
      <CardCarousel recommendations={mediaInfo} type={type}></CardCarousel>
    </div>
    </>
  )
}

export default Recomended