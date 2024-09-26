// page.tsx
import MaxWidthWrapper from "@/components/mmw";
import React from "react";

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start p-4">
      <MaxWidthWrapper>
        <header className="w-full max-w-5xl flex justify-between items-center py-6 px-4 shadow-lg rounded-lg">
          <h1 className="text-5xl font-bold text-[#c7d2fe]">
            The Instrument Society of India (ISOI)
          </h1>
        </header>

        <section className="w-full max-w-5xl mt-8 flex flex-col md:flex-row items-center shadow-lg rounded-lg overflow-hidden">
          {/* <img
          src="/images/isoi-logo.png" 
          alt="ISOI Logo"
          className="w-full md:w-1/2 h-64 object-cover"
        /> */}
          <div
            className="absolute inset-0 bg-contain bg-center bg-repeat-y"
            style={{
              backgroundImage: "url('/img/coolbgno.png')",
              opacity: 0.5, // Adjust opacity here
              zIndex: -1, // Ensure it is behind other content
            }}
          />
          <div className="p-6 md:w-1/2 flex flex-col items-start">
            <h2 className="text-3xl font-semibold text-gray-200 mb-4">
              Empowering Instrumentation Professionals
            </h2>
            <p className="text-gray-200 text-xl">
              The Instrument Society of India (ISOI) was established with the
              aim of promoting the growth and knowledge of instrumentation in
              India. It serves as a platform for professionals, students, and
              enthusiasts to collaborate and share advancements in the field of
              instrumentation.
            </p>
          </div>
        </section>

        <section className="w-full max-w-5xl mt-8  shadow-lg rounded-lg p-6 flex flex-col space-y-6">
          <h3 className="text-3xl font-semibold text-gray-200">About ISOI</h3>
          <p className="text-gray-200 text-xl">
            ISOI provides an excellent opportunity for engineers, scientists,
            and students to expand their knowledge and network with peers in the
            industry. The society organizes workshops, seminars, and conferences
            to facilitate learning and professional development.
          </p>
          <p className="text-gray-200">
            Our vision is to create a vibrant community of instrumentation
            professionals who contribute to the technological advancements in
            India and beyond. By joining ISOI, members gain access to a vast
            repository of resources and a network of like-minded professionals.
          </p>
          <p className="text-gray-200">
            ISOI chapters across various institutions play a significant role in
            nurturing young talents and providing them with the platform to
            showcase their skills and innovations in the field of
            instrumentation.
          </p>
        </section>
      </MaxWidthWrapper>
    </div>
  );
};

export default AboutPage;
