'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Portfolio() {
  const portfolioItems = [
    {
      title: 'Portfolio 1',
      year: '2025',
      image: '/images/portfolio-1.jpg',
    },
    {
      title: 'Portfolio 2',
      year: '2025',
      image: '/images/portfolio-2.jpg',
    },
    {
      title: 'Portfolio 3',
      year: '2025',
      image: '/images/portfolio-3.jpg',
    },
  ];

  return (
    <section
      id='projects'
      className='py-10 md:py-20 px-4 md:px-6 lg:px-32 bg-black'
    >
      <div className='container mx-auto'>
        <div className='text-center mb-6 md:mb-12'>
          <h2 className='text-2xl md:text-5xl font-bold mb-2 md:mb-4 text-white leading-tight tracking-tight'>
            Bridging Design and Development
          </h2>
          <p className='text-[#A4A7AE] text-sm md:text-base leading-7'>
            These are real projects where I implemented frontend interfaces with
            precision and attention to detail.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8'>
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, margin: '-100px' }}
              className='group cursor-pointer'
            >
              <div className='relative overflow-hidden rounded-xl md:rounded-2xl mb-4 md:mb-6 aspect-square'>
                <Image
                  src={item.image}
                  alt={item.title}
                  width={400}
                  height={400}
                  className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
              </div>
              <div className='space-y-1 md:space-y-2'>
                <h3 className='text-lg md:text-xl font-semibold text-white group-hover:text-[#149BB0] transition-colors duration-300'>
                  {item.title}
                </h3>
                <p className='text-[#A4A7AE] text-sm md:text-base'>
                  {item.year}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
