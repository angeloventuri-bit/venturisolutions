import { motion } from 'motion/react';
import { Search, TrendingUp, Globe, BarChart3 } from 'lucide-react';
import { Card } from '../ui/card';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function PortfolioSEOSlide() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-gray-900 to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_60%,rgba(139,21,56,0.15),transparent_50%)]" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-primary/10 border border-primary/30 rounded-full mb-6">
            <Search className="w-5 h-5 text-primary" />
            <span className="text-sm uppercase tracking-wider text-primary">Portfólio</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl mb-4">
            <span className="bg-gradient-to-r from-primary via-red-400 to-primary bg-clip-text text-transparent">
              SEO & DIO 360
            </span>
          </h1>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Crescimento orgânico sustentável: autoridade, relevância e posicionamento estratégico na busca
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
            <TrendingUp className="w-6 h-6 text-primary mb-2" />
            <div className="text-2xl text-white">+680%</div>
            <div className="text-xs text-gray-400">Crescimento Tráfego Médio</div>
          </Card>
          <Card className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 border-primary/30 p-4">
            <Globe className="w-6 h-6 text-primary mb-2" />
            <div className="text-2xl text-white">2.8M+</div>
            <div className="text-xs text-gray-400">Visitas Mensais Gerenciadas</div>
          </Card>
          <Card className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 border-primary/30 p-4">
            <Search className="w-6 h-6 text-primary mb-2" />
            <div className="text-2xl text-white">15k+</div>
            <div className="text-xs text-gray-400">Keywords Ranqueadas</div>
          </Card>
          <Card className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 border-primary/30 p-4">
            <BarChart3 className="w-6 h-6 text-primary mb-2" />
            <div className="text-2xl text-white">DA 75+</div>
            <div className="text-xs text-gray-400">Domain Authority Média</div>
          </Card>
        </motion.div>

        {/* Main Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Visual + Analytics */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Card className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 border-primary/20 p-6 h-full">
              <div className="text-sm text-primary uppercase tracking-wider mb-4">Performance Dashboard</div>
              
              <div className="relative rounded-lg overflow-hidden mb-4 aspect-video">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTRU8lMjBhbmFseXRpY3MlMjBncm93dGh8ZW58MXx8fHwxNzYxOTExNTc4fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="SEO Analytics"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
                
                {/* Overlay Metrics */}
                <div className="absolute bottom-4 left-4 right-4 grid grid-cols-3 gap-2">
                  <div className="bg-black/70 backdrop-blur-sm border border-primary/30 rounded-lg p-2">
                    <div className="text-xs text-gray-300">Tráfego Org.</div>
                    <div className="text-primary">+540%</div>
                  </div>
                  <div className="bg-black/70 backdrop-blur-sm border border-primary/30 rounded-lg p-2">
                    <div className="text-xs text-gray-300">Top 3</div>
                    <div className="text-primary">2.840</div>
                  </div>
                  <div className="bg-black/70 backdrop-blur-sm border border-primary/30 rounded-lg p-2">
                    <div className="text-xs text-gray-300">DA Score</div>
                    <div className="text-primary">82</div>
                  </div>
                </div>
              </div>

              <h3 className="text-lg text-white mb-3">Estratégia SEO 360º</h3>
              
              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5" />
                  <div className="text-gray-300">
                    <strong className="text-white">On-Page:</strong> Otimização técnica, conteúdo e estrutura
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5" />
                  <div className="text-gray-300">
                    <strong className="text-white">Off-Page:</strong> Link building estratégico e autoridade
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5" />
                  <div className="text-gray-300">
                    <strong className="text-white">Technical:</strong> Core Web Vitals e performance
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5" />
                  <div className="text-gray-300">
                    <strong className="text-white">Content:</strong> Estratégia de conteúdo e keywords
                  </div>
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
            {/* Case 1 */}
            <Card className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 border-primary/20 p-6 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute -right-10 -top-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
              
              <div className="relative z-10">
                <div className="text-sm text-primary uppercase tracking-wider mb-3">Case: E-commerce B2C</div>
                <h3 className="text-xl text-white mb-3">De 8k para 420k Visitas/Mês</h3>
                
                <div className="space-y-2 mb-4 text-sm">
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5" />
                    <span className="text-gray-300">Auditoria completa e correção de 240+ erros técnicos</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5" />
                    <span className="text-gray-300">Estratégia de conteúdo: 180 artigos otimizados em 12 meses</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5" />
                    <span className="text-gray-300">Link building: 480+ backlinks de alta autoridade</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5" />
                    <span className="text-gray-300">Core Web Vitals: score 95+ em todas as métricas</span>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2 pt-3 border-t border-white/10">
                  <div>
                    <div className="text-lg text-primary">+5.150%</div>
                    <div className="text-xs text-gray-400">Tráfego</div>
                  </div>
                  <div>
                    <div className="text-lg text-primary">DA 78</div>
                    <div className="text-xs text-gray-400">Authority</div>
                  </div>
                  <div>
                    <div className="text-lg text-primary">3.2k</div>
                    <div className="text-xs text-gray-400">Top 3 KWs</div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Case 2 */}
            <Card className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 border-primary/20 p-6 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute -left-10 -bottom-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
              
              <div className="relative z-10">
                <div className="text-sm text-primary uppercase tracking-wider mb-3">Case: SaaS B2B</div>
                <h3 className="text-xl text-white mb-3">Domínio de Nicho Competitivo</h3>
                
                <div className="space-y-2 mb-4 text-sm">
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5" />
                    <span className="text-gray-300">Pesquisa de palavras-chave long-tail de alto valor</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5" />
                    <span className="text-gray-300">Conteúdo educacional: guias, whitepapers e cases</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5" />
                    <span className="text-gray-300">Estratégia de featured snippets (posição zero)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5" />
                    <span className="text-gray-300">Schema markup e rich snippets para SERP</span>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2 pt-3 border-t border-white/10">
                  <div>
                    <div className="text-lg text-primary">840%</div>
                    <div className="text-xs text-gray-400">Leads Org.</div>
                  </div>
                  <div>
                    <div className="text-lg text-primary">#1</div>
                    <div className="text-xs text-gray-400">180 KWs</div>
                  </div>
                  <div>
                    <div className="text-lg text-primary">42</div>
                    <div className="text-xs text-gray-400">Snippets</div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* SEO Services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-8"
        >
          <Card className="bg-gradient-to-br from-primary/10 via-gray-900/50 to-primary/5 border-primary/30 p-6">
            <h3 className="text-xl text-white mb-4 text-center">Serviços SEO Incluídos</h3>
            <div className="grid md:grid-cols-5 gap-4 text-center text-sm">
              <div className="text-gray-300">
                <div className="text-primary mb-1">Auditoria Técnica</div>
                <div className="text-xs text-gray-400">Análise Completa</div>
              </div>
              <div className="text-gray-300">
                <div className="text-primary mb-1">Content Strategy</div>
                <div className="text-xs text-gray-400">Planejamento</div>
              </div>
              <div className="text-gray-300">
                <div className="text-primary mb-1">Link Building</div>
                <div className="text-xs text-gray-400">Autoridade</div>
              </div>
              <div className="text-gray-300">
                <div className="text-primary mb-1">Local SEO</div>
                <div className="text-xs text-gray-400">Google Maps</div>
              </div>
              <div className="text-gray-300">
                <div className="text-primary mb-1">Reporting</div>
                <div className="text-xs text-gray-400">Dashboard 24/7</div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
