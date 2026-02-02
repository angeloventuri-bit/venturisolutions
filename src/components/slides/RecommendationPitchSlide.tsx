import { motion } from 'motion/react';
import { Lightbulb, CheckCircle, ArrowRight, Star } from 'lucide-react';
import { PremiumGlow } from '../visuals/PremiumGlow';
import { GridPattern } from '../visuals/GridPattern';

export function RecommendationPitchSlide() {
  return (
    <div className="relative min-h-screen bg-background overflow-hidden py-12 sm:py-20 px-4 sm:px-6 flex items-center">
      <PremiumGlow />
      <GridPattern />
      
      <div className="relative z-10 max-w-5xl mx-auto overflow-x-hidden w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10 sm:mb-12"
        >
          <div className="inline-block glass-premium px-4 sm:px-6 py-2 sm:py-3 rounded-full mb-4 sm:mb-6">
            <p className="text-xs sm:text-sm text-primary uppercase tracking-wider">Momento Estratégico</p>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl text-white mb-4 sm:mb-6 px-4">
            O Momento da Recomendação
          </h1>
          <p className="text-base sm:text-lg text-gray-400 max-w-3xl mx-auto px-4">
            Este é o momento de ativar o compromisso firmado
          </p>
        </motion.div>

        {/* Main Strategy Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="relative mb-10 sm:mb-12"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-primary via-red-600 to-primary rounded-3xl blur-xl opacity-30" />
          <div className="relative glass-premium p-8 sm:p-10 md:p-12 rounded-3xl border-2 border-primary/30">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-primary to-red-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                <Lightbulb className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
              </div>

              <div className="flex-1">
                <h2 className="text-2xl sm:text-3xl text-white mb-4">
                  Script para o Apresentador
                </h2>
                <blockquote className="text-base sm:text-lg text-gray-300 mb-6 italic border-l-4 border-primary pl-4">
                  "Excelente. Agora que temos um diagnóstico claro dos desafios e das soluções que podemos aplicar, 
                  e antes de falarmos sobre o investimento, lembra do nosso combinado?"
                  <br /><br />
                  "Com base em tudo que você viu, quem são aqueles <span className="text-primary">2 ou 3 empresários</span> que viriam à sua mente 
                  e que se beneficiariam de ter essa mesma clareza estratégica?"
                </blockquote>
                
                <div className="glass p-4 rounded-lg">
                  <p className="text-sm text-gray-400">
                    <span className="text-primary">Importante:</span> Anote os nomes. Isso reforça o valor do seu diagnóstico antes mesmo de apresentar o preço.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="relative"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Step 1 */}
            <div className="flex-1 glass-premium p-6 rounded-2xl text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl">1</span>
              </div>
              <h3 className="text-lg sm:text-xl text-white mb-2">Diagnóstico</h3>
              <p className="text-xs sm:text-sm text-gray-400">Análise completa dos desafios</p>
            </div>

            <ArrowRight className="hidden md:block w-8 h-8 text-primary flex-shrink-0" />
            <ArrowRight className="md:hidden w-6 h-6 text-primary rotate-90 flex-shrink-0" />

            {/* Step 2 - Highlighted */}
            <div className="flex-1 relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-red-600 rounded-2xl blur opacity-40" />
              <div className="relative glass-premium p-6 rounded-2xl text-center border-2 border-primary/50">
                <div className="w-12 h-12 bg-gradient-to-r from-primary to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl text-white mb-2">Recomendação</h3>
                <p className="text-xs sm:text-sm text-primary">Momento ideal! ⭐</p>
              </div>
            </div>

            <ArrowRight className="hidden md:block w-8 h-8 text-primary flex-shrink-0" />
            <ArrowRight className="md:hidden w-6 h-6 text-primary rotate-90 flex-shrink-0" />

            {/* Step 3 */}
            <div className="flex-1 glass-premium p-6 rounded-2xl text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl">3</span>
              </div>
              <h3 className="text-lg sm:text-xl text-white mb-2">Apresentação</h3>
              <p className="text-xs sm:text-sm text-gray-400">Produtos e precificação</p>
            </div>
          </div>
        </motion.div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-8 sm:mt-10 text-center"
        >
          <div className="glass p-4 sm:p-6 rounded-xl max-w-3xl mx-auto">
            <p className="text-sm sm:text-base text-gray-400">
              <span className="text-primary">Resultado:</span> Quando chegar no fechamento, a recomendação já está garantida,
              independente da decisão de compra imediata
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
