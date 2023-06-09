import React from 'react'
import Hamburguer from '../../components/hamburguer'
import headerData from "../../languages/headerData.json"
import { Link } from 'react-router-dom';

import logo from "../../assets/logos/alt_short.svg"
import "./style.css"

function Header({language}) {
  
  return (
    <div className=' absolute bg-transparent top-0 flex justify-between items-center w-full h-28 gap-6 z-20'>

        <div className="logo w-[200px] min-w-[200px] ml-10">
          <Link to="/react-movie-app/">
            <img src={logo} alt="Website Logo" className='cursor-pointer'/>
          </Link>
        </div>

        <div className='flex items-center justify-center gap-10 text-gray-200/90 font-medium text-base max-[900px]:hidden'>
          <ul className='flex gap-10 text-gray-200/90 font-medium text-base cursor-pointer max-[900px]:hidden'>
            <Link to="/react-movie-app/" className='hover:text-gray-200/70'><li>{headerData.Languages[language][0]['Home']}</li></Link>
            <Link to="/react-movie-app/movie" className='hover:text-gray-200/70'><li>{headerData.Languages[language][0]['Movies']}</li></Link>
            <Link to="/react-movie-app/tv" className='hover:text-gray-200/70'><li>{headerData.Languages[language][0]['Tv']}</li></Link>
          </ul>
          <Link to="/react-movie-app/search"><button className=" bg-[#0d1014] hover:bg-[#060708] text-gray-200/90 font-bold py-2 px-6 rounded mr-10 max-[900px]:hidden">{headerData.Languages[language][0]['Search']}</button></Link>
        </div>


        <div className="hamburguer w-[45px] min-w-[45px] mr-4 hidden max-[900px]:block">
          <Hamburguer language={language}></Hamburguer>
        </div>
    </div>
  )
}

export default Header