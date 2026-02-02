import { motion } from 'motion/react';

export function PulseRing({ className = '' }: { className?: string }) {
  return (
    <div className={`absolute inset-0 flex items-center justify-center pointer-events-none ${className}`}>
      {[1, 2, 3].map((index) => (
        <motion.div
          key={index}
          className="absolute w-64 h-64 border border-primary/20 rounded-full"
          animate={{
            scale: [1, 2, 2.5],
            opacity: [0.5, 0.3, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: index * 1,
            ease: 'easeOut',
          }}
        />
      ))}
    </div>
  );
}
