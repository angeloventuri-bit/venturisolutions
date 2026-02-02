import { motion } from 'motion/react';
import { TrendingUp, MapPin, BarChart, Quote } from 'lucide-react';
import { PremiumGlow } from '../visuals/PremiumGlow';
import { GridPattern } from '../visuals/GridPattern';

const results = [
  {
    icon: TrendingUp,
    metric: '+150%',
    label: 'Leads Qualificados',
    detail: 'em apenas 6 meses',
    extra: '-42% no CAC'
  },
  {
    icon: MapPin,
    metric: '1ª Posição',
    label: 'Google Maps',
    detail: 'principais serviços',
    extra: '+88% em ligações'
  },
  {
    icon: BarChart,
    metric: 'ROI',
    label: 'Consistente',
    detail: 'previsibilidade total',
    extra: 'crescimento mensal'
  },
];

export function SuccessCasesSlide() {
  return (
    <div className="relative min-h-screen bg-background overflow-hidden py-20 px-6">
      <PremiumGlow />
      <GridPattern />
      
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-block glass-premium px-6 py-3 rounded-full mb-6">
            <p className="text-sm text-primary uppercase tracking-wider">Prova Social</p>
          </div>
          <h1 className="text-4xl md:text-5xl text-white mb-6">
            Casos de Sucesso
          </h1>
          <p className="text-xl text-gray-400">
            Resultado não é promessa, é realidade comprovada
          </p>
        </motion.div>

        {/* Results Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {results.map((result, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-red-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition-all" />
              <div className="relative glass-premium p-8 rounded-2xl text-center">
                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-red-600 rounded-xl flex items-center justify-center">
                    <result.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Metric */}
                <div className="mb-4">
                  <p className="text-4xl text-transparent bg-clip-text bg-gradient-to-r from-primary via-red-500 to-red-600 mb-2">
                    {result.metric}
                  </p>
                  <p className="text-xl text-white">{result.label}</p>
                </div>

                {/* Details */}
                <div className="pt-4 border-t border-gray-700">
                  <p className="text-sm text-gray-400 mb-2">{result.detail}</p>
                  <p className="text-sm text-primary">{result.extra}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Detailed Results */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="glass-premium p-8 rounded-2xl mb-12"
        >
          <h3 className="text-2xl text-white mb-6">Indicadores Reais B2B</h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1">✓</span>
              <p className="text-gray-300">
                <span className="text-white">+150% de leads qualificados</span> e <span className="text-white">-42% no CAC</span> em apenas 6 meses, após reestruturarmos as campanhas de Ads e implementarmos landing pages de alta conversão
              </p>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1">✓</span>
              <p className="text-gray-300">
                <span className="text-white">1ª posição no Google Maps</span> para os principais serviços de um cliente, gerando <span className="text-white">+88% em ligações</span> provenientes de busca orgânica local
              </p>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1">✓</span>
              <p className="text-gray-300">
                <span className="text-white">ROI consistente e previsibilidade:</span> todos os clientes assessorados passaram a acompanhar claramente o retorno de cada ação de marketing, permitindo projeções de vendas confiáveis mês a mês
              </p>
            </li>
          </ul>
        </motion.div>

        {/* Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="relative"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-primary via-red-600 to-red-700 rounded-2xl blur-lg opacity-20" />
          <div className="relative glass-premium p-10 rounded-2xl border-2 border-primary/30">
            <Quote className="w-12 h-12 text-primary/30 mb-6" />
            <blockquote className="text-xl text-gray-300 leading-relaxed mb-6">
              "A parceria com a Venturi mudou nossa perspectiva sobre marketing. Eles não são fornecedores; são parte da nossa equipe estratégica. Pela primeira vez temos clareza do ROI de cada ação e um plano de crescimento que realmente funciona."
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-gradient-to-br from-primary to-red-600 rounded-full flex items-center justify-center">
                <span className="text-white text-xl">CA</span>
              </div>
              <div>
                <p className="text-white">Carlos Andrade</p>
                <p className="text-sm text-gray-400">CEO, AlphaTech Solutions</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
