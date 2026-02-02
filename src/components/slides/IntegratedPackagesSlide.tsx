import { motion } from 'motion/react';
import { Package, Compass, Megaphone, Globe, Search, Bot, GraduationCap, Zap } from 'lucide-react';
import { GridPattern } from '../visuals/GridPattern';

const packages = [
  {
    icon: Compass,
    title: 'Reestruturação Estratégica',
    tiers: ['Básica', 'Completa'],
    description: 'Diagnóstico e planejamento fundamental ou imersão aprofundada com plano detalhado',
    features: ['Diagnóstico 360°', 'Plano estratégico unificado', 'KPIs definidos', 'Roadmap de 12 meses']
  },
  {
    icon: Globe,
    title: 'Landing Pages & Sites',
    tiers: ['3 Dobras', '6 Dobras', '9 Dobras'],
    description: 'Desenvolvimento customizado conforme complexidade desejada',
    features: ['Design responsivo', 'Copy profissional', 'Otimização de velocidade', 'Hospedagem gratuita*']
  },
  {
    icon: Megaphone,
    title: 'Ads & Performance',
    tiers: ['Iniciante', 'Intermediário', 'Avançado'],
    description: 'Planos escalonados conforme escopo de campanhas',
    features: ['Google + Meta + LinkedIn', 'Otimização contínua', 'Relatórios personalizados', 'Fee fixo + variável']
  },
  {
    icon: Search,
    title: 'SEO & GEO 360',
    tiers: ['Mensal Recorrente'],
    description: 'Serviço contínuo de médio/longo prazo',
    features: ['Auditoria técnica', 'SEO local (Google Maps)', 'Conteúdo regular', 'Relatórios de ranking']
  },
  {
    icon: GraduationCap,
    title: 'Treinamentos',
    tiers: ['Módulos Mensais'],
    description: 'Capacitação sob medida para equipes',
    features: ['Vendas consultivas', 'Marketing de conteúdo', 'Workshops práticos', 'Coaching on-the-job']
  },
  {
    icon: Bot,
    title: 'Agentes Inteligentes IA',
    tiers: ['Setup + Mensal'],
    description: 'Desenvolvimento e monitoramento contínuo',
    features: ['Integração multicanal', 'Qualificação automática', 'Atendimento 24/7', 'Evolução constante']
  },
];

export function IntegratedPackagesSlide() {
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
          <div className="inline-flex items-center gap-3 glass-premium px-6 py-3 rounded-full mb-6">
            <Package className="w-5 h-5 text-primary" />
            <p className="text-sm text-primary uppercase tracking-wider">Flexibilidade Total</p>
          </div>
          <h1 className="text-4xl md:text-5xl text-white mb-6">
            Soluções Integradas
          </h1>
          <p className="text-xl text-gray-400">
            Pacotes & Combos Personalizados
          </p>
        </motion.div>

        {/* Packages Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              className="glass-premium p-6 rounded-2xl hover:border-primary/30 transition-all group"
            >
              {/* Icon & Title */}
              <div className="mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-red-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <pkg.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl text-white mb-2">{pkg.title}</h3>
                
                {/* Tiers */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {pkg.tiers.map((tier, i) => (
                    <span key={i} className="text-xs px-3 py-1 glass rounded-full text-primary border border-primary/30">
                      {tier}
                    </span>
                  ))}
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-gray-400 mb-4 leading-relaxed">
                {pkg.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-primary mt-1 text-xs">▪</span>
                    <span className="text-xs text-gray-400">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Combo Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="relative"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-primary via-red-600 to-red-700 rounded-2xl blur-lg opacity-20" />
          <div className="relative glass-premium p-8 rounded-2xl border-2 border-primary/30">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 bg-gradient-to-br from-primary to-red-600 rounded-xl flex items-center justify-center shrink-0">
                <Zap className="w-7 h-7 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl text-white mb-4">Combos Integrados com Vantagens</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-gray-300 mb-3">
                      Podemos combinar serviços em <span className="text-primary">combos integrados com vantagens</span>. Por exemplo:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">✓</span>
                        <span className="text-sm text-gray-400">Reestruturação + Ads/SEO nos primeiros 6 meses</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">✓</span>
                        <span className="text-sm text-gray-400">Landing Page + Ads Performance</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">✓</span>
                        <span className="text-sm text-gray-400">SEO + Treinamento de Conteúdo</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-gray-300 mb-3">Condições especiais:</p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">▪</span>
                        <span className="text-sm text-gray-400">Hospedagem gratuita em contratos recorrentes</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">▪</span>
                        <span className="text-sm text-gray-400">Bônus de consultoria estratégica</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">▪</span>
                        <span className="text-sm text-gray-400">Serviços adicionados sem custo extra</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-center mt-8 glass p-6 rounded-xl"
        >
          <p className="text-gray-400">
            Você escolhe o nível de suporte e nós entregamos um <span className="text-white">engine completo de marketing e vendas</span> trabalhando a seu favor
          </p>
        </motion.div>
      </div>
    </div>
  );
}
