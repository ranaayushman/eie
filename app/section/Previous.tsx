"use client";

import Image from "next/image";
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import MaxWidthWrapper from "@/components/mmw";

const images = [
  { src: "/img/img13.png", width: 270, height: 50 },
  { src: "/img/img16.png", width: 270, height: 50 },
  { src: "/img/img19.png", width: 270, height: 50 },
  { src: "/img/img20.png", width: 270, height: 50 },
];

const Previous = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "0.4 1"],
  });

  return (
    <section className="relative text-gray-300 py-28 bg-cover bg-center">
      
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/img/coolbgno.png')",
          opacity: 0.5, 
          zIndex: -1, 
        }}
      />

      <MaxWidthWrapper>
        <div className="container mx-auto px-4">
          <div className="container mx-auto px-4 flex flex-col gap-5 md:flex-row items-center">
            <motion.div
              ref={ref}
              style={{
                scale: scrollYProgress,
                opacity: scrollYProgress,
              }}
              className="grid grid-cols-2 grid-rows-2 gap-1"
            >
              {images.map((image, index) => (
                <div key={index}>
                  <Image
                    src={image.src}
                    width={image.width}
                    height={image.height}
                    alt={`Event Image ${index + 1}`}
                  />
                </div>
              ))}
            </motion.div>
            <div className="md:w-1/2">
              <h2 className="text-4xl text-[#c7d2fe] md:text-5xl font-bold mb-4">
                ISA In HIT
              </h2>
              <p className="text-lg md:text-xl mb-8">
                The International Society of Automation (ISA) chapter at Haldia
                Institute of Technology (HIT) is a student-run organization
                affiliated with the global ISA network. It provides students
                with opportunities to learn about automation and control
                systems, participate in workshops and seminars, and connect with
                professionals in the field. The chapter aims to bridge the gap
                between academic knowledge and industry practices, offering
                members access to resources, certifications, and networking
                events that can enhance their careers in automation and related
                fields.
              </p>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Previous;
