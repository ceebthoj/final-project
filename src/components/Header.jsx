import React from 'react'
import { FaUser } from 'react-icons/fa6'
import { BsBuildingsFill } from "react-icons/bs";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='w-full px-[10%] bg-green-600 flex justify-between items-center min-h-[4rem]'>
      <Link to={"/"} className='bg-white w-10 h-10 rounded-full grid place-items-center'><h4><BsBuildingsFill size={20} color='#0A8C27' /></h4></Link>
      <div className='w-[30rem] flex shadow-md'>
          <input type="text" placeholder='Search..' className=' p-2 outline-none border-none bg-white  flex-1' style={{  borderRadius: "4px 0px 0px 4px"}} />
          <button className='bg-[#0A8C27] text-white px-4 text-sm font-medium' style={{  borderRadius: "0px 4px 4px 0px"}}>Search</button>
      </div>
      <div className='flex justify-center items-end'>
           <FaUser size={20} color='white'/>
      </div>
    </div>
  )
}

export default Header