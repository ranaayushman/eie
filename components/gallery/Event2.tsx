"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const eventImages = [
  "/codex/img7.jpg", //Sample Images these will be replaced by CodeX Images
  "/codex/img10.jpg",
  "/codex/img10.jpg",
  "/codex/img11.jpg",
];

const EventCarousel_2: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === eventImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // Adjusted for faster transition

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden">
      <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
        <AnimatePresence initial={false}>
          <motion.div
            key={eventImages[currentIndex]}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{
              x: { type: "spring", stiffness: 50, damping: 20 },
              opacity: { duration: 0.3 }, // Faster transition duration
            }}
            className="absolute top-0 left-0 w-full h-full"
          >
            <Image
              src={eventImages[currentIndex]}
              alt={`Event Image ${currentIndex + 1}`}
              fill
              priority
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default EventCarousel_2;
