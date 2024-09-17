import React from "react";
import Hero from "./section/Hero";
import NoticeBoard from "./section/Notice";
import Previous from "./section/Previous";
import Socials from "./section/Socials";
import Testimonial from "./section/Testimonial";
import PastEvents from "./section/PastEvents";

const page = () => {
  return (
    <div>
      <Hero />
      <Previous />
      <PastEvents />
      <NoticeBoard />
      <Socials />
      <Testimonial />
    </div>
  );
};

export default page;