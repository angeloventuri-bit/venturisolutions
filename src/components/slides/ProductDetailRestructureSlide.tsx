import { motion } from 'motion/react';
import { Compass, Target, TrendingUp, Users, Award, CheckCircle2 } from 'lucide-react';
import { Icon3DCompass } from '../icons/Icon3DCompass';
import { GridPattern } from '../visuals/GridPattern';

const benefits = [
  {
    title: 'Produto Aprofundado',
    description: 'Duração de 8 a 12 semanas com entregáveis fundamentais para definir o caminho de sucesso da sua empresa',
    icon: Compass,
    metric: '8-12 semanas'
  },
  {
    title: 'Kickoff e Diagnóstico',
    description: 'Estudo detalhado do cliente: investigamos onde ele está, o que procura e quais são suas necessidades principais',
    icon: Target,
    metric: 'Diagnóstico 360°'
  },
  {
    title: 'Público Alvo e ICP',
    description: 'Desenvolvimento e definição de Público Alvo e Cliente Ideal para comunicação assertiva e focada',
    icon: Users,
    metric: 'ICP definido'
  },
  {
    title: 'Jornada e Funis',
    description: 'Criação da jornada de comunicação por persona, plano estratégico e roteiro de funis por canal',
    icon: TrendingUp,
    metric: 'Norte estratégico'
  }
];

const cases = [
  {
    client: 'E-commerce de Moda',
    challenge: 'Vendas estagnadas em R$ 80k/mês sem clareza sobre ICP',
    solution: 'Reestruturação completa com redefinição de ICP e posicionamento premium',
    results: [
      'Faturamento passou de R$ 80k para R$ 240k/mês em 6 meses',
      'Ticket médio aumentou 65% com novo posicionamento',
      'CAC reduziu 40% ao focar no público certo'
    ]
  },
  {
    client: 'SaaS B2B',
    challenge: 'Produto excelente mas sem estratégia de go-to-market',
    solution: 'Imersão de 5 dias + roadmap de 12 meses + automação de vendas',
    results: [
      'Estruturou funil de vendas que converteu 18% dos leads',
      'Criou estratégia de conteúdo que gerou 300+ SQLs/mês',
      'Closed 12 clientes enterprise nos primeiros 4 meses'
    ]
  }
];

const deliveryProcess = [
  { step: '1', title: 'Kickoff e Diagnóstico', description: 'Estudo aprofundado: onde o cliente está, o que procura e necessidades principais' },
  { step: '2', title: 'Público Alvo e ICP', description: 'Desenvolvimento e definição do Cliente Ideal para comunicação assertiva' },
  { step: '3', title: 'Jornada por Persona', description: 'Criação da jornada de comunicação personalizada por tipo de cliente' },
  { step: '4', title: 'Plano Estratégico', description: 'Elaboração completa do plano e roteiro de funis por canal' }
];

export function ProductDetailRestructureSlide() {
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
              <Icon3DCompass />
            </div>
            <div>
              <div className="inline-block glass-premium px-4 py-2 rounded-full mb-3">
                <p className="text-xs text-primary uppercase tracking-wider">Fundação Estratégica</p>
              </div>
              <h1 className="text-4xl md:text-5xl text-white">Reestruturação Estratégica</h1>
              <p className="text-xl text-gray-400 mt-2">O norte ideal para sua comunicação</p>
              <p className="text-base text-gray-500 mt-1">Produto aprofundado de 8-12 semanas que orienta todos os serviços</p>
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

        {/* Why Start Here */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="relative mb-12"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-primary to-red-600 rounded-2xl blur-lg opacity-20" />
          <div className="relative glass-premium p-8 rounded-2xl border-2 border-primary/30">
            <div className="flex items-start gap-4">
              <Award className="w-8 h-8 text-primary shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl text-white mb-4">Por que começar pela reestruturação?</h3>
                <p className="text-lg text-gray-300 leading-relaxed mb-4">
                  Investir em Ads, Sites ou SEO sem uma estratégia clara é como construir uma casa sem fundação. 
                  A reestruturação garante que <span className="text-primary">cada real investido vai para o lugar certo</span>.
                </p>
                <p className="text-gray-400">
                  Empresas que passam pela reestruturação primeiro têm <span className="text-white">30-50% mais sucesso</span> nas ações táticas posteriores e economizam meses de tentativa e erro.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Cases */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {cases.map((caseItem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
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

        {/* Delivery Process */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="glass-premium p-8 rounded-2xl"
        >
          <h3 className="text-2xl text-white mb-8 text-center">Processo de Entrega</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {deliveryProcess.map((item, index) => (
              <div key={index} className="relative">
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-red-600 rounded-2xl flex items-center justify-center shrink-0 relative">
                    <span className="text-2xl text-white">{item.step}</span>
                    {index < deliveryProcess.length - 1 && (
                      <div className="hidden md:block absolute top-1/2 left-full w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent" />
                    )}
                  </div>
                  <div>
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
