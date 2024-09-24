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
      <h1 className="text-center text-3xl my-20">3D Cube Carousel</h1>
      <Carousel3D images={images} />
    </div>
  );
};

export default CarouselPage;
