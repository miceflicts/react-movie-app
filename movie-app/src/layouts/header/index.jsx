import React from 'react'
import logo from "../../assets/logos/alt_short.svg"
import user from "../../assets/user/user.png"
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

      <div className="user rounded-full w-[56px] min-w-[56px] mr-10 border border-gray-100/5 ">
        <a href="#"><img src={user} alt="" className='w-full'/></a>
      </div>
    </div>
  )
}

export default Header