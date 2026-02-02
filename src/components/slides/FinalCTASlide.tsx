import { motion } from 'motion/react';
import { Calendar, ArrowRight, CheckCircle, Zap } from 'lucide-react';
import { PremiumGlow } from '../visuals/PremiumGlow';
import { GridPattern } from '../visuals/GridPattern';
import { Button } from '../ui/button';

const nextSteps = [
  'Sessão estratégica de 45 minutos',
  'Análise personalizada do seu cenário',
  'Proposta comercial sob medida',
  'Cronograma de implementação'
];

export function FinalCTASlide() {
  return (
    <div className="relative min-h-screen bg-background overflow-hidden py-20 px-6">
      <PremiumGlow />
      <GridPattern />
      
      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-3 glass-premium px-6 py-3 rounded-full mb-6">
            <Zap className="w-5 h-5 text-primary" />
            <p className="text-sm text-primary uppercase tracking-wider">Próximo Passo</p>
          </div>
          <h1 className="text-5xl md:text-6xl text-white mb-6">
            Vamos Conversar?
          </h1>
          <p className="text-2xl text-gray-400">
            Agende sua sessão estratégica gratuita
          </p>
        </motion.div>

        {/* Main CTA Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="relative mb-12"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-primary via-red-600 to-red-700 rounded-3xl blur-xl opacity-30" />
          <div className="relative glass-premium p-12 rounded-3xl border-2 border-primary/30">
            <div className="text-center mb-8">
              <h2 className="text-3xl text-white mb-4">
                O que acontece na sessão estratégica?
              </h2>
            </div>

            {/* Next Steps */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {nextSteps.map((step, index) => (
                <div key={index} className="flex items-center gap-4 glass p-4 rounded-xl">
                  <CheckCircle className="w-6 h-6 text-primary shrink-0" />
                  <span className="text-gray-300">{step}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.div 
              whileHover={{ scale: 1.02 }} 
              whileTap={{ scale: 0.98 }} 
              className="text-center"
            >
              <div className="relative inline-block">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-red-600 rounded-xl blur-md opacity-50" />
                <Button
                  size="lg"
                  className="relative bg-gradient-to-r from-primary to-red-600 text-white px-12 py-6 text-xl"
                >
                  <Calendar className="w-6 h-6 mr-3" />
                  Agendar Agora
                  <ArrowRight className="w-6 h-6 ml-3" />
                </Button>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Value Props */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="grid md:grid-cols-3 gap-6 mb-12"
        >
          <div className="glass p-6 rounded-xl text-center">
            <p className="text-4xl text-primary mb-2">0</p>
            <p className="text-gray-400">Custo para agendar</p>
          </div>
          <div className="glass p-6 rounded-xl text-center">
            <p className="text-4xl text-primary mb-2">45min</p>
            <p className="text-gray-400">Duração da sessão</p>
          </div>
          <div className="glass p-6 rounded-xl text-center">
            <p className="text-4xl text-primary mb-2">100%</p>
            <p className="text-gray-400">Personalizado</p>
          </div>
        </motion.div>

        {/* Bottom Message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-center"
        >
          <p className="text-xl text-gray-300 mb-4">
            Cada dia em modo estagnação é um dia perdido de crescimento.
          </p>
          <p className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-primary via-red-500 to-red-600">
            Vamos evoluir juntos?
          </p>
        </motion.div>
      </div>
    </div>
  );
}
