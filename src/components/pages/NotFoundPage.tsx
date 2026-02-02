import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { Home, ArrowLeft, Search } from 'lucide-react';
import { Button } from '../ui/button';
import { Navigation } from '../sections/Navigation';
import { Footer } from '../sections/Footer';

export function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />

      <div className="flex-1 flex items-center justify-center px-6 py-20">
        <div className="max-w-2xl w-full text-center">
          {/* 404 Number */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative mb-8"
          >
            <div className="text-[180px] md:text-[240px] font-bold leading-none bg-gradient-to-br from-primary via-primary/80 to-primary/40 bg-clip-text text-transparent">
              404
            </div>
            <div className="absolute inset-0 blur-3xl opacity-20 bg-gradient-to-br from-primary to-primary/40" />
          </motion.div>

          {/* Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-4 mb-8"
          >
            <h1 className="text-4xl md:text-5xl">
              Página Não Encontrada
            </h1>
            <p className="text-lg text-muted-foreground">
              Ops! A página que você está procurando não existe ou foi movida.
            </p>
          </motion.div>

          {/* Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              onClick={() => navigate('/')}
              size="lg"
              className="gap-2"
            >
              <Home className="w-5 h-5" />
              Ir para Home
            </Button>

            <Button
              onClick={() => navigate(-1)}
              size="lg"
              variant="outline"
              className="gap-2"
            >
              <ArrowLeft className="w-5 h-5" />
              Voltar
            </Button>

            <Button
              onClick={() => navigate('/blog')}
              size="lg"
              variant="outline"
              className="gap-2"
            >
              <Search className="w-5 h-5" />
              Ver Blog
            </Button>
          </motion.div>

          {/* Suggestions */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-12 p-6 bg-primary/5 border border-primary/10 rounded-xl"
          >
            <h2 className="text-xl mb-4">Explore Nossas Soluções</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 text-sm">
              <button
                onClick={() => navigate('/solucoes/sites-e-ecommerce')}
                className="p-3 bg-background/50 hover:bg-background border border-white/5 rounded-lg transition-colors text-left"
              >
                🚀 Sites & E-commerce
              </button>
              <button
                onClick={() => navigate('/solucoes/google-facebook-ads')}
                className="p-3 bg-background/50 hover:bg-background border border-white/5 rounded-lg transition-colors text-left"
              >
                📊 Google & Facebook Ads
              </button>
              <button
                onClick={() => navigate('/solucoes/seo-geo')}
                className="p-3 bg-background/50 hover:bg-background border border-white/5 rounded-lg transition-colors text-left"
              >
                🔍 SEO & GEO
              </button>
              <button
                onClick={() => navigate('/solucoes/consultoria-ia')}
                className="p-3 bg-background/50 hover:bg-background border border-white/5 rounded-lg transition-colors text-left"
              >
                🤖 Consultoria IA
              </button>
              <button
                onClick={() => navigate('/solucoes/treinamentos')}
                className="p-3 bg-background/50 hover:bg-background border border-white/5 rounded-lg transition-colors text-left"
              >
                🎓 Treinamentos
              </button>
              <button
                onClick={() => navigate('/solucoes/reestruturacao-marketing')}
                className="p-3 bg-background/50 hover:bg-background border border-white/5 rounded-lg transition-colors text-left"
              >
                🔧 Reestruturação
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
