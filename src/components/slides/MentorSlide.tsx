import { motion } from 'motion/react';
import { Users, Search, Zap, Target } from 'lucide-react';
import { PremiumGlow } from '../visuals/PremiumGlow';
import { GridPattern } from '../visuals/GridPattern';

const pillars = [
  {
    icon: Search,
    title: 'Diagnóstico Profundo',
    description: 'Mergulhamos na realidade do seu negócio. Antes de qualquer ação, investigamos a fundo o que torna sua oferta única e quais são as dores e desejos do seu cliente ideal. Essa imersão personalizada identifica cirurgicamente oportunidades e gargalos.'
  },
  {
    icon: Target,
    title: 'Estratégia Sob Medida',
    description: 'Construímos uma ponte estratégica conectando diretamente o valor da sua empresa à dor do cliente – alinhando oferta e demanda de forma precisa. Nosso plano de crescimento é feito sob medida para o seu negócio, garantindo que cada iniciativa faça sentido e entregue valor real.'
  },
  {
    icon: Users,
    title: 'Parceria Orientada a Resultados',
    description: 'Atuamos lado a lado com sua equipe, de forma transparente. Nosso sucesso é medido pelo seu sucesso – adotamos metas compartilhadas e acompanhamento próximo, ajustando rotas conforme necessário. Não somos fornecedores distantes, mas parte do seu time.'
  },
];

export function MentorSlide() {
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
          <div className="inline-flex items-center gap-3 glass-premium px-6 py-3 rounded-full mb-6">
            <Zap className="w-5 h-5 text-primary" />
            <p className="text-sm text-primary uppercase tracking-wider">Venturi Solutions</p>
          </div>
          <h1 className="text-4xl md:text-5xl text-white mb-6">
            Seu Mentor Estratégico na Jornada
          </h1>
          <p className="text-xl text-gray-400">
            Todo herói precisa de um guia
          </p>
        </motion.div>

        {/* VaaS Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="relative mb-16"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-primary to-red-600 rounded-3xl blur-lg opacity-20" />
          <div className="relative glass-premium p-10 rounded-3xl border-2 border-primary/30">
            <div className="text-center">
              <h2 className="text-3xl text-white mb-6">
                Nossa Filosofia: <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-red-500 to-red-600">Value as a Service</span>
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                A Venturi Solutions se posiciona como o mentor estratégico da sua jornada de crescimento, não apenas mais uma agência tradicional. 
              </p>
              <p className="text-lg text-gray-400 mt-4">
                Não vendemos simplesmente serviços avulsos – <span className="text-white">entregamos valor como serviço</span>.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Three Pillars */}
        <div className="space-y-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + index * 0.15 }}
              className="glass-premium p-8 rounded-2xl hover:border-primary/30 transition-all"
            >
              <div className="flex gap-6 items-start">
                <div className="shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-red-600 rounded-xl flex items-center justify-center">
                    <pillar.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl text-white mb-4">{pillar.title}</h3>
                  <p className="text-gray-400 leading-relaxed text-lg">
                    {pillar.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="text-center mt-12 glass p-8 rounded-2xl"
        >
          <p className="text-xl text-gray-300">
            Como mentor, a Venturi oferece o <span className="text-primary">mapa e as ferramentas</span> para você, o herói da história, conquistar a "terra prometida" do crescimento previsível.
          </p>
          <p className="text-lg text-gray-400 mt-4">
            Guiamos sua empresa em cada passo da transformação, minimizando riscos e acelerando conquistas com experiência estratégica e visão consultiva.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
