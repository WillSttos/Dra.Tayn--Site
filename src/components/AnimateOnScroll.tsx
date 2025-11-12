'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface Props {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  direction?: 'up' | 'left' | 'right';
}

const AnimateOnScroll = ({
  children,
  delay = 0,
  duration = 0.5,
  className,
  direction = 'up',
}: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const slideVariants = {
    up: { y: 30, x: 0 },
    left: { y: 0, x: -30 },
    right: { y: 0, x: 30 },
  };

  const variants = {
    hidden: { opacity: 0, ...slideVariants[direction] },
    visible: { opacity: 1, y: 0, x: 0 },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={variants}
      transition={{ duration, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimateOnScroll;
