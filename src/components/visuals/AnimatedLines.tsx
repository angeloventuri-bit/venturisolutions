import { motion } from 'motion/react';

export function AnimatedLines() {
  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
      {/* Horizontal animated line */}
      <motion.line
        x1="0"
        y1="30%"
        x2="100%"
        y2="30%"
        stroke="url(#lineGradient1)"
        strokeWidth="1"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: [0, 0.5, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Vertical animated line */}
      <motion.line
        x1="70%"
        y1="0"
        x2="70%"
        y2="100%"
        stroke="url(#lineGradient2)"
        strokeWidth="1"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: [0, 0.5, 0] }}
        transition={{ duration: 4, repeat: Infinity, delay: 1, ease: 'easeInOut' }}
      />

      {/* Diagonal animated line */}
      <motion.line
        x1="0"
        y1="0"
        x2="100%"
        y2="100%"
        stroke="url(#lineGradient3)"
        strokeWidth="1"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: [0, 0.3, 0] }}
        transition={{ duration: 5, repeat: Infinity, delay: 2, ease: 'easeInOut' }}
      />

      <defs>
        <linearGradient id="lineGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#ef4444" stopOpacity="0" />
          <stop offset="50%" stopColor="#ef4444" stopOpacity="1" />
          <stop offset="100%" stopColor="#ef4444" stopOpacity="0" />
        </linearGradient>

        <linearGradient id="lineGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#dc2626" stopOpacity="0" />
          <stop offset="50%" stopColor="#dc2626" stopOpacity="1" />
          <stop offset="100%" stopColor="#dc2626" stopOpacity="0" />
        </linearGradient>

        <linearGradient id="lineGradient3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ef4444" stopOpacity="0" />
          <stop offset="50%" stopColor="#ef4444" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#ef4444" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}
