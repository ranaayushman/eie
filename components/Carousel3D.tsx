"use client";

import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import MaxWidthWrapper from "./mmw";

interface CarouselProps {
  images: string[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  useEffect(() => {
    const updateSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", updateSize);
    updateSize();

    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div className="carousel-container relative w-full max-w-[100vw] h-[400px] flex justify-center items-center overflow-hidden">
      <MaxWidthWrapper>
        <button
          onClick={handlePrev}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black w-12 text-2xl bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 z-20"
        >
          {"<"}
        </button>

        <div className="carousel-track flex items-center justify-center space-x-4 sm:space-x-6">
          {images.map((src, index) => {
            const isCenter = index === currentIndex;
            const isLeft = (index + 1) % images.length === currentIndex;
            const isRight =
              (index - 1 + images.length) % images.length === currentIndex;

            if (isMobile && !isCenter && !isLeft && !isRight) {
              return null;
            }

            return (
              <motion.div
                key={index}
                className={`relative flex-shrink-0 rounded-lg overflow-hidden shadow-lg transition-all duration-500 ${
                  isCenter
                    ? "w-[200px] h-[250px] md:w-[300px] md:h-[400px] opacity-100 scale-110 z-10"
                    : "w-[100px] h-[150px] md:w-[200px] md:h-[300px] opacity-50 scale-90 z-0"
                } ${isLeft || isRight || isCenter ? "" : "hidden sm:block"}`}
                whileHover={isCenter ? { scale: 1.2 } : undefined}
                transition={{ duration: 0.5 }}
              >
                <motion.img
                  src={src}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.9 }}
                  transition={{ duration: 0.5 }}
                />
              </motion.div>
            );
          })}
        </div>

        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 w-12 text-2xl rounded-full hover:bg-opacity-70 z-20"
        >
          {">"}
        </button>
      </MaxWidthWrapper>
    </div>
  );
};

export default Carousel;
