import { motion } from 'motion/react';
import { MessageSquare, Target, Globe, TrendingUp, Users } from 'lucide-react';
import { GridPattern } from '../visuals/GridPattern';

const departments = [
  {
    icon: Target,
    title: 'Estratégia & Posicionamento',
    questions: [
      'Você tem clareza de quem é seu cliente ideal (ICP)?',
      'Como comunicar efetivamente o valor da sua oferta para ele?'
    ],
    signal: 'Necessidade de Reestruturação Estratégica',
    color: 'from-red-500 to-red-600'
  },
  {
    icon: Globe,
    title: 'Marketing & Presença Digital',
    questions: [
      'Seu site converte visitantes em leads qualificados?',
      'Quando clientes buscam suas soluções no Google, encontram sua empresa facilmente?'
    ],
    signal: 'Oportunidade para melhorar Site/Landing Pages e SEO',
    color: 'from-red-600 to-red-700'
  },
  {
    icon: TrendingUp,
    title: 'Vendas & Equipe Comercial',
    questions: [
      'Sua equipe de vendas está batendo metas regularmente?',
      'Marketing e Vendas estão alinhados na mesma estratégia?'
    ],
    signal: 'Programas de Educação Continuada e melhor alinhamento',
    color: 'from-red-700 to-red-800'
  },
  {
    icon: Users,
    title: 'Atendimento & Operações',
    questions: [
      'Os leads recebem follow-up rápido e personalizado 24/7?',
      'Sua equipe dá conta do volume e tempo de resposta?'
    ],
    signal: 'Agente Inteligente (IA) pode elevar capacidade de atendimento',
    color: 'from-red-800 to-red-900'
  },
];

export function ConsultativeQuestionnaireSlide() {
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
            <MessageSquare className="w-5 h-5 text-primary" />
            <p className="text-sm text-primary uppercase tracking-wider">Diagnóstico</p>
          </div>
          <h1 className="text-4xl md:text-5xl text-white mb-6">
            Questionário Consultivo
          </h1>
          <p className="text-xl text-gray-400">
            Perguntas por Departamento para Identificar Necessidades
          </p>
        </motion.div>

        {/* Departments */}
        <div className="space-y-8">
          {departments.map((dept, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              className="glass-premium p-8 rounded-2xl hover:border-primary/30 transition-all"
            >
              <div className="flex gap-6">
                {/* Icon */}
                <div className="shrink-0">
                  <div className={`w-16 h-16 bg-gradient-to-br ${dept.color} rounded-xl flex items-center justify-center`}>
                    <dept.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-2xl text-white mb-6">{dept.title}</h3>
                  
                  {/* Questions */}
                  <div className="mb-6 space-y-3">
                    {dept.questions.map((question, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <span className="text-primary mt-1 shrink-0">?</span>
                        <p className="text-gray-300">{question}</p>
                      </div>
                    ))}
                  </div>

                  {/* Signal */}
                  <div className="glass p-4 rounded-lg border-l-4 border-primary">
                    <p className="text-sm text-gray-400 mb-1">Se a resposta for incerta:</p>
                    <p className="text-white">→ {dept.signal}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="relative mt-12"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-primary via-red-600 to-red-700 rounded-2xl blur-lg opacity-20" />
          <div className="relative glass-premium p-8 rounded-2xl border-2 border-primary/30">
            <p className="text-xl text-gray-300 text-center leading-relaxed">
              Para cada <span className="text-red-500">"não"</span> ou <span className="text-red-500">hesitação</span> diante das perguntas acima, acende-se um <span className="text-primary">alerta de melhoria potencial</span>.
            </p>
            <p className="text-gray-400 text-center mt-4">
              Nosso objetivo não é empurrar serviços, e sim <span className="text-white">revelar oportunidades de valor</span> 😉
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
