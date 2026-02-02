import { motion } from 'motion/react';

export function DataStream({ className = '' }: { className?: string }) {
  const streams = Array.from({ length: 5 }, (_, i) => ({
    id: i,
    delay: i * 0.5,
    x: 20 + i * 20,
  }));

  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      {streams.map((stream) => (
        <motion.div
          key={stream.id}
          className="absolute w-px h-32 bg-gradient-to-b from-transparent via-primary/50 to-transparent"
          style={{ left: `${stream.x}%` }}
          animate={{
            y: ['-100%', '200%'],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: stream.delay,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  );
}
