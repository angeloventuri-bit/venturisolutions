import { Card } from '../ui/card';
import { Cpu, Search, Target, TrendingUp, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { useContactDialog } from '../../utils/useContactDialog';

const cycleSteps = [
  {
    number: '1',
    title: 'Diagnóstico',
    description: 'Avaliação completa e aprofundada da empresa, entregáveis e Perfil de Cliente Ideal (ICP)',
  },
  {
    number: '2',
    title: 'Plano de Ação',
    description: 'Go-to-Action com interpretação estratégica focada em resultado',
  },
  {
    number: '3',
    title: 'Resultado',
    description: 'Execução orientada a métricas e conversão previsível',
  },
  {
    number: '4',
    title: 'Análise e Otimização',
    description: 'Verificar e Agir – ciclo contínuo de melhoria',
  },
];

export function SolutionSection() {
  const { openDialog } = useContactDialog();

  return (
    <section id="solution" className="relative py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full"
          >
            <Cpu className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">Metodologia Proprietária</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl max-w-5xl mx-auto leading-tight"
          >
            A solução não é fazer{' '}
            <span className="text-primary">
              mais do mesmo
            </span>
            .{' '}
            <br className="hidden md:block" />
            É extrair e comunicar o seu{' '}
            <span className="text-primary font-bold">
              valor
            </span>
            .
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl text-muted-foreground max-w-4xl mx-auto"
          >
            Conheça a metodologia exclusiva <span className="text-foreground font-medium">Value as a Service (VaaS)</span> – um sistema estratégico que alinha tecnologia, análise, estratégia e plano de ação ao que realmente importa para o cliente e transforma interesse em receita previsível.
          </motion.p>
        </div>

        {/* Main Value Proposition */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <Card className="relative overflow-hidden bg-card/50 backdrop-blur-sm border-primary/20 p-8 md:p-12">
            <div className="relative grid md:grid-cols-2 gap-8 items-center">
              {/* Text Content */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-lg flex-shrink-0">
                    <Cpu className="w-8 h-8 text-primary" />
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-2xl md:text-3xl">
                      A Conexão entre{' '}
                      <span className="text-primary">
                        Oferta e Demanda
                      </span>
                    </h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      A Venturi Solutions adota uma abordagem mais inteligente e integrada: não vendemos serviços avulsos, entregamos{' '}
                      <span className="text-foreground font-medium">Valor como Serviço</span>, focando na{' '}
                      <span className="text-primary font-semibold">
                        conexão entre a sua oferta e a real necessidade do cliente
                      </span>. Nossa metodologia proprietária funciona como um{' '}
                      <span className="text-foreground">sistema operacional de crescimento</span>.
                    </p>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Nosso diferencial é uma abordagem estratégica baseada em um{' '}
                      <span className="text-foreground">diagnóstico completo e aprofundado da empresa</span>, que avalia entregáveis e o Perfil de Cliente Ideal (ICP). Não é apenas fazer o diagnóstico, mas sim a{' '}
                      <span className="text-foreground font-medium">interpretação desse diagnóstico olhando para o resultado</span>.{' '}
                      <span className="text-foreground font-medium">
                        Conectamos sua oferta ao mercado que realmente valoriza o que você entrega.
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Visual Illustration */}
              <div className="relative">
                <div className="relative rounded-xl overflow-hidden border border-primary/20 shadow-2xl">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1693916428216-9550e8fa49c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXR5JTIwYnVpbGRpbmdzJTIwcGVyc3BlY3RpdmV8ZW58MXx8fHwxNzYyMjEyOTk3fDA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Conexão entre Oferta e Demanda"
                    className="w-full h-full object-cover aspect-[4/3]"
                  />
                  {/* Overlay gradient - mais sutil */}
                  <div className="absolute inset-0 bg-gradient-to-br from-background/40 via-transparent to-background/40" />
                  
                  {/* Overlay labels - posicionamento similar ao exemplo */}
                  <div className="absolute inset-0 flex items-center justify-between px-6 md:px-12">
                    {/* Label Esquerda - SUA Oferta */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                      className="bg-primary backdrop-blur-sm border border-primary/40 rounded-lg px-5 py-3 shadow-xl"
                    >
                      <div className="text-xs uppercase tracking-widest text-white/70">SUA</div>
                      <div className="text-xl font-bold text-white">Oferta</div>
                    </motion.div>
                    
                    {/* Linha conectora com ponto central */}
                    <div className="flex items-center gap-1 flex-1 px-4">
                      <div className="h-[2px] flex-1 bg-gradient-to-r from-primary via-primary/80 to-transparent" />
                      <motion.div
                        animate={{ 
                          scale: [1, 1.3, 1],
                          opacity: [0.8, 1, 0.8]
                        }}
                        transition={{ 
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                        className="w-3 h-3 bg-primary rounded-full shadow-lg shadow-primary/50"
                      />
                      <div className="h-[2px] flex-1 bg-gradient-to-l from-primary via-primary/80 to-transparent" />
                    </div>
                    
                    {/* Label Direita - REAL Demanda */}
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                      className="bg-primary backdrop-blur-sm border border-primary/40 rounded-lg px-5 py-3 shadow-xl"
                    >
                      <div className="text-xs uppercase tracking-widest text-white/70">REAL</div>
                      <div className="text-xl font-bold text-white">Demanda</div>
                    </motion.div>
                  </div>
                </div>
                
                {/* Decorative glow elements */}
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
                <div className="absolute -top-4 -left-4 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Continuous Improvement Cycle */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl md:text-4xl mb-4">
              Aplicamos um{' '}
              <span className="text-primary">
                Ciclo de Melhoria Contínua
              </span>
            </h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Um processo estruturado que garante evolução constante e resultados crescentes
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cycleSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="group relative overflow-hidden bg-card/50 backdrop-blur-sm border-primary/10 hover:border-primary/20 transition-colors p-6 h-full">
                  <div className="relative space-y-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-primary rounded-lg text-white text-xl font-bold">
                      {step.number}
                    </div>
                    <h4 className="text-xl">{step.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Results Statement */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Card className="relative overflow-hidden bg-card/50 backdrop-blur-sm border-primary/20 p-8 md:p-12 max-w-4xl mx-auto">
            <div className="relative space-y-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-full mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl">O Resultado?</h3>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                Sua comunicação deixa de ser um centro de custo e passa a ser um{' '}
                <span className="text-foreground font-medium">motor de receita consistente e previsível</span>, extraindo o máximo do potencial de cada meio de comunicação e encurtando o caminho até o resultado positivo.
              </p>
              <div className="pt-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={openDialog}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-primary hover:bg-primary/90 text-white rounded-lg shadow-lg transition-colors"
                >
                  Falar com um Especialista
                  <CheckCircle2 className="w-5 h-5" />
                </motion.button>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
