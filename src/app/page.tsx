'use client';

import Navbar from '@/app/home/partials/navbar';

import AchievementsSection from './home/partials/achievements-section';
import IndustrySection from './home/partials/build-your-industry';
import FaqSection from './home/partials/faq-section';
import Hero from './home/partials/hero';
import { ItSolutionSection } from './home/partials/it-solution';
import ProfesionalWork from './home/partials/profesional-work';
import SelectedWork from './home/partials/selected-work';
import TestimonialSection from './home/partials/TestimonialSection';
import TrustedBy from './home/partials/trusted-by';
import Contact from './home/partials/contact';

const Home = () => {
  return (
    <div className='bg-base-black min-h-screen'>
      <Navbar />
      <Hero />
      <TrustedBy />
      <AchievementsSection />
      <ProfesionalWork />
      <ItSolutionSection />
      <IndustrySection />
      <SelectedWork />
      <TestimonialSection />
      <FaqSection />
      <Contact />
    </div>
  );
};

export default Home;
