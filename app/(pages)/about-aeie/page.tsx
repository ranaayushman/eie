import MaxWidthWrapper from "@/components/mmw";
import React from "react";

const AboutAEIE: React.FC = () => {
  return (
    <section
      id="AEIE"
      // style={{
      //   backgroundImage: "url('/img/coolbgno.png')",
      // }}
      className="px-6 py-12 text-gray-200 bg-cover"
    >
       <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/img/coolbgno.png')",
          opacity: 0.5, // Adjust opacity here
          zIndex: -1, // Ensure it is behind other content
        }}
      />
      <MaxWidthWrapper>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-[#c7d2fe] mb-6">
            About AEIE Department
          </h1>
          <p className="text-xl text-gray-300 mb-4">
            The Department of Applied Electronics & Instrumentation Engineering,
            under the School of Engineering at HIT Haldia, is led by Head Prof.
            Dr. Uday Maji. The department offers a B.Tech program with 60 seats
            and focuses on producing quality graduates who excel in engineering,
            research, entrepreneurship, and management.
          </p>

          <h2 className="text-2xl font-bold text-[#c7d2fe] mb-4">
            Vision & Mission
          </h2>
          <p className="text-xl text-gray-300 mb-4">
            The department strives for excellence in academic and research by
            fostering innovation and contributing to society through teaching,
            research, and industry collaboration.
          </p>

          <h2 className="text-2xl font-bold text-[#c7d2fe] mb-4">
            Programme Educational Objectives (PEOs)
          </h2>
          <ul className="text-xl text-gray-300 list-disc list-inside mb-4">
            <li>
              To develop technical skills for problem-solving in industry and
              research.
            </li>
            <li>
              Prepare students for lifelong learning and adaptability to
              technological changes.
            </li>
            <li>Instill teamwork, leadership, and societal responsibility.</li>
          </ul>

          <h2 className="text-2xl font-bold text-[#c7d2fe] mb-4">
            Programme Outcomes (POs)
          </h2>
          <p className="text-xl text-gray-300 mb-4">
            The program ensures that graduates apply engineering knowledge,
            develop modern tools, work effectively in teams, and commit to
            sustainable practices, ethics, and communication.
          </p>

          <h2 className="text-2xl font-bold text-[#c7d2fe] mb-4">Contact Us</h2>
          <p className="text-xl text-gray-300">
            Phone: +91 91430 98701 <br />
            Email: hodaeie.hit@gmail.com
          </p>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default AboutAEIE;
