import { motion } from 'motion/react';
import { FileQuestion, AlertCircle, AlertTriangle, Lightbulb } from 'lucide-react';
import { PremiumGlow } from '../visuals/PremiumGlow';
import { GridPattern } from '../visuals/GridPattern';

const spinSteps = [
  {
    icon: FileQuestion,
    title: 'Situação',
    subtitle: 'Racional',
    description: 'Vamos entender seu cenário atual.',
    example: '"Hoje, como vocês estruturam o marketing e as vendas? Usam time interno, agência, ou um modelo híbrido?"',
    color: 'from-blue-600 to-blue-700',
    note: 'O objetivo aqui é mapear o estado atual sem julgamento'
  },
  {
    icon: AlertCircle,
    title: 'Problema',
    subtitle: 'Racional/Emocional',
    description: 'Agora, vamos falar sobre os desafios.',
    example: '"E o que mais te incomoda nos resultados atuais? Qual tem sido o maior gargalo que impede vocês de crescerem no ritmo que gostariam?"',
    color: 'from-yellow-600 to-orange-600',
    note: 'Identificar a dor real e fazê-lo verbalizar'
  },
  {
    icon: AlertTriangle,
    title: 'Implicação',
    subtitle: 'Emocional/Racional',
    description: 'Vamos explorar o impacto disso no negócio.',
    example: '"Se esse cenário continuar por mais 6 ou 12 meses, o que pode acontecer com o negócio? Onde vocês deixariam de chegar? Qual o custo real de não resolver isso agora?"',
    color: 'from-red-600 to-red-700',
    note: 'Fazer ele sentir o custo da inação'
  },
  {
    icon: Lightbulb,
    title: 'Necessidade de Solução',
    subtitle: 'Emocional',
    description: 'Visualizando o futuro ideal.',
    example: '"Imagine que você tivesse acesso a um plano de ação claro, uma arquitetura de comunicação que já funciona em empresas como a sua. Faria sentido para você aplicar isso agora e começar a construir esse futuro?"',
    color: 'from-green-600 to-emerald-600',
    note: 'Criar o desejo pela solução'
  }
];

export function SPINQuestionnaireSlide() {
  return (
    <div className="relative min-h-screen bg-background overflow-hidden py-12 sm:py-20 px-4 sm:px-6">
      <PremiumGlow />
      <GridPattern />
      
      <div className="relative z-10 max-w-6xl mx-auto overflow-x-hidden w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10 sm:mb-12"
        >
          <div className="inline-block glass-premium px-4 sm:px-6 py-2 sm:py-3 rounded-full mb-4 sm:mb-6">
            <p className="text-xs sm:text-sm text-primary uppercase tracking-wider">Metodologia SPIN</p>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl text-white mb-4 px-4">
            O Diagnóstico Colaborativo
          </h1>
          <p className="text-base sm:text-lg text-gray-400 max-w-3xl mx-auto px-4">
            Guia para o apresentador: use este slide para conversar, não para apresentar
          </p>
        </motion.div>

        {/* SPIN Steps */}
        <div className="space-y-6 sm:space-y-8">
          {spinSteps.map((step, index) => {
            const Icon = step.icon;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                className="relative group"
              >
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${step.color} rounded-2xl blur opacity-20 group-hover:opacity-30 transition-all`} />
                <div className="relative glass-premium p-6 sm:p-8 rounded-2xl">
                  <div className="flex flex-col md:flex-row gap-6">
                    {/* Icon & Title */}
                    <div className="flex items-start gap-4 md:w-80 flex-shrink-0">
                      <div className={`w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                        <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                      </div>
                      
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-lg sm:text-xl text-white">{index + 1}.</span>
                          <h3 className="text-xl sm:text-2xl text-white">{step.title}</h3>
                        </div>
                        <p className={`text-sm bg-gradient-to-r ${step.color} bg-clip-text text-transparent inline-block mb-2`}>
                          {step.subtitle}
                        </p>
                        <p className="text-xs sm:text-sm text-gray-500 italic">
                          {step.note}
                        </p>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 space-y-4">
                      <p className="text-sm sm:text-base text-gray-300">
                        {step.description}
                      </p>
                      
                      <div className="glass p-4 rounded-lg border-l-4" style={{ borderColor: `var(--color-${step.color.split('-')[1]})` }}>
                        <p className="text-xs sm:text-sm text-gray-400 mb-1">Exemplo de pergunta:</p>
                        <p className="text-sm sm:text-base text-white italic">
                          {step.example}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-8 sm:mt-12 text-center"
        >
          <div className="glass-premium p-4 sm:p-6 rounded-xl max-w-3xl mx-auto">
            <p className="text-sm sm:text-base text-gray-400">
              <span className="text-primary">Nota para o apresentador:</span> Este é o momento mais importante. 
              O objetivo é que o cliente chegue às conclusões sozinho através das perguntas.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
