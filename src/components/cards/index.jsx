import React from 'react'
import "./style.css"
import { Link } from 'react-router-dom'

function SearchCards({name, poster, type, id}) {
  return (
    <Link to={`/${type}/${id}`} className='contents'>
        <div className="flex flex-col max-[900px]:min-w-[100px]" id='cardDiv'>
            <img src={poster} className="transition delay-75 hover:brightness-50 aspect-[4/6] rounded-md" />
            <h5 className='text-gray-200/90 break-all mt-5'>{name}</h5>
        </div>
    </Link>
  )
}

export default SearchCards