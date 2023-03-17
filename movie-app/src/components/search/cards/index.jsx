import React from 'react'
import { Link } from 'react-router-dom'

function SearchCards() {
  return (
    <Link to="/movie/1" className='contents'>
        <div className="min-w-[280px]">
            <div className='bg-black w-full h-[350px] rounded-md'></div>
            <h5 className='text-gray-200/90 break-all mt-2'>0</h5>
        </div>
    </Link>
  )
}

export default SearchCards