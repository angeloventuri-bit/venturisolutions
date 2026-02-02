import { motion } from 'motion/react';
import { TrendingUp, Award, DollarSign, Target, Zap, Users } from 'lucide-react';
import { GridPattern } from '../visuals/GridPattern';
import { PremiumGlow } from '../visuals/PremiumGlow';

const highlights = [
  {
    icon: DollarSign,
    metric: 'R$ 400k',
    description: 'em 2 horas de lançamento',
    color: 'from-green-500 to-emerald-600',
  },
  {
    icon: TrendingUp,
    metric: 'ROAS 6-8',
    description: 'Retorno sobre investimento em publicidade',
    color: 'from-blue-500 to-cyan-600',
  },
  {
    icon: Target,
    metric: 'R$ 1.8M+',
    description: 'Faturamento Sim Academy (educação médica)',
    color: 'from-purple-500 to-pink-600',
  },
  {
    icon: Zap,
    metric: '3x',
    description: 'Empresas que triplicaram faturamento',
    color: 'from-orange-500 to-red-600',
  },
  {
    icon: Users,
    metric: '50/50',
    description: 'Equilíbrio tráfego pago vs. orgânico',
    color: 'from-teal-500 to-green-600',
  },
  {
    icon: Award,
    metric: '40+',
    description: 'Lançamentos de infoproduto',
    color: 'from-red-500 to-rose-600',
  },
];

const clients = [
  {
    name: 'Lexis Nexis',
    type: 'Cliente Internacional de Grande Porte',
    achievement: 'Cliente atual com certificação',
  },
  {
    name: 'Marketmers',
    type: 'Cliente Internacional',
    achievement: 'Parceria de longo prazo',
  },
  {
    name: 'Sim Academy',
    type: 'Educação Médica',
    achievement: 'R$ 1.8M+ em faturamento',
  },
];

export function ProvenResultsNewSlide() {
  return (
    <div className="relative min-h-screen bg-background overflow-hidden py-20 px-6">
      <PremiumGlow />
      <GridPattern />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-block glass-premium px-6 py-3 rounded-full mb-6">
            <p className="text-sm text-primary uppercase tracking-wider">Track Record</p>
          </div>
          <h1 className="text-4xl md:text-5xl text-white mb-6">
            Resultados Comprovados
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Grandes sucessos com empresas de infoproduto, educação continuada e educação médica
          </p>
        </motion.div>

        {/* Metrics Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              className="relative group"
            >
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${highlight.color} rounded-2xl blur opacity-20 group-hover:opacity-40 transition-all`} />
              <div className="relative glass-premium p-6 rounded-2xl h-full border border-white/10 hover:border-primary/30 transition-all">
                {/* Icon */}
                <div className="mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${highlight.color} rounded-xl flex items-center justify-center`}>
                    <highlight.icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Metric */}
                <div className="mb-2">
                  <span className="text-3xl text-white">{highlight.metric}</span>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-400">{highlight.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Clients Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="glass-premium p-8 md:p-12 rounded-2xl"
        >
          <h2 className="text-2xl md:text-3xl text-white mb-8 text-center">
            Clientes de <span className="text-primary">Destaque</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {clients.map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + index * 0.1 }}
                className="glass p-6 rounded-xl border border-primary/20 hover:border-primary/40 transition-all"
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg text-white mb-1">{client.name}</h3>
                    <p className="text-xs text-gray-500 uppercase tracking-wide mb-2">{client.type}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-400 pl-5">{client.achievement}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom Statement */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="text-center mt-12"
        >
          <div className="inline-block glass-premium px-8 py-4 rounded-xl border border-primary/30">
            <p className="text-lg text-gray-300">
              Todos os serviços da Venturi são <span className="text-primary">guiados por dados</span>, 
              <span className="text-primary"> guiados por diagnóstico</span> e 
              <span className="text-primary"> guiados por inteligência</span>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
