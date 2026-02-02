import { motion } from 'motion/react';

export function HolographicOverlay() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Holographic Light Beams */}
      <motion.div
        className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-primary/30 to-transparent"
        animate={{
          opacity: [0.3, 0.6, 0.3],
          scaleY: [1, 1.2, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-red-500/20 to-transparent"
        animate={{
          opacity: [0.2, 0.5, 0.2],
          scaleY: [1, 1.3, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
      />
      
      {/* Horizontal Scan Lines */}
      <motion.div
        className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"
        animate={{
          top: ['0%', '100%'],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
      
      {/* Corner Accents */}
      <div className="absolute top-0 left-0 w-32 h-32">
        <motion.div
          className="absolute top-0 left-0 w-16 h-px bg-gradient-to-r from-primary to-transparent"
          animate={{ scaleX: [0, 1, 0] }}
          transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
        />
        <motion.div
          className="absolute top-0 left-0 w-px h-16 bg-gradient-to-b from-primary to-transparent"
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
        />
      </div>
      
      <div className="absolute top-0 right-0 w-32 h-32">
        <motion.div
          className="absolute top-0 right-0 w-16 h-px bg-gradient-to-l from-primary to-transparent"
          animate={{ scaleX: [0, 1, 0] }}
          transition={{ duration: 3, repeat: Infinity, repeatDelay: 2.5 }}
        />
        <motion.div
          className="absolute top-0 right-0 w-px h-16 bg-gradient-to-b from-primary to-transparent"
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ duration: 3, repeat: Infinity, repeatDelay: 2.5 }}
        />
      </div>
      
      <div className="absolute bottom-0 left-0 w-32 h-32">
        <motion.div
          className="absolute bottom-0 left-0 w-16 h-px bg-gradient-to-r from-primary to-transparent"
          animate={{ scaleX: [0, 1, 0] }}
          transition={{ duration: 3, repeat: Infinity, repeatDelay: 3 }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-px h-16 bg-gradient-to-t from-primary to-transparent"
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ duration: 3, repeat: Infinity, repeatDelay: 3 }}
        />
      </div>
      
      <div className="absolute bottom-0 right-0 w-32 h-32">
        <motion.div
          className="absolute bottom-0 right-0 w-16 h-px bg-gradient-to-l from-primary to-transparent"
          animate={{ scaleX: [0, 1, 0] }}
          transition={{ duration: 3, repeat: Infinity, repeatDelay: 3.5 }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-px h-16 bg-gradient-to-t from-primary to-transparent"
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ duration: 3, repeat: Infinity, repeatDelay: 3.5 }}
        />
      </div>
      
      {/* Floating Light Particles */}
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-primary/60"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0],
          }}
          transition={{
            duration: 4 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 4,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}
