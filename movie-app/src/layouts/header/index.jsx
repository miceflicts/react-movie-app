import React,{useEffect, useState} from 'react'
import Hamburguer from '../../components/hamburguer'
import Search from '../../components/search'
import { Link } from 'react-router-dom';

import logo from "../../assets/logos/alt_short.svg"
import "./style.css"

function Header() {
  const [windowSize, setWindowSize] = useState(0);
  
  const getWindowSize = () => {
    const width = window.innerWidth;
    return width;
  }

  const enableScrolling = () => {
    if (windowSize > 900) {
      document.body.style.overflow = "auto";
    };
  };

  
  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    }

  }, [])

  useEffect(() => {
    enableScrolling();
  
  }, [windowSize]);
  
  

  return (
    <div className='darkBlue flex justify-between items-center w-full h-28 gap-6 '>

        <div className="logo w-[200px] min-w-[200px] ml-10">
          <Link to="/">
            <img src={logo} alt="Website Logo" className='cursor-pointer'/>
          </Link>
        </div>

        <div className='flex items-center justify-center gap-10 text-gray-200/90 font-medium text-base max-[900px]:hidden'>
          <ul className='flex gap-10 text-gray-200/90 font-medium text-base cursor-pointer max-[900px]:hidden'>
            <Link to="/" className='hover:text-gray-200/70'><li>Home</li></Link>
            <Link to="/movie" className='hover:text-gray-200/70'><li>Movies</li></Link>
            <Link to="/tv" className='hover:text-gray-200/70'><li>Tv</li></Link>
          </ul>
          <Link to="/search"><button className=" bg-[#0d1014] hover:bg-[#060708] text-gray-200/90 font-bold py-2 px-6 rounded mr-10 max-[900px]:hidden">Search</button></Link>
        </div>


        <div className="hamburguer w-[45px] min-w-[45px] mr-4 hidden max-[900px]:block">
          <Hamburguer></Hamburguer>
        </div>
    </div>
  )
}

export default Header