'use client';
import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquareText } from 'lucide-react';

const FaqSection = () => {
  const [activeFAQ, setActiveFAQ] = useState(1);
  const [currentIndex, setCurrentIndex] = useState(0);

  const faqs = [
    {
      question: 'Do you work on freelance or remote projects?',
      answer:
        'Yes, I work on both freelance and remote projects. I collaborate with clients and teams worldwide, using tools like Slack, Zoom, and project management platforms to ensure smooth communication and delivery.',
    },
    {
      question: 'What technologies do you work with?',
      answer:
        'I mainly work with HTML, CSS, JavaScript, and frameworks like React, Next.js, and Vue. I also have experience using Tailwind CSS, TypeScript, and working with APIs.',
    },
    {
      question: 'Can you convert Figma or Sketch designs into code?',
      answer:
        'Absolutely! I specialize in converting Figma and Sketch designs into pixel-perfect, responsive code. I ensure the final product matches the design exactly while maintaining clean, semantic HTML and optimized CSS.',
    },
    {
      question: 'Do you collaborate with backend developers or teams?',
      answer:
        'Yes, I regularly collaborate with backend developers and cross-functional teams. I have experience integrating APIs, working with version control systems like Git, and following agile development practices.',
    },
    {
      question: 'Are you available for full-time roles?',
      answer:
        'I am open to discussing full-time opportunities that align with my skills and career goals. I value companies that prioritize innovation, good work-life balance, and opportunities for professional growth.',
    },
  ];

  return (
    <section id='faq' className='py-20 px-6 lg:px-32'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row lg:justify-between lg:items-center mb-12'>
          <div className='max-w-lg mb-6 lg:mb-0'>
            <h2 className='text-5xl font-bold mb-4'>Still Got Questions?</h2>
            <p className='text-[#A4A7AE]'>
              I&apos;ve listed answers to questions I often get as a frontend
              developer.
            </p>
          </div>
          <div className='flex gap-3 order-1 lg:order-none mb-6 lg:mb-0'>
            <button
              onClick={() => setCurrentIndex(Math.max(0, currentIndex - 1))}
              disabled={currentIndex === 0}
              className={`px-6 py-3 border border-[#22252B] bg-black transition-colors ${
                currentIndex === 0
                  ? 'text-gray-500 cursor-not-allowed'
                  : 'text-white hover:bg-gray-900'
              }`}
            >
              Prev
            </button>
            <button
              onClick={() =>
                setCurrentIndex(Math.min(faqs.length - 1, currentIndex + 1))
              }
              disabled={currentIndex === faqs.length - 1}
              className={`px-6 py-3 border border-[#22252B] bg-black transition-colors ${
                currentIndex === faqs.length - 1
                  ? 'text-gray-500 cursor-not-allowed'
                  : 'text-white hover:bg-gray-900'
              }`}
            >
              Next
            </button>
          </div>
        </div>

        <div className='overflow-hidden'>
          <div
            className='flex gap-5 transition-transform duration-500 ease-in-out'
            style={{ transform: `translateX(-${currentIndex * (252 + 20)}px)` }}
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`p-5 border border-[#22252B] h-[466px] flex flex-col justify-between cursor-pointer overflow-hidden flex-shrink-0 transition-all duration-500 ease-in-out ${
                  activeFAQ === index
                    ? 'bg-[#075864] w-[379px]'
                    : 'bg-black w-[252px]'
                }`}
                onClick={() => setActiveFAQ(activeFAQ === index ? -1 : index)}
              >
                <div className='flex justify-between items-top'>
                  <AnimatePresence>
                    {activeFAQ === index && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: 20 }}
                        transition={{ duration: 0.3, ease: 'easeOut' }}
                        className='w-24 h-24 bg-[#149BB0] rounded-full flex items-center justify-center'
                      >
                        <Image
                          src='/images/person-5.png'
                          alt='Edwin'
                          width={80}
                          height={80}
                          className='w-20 h-20 object-cover rounded-full'
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                  <MessageSquareText className='w-10 h-10 text-white' />
                </div>

                <div className='overflow-hidden'>
                  <h3 className='text-2xl font-semibold mb-3 leading-tight'>
                    {faq.question}
                  </h3>
                  <AnimatePresence>
                    {activeFAQ === index && faq.answer && (
                      <motion.div
                        initial={{ opacity: 0, height: 0, y: 10 }}
                        animate={{ opacity: 1, height: 'auto', y: 0 }}
                        exit={{ opacity: 0, height: 0, y: 10 }}
                        transition={{ duration: 0.4, ease: 'easeInOut' }}
                        className='max-h-32 overflow-y-auto'
                      >
                        <motion.p
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.1, duration: 0.3 }}
                          className='text-[#FDFDFD] leading-relaxed text-sm break-words'
                        >
                          {faq.answer}
                        </motion.p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
