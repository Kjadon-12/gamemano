import React from "react";
import { StarRating } from "../Rating/StarRating";


const ProductCard = ({ product }) => {
  return (
    <div className="w-[19rem] h-[22rem] bg-[#d1b288] rounded-lg p-3 ">
      <div className="relative">
        <div className="absolute text-xs w-max bg-[#3D352A] rounded-full px-3 flex items-center gap-1 py-1">
          <div className="rounded-full shadow-2xl bg-green-600  w-2 h-2"></div>
          1200 online
        </div>
        <div className="absolute -bottom-[20rem]">
          <h2 className="text-black font-medium text-2xl">{product?.title}</h2>
          <div className="mt-1">
            <StarRating rating={product?.rating}/>
          </div>
          <ul className="text-[12px] flex mt-1 items-center w-full text-red-600">
            {product?.tags?.length > 0 &&
              product?.tags?.slice(0, 3)?.map((tag, index) => (
                <React.Fragment key={index}>
                  <li className={`capitalize flex items-center mr-1 `}>
                    {index !== 0 && (
                      <span className="mr-1 rounded-full w-2 h-2 bg-red-600 inline-block" />
                    )}
                    {tag}
                  </li>
                </React.Fragment>
              ))}
          </ul>
          <p className="text-xs mt-1 pb-6">Released 10th August 2022</p>
          <div className="flex items-center gap-5">
            <div>${product?.price}</div>
            <button
              type="button"
              className={`  bg-[#E58E27] text-white hover:bg-[#422400]  font-medium  cursor-pointer rounded-full px-18 py-3  transition-all ease-in-out duration-500`}
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
