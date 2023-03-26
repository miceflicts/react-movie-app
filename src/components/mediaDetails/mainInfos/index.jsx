import React,{useState, useEffect} from 'react'
import { GetMediasDetails } from '../../../api'

function MainInfos({type, id, language}) {
  const [mediaInfo, setMediaInfo] = useState(null)

  const handleFetch = (event) => {
    setMediaInfo(event);
  }

  useEffect(() => {
    console.log(mediaInfo)

  }, [mediaInfo])
  

  return (
    <>
      <GetMediasDetails type={type} id={id} language={language} onFetch={handleFetch}></GetMediasDetails>

      {mediaInfo !== null ? 
        <div className=' w-full flex max-[900px]:flex-col max-[900px]:items-center gap-10 mt-10'>
          <img className='absolute top-0 left-0 w-full z-[-10] max-h-[850px] opacity-50 min-w-[1000px] object-cover' src={`https://image.tmdb.org/t/p/original/${mediaInfo[0].backdrop_path}`} alt=""></img>
          
          <img className='bg-yellow-500 w-[40%] max-w-[520px] min-w-[250px] max-[900px]:w-[69%] max-[900px]:max-w-[400px]' src={`https://image.tmdb.org/t/p/original/${mediaInfo[0].poster_path}`}></img>
          <div className=' text-white mt-5 flex flex-col w-2/4 gap-5 max-[900px]:w-full'>
              <h5 className=' text-5xl font-bold'>{mediaInfo[0].name}</h5>
              <h5 className='text-gray-300 text-base '>{mediaInfo[0].tagline}</h5>
              <h5 className='text-gray-200 text-base'>{mediaInfo[0].overview}</h5>
          </div>

        </div>
        : <div>No info yet</div>}
    </>

  )
}

export default MainInfos