import React from "react";
import { productData } from "../helpers";
import ProductCard from "../components/ProductCard";
import { FaChevronRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
const PrdocutDetail = () => {
  return (
    <div className="min-h-screen px-[10%] py-4">
        <div className="flex gap-3 my-4 items-center">
         <Link to="/"><h3 className="text-base font-medium hover:underline hover:text-[#0A8C27]">Home</h3></Link><h3><FaChevronRight/></h3> <h3 className="text-base font-medium">Product Detail</h3>
        </div>
      <div className="flex gap-3 w-full mt-6">
        <div className="flex justify-center md:w-[40%] bg-green-600 rounded-md overflow-hidden">
          <img src={productData[0].image} alt="" className="w-full object-cover" />
        </div>
        <div className="flex-1 flex gap-3 flex-col">
          <h2 className="text-xl font-bold">
            {productData[0].name}
          </h2>
         <div className=""><p>{productData[0].discription}</p></div>
          <div className="flex gap-1"><p>Price:</p> <p className="font-bold text-[#0A8C27]">{productData[0].price}</p> Kip</div>
        </div>
      </div>
      <div className="mt-10">
        <h3 className="text-xl font-bold">Recommend Similar Products for you </h3>
        <div className="grid grid-cols-5 gap-4 mt-4">
          {productData.map((item) => (
            <ProductCard key={item.id} prodcut={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PrdocutDetail;
