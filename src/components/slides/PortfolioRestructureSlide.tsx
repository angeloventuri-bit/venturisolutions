import { motion } from 'motion/react';
import { Target, TrendingUp, Zap, BarChart3 } from 'lucide-react';
import { Card } from '../ui/card';

export function PortfolioRestructureSlide() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-gray-900 to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(139,21,56,0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(163,29,69,0.1),transparent_50%)]" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(139, 21, 56, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(139, 21, 56, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-primary/10 border border-primary/30 rounded-full mb-6">
            <Target className="w-5 h-5 text-primary" />
            <span className="text-sm uppercase tracking-wider text-primary">Portfólio</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl mb-4">
            <span className="bg-gradient-to-r from-primary via-red-400 to-primary bg-clip-text text-transparent">
              Reestruturação Estratégica
            </span>
          </h1>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Transformação completa: diagnóstico profundo, ICP refinado e plano estratégico para crescimento sustentável
          </p>
        </motion.div>

        {/* Key Results */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid md:grid-cols-3 gap-6 mb-12"
        >
          <Card className="bg-gradient-to-br from-gray-900/90 via-gray-800/90 to-gray-900/90 border-primary/30 p-6 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative z-10">
              <TrendingUp className="w-8 h-8 text-primary mb-3" />
              <div className="text-3xl text-white mb-2">+347%</div>
              <div className="text-sm text-gray-400">Crescimento Médio em ROI</div>
            </div>
          </Card>

          <Card className="bg-gradient-to-br from-gray-900/90 via-gray-800/90 to-gray-900/90 border-primary/30 p-6 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative z-10">
              <Zap className="w-8 h-8 text-primary mb-3" />
              <div className="text-3xl text-white mb-2">12-16 sem</div>
              <div className="text-sm text-gray-400">Ciclo de Transformação</div>
            </div>
          </Card>

          <Card className="bg-gradient-to-br from-gray-900/90 via-gray-800/90 to-gray-900/90 border-primary/30 p-6 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative z-10">
              <BarChart3 className="w-8 h-8 text-primary mb-3" />
              <div className="text-3xl text-white mb-2">23+</div>
              <div className="text-sm text-gray-400">Empresas Reestruturadas</div>
            </div>
          </Card>
        </motion.div>

        {/* Portfolio Examples */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="grid md:grid-cols-2 gap-8"
        >
          {/* Example 1 */}
          <Card className="bg-gradient-to-br from-gray-900/80 via-gray-800/80 to-gray-900/80 border-primary/20 p-8 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <div className="text-sm text-primary uppercase tracking-wider mb-4">Case: SaaS B2B</div>
              <h3 className="text-2xl text-white mb-4">Redefinição Completa de Posicionamento</h3>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                  <div className="text-gray-300">
                    <strong className="text-white">Diagnóstico Inicial:</strong> 12 semanas mapeando jornada, personas e oportunidades
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                  <div className="text-gray-300">
                    <strong className="text-white">ICP Refinado:</strong> Redução de 60% em leads não qualificados
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                  <div className="text-gray-300">
                    <strong className="text-white">Plano Estratégico:</strong> Roadmap de 18 meses com KPIs claros
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-2xl text-primary">+420%</div>
                    <div className="text-xs text-gray-400">Aumento em MRR</div>
                  </div>
                  <div>
                    <div className="text-2xl text-primary">-55%</div>
                    <div className="text-xs text-gray-400">Redução CAC</div>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Example 2 */}
          <Card className="bg-gradient-to-br from-gray-900/80 via-gray-800/80 to-gray-900/80 border-primary/20 p-8 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <div className="text-sm text-primary uppercase tracking-wider mb-4">Case: E-commerce</div>
              <h3 className="text-2xl text-white mb-4">Pivotagem e Novo Mercado</h3>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                  <div className="text-gray-300">
                    <strong className="text-white">Análise de Mercado:</strong> Identificação de nicho inexplorado com alta demanda
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                  <div className="text-gray-300">
                    <strong className="text-white">Reposicionamento:</strong> Nova identidade, mensagem e oferta ajustada ao ICP
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                  <div className="text-gray-300">
                    <strong className="text-white">Execução:</strong> Go-to-market em 8 semanas com tração imediata
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-2xl text-primary">+580%</div>
                    <div className="text-xs text-gray-400">Crescimento Vendas</div>
                  </div>
                  <div>
                    <div className="text-2xl text-primary">2.4x</div>
                    <div className="text-xs text-gray-400">Ticket Médio</div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Process Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-12"
        >
          <Card className="bg-gradient-to-br from-primary/10 via-gray-900/50 to-primary/5 border-primary/30 p-8">
            <h3 className="text-2xl text-white mb-6 text-center">Nosso Processo de Reestruturação</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3 border border-primary/40">
                  <span className="text-primary">1</span>
                </div>
                <div className="text-sm text-white mb-2">Diagnóstico Profundo</div>
                <div className="text-xs text-gray-400">Análise 360° do negócio</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3 border border-primary/40">
                  <span className="text-primary">2</span>
                </div>
                <div className="text-sm text-white mb-2">ICP & Posicionamento</div>
                <div className="text-xs text-gray-400">Refinamento estratégico</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3 border border-primary/40">
                  <span className="text-primary">3</span>
                </div>
                <div className="text-sm text-white mb-2">Plano de Ação</div>
                <div className="text-xs text-gray-400">Roadmap detalhado</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3 border border-primary/40">
                  <span className="text-primary">4</span>
                </div>
                <div className="text-sm text-white mb-2">Acompanhamento</div>
                <div className="text-xs text-gray-400">Suporte contínuo</div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
