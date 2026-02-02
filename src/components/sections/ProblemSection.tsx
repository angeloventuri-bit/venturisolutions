import { Card } from '../ui/card';
import { Target, Users, TrendingDown, Globe, AlertTriangle, Search } from 'lucide-react';
import { motion } from 'motion/react';
import { CornerBrackets } from '../visuals/CornerBrackets';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import heroImage from 'figma:asset/589aaa1a3b84dd1bd71b509d8414607ca7da3574.png';

const problems = [
  {
    icon: Target,
    title: 'Comunicação sem direcionamento',
    description: 'Seus investimentos em comunicação parecem um tiro no escuro, sem conexão clara com as vendas e sem um norte ou direcionamento estratégico?',
  },
  {
    icon: TrendingDown,
    title: 'Campanhas que só atraem curiosos',
    description: 'Suas campanhas de anúncios online custam caro e só atraem curiosos, porque você não está comunicando com o público ou o nível de consciência certo (topo, meio e fundo de funil)?',
  },
  {
    icon: Users,
    title: 'Vendas reativas, não estratégicas',
    description: 'Sua equipe de vendas atua apenas como "garçom", servindo o que foi pedido, em vez de aplicar metodologia, qualificação e acompanhamento?',
  },
  {
    icon: Globe,
    title: 'Site bonito que não converte',
    description: 'Seu site é bonito, porém não gera nenhum lead ou contato comercial, pois falta um layout funcional, usabilidade e uma jornada clara?',
  },
  {
    icon: Search,
    title: 'Invisibilidade nos buscadores',
    description: 'Sua empresa é praticamente invisível no Google (necessitando de um trabalho de background para buscadores), enquanto os concorrentes dominam as buscas?',
  },
  {
    icon: AlertTriangle,
    title: 'Tempo perdido com tarefas repetitivas',
    description: 'Seu time perde horas com tarefas repetitivas (qualificar leads, responder dúvidas) em vez de focar em fechar negócios?',
  },
];

export function ProblemSection() {
  return (
    <section id="problem" className="relative py-24 px-6 overflow-hidden">
      
      <div className="max-w-7xl mx-auto">
        {/* Hero Image Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-2xl overflow-hidden mb-20 border border-primary/20 shadow-2xl shadow-primary/10"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
          
          <ImageWithFallback
            src={heroImage}
            alt="Desafios de Negócios"
            className="w-full h-[400px] object-cover"
          />
          
          <div className="absolute inset-0 z-20 flex items-center px-12">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-destructive/20 backdrop-blur-sm border border-destructive/30 rounded-full mb-4">
                <AlertTriangle className="w-4 h-4 text-destructive" />
                <span className="text-sm text-white">Cenário Atual</span>
              </div>
              <h2 className="text-4xl md:text-5xl text-white mb-4">
                Investindo Alto, Crescendo Pouco?
              </h2>
              <p className="text-xl text-gray-300">
                Estes são os 6 sinais de que sua empresa precisa de um sistema de crescimento estruturado
              </p>
            </div>
          </div>
        </motion.div>

        <div className="text-center space-y-4 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-destructive/10 border border-destructive/20 rounded-full"
          >
            <AlertTriangle className="w-4 h-4 text-destructive" />
            <span className="text-sm text-muted-foreground">Desafios Comuns</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl max-w-4xl mx-auto"
          >
            Está enfrentando{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-red-600">
              estes desafios
            </span>
            ?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            Veja se alguma destas situações soa familiar para o seu negócio:
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="group relative overflow-hidden bg-card/80 backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-all p-6 h-full">
                  <CornerBrackets />
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors" />
                  <div className="relative space-y-4">
                    <div className="flex items-center justify-center w-14 h-14 bg-primary/10 rounded-lg group-hover:scale-110 transition-transform ring-2 ring-primary/20 group-hover:ring-primary/40">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-xl">{problem.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {problem.description}
                    </p>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center pt-12"
        >
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Se você se identifica com pelo menos um destes desafios, continue lendo. A solução está mais próxima do que imagina.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
