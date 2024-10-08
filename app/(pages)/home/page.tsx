import Hero from "@/app/section/Hero"
import Notice from "@/app/section/Notice"
import PastEvents from "@/app/section/PastEvents"
import Previous from "@/app/section/Previous"
import Socials from "@/app/section/Socials"
import Testimonial from "@/app/section/Testimonial"



const Main = () => {
  return (
    <div>
        <Hero />
        <Previous />
        <PastEvents />
        <Notice />
        <Socials />
        <Testimonial />
    </div>
  )
}

export default Main