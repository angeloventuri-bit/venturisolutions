import { motion } from 'motion/react';
import { Target, AlertTriangle, DollarSign, TrendingUp, Users, Zap, CheckCircle, Package, MessageSquare, ArrowRight } from 'lucide-react';
import { GridPattern } from '../visuals/GridPattern';

const agendaItems = [
  { icon: Target, title: 'Visão do Crescimento Previsível', subtitle: 'A "terra prometida" de resultados consistentes' },
  { icon: AlertTriangle, title: 'Diagnóstico do Cenário Atual', subtitle: 'Problemas comuns em comunicação estratégica e vendas' },
  { icon: DollarSign, title: 'Custo da Inação', subtitle: 'Consequências de manter o status quo' },
  { icon: TrendingUp, title: 'A Oportunidade', subtitle: 'Gap entre potencial de crescimento e realidade atual' },
  { icon: Users, title: 'Venturi Solutions – Mentor Estratégico', subtitle: 'Nossa filosofia "Value as a Service"' },
  { icon: Zap, title: 'Metodologia & Serviços', subtitle: 'Abordagem integrada: problema → solução → benefício' },
  { icon: CheckCircle, title: 'Casos de Sucesso', subtitle: 'Resultados reais (ROI/ROAS) e depoimentos' },
  { icon: Package, title: 'Soluções Integradas', subtitle: 'Pacotes e combos personalizados' },
  { icon: MessageSquare, title: 'Questionário Consultivo', subtitle: 'Perguntas para identificar necessidades ocultas' },
  { icon: ArrowRight, title: 'Próximos Passos', subtitle: 'Chamada para ação' },
];

export function AgendaSlide() {
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
          <h1 className="text-4xl md:text-5xl text-white mb-6">
            Seu negócio B2B tem potencial,
          </h1>
          <p className="text-2xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-primary via-red-500 to-red-600">
            mas por que não cresce como deveria?
          </p>
          <p className="text-xl text-gray-400 mt-6">
            Essa é a provocação que guia nossa conversa. Vamos explorar:
          </p>
        </motion.div>

        {/* Agenda Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {agendaItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              className="glass-premium p-6 rounded-xl hover:translate-y-[-2px] transition-all group"
            >
              <div className="flex gap-4">
                <div className="shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-red-600 rounded-lg flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-400">{item.subtitle}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
