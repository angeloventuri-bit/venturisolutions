import { motion } from 'motion/react';

export function BinaryRain() {
  const columns = 15;
  const binaries = Array.from({ length: columns }, (_, i) => ({
    id: i,
    delay: Math.random() * 5,
    duration: 10 + Math.random() * 5,
    x: (100 / columns) * i,
  }));

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-10">
      {binaries.map((binary) => (
        <motion.div
          key={binary.id}
          className="absolute text-xs text-primary font-mono"
          style={{ left: `${binary.x}%` }}
          animate={{
            y: ['-100%', '100vh'],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: binary.duration,
            repeat: Infinity,
            delay: binary.delay,
            ease: 'linear',
          }}
        >
          {Array.from({ length: 20 }, () => Math.round(Math.random())).join('')}
        </motion.div>
      ))}
    </div>
  );
}
