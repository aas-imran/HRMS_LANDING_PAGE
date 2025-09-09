'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';
import { useContext } from 'react';
import { LenisContext } from './LenisProvider';

const RevealAnimation = ({ children, direction = 'bottom', delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const lenis = useContext(LenisContext);
  
  const variants = {
    hidden: {
      opacity: 0,
      y: direction === 'bottom' ? 75 : direction === 'top' ? -75 : 0,
      x: direction === 'left' ? -75 : direction === 'right' ? 75 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.3,
        delay: delay,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  useEffect(() => {
    if (lenis && isInView) {
      // Trigger Lenis to recalculate scroll when element comes into view
      lenis.resize();
    }
  }, [isInView, lenis]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

export default RevealAnimation;