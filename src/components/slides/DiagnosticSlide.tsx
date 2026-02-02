import { motion } from 'motion/react';
import { DollarSign, Shuffle, Users, Globe } from 'lucide-react';
import { GridPattern } from '../visuals/GridPattern';

const problems = [
  {
    icon: DollarSign,
    title: 'Investimento sem Retorno',
    description: 'Você investe em Google Ads e redes sociais, mas os leads que chegam são desqualificados e o custo de aquisição (CAC) só aumenta, corroendo margens.',
    color: 'from-red-500 to-red-600'
  },
  {
    icon: Shuffle,
    title: 'Estratégia Desconectada',
    description: 'Suas ações de comunicação são iniciativas isoladas (posts, anúncios, e-mails) sem uma estratégia central ligada a objetivos claros de vendas e crescimento. Falta um plano unificado.',
    color: 'from-red-600 to-red-700'
  },
  {
    icon: Users,
    title: 'Vendas vs. Marketing em Conflito',
    description: 'O time comercial reclama da baixa qualidade dos leads, enquanto marketing se frustra com a falta de conversão. Esse desalinhamento faz a empresa perder negócios.',
    color: 'from-red-700 to-red-800'
  },
  {
    icon: Globe,
    title: 'Presença Digital que Não Vende',
    description: 'Seu site atrai visitantes, mas falha na missão principal: converter em clientes. Seu principal ativo digital virou apenas um "cartão de visita" online.',
    color: 'from-red-800 to-red-900'
  },
];

export function DiagnosticSlide() {
  return (
    <div className="relative min-h-screen bg-background overflow-hidden py-20 px-6">
      <GridPattern />
      
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-block glass-premium px-6 py-3 rounded-full mb-6">
            <p className="text-sm text-primary uppercase tracking-wider">Diagnóstico</p>
          </div>
          <h1 className="text-4xl md:text-5xl text-white mb-6">
            Problemas Comuns no Cenário Atual
          </h1>
          <p className="text-xl text-gray-400">
            Você reconhece algum destes problemas?
          </p>
        </motion.div>

        {/* Problems Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-red-600/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-all" />
              <div className="relative glass-premium p-8 rounded-2xl h-full">
                {/* Icon */}
                <div className="mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${problem.color} rounded-xl flex items-center justify-center`}>
                    <problem.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl text-white mb-4">{problem.title}</h3>
                <p className="text-gray-400 leading-relaxed">
                  {problem.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-center mt-12 glass-premium p-6 rounded-xl"
        >
          <p className="text-lg text-gray-300">
            Muitas empresas B2B se identificam com sintomas clássicos de <span className="text-primary">estagnação no crescimento</span>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
