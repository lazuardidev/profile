import Image from 'next/image';
import React from 'react';

import { Marquee } from '@/components/ui/marquee';

const TrustedBy = () => {
  const services = [
    'App Development',
    'Website Development',
    'Pixel Perfect',
    'React Expert',
  ];

  return (
    <section className='bg-[#149BB0] py-6 my-6 overflow-hidden'>
      <Marquee className='[--duration:20s]' pauseOnHover={false}>
        {services.map((service, index) => (
          <div key={index} className='flex items-center gap-4 mx-8'>
            <span className='text-white text-4xl font-bold'>{service}</span>
            <div className='w-12 h-12 text-white opacity-100'>
              <Image
                src='/icons/icon-service.svg'
                alt='Service icon'
                width={48}
                height={48}
                className='w-full h-full object-contain'
              />
            </div>
          </div>
        ))}
      </Marquee>
    </section>
  );
};

export default TrustedBy;
