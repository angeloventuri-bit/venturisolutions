import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, CheckCircle, XCircle, ArrowRight, Compass, Megaphone, Globe, Search, Bot, GraduationCap } from 'lucide-react';
import { GridPattern } from '../visuals/GridPattern';
import { Button } from '../ui/button';

interface Question {
  id: string;
  text: string;
  category: string;
  yesRecommends: string[];
  noRecommends: string[];
}

const questions: Question[] = [
  {
    id: 'q1',
    text: 'Você tem clareza de quem é seu cliente ideal (ICP) e uma estratégia de marketing unificada?',
    category: 'Estratégia',
    yesRecommends: [],
    noRecommends: ['restructure']
  },
  {
    id: 'q2',
    text: 'Seu site converte visitantes em leads qualificados de forma eficaz?',
    category: 'Presença Digital',
    yesRecommends: [],
    noRecommends: ['sites', 'seo']
  },
  {
    id: 'q3',
    text: 'Quando potenciais clientes buscam suas soluções no Google, sua empresa aparece facilmente?',
    category: 'Visibilidade',
    yesRecommends: [],
    noRecommends: ['seo']
  },
  {
    id: 'q4',
    text: 'Seus investimentos em Google Ads e redes sociais estão gerando leads qualificados com CAC aceitável?',
    category: 'Performance',
    yesRecommends: [],
    noRecommends: ['ads', 'restructure']
  },
  {
    id: 'q5',
    text: 'Sua equipe de vendas está batendo metas regularmente e alinhada com o marketing?',
    category: 'Time Comercial',
    yesRecommends: [],
    noRecommends: ['training']
  },
  {
    id: 'q6',
    text: 'Você consegue responder todos os leads 24/7 com qualidade e rapidez?',
    category: 'Atendimento',
    yesRecommends: [],
    noRecommends: ['ai']
  },
];

const productMap: Record<string, { name: string; icon: any; price: string; why: string; color: string; slideNumber: number }> = {
  restructure: {
    name: 'Reestruturação Estratégica',
    icon: Compass,
    price: 'R$ 4.500 - R$ 8.500',
    why: 'Você precisa de uma base estratégica sólida antes de investir em ações táticas',
    color: 'from-red-500 to-red-600',
    slideNumber: 4
  },
  ads: {
    name: 'Ads & Performance',
    icon: Megaphone,
    price: 'R$ 2.500 - R$ 5.500/mês',
    why: 'Seu investimento em mídia paga precisa de otimização para gerar ROI positivo',
    color: 'from-red-600 to-red-700',
    slideNumber: 5
  },
  sites: {
    name: 'Landing Pages',
    icon: Globe,
    price: 'R$ 2.500 - R$ 4.500',
    why: 'Você precisa de páginas de alta conversão para suas campanhas',
    color: 'from-red-700 to-red-800',
    slideNumber: 6
  },
  seo: {
    name: 'SEO/GEO 360',
    icon: Search,
    price: 'R$ 3.500/mês',
    why: 'Você está perdendo oportunidades de tráfego orgânico qualificado e visibilidade em IAs',
    color: 'from-red-800 to-red-900',
    slideNumber: 7
  },
  training: {
    name: 'Treinamento Comercial',
    icon: GraduationCap,
    price: 'Sob consulta',
    why: 'Sua equipe precisa de capacitação para converter mais leads em vendas',
    color: 'from-red-600 to-red-700',
    slideNumber: 8
  },
  ai: {
    name: 'Agentes Inteligentes IA',
    icon: Bot,
    price: 'R$ 3.500',
    why: 'Você precisa de automação para atender e qualificar leads 24/7',
    color: 'from-red-500 to-red-600',
    slideNumber: 9
  },
};

export function InteractiveQuestionnaireSlide() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, boolean>>({});
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (answer: boolean) => {
    const question = questions[currentQuestion];
    setAnswers({ ...answers, [question.id]: answer });

    if (currentQuestion < questions.length - 1) {
      setTimeout(() => setCurrentQuestion(currentQuestion + 1), 300);
    } else {
      setTimeout(() => setShowResults(true), 300);
    }
  };

  const getRecommendations = () => {
    const recommended = new Set<string>();
    
    questions.forEach((q) => {
      const answer = answers[q.id];
      if (answer === false) {
        q.noRecommends.forEach(r => recommended.add(r));
      } else if (answer === true) {
        q.yesRecommends.forEach(r => recommended.add(r));
      }
    });

    return Array.from(recommended);
  };

  const resetQuestionnaire = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResults(false);
  };

  if (showResults) {
    const recommendations = getRecommendations();

    return (
      <div className="relative min-h-screen bg-background overflow-hidden py-12 sm:py-20 px-4 sm:px-6">
        <GridPattern />
        
        <div className="relative z-10 max-w-5xl mx-auto overflow-x-hidden w-full">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-3 glass-premium px-6 py-3 rounded-full mb-6">
              <CheckCircle className="w-5 h-5 text-primary" />
              <p className="text-sm text-primary uppercase tracking-wider">Diagnóstico Completo</p>
            </div>
            <h1 className="text-4xl md:text-5xl text-white mb-4">
              Sua Recomendação Personalizada
            </h1>
            <p className="text-xl text-gray-400">
              Baseado nas suas respostas, recomendamos:
            </p>
          </motion.div>

          {/* Recommendations */}
          {recommendations.length > 0 ? (
            <div className="space-y-6 mb-12">
              {recommendations.map((productId, index) => {
                const product = productMap[productId];
                const Icon = product.icon;
                
                return (
                  <motion.div
                    key={productId}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                    className="relative"
                  >
                    <div className={`absolute -inset-0.5 bg-gradient-to-r ${product.color} rounded-2xl blur opacity-20`} />
                    <div className="relative glass-premium p-8 rounded-2xl">
                      <div className="flex gap-6">
                        <div className={`w-16 h-16 bg-gradient-to-br ${product.color} rounded-xl flex items-center justify-center shrink-0`}>
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl text-white mb-2">{product.name}</h3>
                          <p className="text-primary mb-4">{product.price}</p>
                          <p className="text-gray-300 mb-4">{product.why}</p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2 text-sm text-gray-500">
                              <ArrowRight className="w-4 h-4" />
                              <span>Produto recomendado</span>
                            </div>
                            <div className="glass px-3 py-1 rounded-full">
                              <span className="text-xs text-primary">Ver detalhes no slide {product.slideNumber}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="glass-premium p-12 rounded-2xl text-center mb-12"
            >
              <CheckCircle className="w-16 h-16 text-primary mx-auto mb-6" />
              <h3 className="text-2xl text-white mb-4">Excelente!</h3>
              <p className="text-xl text-gray-300">
                Sua operação está bem estruturada. Podemos conversar sobre otimizações pontuais ou expansão estratégica.
              </p>
            </motion.div>
          )}

          {/* Actions */}
          <div className="flex gap-4 justify-center">
            <Button
              variant="outline"
              onClick={resetQuestionnaire}
              className="glass border-primary/30"
            >
              Refazer Diagnóstico
            </Button>
          </div>
          
          <div className="text-center mt-8 glass p-6 rounded-xl">
            <p className="text-gray-400">
              Vamos detalhar cada solução recomendada nos próximos slides
            </p>
          </div>
        </div>
      </div>
    );
  }

  const question = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="relative min-h-screen bg-background overflow-hidden py-20 px-6">
      <GridPattern />
      
      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-3 glass-premium px-6 py-3 rounded-full mb-6">
            <MessageSquare className="w-5 h-5 text-primary" />
            <p className="text-sm text-primary uppercase tracking-wider">Questionário Diagnóstico</p>
          </div>
          <h1 className="text-4xl md:text-5xl text-white mb-4">
            Vamos Identificar Suas Necessidades
          </h1>
          <p className="text-xl text-gray-400">
            Pergunta {currentQuestion + 1} de {questions.length}
          </p>
        </motion.div>

        {/* Progress Bar */}
        <div className="mb-12">
          <div className="glass p-2 rounded-full">
            <motion.div
              className="h-2 bg-gradient-to-r from-primary to-red-600 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>

        {/* Question */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestion}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="glass-premium p-12 rounded-3xl mb-8">
              <div className="mb-4">
                <span className="text-sm text-primary uppercase tracking-wider">{question.category}</span>
              </div>
              <h2 className="text-3xl text-white leading-relaxed">
                {question.text}
              </h2>
            </div>

            {/* Answer Buttons */}
            <div className="grid grid-cols-2 gap-6">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  onClick={() => handleAnswer(true)}
                  className="w-full h-24 glass-premium hover:border-green-500/50 transition-all text-xl"
                  variant="outline"
                >
                  <CheckCircle className="w-8 h-8 mr-3 text-green-500" />
                  Sim
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  onClick={() => handleAnswer(false)}
                  className="w-full h-24 glass-premium hover:border-red-500/50 transition-all text-xl"
                  variant="outline"
                >
                  <XCircle className="w-8 h-8 mr-3 text-red-500" />
                  Não
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
