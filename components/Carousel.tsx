import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const images = [
  "/img/img1.jpg", 
  "/img/img2.jpg",
  "/img/img3.jpg",
  "/img/img4.jpg",
  "/img/img14.png",
  "/img/CodeX.jpg",
];

const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full max-w-lg mx-auto">
      {/* Carousel Container */}
      <div
        className="relative overflow-hidden"
        style={{ paddingTop: "100%" }} // Maintains square aspect ratio
      >
        <AnimatePresence initial={false}>
          <motion.div
            key={images[currentIndex]}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{
              x: { type: "spring", stiffness: 100, damping: 10 },
              opacity: { duration: 0.2 },
            }}
            className="absolute top-0 left-0 w-full h-full"
          >
            <Image
              src={images[currentIndex]}
              alt={`Carousel Image ${currentIndex + 1}`}
              layout="fill"
              
              priority
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Arrows - Moved Below */}
      <div className="flex justify-center mt-4 space-x-4">
        {/* Left Arrow */}
        <button
          onClick={handlePrev}
          className="bg-black bg-opacity-50 p-2 rounded-full md:p-4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="white"
            className="w-6 h-6 md:w-8 md:h-8"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Right Arrow */}
        <button
          onClick={handleNext}
          className="bg-black bg-opacity-50 p-2 rounded-full md:p-4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="white"
            className="w-6 h-6 md:w-8 md:h-8"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
