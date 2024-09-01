// Static Website without any connection to database
"use server";

import MaxWidthWrapper from "@/components/mmw";
import React from "react";
import Link from "next/link";


const notices = [
  {
    title: "Advanced Automation Workshop",
    date: "September 15, 2024",
    description:
      "Join us for an in-depth workshop on the latest advancements in industrial automation. Learn from experts and participate in hands-on sessions.",
    link: "/workshops/advanced-automation",
  },
  {
    title: "ISA HIT Students Chapter Annual Meet",
    date: "October 10, 2024",
    description:
      "Be a part of the annual gathering of ISA HIT Students Chapter. Network with professionals, attend keynote sessions, and explore future opportunities.",
    link: "/events/annual-meet",
  },
  {
    title: "IoT and Smart Systems Seminar",
    date: "November 5, 2024",
    description:
      "Explore the future of IoT and smart systems in this seminar. Discover cutting-edge technologies and their applications in industry.",
    link: "/seminars/iot-smart-systems",
  },
];

const Notice = () => {
  return (
    <section
      id="event"
      className="py-12 bg-contain bg-center"
      style={{
        backgroundImage: "url('/img/coolbgno.png')", // Set the background image
      }}
    >
      <MaxWidthWrapper>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-100 mb-8">
            Upcoming Workshops & Events
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {notices.map((notice, index) => (
              <div
                key={index}
                className="bg-blue-100 p-6 rounded-2xl shadow-lg transition-transform transform hover:scale-105 duration-300"
              >
                <h3 className="text-xl font-semibold text-blue-800 mb-2">
                  {notice.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4">{notice.date}</p>
                <p className="text-gray-700 mb-4">{notice.description}</p>
                <div>
                  <Link
                    href={notice.link}
                    className="inline-block px-4 py-2 bg-blue-500 text-white font-semibold rounded-xl hover:bg-blue-600"
                  >
                    Register Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Notice;

