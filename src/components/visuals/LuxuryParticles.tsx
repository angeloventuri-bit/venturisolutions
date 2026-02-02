import { motion } from 'motion/react';

interface LuxuryParticlesProps {
  count?: number;
  colors?: string[];
}

export function LuxuryParticles({ 
  count = 20,
  colors = ['#ef4444', '#dc2626', '#991b1b', '#7f1d1d']
}: LuxuryParticlesProps) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: count }).map((_, i) => {
        const size = Math.random() * 6 + 2;
        const duration = Math.random() * 10 + 15;
        const delay = Math.random() * 5;
        const color = colors[Math.floor(Math.random() * colors.length)];
        const startX = Math.random() * 100;
        const startY = 100 + Math.random() * 20;
        
        return (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: size,
              height: size,
              left: `${startX}%`,
              bottom: `${startY}%`,
              background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
              filter: 'blur(1px)',
            }}
            animate={{
              y: [0, -window.innerHeight - 200],
              x: [0, (Math.random() - 0.5) * 200],
              opacity: [0, 0.4, 0.4, 0],
              scale: [0, 1, 1, 0],
            }}
            transition={{
              duration,
              delay,
              repeat: Infinity,
              ease: 'easeOut',
            }}
          />
        );
      })}
      
      {/* Subtle Red Sparkles */}
      {Array.from({ length: 5 }).map((_, i) => (
        <motion.div
          key={`sparkle-${i}`}
          className="absolute"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        >
          <motion.div
            className="relative"
            animate={{
              rotate: [0, 180, 360],
              scale: [0, 0.8, 0],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 3,
              delay: Math.random() * 5,
              repeat: Infinity,
              repeatDelay: Math.random() * 10,
            }}
          >
            {/* Sparkle Shape */}
            <div className="relative w-1.5 h-1.5">
              <div className="absolute inset-0 bg-primary/50 blur-sm" />
              <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/60 to-transparent transform -translate-y-1/2" />
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-red-500/60 to-transparent transform -translate-x-1/2" />
            </div>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}
