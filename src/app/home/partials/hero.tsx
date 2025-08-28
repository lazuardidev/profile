import Image from 'next/image';
import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Mail } from 'lucide-react';

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, 100]);

  const [particles, setParticles] = useState<
    Array<{ x: number; y: number; delay: number }>
  >([]);

  useEffect(() => {
    // Generate particle positions only on client side to avoid hydration mismatch
    const newParticles = [...Array(6)].map((_, i) => ({
      x: Math.random() * 800,
      y: Math.random() * 600,
      delay: i * 1.5,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <section className='relative min-h-screen flex overflow-hidden'>
      {/* Background Effects */}
      <div className='absolute inset-0 w-full h-full'>
        {/* Main radial gradient glow - positioned more to the right */}
        <motion.div
          style={{
            y: y1,
            background:
              'radial-gradient(50% 50% at 50% 50%, rgba(20, 155, 176, 0.80) 0%, rgba(20, 155, 176, 0.00) 100%)',
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.8, 1, 0.8],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className='absolute -top-80 -left-72 w-[1845px] h-[1230px]'
        />

        {/* Secondary animated gradient overlay */}
        <motion.div
          animate={{
            scale: [1, 1.05, 1],
            rotate: [0, 1, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'linear',
          }}
          className='absolute -top-[586px] -left-[76px] w-[1845px] h-[1230px] opacity-70'
          style={{
            background:
              'radial-gradient(40% 40% at 60% 40%, rgba(20, 155, 176, 0.3) 0%, rgba(20, 155, 176, 0.00) 100%)',
          }}
        />

        {/* Animated floating particles */}
        {particles.map((particle, i) => (
          <motion.div
            key={i}
            className='absolute w-2 h-2 bg-[#149BB0] rounded-full opacity-40'
            initial={{
              x: particle.x,
              y: particle.y,
            }}
            animate={{
              x: particle.x + Math.sin(i) * 50,
              y: particle.y + Math.cos(i) * 50,
              scale: [0.5, 1, 0.5],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: particle.delay,
            }}
          />
        ))}

        {/* Grid pattern overlay with pulse animation */}
        <motion.div
          animate={{
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className='absolute -top-16 -left-80 w-[1089px] h-[503px]'
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Cg fill='none' stroke='%23149BB0' stroke-width='1' opacity='0.3'%3E%3Cpath d='M0 0h60v60H0z'/%3E%3Cpath d='M30 0v60M0 30h60'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px',
          }}
        />

        {/* Animated gradient rays */}
        <motion.div
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-10'
          style={{
            background:
              'conic-gradient(from 0deg, transparent, rgba(20, 155, 176, 0.4), transparent, rgba(20, 155, 176, 0.4), transparent)',
          }}
        />

        {/* Dark overlay for content readability */}
        <div className='absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black/80' />
      </div>

      <div className='custom-container w-full flex flex-col md:flex-row md:flex-wrap md:items-center gap-7 overflow-hidden pt-30.5 md:pt-31.25'>
        {/* right - shows first on mobile */}
        <div className='order-1 md:order-2 flex justify-center md:flex-[5.6] md:basis-80 absolute top-0 left-1/2 -translate-x-1/2 md:top-[400px] md:left-auto md:right-[100px] md:h-[671px] md:w-[341] md:-translate-y-[420px] md:translate-x-0 z-0'>
          <div>
            <Image
              src='/images/hero-image.png'
              alt='hero-image'
              width={341}
              height={671}
              className='max-w-[250px] md:max-w-none'
            />
          </div>
        </div>

        {/* left - shows second on mobile */}
        <div className='order-2 md:order-1 flex flex-col space-y-8 z-10 w-full md:pr-8 mt-[320px] md:mt-0'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className='space-y-8 md:ml-0'
          >
            <p className='text-[#FDFDFD] text-xl font-normal tracking-tight'>
              Hi. I&apos;m Lazuardi
            </p>

            <div className='space-y-4'>
              <div className='flex items-center'>
                <h1 className='text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-white tracking-tight leading-none'>
                  FRONT
                </h1>
                <h1
                  className='text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-normal text-white tracking-tight leading-none'
                  style={{ fontFamily: 'Charm, serif' }}
                >
                  END
                </h1>
              </div>
              <h1 className='text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-white tracking-tight leading-none'>
                DEVELOPER
              </h1>
            </div>

            <p className='text-[#A4A7AE] text-lg leading-relaxed max-w-xl'>
              Passionate about frontend development, I focus on crafting digital
              products that are visually polished, performance-optimized, and
              deliver a consistent experience across all platforms.
            </p>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                const contactSection = document.getElementById('contact');
                contactSection?.scrollIntoView({ behavior: 'smooth' });
              }}
              className='inline-flex items-center gap-3 bg-[#149BB0] px-8 py-4 text-white font-semibold hover:bg-[#149BB0]/90 transition-all duration-200 w-full md:w-auto justify-center'
            >
              <Mail className='w-6 h-6' />
              Hire Me
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
