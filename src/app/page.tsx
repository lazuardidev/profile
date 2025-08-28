'use client';

import {
  Navbar,
  About,
  Portfolio,
  Faq,
  Hero,
  Skills,
  Tools,
  Experience,
  Testimonial,
  Expertise,
  Contact,
} from '@/app/home/partials';

const Home = () => {
  return (
    <div className='bg-base-black min-h-screen'>
      <Navbar />
      <Hero />
      <Expertise />
      <About />
      <Tools />
      <Skills />
      <Portfolio />
      <Experience />
      <Testimonial />
      <Faq />
      <Contact />
    </div>
  );
};

export default Home;
