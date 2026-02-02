import { motion } from 'motion/react';
import { Target, Search, FileText, TrendingUp } from 'lucide-react';
import { PremiumGlow } from '../visuals/PremiumGlow';
import { GridPattern } from '../visuals/GridPattern';
import { Button } from '../ui/button';
import { VenturiLogo } from '../VenturiLogo';

const pillars = [
  {
    icon: Search,
    title: 'Análise',
    description: 'Auditoria 360°: ativos digitais, funis, criativos, jornada do cliente e dados de performance.',
    color: 'from-[#8B1538] to-[#A31D45]',
  },
  {
    icon: Target,
    title: 'Diagnóstico',
    description: 'Identificação de gargalos, ICP e priorização de oportunidades com métricas acionáveis.',
    color: 'from-[#A31D45] to-[#8B1538]',
  },
  {
    icon: FileText,
    title: 'Plano de Ação',
    description: 'Roteiro tático 90–180 dias: funis, mídia, criativos, automações e responsabilidades claras.',
    color: 'from-[#8B1538] to-[#6B0F2A]',
  },
  {
    icon: TrendingUp,
    title: 'Resultado',
    description: 'Entrega de ROI mensurável: metas, dashboards e ciclo contínuo de otimização.',
    color: 'from-[#6B0F2A] to-[#A31D45]',
  },
];

export function ConnectionOfferSlide() {
  return (
    <div className="relative min-h-screen bg-background overflow-hidden py-16 px-6">
      <PremiumGlow />
      <GridPattern />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header/Brand */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="flex justify-center mb-3">
            <VenturiLogo variant="icon-large" size="sm" />
          </div>
          <h1 className="text-3xl md:text-4xl text-white mb-2">
            Venturi Solutions
          </h1>
          <p className="text-base text-gray-400">
            Comunicação para Resultado & Estratégia de Vendas B2B
          </p>
        </motion.div>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-8"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-white mb-6 max-w-4xl mx-auto leading-tight px-4">
            Somos a conexão entre oferta e demanda.
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-3 px-4">
            <p className="text-lg md:text-xl text-gray-300">
              Diferente das agências tradicionais: somos uma <strong className="text-white">empresa de comunicação para resultado</strong>.
            </p>
            <p className="text-base md:text-lg text-gray-400">
              Com nossa metodologia <span className="text-primary">Value as a Service (VaaS)</span>, transformamos comunicação em vendas, reconhecimento de marca e evolução sustentável da sua empresa — porque crescimento nasce da correspondência entre o que você oferece e quem realmente precisa.
            </p>
          </div>
        </motion.div>

        {/* VaaS Box - Highlighted */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="relative mb-12 max-w-4xl mx-auto px-4"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-[#8B1538] via-[#A31D45] to-[#8B1538] rounded-2xl blur-xl opacity-40" />
          <div className="relative glass-premium p-6 md:p-8 rounded-2xl border-2 border-[#8B1538]/50">
            <div className="text-center space-y-4">
              <h3 className="text-2xl md:text-3xl text-white mb-3">
                Value as a Service (VaaS)
              </h3>
              
              <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
                Acreditamos e validamos que o aumento de vendas, o reconhecimento de marca e a evolução empresarial estão <span className="text-primary">100% conectados</span> à nossa metodologia.
              </p>
              
              <p className="text-base text-gray-300">
                Entregamos valor contínuo, mensurável e orientado para resultado.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Pillars - 4 Columns */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-12 px-4"
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  className="relative group"
                >
                  <div className={`absolute -inset-0.5 bg-gradient-to-r ${pillar.color} rounded-xl blur opacity-20 group-hover:opacity-40 transition-all`} />
                  <div className="relative glass-premium p-4 rounded-xl h-full text-center hover:border-[#8B1538]/50 transition-all">
                    {/* Icon Circle */}
                    <div className="flex justify-center mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-br ${pillar.color} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-base text-white mb-3">
                      {pillar.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-xs text-gray-400 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* CTA Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="text-center px-4"
        >
          <div className="space-y-3">
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#8B1538] to-[#A31D45] hover:from-[#A31D45] hover:to-[#8B1538] text-white px-8 py-6 text-base sm:text-lg shadow-2xl transition-all hover:scale-105"
            >
              Quero meu diagnóstico estratégico — 45 minutos (gratuito)
            </Button>
            
            <p className="text-xs sm:text-sm text-gray-500 max-w-xl mx-auto">
              Sessão prática: diagnóstico + plano de próximos passos — sem compromisso.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
