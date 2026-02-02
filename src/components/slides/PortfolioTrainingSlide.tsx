import { motion } from 'motion/react';
import { GraduationCap, Users, Award, TrendingUp } from 'lucide-react';
import { Card } from '../ui/card';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function PortfolioTrainingSlide() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-gray-900 to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,21,56,0.15),transparent_50%)]" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-primary/10 border border-primary/30 rounded-full mb-6">
            <GraduationCap className="w-5 h-5 text-primary" />
            <span className="text-sm uppercase tracking-wider text-primary">Portfólio</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl mb-4">
            <span className="bg-gradient-to-r from-primary via-red-400 to-primary bg-clip-text text-transparent">
              Treinamento Comercial
            </span>
          </h1>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Formação de equipes com expertise em lançamentos, infoprodutos e metodologias de alta performance
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
            <Users className="w-6 h-6 text-primary mb-2" />
            <div className="text-2xl text-white">1.200+</div>
            <div className="text-xs text-gray-400">Profissionais Treinados</div>
          </Card>
          <Card className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 border-primary/30 p-4">
            <Award className="w-6 h-6 text-primary mb-2" />
            <div className="text-2xl text-white">95%</div>
            <div className="text-xs text-gray-400">NPS Médio</div>
          </Card>
          <Card className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 border-primary/30 p-4">
            <TrendingUp className="w-6 h-6 text-primary mb-2" />
            <div className="text-2xl text-white">+184%</div>
            <div className="text-xs text-gray-400">Performance Pós-Training</div>
          </Card>
          <Card className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 border-primary/30 p-4">
            <GraduationCap className="w-6 h-6 text-primary mb-2" />
            <div className="text-2xl text-white">45+</div>
            <div className="text-xs text-gray-400">Empresas Atendidas</div>
          </Card>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Visual + Description */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Card className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 border-primary/20 p-6 h-full">
              <div className="text-sm text-primary uppercase tracking-wider mb-4">Metodologia de Treinamento</div>
              
              <div className="relative rounded-lg overflow-hidden mb-4 aspect-video">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1758691736067-b309ee3ef7b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRyYWluaW5nJTIwcHJlc2VudGF0aW9ufGVufDF8fHx8MTc2MTc5NTE5MHww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Business Training"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
              </div>

              <h3 className="text-xl text-white mb-4">Formação Prática e Aplicável</h3>

              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 border border-primary/40">
                    <span className="text-primary text-xs">1</span>
                  </div>
                  <div>
                    <div className="text-white mb-1">Módulos Teóricos</div>
                    <div className="text-gray-400">Fundamentos de vendas, psicologia do consumidor e técnicas de persuasão</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 border border-primary/40">
                    <span className="text-primary text-xs">2</span>
                  </div>
                  <div>
                    <div className="text-white mb-1">Role-Playing</div>
                    <div className="text-gray-400">Simulações reais de objeções, negociação e fechamento</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 border border-primary/40">
                    <span className="text-primary text-xs">3</span>
                  </div>
                  <div>
                    <div className="text-white mb-1">Cases Reais</div>
                    <div className="text-gray-400">Análise de lançamentos de sucesso e fracassos para aprendizado</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 border border-primary/40">
                    <span className="text-primary text-xs">4</span>
                  </div>
                  <div>
                    <div className="text-white mb-1">Acompanhamento</div>
                    <div className="text-gray-400">Mentoria pós-treinamento com análise de performance</div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Training Programs */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            {/* Program 1 */}
            <Card className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 border-primary/20 p-6 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute -right-10 -top-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
              
              <div className="relative z-10">
                <div className="text-sm text-primary uppercase tracking-wider mb-3">Programa Intensivo</div>
                <h3 className="text-xl text-white mb-3">Vendas para Lançamentos</h3>
                
                <p className="text-gray-300 text-sm mb-4">
                  Capacitação completa em estratégias de lançamento: pré-lançamento, aquecimento, lançamento e pós-lançamento com metodologia testada em +120 lançamentos.
                </p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    <span className="text-gray-300">Funil de lançamento PLF e Perpétuo</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    <span className="text-gray-300">Copywriting para vendas de alto ticket</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    <span className="text-gray-300">Automação de marketing e CRM</span>
                  </div>
                </div>

                <div className="flex gap-4 pt-3 border-t border-white/10">
                  <div>
                    <div className="text-lg text-primary">6 semanas</div>
                    <div className="text-xs text-gray-400">Duração</div>
                  </div>
                  <div>
                    <div className="text-lg text-primary">24 horas</div>
                    <div className="text-xs text-gray-400">Carga Horária</div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Program 2 */}
            <Card className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 border-primary/20 p-6 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute -left-10 -bottom-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
              
              <div className="relative z-10">
                <div className="text-sm text-primary uppercase tracking-wider mb-3">Programa Corporativo</div>
                <h3 className="text-xl text-white mb-3">High Performance Sales Team</h3>
                
                <p className="text-gray-300 text-sm mb-4">
                  Formação de equipes comerciais B2B e B2C com foco em processos, KPIs e cultura de alta performance. Metodologia aplicada em times de 5 a 50 vendedores.
                </p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    <span className="text-gray-300">Gestão de pipeline e forecast</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    <span className="text-gray-300">SPIN Selling e vendas consultivas</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    <span className="text-gray-300">Account-Based Marketing (ABM)</span>
                  </div>
                </div>

                <div className="flex gap-4 pt-3 border-t border-white/10">
                  <div>
                    <div className="text-lg text-primary">8 semanas</div>
                    <div className="text-xs text-gray-400">Duração</div>
                  </div>
                  <div>
                    <div className="text-lg text-primary">40 horas</div>
                    <div className="text-xs text-gray-400">Carga Horária</div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Results */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-8"
        >
          <Card className="bg-gradient-to-br from-primary/10 via-gray-900/50 to-primary/5 border-primary/30 p-6">
            <h3 className="text-xl text-white mb-4 text-center">Resultados Médios Pós-Treinamento</h3>
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl text-primary mb-2">+184%</div>
                <div className="text-sm text-gray-300">Performance Individual</div>
              </div>
              <div>
                <div className="text-3xl text-primary mb-2">-42%</div>
                <div className="text-sm text-gray-300">Ciclo de Vendas</div>
              </div>
              <div>
                <div className="text-3xl text-primary mb-2">+67%</div>
                <div className="text-sm text-gray-300">Taxa de Conversão</div>
              </div>
              <div>
                <div className="text-3xl text-primary mb-2">+320%</div>
                <div className="text-sm text-gray-300">Ticket Médio</div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
