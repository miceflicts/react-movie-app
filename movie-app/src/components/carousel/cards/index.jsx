import React,{useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import "./style.css"

function CarouselCards({name, backdrop, genre, overview, type, vote, poster, id, screenWidth}) {
  console.log(type)
  const [cardType, setCardType] = useState({poster: backdrop, overview: overview})

  const handleWidthChange = () => {
    let type = screenWidth <= 800 ? poster : backdrop
    let newOverview = screenWidth <= 800 ? "" : overview
    setCardType({poster: type, overview: newOverview});
  }
  useEffect(() => {
    handleWidthChange();
    
  }, [screenWidth])
  

  return (
      <div className=" w-screen max-h-[75vh]">
        <div className='absolute flex flex-col justify-start mr-2 left-10 top-24 text-white z-10 gap-8 max-[1100px]:top-10 max-[800px]:top-40'>
          <h5 className={` name`}>{name}</h5>
          <h5 className={` overview min-w-[25vw] max-w-[50vw] text-gray-200/100 max-[1400px]:max-w-[90vw] max-lines`}>{cardType.overview}</h5>
          <Link to={`/${type}/${id}`} className="contents"><button className=" watchButton bg-[#0d1014] hover:bg-[#060708] text-gray-200/90 font-bold py-2 px-6 rounded mr-10 min-w-[25%] max-w-[150px] max-h-[40px]">Watch now</button></Link>
        </div>
        <img src={cardType.poster} className=" w-full block opacity-40" />
      </div>
  )
}

// <h5 className='text-white font-medium text-lg ml-2'>{title}</h5>

export default CarouselCards