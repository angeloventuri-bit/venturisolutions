import { motion } from 'motion/react';
import { Zap, Gift, GraduationCap, Bot, FileText, Sparkles } from 'lucide-react';
import { PremiumGlow } from '../visuals/PremiumGlow';
import { GridPattern } from '../visuals/GridPattern';
import { useState } from 'react';

const bonusOptions = [
  {
    id: 1,
    icon: FileText,
    title: 'Implementação e Copy da Landing Page',
    description: 'Landing Page de alta conversão pronta para capturar leads',
    value: 'R$ 2.000',
    color: 'from-blue-600 to-blue-700',
  },
  {
    id: 2,
    icon: GraduationCap,
    title: 'Workshop de Treinamento Comercial',
    description: '4 horas de treinamento para sua equipe converter ao máximo os novos leads',
    value: 'R$ 3.500',
    color: 'from-purple-600 to-purple-700',
  },
  {
    id: 3,
    icon: Bot,
    title: '50% de Desconto em Agente de IA',
    description: 'Setup do Agente de Inteligência Artificial para qualificar leads 24/7',
    value: 'R$ 2.750',
    color: 'from-green-600 to-green-700',
  },
];

export function SpecialOfferSlide() {
  const [selectedBonus, setSelectedBonus] = useState<number | null>(null);

  return (
    <div className="relative min-h-screen bg-background overflow-hidden py-12 sm:py-20 px-4 sm:px-6 flex items-center">
      <PremiumGlow />
      <GridPattern />
      
      <div className="relative z-10 max-w-6xl mx-auto overflow-x-hidden w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8 sm:mb-12"
        >
          <div className="inline-flex items-center gap-3 glass-premium px-6 py-3 rounded-full mb-6 border-2 border-primary/50">
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Zap className="w-5 h-5 text-primary" />
            </motion.div>
            <p className="text-sm sm:text-base text-primary uppercase tracking-wider">Fechamento</p>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl text-white mb-6 px-4">
            Condição Especial para Começarmos Agora
          </h1>
        </motion.div>

        {/* Main Script Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="relative mb-10"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-primary via-red-600 to-primary rounded-3xl blur-xl opacity-30" />
          <div className="relative glass-premium p-8 sm:p-10 md:p-12 rounded-3xl border-2 border-primary/30">
            <blockquote className="text-lg sm:text-xl md:text-2xl text-gray-200 leading-relaxed mb-8">
              "<span className="text-primary">[Nome do Cliente]</span>, para celebrarmos o início desta parceria e para que você veja o resultado o mais rápido possível, tenho uma condição especial se tomarmos a decisão hoje."
              <br /><br />
              "Ao fecharmos o <span className="text-white">[pacote/combo escolhido]</span>, vou incluir como bônus:"
            </blockquote>

            {/* Bonus Options */}
            <div className="space-y-4 mb-8">
              <p className="text-base sm:text-lg text-gray-400 mb-6">
                <span className="text-primary">Escolha UMA opção poderosa:</span>
              </p>

              {bonusOptions.map((bonus, index) => {
                const Icon = bonus.icon;
                const isSelected = selectedBonus === bonus.id;
                
                return (
                  <motion.div
                    key={bonus.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    onClick={() => setSelectedBonus(bonus.id)}
                    className={`relative group cursor-pointer transition-all ${
                      isSelected ? 'scale-105' : 'hover:scale-102'
                    }`}
                  >
                    <div className={`absolute -inset-0.5 bg-gradient-to-r ${bonus.color} rounded-2xl blur transition-all ${
                      isSelected ? 'opacity-60' : 'opacity-20 group-hover:opacity-40'
                    }`} />
                    <div className={`relative glass-premium p-6 rounded-2xl border-2 transition-all ${
                      isSelected ? 'border-primary/70' : 'border-transparent group-hover:border-primary/30'
                    }`}>
                      <div className="flex items-start gap-4">
                        {/* Option Number & Icon */}
                        <div className="flex-shrink-0">
                          <div className={`w-16 h-16 bg-gradient-to-br ${bonus.color} rounded-xl flex items-center justify-center mb-2 ${
                            isSelected ? 'ring-4 ring-primary/50' : ''
                          }`}>
                            <Icon className="w-8 h-8 text-white" />
                          </div>
                          <div className={`text-center px-3 py-1 rounded-full text-xs ${
                            isSelected 
                              ? 'bg-primary text-white' 
                              : 'bg-gray-700 text-gray-400'
                          }`}>
                            Opção {index + 1}
                          </div>
                        </div>

                        {/* Content */}
                        <div className="flex-1">
                          <div className="flex items-start justify-between gap-4 mb-2">
                            <h3 className="text-xl text-white">{bonus.title}</h3>
                            <span className="text-primary text-lg whitespace-nowrap">
                              {index === 2 ? 'Desconto ' : 'Bônus '}
                              {bonus.value}
                            </span>
                          </div>
                          <p className="text-sm text-gray-400">{bonus.description}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Urgency Note */}
            <div className="glass p-6 rounded-xl border-l-4 border-primary">
              <p className="text-base sm:text-lg text-gray-300 italic">
                "Essa condição é válida <span className="text-primary">apenas para hoje</span>, para que possamos dar o start no seu projeto ainda esta semana."
              </p>
            </div>
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-center"
        >
          <div className="relative inline-block mb-6">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-red-600 rounded-2xl blur-xl opacity-50" />
            <div className="relative bg-gradient-to-r from-primary to-red-600 px-12 py-6 rounded-2xl">
              <p className="text-3xl sm:text-4xl md:text-5xl text-white">
                Vamos juntos construir esse crescimento?
              </p>
            </div>
          </div>

          {selectedBonus && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="glass-premium p-4 rounded-lg max-w-md mx-auto"
            >
              <p className="text-sm text-gray-400">
                <span className="text-primary">Bônus selecionado:</span>{' '}
                {bonusOptions.find(b => b.id === selectedBonus)?.title}
              </p>
            </motion.div>
          )}
        </motion.div>

        {/* Presenter Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-8 text-center"
        >
          <p className="text-sm text-gray-500 italic">
            <span className="text-primary">Nota para o apresentador:</span> Escolha a opção de bônus que faz mais sentido para o perfil e necessidade do cliente
          </p>
        </motion.div>
      </div>
    </div>
  );
}
