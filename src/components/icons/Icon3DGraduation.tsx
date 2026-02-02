import { motion } from 'motion/react';

export function Icon3DGraduation() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <svg
        viewBox="0 0 200 200"
        className="w-full h-full"
        style={{ filter: 'drop-shadow(0 10px 30px rgba(249, 115, 22, 0.5))' }}
      >
        <defs>
          <linearGradient id="gradGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f97316" />
            <stop offset="100%" stopColor="#ea580c" />
          </linearGradient>
          <linearGradient id="capGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#fb923c" />
            <stop offset="100%" stopColor="#c2410c" />
          </linearGradient>
        </defs>

        {/* Cap Top - 3D effect */}
        <motion.g
          initial={{ y: 0, rotate: 0 }}
          animate={{ 
            y: [-2, 2, -2],
            rotate: [-2, 2, -2]
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity, 
            ease: 'easeInOut' 
          }}
          style={{ transformOrigin: '100px 80px' }}
        >
          {/* Cap Shadow */}
          <polygon
            points="100,65 40,85 100,95 160,85"
            fill="rgba(234, 88, 12, 0.3)"
            transform="translate(0, 5)"
          />
          
          {/* Cap Main */}
          <polygon
            points="100,65 40,85 100,95 160,85"
            fill="url(#capGradient)"
            stroke="#ea580c"
            strokeWidth="2"
          />

          {/* Cap Top Surface */}
          <polygon
            points="100,65 160,85 100,75 40,85"
            fill="url(#gradGradient)"
            opacity="0.8"
          />

          {/* Board Top */}
          <motion.rect
            x="60"
            y="75"
            width="80"
            height="8"
            fill="url(#gradGradient)"
            stroke="#ea580c"
            strokeWidth="2"
            initial={{ scaleX: 1 }}
            animate={{ scaleX: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{ transformOrigin: '100px 79px' }}
          />
        </motion.g>

        {/* Tassel */}
        <motion.g
          initial={{ rotate: 0 }}
          animate={{ rotate: [-15, 15, -15] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transformOrigin: '100px 75px' }}
        >
          <line x1="100" y1="75" x2="100" y2="110" stroke="#ea580c" strokeWidth="2" />
          
          {/* Tassel Threads */}
          <line x1="100" y1="110" x2="95" y2="120" stroke="#f97316" strokeWidth="2" />
          <line x1="100" y1="110" x2="100" y2="120" stroke="#f97316" strokeWidth="2" />
          <line x1="100" y1="110" x2="105" y2="120" stroke="#f97316" strokeWidth="2" />
          
          {/* Tassel End */}
          <circle cx="95" cy="122" r="2" fill="#f97316" />
          <circle cx="100" cy="122" r="2" fill="#f97316" />
          <circle cx="105" cy="122" r="2" fill="#f97316" />
        </motion.g>

        {/* Book Stack */}
        <g transform="translate(0, 10)">
          {/* Book 1 */}
          <motion.g
            initial={{ x: 0 }}
            animate={{ x: [-1, 1, -1] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}
          >
            <rect x="65" y="125" width="70" height="15" rx="2" fill="url(#gradGradient)" stroke="#ea580c" strokeWidth="2" />
            <rect x="67" y="127" width="66" height="3" rx="1" fill="rgba(251, 146, 60, 0.4)" />
            <line x1="100" y1="125" x2="100" y2="140" stroke="#ea580c" strokeWidth="1" opacity="0.5" />
          </motion.g>

          {/* Book 2 */}
          <motion.g
            initial={{ x: 0 }}
            animate={{ x: [1, -1, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
          >
            <rect x="60" y="145" width="80" height="15" rx="2" fill="rgba(249, 115, 22, 0.8)" stroke="#ea580c" strokeWidth="2" />
            <rect x="62" y="147" width="76" height="3" rx="1" fill="rgba(251, 146, 60, 0.3)" />
            <line x1="100" y1="145" x2="100" y2="160" stroke="#ea580c" strokeWidth="1" opacity="0.5" />
          </motion.g>

          {/* Book 3 */}
          <motion.g
            initial={{ x: 0 }}
            animate={{ x: [-1, 1, -1] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
          >
            <rect x="70" y="165" width="60" height="15" rx="2" fill="rgba(249, 115, 22, 0.6)" stroke="#ea580c" strokeWidth="2" />
            <rect x="72" y="167" width="56" height="3" rx="1" fill="rgba(251, 146, 60, 0.2)" />
            <line x1="100" y1="165" x2="100" y2="180" stroke="#ea580c" strokeWidth="1" opacity="0.5" />
          </motion.g>
        </g>

        {/* Knowledge Particles */}
        <motion.g
          initial={{ y: 0, opacity: 0, scale: 0 }}
          animate={{ y: -40, opacity: [0, 1, 0], scale: [0, 1, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeOut' }}
        >
          <circle cx="70" cy="100" r="3" fill="#f97316" />
        </motion.g>

        <motion.g
          initial={{ y: 0, opacity: 0, scale: 0 }}
          animate={{ y: -40, opacity: [0, 1, 0], scale: [0, 1, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeOut', delay: 0.5 }}
        >
          <circle cx="130" cy="100" r="3" fill="#f97316" />
        </motion.g>

        <motion.g
          initial={{ y: 0, opacity: 0, scale: 0 }}
          animate={{ y: -40, opacity: [0, 1, 0], scale: [0, 1, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeOut', delay: 1 }}
        >
          <circle cx="100" cy="110" r="3" fill="#f97316" />
        </motion.g>

        {/* Trophy */}
        <motion.g
          transform="translate(150, 120)"
          initial={{ scale: 0.9 }}
          animate={{ scale: [0.9, 1, 0.9] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transformOrigin: '0 0' }}
        >
          {/* Trophy Cup */}
          <path
            d="M -10,-10 L -8,-20 L 8,-20 L 10,-10 L 8,0 L -8,0 Z"
            fill="url(#gradGradient)"
            stroke="#ea580c"
            strokeWidth="1.5"
          />
          
          {/* Trophy Handles */}
          <path d="M -8,-15 Q -15,-15 -15,-10" fill="none" stroke="#f97316" strokeWidth="1.5" />
          <path d="M 8,-15 Q 15,-15 15,-10" fill="none" stroke="#f97316" strokeWidth="1.5" />
          
          {/* Trophy Base */}
          <rect x="-10" y="0" width="20" height="3" fill="#ea580c" />
          <rect x="-12" y="3" width="24" height="2" fill="#f97316" />
          
          {/* Star */}
          <motion.text
            x="0"
            y="-8"
            textAnchor="middle"
            fill="#fbbf24"
            fontSize="12"
            initial={{ opacity: 0.6 }}
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            ★
          </motion.text>
        </motion.g>

        {/* Glow Effect */}
        <motion.ellipse
          cx="100"
          cy="85"
          rx="60"
          ry="10"
          fill="none"
          stroke="#f97316"
          strokeWidth="2"
          opacity="0.3"
          initial={{ scale: 1, opacity: 0.3 }}
          animate={{ scale: 1.2, opacity: 0 }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeOut' }}
          style={{ transformOrigin: '100px 85px' }}
        />
      </svg>
    </div>
  );
}
