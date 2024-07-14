import React from 'react'
import { useNavigate } from 'react-router-dom';
import { FaUser } from 'react-icons/fa6'
import { BsBuildingsFill } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { API_LINk } from '../constant/api';
import {errorSwal} from '../helpers/index'

const Header = () => {
  const [search,setSearch] = useState("");
  const navigate = useNavigate();
   console.log("search::::",search)
  const handleSearch = async () =>{
   try{
    const response  = await axios.get(`${API_LINk}/product/search/${search}`);
    if(response.data?.data?.length >0){
      const product = response.data?.data[0];
       if(product){
          navigate(`/product/${product?._id}`)
       }
    }
   }catch(error) {
    console.log("eroroo",error)
    errorSwal("ບໍມີສີນຄ້າທີ່ທ່ານຄົ້ນຫາ")
   }
  }
  return (
    <div className='w-full px-[10%] bg-green-600 flex justify-between items-center min-h-[4rem]'>
      <Link to={"/"} className='bg-white w-10 h-10 rounded-full grid place-items-center'><h4><BsBuildingsFill size={20} color='#0A8C27' /></h4></Link>
      <div className='w-[30rem] flex shadow-md'>
          <input onChange={(e) => setSearch(e.target.value)}
          type="text"
           placeholder='Search..' 
           className=' p-2 outline-none border-none bg-white  flex-1' style={{  borderRadius: "4px 0px 0px 4px"}} />
          <button onClick={handleSearch}
          className='bg-[#0A8C27] text-white px-4 text-sm font-medium' style={{  borderRadius: "0px 4px 4px 0px"}}>Search</button>
      </div>
      <div className='flex justify-center items-end'>
           <FaUser size={20} color='white'/>
      </div>
    </div>
  )
}

export default Header