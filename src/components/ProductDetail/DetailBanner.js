"use client";
import React, { useEffect, useState } from "react";
import { StarRating } from "../Rating/StarRating";
import Image from "next/image";

const DetailBanner = ({ productDetail }) => {
  const [showWhiteImage, setShowWhiteImage] = useState(false);

  useEffect(() => {
 
    setShowWhiteImage(false);

    const timer = setTimeout(() => {
      setShowWhiteImage(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full xl:max-w-full md:max-w-6xl max-w-full h-[34rem] py-4  px-3 mx-auto mt-10 bg-[#1a1510]">
      <div
        className="absolute -top-6 left-4 w-[96%] h-full z-30 border border-[#ffffff20]"
        style={{
          clipPath:
            "polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 0 100%)",
        }}
      />

      <div className="relative p-6">
        <div className="text-sm mt-3 mb-1 -ml-6 pl-7 py-1 max-w-xl bg-[#111111] trans">
          <h2>{productDetail?.title}</h2>
        </div>
        <StarRating rating={productDetail?.rating} />
      </div>

      <div className="flex  flex-col items-center justify-center space-y-6 md:px-4 px-8">
        <Image
          alt="league"
          src={`/images/league.png`}
          width={500}
          height={600}
          className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] h-auto animate-slideUp1"
        />
        <Image
          alt="legends"
          src={`/images/LEGENDS.png`}
          width={400}
          height={500}
          className="w-full max-w-[280px] sm:max-w-[350px] md:max-w-[450px] h-auto animate-slideUp2"
        />
      </div>

      <div className="flex flex-col items-center">

      <div className="flex items-center mt-20 mb-3 gap-10">
        <button
          type="button"
          className={` ${
            showWhiteImage
              ? "bg-[#E58E27] cursor-pointer text-white"
              : "bg-[#452e12b4] cursor-no-drop text-[#080604ab]"
          } font-medium   rounded-full md:px-18 px-12 py-3  transition-all ease-in-out duration-150`}
        >
          Try For Free
        </button>
      </div>

      <div className="flex items-center my-3 gap-2">
        <div className="md:w-4 md:h-4  w-2 h-2 rounded-full bg-green-500 shadow-2xl"></div>
        <p className="text-[12px] md:text-[16px]">245k players already enrolled</p>
      </div>
      </div>

      <div className="flex md:justify-end justify-center xl:mr-20 md:mr-9">
         <div className="flex items-center gap-4">
                  <div className={`${showWhiteImage ? "text-white" : "text-[#9e9595cc]"}`} >Available on:</div>
                   <Image src={
                  showWhiteImage ? `/iosW.png` : `/iosG.png`
                }
                width={80}
                height={80}
                className="transition-opacity duration-1000"
                alt="ios-window"/>
                  
                </div>
      </div>

      
    </div>
  );
};

export default DetailBanner;
