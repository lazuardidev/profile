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
import { ThemeProvider } from '@/contexts/ThemeContext';

const Home = () => {
  return (
    <ThemeProvider>
      <div className='bg-white dark:bg-base-black min-h-screen transition-colors duration-300'>
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
    </ThemeProvider>
  );
};

export default Home;
