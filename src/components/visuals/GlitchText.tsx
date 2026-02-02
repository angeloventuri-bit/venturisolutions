import { motion } from 'motion/react';

interface GlitchTextProps {
  children: React.ReactNode;
  className?: string;
}

export function GlitchText({ children, className = '' }: GlitchTextProps) {
  return (
    <div className={`relative inline-block ${className}`}>
      <span className="relative z-10">{children}</span>
      <motion.span
        className="absolute top-0 left-0 text-primary/30"
        animate={{
          x: [0, -2, 2, 0],
          y: [0, 1, -1, 0],
        }}
        transition={{
          duration: 0.3,
          repeat: Infinity,
          repeatDelay: 3,
        }}
        aria-hidden="true"
      >
        {children}
      </motion.span>
      <motion.span
        className="absolute top-0 left-0 text-red-600/30"
        animate={{
          x: [0, 2, -2, 0],
          y: [0, -1, 1, 0],
        }}
        transition={{
          duration: 0.3,
          repeat: Infinity,
          repeatDelay: 3,
          delay: 0.1,
        }}
        aria-hidden="true"
      >
        {children}
      </motion.span>
    </div>
  );
}
