import { motion } from 'motion/react';
import { TrendingUp, Target, Users, DollarSign, Repeat, BarChart } from 'lucide-react';
import { PremiumGlow } from '../visuals/PremiumGlow';
import { GridPattern } from '../visuals/GridPattern';

const visionPoints = [
  { icon: Target, text: 'Comunicação e vendas em sinergia total' },
  { icon: Users, text: 'Demanda qualificada constante' },
  { icon: DollarSign, text: 'Cada real investido retorna multiplicado' },
  { icon: Repeat, text: 'Pipeline repleto de oportunidades quentes' },
  { icon: TrendingUp, text: 'Receita crescendo de forma sustentável' },
  { icon: BarChart, text: 'Resultados projetados com confiança' },
];

export function GrowthVisionSlide() {
  return (
    <div className="relative min-h-screen bg-background overflow-hidden py-20 px-6">
      <PremiumGlow />
      <GridPattern />
      
      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-block glass-premium px-6 py-3 rounded-full mb-6">
            <p className="text-sm text-primary uppercase tracking-wider">A Terra Prometida</p>
          </div>
          <h1 className="text-4xl md:text-5xl text-white mb-6">
            Visão de Crescimento Previsível
          </h1>
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass-premium p-10 rounded-3xl mb-12"
        >
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-8">
            Imagine sua empresa operando com <span className="text-primary">crescimento previsível</span> – comunicação estratégica e vendas em sinergia total, gerando demanda qualificada e vendas consistentes, mês após mês.
          </p>
          
          <p className="text-lg text-gray-400 leading-relaxed mb-8">
            Nesse cenário ideal, cada real investido retorna multiplicado: seu pipeline fica repleto de oportunidades quentes, clientes ideais encontram seu produto com facilidade e a receita cresce de forma sustentável.
          </p>

          <p className="text-lg text-gray-400 leading-relaxed">
            O crescimento deixa de ser um <span className="text-white">jogo de sorte</span> e passa a ser um <span className="text-primary">processo controlado</span>, onde você projeta resultados com confiança e colhe ganhos contínuos.
          </p>
        </motion.div>

        {/* Vision Points Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visionPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="glass p-6 rounded-xl hover:border-primary/30 transition-all group"
            >
              <div className="flex flex-col items-center text-center gap-3">
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-red-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <point.icon className="w-7 h-7 text-white" />
                </div>
                <p className="text-gray-300">{point.text}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Closing Statement */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="text-center mt-12"
        >
          <p className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-primary via-red-500 to-red-600">
            Esse é o destino que buscamos atingir em conjunto.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
