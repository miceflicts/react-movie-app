import React from 'react'
import logo from "../../assets/logos/alt_short.svg"
import hamburguer from "../../assets/menu/hamburguer.png"
import Search from '../../components/search'
import "./style.css"

function Header() {
  return (
    <div className='darkBlue flex justify-between items-center w-full h-28 gap-6'>
      <div className="logo w-[200px] min-w-[200px] ml-10">
        <img src={logo} alt=""/>
      </div>

      <div className="search flex justify-center items-center flex-col w-full max-w-[1200px]">
        <Search></Search>
      </div>

      <div className="user w-[45px] min-w-[45px] mr-10 ">
        <a href="#"><img src={hamburguer} alt="" className='w-full'/></a>
      </div>
    </div>
  )
}

export default Header