import React from 'react'
import "./style.css"
import { Link } from 'react-router-dom'

function SearchCards() {
  return (
    <Link to="/movie/1" className='contents'>
        <div className="h-[450px]" id='cardDiv'>
            <div className='bg-black w-full h-full rounded-md'></div>
            <h5 className='text-gray-200/90 break-all mt-2'>0</h5>
        </div>
    </Link>
  )
}

export default SearchCards