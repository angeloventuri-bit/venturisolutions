import { motion } from 'motion/react';

export function Icon3DCompass() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <svg
        viewBox="0 0 200 200"
        className="w-full h-full"
        style={{ filter: 'drop-shadow(0 10px 30px rgba(59, 130, 246, 0.5))' }}
      >
        <defs>
          <linearGradient id="compassGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#1d4ed8" />
          </linearGradient>
          <linearGradient id="compassNeedle" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ef4444" />
            <stop offset="100%" stopColor="#dc2626" />
          </linearGradient>
        </defs>

        {/* Outer Ring */}
        <motion.circle
          cx="100"
          cy="100"
          r="70"
          fill="none"
          stroke="url(#compassGradient)"
          strokeWidth="4"
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          style={{ transformOrigin: '100px 100px' }}
        />

        {/* Inner Ring */}
        <circle
          cx="100"
          cy="100"
          r="60"
          fill="rgba(59, 130, 246, 0.1)"
          stroke="url(#compassGradient)"
          strokeWidth="2"
        />

        {/* Cardinal Points */}
        <motion.g
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
          style={{ transformOrigin: '100px 100px' }}
        >
          <circle cx="100" cy="30" r="4" fill="#3b82f6" />
          <circle cx="170" cy="100" r="4" fill="#3b82f6" />
          <circle cx="100" cy="170" r="4" fill="#3b82f6" />
          <circle cx="30" cy="100" r="4" fill="#3b82f6" />
        </motion.g>

        {/* Center Circle */}
        <circle cx="100" cy="100" r="15" fill="#1e293b" stroke="url(#compassGradient)" strokeWidth="2" />

        {/* Needle */}
        <motion.g
          initial={{ rotate: -45 }}
          animate={{ rotate: 315 }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', repeatType: 'reverse' }}
          style={{ transformOrigin: '100px 100px' }}
        >
          {/* North (Red) */}
          <path
            d="M 100 100 L 95 60 L 100 50 L 105 60 Z"
            fill="url(#compassNeedle)"
            stroke="#dc2626"
            strokeWidth="1"
          />
          {/* South (Blue) */}
          <path
            d="M 100 100 L 95 140 L 100 150 L 105 140 Z"
            fill="#334155"
            stroke="#475569"
            strokeWidth="1"
          />
        </motion.g>

        {/* Center Dot */}
        <circle cx="100" cy="100" r="5" fill="#ef4444" />
        
        {/* Glow Effect */}
        <motion.circle
          cx="100"
          cy="100"
          r="70"
          fill="none"
          stroke="#3b82f6"
          strokeWidth="2"
          opacity="0.3"
          initial={{ scale: 1, opacity: 0.3 }}
          animate={{ scale: 1.2, opacity: 0 }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeOut' }}
          style={{ transformOrigin: '100px 100px' }}
        />
      </svg>
    </div>
  );
}
