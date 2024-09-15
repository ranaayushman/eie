import Event from "@/components/Event";
import MaxWidthWrapper from "@/components/mmw";
import React from "react";

const PastEvents = () => {
  return (
    <section className="text-gray-300">
      <MaxWidthWrapper>
        <h1 className="text-6xl mb-6 text-blue-400 font-bold">Recent Events</h1>
        <div className="grid grid-cols-2">
          <div>
            <h2 className="text-4xl mb-4">Event : CodeX</h2>
            <p className="text-lg">
              CodeX, organized by the ISA HIT Students Chapter, was a two-day
              coding competition held on September 4th and 6th. The first round,
              an aptitude test, assessed participants' logical reasoning and
              problem-solving skills. The second round, held on September 6th,
              was a coding challenge where competitors solved practical
              programming problems under time constraints.
            </p>
          </div>
          <div>
            <Event />
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default PastEvents;
