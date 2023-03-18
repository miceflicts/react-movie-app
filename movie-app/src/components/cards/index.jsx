import React from 'react'
import { Link } from 'react-router-dom'
import "./style.css"

function Cards({description, index}) {
  return (
    <Link to="/movie" className=' contents'>
      <div className="flex flex-col min-w-[260px] max-w-[270px] max-[740px]:min-w-[80px] max-[1100px]:min-w-[10px] h-[320px] rounded-md bg-yellow-600"></div>
        <h5 className='text-gray-200/90 break-all mt-2'>{description}</h5>
    </Link>
  )
};

export default Cards
