import { motion } from 'motion/react';
import { GridPattern } from '../visuals/GridPattern';
import { ArrowRight, Package, Users, Lightbulb, Heart } from 'lucide-react';

export function ConnectionPhilosophySlide() {
  return (
    <div className="relative w-full flex-1 flex flex-col justify-center items-center overflow-hidden bg-background py-8 sm:py-12 px-4 sm:px-6">
      <GridPattern />
      
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col justify-center h-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-block glass-premium px-6 py-3 rounded-full mb-6">
            <p className="text-sm text-primary uppercase tracking-wider">Nossa Filosofia</p>
          </div>
          <h1 className="text-4xl md:text-5xl text-white mb-6">
            Quem Somos
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
            A Venturi Solutions é uma <span className="text-primary">empresa de comunicação para resultado</span> que utiliza a tecnologia.
          </p>
          <p className="text-lg text-gray-400 mt-4 max-w-3xl mx-auto">
            Nosso foco principal é trabalhar a <strong className="text-white">conexão entre oferta e demanda</strong>.
          </p>
          <p className="text-base text-gray-500 mt-3 max-w-2xl mx-auto">
            Conectamos o que você oferece — seja sua solução, produto ou serviço — a quem realmente precisa disso.
          </p>
        </motion.div>

        {/* Connection Animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mb-16"
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
            {/* Produto/Serviço */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col items-center z-10"
            >
              <div className="glass-premium p-6 md:p-8 rounded-2xl">
                <Package className="w-12 h-12 md:w-16 md:h-16 text-primary" />
              </div>
              <p className="text-sm text-gray-400 mt-4">Seu Produto</p>
            </motion.div>

            {/* Jornada de Comunicação */}
            <div className="flex flex-col md:flex-row items-center gap-0 md:gap-4 flex-1 w-full md:max-w-2xl relative">
              {/* Vertical Line for Mobile Background - simplifies alignment */}
              <div className="absolute inset-0 left-1/2 -translate-x-1/2 w-0.5 bg-gradient-to-b from-primary/20 via-primary/50 to-green-500/20 md:hidden -z-10" />

              <motion.div
                initial={{ scaleY: 0, scaleX: 0 }}
                animate={{ scaleY: 1, scaleX: 1 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="w-0.5 h-12 md:h-1 md:w-full bg-gradient-to-b md:bg-gradient-to-r from-primary to-primary/50 flex-1 origin-top md:origin-left"
              />
              
              {/* Points along the journey */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 }}
                className="flex flex-col items-center py-2 md:py-0 bg-background md:bg-transparent z-10"
              >
                <div className="glass p-3 md:p-4 rounded-lg border-2 border-red-500/30">
                  <Heart className="w-6 h-6 md:w-8 md:h-8 text-red-500" />
                </div>
                <p className="text-xs text-gray-500 mt-2 font-medium">Dor</p>
              </motion.div>

              <motion.div
                initial={{ scaleY: 0, scaleX: 0 }}
                animate={{ scaleY: 1, scaleX: 1 }}
                transition={{ delay: 1.2, duration: 0.4 }}
                className="w-0.5 h-12 md:h-1 md:w-full bg-gradient-to-b md:bg-gradient-to-r from-primary/50 to-primary flex-1 origin-top md:origin-left"
              />

              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.4 }}
                className="flex flex-col items-center py-2 md:py-0 bg-background md:bg-transparent z-10"
              >
                <div className="glass p-3 md:p-4 rounded-lg border-2 border-yellow-500/30">
                  <Lightbulb className="w-6 h-6 md:w-8 md:h-8 text-yellow-500" />
                </div>
                <p className="text-xs text-gray-500 mt-2 font-medium">Consciência</p>
              </motion.div>

              <motion.div
                initial={{ scaleY: 0, scaleX: 0 }}
                animate={{ scaleY: 1, scaleX: 1 }}
                transition={{ delay: 1.6, duration: 0.4 }}
                className="w-0.5 h-12 md:h-1 md:w-full bg-gradient-to-b md:bg-gradient-to-r from-primary to-green-500 flex-1 origin-top md:origin-left"
              />

              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.8 }}
                className="flex flex-col items-center py-2 md:py-0 bg-background md:bg-transparent z-10"
              >
                <div className="glass p-3 md:p-4 rounded-lg border-2 border-green-500/30">
                  <ArrowRight className="w-6 h-6 md:w-8 md:h-8 text-green-500 rotate-90 md:rotate-0" />
                </div>
                <p className="text-xs text-gray-500 mt-2 font-medium">Solução</p>
              </motion.div>
            </div>

            {/* Cliente Satisfeito */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2 }}
              className="flex flex-col items-center z-10"
            >
              <div className="glass-premium p-6 md:p-8 rounded-2xl border-2 border-green-500/30">
                <Users className="w-12 h-12 md:w-16 md:h-16 text-green-500" />
              </div>
              <p className="text-sm text-gray-400 mt-4">Cliente Satisfeito</p>
            </motion.div>
          </div>
        </motion.div>

        {/* VaaS Explanation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.2 }}
          className="glass-premium p-8 md:p-12 rounded-2xl max-w-5xl mx-auto"
        >
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl text-white mb-6">
              O Grande Diferencial: <span className="text-primary">Metodologia e Geração de Valor</span>
            </h2>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              Nosso grande diferencial reside na nossa <strong className="text-white">metodologia de trabalho</strong>. Nós não apenas comunicamos o que já está visível ou aparente. <strong className="text-primary">Olhamos para a sua empresa para gerar valor</strong> naquilo que você entrega, permitindo que esse valor se conecte de forma eficaz com o cliente.
            </p>
            
            <p className="text-base text-gray-400 leading-relaxed mt-4">
              Todo o nosso fluxo é orientado por um <strong className="text-white">diagnóstico aprofundado</strong>, que chamamos de <span className="text-primary">Reestruturação Estratégica</span>, e que tem como objetivo estabelecer o norte ideal para sua comunicação.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="glass p-6 rounded-xl">
                <h3 className="text-primary mb-2">Estudo do Cliente</h3>
                <p className="text-sm text-gray-400">Investigamos onde ele está, o que procura e quais suas necessidades principais</p>
              </div>
              
              <div className="glass p-6 rounded-xl">
                <h3 className="text-primary mb-2">Geração de Valor</h3>
                <p className="text-sm text-gray-400">Desenvolvemos toda a linha de comunicação a partir desse entendimento</p>
              </div>
              
              <div className="glass p-6 rounded-xl">
                <h3 className="text-primary mb-2">Dados e Inteligência</h3>
                <p className="text-sm text-gray-400">Todos os serviços são guiados por dados, diagnóstico e inteligência</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
