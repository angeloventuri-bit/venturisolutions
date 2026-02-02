import { motion } from 'motion/react';
import { Bot, Sparkles, Zap, TrendingUp } from 'lucide-react';
import { Card } from '../ui/card';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function PortfolioAISlide() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-gray-900 to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_40%,rgba(139,21,56,0.15),transparent_50%)]" />
      
      {/* Animated grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(139, 21, 56, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(139, 21, 56, 0.1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
          animation: 'grid-move 20s linear infinite'
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
            <Bot className="w-5 h-5 text-primary" />
            <span className="text-sm uppercase tracking-wider text-primary">Portfólio</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl mb-4">
            <span className="bg-gradient-to-r from-primary via-red-400 to-primary bg-clip-text text-transparent">
              Agentes de IA
            </span>
          </h1>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Automação inteligente: account managers, secretárias e assistentes comerciais que escalam operações
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
            <Sparkles className="w-6 h-6 text-primary mb-2" />
            <div className="text-2xl text-white">-85%</div>
            <div className="text-xs text-gray-400">Redução Tempo Manual</div>
          </Card>
          <Card className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 border-primary/30 p-4">
            <Zap className="w-6 h-6 text-primary mb-2" />
            <div className="text-2xl text-white">24/7</div>
            <div className="text-xs text-gray-400">Operação Contínua</div>
          </Card>
          <Card className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 border-primary/30 p-4">
            <TrendingUp className="w-6 h-6 text-primary mb-2" />
            <div className="text-2xl text-white">+540%</div>
            <div className="text-xs text-gray-400">Produtividade</div>
          </Card>
          <Card className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 border-primary/30 p-4">
            <Bot className="w-6 h-6 text-primary mb-2" />
            <div className="text-2xl text-white">65+</div>
            <div className="text-xs text-gray-400">Agentes Implementados</div>
          </Card>
        </motion.div>

        {/* Main Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Visual + Tech */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Card className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 border-primary/20 p-6 h-full">
              <div className="text-sm text-primary uppercase tracking-wider mb-4">Tecnologia de IA</div>
              
              <div className="relative rounded-lg overflow-hidden mb-4 aspect-video">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1758626038030-96f813504d15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBSSUyMGF1dG9tYXRpb24lMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2MTgwNTc3NHww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="AI Technology"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
                
                {/* Tech Badges */}
                <div className="absolute top-4 left-4 right-4 flex flex-wrap gap-2">
                  <div className="bg-black/70 backdrop-blur-sm border border-primary/30 rounded-full px-3 py-1 text-xs text-primary">
                    GPT-4
                  </div>
                  <div className="bg-black/70 backdrop-blur-sm border border-primary/30 rounded-full px-3 py-1 text-xs text-primary">
                    Claude 3
                  </div>
                  <div className="bg-black/70 backdrop-blur-sm border border-primary/30 rounded-full px-3 py-1 text-xs text-primary">
                    Custom Models
                  </div>
                </div>
              </div>

              <h3 className="text-lg text-white mb-3">Agentes Personalizados</h3>
              
              <div className="space-y-3 text-sm mb-4">
                <div className="bg-black/30 rounded-lg p-3 border border-primary/20">
                  <div className="flex items-center gap-2 mb-2">
                    <Bot className="w-4 h-4 text-primary" />
                    <div className="text-white">Account Manager IA</div>
                  </div>
                  <div className="text-gray-400 text-xs">
                    Acompanhamento de clientes, respostas automáticas e gestão de relacionamento
                  </div>
                </div>

                <div className="bg-black/30 rounded-lg p-3 border border-primary/20">
                  <div className="flex items-center gap-2 mb-2">
                    <Bot className="w-4 h-4 text-primary" />
                    <div className="text-white">Secretária Virtual</div>
                  </div>
                  <div className="text-gray-400 text-xs">
                    Agendamento, triagem de leads e gestão de calendário integrada
                  </div>
                </div>

                <div className="bg-black/30 rounded-lg p-3 border border-primary/20">
                  <div className="flex items-center gap-2 mb-2">
                    <Bot className="w-4 h-4 text-primary" />
                    <div className="text-white">Assistente Comercial</div>
                  </div>
                  <div className="text-gray-400 text-xs">
                    Qualificação de leads, follow-up automatizado e suporte a vendas
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="text-center py-2 bg-primary/10 rounded-lg border border-primary/20">
                  <div className="text-primary text-sm">Integração</div>
                  <div className="text-xs text-gray-400">CRM + Tools</div>
                </div>
                <div className="text-center py-2 bg-primary/10 rounded-lg border border-primary/20">
                  <div className="text-primary text-sm">Training</div>
                  <div className="text-xs text-gray-400">Custom Dataset</div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Use Cases */}
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
                <div className="text-sm text-primary uppercase tracking-wider mb-3">Case: Agência de Viagens</div>
                <h3 className="text-xl text-white mb-3">IA Atendendo 2.400 Leads/Mês</h3>
                
                <div className="space-y-2 mb-4 text-sm">
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5" />
                    <span className="text-gray-300">
                      <strong className="text-white">Agente:</strong> Secretária virtual + comercial integrada
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5" />
                    <span className="text-gray-300">
                      <strong className="text-white">Função:</strong> Qualificação, cotação e agendamento automático
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5" />
                    <span className="text-gray-300">
                      <strong className="text-white">Resultado:</strong> Time humano focado apenas em fechamento
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5" />
                    <span className="text-gray-300">
                      <strong className="text-white">ROI:</strong> Economia de 4 colaboradores full-time
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2 pt-3 border-t border-white/10">
                  <div>
                    <div className="text-lg text-primary">-92%</div>
                    <div className="text-xs text-gray-400">Tempo Manual</div>
                  </div>
                  <div>
                    <div className="text-lg text-primary">68%</div>
                    <div className="text-xs text-gray-400">Taxa Qualif.</div>
                  </div>
                  <div>
                    <div className="text-lg text-primary">24/7</div>
                    <div className="text-xs text-gray-400">Disponível</div>
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
                <h3 className="text-xl text-white mb-3">Account Manager Escalável</h3>
                
                <div className="space-y-2 mb-4 text-sm">
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5" />
                    <span className="text-gray-300">
                      <strong className="text-white">Agente:</strong> Account manager personalizado por cliente
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5" />
                    <span className="text-gray-300">
                      <strong className="text-white">Função:</strong> Onboarding, suporte e upsell proativo
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5" />
                    <span className="text-gray-300">
                      <strong className="text-white">Integração:</strong> Slack, CRM e plataforma do produto
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5" />
                    <span className="text-gray-300">
                      <strong className="text-white">Impacto:</strong> 1 AM humano gerencia 10x mais contas
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2 pt-3 border-t border-white/10">
                  <div>
                    <div className="text-lg text-primary">+420%</div>
                    <div className="text-xs text-gray-400">Capacidade</div>
                  </div>
                  <div>
                    <div className="text-lg text-primary">-78%</div>
                    <div className="text-xs text-gray-400">Churn Rate</div>
                  </div>
                  <div>
                    <div className="text-lg text-primary">+180%</div>
                    <div className="text-xs text-gray-400">Upsell</div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* AI Capabilities */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-8"
        >
          <Card className="bg-gradient-to-br from-primary/10 via-gray-900/50 to-primary/5 border-primary/30 p-6">
            <h3 className="text-xl text-white mb-4 text-center">Capacidades dos Agentes</h3>
            <div className="grid md:grid-cols-5 gap-4 text-center text-sm">
              <div className="text-gray-300">
                <div className="text-primary mb-1">NLP Avançado</div>
                <div className="text-xs text-gray-400">Compreensão Natural</div>
              </div>
              <div className="text-gray-300">
                <div className="text-primary mb-1">Multi-idioma</div>
                <div className="text-xs text-gray-400">PT, EN, ES</div>
              </div>
              <div className="text-gray-300">
                <div className="text-primary mb-1">Aprendizado</div>
                <div className="text-xs text-gray-400">Melhoria Contínua</div>
              </div>
              <div className="text-gray-300">
                <div className="text-primary mb-1">Integrações</div>
                <div className="text-xs text-gray-400">APIs Ilimitadas</div>
              </div>
              <div className="text-gray-300">
                <div className="text-primary mb-1">Segurança</div>
                <div className="text-xs text-gray-400">LGPD Compliant</div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>

      <style>{`
        @keyframes grid-move {
          0% { transform: translateY(0); }
          100% { transform: translateY(40px); }
        }
      `}</style>
    </div>
  );
}
