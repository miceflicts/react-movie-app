import React from 'react'
import "./style.css"
import { Link } from 'react-router-dom'

function SearchCards({name, poster, type, id}) {
  return (  
    <>
        <Link to={`/react-movie-app/${type}/${id}`} className='contents'>
            <div className="flex flex-col setWidth rounded-md max-[850px]:min-w-[45%] max-[850px]:max-w-[0px] mb-10">
                <img src={poster} className=" transition max-w-[300px] delay-75 hover:brightness-50 aspect-[3.8/6]" />
                <p className='text-gray-200/90 mt-5'>{name}</p>
            </div>
        </Link>
    </>
  )
}

export default SearchCards