import { motion } from 'motion/react';
import { AlertTriangle, TrendingDown, Clock, DollarSign, ArrowRight, Target } from 'lucide-react';
import { GridPattern } from '../visuals/GridPattern';
import { ImageWithFallback } from '../figma/ImageWithFallback';

const challenges = [
  {
    icon: TrendingDown,
    title: 'Invisibilidade Digital',
    description: 'Sua empresa existe, mas ninguém encontra você quando precisa da sua solução',
    color: 'from-red-500 to-red-600',
  },
  {
    icon: DollarSign,
    title: 'Investimento Sem Retorno',
    description: 'Gasta em marketing mas não vê resultados proporcionais ao investimento',
    color: 'from-orange-500 to-orange-600',
  },
  {
    icon: Clock,
    title: 'Desconexão com o Mercado',
    description: 'Não consegue conectar sua oferta com quem realmente precisa dela',
    color: 'from-yellow-500 to-yellow-600',
  },
];

export function ProblemContextSlide() {
  return (
    <div className="relative w-full flex-1 flex flex-col justify-center items-center overflow-hidden bg-background py-8 sm:py-12 px-4 sm:px-6">
      <GridPattern />
      
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col justify-center h-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-3 glass-premium px-6 py-3 rounded-full mb-6">
            <AlertTriangle className="w-5 h-5 text-orange-500" />
            <p className="text-sm text-orange-500 uppercase tracking-wider">O Cenário Atual</p>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl text-white mb-6 px-4">
            Desafios Comuns no Mercado Atual
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto px-4">
            Empresas enfrentam barreiras para conectar suas soluções ao mercado
          </p>
        </motion.div>

        {/* Main Content: Image + Challenges */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12 items-center">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 rounded-3xl blur-2xl opacity-20" />
            <div className="relative glass-premium p-4 rounded-3xl overflow-hidden border border-white/10">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758598306663-4874b2aff114?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcnVzdHJhdGVkJTIwYnVzaW5lc3MlMjBwZW9wbGV8ZW58MXx8fHwxNzYxOTEwNjE4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Empresas enfrentando desafios de mercado"
                className="w-full h-[300px] sm:h-[400px] object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent rounded-2xl" />
              
              {/* Overlay Text */}
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white text-lg sm:text-xl mb-2">
                  A realidade de muitas empresas hoje
                </p>
                <p className="text-gray-300 text-sm">
                  Potencial desperdiçado por falta de conexão estratégica
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right: Challenges */}
          <div className="space-y-4">
            {challenges.map((challenge, index) => {
              const Icon = challenge.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="relative group"
                >
                  <div className={`absolute -inset-0.5 bg-gradient-to-r ${challenge.color} rounded-2xl blur opacity-20 group-hover:opacity-40 transition-all`} />
                  <div className="relative glass-premium p-6 rounded-2xl border border-white/10 hover:border-primary/30 transition-all">
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 bg-gradient-to-br ${challenge.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg sm:text-xl text-white mb-2">{challenge.title}</h3>
                        <p className="text-sm text-gray-400 leading-relaxed">{challenge.description}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Key Question - Enhanced */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7 }}
          className="relative mb-12"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-primary via-red-600 to-primary rounded-3xl blur-2xl opacity-40 animate-pulse" />
          <div className="relative bg-gradient-to-br from-gray-900/95 via-gray-800/95 to-gray-900/95 backdrop-blur-xl p-8 md:p-12 lg:p-16 rounded-3xl border-2 border-primary/50 shadow-2xl">
            <div className="text-center space-y-8">
              {/* First statement */}
              <div>
                <p className="text-2xl md:text-3xl lg:text-4xl text-gray-200 mb-2 leading-relaxed">
                  A questão não é{' '}
                  <span className="relative inline-block">
                    <span className="absolute inset-0 bg-primary/30 blur-lg" />
                    <span className="relative text-primary px-3 py-1 bg-primary/10 rounded-lg border-2 border-primary/50">
                      SE
                    </span>
                  </span>
                  {' '}você tem uma solução valiosa
                </p>
              </div>

              {/* Arrow */}
              <div className="flex justify-center">
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center border border-primary/40"
                >
                  <ArrowRight className="w-6 h-6 text-primary rotate-90" />
                </motion.div>
              </div>

              {/* Key Question */}
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-red-500/20 to-primary/20 blur-2xl" />
                <div className="relative bg-gradient-to-br from-primary/10 via-red-900/10 to-primary/10 backdrop-blur-sm p-6 md:p-8 rounded-2xl border-2 border-primary/40">
                  <p className="text-xl md:text-2xl text-white mb-4">
                    A questão é:
                  </p>
                  <p className="text-2xl md:text-3xl lg:text-5xl text-white leading-tight">
                    <strong className="bg-gradient-to-r from-primary via-red-400 to-primary bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(139,21,56,0.5)]">
                      Como conectar sua oferta a quem realmente precisa dela?
                    </strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Impact Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="max-w-4xl mx-auto"
        >
          <div className="glass p-6 sm:p-8 rounded-2xl border border-green-500/30">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <Target className="w-6 h-6 text-green-500" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl sm:text-2xl text-white mb-3">
                  Esta conexão tem <span className="text-green-400">influência direta</span> em:
                </h3>
                <div className="grid sm:grid-cols-3 gap-4">
                  <div className="glass-premium p-4 rounded-xl">
                    <p className="text-3xl text-green-400 mb-1">3-10x</p>
                    <p className="text-sm text-gray-400">Retorno sobre investimento</p>
                  </div>
                  <div className="glass-premium p-4 rounded-xl">
                    <p className="text-3xl text-green-400 mb-1">40-60%</p>
                    <p className="text-sm text-gray-400">Redução de custo de aquisição</p>
                  </div>
                  <div className="glass-premium p-4 rounded-xl">
                    <p className="text-3xl text-green-400 mb-1">2-5x</p>
                    <p className="text-sm text-gray-400">Velocidade de crescimento</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
