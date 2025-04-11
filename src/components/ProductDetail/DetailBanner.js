import React from "react";
import { StarRating } from "../Rating/StarRating";
import { time } from "framer-motion";

const DetailBanner = ({ productDetail }) => {
  return (
    <div className="relative w-full max-w-4xl h-[30rem] mx-auto mt-10 bg-[#1a1510]">
      {/* Main clipped border box */}
      <div className="absolute -top-6 left-4 w-[96%] h-full z-30 border border-[#ffffff20]" />

      {/* Content */}
      <div className="relative p-6 ">
        <div className="opacity-0 trans text-sm mt-3 mb-1 -ml-6 pl-7 py-1  max-w-xl bg-[#111111]">
          <h2>{productDetail?.title}</h2>
        </div>
        <StarRating rating={productDetail?.rating} />
      </div>
      <div className="relative flex justify-center z-10 p-6 text-white">
        <button className="mt-40 absolute top-24 bg-[#E58E27] text-white px-6 py-2 rounded-full opacity-60 cursor-not-allowed">
          Try For Free
        </button>
      </div>
    </div>

  );
};

export default DetailBanner;
