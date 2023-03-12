import React from 'react'
import Hamburguer from '../../components/hamburguer'
import Search from '../../components/search'

import logo from "../../assets/logos/alt_short.svg"
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

      <div className="hamburguer w-[45px] min-w-[45px] mr-10 ">
        <Hamburguer></Hamburguer>
      </div>
    </div>
  )
}

export default Header