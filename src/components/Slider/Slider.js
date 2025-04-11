"use client";
import { useEffect, useState } from "react";
import { images } from "./constant";
import SliderContent from "./SliderContent";

const Slider = () => {
  const [activeImage, setActiveImage] = useState(0);

  const clickNext = () => {
    activeImage === images.length - 1
      ? setActiveImage(0)
      : setActiveImage(activeImage + 1);
  };
  const clickPrev = () => {
    activeImage === 0
      ? setActiveImage(images.length - 1)
      : setActiveImage(activeImage - 1);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      clickNext();
    }, 5000);
    return () => {
      clearTimeout(timer);
    };
  }, [activeImage]);
  return (
    <main className="place-items-center  w-full mx-auto  shadow-2xl">
      <SliderContent
        activeImage={activeImage}
        setActiveImage={setActiveImage}
      />
    </main>
  );
};

export default Slider;
