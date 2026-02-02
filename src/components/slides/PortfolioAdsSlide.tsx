import { motion } from 'motion/react';
import { Megaphone, TrendingUp, DollarSign, Users } from 'lucide-react';
import { Card } from '../ui/card';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function PortfolioAdsSlide() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-gray-900 to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(139,21,56,0.15),transparent_50%)]" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-primary/10 border border-primary/30 rounded-full mb-6">
            <Megaphone className="w-5 h-5 text-primary" />
            <span className="text-sm uppercase tracking-wider text-primary">Portfólio</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl mb-4">
            <span className="bg-gradient-to-r from-primary via-red-400 to-primary bg-clip-text text-transparent">
              Ads & Performance
            </span>
          </h1>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Campanhas de tráfego pago com metodologia criativa lucrativa: escala, CAC otimizado e conversão máxima
          </p>
        </motion.div>

        {/* Metrics Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid md:grid-cols-4 gap-4 mb-8"
        >
          <Card className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 border-primary/30 p-4">
            <TrendingUp className="w-6 h-6 text-primary mb-2" />
            <div className="text-2xl text-white">+892%</div>
            <div className="text-xs text-gray-400">ROAS Médio</div>
          </Card>
          <Card className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 border-primary/30 p-4">
            <DollarSign className="w-6 h-6 text-primary mb-2" />
            <div className="text-2xl text-white">R$ 12M+</div>
            <div className="text-xs text-gray-400">Gerenciado em Ads</div>
          </Card>
          <Card className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 border-primary/30 p-4">
            <Users className="w-6 h-6 text-primary mb-2" />
            <div className="text-2xl text-white">-67%</div>
            <div className="text-xs text-gray-400">Redução CAC Média</div>
          </Card>
          <Card className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 border-primary/30 p-4">
            <Megaphone className="w-6 h-6 text-primary mb-2" />
            <div className="text-2xl text-white">150+</div>
            <div className="text-xs text-gray-400">Campanhas Ativas</div>
          </Card>
        </motion.div>

        {/* Main Portfolio Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Visual Example */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Card className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 border-primary/20 p-6 h-full">
              <div className="text-sm text-primary uppercase tracking-wider mb-4">Dashboard de Performance</div>
              
              <div className="relative rounded-lg overflow-hidden mb-4 aspect-video">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1586448069187-4df49d52e5fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwYWR2ZXJ0aXNpbmclMjBkYXNoYm9hcmQlMjBtZXRyaWNzfGVufDF8fHx8MTc2MTkxMTU3N3ww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Analytics Dashboard"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
              </div>

              <p className="text-gray-300 text-sm mb-4">
                Monitoramento em tempo real de todas as métricas críticas: CPC, CTR, CVR, ROAS e lifetime value.
              </p>

              <div className="grid grid-cols-2 gap-3">
                <div className="bg-black/30 rounded-lg p-3 border border-primary/20">
                  <div className="text-xs text-gray-400 mb-1">Meta Ads</div>
                  <div className="text-white">ROAS 12.4x</div>
                </div>
                <div className="bg-black/30 rounded-lg p-3 border border-primary/20">
                  <div className="text-xs text-gray-400 mb-1">Google Ads</div>
                  <div className="text-white">CVR 8.2%</div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Case Studies */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            {/* Case 1 */}
            <Card className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 border-primary/20 p-6 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute -right-10 -top-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
              
              <div className="relative z-10">
                <div className="text-sm text-primary uppercase tracking-wider mb-3">Case: E-commerce Moda</div>
                <h3 className="text-xl text-white mb-3">Escala de R$ 50k para R$ 840k/mês</h3>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    <span className="text-gray-300">Criação de 180+ variações de criativos</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    <span className="text-gray-300">Segmentação por interesse e comportamento</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    <span className="text-gray-300">Otimização diária de lances e orçamento</span>
                  </div>
                </div>

                <div className="flex gap-4 pt-3 border-t border-white/10">
                  <div>
                    <div className="text-xl text-primary">ROAS 9.2x</div>
                    <div className="text-xs text-gray-400">Meta Ads</div>
                  </div>
                  <div>
                    <div className="text-xl text-primary">CAC -58%</div>
                    <div className="text-xs text-gray-400">vs. Anterior</div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Case 2 */}
            <Card className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 border-primary/20 p-6 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute -left-10 -bottom-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
              
              <div className="relative z-10">
                <div className="text-sm text-primary uppercase tracking-wider mb-3">Case: Infoproduto</div>
                <h3 className="text-xl text-white mb-3">Lançamento com 2.840 Inscritos</h3>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    <span className="text-gray-300">Funil completo: awareness → consideração → conversão</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    <span className="text-gray-300">Retargeting estratégico em 4 camadas</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    <span className="text-gray-300">VSL otimizado com testes A/B contínuos</span>
                  </div>
                </div>

                <div className="flex gap-4 pt-3 border-t border-white/10">
                  <div>
                    <div className="text-xl text-primary">CPL R$ 4.80</div>
                    <div className="text-xs text-gray-400">Google + Meta</div>
                  </div>
                  <div>
                    <div className="text-xl text-primary">18.2%</div>
                    <div className="text-xs text-gray-400">Taxa Conversão</div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Platforms */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-8"
        >
          <Card className="bg-gradient-to-br from-primary/10 via-gray-900/50 to-primary/5 border-primary/30 p-6">
            <h3 className="text-xl text-white mb-4 text-center">Plataformas e Estratégias</h3>
            <div className="grid md:grid-cols-5 gap-4 text-center text-sm">
              <div className="text-gray-300">
                <div className="text-primary mb-1">Meta Ads</div>
                <div className="text-xs text-gray-400">Facebook & Instagram</div>
              </div>
              <div className="text-gray-300">
                <div className="text-primary mb-1">Google Ads</div>
                <div className="text-xs text-gray-400">Search & Display</div>
              </div>
              <div className="text-gray-300">
                <div className="text-primary mb-1">TikTok Ads</div>
                <div className="text-xs text-gray-400">Vídeo Orgânico + Pago</div>
              </div>
              <div className="text-gray-300">
                <div className="text-primary mb-1">LinkedIn Ads</div>
                <div className="text-xs text-gray-400">B2B & Corporativo</div>
              </div>
              <div className="text-gray-300">
                <div className="text-primary mb-1">Pinterest Ads</div>
                <div className="text-xs text-gray-400">Visual Discovery</div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
