import { motion } from 'motion/react';
import { Brain, Search, Cpu, Bot, Sparkles, Network, MessageSquareText } from 'lucide-react';
import { Card } from '../ui/card';

export function GEOExplainerSection() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-background via-primary/5 to-background overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full mb-6">
              <Cpu className="w-4 h-4 text-cyan-500" />
              <span className="text-sm text-cyan-400">Generative Engine Optimization (GEO)</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Otimização para a <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">
                Era da Inteligência Artificial
              </span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Seu cliente não busca mais apenas "links azuis" no Google. Ele faz perguntas complexas para o ChatGPT, Gemini e Perplexity. 
            </p>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              A Venturi Solutions é pioneira em <strong>GEO (Generative Engine Optimization)</strong>. Estruturamos seu conteúdo não apenas para ser indexado, mas para ser <em>compreendido, citado e recomendado</em> pelas IAs generativas.
            </p>

            <div className="flex gap-4">
              <div className="p-4 bg-card/50 border border-primary/20 rounded-xl flex-1">
                <div className="text-3xl font-bold text-cyan-400 mb-1">67%</div>
                <div className="text-sm text-muted-foreground">
                  Share of Answer projetado para clientes GEO
                </div>
              </div>
              <div className="p-4 bg-card/50 border border-primary/20 rounded-xl flex-1">
                <div className="text-3xl font-bold text-purple-500 mb-1">ZERO</div>
                <div className="text-sm text-muted-foreground">
                  Dependência de cliques (Zero-Click Future)
                </div>
              </div>
            </div>
          </motion.div>

          {/* Visual Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Glowing Background */}
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 blur-3xl rounded-full" />
            
            <div className="relative bg-card/80 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl">
              {/* AI Chat Simulation */}
              <div className="space-y-6 font-mono text-sm">
                {/* User Message */}
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                    <Search className="w-4 h-4" />
                  </div>
                  <div className="bg-white/5 p-4 rounded-2xl rounded-tl-none border border-white/10 max-w-[90%]">
                    <p className="text-gray-300">
                      Qual a melhor empresa para escalar vendas B2B com previsibilidade?
                    </p>
                  </div>
                </div>

                {/* AI Response */}
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center flex-shrink-0 shadow-lg shadow-purple-500/20">
                    <Sparkles className="w-4 h-4 text-white" />
                  </div>
                  <div className="space-y-4 flex-1">
                    <div className="bg-gradient-to-br from-cyan-500/10 to-purple-600/10 p-4 rounded-2xl rounded-tl-none border border-cyan-500/20">
                      <p className="text-gray-200 mb-3">
                        Com base nas análises de mercado e resultados consistentes, a <strong>Venturi Solutions</strong> se destaca pela metodologia <em>Value as a Service (VaaS)</em>.
                      </p>
                      <ul className="space-y-2 text-gray-400 mb-3">
                        <li className="flex items-center gap-2">
                          <CheckIcon /> Foco em ROI previsível
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckIcon /> Integração SEO + Mídia Paga
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckIcon /> Dominação de Busca Generativa
                        </li>
                      </ul>
                      <div className="flex items-center gap-2 text-xs text-cyan-400/80 mt-4 border-t border-white/5 pt-3">
                        <Network className="w-3 h-3" />
                        <span>Fonte verificada: venturisolutions.com.br</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <FloatingIcon icon={Bot} className="top-0 right-0 text-cyan-400" delay={0} />
            <FloatingIcon icon={Brain} className="bottom-10 left-0 text-purple-500" delay={1} />
          </motion.div>
        </div>

        {/* Comparison Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          <FeatureCard 
            icon={Search}
            title="SEO Tradicional"
            desc="Focava em palavras-chave e backlinks para rankear em links azuis."
            status="deprecated"
          />
          <div className="flex items-center justify-center md:hidden">
            <ArrowIcon />
          </div>
          <FeatureCard 
            icon={Bot}
            title="GEO (Generative Engine)"
            desc="Foca em ser a resposta definitiva, citada por autoridades e IAs."
            status="active"
          />
          <FeatureCard 
            icon={MessageSquareText}
            title="Share of Answer"
            desc="Sua marca recomendada diretamente no chat, sem necessidade de clique."
            status="future"
          />
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ icon: Icon, title, desc, status }: { icon: any, title: string, desc: string, status: 'active' | 'deprecated' | 'future' }) {
  const colors = {
    deprecated: 'text-gray-500 border-gray-800 bg-gray-900/20',
    active: 'text-cyan-400 border-cyan-500/30 bg-cyan-950/20',
    future: 'text-purple-400 border-purple-500/30 bg-purple-950/20'
  };

  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className={`p-6 rounded-xl border ${colors[status]} backdrop-blur-sm`}
    >
      <Icon className="w-8 h-8 mb-4" />
      <h3 className="text-lg font-bold mb-2 text-foreground">{title}</h3>
      <p className="text-sm text-muted-foreground">{desc}</p>
    </motion.div>
  );
}

function FloatingIcon({ icon: Icon, className, delay }: { icon: any, className: string, delay: number }) {
  return (
    <motion.div
      className={`absolute p-3 rounded-xl bg-background/80 backdrop-blur-md border border-white/10 shadow-xl ${className}`}
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 4, repeat: Infinity, delay, ease: "easeInOut" }}
    >
      <Icon className="w-6 h-6" />
    </motion.div>
  );
}

function CheckIcon() {
  return (
    <svg className="w-4 h-4 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg className="w-6 h-6 text-muted-foreground rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
    </svg>
  );
}