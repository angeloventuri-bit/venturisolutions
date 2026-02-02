import { motion } from 'motion/react';
import { TrendingUp, MapPin, BarChart, Quote, Target } from 'lucide-react';
import { PremiumGlow } from '../visuals/PremiumGlow';
import { GridPattern } from '../visuals/GridPattern';

const metrics = [
  {
    icon: TrendingUp,
    value: '+150%',
    label: 'Leads Qualificados',
    detail: 'em 6 meses',
    extra: '-42% CAC'
  },
  {
    icon: MapPin,
    value: '1ª Posição',
    label: 'Google Maps',
    detail: 'buscas locais',
    extra: '+88% ligações'
  },
  {
    icon: BarChart,
    value: '3-5x',
    label: 'ROI Médio',
    detail: 'em campanhas',
    extra: 'Resultados mensuráveis'
  },
];

const clients = [
  'AlphaTech Solutions',
  'Innovare Consulting',
  'TechFlow Systems',
  'Vanguard Industries',
  'NexGen Business',
];

export function ProvenResultsSlide() {
  return (
    <div className="relative min-h-screen bg-background overflow-hidden py-12 sm:py-20 px-4 sm:px-6">
      <PremiumGlow />
      <GridPattern />
      
      <div className="relative z-10 max-w-6xl mx-auto overflow-x-hidden w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12 sm:mb-16 px-4"
        >
          <div className="inline-block glass-premium px-4 sm:px-6 py-2 sm:py-3 rounded-full mb-4 sm:mb-6">
            <p className="text-xs sm:text-sm text-primary uppercase tracking-wider">Prova Social</p>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl text-white mb-4 sm:mb-6">
            Resultados Comprovados
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            Mais de 50 empresas B2B transformadas nos últimos 3 anos
          </p>
        </motion.div>

        {/* Metrics */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16 px-4">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-red-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition-all" />
              <div className="relative glass-premium p-8 rounded-2xl text-center">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-red-600 rounded-xl flex items-center justify-center">
                    <metric.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <p className="text-5xl text-transparent bg-clip-text bg-gradient-to-r from-primary via-red-500 to-red-600 mb-2">
                  {metric.value}
                </p>
                <p className="text-xl text-white mb-4">{metric.label}</p>
                <div className="pt-4 border-t border-gray-800">
                  <p className="text-sm text-gray-400 mb-1">{metric.detail}</p>
                  <p className="text-sm text-primary">{metric.extra}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="relative mb-8 sm:mb-12 px-4"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-primary via-red-600 to-red-700 rounded-2xl blur-lg opacity-20" />
          <div className="relative glass-premium p-6 sm:p-8 md:p-10 rounded-2xl border-2 border-primary/30">
            <Quote className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-primary/30 mb-4 sm:mb-6" />
            <blockquote className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed mb-4 sm:mb-6">
              "A Venturi não é apenas uma agência – são nossos parceiros estratégicos de crescimento. Pela primeira vez temos clareza do ROI de cada ação e um pipeline previsível."
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-gradient-to-br from-primary to-red-600 rounded-full flex items-center justify-center">
                <span className="text-white text-xl">CA</span>
              </div>
              <div>
                <p className="text-white">Carlos Andrade</p>
                <p className="text-sm text-gray-400">CEO, AlphaTech Solutions</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Client Logos */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center px-4"
        >
          <p className="text-sm sm:text-base text-gray-500 mb-4 sm:mb-6">Empresas que confiam na Venturi:</p>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 lg:gap-8">
            {clients.map((client, index) => (
              <div key={index} className="glass px-3 sm:px-4 md:px-6 py-2 sm:py-3 rounded-lg">
                <p className="text-xs sm:text-sm md:text-base text-gray-400">{client}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
