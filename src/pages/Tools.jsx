import React, { useState,useEffect } from 'react'
import ProductCard from '../components/ProductCard'
import { API_LINk } from '../constant/api'
import axios from 'axios'


import { productData } from '../helpers'
const Tools = () => {
  const [productList,setProductList] = useState([])
  useEffect(() =>{
    const getProdcuctList = async () =>{
     try{
      const response = await axios.get(`${API_LINk}/product/get-by-categoryId/668bfd23d519cc5d4075c408`);
      if(response) {
        setProductList(response.data.data);
        // console.log("data:",response.data.data)
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
        <h4 className='text-xl font-bold'>Tools</h4>
       <div className='w-full grid grid-cols-4 gap-4 my-6'>
               {productList?.map((item,index) => (
                  <ProductCard key={index} prodcut={item} />
               ))}
           </div>
    </div>
  )
}

export default Tools
