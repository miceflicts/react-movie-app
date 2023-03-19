import React from 'react'
import { Link } from 'react-router-dom'
import "./style.css"

function Cards() {
  
  return (
    <Link to="/movie" className=' contents'>
      <div className={`flex flex-col setWidth rounded-md bg-slate-600 h-[380px]`}></div>
      <h5 className='text-gray-200/90 break-all mt-2'></h5> 
    </Link>
  )
};

export default Cards
