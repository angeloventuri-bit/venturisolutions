import { motion } from 'motion/react';

export function Icon3DRobot() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <svg
        viewBox="0 0 200 200"
        className="w-full h-full"
        style={{ filter: 'drop-shadow(0 10px 30px rgba(139, 92, 246, 0.5))' }}
      >
        <defs>
          <linearGradient id="robotGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#7c3aed" />
          </linearGradient>
          <linearGradient id="robotBody" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#a78bfa" />
            <stop offset="100%" stopColor="#6d28d9" />
          </linearGradient>
        </defs>

        {/* Antenna */}
        <motion.g
          initial={{ rotate: -10 }}
          animate={{ rotate: 10 }}
          transition={{ duration: 1, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
          style={{ transformOrigin: '100px 55px' }}
        >
          <line x1="100" y1="55" x2="100" y2="35" stroke="url(#robotGradient)" strokeWidth="3" />
          <motion.circle
            cx="100"
            cy="30"
            r="5"
            fill="#ef4444"
            initial={{ opacity: 0.5 }}
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1, repeat: Infinity }}
          />
        </motion.g>

        {/* Head */}
        <motion.rect
          x="70"
          y="55"
          width="60"
          height="45"
          rx="8"
          fill="url(#robotBody)"
          stroke="url(#robotGradient)"
          strokeWidth="3"
          initial={{ y: 55 }}
          animate={{ y: [55, 58, 55] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Head Details */}
        <rect x="72" y="58" width="56" height="8" rx="2" fill="rgba(139, 92, 246, 0.3)" />

        {/* Eyes */}
        <motion.g
          initial={{ opacity: 1 }}
          animate={{ opacity: [1, 0.2, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        >
          <circle cx="85" cy="80" r="8" fill="#0f172a" stroke="#8b5cf6" strokeWidth="2" />
          <circle cx="115" cy="80" r="8" fill="#0f172a" stroke="#8b5cf6" strokeWidth="2" />
          
          {/* Eye Glow */}
          <circle cx="85" cy="80" r="4" fill="#8b5cf6" opacity="0.8" />
          <circle cx="115" cy="80" r="4" fill="#8b5cf6" opacity="0.8" />
        </motion.g>

        {/* Body */}
        <rect
          x="65"
          y="105"
          width="70"
          height="60"
          rx="6"
          fill="url(#robotBody)"
          stroke="url(#robotGradient)"
          strokeWidth="3"
        />

        {/* Body Panel */}
        <rect x="75" y="115" width="50" height="40" rx="4" fill="rgba(15, 23, 42, 0.5)" stroke="#8b5cf6" strokeWidth="1.5" />

        {/* AI Symbol */}
        <motion.text
          x="100"
          y="143"
          textAnchor="middle"
          fill="#8b5cf6"
          fontSize="20"
          fontWeight="bold"
          initial={{ opacity: 0.6 }}
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          AI
        </motion.text>

        {/* Control Lights */}
        <motion.g
          initial={{ opacity: 0.5 }}
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity, staggerChildren: 0.2 }}
        >
          <circle cx="78" cy="155" r="3" fill="#22c55e" />
          <circle cx="90" cy="155" r="3" fill="#eab308" />
          <circle cx="102" cy="155" r="3" fill="#ef4444" />
        </motion.g>

        {/* Arms */}
        <motion.g
          initial={{ rotate: 0 }}
          animate={{ rotate: [-5, 5, -5] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transformOrigin: '60px 120px' }}
        >
          <rect x="50" y="115" width="12" height="35" rx="6" fill="url(#robotGradient)" stroke="#7c3aed" strokeWidth="2" />
          <circle cx="56" cy="152" r="6" fill="#8b5cf6" stroke="#7c3aed" strokeWidth="2" />
        </motion.g>

        <motion.g
          initial={{ rotate: 0 }}
          animate={{ rotate: [5, -5, 5] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transformOrigin: '140px 120px' }}
        >
          <rect x="138" y="115" width="12" height="35" rx="6" fill="url(#robotGradient)" stroke="#7c3aed" strokeWidth="2" />
          <circle cx="144" cy="152" r="6" fill="#8b5cf6" stroke="#7c3aed" strokeWidth="2" />
        </motion.g>

        {/* Data Particles */}
        <motion.g
          initial={{ y: 0, opacity: 0 }}
          animate={{ y: -30, opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeOut' }}
        >
          <circle cx="100" cy="100" r="2" fill="#8b5cf6" />
        </motion.g>

        <motion.g
          initial={{ y: 0, opacity: 0 }}
          animate={{ y: -30, opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeOut', delay: 0.5 }}
        >
          <circle cx="110" cy="100" r="2" fill="#8b5cf6" />
        </motion.g>

        <motion.g
          initial={{ y: 0, opacity: 0 }}
          animate={{ y: -30, opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeOut', delay: 1 }}
        >
          <circle cx="90" cy="100" r="2" fill="#8b5cf6" />
        </motion.g>

        {/* Scan Line */}
        <motion.line
          x1="75"
          y1="115"
          x2="125"
          y2="115"
          stroke="#8b5cf6"
          strokeWidth="2"
          opacity="0.6"
          initial={{ y1: 115, y2: 115 }}
          animate={{ y1: 155, y2: 155 }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
        />
      </svg>
    </div>
  );
}
