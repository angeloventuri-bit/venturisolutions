import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

interface Position {
  x: number;
  y: number;
}

export function CursorGlow() {
  const [mousePosition, setMousePosition] = useState<Position>({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {/* Subtle Cursor Glow */}
      <motion.div
        className="absolute w-48 h-48 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(239, 68, 68, 0.06) 0%, transparent 70%)',
          filter: 'blur(30px)',
          left: mousePosition.x - 96,
          top: mousePosition.y - 96,
        }}
      />
      
      {/* Core Dot */}
      <motion.div
        className="absolute w-1.5 h-1.5 rounded-full bg-primary/40"
        style={{
          left: mousePosition.x - 3,
          top: mousePosition.y - 3,
          boxShadow: '0 0 6px rgba(239, 68, 68, 0.4)',
        }}
      />
    </div>
  );
}
