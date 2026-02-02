import { motion } from 'motion/react';
import { Sparkles, Users, Target, Zap, Award, TrendingUp } from 'lucide-react';
import { Card } from '../ui/card';
import { ImageWithFallback } from '../figma/ImageWithFallback';

const values = [
  {
    icon: Target,
    title: 'Foco em Performance',
    description: 'Comprometimento com a entrega de resultados mensuráveis e crescimento sustentável para nossos clientes',
    descriptionMobile: 'Resultados mensuráveis e crescimento sustentável'
  },
  {
    icon: Zap,
    title: 'Agilidade Estratégica',
    description: 'Implementação eficiente e ágil mantendo rigor analítico e qualidade de execução',
    descriptionMobile: 'Execução ágil com rigor analítico'
  },
  {
    icon: Award,
    title: 'Excelência Operacional',
    description: 'Integração entre tecnologia de ponta, metodologias consolidadas e expertise multidisciplinar',
    descriptionMobile: 'Tecnologia, metodologia e expertise'
  },
  {
    icon: TrendingUp,
    title: 'Evolução Contínua',
    description: 'Abordagem iterativa e orientada a dados que se adapta às necessidades do mercado',
    descriptionMobile: 'Adaptação constante ao mercado'
  }
];



export function AboutSection() {
  return (
    <section id="about" className="relative py-20 md:py-32 px-6 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(139, 21, 56, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139, 21, 56, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-12 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 bg-primary/10 border border-primary/20 rounded-full mb-4 md:mb-6"
          >
            <Users className="w-3 h-3 md:w-4 md:h-4 text-primary" />
            <span className="text-xs md:text-sm text-muted-foreground">Quem Somos</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-6xl mb-4 md:mb-6 max-w-4xl mx-auto px-4"
          >
            Transformamos{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-red-600">
              Estratégia
            </span>{' '}
            em Resultados
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm md:text-xl text-muted-foreground max-w-3xl mx-auto px-4"
          >
            <span className="hidden md:inline">Somos uma empresa de comunicação orientada a resultados que conecta sua oferta de valor ao mercado através de estratégias integradas de tecnologia, análise de dados e execução comercial.</span>
            <span className="md:hidden">Conectamos sua oferta ao mercado com tecnologia, dados e estratégia integrada.</span>
          </motion.p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center mb-12 md:mb-20">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden border border-primary/20 shadow-2xl shadow-primary/10">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-red-600/20 z-10" />
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-red-600 blur-xl opacity-20" />
              
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758518729685-f88df7890776?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB0ZWFtJTIwY29sbGFib3JhdGlvbnxlbnwxfHx8fDE3NjE4MDU3NDB8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Equipe Venturi Solutions"
                className="relative w-full h-[300px] md:h-[500px] object-cover"
              />
              
              {/* Overlay Badge */}
              <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 right-4 md:right-6 z-20">
                <Card className="bg-black/80 backdrop-blur-xl border-primary/30 p-3 md:p-6">
                  <div className="flex items-center gap-3 md:gap-4">
                    <div className="w-8 h-8 md:w-12 md:h-12 bg-primary/20 border border-primary/30 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Sparkles className="w-4 h-4 md:w-6 md:h-6 text-primary" />
                    </div>
                    <div>
                      <div className="text-lg md:text-2xl text-white mb-0.5 md:mb-1">19 Anos</div>
                      <div className="text-xs md:text-sm text-muted-foreground">Transformando Negócios desde 2007</div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4 md:space-y-6"
          >
            <h3 className="text-xl md:text-3xl">
              Uma abordagem{' '}
              <span className="text-primary">fundamentada em resultados</span>
            </h3>
            
            <p className="text-sm md:text-lg text-muted-foreground leading-relaxed">
              <span className="hidden md:inline">
                Com 19 anos de experiência no mercado, desenvolvemos uma metodologia proprietária que integra 
                <span className="text-white font-semibold"> tecnologia, inteligência de dados, estratégia comercial e execução </span> 
                para gerar crescimento sustentável e mensurável para nossos clientes.
              </span>
              <span className="md:hidden">
                19 anos de experiência em metodologia que integra 
                <span className="text-white font-semibold"> tecnologia, dados e estratégia</span> para crescimento mensurável.
              </span>
            </p>

            <p className="text-sm md:text-lg text-muted-foreground leading-relaxed">
              <span className="hidden md:inline">
                Nossa abordagem <span className="text-primary font-semibold">Value as a Service (VaaS)</span> vai além 
                da prestação de serviços: oferecemos uma <span className="text-white font-semibold">parceria estratégica</span> que 
                conecta sua oferta de valor ao público correto, otimizando cada etapa do funil comercial com precisão analítica.
              </span>
              <span className="md:hidden">
                <span className="text-primary font-semibold">VaaS</span>: 
                <span className="text-white font-semibold"> parceria estratégica</span> que otimiza seu funil comercial com precisão.
              </span>
            </p>

            <div className="pt-2 md:pt-4">
              <div className="flex flex-wrap gap-2 md:gap-3">
                {['Estratégia Integrada', 'Tecnologia Aplicada', 'Execução Orientada a Dados', 'Performance Mensurável'].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 md:px-4 py-1.5 md:py-2 bg-primary/10 border border-primary/20 rounded-full text-xs md:text-sm text-primary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Values Grid */}
        <div className="mb-12 md:mb-20">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl text-center mb-8 md:mb-12 px-4"
          >
            Nossos Pilares de Atuação
          </motion.h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="relative group h-full bg-card/50 backdrop-blur-sm border-primary/10 hover:border-primary/30 p-4 md:p-6 transition-all hover:shadow-lg hover:shadow-primary/10">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-lg" />
                  
                  <div className="relative">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 border border-primary/20 rounded-lg flex items-center justify-center mb-3 md:mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all">
                      <value.icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                    </div>
                    
                    <h4 className="text-base md:text-xl mb-2 text-white">{value.title}</h4>
                    <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                      <span className="hidden md:inline">{value.description}</span>
                      <span className="md:hidden">{value.descriptionMobile}</span>
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
