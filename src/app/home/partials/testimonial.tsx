'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

export default function Testimonial() {
  const testimonials = [
    {
      rating: 5,
      metric: '8X',
      title: 'More users converted after redesign',
      text: 'Working with Lazuardi has been a fantastic experience. His attention to detail and commitment to quality are evident in every project. He consistently delivers results that exceed expectations, making him a valuable asset to any team.',
      author: 'Pablo Stanley',
      image: '/images/person-1.png',
      role: 'Product Manager at Finovate',
      featured: true,
    },
    {
      rating: 5,
      metric: '3X',
      title: 'Improved user engagement and sign-ups',
      text: "Lazuardi's expertise in frontend development is remarkable. He brings creativity and innovation to the table, ensuring that every project is not only functional but also visually appealing.",
      author: 'Pablo Stanley',
      image: '/images/person-2.png',
      role: 'Product Manager at Finovate',
    },
    {
      rating: 5,
      text: "Lazuardi's work ethic and dedication are truly inspiring. He approaches challenges with a positive attitude and consistently finds effective solutions.",
      author: 'Pablo Stanley',
      image: '/images/person-3.png',
      role: 'Product Manager at Finovate',
    },
    {
      rating: 5,
      text: 'Lazuardi has a unique ability to transform complex ideas into user-friendly designs. His contributions have significantly enhanced our projects.',
      author: 'Pablo Stanley',
      image: '/images/person-4.png',
      role: 'Product Manager at Finovate',
    },
  ];

  const renderStars = (rating: number) => (
    <div className='flex gap-1 mb-4'>
      {Array(rating)
        .fill(null)
        .map((_, i) => (
          <Star key={i} className='w-6 h-6 fill-[#F3B64C] text-[#F3B64C]' />
        ))}
    </div>
  );

  const renderAuthorInfo = (testimonial: (typeof testimonials)[0]) => (
    <div className='flex justify-between items-end mt-4'>
      <div className='flex items-center gap-4'>
        <Image
          src={testimonial.image}
          alt={testimonial.author}
          width={48}
          height={48}
          className='w-12 h-12 rounded-full object-cover'
        />
        <div>
          <div className='font-semibold'>{testimonial.author}</div>
          <div className='text-sm text-[#FDFDFD]'>{testimonial.role}</div>
        </div>
      </div>
      <svg
        className='w-12 h-12 text-[#22252B]'
        viewBox='0 0 48 48'
        fill='currentColor'
      >
        <path d='M5 10H22V25.3L13.036 38H7.59L12.922 26H5V10ZM26 10H43V25.3L34.036 38H28.59L33.922 26H26V10Z' />
      </svg>
    </div>
  );

  const renderTestimonialCard = (
    testimonial: (typeof testimonials)[0],
    index: number,
    className = ''
  ) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`p-5 border border-[#22252B] bg-black flex flex-col justify-between ${className} ${
        testimonial.featured
          ? 'border-[#149BB0] bg-gradient-to-br from-[#149BB0]/0 to-[#149BB0]/20'
          : ''
      }`}
    >
      <div>
        {testimonial.metric && (
          <div className='mb-2'>
            <div className='text-4xl font-bold'>{testimonial.metric}</div>
            <div className='text-xl font-semibold mb-3'>
              {testimonial.title}
            </div>
          </div>
        )}
        {renderStars(testimonial.rating)}
        <p className='text-[#A4A7AE] leading-relaxed'>{testimonial.text}</p>
      </div>
      {renderAuthorInfo(testimonial)}
    </motion.div>
  );

  return (
    <section className='py-20 px-6 lg:px-32'>
      <div className='container mx-auto'>
        <div className='text-center mb-12 max-w-2xl mx-auto'>
          <h2 className='text-5xl font-bold mb-4'>Trusted Voices</h2>
          <p className='text-[#A4A7AE]'>
            Here&apos;s what people say about working with me — across projects,
            teams, and timelines.
          </p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 lg:grid-rows-2'>
          {/* Left column - Featured testimonial spanning 2 rows */}
          {renderTestimonialCard(testimonials[0], 0, 'lg:row-span-2')}

          {/* Right column top - Single testimonial */}
          {renderTestimonialCard(testimonials[1], 1)}

          {/* Right column bottom - Two testimonials side by side */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
            {testimonials
              .slice(2)
              .map((testimonial, index) =>
                renderTestimonialCard(testimonial, index + 2)
              )}
          </div>
        </div>
      </div>
    </section>
  );
}
