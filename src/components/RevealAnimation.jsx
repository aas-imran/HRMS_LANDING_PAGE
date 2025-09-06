'use client';

import { motion } from 'framer-motion';

const RevealAnimation = ({ children, direction = 'bottom', delay = 0 }) => {
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
        duration: 0.5,
        delay: delay,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

export default RevealAnimation;