import React, { useState,useEffect } from 'react'
import ProductCard from '../components/ProductCard'
import { API_LINk } from '../constant/api'
import axios from 'axios'


const Equipment = () => {
  const [productList,setProductList] = useState([])
  useEffect(() =>{
    const getProdcuctList = async () =>{
     try{
      const response = await axios.get(`${API_LINk}/product/get-by-categoryId/668bfd15d519cc5d4075c406`);
      if(response) {
        setProductList(response.data.data);
        console.log("data:",response.data.data)
      }
     }
     catch(error){
      console.log("ererere",error)
     }
    }
    getProdcuctList();
  },[])
  return (
    <div className='w-full p-2'>
        <h4 className='text-xl font-bold'>ອຸປະກອນ</h4>
       <div className='w-full grid grid-cols-4 gap-4 mt-6'>
               {productList?.map((item) => (
                  <ProductCard key={item._id} prodcut={item} />
               ))}
           </div>
    </div>
  )
}

export default Equipment
