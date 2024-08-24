"use client";

import Image from "next/image";

import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import MaxWidthWrapper from "@/components/mmw";

const Previous = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "0.4 1"],
  });
  return (
    <section className=" text-gray-300 py-12">
      <MaxWidthWrapper>
        <div className="container mx-auto px-4">
          {/* Images should be replaced with proper portrait and landscape images so that the grid layout can be maintained */}
          <div className="container mx-auto px-4 flex flex-col gap-5 md:flex-row items-center">
            <motion.div
              ref={ref}
              style={{
                scale: scrollYProgress,
                opacity: scrollYProgress,
              }}
              className="grid grid-cols-3 grid-rows-5 gap-4 md:w-1/2 mb-8"
            >
              <div className="row-span-3 border-1 ">
                <Image
                  src="/img/limg18.png"
                  width={300}
                  height={200}
                  alt=""
                  className="h-full w-full rounded-xl shadow-xl"
                />
              </div>
              <div className="col-span-2 row-span-2 rounded-lg">
                <Image
                  src="/img/img20.png"
                  width={300}
                  height={200}
                  alt=""
                  className="h-full w-full rounded-xl shadow-xl"
                />
              </div>
              <div className="row-span-3 col-start-3 row-start-3">
                <Image
                  src="/img/limg7.png"
                  width={300}
                  height={200}
                  alt=""
                  className="h-full w-full rounded-xl shadow-xl"
                />
              </div>
              <div className="row-span-3 col-start-2 row-start-3">
                <Image
                  src="/img/limg14.png"
                  width={300}
                  height={200}
                  alt=""
                  className="h-full w-full rounded-xl shadow-xl"
                />
              </div>
              <div className="row-span-2 row-start-4">
                <Image
                  src="/img/img10_1.png"
                  width={300}
                  height={200}
                  alt=""
                  className="h-full w-full rounded-xl shadow-xl"
                />
              </div>
            </motion.div>
            <div className="md:w-1/2">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
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
                fields.{" "}
              </p>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Previous;
