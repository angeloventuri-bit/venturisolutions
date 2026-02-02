import { motion } from 'motion/react';
import { PremiumGlow } from '../visuals/PremiumGlow';
import { GridPattern } from '../visuals/GridPattern';
import { VenturiLogo } from '../VenturiLogo';
import { CompanyLogosMarquee } from '../visuals/CompanyLogosMarquee';

export function OpeningSlide() {
  return (
    <div className="relative min-h-screen bg-background overflow-hidden flex flex-col">
      <PremiumGlow />
      <GridPattern />
      
      {/* Main Content - Centered */}
      <div className="relative z-10 flex-1 flex items-center justify-center overflow-x-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full overflow-x-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 sm:space-y-8"
        >
          {/* Venturi Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="flex justify-center pt-2 sm:pt-4"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-primary/30 rounded-3xl blur-3xl opacity-50" />
              <VenturiLogo variant="icon-large" size="xl" className="relative filter drop-shadow-2xl" />
            </div>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-4xl sm:text-5xl md:text-6xl text-white pt-2 sm:pt-4 px-4"
          >
            Venturi Solutions
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-lg sm:text-xl md:text-2xl text-gray-400 px-4"
          >
            Apresentação de Produtos & Soluções
          </motion.p>

          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="pt-4 sm:pt-6 px-4"
          >
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-[#8B1538] via-[#A31D45] to-[#8B1538] max-w-3xl mx-auto break-words">
              "Conectamos sua Empresa ao crescimento que ela Merece."
            </p>
          </motion.div>
        </motion.div>
        </div>
      </div>

      {/* Footer - Company Logos Marquee */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="relative z-10 pb-8"
      >
        <div className="mb-4 text-center">
          <p className="text-sm text-gray-500">Empresas que confiam em nosso trabalho</p>
        </div>
        <CompanyLogosMarquee />
      </motion.div>
    </div>
  );
}
