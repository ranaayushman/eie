import MaxWidthWrapper from "@/components/mmw";
import React from "react";

const About: React.FC = () => {
  return (
    <section
      id="ISA"
      // style={{
      //   backgroundImage: "url('/img/coolbgno.png')",
      // }}
      className="text-gray-200 py-10 md:px-0 bg-cover"
    >
      <div
        className="absolute inset-0 bg-contain bg-center bg-repeat-y"
        style={{
          backgroundImage: "url('/img/coolbgno.png')",
          opacity: 0.5, // Adjust opacity here
          zIndex: -1, // Ensure it is behind other content
        }}
      />
      <MaxWidthWrapper>
        <div className="max-w-7xl mx-auto">
          {/* Title */}
          <h1 className="text-4xl text-[#c7d2fe] font-bold text-center mb-8">
            About ISA
          </h1>

          {/* Introduction */}
          <div className="mb-8">
            <p className="text-xl leading-relaxed text-justify">
              The International Society of Automation (ISA) is a nonprofit
              professional association founded to create a better world through
              automation. We aim to advance technical competence by connecting
              the automation community to achieve operational excellence. Our
              mission is to enhance the advancement of automation and control
              systems for the benefit of the industry and society at large.
            </p>
          </div>

          {/* History */}
          <div className="mb-8">
            <h2 className="text-2xl text-[#c7d2fe] font-semibold mb-4">
              Our History
            </h2>
            <p className="text-xl leading-relaxed text-justify">
              ISA was established in 1945 to support professionals involved in
              the design and implementation of automation systems. Over the
              years, we have grown into an international organization with a
              strong presence worldwide. Through training, conferences, and
              certifications, ISA provides industry professionals with
              opportunities to enhance their skills and stay at the forefront of
              automation technology.
            </p>
          </div>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div
              className="absolute inset-0 bg-contain bg-center bg-repeat-y"
              style={{
                backgroundImage: "url('/img/coolbgno.png')",
                opacity: 0.5, // Adjust opacity here
                zIndex: -1, // Ensure it is behind other content
              }}
            />
            <div>
              <h2 className="text-2xl text-[#c7d2fe] font-semibold mb-4">
                Our Mission
              </h2>
              <p className="text-xl leading-relaxed">
                ISA’s mission is to empower the global automation community
                through networking, knowledge sharing, and training, ensuring
                professionals stay at the cutting edge of technological
                advancements.
              </p>
            </div>
            <div>
              <h2 className="text-2xl text-[#c7d2fe] font-semibold mb-4">
                Our Vision
              </h2>
              <p className="text-xl leading-relaxed">
                Our vision is to be the leading global organization in
                automation and control, fostering professional growth and
                advancing the automation industry’s future.
              </p>
            </div>
          </div>

          {/* Core Values */}
          <div className="mb-8">
            <h2 className="text-2xl text-[#c7d2fe] font-semibold mb-4">
              Core Values
            </h2>
            <ul className="list-disc list-inside text-xl">
              <li className="mb-2">Integrity and Ethics in all our actions</li>
              <li className="mb-2">
                Commitment to lifelong learning and professional growth
              </li>
              <li className="mb-2">
                Collaboration and knowledge sharing within the automation
                community
              </li>
              <li className="mb-2">
                Pursuit of excellence in automation practices
              </li>
              <li className="mb-2">
                Inclusion and diversity in the global automation community
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          {/* <div className="text-center">
            <h2 className="text-2xl text-[#c7d2fe] font-semibold mb-4">Get in Touch</h2>
            <p className="text-xl mb-4">
              For more information about ISA and our services, feel free to
              contact us at:
            </p>
            <p className="text-xl font-bold">Email: info@isa.org</p>
            <p className="text-xl font-bold">Phone: +1 (919) 549-8411</p>
          </div> */}
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default About;
