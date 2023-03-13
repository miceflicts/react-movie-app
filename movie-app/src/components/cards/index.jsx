import React from 'react'
import { Link } from 'react-router-dom'
import "./style.css"

function Cards({description, index}) {
  return (
    <Link to={{ pathname: '/movie', state: { description } }}>
      <div className={`min-w-[260px] max-[600px]:min-w-[300px] ${"card" + index}`}>
        <div className='bg-black w-full h-72 rounded-md'></div>
        <h5 className='text-gray-200/90 break-all mt-2'>{description + " " + index}</h5>
      </div>
    </Link>
  )
};

export default Cards
