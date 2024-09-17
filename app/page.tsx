import React from 'react'
import Navbar from './section/Navbar'
import Hero from './section/Hero'
import Footer from './section/Footer'
import NoticeBoard from './section/Notice'
import Previous from './section/Previous'
import Socials from './section/Socials'
import Testimonial from './section/Testimonial'
import PastEvents from './section/PastEvents'
import NavbarTwo from './section/NavbarTwo'


const page = () => {
  return (
    <div>
      <Navbar />
      {/* <NavbarTwo /> */}
      <Hero />
      <Previous />
      <PastEvents />
      <NoticeBoard />
      <Socials />
      <Testimonial />
      <Footer />
    </div>
  )
}

export default page;