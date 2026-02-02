import { motion } from "motion/react";
import { PremiumGlow } from "../visuals/PremiumGlow";
import { GridPattern } from "../visuals/GridPattern";
import { VenturiLogo } from "../VenturiLogo";
import { StaticCompanyLogos } from "../visuals/StaticCompanyLogos";

export function QuickOpeningSlide() {
  return (
    <div className="relative w-full flex-1 flex flex-col justify-center items-center overflow-hidden bg-background p-6">
      <PremiumGlow />
      <GridPattern />

      {/* Main Content - Centered */}
      <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="space-y-4 sm:space-y-6 w-full"
        >
          {/* Venturi Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-primary/30 rounded-3xl blur-2xl opacity-40" />
              <VenturiLogo
                variant="icon-large"
                size="lg"
                className="relative filter drop-shadow-xl"
              />
            </div>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-3xl sm:text-4xl md:text-5xl text-white pt-2 px-4"
          >
            Venturi Solutions
          </motion.h1>

          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="pt-3"
          >
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-transparent bg-clip-text bg-gradient-to-r from-[#8B1538] via-[#A31D45] to-[#8B1538] max-w-2xl mx-auto break-words px-4">
              Comunicação para Resultado através de Tecnologia
            </p>
            <p className="text-xs sm:text-sm md:text-base text-gray-400 max-w-xl mx-auto mt-3 px-4">
              Conectamos oferta e demanda. Conectamos o que você
              oferece a quem realmente precisa.
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Footer - Static Company Logos */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="relative z-10 pb-8"
      >
        <StaticCompanyLogos />
      </motion.div>
    </div>
  );
}