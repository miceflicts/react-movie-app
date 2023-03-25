import React from 'react'
import { Link } from 'react-router-dom'
import placeholder from "../../assets/placeholder/placeholder-image.webp"
import "./style.css"

function Cards() {
  
  return (
    <Link to="/react-movie-app/" className=' contents'>
      <div className={`flex flex-col items-center justify-center setWidth rounded-md bg-slate-600 h-[380px]`}>
        <img src={placeholder} alt="" className=' w-2/4' />
      </div>
      <h5 className='text-gray-200/90 break-all mt-2'></h5> 
    </Link>
  )
};

export default Cards