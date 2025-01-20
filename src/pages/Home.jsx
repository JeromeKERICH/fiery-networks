
import ContactPage from '../components/Contact';
import CourseSection from '../components/Courses';
import CTASection from '../components/CTA';

import HeroSection from '../components/Hero';
import Projects from '../components/Projects';
import Testimonials from '../components/Testimonials';

import WhySection from '../components/Why';

const Home = () => {
  return (
    <div>
      <HeroSection/>
      <WhySection/>
      <CTASection/>
      <CourseSection/>
      <Projects/>
      <Testimonials/>
     
      <ContactPage/>
    </div>
  )
}

export default Home
