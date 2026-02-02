import { motion } from 'motion/react';

export function Icon3DSearch() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <svg
        viewBox="0 0 200 200"
        className="w-full h-full"
        style={{ filter: 'drop-shadow(0 10px 30px rgba(34, 197, 94, 0.5))' }}
      >
        <defs>
          <linearGradient id="searchGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#22c55e" />
            <stop offset="100%" stopColor="#16a34a" />
          </linearGradient>
          <linearGradient id="glassGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(34, 197, 94, 0.3)" />
            <stop offset="50%" stopColor="rgba(34, 197, 94, 0.1)" />
            <stop offset="100%" stopColor="rgba(34, 197, 94, 0.3)" />
          </linearGradient>
        </defs>

        {/* Magnifying Glass Circle - Main */}
        <motion.circle
          cx="90"
          cy="90"
          r="45"
          fill="url(#glassGradient)"
          stroke="url(#searchGradient)"
          strokeWidth="6"
          initial={{ scale: 1 }}
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transformOrigin: '90px 90px' }}
        />

        {/* Glass Highlight */}
        <ellipse
          cx="75"
          cy="75"
          rx="20"
          ry="15"
          fill="rgba(255, 255, 255, 0.3)"
          transform="rotate(-45 75 75)"
        />

        {/* Inner Circle Shadow */}
        <circle
          cx="90"
          cy="90"
          r="35"
          fill="none"
          stroke="rgba(22, 163, 74, 0.2)"
          strokeWidth="2"
        />

        {/* Handle */}
        <motion.rect
          x="120"
          y="120"
          width="12"
          height="60"
          rx="6"
          fill="url(#searchGradient)"
          stroke="#16a34a"
          strokeWidth="2"
          transform="rotate(45 126 150)"
          initial={{ rotate: 45 }}
          animate={{ rotate: [45, 50, 45] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transformOrigin: '126px 150px' }}
        />

        {/* Handle Grip */}
        <rect
          x="123"
          y="130"
          width="6"
          height="40"
          rx="3"
          fill="rgba(22, 163, 74, 0.3)"
          transform="rotate(45 126 150)"
        />

        {/* Search Icon Inside */}
        <motion.g
          initial={{ opacity: 0.5 }}
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <text
            x="90"
            y="102"
            textAnchor="middle"
            fill="#22c55e"
            fontSize="24"
            fontWeight="bold"
          >
            SEO
          </text>
        </motion.g>

        {/* Scanning Lines */}
        <motion.g
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 40, opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
        >
          <line
            x1="50"
            y1="90"
            x2="130"
            y2="90"
            stroke="#22c55e"
            strokeWidth="2"
            opacity="0.6"
          />
        </motion.g>

        {/* Orbit Dots */}
        <motion.g
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
          style={{ transformOrigin: '90px 90px' }}
        >
          <circle cx="90" cy="45" r="3" fill="#22c55e" />
          <circle cx="135" cy="90" r="3" fill="#22c55e" />
          <circle cx="90" cy="135" r="3" fill="#22c55e" />
          <circle cx="45" cy="90" r="3" fill="#22c55e" />
        </motion.g>

        {/* Pulsing Rings */}
        <motion.circle
          cx="90"
          cy="90"
          r="45"
          fill="none"
          stroke="#22c55e"
          strokeWidth="2"
          opacity="0.4"
          initial={{ scale: 1, opacity: 0.4 }}
          animate={{ scale: 1.3, opacity: 0 }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeOut' }}
          style={{ transformOrigin: '90px 90px' }}
        />
      </svg>
    </div>
  );
}
