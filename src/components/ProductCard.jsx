import React from "react";
import { Link } from "react-router-dom";
const ProductCard = ({ prodcut }) => {
  return (
    <Link to={`/product/${prodcut?._id}`} className="flex flex-col gap-2 bg-white rounded-md hover:border-2 border-[#0A8C27] transition-all duration-150 cursor-pointer shadow-md">
      <div className="w-full p-2">
        <img
          src={prodcut.images[0]}
          alt={prodcut.name}
          className="w-full object-cover max-h-[10rem]"
        />
      </div>
      <div className="p-2">
        <p>{prodcut.name}</p>
        <p className="text-[#0A8C27] text-lg font-bold">{prodcut.price} kip</p>
      </div>
    </Link>
  );
};

export default ProductCard;