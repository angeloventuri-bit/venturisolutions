import { motion } from 'motion/react';
import { Megaphone, Target, TrendingUp, BarChart, Users, Zap, DollarSign, CheckCircle2, Award } from 'lucide-react';
import { Icon3DMegaphone } from '../icons/Icon3DMegaphone';
import { GridPattern } from '../visuals/GridPattern';

const benefits = [
  {
    title: 'Redes Sociais',
    description: 'Guerra de atenção: 5 primeiros segundos como gancho. Metodologia para criativos lucrativos, focando reconhecimento de marca e topo de funil',
    icon: Users,
    metric: 'Criativos lucrativos'
  },
  {
    title: 'Google Ads',
    description: 'Projeto de médio e longo prazo com otimização contínua de campanhas, fluxo e palavras-chave para previsibilidade e escala',
    icon: Target,
    metric: 'Crescimento previsível'
  },
  {
    title: 'Metodologia VaaS',
    description: 'Tráfego pago desenvolvido com conhecimento de cada etapa do funil. Amplia o que já comunicamos com base no diagnóstico',
    icon: BarChart,
    metric: 'Baseado em funil'
  },
  {
    title: 'Resultados Comprovados',
    description: 'ROAS na casa de 6, 7 e 8. Clientes com faturamento acima de R$ 1.8M. Empresas que triplicaram faturamento',
    icon: Award,
    metric: 'ROAS 6-8'
  }
];

const cases = [
  {
    client: 'E-commerce de Eletrônicos',
    challenge: 'R$ 30k/mês em Ads com CAC de R$ 280 e ROAS de 2.1',
    solution: 'Reestruturação completa de campanhas + funis de remarketing + testes A/B',
    results: [
      'CAC reduziu de R$ 280 para R$ 145 em 3 meses',
      'ROAS aumentou de 2.1 para 4.8',
      'Faturamento passou de R$ 180k para R$ 520k/mês',
      'Budget de Ads escalado para R$ 80k mantendo ROAS'
    ]
  },
  {
    client: 'SaaS B2B',
    challenge: 'Leads caros (R$ 350/MQL) com baixa taxa de conversão',
    solution: 'Campanhas de awareness + retargeting inteligente + otimização de copy',
    results: [
      'MQL reduziu de R$ 350 para R$ 120',
      'Taxa de conversão MQL→SQL subiu de 12% para 28%',
      'Pipeline mensal cresceu R$ 450k',
      'CAC Payback reduziu de 9 para 4 meses'
    ]
  }
];

const deliveryStages = [
  { 
    stage: 'Setup', 
    title: 'Configuração',
    description: 'Estruturação de contas, pixels, conversões e públicos customizados',
    duration: 'Semana 1'
  },
  { 
    stage: 'Launch', 
    title: 'Lançamento',
    description: 'Ativação de campanhas iniciais com budget controlado para teste',
    duration: 'Semana 2'
  },
  { 
    stage: 'Optimize', 
    title: 'Otimização',
    description: 'Análise de dados, testes A/B e ajustes para maximizar performance',
    duration: 'Semanas 3-4'
  },
  { 
    stage: 'Scale', 
    title: 'Escala',
    description: 'Aumento gradual de budget mantendo CAC e ROI otimizados',
    duration: 'Mês 2+'
  }
];

const channels = [
  {
    name: 'Google Ads',
    applications: ['Busca ativa de soluções', 'Remarketing', 'Display', 'YouTube'],
    bestFor: 'Capturar demanda existente'
  },
  {
    name: 'Meta Ads',
    applications: ['Facebook', 'Instagram', 'Awareness', 'Retargeting'],
    bestFor: 'Criar demanda e educar mercado'
  },
  {
    name: 'LinkedIn Ads',
    applications: ['B2B', 'Tomadores de decisão', 'Enterprise'],
    bestFor: 'Vendas complexas e alto ticket'
  }
];

export function ProductDetailAdsSlide() {
  return (
    <div className="relative min-h-screen bg-background overflow-hidden py-20 px-6">
      <GridPattern />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 text-center"
        >
          <div className="flex items-center justify-center gap-6 mb-6">
            <div className="w-20 h-20">
              <Icon3DMegaphone />
            </div>
            <div>
              <div className="inline-block glass-premium px-4 py-2 rounded-full mb-3">
                <p className="text-xs text-primary uppercase tracking-wider">Geração de Demanda</p>
              </div>
              <h1 className="text-4xl md:text-5xl text-white">Ads & Performance</h1>
              <p className="text-xl text-gray-400 mt-2">Tráfego pago, escala e venda</p>
              <p className="text-base text-gray-500 mt-1">Desenvolvido dentro da metodologia VaaS</p>
            </div>
          </div>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + index * 0.05 }}
              className="relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-red-600 rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity" />
              <div className="relative glass-premium p-6 rounded-2xl h-full border border-primary/20 hover:border-primary/40 transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-red-600 rounded-xl flex items-center justify-center shrink-0">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl text-white mb-2">{benefit.title}</h3>
                    <p className="text-sm text-gray-400 mb-3">{benefit.description}</p>
                    <div className="inline-block glass px-3 py-1 rounded-full">
                      <p className="text-xs text-primary">{benefit.metric}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Cases */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {cases.map((caseItem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="glass-premium p-6 rounded-2xl border border-primary/20"
            >
              <div className="mb-4">
                <div className="inline-block glass px-3 py-1 rounded-full mb-3">
                  <p className="text-xs text-primary uppercase tracking-wider">Case de Sucesso</p>
                </div>
                <h4 className="text-xl text-white mb-2">{caseItem.client}</h4>
                <p className="text-sm text-gray-400 mb-3">
                  <span className="text-red-400">Desafio:</span> {caseItem.challenge}
                </p>
                <p className="text-sm text-gray-400 mb-4">
                  <span className="text-primary">Solução:</span> {caseItem.solution}
                </p>
              </div>
              <div className="space-y-2 pt-4 border-t border-gray-800">
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-3">Resultados:</p>
                {caseItem.results.map((result, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <p className="text-sm text-gray-300">{result}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Channels */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-12"
        >
          <h3 className="text-2xl text-white mb-6 text-center">Canais & Estratégias</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {channels.map((channel, index) => (
              <div key={index} className="glass-premium p-6 rounded-2xl border border-primary/20">
                <h4 className="text-xl text-white mb-3">{channel.name}</h4>
                <div className="mb-4">
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">Aplicações:</p>
                  <div className="flex flex-wrap gap-2">
                    {channel.applications.map((app, i) => (
                      <span key={i} className="glass px-2 py-1 rounded text-xs text-gray-300">
                        {app}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="pt-3 border-t border-gray-800">
                  <p className="text-xs text-gray-500 mb-1">Melhor para:</p>
                  <p className="text-sm text-primary">{channel.bestFor}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Delivery Process */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="glass-premium p-8 rounded-2xl"
        >
          <h3 className="text-2xl text-white mb-8 text-center">Processo de Entrega</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {deliveryStages.map((item, index) => (
              <div key={index} className="relative">
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-red-600 rounded-2xl flex items-center justify-center shrink-0 relative">
                    <Zap className="w-8 h-8 text-white" />
                    {index < deliveryStages.length - 1 && (
                      <div className="hidden md:block absolute top-1/2 left-full w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent" />
                    )}
                  </div>
                  <div>
                    <div className="inline-block glass px-2 py-1 rounded mb-2">
                      <p className="text-xs text-primary">{item.duration}</p>
                    </div>
                    <h4 className="text-white mb-2">{item.title}</h4>
                    <p className="text-xs text-gray-400">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
