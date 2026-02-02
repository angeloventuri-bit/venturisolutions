import { motion } from 'motion/react';
import { Quote, Star, TrendingUp } from 'lucide-react';
import { Card } from '../ui/card';
import { ImageWithFallback } from '../figma/ImageWithFallback';

const testimonials = [
  {
    name: 'Carlos Mendes',
    role: 'CEO',
    company: 'TechFlow Solutions',
    image: 'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wYW55JTIwY2VvJTIwZXhlY3V0aXZlfGVufDF8fHx8MTc2MTg1NjA2Mnww&ixlib=rb-4.1.0&q=80&w=1080',
    text: 'A Venturi Solutions transformou completamente nossa abordagem comercial. Em 6 meses, aumentamos nosso ROI em 340% e finalmente conseguimos escalar de forma previsível.',
    metric: '+340% ROI',
    featured: true
  },
  {
    name: 'Ana Paula Rodrigues',
    role: 'Diretora de Marketing',
    company: 'Innova Digital',
    image: 'https://images.unsplash.com/photo-1758599543154-76ec1c4257df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMGhlYWRzaG90fGVufDF8fHx8MTc2MTgyMTI5NHww&ixlib=rb-4.1.0&q=80&w=1080',
    text: 'O trabalho de SEO e performance da Venturi nos colocou na primeira página do Google em nichos altamente competitivos. Os resultados superaram todas as expectativas.',
    metric: '1ª Página Google',
    featured: true
  },
  {
    name: 'Roberto Silva',
    role: 'Fundador',
    company: 'GrowthLab',
    image: 'https://images.unsplash.com/photo-1581065178047-8ee15951ede6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MTgxNzkwOXww&ixlib=rb-4.1.0&q=80&w=1080',
    text: 'A metodologia VaaS da Venturi é diferente de tudo que já vimos. Não vendem apenas serviços, entregam um sistema completo de crescimento que realmente funciona.',
    metric: '3x Crescimento',
    featured: false
  },
];

const stats = [
  { value: '98%', label: 'Satisfação dos Clientes' },
  { value: '340%', label: 'ROI Médio' },
  { value: '200+', label: 'Projetos Entregues' },
  { value: '95%', label: 'Taxa de Retenção' }
];

export function TestimonialsSection() {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
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
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6"
          >
            <Star className="w-4 h-4 text-primary fill-primary" />
            <span className="text-sm text-muted-foreground">Depoimentos</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl mb-6 max-w-4xl mx-auto"
          >
            O que nossos{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-red-600">
              Clientes Dizem
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            Resultados reais de empresas que transformaram seu crescimento com a Venturi
          </motion.p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {testimonials.filter(t => t.featured).map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="group relative h-full bg-card/50 backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-all p-8 hover:shadow-2xl hover:shadow-primary/10">
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Quote className="w-20 h-20 text-primary" />
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-lg text-foreground mb-8 leading-relaxed relative z-10">
                  "{testimonial.text}"
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary to-red-600 rounded-full blur opacity-30" />
                    <ImageWithFallback
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="relative w-16 h-16 rounded-full object-cover border-2 border-primary/30"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="text-white mb-1">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role} • {testimonial.company}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl text-primary mb-1">{testimonial.metric}</div>
                    <div className="text-xs text-muted-foreground flex items-center gap-1">
                      <TrendingUp className="w-3 h-3" />
                      Resultado
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Single Column Testimonial */}
        {testimonials.filter(t => !t.featured).map((testimonial, index) => (
          <motion.div
            key={testimonial.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <Card className="group relative bg-gradient-to-br from-primary/5 to-red-600/5 border-primary/20 hover:border-primary/30 transition-all p-8">
              <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Image */}
                <div className="relative flex-shrink-0">
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary to-red-600 rounded-full blur opacity-50" />
                  <ImageWithFallback
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="relative w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-4 border-primary/30"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 text-center md:text-left">
                  <div className="flex gap-1 mb-4 justify-center md:justify-start">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                  
                  <p className="text-lg text-foreground mb-4 leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <div className="text-white mb-1">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.role} • {testimonial.company}
                      </div>
                    </div>
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full">
                      <TrendingUp className="w-4 h-4 text-primary" />
                      <span className="text-primary">{testimonial.metric}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="bg-card/30 backdrop-blur-sm border-primary/10 p-6 text-center hover:border-primary/30 transition-all">
                <div className="text-4xl md:text-5xl text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
