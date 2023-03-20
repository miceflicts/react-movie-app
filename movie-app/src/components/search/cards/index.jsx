import React from 'react'
import "./style.css"
import { Link } from 'react-router-dom'

function SearchCards({name, poster, type, id}) {
  return (  
    <>
        <Link to={`/${type}/${id}`} className='contents'>
            <div className="flex flex-col setWidth rounded-md">
                <img src={poster} className=" h-full w-full hover:brightness-50 aspect-[3.8/6]" />
                <h5 className='text-gray-200/90 break-all mt-5'>{name}</h5>
            </div>
        </Link>
    </>
  )
}

export default SearchCards