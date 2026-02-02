import { motion } from 'motion/react';

export function ScanLine() {
  return (
    <motion.div
      className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent pointer-events-none"
      animate={{
        top: ['0%', '100%'],
        opacity: [0, 1, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: 'linear',
      }}
    />
  );
}
