import { motion } from 'motion/react';
import { Compass, Megaphone, Globe, Search, GraduationCap, Bot } from 'lucide-react';
import { PremiumGlow } from '../visuals/PremiumGlow';
import { GridPattern } from '../visuals/GridPattern';

const products = [
  {
    name: 'Reestruturação Estratégica',
    description: 'Processo de 8-12 semanas: diagnóstico, ICP, jornada e plano estratégico completo',
    price: 'Consultar',
    icon: Compass,
    color: 'from-[#8B1538] to-[#A31D45]',
  },
  {
    name: 'Ads & Performance',
    description: 'Tráfego pago com metodologia de criativos lucrativos (Redes Sociais e Google)',
    price: 'A partir de R$ 2.500/mês',
    icon: Megaphone,
    color: 'from-red-600 to-red-700',
  },
  {
    name: 'SEO & DIO',
    description: 'SEO tradicional + Generative Engine Optimization para crescimento orgânico',
    price: 'R$ 3.500/mês',
    icon: Search,
    color: 'from-red-700 to-red-800',
  },
  {
    name: 'Sites & Landing Pages',
    description: 'Copywriter, design performático e integração de dados (SLA 1 mês ou 2 semanas)',
    price: 'A partir de R$ 2.500',
    icon: Globe,
    color: 'from-red-500 to-red-600',
  },
  {
    name: 'Treinamento & Educação Continuada',
    description: 'Formação de equipes e lançamentos de infoprodutos (40+ lançamentos)',
    price: 'Consultar',
    icon: GraduationCap,
    color: 'from-red-600 to-red-700',
  },
  {
    name: 'Agentes de IA',
    description: 'Comercial, account manager, secretária - automatização inteligente',
    price: 'R$ 3.500',
    icon: Bot,
    color: 'from-red-500 to-red-600',
  },
];

export function ProductPricingSelectionSlide() {
  return (
    <div className="relative w-full flex-1 flex flex-col justify-center items-center overflow-hidden bg-background py-8 sm:py-12 px-4 sm:px-6">
      <PremiumGlow />
      <GridPattern />
      
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col justify-center h-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8 sm:mb-12"
        >
          <div className="inline-block glass-premium px-4 sm:px-6 py-2 sm:py-3 rounded-full mb-4 sm:mb-6">
            <p className="text-xs sm:text-sm text-primary uppercase tracking-wider">Investimento</p>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl text-white mb-4 px-4">
            Vamos Falar de Números
          </h1>
          <p className="text-base sm:text-lg text-gray-400 max-w-3xl mx-auto px-4">
            Soluções flexíveis que podem ser contratadas individualmente ou em pacotes combinados
          </p>
        </motion.div>

        {/* Transition Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-10"
        >
          <div className="glass p-6 rounded-xl max-w-3xl mx-auto border border-primary/20 text-center">
            <p className="text-lg text-gray-300">
              Baseado em <span className="text-primary">tudo que vimos até agora</span>, vamos conversar sobre qual combinação de soluções faz mais sentido para o seu momento atual
            </p>
          </div>
        </motion.div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {products.map((product, index) => {
            const Icon = product.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.05 }}
                className="relative group"
              >
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${product.color} rounded-2xl blur opacity-20 group-hover:opacity-40 transition-all`} />
                <div className="relative glass-premium p-6 rounded-2xl h-full border border-white/10 hover:border-primary/30 transition-all">
                  {/* Icon */}
                  <div className="mb-4">
                    <div className={`w-14 h-14 bg-gradient-to-br ${product.color} rounded-xl flex items-center justify-center`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                  </div>

                  {/* Name */}
                  <h3 className="text-xl text-white mb-3">{product.name}</h3>
                  
                  {/* Description */}
                  <p className="text-sm text-gray-400 mb-4 min-h-[3rem]">{product.description}</p>
                  
                  {/* Price */}
                  <div className="pt-3 border-t border-white/10">
                    <p className="text-lg text-primary">{product.price}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center"
        >
          <div className="glass-premium p-6 rounded-xl max-w-4xl mx-auto border border-primary/20">
            <p className="text-base sm:text-lg text-gray-300">
              <span className="text-white">Todas as soluções trabalham de forma integrada</span> — você pode contratar individualmente ou em pacotes combinados. 
              <span className="text-primary block mt-2">Todos os serviços são guiados por dados, diagnóstico e inteligência.</span>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
