import {useState,useEffect} from "react";
import { useParams } from "react-router-dom";
import { productData } from "../helpers";
import ProductCard from "../components/ProductCard";
import { FaChevronRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import axios from "axios";
import { API_LINk } from "../constant/api";


const PrdocutDetail = () => {
  const [product,setProduct] = useState(null)
  const [relativeProducts,setRelativeProducts] = useState([])
  const [isLoading,setIsLoading] = useState(false)
  const {id} = useParams();
   useEffect(() =>{
    getProdcuct();
  },[id])


   useEffect(() =>{
    if(product?.name){
      getRelativeProducts(product?.name);
    }
  },[product?.name])

  const getProdcuct = async () =>{
    setIsLoading(true)
    try{
     const response = await axios.get(`${API_LINk}/product/get/${id}`);
     if(response) {
       setProduct(response.data.data);
       console.log("product-data:",response.data.data)
     }
    }
    catch(error){
     console.log("ererere",error)
    }finally{
      setIsLoading(false)
    }
   }
   const getRelativeProducts = async (productName) =>{
      const response  = await axios.get(`${API_LINk}/product/relatived-product?name=${productName}`)
      console.log("data-relative",response?.data?.data);
      setRelativeProducts(response.data.data)
   }
  return (
     <>
       {
        isLoading ? <div>Loading.....</div> :
        <div className="min-h-screen px-[10%] py-4">
        <div className="flex gap-3 my-4 items-center">
         <Link to="/"><h3 className="text-base font-medium hover:underline hover:text-[#0A8C27]">ໜ້າຫຼັກ</h3></Link><h3><FaChevronRight/></h3> <h3 className="text-base font-medium">ລາຍການສີນຄ້າ</h3>
        </div>
      <div className="flex gap-3 w-full mt-6">
        <div className="flex justify-center md:w-[40%] bg-green-600 rounded-md overflow-hidden">
          <img src={product?.images[0]} alt="" className="w-full object-cover max-h-[20rem]" />
        </div>
        <div className="flex-1 flex gap-3 flex-col">
          <h2 className="text-xl font-bold">
            {product?.name}
          </h2>
         <div className=""><p>{product?.description}</p></div>
          <div className="flex gap-1"><p>Price:</p> <p className="font-bold text-[#0A8C27]">{product?.price}</p> Kip</div>
        </div>
      </div>
      <div className="mt-10">
        <h3 className="text-xl font-bold">Recommend Similar Products for you </h3>
        <div className="grid grid-cols-5 gap-4 mt-4">
          {relativeProducts?.map((item,index) => (
            <ProductCard key={index} prodcut={item} />
          ))}
        </div>
      </div>
    </div>
       }
       </>
  );
};

export default PrdocutDetail;
