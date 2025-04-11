"use client";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { images } from "./constant";
import Image from "next/image";

const SliderContent = ({ activeImage, setActiveImage }) => {
  const [showWhiteImage, setShowWhiteImage] = useState(false);

  useEffect(() => {
    // On activeImage change, show gray first
    setShowWhiteImage(false);

    const timer = setTimeout(() => {
      setShowWhiteImage(true);
    }, 2500);

    return () => clearTimeout(timer);
  }, [activeImage]);

  return (
    <div className="relative w-full h-full bg-[#0000004D] px-6 py-10 md:px-20 md:py-20 overflow-hidden">
      <Image
        src={
          showWhiteImage ? `/images/Days-GoneW.png` : `/images/Days-GoneG.png`
        }
        width={600}
        height={600}
        className="transition-opacity duration-1000"
        alt="Slide"
      />

      <AnimatePresence mode="wait">
        <motion.div
          key={activeImage}
          initial={{ opacity: 0, x: -300 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 200 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="w-full mt-10"
        >
          <div className="leading-relaxed max-w-2xl font-prosto font-medium text-base md:text-lg tracking-wide italic text-gray-300">
            {images[activeImage].desc}
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="flex items-center mt-20 mb-3 gap-10">
        <button
          type="button"
          className={` ${showWhiteImage ? "bg-[#E58E27] text-white" : "bg-[#452e12b4] text-[#080604ab]"} font-medium  cursor-pointer rounded-full px-18 py-3  transition-all ease-in-out duration-150`}
        >
          Try For Free
        </button>
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
      <div className="ml-1">Buy now for $40 only</div>
      <div className="flex items-center my-8 gap-2">
        <div className="w-4 h-4 rounded-full bg-green-500 shadow-2xl"></div>
        <p>40 of your friends are playing</p>
      </div>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-3 mt-6 z-20">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setActiveImage(idx)}
            className={`w-3 cursor-pointer h-3 rounded-full transition-all duration-300 ${
              idx === activeImage ? "bg-[#E58E27]" : "bg-gray-500"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default SliderContent;
