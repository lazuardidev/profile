import { Code, Globe, Layers, Smartphone } from 'lucide-react';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const AchievementsSection: React.FC = () => {
  return (
    <section
      id='about'
      className='py-10 md:py-20 px-4 md:px-6 lg:px-32 bg-black'
    >
      <div className='container mx-auto'>
        {/* Mobile Layout */}
        <div className='md:hidden'>
          <div className='flex flex-col gap-6 mb-6'>
            <h2 className='text-2xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight'>
              <span className='text-white'>
                I turn ideas and designs into functional, accessible, and
                performant websites{' '}
              </span>
              <span className='text-[#149BB0]'>
                using modern frontend technologies
              </span>
              <span className='text-white'>.</span>
            </h2>

            <div className='flex flex-col gap-4'>
              <p className='text-[#A4A7AE] text-base leading-8 tracking-tight'>
                About Me
              </p>
              <div className='flex items-center gap-4'>
                <Link
                  href='#'
                  className='hover:opacity-80'
                  aria-label='Facebook'
                >
                  <Image
                    src='/icons/facebook-icon.svg'
                    alt='Facebook'
                    width={40}
                    height={40}
                  />
                </Link>
                <Link
                  href='#'
                  className='hover:opacity-80'
                  aria-label='LinkedIn'
                >
                  <Image
                    src='/icons/linkedin-icon.svg'
                    alt='LinkedIn'
                    width={40}
                    height={40}
                  />
                </Link>
                <Link
                  href='#'
                  className='hover:opacity-80'
                  aria-label='Instagram'
                >
                  <Image
                    src='/icons/instagram-icon.svg'
                    alt='Instagram'
                    width={40}
                    height={40}
                  />
                </Link>
                <Link href='#' className='hover:opacity-80' aria-label='TikTok'>
                  <Image
                    src='/icons/tiktok-icon.svg'
                    alt='TikTok'
                    width={40}
                    height={40}
                  />
                </Link>
              </div>
            </div>
          </div>

          <div className='w-full h-px bg-[#22252B] mb-6' />

          <div className='flex flex-col gap-6'>
            <div className='flex justify-center'>
              <Image
                src='/images/people-working.jpg'
                alt='Edwin working'
                width={384} // w-96 is 24rem which is 384px
                height={500}
                className='object-cover rounded-lg'
              />
            </div>

            <div className='space-y-6'>
              <div className='space-y-3'>
                <Code className='w-10 h-10 text-[#149BB0]' />
                <div className='space-y-1'>
                  <h3 className='text-lg font-bold text-white leading-8'>
                    Frontend Development
                  </h3>
                  <p className='text-[#A4A7AE] text-sm leading-7'>
                    I build responsive, accessible, and scalable websites using
                    modern frontend tools and best practices.
                  </p>
                </div>
              </div>

              <div className='w-full h-px bg-[#22252B]' />

              <div className='space-y-3'>
                <Globe className='w-10 h-10 text-[#149BB0]' />
                <div className='space-y-1'>
                  <h3 className='text-lg font-bold text-white leading-8'>
                    Web Performance
                  </h3>
                  <p className='text-[#A4A7AE] text-sm leading-7'>
                    I optimize websites for speed and efficiency to ensure
                    smooth experiences across all devices.
                  </p>
                </div>
              </div>

              <div className='w-full h-px bg-[#22252B]' />

              <div className='space-y-3'>
                <Layers className='w-10 h-10 text-[#149BB0]' />
                <div className='space-y-1'>
                  <h3 className='text-lg font-bold text-white leading-8'>
                    Component Based UI
                  </h3>
                  <p className='text-[#A4A7AE] text-sm leading-7'>
                    I specialize in crafting reusable UI components that are
                    clean, maintainable, and aligned with design systems.
                  </p>
                </div>
              </div>

              <div className='w-full h-px bg-[#22252B]' />

              <div className='space-y-3'>
                <Smartphone className='w-10 h-10 text-[#149BB0]' />
                <div className='space-y-1'>
                  <h3 className='text-lg font-bold text-white leading-8'>
                    Responsive Design
                  </h3>
                  <p className='text-[#A4A7AE] text-sm leading-7'>
                    I ensure that every layout adapts beautifully to different
                    screen sizes — from mobile to desktop.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className='hidden md:block'>
          <div className='flex justify-between items-start mb-12'>
            <div className='max-w-3xl'>
              <h2 className='text-4xl lg:text-5xl font-bold mb-4'>
                I turn ideas and designs into functional, accessible, and
                performant websites{' '}
                <span className='text-[#149BB0]'>
                  using modern frontend technologies
                </span>
                .
              </h2>
            </div>
            <div className='text-right'>
              <p className='text-[#A4A7AE] mb-32'>About Me</p>
              <div className='flex items-center gap-4'>
                <Link
                  href='#'
                  className='hover:opacity-80'
                  aria-label='Facebook'
                >
                  <Image
                    src='/icons/facebook-icon.svg'
                    alt='Facebook'
                    width={40}
                    height={40}
                  />
                </Link>
                <Link
                  href='#'
                  className='hover:opacity-80'
                  aria-label='LinkedIn'
                >
                  <Image
                    src='/icons/linkedin-icon.svg'
                    alt='LinkedIn'
                    width={40}
                    height={40}
                  />
                </Link>
                <Link
                  href='#'
                  className='hover:opacity-80'
                  aria-label='Instagram'
                >
                  <Image
                    src='/icons/instagram-icon.svg'
                    alt='Instagram'
                    width={40}
                    height={40}
                  />
                </Link>
                <Link href='#' className='hover:opacity-80' aria-label='TikTok'>
                  <Image
                    src='/icons/tiktok-icon.svg'
                    alt='TikTok'
                    width={40}
                    height={40}
                  />
                </Link>
              </div>
            </div>
          </div>

          <div className='h-px bg-[#22252B] mb-12' />

          <div className='flex items-center gap-10'>
            <Image
              src='/images/people-working.jpg'
              alt='Edwin working'
              width={384} // w-96 is 24rem which is 384px
              height={500}
              className='object-cover rounded-lg'
            />

            <div className='flex-1 grid grid-cols-2 gap-12'>
              <div className='space-y-6'>
                <div>
                  <Code className='w-10 h-10 text-[#149BB0] mb-6' />
                  <h3 className='text-xl font-bold mb-2'>
                    Frontend Development
                  </h3>
                  <p className='text-[#A4A7AE]'>
                    I build responsive, accessible, and scalable websites using
                    modern frontend tools and best practices.
                  </p>
                </div>

                <div>
                  <Layers className='w-10 h-10 text-[#149BB0] mb-6' />
                  <h3 className='text-xl font-bold mb-2'>Component Based UI</h3>
                  <p className='text-[#A4A7AE]'>
                    I specialize in crafting reusable UI components that are
                    clean, maintainable, and aligned with design systems.
                  </p>
                </div>
              </div>

              <div className='space-y-6'>
                <div>
                  <Globe className='w-10 h-10 text-[#149BB0] mb-6' />
                  <h3 className='text-xl font-bold mb-2'>Web Performance</h3>
                  <p className='text-[#A4A7AE]'>
                    I optimize websites for speed and efficiency to ensure
                    smooth experiences across all devices.
                  </p>
                </div>

                <div>
                  <Smartphone className='w-10 h-10 text-[#149BB0] mb-6' />
                  <h3 className='text-xl font-bold mb-2'>Responsive Design</h3>
                  <p className='text-[#A4A7AE]'>
                    I ensure that every layout adapts beautifully to different
                    screen sizes — from mobile to desktop.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
