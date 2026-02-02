import { motion } from 'motion/react';
import { Globe, Zap, TrendingUp, Smartphone, CheckCircle2, Award } from 'lucide-react';
import { Icon3DGlobe } from '../icons/Icon3DGlobe';
import { GridPattern } from '../visuals/GridPattern';

const benefits = [
  {
    title: 'Copywriter de Alta Conversão',
    description: 'Comunicação desenvolvida com base no diagnóstico inicial e metodologia VaaS para máxima conversão',
    icon: TrendingUp,
    metric: 'Alta conversão'
  },
  {
    title: 'Design de Alta Performance',
    description: 'Identidade visual e design focado em performance, seguindo a metodologia do diagnóstico',
    icon: Award,
    metric: 'Design performático'
  },
  {
    title: 'Integração e Inteligência de Dados',
    description: 'Todos os projetos trabalham com integração de dados e análise inteligente de comportamento',
    icon: Zap,
    metric: 'Data-driven'
  },
  {
    title: 'Focado em SEO',
    description: 'Sites institucionais e landing pages com SLA de 1 mês (ou até 2 semanas) otimizados para busca',
    icon: Globe,
    metric: 'SEO otimizado'
  }
];

const cases = [
  {
    client: 'Lançamento de Infoproduto',
    challenge: 'Precisava de landing page de alta conversão para lançamento',
    solution: 'Landing page com copy persuasivo + depoimentos + gatilhos de urgência',
    results: [
      'Taxa de conversão de 12.5% (média mercado: 2-3%)',
      'R$ 480k em vendas nos primeiros 7 dias',
      'Página carregou em 1.2s mesmo com tráfego intenso',
      '4.200 leads capturados com custo de R$ 4,80/lead'
    ]
  },
  {
    client: 'Escritório de Advocacia',
    challenge: 'Site institucional desatualizado, zero conversão',
    solution: 'Site moderno + blog SEO + formulários otimizados + Google Analytics',
    results: [
      'Passou de 0 para 45 contatos qualificados/mês',
      'Ranqueou para 8 palavras-chave estratégicas',
      'Taxa de rejeição caiu de 78% para 32%',
      'Tempo médio no site aumentou de 0:45 para 3:20'
    ]
  }
];

const deliveryStages = [
  {
    stage: '1',
    title: 'Briefing',
    description: 'Alinhamento de objetivos, público e referências visuais',
    duration: '1-2 dias'
  },
  {
    stage: '2',
    title: 'Design',
    description: 'Criação de protótipo visual com identidade da marca',
    duration: '3-5 dias'
  },
  {
    stage: '3',
    title: 'Desenvolvimento',
    description: 'Codificação, integração e otimização de performance',
    duration: '5-7 dias'
  },
  {
    stage: '4',
    title: 'Lançamento',
    description: 'Publicação, testes finais e treinamento de uso',
    duration: '1-2 dias'
  }
];

const features = [
  { title: 'Responsivo', description: 'Funciona perfeitamente em todos os dispositivos' },
  { title: 'SEO Otimizado', description: 'Estrutura e meta tags para ranquear no Google' },
  { title: 'Analytics', description: 'Google Analytics e Tag Manager configurados' },
  { title: 'Performance', description: 'Carregamento ultra-rápido (< 2 segundos)' },
  { title: 'Formulários', description: 'Captação de leads com integração CRM' },
  { title: 'Hospedagem', description: 'Servidor rápido e seguro incluído' }
];

const siteTypes = [
  {
    type: 'Landing Page',
    description: 'Página única focada em conversão',
    useCases: ['Lançamentos', 'Captação de leads', 'Eventos', 'Promoções'],
    deliveryTime: '5-7 dias'
  },
  {
    type: 'Site Institucional',
    description: 'Presença digital completa da empresa',
    useCases: ['Credibilidade', 'SEO', 'Autoridade', 'Portfólio'],
    deliveryTime: '10-15 dias'
  }
];

export function ProductDetailSitesSlide() {
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
              <Icon3DGlobe />
            </div>
            <div>
              <div className="inline-block glass-premium px-4 py-2 rounded-full mb-3">
                <p className="text-xs text-primary uppercase tracking-wider">Presença Digital</p>
              </div>
              <h1 className="text-4xl md:text-5xl text-white">Sites & Landing Pages</h1>
              <p className="text-xl text-gray-400 mt-2">Sites institucionais e landing pages de alta conversão</p>
              <p className="text-base text-gray-500 mt-1">SLA de 1 mês (ou até 2 semanas dependendo da aprovação)</p>
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

        {/* Site Types */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-12"
        >
          <h3 className="text-2xl text-white mb-6 text-center">Tipos de Site</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {siteTypes.map((item, index) => (
              <div key={index} className="relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-red-600 rounded-2xl blur opacity-10" />
                <div className="relative glass-premium p-6 rounded-2xl border border-primary/30">
                  <h4 className="text-2xl text-white mb-2">{item.type}</h4>
                  <p className="text-gray-400 mb-4">{item.description}</p>
                  <div className="mb-4">
                    <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">Ideal para:</p>
                    <div className="flex flex-wrap gap-2">
                      {item.useCases.map((useCase, i) => (
                        <span key={i} className="glass px-3 py-1 rounded-full text-xs text-gray-300">
                          {useCase}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="pt-4 border-t border-gray-800">
                    <p className="text-xs text-gray-500">Entrega em: <span className="text-primary">{item.deliveryTime}</span></p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Cases */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {cases.map((caseItem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
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

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mb-12"
        >
          <h3 className="text-2xl text-white mb-6 text-center">Incluído em Todos os Sites</h3>
          <div className="grid md:grid-cols-3 gap-4">
            {features.map((feature, index) => (
              <div key={index} className="glass-premium p-4 rounded-xl border border-primary/20">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-white mb-1">{feature.title}</h4>
                    <p className="text-xs text-gray-400">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Delivery Process */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="glass-premium p-8 rounded-2xl"
        >
          <h3 className="text-2xl text-white mb-8 text-center">Processo de Entrega</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {deliveryStages.map((item, index) => (
              <div key={index} className="relative">
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-red-600 rounded-2xl flex items-center justify-center shrink-0 relative">
                    <span className="text-2xl text-white">{item.stage}</span>
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
