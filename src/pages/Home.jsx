import React, { useState,useEffect } from 'react'
import Sidebar from '../components/Sidebar'
import { API_LINk } from '../constant/api'
import axios from 'axios'



const Home = ({children}) => {
  const [categories,setCategories] = useState([]);
  useEffect(() =>{
    const getCategories = async () =>{
     try{
      const response = await axios.get(`${API_LINk}/category/get`);
      if(response) {
        setCategories(response.data.data);
      }
     }
     catch(error){
      console.log("ererere",error)
     }
    }
    getCategories();
  },[])





  return (
    <div className='py-0 px-[10%] min-h-screen bg-[#FFFFFF] flex'>
        <div className='w-[20%]'>
           <Sidebar data= {categories} />
        </div>
        <div className='flex-1'>
            {children}
        </div>
    </div>
  )
}

export default Home