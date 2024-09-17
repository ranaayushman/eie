import Event from "@/components/Event";
import MaxWidthWrapper from "@/components/mmw";
import React from "react";

const PastEvents = () => {
  return (
    <section className="text-gray-300 py-8 md:py-16">
      <MaxWidthWrapper>
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl mb-6 text-[#c7d2fe] font-bold text-center">
            Recent Events
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl mb-4">Event: CodeX</h2>
              <p className="text-base md:text-lg">
                CodeX, organized by the ISA HIT Students Chapter, was a two-day
                coding competition held on September 4th and 6th. The first
                round, an aptitude test, assessed participants&apos; logical
                reasoning and problem-solving skills. The second round, held on
                September 6th, was a coding challenge where competitors solved
                practical programming problems under time constraints.
              </p>
            </div>
            <div>
              <Event />
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default PastEvents;
