import MaxWidthWrapper from "@/components/mmw";
import React from "react";

const About: React.FC = () => {
  return (
    <section id="ISA" className="text-gray-200 py-10 md:px-0 bg-cover">
      <div
        className="absolute inset-0 bg-contain bg-center bg-repeat-y"
        style={{
          backgroundImage: "url('/img/coolbgno.png')",
          opacity: 0.5,
          zIndex: -1,
        }}
      />
      <MaxWidthWrapper>
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl text-[#c7d2fe] font-bold text-center mb-8">
            The Instrument Society of India (ISOI)
          </h1>

          <div className="mb-8">
            <h2 className="text-2xl text-[#c7d2fe] font-semibold mb-4">
              Empowering Instrumentation Professionals
            </h2>
            <p className="text-xl leading-relaxed text-justify">
              The Instrument Society of India (ISOI) was established with the
              aim of promoting the growth and knowledge of instrumentation in
              India. It serves as a platform for professionals, students, and
              enthusiasts to collaborate and share advancements in the field of
              instrumentation.
            </p>
          </div>

          <div className="gap-6 mb-8">
            <div
              className="absolute inset-0 bg-contain bg-center bg-repeat-y"
              style={{
                backgroundImage: "url('/img/coolbgno.png')",
                opacity: 0.5,
                zIndex: -1,
              }}
            />
            <div>
              <h2 className="text-2xl text-[#c7d2fe] font-semibold mb-4">
                About ISOI
              </h2>
              <p className="text-gray-200 text-xl">
                ISOI provides an excellent opportunity for engineers,
                scientists, and students to expand their knowledge and network
                with peers in the industry. The society organizes workshops,
                seminars, and conferences to facilitate learning and
                professional development.
              </p>
              <p className="text-gray-200">
                Our vision is to create a vibrant community of instrumentation
                professionals who contribute to the technological advancements
                in India and beyond. By joining ISOI, members gain access to a
                vast repository of resources and a network of like-minded
                professionals.
              </p>
              <p className="text-gray-200">
                ISOI chapters across various institutions play a significant
                role in nurturing young talents and providing them with the
                platform to showcase their skills and innovations in the field
                of instrumentation.
              </p>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default About;
