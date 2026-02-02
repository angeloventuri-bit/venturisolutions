import { motion } from 'motion/react';

export function PremiumGlow() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Subtle Ambient Glows */}
      <motion.div
        className="absolute -top-1/2 -left-1/4 w-[800px] h-[800px] rounded-full opacity-10"
        style={{
          background: 'radial-gradient(circle, #ef4444 0%, transparent 70%)',
          filter: 'blur(100px)',
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.06, 0.1, 0.06],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      
      <motion.div
        className="absolute top-1/4 -right-1/4 w-[600px] h-[600px] rounded-full opacity-8"
        style={{
          background: 'radial-gradient(circle, #dc2626 0%, transparent 70%)',
          filter: 'blur(100px)',
        }}
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.05, 0.08, 0.05],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
      />
    </div>
  );
}
