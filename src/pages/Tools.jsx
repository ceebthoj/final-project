import React from 'react'
import ProductCard from '../components/ProductCard'
import { productData } from '../helpers'
const Tools = () => {
  return (
    <div className='w-full p-2'>
        <h4 className='text-xl font-bold'>Tools</h4>
       <div className='w-full grid grid-cols-4 gap-4 my-6'>
               {productData?.map((item) => (
                  <ProductCard key={item.id} prodcut={item} />
               ))}
           </div>
    </div>
  )
}

export default Tools
