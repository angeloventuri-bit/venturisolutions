import { motion } from 'motion/react';
import { Search, FileText, Target, TrendingUp, RefreshCw, ArrowRight } from 'lucide-react';
import { PremiumGlow } from '../visuals/PremiumGlow';
import { GridPattern } from '../visuals/GridPattern';

const cycleSteps = [
  {
    icon: Search,
    title: 'Kickoff e Diagnóstico',
    description: 'Estudo detalhado do cliente: onde está, o que procura e suas necessidades principais.',
    color: 'from-[#8B1538] to-[#A31D45]',
    position: 'top',
  },
  {
    icon: Target,
    title: 'Público Alvo e ICP',
    description: 'Desenvolvimento e definição de Público Alvo e Cliente Ideal (ICP) para comunicação assertiva.',
    color: 'from-[#A31D45] to-[#8B1538]',
    position: 'right',
  },
  {
    icon: FileText,
    title: 'Jornada e Estratégia',
    description: 'Criação da jornada de comunicação por persona e elaboração do plano estratégico completo.',
    color: 'from-[#8B1538] to-[#6B0F2A]',
    position: 'bottom',
  },
  {
    icon: TrendingUp,
    title: 'Roteiro de Funis',
    description: 'Definição do roteiro de funis por canal para cada meio de comunicação e otimização contínua.',
    color: 'from-[#6B0F2A] to-[#A31D45]',
    position: 'left',
  },
];

export function ContinuousImprovementSlide() {
  return (
    <div className="relative min-h-screen bg-background overflow-hidden py-12 sm:py-16 px-4 sm:px-6 flex items-center">
      <PremiumGlow />
      <GridPattern />
      
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8 sm:mb-12"
        >
          <div className="inline-block glass-premium px-4 sm:px-6 py-2 sm:py-3 rounded-full mb-4 sm:mb-6 border border-primary/30">
            <p className="text-xs sm:text-sm text-primary uppercase tracking-wider">Reestruturação Estratégica</p>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl text-white mb-3 sm:mb-4 px-4">
            Nossa Metodologia de Trabalho
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto px-4">
            Processo de 8-12 semanas que estabelece o norte ideal para sua comunicação
          </p>
        </motion.div>

        {/* Desktop: Rectangular Cycle Layout */}
        <div className="hidden lg:block relative mb-8">
          <div className="relative w-full max-w-5xl mx-auto" style={{ height: '500px' }}>
            {/* Center Icon */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, type: "spring" }}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"
            >
              <div className="relative">
                <div className="absolute -inset-3 bg-gradient-to-r from-[#8B1538] via-[#A31D45] to-[#8B1538] rounded-full blur-xl opacity-40" />
                <div className="relative w-20 h-20 bg-gradient-to-br from-[#8B1538] to-[#A31D45] rounded-full flex items-center justify-center border-4 border-background shadow-2xl">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    <RefreshCw className="w-10 h-10 text-white" />
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Rectangular Border with Gradient */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[85%] h-[85%] rounded-2xl border-2 border-primary/20 relative">
                {/* Animated gradient overlay on border */}
                <div className="absolute -inset-[2px] rounded-2xl opacity-30">
                  <motion.div
                    className="w-full h-full rounded-2xl"
                    style={{
                      background: 'linear-gradient(90deg, #8B1538 0%, #A31D45 25%, #8B1538 50%, #A31D45 75%, #8B1538 100%)',
                      backgroundSize: '200% 100%',
                    }}
                    animate={{
                      backgroundPosition: ['0% 0%', '200% 0%'],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Animated Arrows */}
            {/* Top to Right */}
            <motion.div
              className="absolute"
              style={{ top: '7.5%', right: '7.5%' }}
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0 }}
            >
              <ArrowRight className="w-8 h-8 text-primary rotate-45" />
            </motion.div>

            {/* Right to Bottom */}
            <motion.div
              className="absolute"
              style={{ bottom: '7.5%', right: '7.5%' }}
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            >
              <ArrowRight className="w-8 h-8 text-primary rotate-[135deg]" />
            </motion.div>

            {/* Bottom to Left */}
            <motion.div
              className="absolute"
              style={{ bottom: '7.5%', left: '7.5%' }}
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            >
              <ArrowRight className="w-8 h-8 text-primary rotate-[225deg]" />
            </motion.div>

            {/* Left to Top */}
            <motion.div
              className="absolute"
              style={{ top: '7.5%', left: '7.5%' }}
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
            >
              <ArrowRight className="w-8 h-8 text-primary rotate-[315deg]" />
            </motion.div>

            {/* Step Cards at Rectangle Corners */}
            {/* TOP - Análise e Diagnóstico */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="absolute top-0 left-1/2 transform -translate-x-1/2"
            >
              <StepCard step={cycleSteps[0]} index={0} />
            </motion.div>

            {/* RIGHT - Plano de Ação */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="absolute right-0 top-1/2 transform -translate-y-1/2"
            >
              <StepCard step={cycleSteps[1]} index={1} />
            </motion.div>

            {/* BOTTOM - Resultado */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2"
            >
              <StepCard step={cycleSteps[2]} index={2} />
            </motion.div>

            {/* LEFT - Otimização */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              className="absolute left-0 top-1/2 transform -translate-y-1/2"
            >
              <StepCard step={cycleSteps[3]} index={3} />
            </motion.div>
          </div>
        </div>

        {/* Tablet: 2x2 Grid */}
        <div className="hidden md:grid lg:hidden md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-8">
          {cycleSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
            >
              <StepCard step={step} index={index} />
            </motion.div>
          ))}
        </div>

        {/* Mobile: Vertical Stack */}
        <div className="md:hidden space-y-4 max-w-lg mx-auto mb-8">
          {cycleSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
            >
              <MobileStepCard step={step} index={index} />
            </motion.div>
          ))}
        </div>

        {/* Bottom Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="text-center"
        >
          <div className="inline-block glass-premium px-6 py-3 rounded-xl border border-primary/30 max-w-2xl">
            <p className="text-sm sm:text-base text-gray-300">
              Todos os serviços são direcionados por esta metodologia e pelos <span className="text-primary">valores definidos no diagnóstico inicial</span>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

// Desktop/Tablet Step Card Component
function StepCard({ step, index }: { step: typeof cycleSteps[0]; index: number }) {
  const Icon = step.icon;
  
  return (
    <div className="relative group w-56">
      <div className={`absolute -inset-0.5 bg-gradient-to-r ${step.color} rounded-xl blur opacity-20 group-hover:opacity-40 transition-all`} />
      <div className="relative glass-premium p-4 rounded-xl border border-primary/20 hover:border-primary/40 transition-all">
        {/* Number Badge */}
        <div className="absolute -top-2 -right-2 z-10">
          <div className={`w-8 h-8 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center border-2 border-background shadow-lg`}>
            <span className="text-white text-sm">{index + 1}</span>
          </div>
        </div>

        {/* Icon */}
        <div className={`w-12 h-12 bg-gradient-to-br ${step.color} rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
        
        {/* Title */}
        <h3 className="text-base text-white mb-2">{step.title}</h3>
        
        {/* Description */}
        <p className="text-xs text-gray-400 leading-relaxed">{step.description}</p>
      </div>
    </div>
  );
}

// Mobile Step Card Component
function MobileStepCard({ step, index }: { step: typeof cycleSteps[0]; index: number }) {
  const Icon = step.icon;
  
  return (
    <div className="relative group">
      <div className={`absolute -inset-0.5 bg-gradient-to-r ${step.color} rounded-xl blur opacity-20`} />
      <div className="relative glass-premium p-4 rounded-xl">
        <div className="flex items-start gap-4">
          {/* Icon + Number */}
          <div className="flex-shrink-0">
            <div className={`w-12 h-12 bg-gradient-to-br ${step.color} rounded-lg flex items-center justify-center mb-2`}>
              <Icon className="w-6 h-6 text-white" />
            </div>
            <div className={`text-center text-xs px-2 py-1 rounded-full bg-gradient-to-r ${step.color} text-white`}>
              {index + 1}
            </div>
          </div>
          
          {/* Content */}
          <div className="flex-1">
            <h3 className="text-base text-white mb-2">{step.title}</h3>
            <p className="text-xs text-gray-400 leading-relaxed">{step.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
