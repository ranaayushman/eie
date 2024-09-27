"use client";

import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useEffect, useCallback } from "react";
import MaxWidthWrapper from "./mmw";

interface CarouselProps {
  images: string[];
  autoPlayInterval?: number;
}

const Carousel: React.FC<CarouselProps> = ({ images, autoPlayInterval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const handleNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]);

  const handlePrev = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  }, [images.length]);

  useEffect(() => {
    const interval = setInterval(handleNext, autoPlayInterval);
    return () => clearInterval(interval);
  }, [handleNext, autoPlayInterval]);

  const variants = {
    enter: (direction: number) => ({
      z: -1000,
      rotateY: direction > 0 ? 90 : -90,
      opacity: 0,
    }),
    center: {
      z: 0,
      rotateY: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      z: -1000,
      rotateY: direction < 0 ? 90 : -90,
      opacity: 0,
    }),
  };

  return (
    <div className="carousel-container relative w-full max-w-[100vw] h-[400px] flex justify-center items-center overflow-hidden perspective-1000">
      <MaxWidthWrapper>
        <div className="carousel-3d-container relative w-full h-full preserve-3d">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                z: { type: "spring", stiffness: 300, damping: 30 },
                rotateY: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              className="absolute w-full h-full"
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              <img
                src={images[currentIndex]}
                alt={`Slide ${currentIndex + 1}`}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === currentIndex ? "bg-white" : "bg-gray-400"
              }`}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
            />
          ))}
        </div>

        <button
          onClick={handlePrev}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 w-12 h-12 flex items-center justify-center text-2xl text-white rounded-full hover:bg-black/70 z-20"
        >
          {"<"}
        </button>

        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 w-12 h-12 flex items-center justify-center text-2xl text-white rounded-full hover:bg-black/70 z-20"
        >
          {">"}
        </button>
      </MaxWidthWrapper>
    </div>
  );
};

export default Carousel;