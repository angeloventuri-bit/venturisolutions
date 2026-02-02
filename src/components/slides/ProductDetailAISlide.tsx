import { motion } from 'motion/react';
import { Bot, Zap, Clock, DollarSign, CheckCircle2, Award, Users } from 'lucide-react';
import { Icon3DRobot } from '../icons/Icon3DRobot';
import { GridPattern } from '../visuals/GridPattern';

const benefits = [
  {
    title: 'Setor Comercial',
    description: 'Agentes de IA para auxiliar o cliente no setor comercial: qualificação de leads, follow-up e pré-vendas',
    icon: Users,
    metric: 'Vendas IA'
  },
  {
    title: 'Account Manager',
    description: 'Gestão de relacionamento com clientes, acompanhamento de contas e suporte pós-venda automatizado',
    icon: Award,
    metric: 'Gestão de contas'
  },
  {
    title: 'Secretária Virtual',
    description: 'Agendamentos, lembretes, triagem de contatos e organização de agenda com inteligência artificial',
    icon: Clock,
    metric: 'Organização 24/7'
  },
  {
    title: 'Produtificação Facilitada',
    description: 'Solução que aumenta a facilidade de produtificação e continuidade de projetos na sua empresa',
    icon: Zap,
    metric: 'Automatização'
  }
];

const cases = [
  {
    client: 'Imobiliária Digital',
    challenge: 'Recebia 200+ leads/dia mas só conseguia responder 30%',
    solution: 'Agente IA qualificando leads + agendando visitas + CRM integrado',
    results: [
      'Passou a responder 100% dos leads em < 2 minutos',
      'Taxa de conversão de lead→visita subiu de 8% para 23%',
      'Economizou R$ 18k/mês em equipe de pré-vendas',
      'Agendou 450 visitas/mês vs 80 antes da automação'
    ]
  },
  {
    client: 'Clínica Odontológica',
    challenge: 'Secretária não dava conta do volume de WhatsApp',
    solution: 'Agente IA respondendo dúvidas + agendando consultas + lembretes',
    results: [
      'Agenda lotada sem contratar mais recepcionistas',
      'Taxa de no-show caiu de 25% para 8% com lembretes',
      '92% dos pacientes elogiaram velocidade de resposta',
      'Liberou secretária para focar em atendimento presencial'
    ]
  }
];

const useCases = [
  {
    title: 'Qualificação de Leads',
    description: 'Agente faz perguntas iniciais e qualifica antes de passar para vendedor',
    icon: Users,
    examples: ['Imobiliárias', 'Consultorias', 'SaaS B2B']
  },
  {
    title: 'Agendamento',
    description: 'Agenda reuniões, consultas e visitas direto na agenda',
    icon: Clock,
    examples: ['Clínicas', 'Advogados', 'Contadores']
  },
  {
    title: 'Atendimento/FAQ',
    description: 'Responde dúvidas comuns e direciona para humano quando necessário',
    icon: Bot,
    examples: ['E-commerce', 'Escolas', 'Restaurantes']
  },
  {
    title: 'Follow-up',
    description: 'Reativa leads frios e mantém relacionamento automatizado',
    icon: Zap,
    examples: ['Todos os negócios']
  }
];

const deliveryProcess = [
  {
    stage: '1',
    title: 'Mapeamento',
    description: 'Entendemos seu processo de vendas e pontos de contato',
    duration: '2-3 dias'
  },
  {
    stage: '2',
    title: 'Treinamento',
    description: 'Treinamos o agente com suas FAQs e tom de voz',
    duration: '3-5 dias'
  },
  {
    stage: '3',
    title: 'Testes',
    description: 'Rodamos cenários reais e ajustamos respostas',
    duration: '2-3 dias'
  },
  {
    stage: '4',
    title: 'Go Live',
    description: 'Ativamos agente e monitoramos primeiras conversas',
    duration: '1 dia'
  }
];

const platforms = [
  { name: 'WhatsApp', icon: '💬' },
  { name: 'Instagram', icon: '📸' },
  { name: 'Facebook', icon: '👥' },
  { name: 'Site (Chat)', icon: '🌐' }
];

export function ProductDetailAISlide() {
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
              <Icon3DRobot />
            </div>
            <div>
              <div className="inline-block glass-premium px-4 py-2 rounded-full mb-3">
                <p className="text-xs text-primary uppercase tracking-wider">Automação Inteligente</p>
              </div>
              <h1 className="text-4xl md:text-5xl text-white">Agentes de IA</h1>
              <p className="text-xl text-gray-400 mt-2">Automatização inteligente para facilitar a produtificação</p>
              <p className="text-base text-gray-500 mt-1">Comercial, Account Manager, Secretária e muito mais</p>
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

        {/* Use Cases */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-12"
        >
          <h3 className="text-2xl text-white mb-6 text-center">Casos de Uso</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {useCases.map((useCase, index) => (
              <div key={index} className="glass-premium p-6 rounded-2xl border border-primary/20">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary to-red-600 rounded-xl flex items-center justify-center shrink-0">
                    <useCase.icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl text-white mb-2">{useCase.title}</h4>
                    <p className="text-sm text-gray-400">{useCase.description}</p>
                  </div>
                </div>
                <div className="pt-3 border-t border-gray-800">
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">Exemplos:</p>
                  <div className="flex flex-wrap gap-2">
                    {useCase.examples.map((example, i) => (
                      <span key={i} className="glass px-3 py-1 rounded-full text-xs text-gray-300">
                        {example}
                      </span>
                    ))}
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

        {/* Platforms */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mb-12"
        >
          <h3 className="text-2xl text-white mb-6 text-center">Plataformas Disponíveis</h3>
          <div className="flex justify-center">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl">
              {platforms.map((platform, index) => (
                <div key={index} className="glass-premium p-6 rounded-2xl border border-primary/20 text-center">
                  <div className="text-4xl mb-3">{platform.icon}</div>
                  <p className="text-white">{platform.name}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Delivery Process */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="mb-12"
        >
          <div className="glass-premium p-8 rounded-2xl">
            <h3 className="text-2xl text-white mb-8 text-center">Processo de Implementação</h3>
            <div className="grid md:grid-cols-4 gap-6">
              {deliveryProcess.map((item, index) => (
                <div key={index} className="relative">
                  <div className="flex flex-col items-center text-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-red-600 rounded-2xl flex items-center justify-center shrink-0 relative">
                      <span className="text-2xl text-white">{item.stage}</span>
                      {index < deliveryProcess.length - 1 && (
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
          </div>
        </motion.div>

        {/* Why AI Now */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          className="relative"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-primary to-red-600 rounded-2xl blur-lg opacity-20" />
          <div className="relative glass-premium p-8 rounded-2xl border-2 border-primary/30">
            <div className="flex items-start gap-4">
              <Award className="w-10 h-10 text-primary shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl text-white mb-4">Por que Agentes IA agora?</h3>
                <p className="text-lg text-gray-300 leading-relaxed mb-4">
                  Cada minuto sem responder um lead custa dinheiro. Empresas que <span className="text-primary">respondem em 5 minutos têm 9x mais chance de converter</span> do que quem demora 30 minutos.
                </p>
                <p className="text-gray-400">
                  Agentes IA não são para substituir pessoas, mas para <span className="text-white">liberar seu time para focar no que importa: fechar vendas</span>.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
