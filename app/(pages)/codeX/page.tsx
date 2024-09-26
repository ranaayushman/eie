"use client";

import Carousel3D from "@/components/Carousel3D";

const CarouselPage = () => {
  const images = [
    "/codex/img1.jpg",
    "/codex/img2.jpg",
    "/codex/img3.jpg",
    "/codex/img4.jpg",
    "/codex/img5.jpg",
  ];

  return (
    <div>
      <h1 className="text-center text-[#c7d2fe] font-semibold text-6xl pb-20">
        Event: CodeX
      </h1>
      <div className="w-full justify-center flex items-center mx-auto mb-12 text-center">
        <p className="text-gray-200 text-xl">
          CodeX, organized by the ISA HIT Students Chapter, was a two-day coding
          competition held on September 4th and 6th. The first round, an
          aptitude test, assessed participants&apos; logical reasoning and
          problem-solving skills. The second round, held on September 6th, was a
          coding challenge where competitors solved practical programming
          problems under time constraints.
        </p>
      </div>
      <Carousel3D images={images} />
    </div>
  );
};

export default CarouselPage;
