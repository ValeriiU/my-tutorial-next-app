"use client";

import React, { useState } from "react";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import Image from "next/image";
import dataJson from "../../lib/dataJson";


const SliderWindow = ({ images, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSlideLeft = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleSlideRight = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, images.length - 1));
  };

  return (
    <div className="slider-window">
      <button onClick={onClose}>Close</button>
      <div className="slider-content">
        <button onClick={handleSlideLeft}>
          <AiOutlineArrowLeft />
        </button>
        <Image
          src={images[currentIndex]}
          alt={`product ${currentIndex}`}
          width={200}
          height={200}
        />
        <button onClick={handleSlideRight}>
          <AiOutlineArrowRight />
        </button>
      </div>
    </div>
  );
};

const TrendingSlider = ({product}) => {
  // console.log({ product});
  const { images } = product;
   const [currentIndex, setCurrentIndex] = useState(0); 
   const handleSlideLeft = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const handleSlideRight = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <>
      <div className="flex flex-row  h-auto w-auto justify-start items-center pl-0 ">
        <div className="flex flex-row max-w-250 mx-auto px-19 h-full justify-center">
          <div className="flex flex-row justify-center ">
            <h3></h3>
            <div className="flex gap-2 w-max justify-around">
              <button title="scroll left" onClick={handleSlideLeft}>
                <AiOutlineArrowLeft />
              </button>

              <div className="overflow-y-hidden w-full flex flex-row  h-full mx-auto">
                <section className="slider-section flex flex-row max-w-250 mx-auto h-full justify-center ">
                  {images
                    .slice(currentIndex, currentIndex + 4)
                    .map((item, index) => (
                      <div
                        key={index}
                        className="border m-1 border-solid border-blue-300 hover:border-blue-700 cursor-pointer transition-all duration-150 ease-in"
                      >
                        <div>
                          <Image
                            src={item}
                            alt={`product ${index}`}
                            width={50}
                            height={50}

                          />
                        </div>
                      </div>
                    ))}
                </section>

              </div>
              <button title="scroll right" onClick={handleSlideRight}>
                <AiOutlineArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
  
};


export default TrendingSlider; 