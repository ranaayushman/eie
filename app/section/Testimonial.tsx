"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";

const testimonials = [
  {
    name: "Prof. Dr. Uday Majhi",
    role: "Faculty Coordinator (HOD AEIE)",
    image: "/prof/HOD1.jpg", // Add your image path
    testimonial: "Quote",
  },
  {
    name: "Prof Dr.Soumya Roy",
    role: "Faculty Coordinator",
    image: "/prof/img22.jpeg",
    testimonial: "Quote",
  },
  //   {
  //     name: "Michael Johnson",
  //     role: "Manager, Company C",
  //     image: "/img/img2.jpg",
  //     testimonial: "Highly recommend their work to everyone!",
  //   },
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000); 
    return () => clearInterval(interval); 
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div id="more" className="relative w-full max-w-4xl mx-auto p-8">
      {/* Testimonial Content */}
      <div className="w-full flex bg-slate-700 rounded-xl items-center justify-between p-6 shadow-lg">
        {/* Testimonial Text */}
        <div className="flex flex-col justify-center text-left w-2/3 pr-6">
          <p className="text-xl italic font-semibold text-gray-400">
            &quot;{testimonials[currentIndex].testimonial}&quot;
          </p>
          <h3 className="mt-4 text-lg font-bold">
            {testimonials[currentIndex].name}
          </h3>
          <span className="text-sm text-[#c7d2fe]">
            {testimonials[currentIndex].role}
          </span>
        </div>

        {/* Testimonial Image */}
        <div className="w-1/3 flex justify-end">
          <Image
            src={testimonials[currentIndex].image}
            alt={testimonials[currentIndex].name}
            width={96}
            height={96}
            className="rounded-full object-cover"
          />
        </div>
      </div>

      {/* Carousel Indicators */}
      <div className="flex justify-center mt-4">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-3 w-3 mx-1 rounded-full ${
              currentIndex === index ? "bg-blue-500" : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
