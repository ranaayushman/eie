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
      <h1 className="text-center text-[#c7d2fe] font-semibold text-6xl pb-20">Event: CodeX</h1>
      <Carousel3D images={images} />
    </div>
  );
};

export default CarouselPage;
