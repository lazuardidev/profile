'use client';

import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import { cn } from '@/lib/utils';

const LazySection = ({
  children,
  className,
  variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  },
}: {
  children: React.ReactNode;
  className?: string;
  variants?: any;
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.section
      ref={ref}
      initial='hidden'
      animate={controls}
      variants={variants}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={cn(className)}
    >
      {children}
    </motion.section>
  );
};

export default LazySection;
