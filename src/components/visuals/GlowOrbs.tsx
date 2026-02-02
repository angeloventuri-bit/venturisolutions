import { motion } from 'motion/react';

export function GlowOrbs() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Top Left Orb */}
      <motion.div
        className="absolute -top-40 -left-40 w-96 h-96 bg-primary/20 rounded-full blur-[120px]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Top Right Orb */}
      <motion.div
        className="absolute top-1/4 -right-40 w-80 h-80 bg-red-600/20 rounded-full blur-[100px]"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Bottom Left Orb */}
      <motion.div
        className="absolute bottom-1/3 -left-32 w-72 h-72 bg-primary/15 rounded-full blur-[90px]"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Bottom Right Orb */}
      <motion.div
        className="absolute -bottom-32 right-1/4 w-96 h-96 bg-red-500/15 rounded-full blur-[110px]"
        animate={{
          scale: [1.1, 1, 1.1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </div>
  );
}
