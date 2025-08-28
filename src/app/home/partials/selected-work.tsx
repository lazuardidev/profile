import { useState, useEffect } from 'react';
import Image from 'next/image';

import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const SelectedWork = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const getTransformValue = () => {
    if (isMobile) {
      return `${-currentIndex * 100}%`;
    } else {
      return -currentIndex * 564;
    }
  };

  const experiences = [
    {
      title: 'Frontend Developer',
      duration: '2025 - Present',
      company: 'Airbnb',
      image: '/icons/icon-airbnb.svg',
      description:
        'Built responsive web interfaces using modern frameworks like React.js, ensuring seamless integration with backend systems. Optimized performance, implemented accessible designs, and delivered clean, reusable code to enhance user experience and scalability.',
    },
    {
      title: 'Frontend Developer',
      duration: '2024 - 2025',
      company: 'Dribble',
      image: '/icons/icon-dribble.svg',
      description:
        'Built responsive web interfaces using modern frameworks like React.js, ensuring seamless integration with backend systems. Optimized performance, implemented accessible designs, and delivered clean, reusable code to enhance user experience and scalability.',
    },
    {
      title: 'Frontend Developer',
      duration: '2023 - 2024',
      company: 'Zoom',
      image: '/icons/icon-zoom.svg',
      description:
        'Built responsive web interfaces using modern frameworks like React.js, ensuring seamless integration with backend systems. Optimized performance, implemented accessible designs, and delivered clean, reusable code to enhance user experience and scalability.',
    },
  ];

  return (
    <section className='py-10 md:py-20 px-4 md:px-6 lg:px-32 bg-black'>
      <div className='container mx-auto'>
        <div className='mb-6 md:mb-12'>
          <h2 className='text-2xl md:text-5xl font-bold mb-2 md:mb-4 text-white leading-tight tracking-tight'>
            My Journey in Tech
          </h2>
          <p className='text-[#A4A7AE] text-sm md:text-base leading-7'>
            From small gigs to real-world challenges — each experience helped me
            grow as a builder and problem-solver.
          </p>
        </div>

        <div className='overflow-hidden'>
          <motion.div
            className='flex transition-transform duration-500 ease-in-out'
            animate={{ x: getTransformValue() }}
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className='w-full md:w-[564px] flex-shrink-0 px-3'
              >
                <div className='border border-[#22252B] bg-black relative'>
                  <div className='absolute left-0 top-6 w-1 h-12 bg-[#149BB0] rounded-r-full' />
                  <div className='p-6 pl-8'>
                    <div className='flex justify-between items-start mb-6'>
                      <div>
                        <h3 className='text-xl font-bold mb-2 text-white'>
                          {exp.title}
                        </h3>
                        <p className='text-white'>{exp.duration}</p>
                      </div>
                      <svg
                        className='w-6 h-6 text-gray-400'
                        viewBox='0 0 24 24'
                        fill='currentColor'
                      >
                        <path d='M4 21C3.45 21 2.97933 20.8043 2.588 20.413C2.19667 20.0217 2.00067 19.5507 2 19V8C2 7.45 2.196 6.97933 2.588 6.588C2.98 6.19667 3.45067 6.00067 4 6H8V4C8 3.45 8.196 2.97933 8.588 2.588C8.98 2.19667 9.45067 2.00067 10 2H14C14.55 2 15.021 2.196 15.413 2.588C15.805 2.98 16.0007 3.45067 16 4V6H20C20.55 6 21.021 6.196 21.413 6.588C21.805 6.98 22.0007 7.45067 22 8V19C22 19.55 21.8043 20.021 21.413 20.413C21.0217 20.805 20.5507 21.0007 20 21H4ZM4 19H20V8H4V19ZM10 6H14V4H10V6Z' />
                      </svg>
                    </div>
                    <div className='h-px bg-gray-600 mb-6' />
                    <p className='text-gray-600 mb-6 leading-relaxed'>
                      {exp.description}
                    </p>
                    <div className='flex justify-between items-center'>
                      <div className='flex items-center gap-3'>
                        <Image
                          src={exp.image}
                          alt={exp.company}
                          width={128}
                          height={48}
                          className='w-32 h-12 object-contain'
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className='mt-8 space-y-4'>
          {/* Progress indicator */}
          <div className='flex justify-center my-4 mb-4'>
            <div className='relative w-64 h-1 bg-gray-600 rounded-full overflow-hidden'>
              <div
                className='absolute left-0 top-0 h-full bg-[#149BB0] rounded-full transition-all duration-500 ease-in-out'
                style={{
                  width: `${((currentIndex + 1) / experiences.length) * 100}%`,
                }}
              />
            </div>
          </div>

          <div className='flex gap-3'>
            <button
              onClick={() => setCurrentIndex(Math.max(0, currentIndex - 1))}
              disabled={currentIndex === 0}
              className={`px-6 py-3 border border-[#22252B] bg-black hover:bg-gray-900 transition-colors flex items-center gap-2 ${
                currentIndex === 0
                  ? 'text-gray-500 cursor-not-allowed'
                  : 'text-white'
              }`}
            >
              <ChevronLeft className='w-4 h-4' />
              Prev
            </button>
            <button
              onClick={() =>
                setCurrentIndex(
                  Math.min(experiences.length - 1, currentIndex + 1)
                )
              }
              disabled={currentIndex === experiences.length - 1}
              className={`px-6 py-3 border border-[#22252B] bg-black hover:bg-gray-900 transition-colors flex items-center gap-2 ${
                currentIndex === experiences.length - 1
                  ? 'text-gray-500 cursor-not-allowed'
                  : 'text-white'
              }`}
            >
              Next
              <ChevronRight className='w-4 h-4' />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SelectedWork;
