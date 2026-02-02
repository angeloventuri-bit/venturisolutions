import { motion } from 'motion/react';
import { Lightbulb, ArrowRight, CheckCircle2 } from 'lucide-react';
import { PremiumGlow } from '../visuals/PremiumGlow';
import { GridPattern } from '../visuals/GridPattern';

const steps = [
  {
    number: '1',
    title: 'Entendemos Seu Negócio',
    description: 'Diagnóstico aprofundado do seu mercado, cliente e posicionamento atual',
    color: 'from-blue-600 to-blue-700',
  },
  {
    number: '2',
    title: 'Geramos Valor Estratégico',
    description: 'Desenvolvemos a estratégia ideal para conectar sua oferta à demanda',
    color: 'from-purple-600 to-purple-700',
  },
  {
    number: '3',
    title: 'Executamos com Tecnologia',
    description: 'Implementamos as soluções certas guiadas por dados e inteligência',
    color: 'from-primary to-red-600',
  },
  {
    number: '4',
    title: 'Mensuramos e Otimizamos',
    description: 'Acompanhamos resultados e ajustamos continuamente para máxima performance',
    color: 'from-green-600 to-green-700',
  },
];

export function ApplicationSlide() {
  return (
    <div className="relative min-h-screen bg-background overflow-hidden py-12 sm:py-20 px-4 sm:px-6">
      <PremiumGlow />
      <GridPattern />
      
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-3 glass-premium px-6 py-3 rounded-full mb-6 border border-primary/30">
            <Lightbulb className="w-5 h-5 text-primary" />
            <p className="text-sm text-primary uppercase tracking-wider">Como Aplicamos</p>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl text-white mb-6 px-4">
            Como Isso Funciona no Seu Caso
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto px-4">
            Um processo estruturado que transforma desafios em oportunidades reais
          </p>
        </motion.div>

        {/* Steps */}
        <div className="space-y-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 + index * 0.15 }}
              className="relative group"
            >
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${step.color} rounded-2xl blur opacity-0 group-hover:opacity-30 transition-all`} />
              <div className="relative glass-premium p-6 sm:p-8 rounded-2xl border border-white/10 hover:border-primary/30 transition-all">
                <div className="flex items-start gap-4 sm:gap-6">
                  {/* Number Badge */}
                  <div className={`w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg`}>
                    <span className="text-2xl sm:text-3xl text-white">{step.number}</span>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-1">
                    <h3 className="text-xl sm:text-2xl text-white mb-3">{step.title}</h3>
                    <p className="text-base sm:text-lg text-gray-400 leading-relaxed">{step.description}</p>
                  </div>

                  {/* Check Icon */}
                  <div className="hidden sm:block">
                    <CheckCircle2 className="w-6 h-6 text-green-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              </div>

              {/* Connecting Arrow (except for last item) */}
              {index < steps.length - 1 && (
                <div className="flex justify-center my-2">
                  <motion.div
                    animate={{ y: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: index * 0.2 }}
                  >
                    <ArrowRight className="w-6 h-6 text-primary rotate-90" />
                  </motion.div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-12 text-center"
        >
          <div className="glass-premium p-6 sm:p-8 rounded-2xl border border-primary/20 max-w-3xl mx-auto">
            <p className="text-lg sm:text-xl text-gray-300">
              <span className="text-white">Cada etapa é personalizada</span> de acordo com o diagnóstico inicial e as necessidades específicas do seu negócio
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
