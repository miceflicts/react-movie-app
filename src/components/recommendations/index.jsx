import React,{useState} from 'react'
import GetRecomended from '../../api'
import CardCarousel from '../carousels/cardCarousel'

function Recomended({title, route, type, language, region, page}) {
  const [mediaInfo, setMediaInfo] = useState(null)

  const handleMediaChange = (event) => {
    setMediaInfo(event);
  }
  
  return (
    <>
    <div className='flex flex-col justify-start mb-5'>
        <h5 className='text-white font-medium text-lg ml-2'>{title}</h5>
    </div>
    <GetRecomended type={route} page={page} language={language} region={region} onMediaChange={handleMediaChange}></GetRecomended>
    <div className='mb-14'>
      <CardCarousel recommendations={mediaInfo} type={type}></CardCarousel>
    </div>
    </>
  )
}

export default Recomended