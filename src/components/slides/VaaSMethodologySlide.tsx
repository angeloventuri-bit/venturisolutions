import { motion } from 'motion/react';
import { ArrowRight, Target, Users, TrendingUp } from 'lucide-react';
import { PremiumGlow } from '../visuals/PremiumGlow';
import { GridPattern } from '../visuals/GridPattern';

export function VaaSMethodologySlide() {
  return (
    <div className="relative min-h-screen bg-background overflow-hidden py-12 sm:py-20 px-4 sm:px-6">
      <PremiumGlow />
      <GridPattern />
      
      <div className="relative z-10 max-w-6xl mx-auto overflow-x-hidden w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-4 sm:mb-6">
            Venturi Solutions
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 mb-6 sm:mb-8 max-w-4xl mx-auto px-4">
            Somos o elo entre o que você oferece para o mercado,<br className="hidden sm:block" /> e para quem realmente precisa
          </p>
          <div className="inline-block glass-premium px-4 sm:px-6 py-2 sm:py-3 rounded-full">
            <p className="text-sm sm:text-base text-primary">Conexão entre oferta e demanda</p>
          </div>
        </motion.div>

        {/* Value as a Service */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="mb-12 sm:mb-16"
        >
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary via-red-600 to-primary rounded-2xl blur-lg opacity-30" />
            <div className="relative glass-premium p-6 sm:p-8 md:p-12 rounded-2xl border-2 border-primary/30 text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-[#8B1538] via-[#A31D45] to-[#8B1538] mb-4 sm:mb-6">
                Metodologia Value As a Service
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
                Vamos explorar todo valor do seu produto, e fazer este valor chegar ao seu cliente ideal (ICP)!
              </p>
            </div>
          </div>
        </motion.div>

        {/* Animated Flow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="grid md:grid-cols-3 gap-6 sm:gap-8"
        >
          {/* Step 1: Produto/Serviço */}
          <motion.div
            className="relative group"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-red-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition-all" />
            <div className="relative glass-premium p-6 sm:p-8 rounded-2xl h-full flex flex-col items-center justify-center text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-primary to-red-600 rounded-xl flex items-center justify-center mb-4">
                <Target className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl text-white mb-2">Seu Produto</h3>
              <p className="text-sm sm:text-base text-gray-400">Valor único que você oferece</p>
            </div>
          </motion.div>

          {/* Arrow */}
          <div className="hidden md:flex items-center justify-center">
            <motion.div
              animate={{ x: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ArrowRight className="w-12 h-12 text-primary" />
            </motion.div>
          </div>

          {/* Step 2: Conscientização */}
          <motion.div
            className="relative group"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1 }}
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-red-600 to-primary rounded-2xl blur opacity-20 group-hover:opacity-40 transition-all" />
            <div className="relative glass-premium p-6 sm:p-8 rounded-2xl h-full flex flex-col items-center justify-center text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-red-600 to-primary rounded-xl flex items-center justify-center mb-4">
                <TrendingUp className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl text-white mb-2">Conscientização</h3>
              <p className="text-sm sm:text-base text-gray-400">Traçamos o caminho até seu ICP</p>
            </div>
          </motion.div>

          {/* Mobile Arrow */}
          <div className="md:hidden flex items-center justify-center py-4">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ArrowRight className="w-8 h-8 text-primary rotate-90" />
            </motion.div>
          </div>

          {/* Arrow 2 */}
          <div className="hidden md:flex items-center justify-center md:col-start-2">
            <motion.div
              animate={{ x: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            >
              <ArrowRight className="w-12 h-12 text-primary" />
            </motion.div>
          </div>

          {/* Step 3: Cliente Ideal */}
          <motion.div
            className="relative group md:col-start-3"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2 }}
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-red-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition-all" />
            <div className="relative glass-premium p-6 sm:p-8 rounded-2xl h-full flex flex-col items-center justify-center text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-primary to-red-600 rounded-xl flex items-center justify-center mb-4">
                <Users className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl text-white mb-2">Cliente Ideal</h3>
              <p className="text-sm sm:text-base text-gray-400">Conversão e aquisição</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
