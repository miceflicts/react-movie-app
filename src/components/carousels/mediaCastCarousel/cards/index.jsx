import React from 'react'
import { Link} from 'react-router-dom'

function MediaCastCards({name, image, type, id}) {

  const foreceRefresh = () => {
    setTimeout(()=>{
      window.location.reload();
    },100);
  }

  return (
    <Link to={`/react-movie-app/${type}/${id}`} onClick={foreceRefresh} className='contents'>
        <div className="flex flex-col max-w-[340px] max-[900px]:min-w-[100px]">
            <img src={`https://image.tmdb.org/t/p/original${image}`} className="transition delay-75 hover:brightness-50 aspect-[4/6]" />
            <div className=' absolute flex items-center text-white bottom-0 w-full h-[10%] bg-black/20'>
              <h5 className='ml-2'>{name}</h5>
            </div>
        </div>
    </Link>
  )
}

export default MediaCastCards
