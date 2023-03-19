import React from 'react'
import { Link } from 'react-router-dom'
import "./style.css"

function Cards({name}) {
  return (
    <Link to="/movie" className=' contents'>
      <div className="flex flex-col setWidth rounded-md bg-yellow-600"></div>
        <h5 className='text-gray-200/90 break-all mt-2'>{name}</h5>
    </Link>
  )
};

export default Cards
