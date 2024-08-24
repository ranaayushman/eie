import React from 'react'
import Navbar from './section/Navbar'
import Hero from './section/Hero'
import Footer from './section/Footer'
import NoticeBoard from './section/Notice'
import Previous from './section/Previous'
import Socials from './section/Socials'


const page = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Previous />
      <NoticeBoard />
      <Socials />
      <Footer />
    </div>
  )
}

export default page;