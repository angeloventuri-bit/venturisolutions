import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Target } from 'lucide-react';
import { PremiumGlow } from '../visuals/PremiumGlow';
import { GridPattern } from '../visuals/GridPattern';

const principles = [
  'Diagnóstico aprofundado antes de qualquer ação',
  'Geração de valor baseada em dados e inteligência',
  'Conexão estratégica entre oferta e demanda',
  'Resultados mensuráveis e sustentáveis',
];

export function TransitionToSolutionsSlide() {
  return (
    <div className="relative min-h-screen bg-background overflow-hidden py-20 px-6 flex items-center">
      <PremiumGlow />
      <GridPattern />
      
      <div className="relative z-10 max-w-6xl mx-auto w-full">
        {/* Main Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-block glass-premium px-6 py-3 rounded-full mb-8 border border-primary/30">
            <p className="text-sm text-primary uppercase tracking-wider">Nossa Abordagem</p>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-white mb-8 max-w-4xl mx-auto leading-tight">
            Como Transformamos Esse Cenário?
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-4">
            Através de <span className="text-primary">metodologia estruturada</span> e <span className="text-primary">tecnologia aplicada</span>
          </p>
        </motion.div>

        {/* Visual Journey */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="relative mb-12"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-primary via-red-600 to-primary rounded-3xl blur-2xl opacity-20" />
          <div className="relative glass-premium p-8 md:p-12 rounded-3xl border border-primary/20">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              {/* Problem */}
              <div className="text-center">
                <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-red-500/50">
                  <div className="w-3 h-3 bg-red-500 rounded-full" />
                </div>
                <p className="text-gray-400">Problema</p>
                <p className="text-sm text-gray-500 mt-2">Desconexão</p>
              </div>

              {/* Arrow */}
              <div className="flex justify-center">
                <motion.div
                  animate={{ x: [0, 10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <ArrowRight className="w-12 h-12 text-primary hidden md:block" />
                  <ArrowRight className="w-8 h-8 text-primary md:hidden rotate-90" />
                </motion.div>
              </div>

              {/* Solution */}
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-green-500/50">
                  <Target className="w-8 h-8 text-green-500" />
                </div>
                <p className="text-white">Solução</p>
                <p className="text-sm text-green-400 mt-2">Conexão Estratégica</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Principles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto"
        >
          {principles.map((principle, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 + index * 0.1 }}
              className="glass p-4 rounded-xl flex items-start gap-3"
            >
              <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <p className="text-gray-300">{principle}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-center mt-12"
        >
          <p className="text-lg text-gray-400">
            Vamos mostrar <span className="text-white">como aplicamos isso na prática</span>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
