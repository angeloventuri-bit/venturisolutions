import { motion } from 'motion/react';

export function Icon3DMegaphone() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <svg
        viewBox="0 0 200 200"
        className="w-full h-full"
        style={{ filter: 'drop-shadow(0 10px 30px rgba(168, 85, 247, 0.5))' }}
      >
        <defs>
          <linearGradient id="megaphoneGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#a855f7" />
            <stop offset="100%" stopColor="#7c3aed" />
          </linearGradient>
          <linearGradient id="megaphoneHandle" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#9333ea" />
            <stop offset="100%" stopColor="#6b21a8" />
          </linearGradient>
        </defs>

        {/* Main Cone - 3D effect */}
        <motion.path
          d="M 60 100 L 120 60 L 120 140 Z"
          fill="url(#megaphoneGradient)"
          stroke="#7c3aed"
          strokeWidth="2"
          initial={{ scale: 0.9 }}
          animate={{ scale: [0.9, 1.05, 0.9] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transformOrigin: '90px 100px' }}
        />

        {/* Cone Shadow */}
        <path
          d="M 60 100 L 120 140 L 120 145 L 60 105 Z"
          fill="rgba(124, 58, 237, 0.3)"
        />

        {/* Front Circle */}
        <motion.ellipse
          cx="120"
          cy="100"
          rx="25"
          ry="40"
          fill="rgba(168, 85, 247, 0.2)"
          stroke="url(#megaphoneGradient)"
          strokeWidth="3"
          initial={{ scale: 1 }}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transformOrigin: '120px 100px' }}
        />

        {/* Handle */}
        <rect
          x="50"
          y="95"
          width="15"
          height="40"
          rx="7"
          fill="url(#megaphoneHandle)"
          stroke="#6b21a8"
          strokeWidth="2"
        />

        {/* Handle Grip Lines */}
        <line x1="52" y1="105" x2="63" y2="105" stroke="#a855f7" strokeWidth="1" opacity="0.5" />
        <line x1="52" y1="115" x2="63" y2="115" stroke="#a855f7" strokeWidth="1" opacity="0.5" />
        <line x1="52" y1="125" x2="63" y2="125" stroke="#a855f7" strokeWidth="1" opacity="0.5" />

        {/* Sound Waves */}
        <motion.g
          initial={{ opacity: 0, x: 0 }}
          animate={{ opacity: [0, 1, 0], x: [0, 20, 40] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeOut' }}
        >
          <path
            d="M 150 100 Q 155 90, 160 100 Q 155 110, 150 100"
            fill="none"
            stroke="#a855f7"
            strokeWidth="3"
            opacity="0.8"
          />
        </motion.g>

        <motion.g
          initial={{ opacity: 0, x: 0 }}
          animate={{ opacity: [0, 1, 0], x: [0, 20, 40] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeOut', delay: 0.3 }}
        >
          <path
            d="M 160 100 Q 170 80, 180 100 Q 170 120, 160 100"
            fill="none"
            stroke="#a855f7"
            strokeWidth="3"
            opacity="0.6"
          />
        </motion.g>

        <motion.g
          initial={{ opacity: 0, x: 0 }}
          animate={{ opacity: [0, 1, 0], x: [0, 20, 40] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeOut', delay: 0.6 }}
        >
          <path
            d="M 170 100 Q 185 70, 200 100 Q 185 130, 170 100"
            fill="none"
            stroke="#a855f7"
            strokeWidth="2"
            opacity="0.4"
          />
        </motion.g>

        {/* Pulsing Glow */}
        <motion.circle
          cx="120"
          cy="100"
          r="50"
          fill="none"
          stroke="#a855f7"
          strokeWidth="2"
          opacity="0.3"
          initial={{ scale: 0.8, opacity: 0.5 }}
          animate={{ scale: 1.5, opacity: 0 }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeOut' }}
          style={{ transformOrigin: '120px 100px' }}
        />
      </svg>
    </div>
  );
}
