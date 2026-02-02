import { motion } from 'motion/react';
import { GraduationCap, Target, TrendingUp, Users, CheckCircle2, Award, Zap } from 'lucide-react';
import { Icon3DGraduation } from '../icons/Icon3DGraduation';
import { GridPattern } from '../visuals/GridPattern';

const benefits = [
  {
    title: 'Formação de Equipes',
    description: 'Tudo o que aplicamos em clientes, podemos treinar e formar em equipe. Qualificação e apoio contínuo',
    icon: Users,
    metric: 'Capacitação'
  },
  {
    title: 'Educação Continuada',
    description: 'Grande experiência com ~40 lançamentos de infoproduto. Parceiros Eduz, Hotmart e outras plataformas',
    icon: Award,
    metric: '40+ lançamentos'
  },
  {
    title: 'Configuração Completa',
    description: 'Experiência em estrutura de plataforma, identidade visual, meios de pagamento e configurações técnicas',
    icon: Target,
    metric: 'Setup completo'
  },
  {
    title: 'Lançamentos Especiais',
    description: 'Entendimento, estratégia e produção: landing page, criativos, inserção em plataforma. Custo + variável por resultado',
    icon: TrendingUp,
    metric: 'R$ 400k em 2h'
  }
];

const cases = [
  {
    client: 'Equipe de Vendas B2B (5 vendedores)',
    challenge: 'Vendas empurrando produto, baixa conversão (8%) e ciclo longo',
    solution: 'Treinamento em vendas consultivas + role-play + acompanhamento',
    results: [
      'Taxa de conversão subiu de 8% para 22% em 2 meses',
      'Ticket médio aumentou 35% ao vender valor',
      'Ciclo de vendas reduziu de 45 para 28 dias',
      'Pipeline cresceu 180% com abordagem consultiva'
    ]
  },
  {
    client: 'Startup SaaS (3 fundadores vendendo)',
    challenge: 'Fundadores técnicos sem experiência comercial',
    solution: 'Treinamento + script + técnicas de discovery + objeções',
    results: [
      'Fecharam 8 clientes nos primeiros 30 dias pós-treinamento',
      'Criaram processo replicável para contratar SDRs',
      'NPS dos clientes subiu (vendas consultivas geravam fit)',
      'Churn reduziu 40% ao venderem para ICP correto'
    ]
  }
];

const modules = [
  {
    title: 'Mindset Consultivo',
    description: 'Sair do "empurrar produto" para "resolver problemas"',
    topics: ['Value as a Service', 'Posicionamento consultivo', 'Autoridade']
  },
  {
    title: 'Discovery Estratégico',
    description: 'Fazer perguntas que revelam dor e urgência',
    topics: ['Framework SPIN', 'Perguntas poderosas', 'Diagnóstico profundo']
  },
  {
    title: 'Apresentação de Valor',
    description: 'Conectar sua solução aos problemas identificados',
    topics: ['Storytelling', 'ROI calculation', 'Demonstrações eficazes']
  },
  {
    title: 'Objeções & Fechamento',
    description: 'Lidar com resistência e fechar com naturalidade',
    topics: ['Objeções comuns', 'Técnicas de fechamento', 'Negociação win-win']
  }
];

const deliveryFormats = [
  {
    format: 'Workshop Presencial',
    duration: '1-2 dias intensivos',
    ideal: 'Times locais que precisam de imersão total',
    includes: ['Teoria + prática', 'Role-play', 'Dinâmicas', 'Material didático']
  },
  {
    format: 'Treinamento Online',
    duration: '4 sessões de 3h',
    ideal: 'Times remotos ou distribuídos',
    includes: ['Aulas ao vivo', 'Gravações', 'Exercícios', 'Suporte assíncrono']
  }
];

export function ProductDetailTrainingSlide() {
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
              <Icon3DGraduation />
            </div>
            <div>
              <div className="inline-block glass-premium px-4 py-2 rounded-full mb-3">
                <p className="text-xs text-primary uppercase tracking-wider">Formação e Educação</p>
              </div>
              <h1 className="text-4xl md:text-5xl text-white">Treinamento & Educação Continuada</h1>
              <p className="text-xl text-gray-400 mt-2">Formação de equipes e lançamento de infoprodutos</p>
              <p className="text-base text-gray-500 mt-1">Expertise em educação continuada e educação médica</p>
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

        {/* Modules */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-12"
        >
          <h3 className="text-2xl text-white mb-6 text-center">Módulos do Treinamento</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {modules.map((module, index) => (
              <div key={index} className="glass-premium p-6 rounded-2xl border border-primary/20">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary to-red-600 rounded-xl flex items-center justify-center shrink-0">
                    <span className="text-white">{index + 1}</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl text-white mb-2">{module.title}</h4>
                    <p className="text-sm text-gray-400 mb-3">{module.description}</p>
                  </div>
                </div>
                <div className="pl-13">
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">Conteúdo:</p>
                  <div className="space-y-1">
                    {module.topics.map((topic, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3 h-3 text-primary shrink-0" />
                        <p className="text-xs text-gray-300">{topic}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Delivery Formats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-12"
        >
          <h3 className="text-2xl text-white mb-6 text-center">Formatos de Entrega</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {deliveryFormats.map((item, index) => (
              <div key={index} className="relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-red-600 rounded-2xl blur opacity-10" />
                <div className="relative glass-premium p-6 rounded-2xl border border-primary/30">
                  <h4 className="text-2xl text-white mb-2">{item.format}</h4>
                  <div className="mb-4">
                    <p className="text-sm text-gray-400 mb-1">Duração: <span className="text-primary">{item.duration}</span></p>
                    <p className="text-xs text-gray-500">{item.ideal}</p>
                  </div>
                  <div className="pt-4 border-t border-gray-800">
                    <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">Inclui:</p>
                    <div className="flex flex-wrap gap-2">
                      {item.includes.map((include, i) => (
                        <span key={i} className="glass px-3 py-1 rounded-full text-xs text-gray-300">
                          {include}
                        </span>
                      ))}
                    </div>
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
              transition={{ delay: 0.7 + index * 0.1 }}
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

        {/* Why Training Works */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="relative"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-primary to-red-600 rounded-2xl blur-lg opacity-20" />
          <div className="relative glass-premium p-8 rounded-2xl border-2 border-primary/30">
            <div className="flex items-start gap-4">
              <Award className="w-10 h-10 text-primary shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl text-white mb-4">Por que o treinamento funciona?</h3>
                <p className="text-lg text-gray-300 leading-relaxed mb-4">
                  A maioria das empresas investe em Ads, Site e SEO mas esquece do <span className="text-primary">elo mais importante: quem fecha a venda</span>.
                </p>
                <p className="text-gray-400">
                  Não adianta ter 100 leads/mês se seu time converte apenas 5%. Um vendedor bem treinado pode <span className="text-white">dobrar a receita sem aumentar marketing</span>.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
