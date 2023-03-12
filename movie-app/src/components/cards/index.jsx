import React from 'react'
import "./style.css"

function Cards({description, index}) {
  return (
    <>
    <div className={` min-w-[260px] max-[600px]:min-w-[300px] ${"card" + index}`}>
        <div className='bg-black w-full h-72 rounded-md'></div>
        <h5 className=' text-gray-200/90 break-all mt-2'>{description + " " + index}</h5>
    </div>
    </>
  )
}

export default Cards