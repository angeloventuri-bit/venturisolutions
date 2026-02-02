import { motion } from 'motion/react';
import { Globe, FileText, Users, Zap, CheckCircle } from 'lucide-react';
import { Icon3DGlobe } from '../icons/Icon3DGlobe';
import { GridPattern } from '../visuals/GridPattern';

const packages = [
  {
    name: 'Site Essencial',
    price: 'Sob Consulta',
    pages: 'Até 5 páginas',
    ideal: 'Empresas que precisam de presença digital básica',
    features: [
      'Até 5 páginas estruturadas',
      'Design profissional e responsivo',
      'Formulário de contato integrado',
      'SEO on-page básico',
      'Integração com Google Analytics',
      '1 rodada de revisões'
    ]
  },
  {
    name: 'Site Completo',
    price: 'Sob Consulta',
    pages: 'Até 10 páginas + Blog',
    ideal: 'Empresas buscando presença robusta',
    recommended: true,
    features: [
      'Até 10 páginas + estrutura de blog',
      'CMS para gerenciar conteúdo facilmente',
      'Design premium e UX otimizada',
      'SEO on-page completo',
      'Integração com Google Analytics + Tag Manager',
      'Formulários avançados e CTAs estratégicos',
      'Área de depoimentos e cases',
      '2 rodadas de revisões'
    ]
  },
  {
    name: 'Site Corporativo',
    price: 'Sob Consulta',
    pages: 'Páginas ilimitadas',
    ideal: 'Grandes empresas e corporações',
    features: [
      'Estrutura completa e escalável',
      'Design corporativo premium',
      'Múltiplas áreas e subpáginas',
      'Painel administrativo completo',
      'Integrações customizadas (CRM, ERP, etc)',
      'Área de clientes/parceiros',
      'SEO técnico avançado',
      'Suporte pós-lançamento estendido',
      '3 rodadas de revisões'
    ]
  },
];

const included = [
  { icon: Globe, text: 'Hospedagem premium inclusa' },
  { icon: Zap, text: 'Otimização de velocidade' },
  { icon: Users, text: 'Treinamento da equipe no CMS' },
  { icon: FileText, text: 'Documentação completa' },
];

export function ProductDetailInstitutionalSitesSlide() {
  return (
    <div className="relative min-h-screen bg-background overflow-hidden py-20 px-6">
      <GridPattern />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="flex items-center gap-6 mb-6">
            <div className="w-20 h-20">
              <Icon3DGlobe />
            </div>
            <div>
              <div className="inline-block glass-premium px-4 py-2 rounded-full mb-3">
                <p className="text-xs text-primary uppercase tracking-wider">Produto Especial</p>
              </div>
              <h1 className="text-4xl md:text-5xl text-white">Sites Institucionais</h1>
              <p className="text-xl text-gray-400 mt-2">Presença digital profissional para sua empresa</p>
            </div>
          </div>
        </motion.div>

        {/* Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass-premium p-6 rounded-xl mb-12 text-center"
        >
          <p className="text-gray-300">
            Sites institucionais são projetos personalizados. O investimento varia conforme complexidade, número de páginas e integrações necessárias.
          </p>
        </motion.div>

        {/* Packages */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="relative"
            >
              {pkg.recommended && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <div className="glass-premium px-4 py-1 rounded-full border-2 border-primary">
                    <p className="text-xs text-primary uppercase tracking-wider">Mais Popular</p>
                  </div>
                </div>
              )}
              <div className={`relative ${pkg.recommended ? 'mt-4' : ''}`}>
                {pkg.recommended && (
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-red-600 rounded-2xl blur opacity-30" />
                )}
                <div className={`relative glass-premium p-8 rounded-2xl h-full ${pkg.recommended ? 'border-2 border-primary/30' : ''}`}>
                  <h3 className="text-2xl text-white mb-2">{pkg.name}</h3>
                  <p className="text-3xl text-transparent bg-clip-text bg-gradient-to-r from-primary to-red-600 mb-4">
                    {pkg.price}
                  </p>
                  
                  <div className="mb-6 pb-6 border-b border-gray-800">
                    <p className="text-sm text-gray-400 mb-2">{pkg.pages}</p>
                    <p className="text-xs text-gray-500">{pkg.ideal}</p>
                  </div>

                  <ul className="space-y-3">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-primary mt-1 shrink-0">✓</span>
                        <span className="text-sm text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Included */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="glass-premium p-8 rounded-2xl"
        >
          <h3 className="text-2xl text-white mb-6">Incluído em todos os pacotes</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {included.map((item, index) => (
              <div key={index} className="flex flex-col items-center text-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-red-700 to-red-800 rounded-xl flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <p className="text-gray-300">{item.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 pt-6 border-t border-gray-800 text-center">
            <p className="text-sm text-gray-400">
              <span className="text-primary">Bônus:</span> Hospedagem gratuita (R$ 150/mês) em contratos recorrentes de marketing
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
