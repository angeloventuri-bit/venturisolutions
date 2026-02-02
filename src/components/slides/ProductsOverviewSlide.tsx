import { motion } from 'motion/react';
import { Compass, Megaphone, Globe, Search, Bot, GraduationCap } from 'lucide-react';
import { GridPattern } from '../visuals/GridPattern';

const products = [
  {
    icon: Compass,
    name: 'Reestruturação Estratégica',
    tagline: 'Produto aprofundado de 8-12 semanas: diagnóstico, ICP, jornada e plano estratégico',
    color: 'from-red-500 to-red-600',
  },
  {
    icon: Megaphone,
    name: 'Ads & Performance',
    tagline: 'Tráfego pago, escala e venda com metodologia de criativos lucrativos',
    color: 'from-red-600 to-red-700',
  },
  {
    icon: Search,
    name: 'SEO & DIO',
    tagline: 'Crescimento orgânico e recomendação por IA para dominar a busca',
    color: 'from-red-700 to-red-800',
  },
  {
    icon: Globe,
    name: 'Sites & Landing Pages',
    tagline: 'Copywriter de alta conversão, design performático e integração de dados',
    color: 'from-red-800 to-red-900',
  },
  {
    icon: GraduationCap,
    name: 'Treinamento e Educação Continuada',
    tagline: 'Formação de equipes e expertise em lançamentos de infoprodutos',
    color: 'from-red-600 to-red-700',
  },
  {
    icon: Bot,
    name: 'Agentes de IA',
    tagline: 'Comercial, account manager, secretária - automatização inteligente',
    color: 'from-red-500 to-red-600',
  },
];

export function ProductsOverviewSlide() {
  return (
    <div className="relative min-h-screen bg-background overflow-hidden py-20 px-6">
      <GridPattern />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-block glass-premium px-6 py-3 rounded-full mb-6">
            <p className="text-sm text-primary uppercase tracking-wider">Portfólio</p>
          </div>
          <h1 className="text-4xl md:text-5xl text-white mb-4">
            Soluções Estratégicas e Serviços
          </h1>
          <p className="text-xl text-gray-400">
            Todos direcionados pela metodologia e valores do diagnóstico inicial
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              className="relative group"
            >
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${product.color} rounded-2xl blur opacity-0 group-hover:opacity-30 transition-all`} />
              <div className="relative glass-premium p-6 rounded-2xl h-full hover:border-primary/30 transition-all">
                {/* Icon */}
                <div className="mb-4">
                  <div className={`w-14 h-14 bg-gradient-to-br ${product.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <product.icon className="w-7 h-7 text-white" />
                  </div>
                </div>

                {/* Name & Tagline */}
                <h3 className="text-xl text-white mb-3">{product.name}</h3>
                <p className="text-sm text-gray-400">{product.tagline}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-12 glass p-6 rounded-xl"
        >
          <p className="text-gray-400">
            <span className="text-white">Todas as soluções trabalham de forma integrada</span> — você pode contratar individualmente ou em pacotes combinados com vantagens
          </p>
        </motion.div>
      </div>
    </div>
  );
}
