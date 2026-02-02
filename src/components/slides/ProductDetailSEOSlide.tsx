import { motion } from 'motion/react';
import { Search, MapPin, TrendingUp, Award, CheckCircle2, Globe } from 'lucide-react';
import { Icon3DSearch } from '../icons/Icon3DSearch';
import { GridPattern } from '../visuals/GridPattern';

const benefits = [
  {
    title: 'SEO (Search Engine Optimization)',
    description: 'Tecnologia e metodologia: palavra-chave, tag, metadescrição e embed de hiperlink para relevância e força de busca orgânica',
    icon: Search,
    metric: 'Busca orgânica'
  },
  {
    title: 'DIO (Generative Engine Optimization)',
    description: 'Trabalho super novo: páginas recebem recomendação por inteligências artificiais. Futuro da busca orgânica',
    icon: Globe,
    metric: 'Recomendação IA'
  },
  {
    title: 'Equilíbrio Tráfego',
    description: 'Casos de clientes que igualaram 80% tráfego pago com orgânico, atingindo 50% para cada canal',
    icon: Award,
    metric: '50/50 orgânico/pago'
  },
  {
    title: 'Crescimento Orgânico',
    description: 'Vital para alavancar busca e reconhecimento de domínio das empresas com resultados duradouros',
    icon: TrendingUp,
    metric: 'Autoridade digital'
  }
];

const cases = [
  {
    client: 'Clínica Odontológica',
    challenge: 'Zero presença online, dependia 100% de indicação',
    solution: 'SEO local + Google Meu Negócio + conteúdo otimizado',
    results: [
      '1º lugar no Google Maps para 12 palavras-chave',
      'Passou de 0 para 180 leads orgânicos/mês',
      '4.8 estrelas com 120+ avaliações verificadas',
      'Agenda sempre cheia sem depender de Ads'
    ]
  },
  {
    client: 'E-commerce de Decoração',
    challenge: 'Tráfego 100% pago, dependência total de Ads',
    solution: 'SEO técnico + conteúdo + link building estratégico',
    results: [
      'Tráfego orgânico passou de 500 para 8.500 visitas/mês',
      '45% das vendas vieram de orgânico em 9 meses',
      'CAC geral reduziu 38% ao diversificar canais',
      'ROI de 12x no investimento de SEO'
    ]
  }
];

const deliveryStages = [
  {
    stage: '1',
    title: 'Auditoria',
    description: 'Análise técnica completa do site e presença local',
    duration: 'Semana 1-2'
  },
  {
    stage: '2',
    title: 'Otimização',
    description: 'Correções técnicas, estrutura e otimização on-page',
    duration: 'Semana 3-4'
  },
  {
    stage: '3',
    title: 'Conteúdo',
    description: 'Criação de conteúdo otimizado para palavras-chave estratégicas',
    duration: 'Mês 2-3'
  },
  {
    stage: '4',
    title: 'Autoridade',
    description: 'Link building e fortalecimento de autoridade de domínio',
    duration: 'Contínuo'
  }
];

const seoVsGeo = {
  seo: {
    title: 'SEO (Orgânico)',
    icon: Search,
    benefits: [
      'Ranqueamento no Google para buscas nacionais',
      'Autoridade de marca e domínio',
      'Tráfego escalável sem custo por clique',
      'Artigos, páginas e conteúdo otimizado'
    ],
    bestFor: 'E-commerce, SaaS, serviços nacionais'
  },
  geo: {
    title: 'GEO (Local)',
    icon: MapPin,
    benefits: [
      'Presença dominante no Google Maps',
      'Avaliações e reputação otimizadas',
      'Conversão de buscas "perto de mim"',
      'Perfil completo e otimizado'
    ],
    bestFor: 'Clínicas, restaurantes, lojas físicas'
  }
};

export function ProductDetailSEOSlide() {
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
              <Icon3DSearch />
            </div>
            <div>
              <div className="inline-block glass-premium px-4 py-2 rounded-full mb-3">
                <p className="text-xs text-primary uppercase tracking-wider">Crescimento Orgânico</p>
              </div>
              <h1 className="text-4xl md:text-5xl text-white">SEO & DIO</h1>
              <p className="text-base text-gray-500 mt-1">Search Engine + Generative Engine Optimization</p>
              <p className="text-xl text-gray-400 mt-2">Domine o Google sem pagar por clique</p>
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

        {/* SEO vs GEO */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-12"
        >
          <h3 className="text-2xl text-white mb-6 text-center">SEO vs GEO: Entenda a Diferença</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {Object.values(seoVsGeo).map((item, index) => (
              <div key={index} className="relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-red-600 rounded-2xl blur opacity-10" />
                <div className="relative glass-premium p-6 rounded-2xl border border-primary/30">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-red-600 rounded-xl flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-2xl text-white">{item.title}</h4>
                  </div>
                  <div className="space-y-2 mb-4">
                    {item.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <p className="text-sm text-gray-300">{benefit}</p>
                      </div>
                    ))}
                  </div>
                  <div className="pt-4 border-t border-gray-800">
                    <p className="text-xs text-gray-500 mb-1">Ideal para:</p>
                    <p className="text-sm text-primary">{item.bestFor}</p>
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

        {/* Delivery Process */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
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
