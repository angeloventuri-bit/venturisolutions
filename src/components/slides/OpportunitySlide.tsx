import { motion } from 'motion/react';
import { TrendingUp, Zap, Target, Rocket } from 'lucide-react';
import { PremiumGlow } from '../visuals/PremiumGlow';
import { GridPattern } from '../visuals/GridPattern';

export function OpportunitySlide() {
  return (
    <div className="relative min-h-screen bg-background overflow-hidden py-20 px-6">
      <PremiumGlow />
      <GridPattern />
      
      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 glass-premium px-6 py-3 rounded-full mb-6">
            <Zap className="w-5 h-5 text-primary" />
            <p className="text-sm text-primary uppercase tracking-wider">O Potencial</p>
          </div>
          <h1 className="text-4xl md:text-5xl text-white mb-6">
            A Oportunidade
          </h1>
          <p className="text-xl text-gray-400">
            O Gap entre Potencial e Realidade
          </p>
        </motion.div>

        {/* Visual Gap Representation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <div className="grid md:grid-cols-2 gap-8">
            {/* Current State */}
            <div className="glass p-8 rounded-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gray-600 rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl text-gray-400">Realidade Atual</h3>
              </div>
              <ul className="space-y-3 text-gray-500">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">▪</span>
                  <span>Crescimento estagnado</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">▪</span>
                  <span>Investimento desperdiçado</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">▪</span>
                  <span>Times desalinhados</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">▪</span>
                  <span>Resultados imprevisíveis</span>
                </li>
              </ul>
            </div>

            {/* Potential State */}
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-red-600 rounded-2xl blur opacity-30" />
              <div className="relative glass-premium p-8 rounded-2xl border-2 border-primary/30">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-red-600 rounded-xl flex items-center justify-center">
                    <Rocket className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl text-white">Potencial Possível</h3>
                </div>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Crescimento exponencial</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>ROI maximizado</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Eficiência integrada</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Resultados previsíveis</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="glass-premium p-10 rounded-3xl mb-8"
        >
          <p className="text-xl text-gray-300 leading-relaxed mb-6">
            Se sua empresa enfrenta parte desses desafios, fica evidente que existe um <span className="text-primary">gap entre onde você está e onde poderia estar</span>. Muitas organizações atingem um platô de crescimento e precisam de um salto estratégico para expandir além do nível atual.
          </p>
          
          <p className="text-lg text-gray-400 leading-relaxed">
            Essa diferença entre potencial e performance atual é a <span className="text-white">oportunidade de crescimento latente</span>.
          </p>
        </motion.div>

        {/* Call to Action Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="relative"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-primary via-red-600 to-red-700 rounded-2xl blur-lg opacity-20" />
          <div className="relative glass-premium p-8 rounded-2xl border border-primary/20">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 bg-gradient-to-br from-primary to-red-600 rounded-xl flex items-center justify-center shrink-0">
                <Target className="w-7 h-7 text-white" />
              </div>
              <div>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Ao atacar de frente os obstáculos diagnosticados, podemos <span className="text-primary">destravar o potencial reprimido do negócio</span>. Imagine converter aquele desperdício em ROI, transformar desalinhamento em eficiência integrada e trocar estagnação por evolução acelerada.
                </p>
                <p className="text-lg text-transparent bg-clip-text bg-gradient-to-r from-primary via-red-500 to-red-600 mt-6">
                  O que separa sua empresa de um crescimento exponencial é apenas a estratégia certa.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
