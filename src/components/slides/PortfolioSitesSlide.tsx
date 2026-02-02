import { motion } from 'motion/react';
import { Globe, Zap, ShoppingCart, TrendingUp } from 'lucide-react';
import { Card } from '../ui/card';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function PortfolioSitesSlide() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-gray-900 to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(139,21,56,0.15),transparent_50%)]" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-primary/10 border border-primary/30 rounded-full mb-6">
            <Globe className="w-5 h-5 text-primary" />
            <span className="text-sm uppercase tracking-wider text-primary">Portfólio</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl mb-4">
            <span className="bg-gradient-to-r from-primary via-red-400 to-primary bg-clip-text text-transparent">
              Sites & Landing Pages
            </span>
          </h1>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Design de alta conversão, performance otimizada e integração completa com ferramentas de dados
          </p>
        </motion.div>

        {/* Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid md:grid-cols-4 gap-4 mb-8"
        >
          <Card className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 border-primary/30 p-4">
            <Zap className="w-6 h-6 text-primary mb-2" />
            <div className="text-2xl text-white">98/100</div>
            <div className="text-xs text-gray-400">PageSpeed Score</div>
          </Card>
          <Card className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 border-primary/30 p-4">
            <ShoppingCart className="w-6 h-6 text-primary mb-2" />
            <div className="text-2xl text-white">+340%</div>
            <div className="text-xs text-gray-400">Taxa Conversão Média</div>
          </Card>
          <Card className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 border-primary/30 p-4">
            <TrendingUp className="w-6 h-6 text-primary mb-2" />
            <div className="text-2xl text-white">85+</div>
            <div className="text-xs text-gray-400">Sites Desenvolvidos</div>
          </Card>
          <Card className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 border-primary/30 p-4">
            <Globe className="w-6 h-6 text-primary mb-2" />
            <div className="text-2xl text-white">{"<1.2s"}</div>
            <div className="text-xs text-gray-400">Tempo Carregamento</div>
          </Card>
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Visual Showcase */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Card className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 border-primary/20 p-6 h-full">
              <div className="text-sm text-primary uppercase tracking-wider mb-4">Exemplo: Site Institucional Premium</div>
              
              <div className="relative rounded-lg overflow-hidden mb-4 aspect-[16/10]">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1630522790858-50b4ef44944b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWJzaXRlJTIwZGVzaWduJTIwbW9ja3VwfGVufDF8fHx8MTc2MTkwMTU2MXww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Website Design"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
                
                {/* Overlay Stats */}
                <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                  <div className="flex-1 bg-black/60 backdrop-blur-sm border border-primary/30 rounded-lg p-2">
                    <div className="text-xs text-gray-300">Desktop</div>
                    <div className="text-primary">97</div>
                  </div>
                  <div className="flex-1 bg-black/60 backdrop-blur-sm border border-primary/30 rounded-lg p-2">
                    <div className="text-xs text-gray-300">Mobile</div>
                    <div className="text-primary">94</div>
                  </div>
                  <div className="flex-1 bg-black/60 backdrop-blur-sm border border-primary/30 rounded-lg p-2">
                    <div className="text-xs text-gray-300">SEO</div>
                    <div className="text-primary">100</div>
                  </div>
                </div>
              </div>

              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                  <span className="text-gray-300">Design responsivo mobile-first</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                  <span className="text-gray-300">Animações suaves em Motion/React</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                  <span className="text-gray-300">CMS headless integrado</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                  <span className="text-gray-300">Analytics e tracking completo</span>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Cases */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            {/* Case 1: Landing Page */}
            <Card className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 border-primary/20 p-6 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute -right-10 -top-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
              
              <div className="relative z-10">
                <div className="text-sm text-primary uppercase tracking-wider mb-3">Landing Page: Lançamento</div>
                <h3 className="text-xl text-white mb-3">12.840 Cadastros em 14 Dias</h3>
                
                <div className="space-y-2 mb-4 text-sm">
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5" />
                    <span className="text-gray-300">Design focado em conversão com copywriting persuasivo</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5" />
                    <span className="text-gray-300">Countdown timer e prova social dinâmica</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5" />
                    <span className="text-gray-300">Otimização mobile com carregamento {"<0.9s"}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5" />
                    <span className="text-gray-300">Integração com ActiveCampaign e Pixel tracking</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-3 border-t border-white/10">
                  <div>
                    <div className="text-xl text-primary">42.8%</div>
                    <div className="text-xs text-gray-400">Taxa de Conversão</div>
                  </div>
                  <div>
                    <div className="text-xl text-primary">0.87s</div>
                    <div className="text-xs text-gray-400">Load Time Mobile</div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Case 2: E-commerce */}
            <Card className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 border-primary/20 p-6 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute -left-10 -bottom-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
              
              <div className="relative z-10">
                <div className="text-sm text-primary uppercase tracking-wider mb-3">E-commerce: Moda Premium</div>
                <h3 className="text-xl text-white mb-3">Redesign com +280% em Vendas</h3>
                
                <div className="space-y-2 mb-4 text-sm">
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5" />
                    <span className="text-gray-300">UX redesenhada focada em jornada de compra</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5" />
                    <span className="text-gray-300">Checkout otimizado em 1 página (one-page)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5" />
                    <span className="text-gray-300">Sistema de recomendação inteligente</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5" />
                    <span className="text-gray-300">Integração com ERP e gateway de pagamento</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-3 border-t border-white/10">
                  <div>
                    <div className="text-xl text-primary">+280%</div>
                    <div className="text-xs text-gray-400">Crescimento Vendas</div>
                  </div>
                  <div>
                    <div className="text-xl text-primary">-68%</div>
                    <div className="text-xs text-gray-400">Taxa Abandono</div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-8"
        >
          <Card className="bg-gradient-to-br from-primary/10 via-gray-900/50 to-primary/5 border-primary/30 p-6">
            <h3 className="text-xl text-white mb-4 text-center">Tecnologias e Integrações</h3>
            <div className="grid md:grid-cols-6 gap-4 text-center text-sm">
              <div className="text-gray-300">
                <div className="text-primary mb-1">React</div>
                <div className="text-xs text-gray-400">Next.js 14</div>
              </div>
              <div className="text-gray-300">
                <div className="text-primary mb-1">WordPress</div>
                <div className="text-xs text-gray-400">Headless CMS</div>
              </div>
              <div className="text-gray-300">
                <div className="text-primary mb-1">Shopify</div>
                <div className="text-xs text-gray-400">E-commerce</div>
              </div>
              <div className="text-gray-300">
                <div className="text-primary mb-1">Webflow</div>
                <div className="text-xs text-gray-400">No-code</div>
              </div>
              <div className="text-gray-300">
                <div className="text-primary mb-1">GTM</div>
                <div className="text-xs text-gray-400">Tag Manager</div>
              </div>
              <div className="text-gray-300">
                <div className="text-primary mb-1">Analytics</div>
                <div className="text-xs text-gray-400">GA4 + Hotjar</div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
