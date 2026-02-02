import { motion } from 'motion/react';
import { Compass, Megaphone, Globe, Search, Bot, GraduationCap } from 'lucide-react';
import { GridPattern } from '../visuals/GridPattern';

const services = [
  {
    icon: Compass,
    title: 'Reestruturação Estratégica',
    problem: 'Falta de direção e foco',
    solution: 'Imersão 360° + plano estratégico unificado com KPIs claros',
    benefit: 'Clareza total de objetivos e caminho concreto para crescimento sustentável',
    color: 'from-red-500 to-red-600'
  },
  {
    icon: Megaphone,
    title: 'Ads & Performance',
    problem: 'Baixo ROI ou campanhas pouco eficientes',
    solution: 'Gestão completa de mídia paga com foco obsessivo em otimização',
    benefit: 'Redução do CAC e fluxo constante de leads qualificados',
    color: 'from-red-600 to-red-700'
  },
  {
    icon: Globe,
    title: 'Sites & Landing Pages',
    problem: 'Presença digital estéril que não gera resultado',
    solution: 'Design orientado à conversão + UX + copywriting persuasivo',
    benefit: 'Máquina de gerar leads 24/7, capturando oportunidades constantemente',
    color: 'from-red-700 to-red-800'
  },
  {
    icon: Search,
    title: 'SEO & GEO 360',
    problem: 'Invisibilidade nas buscas orgânicas e locais',
    solution: 'SEO técnico + conteúdo + SEO local (Google Maps)',
    benefit: 'Domínio das buscas, tráfego orgânico qualificado e marca fortalecida',
    color: 'from-red-800 to-red-900'
  },
  {
    icon: GraduationCap,
    title: 'Educação Continuada',
    problem: 'Desalinhamento de discurso e falta de preparo do time',
    solution: 'Programas de capacitação para marketing e vendas',
    benefit: 'Times afinados, mais leads convertidos e ciclos de vendas mais curtos',
    color: 'from-red-600 to-red-700'
  },
  {
    icon: Bot,
    title: 'Inteligência Artificial',
    problem: 'Gargalos de atendimento e follow-up humano',
    solution: 'Agentes virtuais para qualificação e atendimento 24/7',
    benefit: 'Eficiência exponencial, leads atendidos sem erros manuais',
    color: 'from-red-500 to-red-600'
  },
];

export function IntegratedMethodologySlide() {
  return (
    <div className="relative min-h-screen bg-background overflow-hidden py-20 px-6">
      <GridPattern />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-block glass-premium px-6 py-3 rounded-full mb-6">
            <p className="text-sm text-primary uppercase tracking-wider">Metodologia</p>
          </div>
          <h1 className="text-4xl md:text-5xl text-white mb-6">
            Soluções Integradas
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Problema → Solução → Benefício
          </p>
          <p className="text-gray-500 mt-4">
            Sistema operacional completo do crescimento para o seu negócio
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              className="glass-premium p-6 rounded-2xl hover:border-primary/30 transition-all group"
            >
              {/* Icon & Title */}
              <div className="mb-6">
                <div className={`w-14 h-14 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl text-white">{service.title}</h3>
              </div>

              {/* Problem */}
              <div className="mb-4">
                <div className="flex items-start gap-2 mb-2">
                  <span className="text-red-500 mt-1 shrink-0">◆</span>
                  <span className="text-xs text-gray-500 uppercase tracking-wider">Problema</span>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed pl-4">
                  {service.problem}
                </p>
              </div>

              {/* Solution */}
              <div className="mb-4">
                <div className="flex items-start gap-2 mb-2">
                  <span className="text-gray-400 mt-1 shrink-0">◆</span>
                  <span className="text-xs text-gray-500 uppercase tracking-wider">Solução</span>
                </div>
                <p className="text-sm text-gray-300 leading-relaxed pl-4">
                  {service.solution}
                </p>
              </div>

              {/* Benefit */}
              <div>
                <div className="flex items-start gap-2 mb-2">
                  <span className="text-primary mt-1 shrink-0">◆</span>
                  <span className="text-xs text-primary uppercase tracking-wider">Benefício</span>
                </div>
                <p className="text-sm text-white leading-relaxed pl-4">
                  {service.benefit}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-12 glass p-6 rounded-xl"
        >
          <p className="text-gray-400">
            <span className="text-white">Todos os serviços são modulados</span> para trabalhar juntos de forma sinérgica. 
            Podemos implementá-los passo a passo ou em paralelo, sempre preservando a visão estratégica unificada.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
