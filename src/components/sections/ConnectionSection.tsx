import { Target, TrendingUp, Zap, Sparkles, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

// Energy Orb que flui pela linha de conexão
function EnergyOrb({ delay = 0 }: { delay?: number }) {
  return (
    <>
      {/* Orb principal */}
      <motion.div
        className="absolute top-1/2 left-0 w-4 h-4 rounded-full -translate-y-1/2"
        style={{
          background: 'radial-gradient(circle, rgba(139,21,56,1) 0%, rgba(163,29,69,0.8) 50%, rgba(239,68,68,0) 100%)',
          boxShadow: '0 0 20px rgba(139,21,56,0.8), 0 0 40px rgba(163,29,69,0.6)',
        }}
        initial={{ x: '-100%', opacity: 0, scale: 0 }}
        animate={{
          x: ['0%', '100%'],
          opacity: [0, 1, 1, 1, 0],
          scale: [0, 1.5, 1, 1.5, 0],
        }}
        transition={{
          duration: 4,
          delay: delay,
          repeat: Infinity,
          repeatDelay: 2,
          ease: 'easeInOut',
        }}
      >
        {/* Inner glow */}
        <div className="absolute inset-0 rounded-full bg-white/80 blur-sm" />
      </motion.div>

      {/* Trail particles */}
      <motion.div
        className="absolute top-1/2 left-0 w-2 h-2 rounded-full -translate-y-1/2 bg-primary/60 blur-sm"
        initial={{ x: '-100%', opacity: 0 }}
        animate={{
          x: ['0%', '100%'],
          opacity: [0, 0.6, 0.6, 0.3, 0],
        }}
        transition={{
          duration: 4,
          delay: delay + 0.1,
          repeat: Infinity,
          repeatDelay: 2,
          ease: 'easeInOut',
        }}
      />
    </>
  );
}

// Linha conectora premium com efeitos 3D
function PremiumConnectionLine({ reverse = false }: { reverse?: boolean }) {
  return (
    <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 hidden md:block pointer-events-none h-1">
      {/* Base glow layer */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent blur-xl" />
      
      {/* Main line with gradient */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-[#8B1538] via-[#A31D45] to-red-600"
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 0.3 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.5, ease: 'easeOut' }}
          style={{ transformOrigin: reverse ? 'right' : 'left' }}
        />
        
        {/* Animated shine effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
          initial={{ x: '-100%' }}
          animate={{ x: '200%' }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatDelay: 2,
            ease: 'easeInOut',
          }}
        />
      </div>

      {/* Top edge highlight */}
      <div className="absolute top-0 left-0 right-0 h-px">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/50 to-transparent"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.7 }}
          style={{ transformOrigin: reverse ? 'right' : 'left' }}
        />
      </div>

      {/* Bottom edge highlight */}
      <div className="absolute bottom-0 left-0 right-0 h-px">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-red-500/50 to-transparent"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.7 }}
          style={{ transformOrigin: reverse ? 'right' : 'left' }}
        />
      </div>

      {/* Energy orbs flowing */}
      <EnergyOrb delay={1} />
      <EnergyOrb delay={2.5} />
      <EnergyOrb delay={4} />

      {/* Arrow indicator */}
      <motion.div
        className="absolute top-1/2 right-2 -translate-y-1/2"
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 1.2 }}
      >
        <motion.div
          animate={{
            x: [0, 6, 0],
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <ChevronRight className="w-6 h-6 text-primary drop-shadow-[0_0_8px_rgba(139,21,56,0.8)]" strokeWidth={3} />
        </motion.div>
      </motion.div>

      {/* Pulse glow at center */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(139,21,56,0.4) 0%, rgba(163,29,69,0.2) 40%, transparent 70%)',
        }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </div>
  );
}

// Connection node simplificado
function ConnectionNode({ position }: { position: 'left' | 'right' }) {
  return (
    <div className={`absolute top-1/2 ${position === 'left' ? '-left-4' : '-right-4'} -translate-y-1/2 hidden md:block z-20`}>
      {/* Simple ring */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full border border-primary/30 bg-background/50 backdrop-blur-sm" />

      {/* Center core */}
      <div className="relative w-3 h-3 rounded-full bg-primary" />
    </div>
  );
}

// Scan line effect para cards
function ScanLineEffect() {
  return (
    <motion.div
      className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <motion.div
        className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"
        style={{
          boxShadow: '0 0 10px rgba(139,21,56,0.8), 0 0 20px rgba(163,29,69,0.5)',
        }}
        animate={{
          top: ['-2px', '100%'],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatDelay: 1,
          ease: 'linear',
        }}
      />
    </motion.div>
  );
}

export function ConnectionSection() {
  const pillars = [
    {
      icon: Target,
      number: '1',
      title: 'Sua Oferta',
      subtitle: 'O Valor Invisível',
      description: 'Mapeamos o potencial único do seu produto ou serviço. É o "porquê" que muitas vezes não está claro para o mercado.',
      details: [
        'O que você entrega.',
        'Entendemos seu "valor invisível".',
        'Seu potencial de mercado.'
      ],
      gradient: 'from-[#8B1538] to-[#A31D45]',
      iconBg: 'bg-gradient-to-br from-[#8B1538]/90 via-[#A31D45] to-[#8B1538]/90',
      hasConnectionRight: true,
    },
    {
      icon: Zap,
      number: '2',
      title: 'A Conexão',
      subtitle: 'Value as a Service',
      description: 'Aqui entra o VaaS: um ecossistema de inteligência, tecnologia e processos que funciona 24/7.',
      details: [
        'Como nós conectamos.',
        'Criamos a jornada estratégica.',
        'Ecossistema contínuo.'
      ],
      gradient: 'from-red-600 to-[#A31D45]',
      iconBg: 'bg-gradient-to-br from-red-600/90 via-[#A31D45] to-red-600/90',
      hasConnectionLeft: true,
      hasConnectionRight: true,
      isPulse: true,
    },
    {
      icon: TrendingUp,
      number: '3',
      title: 'Demanda Real',
      subtitle: 'O Valor Mensurável',
      description: 'Encontramos quem precisa da sua solução e entregamos sua oferta de forma contextualizada.',
      details: [
        'Quem precisa de você.',
        'Geramos a "demanda mensurável".',
        'Resultados tangíveis.'
      ],
      gradient: 'from-[#A31D45] to-[#6B0F2A]',
      iconBg: 'bg-gradient-to-br from-[#A31D45]/90 via-[#6B0F2A] to-[#A31D45]/90',
      hasConnectionLeft: true,
    }
  ];

  return (
    <section id="connection" className="relative py-24 px-6 overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        {/* Gradient orbs */}
        <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[150px] animate-pulse" />
        <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] bg-red-600/20 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '1s' }} />
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'linear-gradient(rgba(139,21,56,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(139,21,56,0.3) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />

        {/* Radial gradient from center */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-radial-gradient from-primary/5 via-transparent to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center space-y-6 mb-16">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex"
          >
            <div className="relative group">
              <div className="relative flex items-center gap-2 px-4 py-2 bg-card/40 border border-primary/20 rounded-full backdrop-blur-sm hover:border-primary/30 transition-colors">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm text-foreground/90">Conexão entre oferta e demanda</span>
              </div>
            </div>
          </motion.div>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-5xl lg:text-6xl max-w-5xl mx-auto leading-tight"
          >
            Do{' '}
            <span className="text-primary">
              Valor Invisível
            </span>{' '}
            à Demanda Real
          </motion.h2>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Mais do que marketing, entregamos um <strong className="text-foreground">ecossistema</strong>. 
              O seu produto (a <strong className="text-foreground">Oferta</strong>) tem um potencial que o mercado ainda não vê. 
              Do outro lado, existe uma <strong className="text-foreground">Demanda Real</strong> por essa solução.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Nosso modelo de <strong className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-red-600">Value as a Service (VaaS)</strong> é 
              a ponte estratégica que une esses dois pontos de forma contínua e mensurável.
            </p>
          </motion.div>
        </div>

        {/* Flow Indicator - Desktop */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="hidden md:flex items-center justify-center gap-4 mb-12"
        >
          <div className="flex items-center gap-2 px-5 py-2.5 bg-card/50 border border-primary/20 rounded-full backdrop-blur-sm">
            <div className="w-2.5 h-2.5 rounded-full bg-primary" />
            <span className="text-sm">Oferta</span>
          </div>
          
          <ChevronRight className="w-5 h-5 text-primary/60" />
          
          <div className="flex items-center gap-2 px-5 py-2.5 bg-card border border-primary/30 rounded-full backdrop-blur-sm">
            <div className="w-2.5 h-2.5 rounded-full bg-primary" />
            <span className="text-sm font-medium">VaaS</span>
          </div>
          
          <ChevronRight className="w-5 h-5 text-primary/60" />
          
          <div className="flex items-center gap-2 px-5 py-2.5 bg-card/50 border border-primary/20 rounded-full backdrop-blur-sm">
            <div className="w-2.5 h-2.5 rounded-full bg-primary" />
            <span className="text-sm">Demanda</span>
          </div>
        </motion.div>

        {/* 3 Pillars Grid com Conexões */}
        <div className="relative grid md:grid-cols-3 gap-8 lg:gap-12">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.15 * index, ease: [0.19, 1, 0.22, 1] }}
                className="group relative"
              >
                {/* Card */}
                <div className={`relative h-full border-2 border-primary/30 rounded-2xl bg-card/50 backdrop-blur-md p-8 transition-all duration-500 hover:border-primary/50 ${pillar.isPulse ? 'md:scale-[1.05]' : ''}`}>
                  
                  {/* Top Border Accent */}
                  <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-0.5 bg-gradient-to-r ${pillar.gradient} opacity-60`} />

                  {/* Content */}
                  <div className="relative space-y-6">
                    {/* Icon + Number */}
                    <div className="flex items-start justify-between">
                      <motion.div
                        className="relative"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                      >
                        <div className={`relative w-20 h-20 ${pillar.iconBg} rounded-2xl shadow-lg flex items-center justify-center border border-white/10`}>
                          <Icon className="w-10 h-10 text-white drop-shadow-lg" strokeWidth={2.5} />
                        </div>
                      </motion.div>
                      
                      <div className={`text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-br ${pillar.gradient} opacity-50 leading-none`}>
                        {pillar.number}
                      </div>
                    </div>

                    {/* Title & Subtitle */}
                    <div className="space-y-2">
                      <h3 className="text-2xl">{pillar.title}</h3>
                      <p className={`text-sm font-medium text-transparent bg-clip-text bg-gradient-to-r ${pillar.gradient}`}>
                        {pillar.subtitle}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed">
                      {pillar.description}
                    </p>

                    {/* Divider */}
                    <div className="relative h-px overflow-hidden">
                      <div className={`absolute inset-0 bg-gradient-to-r ${pillar.gradient} opacity-20`} />
                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-r ${pillar.gradient}`}
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 + index * 0.2 }}
                        style={{ transformOrigin: 'left' }}
                      />
                    </div>

                    {/* Details List */}
                    <ul className="space-y-3">
                      {pillar.details.map((detail, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: 0.6 + index * 0.2 + idx * 0.1 }}
                          className="flex items-start gap-3 text-sm text-muted-foreground group/item"
                        >
                          <motion.div
                            className={`mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r ${pillar.gradient} flex-shrink-0`}
                            whileHover={{ scale: 1.5 }}
                          />
                          <span className="group-hover/item:text-foreground transition-colors">{detail}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Bottom Border Accent */}
                  <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-0.5 bg-gradient-to-r ${pillar.gradient} opacity-60`} />
                </div>
              </motion.div>
            );
          })}

          {/* Premium Connection Lines - Between Card 1 and 2 */}
          <div className="absolute top-1/2 left-[33.333%] w-[33.333%] -translate-y-1/2 hidden md:block pointer-events-none">
            <PremiumConnectionLine />
          </div>

          {/* Premium Connection Lines - Between Card 2 and 3 */}
          <div className="absolute top-1/2 left-[66.666%] w-[33.333%] -translate-y-1/2 hidden md:block pointer-events-none">
            <PremiumConnectionLine reverse />
          </div>
        </div>

        {/* Flow Description - Mobile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center md:hidden"
        >
          <div className="inline-flex items-center gap-3 px-5 py-3 bg-card/50 border border-primary/20 rounded-full backdrop-blur-sm">
            <div className="w-2 h-2 rounded-full bg-primary" />
            <span className="text-sm text-muted-foreground">Fluxo contínuo de valor</span>
            <div className="w-2 h-2 rounded-full bg-primary" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
