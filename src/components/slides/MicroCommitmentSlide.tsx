import { motion } from 'motion/react';
import { Handshake, Users, CheckCircle2, TrendingUp } from 'lucide-react';
import { PremiumGlow } from '../visuals/PremiumGlow';
import { GridPattern } from '../visuals/GridPattern';

export function MicroCommitmentSlide() {
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
            <p className="text-xs sm:text-sm text-primary uppercase tracking-wider">Compromisso Mútuo</p>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl text-white mb-4 sm:mb-6 px-4">
            Microcompromisso da Recomendação
          </h1>
        </motion.div>

        {/* Main Content Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="relative mb-8 sm:mb-12"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-primary via-red-600 to-primary rounded-3xl blur-xl opacity-30" />
          <div className="relative glass-premium p-8 sm:p-10 md:p-12 rounded-3xl border-2 border-primary/30">
            <div className="flex justify-center mb-6 sm:mb-8">
              <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-primary to-red-600 rounded-2xl flex items-center justify-center">
                <Handshake className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
              </div>
            </div>

            <blockquote className="text-lg sm:text-xl md:text-2xl text-gray-200 text-center leading-relaxed mb-6 sm:mb-8">
              "Inclusive, <span className="text-primary">[Nome do Cliente]</span>, com base no que conversamos, eu já identifiquei que alguns dos seus principais desafios são: 
              <span className="text-white">[Mencione 2 ou 3 dores que ele citou, ex: a geração de leads qualificados e o desalinhamento entre marketing e vendas]</span>.
              <br /><br />
              Se eu cumprir o meu papel aqui, que é trazer soluções reais e um plano claro para esses pontos, 
              quero que você pense em <span className="text-primary">outros 2 ou 3 empresários</span> que possam estar enfrentando algo parecido 
              e que também poderiam se beneficiar de uma conversa como essa.
              <br /><br />
              <span className="text-2xl sm:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-primary to-red-600">
                Combinado?
              </span>
            </blockquote>
          </div>
        </motion.div>

        {/* Benefits */}
        <div className="grid sm:grid-cols-3 gap-4 sm:gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="glass p-6 rounded-xl text-center"
          >
            <CheckCircle2 className="w-10 h-10 sm:w-12 sm:h-12 text-primary mx-auto mb-3" />
            <h3 className="text-base sm:text-lg text-white mb-2">Compromisso Antecipado</h3>
            <p className="text-xs sm:text-sm text-gray-400">Reduz objeções futuras</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="glass p-6 rounded-xl text-center"
          >
            <Users className="w-10 h-10 sm:w-12 sm:h-12 text-primary mx-auto mb-3" />
            <h3 className="text-base sm:text-lg text-white mb-2">Rede de Indicações</h3>
            <p className="text-xs sm:text-sm text-gray-400">Crescimento orgânico</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="glass p-6 rounded-xl text-center"
          >
            <TrendingUp className="w-10 h-10 sm:w-12 sm:h-12 text-primary mx-auto mb-3" />
            <h3 className="text-base sm:text-lg text-white mb-2">Valor Percebido</h3>
            <p className="text-xs sm:text-sm text-gray-400">Cliente como parceiro</p>
          </motion.div>
        </div>

        {/* Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-8 text-center"
        >
          <p className="text-sm text-gray-500 italic">
            <span className="text-primary">Nota para o apresentador:</span> Faça esta proposta com confiança, como um alinhamento de parceria
          </p>
        </motion.div>
      </div>
    </div>
  );
}
