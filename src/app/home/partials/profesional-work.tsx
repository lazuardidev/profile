import { motion } from 'framer-motion';
import Image from 'next/image';

import AnimatedCounter from '@/components/AnimatedCounter';
import { Mail } from 'lucide-react';

export const ProfesionalWork = () => {
  const skills = [
    {
      name: 'HTML',
      percentage: 100,
      icon: (
        <Image
          className='w-16 h-16'
          width={64}
          height={64}
          src='/icons/icon-html.svg'
          alt='HTML'
        />
      ),
    },
    {
      name: 'CSS',
      percentage: 90,
      icon: (
        <Image
          className='w-16 h-16'
          width={64}
          height={64}
          src='/icons/icon-css.svg'
          alt='CSS'
        />
      ),
    },
    {
      name: 'JavaScript',
      percentage: 90,
      icon: (
        <Image
          className='w-16 h-16'
          width={64}
          height={64}
          src='/icons/icon-js.svg'
          alt='JavaScript'
        />
      ),
    },
    {
      name: 'TypeScript',
      percentage: 80,
      icon: (
        <Image
          className='w-16 h-16'
          width={64}
          height={64}
          src='/icons/icon-ts.svg'
          alt='TypeScript'
        />
      ),
    },
    {
      name: 'Sequelize',
      percentage: 80,
      icon: (
        <Image
          className='w-16 h-16'
          width={64}
          height={64}
          src='/icons/icon-sequelize.svg'
          alt='Sequelize'
        />
      ),
    },
    {
      name: 'MongoDB',
      percentage: 75,
      icon: (
        <Image
          className='w-16 h-16'
          width={64}
          height={64}
          src='/icons/icon-mongo.svg'
          alt='MongoDB'
        />
      ),
    },
  ];

  return (
    <section
      id='skills'
      className='py-10 md:py-20 px-4 md:px-6 lg:px-32 bg-black'
    >
      <div className='container mx-auto'>
        {/* Mobile Layout */}
        <div className='md:hidden'>
          <div className='flex flex-col gap-6'>
            <div className='space-y-2'>
              <h2 className='text-2xl font-bold text-white leading-tight tracking-tight'>
                Tools I Use to Build
              </h2>
              <p className='text-[#A4A7AE] text-sm leading-7'>
                From code to design — here&apos;s the tech that helps me turn
                ideas into real products.
              </p>
            </div>

            <button className='flex items-center justify-center gap-2 h-12 bg-[#149BB0] text-white font-semibold text-sm leading-7 tracking-tight hover:bg-[#149BB0]/90 transition-colors'>
              <Mail className='w-6 h-6' />
              Send Message
            </button>
          </div>

          <div className='mt-6 space-y-0'>
            {skills.map((skill, index) => (
              <div key={skill.name}>
                <div className='flex items-center gap-1 py-4'>
                  <div className='flex items-center gap-1 flex-1'>
                    <div className='w-15 h-15 rounded-full flex items-center justify-center mr-4'>
                      {skill.icon}
                    </div>
                    <span className='text-base font-normal text-white leading-8 tracking-tight'>
                      {skill.name}
                    </span>
                  </div>
                  <div className='text-base font-bold text-white leading-8 tracking-tight'>
                    <AnimatedCounter target={skill.percentage} suffix='%' />
                  </div>
                </div>
                <motion.div
                  className='h-1 bg-[#22252B] rounded-full mb-4 overflow-hidden'
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <motion.div
                    className='h-full bg-gradient-to-r from-[#149BB0] to-[#0d7a8a] rounded-full'
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.percentage}%` }}
                    transition={{
                      duration: 1.5,
                      delay: index * 0.1 + 0.5,
                      ease: 'easeOut',
                    }}
                  />
                </motion.div>
                {index < skills.length - 1 && (
                  <div className='w-full h-px bg-[#22252B]' />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Layout */}
        <div className='hidden md:flex gap-48'>
          <div className='flex-1'>
            <h2 className='text-5xl font-bold mb-4'>Tools I Use to Build</h2>
            <p className='text-[#A4A7AE] mb-12'>
              From code to design — here&apos;s the tech that helps me turn
              ideas into real products.
            </p>

            <button className='flex items-center gap-3 bg-[#149BB0] px-8 py-4 text-white font-semibold hover:bg-[#149BB0]/90 transition-colors w-full justify-center'>
              <Mail className='w-6 h-6' />
              Send Message
            </button>
          </div>

          <div className='flex-1 space-y-0'>
            <div className='flex items-center gap-6 mb-6'>
              <div className='h-px bg-[#22252B] flex-1' />
              <div className='h-1 w-48 bg-white' />
            </div>

            {skills.map((skill, index) => (
              <div key={skill.name}>
                <div className='flex items-center justify-between py-6'>
                  <div className='flex items-center gap-4'>
                    <div className='w-16 h-16 rounded-full flex items-center justify-center shadow-lg'>
                      {skill.icon}
                    </div>
                    <span className='text-xl font-medium'>{skill.name}</span>
                  </div>
                  <div className='text-xl font-bold'>
                    <AnimatedCounter target={skill.percentage} suffix='%' />
                  </div>
                </div>
                <motion.div
                  className='h-1 bg-[#22252B] rounded-full mb-4 overflow-hidden'
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <motion.div
                    className='h-full bg-gradient-to-r from-[#149BB0] to-[#0d7a8a] rounded-full'
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.percentage}%` }}
                    transition={{
                      duration: 1.5,
                      delay: index * 0.1 + 0.5,
                      ease: 'easeOut',
                    }}
                  />
                </motion.div>
                {index < skills.length - 1 && (
                  <div className='h-px bg-[#22252B] my-4' />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfesionalWork;
