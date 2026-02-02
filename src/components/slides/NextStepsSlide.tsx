import { motion } from 'motion/react';
import { ArrowRight, Calendar, Target, Zap, CheckCircle } from 'lucide-react';
import { PremiumGlow } from '../visuals/PremiumGlow';
import { GridPattern } from '../visuals/GridPattern';
import { Button } from '../ui/button';

const benefits = [
  'Diagnóstico inicial do potencial de marketing e vendas',
  'Análise das principais oportunidades de melhoria',
  'Roadmap de próximos passos personalizado',
  'Sem custo e sem compromisso'
];

const reasons = [
  {
    icon: Target,
    text: 'Cada dia em modo estagnação é um dia perdido de crescimento'
  },
  {
    icon: Calendar,
    text: 'Vagas limitadas devido à alta demanda'
  },
  {
    icon: Zap,
    text: 'Comece a jornada de transformação agora'
  }
];

export function NextStepsSlide() {
  return (
    <div className="relative min-h-screen bg-background overflow-hidden py-20 px-6">
      <PremiumGlow />
      <GridPattern />
      
      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 glass-premium px-6 py-3 rounded-full mb-6">
            <ArrowRight className="w-5 h-5 text-primary" />
            <p className="text-sm text-primary uppercase tracking-wider">Próxima Etapa</p>
          </div>
          <h1 className="text-4xl md:text-5xl text-white mb-6">
            Próximos Passos
          </h1>
          <p className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-primary via-red-500 to-red-600">
            O momento decisivo na sua jornada de crescimento
          </p>
        </motion.div>

        {/* Main CTA Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="relative mb-12"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-primary via-red-600 to-red-700 rounded-3xl blur-xl opacity-30" />
          <div className="relative glass-premium p-10 rounded-3xl border-2 border-primary/30">
            <div className="text-center mb-8">
              <h2 className="text-3xl text-white mb-4">
                Agende uma Conversa Estratégica Gratuita
              </h2>
              <p className="text-xl text-gray-300">
                Se você se identificou com os pontos desta apresentação, <span className="text-primary">a hora de agir é agora</span>.
              </p>
            </div>

            {/* What's Included */}
            <div className="glass p-8 rounded-2xl mb-8">
              <h3 className="text-xl text-white mb-6">O que oferecemos nessa sessão?</h3>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                    <span className="text-gray-300">{benefit}</span>
                  </li>
                ))}
              </ul>
              <p className="text-gray-400 mt-6 text-center">
                É um bate-papo consultivo de alto valor, focado exclusivamente no seu negócio
              </p>
            </div>

            {/* CTA Button */}
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="text-center">
              <div className="relative inline-block">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-red-600 rounded-xl blur-md opacity-50" />
                <Button
                  size="lg"
                  className="relative bg-gradient-to-r from-primary to-red-600 text-white px-12 py-6 text-xl"
                >
                  <Calendar className="w-6 h-6 mr-3" />
                  Agendar Sessão Estratégica
                  <ArrowRight className="w-6 h-6 ml-3" />
                </Button>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Why Now Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-12"
        >
          <h3 className="text-2xl text-white text-center mb-8">Por que agora?</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {reasons.map((reason, index) => (
              <div key={index} className="glass-premium p-6 rounded-xl text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-red-600 rounded-xl flex items-center justify-center">
                    <reason.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <p className="text-gray-300">{reason.text}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* How to Schedule */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="glass p-8 rounded-2xl text-center"
        >
          <h3 className="text-xl text-white mb-4">Como agendar?</h3>
          <p className="text-gray-300 mb-6">
            Simples – <span className="text-primary">responda a este e-mail com sua disponibilidade</span> ou acesse nosso calendário online para reservar o horário que for melhor.
          </p>
          <p className="text-sm text-gray-500">
            Vamos juntos transformar suas ambições em planos concretos!
          </p>
        </motion.div>

        {/* Final Message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-2xl text-gray-300 mb-4">
            Prepare-se para desbloquear um novo capítulo de <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-red-500 to-red-600">crescimento previsível e escalável</span>
          </p>
          <p className="text-xl text-gray-400">
            A Venturi Solutions está pronta para ser sua parceira nessa jornada.
          </p>
          <p className="text-2xl text-primary mt-6">
            Vamos evoluir?
          </p>
        </motion.div>
      </div>
    </div>
  );
}
