import EventCarousel_1 from "@/components/gallery/Event1";
import EventCarousel_2 from "@/components/gallery/Event2";
import EventCarousel_3 from "@/components/gallery/Event3";
import MaxWidthWrapper from "@/components/mmw";
import React from "react";

const page = () => {
  return (
    <div className="mt-20">
        <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/img/coolbgno.png')",
          opacity: 0.5, // Adjust opacity here
          zIndex: -1, // Ensure it is behind other contentF
        }}
      />
      <MaxWidthWrapper>
        <div>
          <h1 className="text-6xl text-[#c7d2fe] text-center">
            Event : CodeX
          </h1>
          <div className="p-10">
            <EventCarousel_1 />
          </div>
          <div className="p-10">
            <EventCarousel_2 />
          </div>
          <div className="p-10">
            <EventCarousel_3 />
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default page;
