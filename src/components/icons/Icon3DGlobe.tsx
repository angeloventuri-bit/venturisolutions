import { motion } from 'motion/react';

export function Icon3DGlobe() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <svg
        viewBox="0 0 200 200"
        className="w-full h-full"
        style={{ filter: 'drop-shadow(0 10px 30px rgba(239, 68, 68, 0.5))' }}
      >
        <defs>
          <linearGradient id="globeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ef4444" />
            <stop offset="100%" stopColor="#dc2626" />
          </linearGradient>
          <radialGradient id="globeRadial">
            <stop offset="0%" stopColor="rgba(239, 68, 68, 0.4)" />
            <stop offset="70%" stopColor="rgba(239, 68, 68, 0.1)" />
            <stop offset="100%" stopColor="rgba(239, 68, 68, 0)" />
          </radialGradient>
        </defs>

        {/* Main Globe */}
        <circle
          cx="100"
          cy="100"
          r="60"
          fill="url(#globeRadial)"
          stroke="url(#globeGradient)"
          strokeWidth="3"
        />

        {/* Latitude Lines */}
        <ellipse cx="100" cy="100" rx="60" ry="15" fill="none" stroke="#ef4444" strokeWidth="1" opacity="0.4" />
        <ellipse cx="100" cy="100" rx="60" ry="30" fill="none" stroke="#ef4444" strokeWidth="1" opacity="0.4" />
        <ellipse cx="100" cy="100" rx="60" ry="45" fill="none" stroke="#ef4444" strokeWidth="1" opacity="0.4" />

        {/* Longitude Lines - Animated */}
        <motion.g
          initial={{ rotateY: 0 }}
          animate={{ rotateY: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          style={{ transformOrigin: '100px 100px', transformStyle: 'preserve-3d' }}
        >
          <ellipse cx="100" cy="100" rx="15" ry="60" fill="none" stroke="#ef4444" strokeWidth="1" opacity="0.5" />
          <ellipse cx="100" cy="100" rx="30" ry="60" fill="none" stroke="#ef4444" strokeWidth="1" opacity="0.5" transform="rotate(30 100 100)" />
          <ellipse cx="100" cy="100" rx="30" ry="60" fill="none" stroke="#ef4444" strokeWidth="1" opacity="0.5" transform="rotate(60 100 100)" />
        </motion.g>

        {/* Central Vertical Line */}
        <line x1="100" y1="40" x2="100" y2="160" stroke="#ef4444" strokeWidth="1.5" opacity="0.6" />

        {/* Browser Window */}
        <motion.g
          initial={{ y: 0 }}
          animate={{ y: [-2, 2, -2] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        >
          {/* Window Frame */}
          <rect
            x="60"
            y="70"
            width="80"
            height="60"
            rx="4"
            fill="rgba(15, 23, 42, 0.9)"
            stroke="url(#globeGradient)"
            strokeWidth="2"
          />
          
          {/* Window Header */}
          <rect
            x="60"
            y="70"
            width="80"
            height="12"
            rx="4"
            fill="url(#globeGradient)"
          />
          
          {/* Window Dots */}
          <circle cx="68" cy="76" r="2" fill="#0f172a" />
          <circle cx="76" cy="76" r="2" fill="#0f172a" />
          <circle cx="84" cy="76" r="2" fill="#0f172a" />

          {/* Code Lines */}
          <line x1="70" y1="90" x2="110" y2="90" stroke="#ef4444" strokeWidth="2" opacity="0.6" />
          <line x1="70" y1="100" x2="130" y2="100" stroke="#ef4444" strokeWidth="2" opacity="0.4" />
          <line x1="70" y1="110" x2="100" y2="110" stroke="#ef4444" strokeWidth="2" opacity="0.5" />
          <line x1="70" y1="120" x2="120" y2="120" stroke="#ef4444" strokeWidth="2" opacity="0.3" />
        </motion.g>

        {/* Orbiting Nodes */}
        <motion.g
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
          style={{ transformOrigin: '100px 100px' }}
        >
          <circle cx="100" cy="40" r="4" fill="#ef4444">
            <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite" />
          </circle>
          <line x1="100" y1="40" x2="100" y2="60" stroke="#ef4444" strokeWidth="1" opacity="0.3" />
        </motion.g>

        <motion.g
          initial={{ rotate: 120 }}
          animate={{ rotate: 480 }}
          transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
          style={{ transformOrigin: '100px 100px' }}
        >
          <circle cx="100" cy="40" r="4" fill="#ef4444">
            <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite" begin="0.6s" />
          </circle>
          <line x1="100" y1="40" x2="100" y2="60" stroke="#ef4444" strokeWidth="1" opacity="0.3" />
        </motion.g>

        <motion.g
          initial={{ rotate: 240 }}
          animate={{ rotate: 600 }}
          transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
          style={{ transformOrigin: '100px 100px' }}
        >
          <circle cx="100" cy="40" r="4" fill="#ef4444">
            <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite" begin="1.2s" />
          </circle>
          <line x1="100" y1="40" x2="100" y2="60" stroke="#ef4444" strokeWidth="1" opacity="0.3" />
        </motion.g>

        {/* Pulsing Glow */}
        <motion.circle
          cx="100"
          cy="100"
          r="60"
          fill="none"
          stroke="#ef4444"
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
