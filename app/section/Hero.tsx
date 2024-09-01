"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Welcome from "../../components/Welcome";
import MaxWidthWrapper from "@/components/mmw";
import Carousel from "@/components/Carousel";


interface CardType {
  url: string;
  title: string;
  id: number;
}

const Hero = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section className="relative text-gray-300 text-center h-full bg-contain">
      {/* Background Image with Dim Effect */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/img/coolbgno.png')",
          opacity: 0.5, // Adjust opacity here
          zIndex: -1, // Ensure it is behind other content
        }}
      />

      {/* Content Overlay */}
      <div className="relative z-10">
        <MaxWidthWrapper>
          <div>
            <div className="py-20">
              <Welcome />
            </div>
            <p className="p-10 pt-0 text-2xl">
              Welcome to The ISA HIT Students Chapter.
              <br /> Where connects students with industry experts through
              workshops and events,
              <br />
              fostering skills in automation and control for successful
              engineering careers.
            </p>
          </div>
          <div className="sticky top-0 flex h-full items-center overflow-hidden">
            <Carousel />
          </div>
        </MaxWidthWrapper>
      </div>
    </section>
  );
};

export default Hero;
