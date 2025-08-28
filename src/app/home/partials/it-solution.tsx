import { motion, useScroll, useTransform } from 'framer-motion';
import React from 'react';

import { Check, X } from 'lucide-react';

export const ItSolutionSection: React.FC = () => {
  const { scrollY } = useScroll();
  const y2 = useTransform(scrollY, [0, 300], [0, -100]);

  return (
    <section className='py-10 md:py-20 px-4 md:px-6 lg:px-32 relative bg-black'>
      {/* Background Effects */}
      <div className='absolute inset-0 pointer-events-none overflow-hidden'>
        {/* Mobile background */}
        <div className='md:hidden absolute inset-0 w-full h-full'>
          <div
            className='absolute inset-0 w-full h-full opacity-80'
            style={{
              background:
                'radial-gradient(80% 80% at 0% 100%, rgba(20, 155, 176, 0.8) 0%, rgba(20, 155, 176, 0.2) 50%, transparent 100%)',
            }}
          />
          <div className='absolute inset-0 w-full h-full bg-gradient-to-b from-transparent via-transparent to-black/50' />
        </div>

        {/* Desktop background */}
        <motion.div
          style={{
            y: y2,
            background:
              'radial-gradient(80% 80% at 0% 100%, rgba(20, 155, 176, 0.8) 0%, rgba(20, 155, 176, 0.2) 50%, transparent 100%)',
          }}
          className='hidden md:block absolute top-0 left-0 w-full h-full opacity-80'
        />
      </div>

      <div className='container mx-auto relative z-10'>
        <div className='text-center mb-6 md:mb-12'>
          <h2 className='text-2xl md:text-5xl font-bold mb-2 md:mb-4 text-white leading-tight tracking-tight'>
            Not Your Typical Frontend Developer
          </h2>
          <p className='text-[#A4A7AE] text-sm md:text-base leading-7'>
            I care about how it looks, how it works, and how it feels — all at
            once
          </p>
        </div>

        {/* Mobile Layout */}
        <div className='md:hidden flex border border-[#22252B] bg-black p-3'>
          {/* Skills Column */}
          <div className='flex-1'>
            <div className='h-18 px-3 py-1 flex items-center border-b border-[#22252B] bg-black'>
              <span className='text-base font-semibold text-[#FDFDFD] leading-8 tracking-tight'>
                Skill
              </span>
            </div>
            {[
              'React Expert',
              'Pixel Perfect',
              'TypeScript Proficiency',
              'Clean, Maintainable Code',
              'Performance Optimization',
              'Responsive Website',
              'UI Design Proficiency (Figma)',
            ].map((skill) => (
              <div
                key={skill}
                className='h-18 px-3 py-1 flex items-center border-b border-[#22252B] last:border-b-0'
              >
                <span className='text-sm text-[#FDFDFD] leading-7'>
                  {skill}
                </span>
              </div>
            ))}
          </div>

          {/* With Me Column */}
          <div className='w-16 bg-[#0A0D12]'>
            <div className='h-18 px-3 py-2 flex items-center justify-center border-b border-white/40 bg-[#075864]'>
              <span className='text-sm font-semibold text-[#FDFDFD] leading-7'>
                With Me
              </span>
            </div>
            {Array(7)
              .fill(null)
              .map((_, index) => (
                <div
                  key={index}
                  className='h-18 px-2 py-2 border-b border-white/40 last:border-b-0 bg-[#075864] flex items-center justify-center'
                >
                  <div className='w-8 h-8 bg-white rounded-full flex items-center justify-center'>
                    <Check className='w-3.5 h-3.5 text-[#075864]' />
                  </div>
                </div>
              ))}
          </div>

          {/* Other Column */}
          <div className='w-16 bg-[#22252B]'>
            <div className='h-18 px-3 py-2 flex items-center justify-center border-b border-[#22252B] bg-black'>
              <span className='text-sm font-semibold text-[#FDFDFD] leading-7'>
                Other
              </span>
            </div>
            {Array(7)
              .fill(null)
              .map((_, index) => (
                <div
                  key={index}
                  className='h-18 px-2 py-2 border-b border-[#22252B] last:border-b-0 bg-black flex items-center justify-center'
                >
                  <div className='w-8 h-8 bg-[#414651] rounded-full flex items-center justify-center'>
                    <X className='w-3.5 h-3.5 text-[#0A0D12]' />
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* Desktop Layout */}
        <div className='hidden md:grid grid-cols-3 border border-[#22252B] bg-black'>
          {/* Skill Column */}
          <div className='border-r border-[#22252B]'>
            <div className='p-6 border-b border-[#22252B] bg-black'>
              <h3 className='text-2xl font-semibold'>Skill</h3>
            </div>
            {[
              'React Expert',
              'Pixel Perfect',
              'TypeScript Proficiency',
              'Clean, Maintainable Code',
              'Performance Optimization',
              'Responsive Website',
              'UI Design Proficiency (Figma)',
            ].map((skill) => (
              <div
                key={skill}
                className='p-6 border-b border-[#22252B] last:border-b-0'
              >
                <span className='text-lg'>{skill}</span>
              </div>
            ))}
          </div>

          {/* With Me Column */}
          <div className='border-r border-[#22252B] bg-[#0A0D12]'>
            <div className='p-6 border-b border-white/40 bg-[#075864]'>
              <h3 className='text-2xl font-semibold'>With Me</h3>
            </div>
            {Array(7)
              .fill(null)
              .map((_, index) => (
                <div
                  key={index}
                  className='p-6 border-b border-white/40 last:border-b-0 bg-[#075864] flex items-center'
                >
                  <div className='w-7 h-7 bg-white rounded-full flex items-center justify-center'>
                    <Check className='w-4 h-4 text-[#075864]' />
                  </div>
                </div>
              ))}
          </div>

          {/* Other Column */}
          <div className='bg-[#22252B]'>
            <div className='p-6 border-b border-[#22252B] bg-black'>
              <h3 className='text-2xl font-semibold'>Other</h3>
            </div>
            {Array(7)
              .fill(null)
              .map((_, index) => (
                <div
                  key={index}
                  className='p-6 border-b border-[#22252B] last:border-b-0 bg-black flex items-center'
                >
                  <div className='w-7 h-7 bg-[#414651] rounded-full flex items-center justify-center'>
                    <X className='w-4 h-4 text-[#0A0D12]' />
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};
