import { useState, useEffect, useRef } from 'react';
import { Button } from '../ui/button';
import { ArrowRight, Sparkles, MousePointer2 } from 'lucide-react';
import { motion, useScroll, useTransform, useSpring, useMotionValue, useMotionTemplate } from 'motion/react';
import { PremiumGlow } from '../visuals/PremiumGlow';
import { VenturiLogo } from '../VenturiLogo';
import { LogosMarquee } from '../visuals/LogosMarquee';
import { useIsMobile } from '../utils/PerformanceOptimizer';
import { scrollToSection } from '../../utils/scrollToForm';
import { useContactDialog } from '../../utils/useContactDialog';

export function HeroSection() {
  const isMobile = useIsMobile();
  const { openDialog } = useContactDialog();
  const ref = useRef<HTMLElement>(null);

  // Mouse parallax effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = ({ clientX, clientY, currentTarget }: React.MouseEvent) => {
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const x = (clientX - left) / width;
    const y = (clientY - top) / height;
    mouseX.set(x);
    mouseY.set(y);
  };

  // Smooth spring animation for mouse movement
  const springConfig = { damping: 25, stiffness: 150 };
  const moveX = useSpring(useTransform(mouseX, [0, 1], [-20, 20]), springConfig);
  const moveY = useSpring(useTransform(mouseY, [0, 1], [-20, 20]), springConfig);
  const moveXInverse = useSpring(useTransform(mouseX, [0, 1], [20, -20]), springConfig);
  const moveYInverse = useSpring(useTransform(mouseY, [0, 1], [20, -20]), springConfig);

  // Floating elements animation
  const floatingAnimation = {
    y: [-10, 10, -10],
    rotate: [0, 5, -5, 0],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <section 
      id="hero" 
      ref={ref}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center justify-center px-6 pt-24 overflow-hidden bg-background selection:bg-primary/30"
    >
      {/* Interactive Tech Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Deep Space / Grid Background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900/20 via-background to-background" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

        {/* Animated Glowing Orbs (Depth of Field) */}
        <motion.div 
          style={{ x: moveXInverse, y: moveYInverse }}
          className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] opacity-30 mix-blend-screen animate-pulse"
        />
        <motion.div 
          style={{ x: moveX, y: moveY }}
          className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[120px] opacity-30 mix-blend-screen"
        />

        {/* Floating Tech Elements */}
        {!isMobile && (
          <>
            {/* Code/Data Particles - Layer 1 (Close & Fast) */}
            <motion.div 
              style={{ x: moveX, y: moveY }}
              className="absolute top-1/4 left-10 w-24 h-24 border border-white/10 rounded-lg backdrop-blur-sm flex items-center justify-center"
              animate={floatingAnimation}
            >
              <div className="text-[10px] font-mono text-primary/40">
                {'{ connection: true }'}
              </div>
            </motion.div>

            {/* Layer 2 (Far & Slow) */}
            <motion.div 
              style={{ x: moveXInverse, y: moveYInverse }}
              className="absolute bottom-1/3 right-20 w-32 h-32 border border-white/5 rounded-full backdrop-blur-[1px]"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{ duration: 8, repeat: Infinity }}
            />

            {/* Random Particles */}
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-primary/50 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -100, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: Math.random() * 5 + 5,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </>
        )}
        
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </div>

      {/* Efeitos visuais otimizados - apenas PremiumGlow */}
      {!isMobile && <PremiumGlow />}
      
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="text-center space-y-8">
          {/* Venturi Logo - Apenas Desktop */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
            className="hidden md:flex justify-center mb-6 md:mb-8"
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-60 transition-all duration-500" />
              <VenturiLogo variant="horizontal" size="md" className="relative filter drop-shadow-lg" />
            </div>
          </motion.div>

          {/* Premium Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.19, 1, 0.22, 1] }}
            className="inline-flex"
          >
            <div className="relative group">
              <div className="relative flex items-center gap-2 md:gap-3 px-4 md:px-6 py-2 md:py-3 bg-card/40 backdrop-blur-sm border border-primary/20 rounded-full hover:border-primary/30 transition-colors">
                <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-primary flex-shrink-0" />
                <span className="text-xs md:text-sm tracking-wide text-foreground/90">
                  Conexão entre oferta e demanda
                </span>
              </div>
            </div>
          </motion.div>

          {/* Main Heading with Premium Effects - 3 Linhas */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.19, 1, 0.22, 1] }}
            className="space-y-6"
            style={{ position: 'relative', zIndex: 20 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl tracking-tight max-w-5xl mx-auto leading-tight px-4">
              {/* Linha 1 */}
              <span className="relative inline-block">
                Conectamos sua Empresa
                <motion.div
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent hidden md:block"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1.5, delay: 0.8 }}
                />
              </span>
              <br />
              {/* Linha 2 */}
              <span className="relative inline-block">
                <span className="absolute inset-0 blur-xl bg-gradient-to-r from-[#8B1538] via-[#A31D45] to-[#8B1538] opacity-30" />
                <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-[#8B1538] via-[#A31D45] to-[#8B1538] font-bold">
                  ao Crescimento
                </span>
              </span>
              <br />
              {/* Linha 3 */}
              <motion.span
                className="inline-block"
                animate={{ 
                  textShadow: [
                    '0 0 20px rgba(139, 21, 56, 0.6)',
                    '0 0 40px rgba(139, 21, 56, 0.9)',
                    '0 0 20px rgba(139, 21, 56, 0.6)'
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                que ela Merece
              </motion.span>
            </h1>
            
            {/* Subtítulo Resumido */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-base md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4"
            >
              <span className="text-white font-semibold">Ligamos sua empresa ao cliente certo</span>{' '}
              <span className="text-gray-400">e transformamos</span>{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ef4444] via-[#dc2626] to-[#b91c1c] font-bold">
                atenção em venda
              </span>
              <span className="text-gray-400">, venda em recorrência e recorrência em</span>{' '}
              <span className="text-white font-semibold">crescimento com margem</span>.
            </motion.p>
          </motion.div>

          {/* Premium CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-red-600 rounded-xl blur opacity-30 group-hover:opacity-50 transition-opacity" />
              <Button
                size="lg"
                onClick={openDialog}
                className="relative bg-gradient-to-r from-primary to-red-600 hover:from-red-600 hover:to-primary text-lg px-10 py-7 rounded-xl group shadow-lg"
              >
                <span className="relative z-10 flex items-center gap-3">
                  Agendar uma Reunião
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
              </Button>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection('#solution')}
                className="glass border-primary/30 hover:border-primary/50 text-lg px-10 py-7 rounded-xl group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="relative z-10">Conhecer Metodologia</span>
              </Button>
            </motion.div>
          </motion.div>

          {/* Hero Dashboard Image */}
          <motion.div
            initial={{ opacity: 0, y: 40, rotateX: 20 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            className="relative mt-16 max-w-5xl mx-auto perspective-1000"
          >
            
            
            {/* Bottom Glow */}
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[90%] h-20 bg-primary/20 blur-[100px] rounded-full pointer-events-none" />
          </motion.div>

          {/* Logos Marquee */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="pt-16"
          >
            <LogosMarquee />
          </motion.div>
        </div>
      </div>

      {/* Premium Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="relative group">
          <div className="absolute inset-0 bg-primary/50 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="relative w-8 h-12 border-2 border-primary/40 rounded-full flex items-start justify-center p-2 hover:border-primary/60 transition-colors">
            <motion.div
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="w-2 h-2 bg-gradient-to-b from-primary to-red-600 rounded-full shadow-lg"
              style={{ boxShadow: '0 0 10px rgba(239, 68, 68, 0.8)' }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}