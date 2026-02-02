import { motion } from 'motion/react';
import { FileText, Rocket, CalendarCheck, CheckCircle } from 'lucide-react';
import { PremiumGlow } from '../visuals/PremiumGlow';
import { GridPattern } from '../visuals/GridPattern';

const steps = [
  {
    icon: FileText,
    number: '01',
    title: 'Proposta Comercial',
    description: 'Receba proposta detalhada com escopo, cronograma e investimento baseado nas suas necessidades',
    timeline: 'Hoje'
  },
  {
    icon: CheckCircle,
    number: '02',
    title: 'Aprovação & Contratação',
    description: 'Análise da proposta, ajustes necessários e assinatura de contrato',
    timeline: '2-3 dias úteis'
  },
  {
    icon: Rocket,
    number: '03',
    title: 'Kickoff & Execução',
    description: 'Reunião de alinhamento com seu time e início imediato da implementação',
    timeline: '1 semana'
  },
  {
    icon: CalendarCheck,
    number: '04',
    title: 'Acompanhamento',
    description: 'Reuniões periódicas de status, relatórios e otimizações contínuas',
    timeline: 'Recorrente'
  },
];

const deliverables = [
  'Proposta comercial personalizada',
  'Cronograma detalhado de execução',
  'Definição de KPIs e metas',
  'Contrato e termos comerciais',
];

export function NextStepsContractSlide() {
  return (
    <div className="relative min-h-screen bg-background overflow-hidden py-20 px-6">
      <PremiumGlow />
      <GridPattern />
      
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-block glass-premium px-6 py-3 rounded-full mb-6">
            <p className="text-sm text-primary uppercase tracking-wider">Próximos Passos</p>
          </div>
          <h1 className="text-4xl md:text-5xl text-white mb-6">
            Como Avançamos Daqui?
          </h1>
          <p className="text-xl text-gray-400">
            Timeline do processo de contratação até execução
          </p>
        </motion.div>

        {/* Timeline Steps */}
        <div className="space-y-6 mb-16">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * index }}
              className="relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-red-600 rounded-2xl blur opacity-0 hover:opacity-20 transition-all" />
              <div className="relative glass-premium p-8 rounded-2xl">
                <div className="flex gap-6">
                  {/* Number Badge */}
                  <div className="shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-red-600 rounded-xl flex items-center justify-center mb-2">
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-center">
                      <span className="text-2xl text-primary">{step.number}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-2xl text-white">{step.title}</h3>
                      <span className="glass px-4 py-1 rounded-full text-sm text-primary">
                        {step.timeline}
                      </span>
                    </div>
                    <p className="text-gray-400 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* What You'll Receive */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="relative mb-12"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-primary via-red-600 to-red-700 rounded-2xl blur-lg opacity-20" />
          <div className="relative glass-premium p-8 rounded-2xl border-2 border-primary/30">
            <h3 className="text-2xl text-white mb-6">O que você receberá hoje:</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {deliverables.map((item, index) => (
                <div key={index} className="flex items-center gap-3 glass p-4 rounded-xl">
                  <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-gray-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center"
        >
          <p className="text-2xl text-gray-300 mb-4">
            Estamos prontos para <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-red-500 to-red-600">iniciar sua transformação</span>
          </p>
          <p className="text-lg text-gray-500">
            Compartilhe suas dúvidas ou solicite a proposta comercial agora
          </p>
        </motion.div>
      </div>
    </div>
  );
}
