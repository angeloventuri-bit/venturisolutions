import { motion } from 'motion/react';
import { AlertTriangle, TrendingDown, XCircle, Users as UsersIcon, Target } from 'lucide-react';
import { GridPattern } from '../visuals/GridPattern';

const costs = [
  {
    icon: TrendingDown,
    title: 'Dinheiro Jogando Fora',
    description: 'A cada mês, orçamento de marketing é desperdiçado em canais pagos que trazem leads de baixa qualidade. O CAC inflacionado continua a corroer suas margens e limitar investimentos futuros.'
  },
  {
    icon: XCircle,
    title: 'Falta de Direção Estratégica',
    description: 'Sem uma estratégia unificada, marketing e vendas seguem táticas desconexas. O resultado? Esforços duplicados ou conflitantes, oportunidades perdidas e crescimento travado por falta de foco claro.'
  },
  {
    icon: UsersIcon,
    title: 'Times Desalinhados & Desmotivados',
    description: 'O conflito entre marketing e vendas tende a piorar – atritos internos aumentam, metas de vendas não são atingidas e talentos ficam desengajados. Você perde negócios hoje e capacidade de execução amanhã.'
  },
  {
    icon: Target,
    title: 'Oportunidades Perdidas Online',
    description: 'Um site ineficaz significa clientes em potencial escapando para a concorrência. Cada visitante que não vira lead é uma chance de venda desperdiçada, abrindo espaço para concorrentes ocuparem seu mercado digital.'
  },
];

export function InactionCostSlide() {
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
          <div className="inline-flex items-center gap-3 glass-premium px-6 py-3 rounded-full mb-6">
            <AlertTriangle className="w-5 h-5 text-primary" />
            <p className="text-sm text-primary uppercase tracking-wider">Alerta</p>
          </div>
          <h1 className="text-4xl md:text-5xl text-white mb-6">
            Custo da Inação
          </h1>
          <p className="text-xl text-gray-400">
            Por que não agir sai caro
          </p>
        </motion.div>

        {/* Costs Grid */}
        <div className="space-y-6 mb-12">
          {costs.map((cost, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-red-500/20 to-red-700/20 rounded-xl blur opacity-50 group-hover:opacity-100 transition-all" />
              <div className="relative glass-premium p-6 rounded-xl">
                <div className="flex gap-6 items-start">
                  <div className="shrink-0">
                    <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-red-700 rounded-xl flex items-center justify-center">
                      <cost.icon className="w-7 h-7 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl text-white mb-3">{cost.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{cost.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Warning */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="relative"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-primary via-red-600 to-red-700 rounded-2xl blur-lg opacity-20" />
          <div className="relative glass-premium p-8 rounded-2xl border-2 border-primary/30">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-8 h-8 text-primary shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl text-white mb-3">Em suma:</h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  A inação consolida o <span className="text-primary">platô de crescimento</span>: enquanto os problemas persistem, a concorrência avança e seu negócio deixa de capturar valor que poderia ser seu.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
