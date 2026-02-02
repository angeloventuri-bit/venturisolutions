import { motion } from 'motion/react';
import { Target, Users, TrendingUp } from 'lucide-react';
import { PremiumGlow } from '../visuals/PremiumGlow';
import { GridPattern } from '../visuals/GridPattern';
import { VenturiLogo } from '../VenturiLogo';

const pillars = [
  {
    icon: Target,
    title: 'Estratégia Data-Driven',
    description: 'Decisões baseadas em dados, não achismos'
  },
  {
    icon: Users,
    title: 'Parceria, não Fornecedor',
    description: 'Trabalhamos lado a lado com seu time'
  },
  {
    icon: TrendingUp,
    title: 'ROI Mensurável',
    description: 'Transparência total em cada real investido'
  },
];

export function CompanyIntroSlide() {
  return (
    <div className="relative min-h-screen bg-background overflow-hidden py-12 sm:py-20 px-4 sm:px-6">
      <PremiumGlow />
      <GridPattern />
      
      <div className="relative z-10 max-w-5xl mx-auto overflow-x-hidden w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="flex justify-center mb-6 sm:mb-8">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/30 rounded-3xl blur-3xl opacity-50" />
              <VenturiLogo variant="icon-large" size="xl" className="relative filter drop-shadow-2xl" />
            </div>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl text-white mb-4 sm:mb-6 px-4">
            Venturi Solutions
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-400 mb-3 sm:mb-4 px-4">
            Comunicação para Resultado & Estratégia de Vendas B2B
          </p>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-[#8B1538] via-[#A31D45] to-[#8B1538] max-w-3xl mx-auto break-words px-4">
            "Conectamos sua Empresa ao crescimento que ela Merece."
          </p>
        </motion.div>

        {/* Value Proposition */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="relative mb-12 sm:mb-16"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-[#8B1538] to-[#A31D45] rounded-3xl blur-lg opacity-25" />
          <div className="relative glass-premium p-6 sm:p-8 md:p-10 rounded-3xl border-2 border-primary/30">
            <h2 className="text-xl sm:text-2xl md:text-3xl text-white mb-4 sm:mb-6 text-center">Nossa Filosofia: Value as a Service</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed text-center mb-4 sm:mb-6">
              Não vendemos simplesmente "serviços avulsos". Entregamos <span className="text-primary">valor como serviço</span>.
            </p>
            <p className="text-sm sm:text-base md:text-lg text-gray-400 text-center">
              Cada ação é medida, cada resultado é transparente, e cada investimento retorna multiplicado.
            </p>
          </div>
        </motion.div>

        {/* Pillars */}
        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="glass-premium p-8 rounded-2xl hover:border-primary/30 transition-all text-center"
            >
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[#8B1538] to-[#A31D45] rounded-xl flex items-center justify-center">
                  <pillar.icon className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-xl text-white mb-3">{pillar.title}</h3>
              <p className="text-gray-400">{pillar.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
