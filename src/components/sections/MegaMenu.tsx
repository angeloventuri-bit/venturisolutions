import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronDown, 
  Megaphone, 
  Globe, 
  GraduationCap, 
  Sparkles, 
  Bot,
  Search,
  Newspaper,
  Users,
  Building2,
  Mail,
  ArrowRight,
  TrendingUp,
  Zap,
  Target,
  BarChart3
} from 'lucide-react';

interface MegaMenuItem {
  label: string;
  icon: any;
  description: string;
  href: string;
  badge?: string;
}

interface MegaMenuSection {
  title: string;
  items: MegaMenuItem[];
}

const solutionsMenu: MegaMenuSection[] = [
  {
    title: 'Performance & Tráfego',
    items: [
      {
        label: 'Ads & Performance',
        icon: Megaphone,
        description: 'Gestão completa de campanhas pagas com ROI otimizado',
        href: '/solucoes/ads-performance',
        badge: 'Popular'
      },
      {
        label: 'SEO/GEO 360',
        icon: Search,
        description: 'Posicionamento orgânico e local para mais visibilidade',
        href: '/solucoes/seo-geo-360'
      },
    ]
  },
  {
    title: 'Desenvolvimento & Design',
    items: [
      {
        label: 'Sites & Landing Pages',
        icon: Globe,
        description: 'Websites de alta conversão com design premium',
        href: '/solucoes/sites-landing-pages'
      },
      {
        label: 'Reestruturação',
        icon: TrendingUp,
        description: 'Transformação digital completa do seu negócio',
        href: '/solucoes/reestruturacao-estrategica'
      },
    ]
  },
  {
    title: 'Inteligência & Automação',
    items: [
      {
        label: 'Agentes IA',
        icon: Bot,
        description: 'Automação inteligente e assistentes virtuais',
        href: '/solucoes/agentes-ia',
        badge: 'Novo'
      },
      {
        label: 'Treinamento Comercial',
        icon: GraduationCap,
        description: 'Capacitação de equipes para alta performance',
        href: '/solucoes/treinamento-comercial'
      },
    ]
  }
];

const companyMenu: MegaMenuItem[] = [
  {
    label: 'Quem Somos',
    icon: Users,
    description: 'Nossa história e propósito',
    href: '#about'
  },
  {
    label: 'Metodologia VaaS',
    icon: Target,
    description: 'Value as a Service em detalhes',
    href: '#solution'
  },
  {
    label: 'Resultados',
    icon: BarChart3,
    description: 'Casos de sucesso e métricas',
    href: '#connection'
  },
  {
    label: 'Contato',
    icon: Mail,
    description: 'Fale com nosso time',
    href: '#cta'
  }
];

const blogCategories: MegaMenuItem[] = [
  {
    label: 'Ver Todos os Artigos',
    icon: Newspaper,
    description: 'Explore todo nosso conteúdo',
    href: '/blog',
    badge: 'Ver tudo'
  },
  {
    label: 'Performance & Ads',
    icon: Target,
    description: 'Otimização de campanhas',
    href: '/blog?category=Performance%20%26%20Ads',
  },
  {
    label: 'Tecnologia & IA',
    icon: Zap,
    description: 'Inovação e automação',
    href: '/blog?category=Tecnologia%20%26%20IA',
  },
  {
    label: 'Estratégia Comercial',
    icon: TrendingUp,
    description: 'Insights sobre vendas',
    href: '/blog?category=Estrat%C3%A9gia%20Comercial',
  },
  {
    label: 'SEO & GEO',
    icon: Search,
    description: 'Posicionamento e visibilidade',
    href: '/blog?category=SEO%20%26%20GEO',
  },
  {
    label: 'Conversão & UX',
    icon: BarChart3,
    description: 'Experiência e resultados',
    href: '/blog?category=Convers%C3%A3o%20%26%20UX',
  },
];

interface MegaMenuDropdownProps {
  type: 'solutions' | 'company' | 'blog' | 'training';
  onClose?: () => void;
}

export function MegaMenuDropdown({ type, onClose }: MegaMenuDropdownProps) {
  const navigate = useNavigate();
  const location = useLocation();
  
  const handleClose = () => {
    if (onClose) onClose();
  };

  const renderSolutionsMenu = () => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {solutionsMenu.map((section, idx) => (
        <motion.div 
          key={section.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.1 }}
        >
          <div className="relative mb-5">
            {/* Animated Title Bar */}
            <div className="flex items-center gap-3 group">
              <motion.div 
                className="h-px bg-gradient-to-r from-primary via-primary/50 to-transparent flex-1"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: idx * 0.1 + 0.2, duration: 0.5 }}
              />
              <h3 className="text-xs uppercase tracking-widest text-primary font-semibold">
                {section.title}
              </h3>
            </div>
            
            {/* Glow Effect */}
            <motion.div
              className="absolute -inset-x-4 -inset-y-2 bg-gradient-to-r from-transparent via-primary/5 to-transparent blur-xl opacity-0 group-hover:opacity-100 transition-opacity"
            />
          </div>
          
          <div className="space-y-2">
            {section.items.map((item, itemIdx) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 + itemIdx * 0.05 }}
              >
                <MegaMenuItem item={item} onClose={handleClose} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );

  const renderCompanyMenu = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
      {companyMenu.map((item, idx) => (
        <motion.div
          key={item.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.08 }}
        >
          <MegaMenuItem item={item} onClose={handleClose} />
        </motion.div>
      ))}
    </div>
  );

  const renderBlogMenu = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {blogCategories.map((item, idx) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.05 }}
          >
            <MegaMenuItem item={item} onClose={handleClose} />
          </motion.div>
        ))}
      </div>
      <motion.div 
        className="pt-6 border-t border-white/10 relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        {/* Animated Border Glow */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent"
          animate={{
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
        
        <button
          onClick={() => {
            navigate('/blog');
            handleClose();
          }}
          className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-white transition-colors"
        >
          <span>Explorar todo o blog</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
        </button>
      </motion.div>
    </div>
  );

  const renderTrainingMenu = () => (
    <div className="max-w-3xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0 }}
        >
          <MegaMenuItem
            item={{
              label: 'Treinamento Comercial',
              icon: GraduationCap,
              description: 'Transforme sua equipe em máquina de vendas',
              href: '/solucoes/treinamento-comercial'
            }}
            onClose={handleClose}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08 }}
        >
          <MegaMenuItem
            item={{
              label: 'Consultoria Estratégica',
              icon: Target,
              description: 'Mentoria executiva personalizada',
              href: '/solucoes/reestruturacao-estrategica'
            }}
            onClose={handleClose}
          />
        </motion.div>
      </div>
    </div>
  );

  return (
    <>
      {/* Ultra Premium Backdrop */}
      <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 z-40 overflow-hidden"
          >
            {/* Animated Grid */}
            <div className="absolute inset-0 bg-black/80 backdrop-blur-xl" 
              style={{
                backgroundImage: `
                  linear-gradient(90deg, rgba(139,21,56,0.05) 1px, transparent 1px),
                  linear-gradient(0deg, rgba(139,21,56,0.05) 1px, transparent 1px)
                `,
                backgroundSize: '60px 60px'
              }}
            />
            
            {/* Radial Glow */}
            <motion.div
              className="absolute inset-0"
              style={{
                background: 'radial-gradient(circle at 50% 0%, rgba(139,21,56,0.15) 0%, transparent 60%)',
              }}
              animate={{
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            />

            {/* Scan Lines */}
            <motion.div 
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(139,21,56,0.2) 2px, rgba(139,21,56,0.2) 4px)',
              }}
              animate={{
                y: ['0%', '100%'],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: 'linear'
              }}
            />
          </motion.div>

          {/* Ultra Premium Mega Menu Panel */}
          <motion.div
            initial={{ opacity: 0, y: -30, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -30, scale: 0.98 }}
            transition={{ duration: 0.4, ease: [0.19, 1, 0.22, 1] }}
            className="absolute left-0 right-0 top-full z-50"
            style={{ marginTop: '-20px', paddingTop: '20px' }}
          >
            <div className="max-w-7xl mx-auto px-6 py-8">
              <div className="relative overflow-hidden rounded-2xl">
                {/* Animated Grid Background */}
                <div className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage: `
                      linear-gradient(90deg, rgba(139,21,56,0.3) 1px, transparent 1px),
                      linear-gradient(0deg, rgba(139,21,56,0.3) 1px, transparent 1px)
                    `,
                    backgroundSize: '40px 40px'
                  }}
                />

                {/* Glass Background */}
                <div className="absolute inset-0 bg-black/95 backdrop-blur-2xl" />

                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-primary/5" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent" />

                {/* Animated Border */}
                <div className="absolute inset-0 border border-primary/30 rounded-2xl" />
                
                {/* Top Glow */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
                
                {/* Corner Accents */}
                <div className="absolute top-0 left-0 w-16 h-16">
                  <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-primary rounded-tl-2xl" />
                  <motion.div
                    className="absolute top-0 left-0 w-8 h-8 border-l border-t border-primary/30 rounded-tl-2xl"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'easeInOut'
                    }}
                  />
                </div>
                <div className="absolute bottom-0 right-0 w-16 h-16">
                  <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-primary rounded-br-2xl" />
                  <motion.div
                    className="absolute bottom-0 right-0 w-8 h-8 border-r border-b border-primary/30 rounded-br-2xl"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: 1
                    }}
                  />
                </div>

                {/* Floating Orbs */}
                <motion.div
                  className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full"
                  style={{
                    background: 'radial-gradient(circle, rgba(139,21,56,0.2) 0%, transparent 70%)',
                    filter: 'blur(40px)',
                  }}
                  animate={{
                    x: [0, 50, 0],
                    y: [0, 30, 0],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: 'easeInOut'
                  }}
                />
                <motion.div
                  className="absolute bottom-1/4 right-1/4 w-40 h-40 rounded-full"
                  style={{
                    background: 'radial-gradient(circle, rgba(163,29,69,0.15) 0%, transparent 70%)',
                    filter: 'blur(50px)',
                  }}
                  animate={{
                    x: [0, -40, 0],
                    y: [0, -25, 0],
                    scale: [1, 1.15, 1],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 2
                  }}
                />

                {/* Shadow */}
                <div className="absolute inset-0 shadow-2xl shadow-primary/20 rounded-2xl" />
                
                {/* Content */}
                <div className="relative p-10">
                  {type === 'solutions' && renderSolutionsMenu()}
                  {type === 'company' && renderCompanyMenu()}
                  {type === 'blog' && renderBlogMenu()}
                  {type === 'training' && renderTrainingMenu()}
                </div>
              </div>
            </div>
          </motion.div>
    </>
  );
}

function MegaMenuItem({ item, onClose }: { item: MegaMenuItem; onClose?: () => void }) {
  const Icon = item.icon;
  const navigate = useNavigate();
  const location = useLocation();
  const [isHovered, setIsHovered] = useState(false);
  
  const handleClick = () => {
    // Fechar o menu primeiro
    if (onClose) onClose();
    
    // Se o href começa com #, é uma âncora na home
    if (item.href.startsWith('#')) {
      // Se não estamos na home, navega para a home primeiro
      if (location.pathname !== '/') {
        navigate('/');
        // Aguarda navegação e então faz scroll
        setTimeout(() => {
          const element = document.querySelector(item.href);
          if (element) {
            const offset = 80; // Offset para o header fixo
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;
            
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }
        }, 300);
      } else {
        // Se já estamos na home, apenas faz scroll
        const element = document.querySelector(item.href);
        if (element) {
          const offset = 80; // Offset para o header fixo
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }
    } else {
      // Se é uma rota, navega usando React Router
      navigate(item.href);
    }
  };
  
  return (
    <motion.button
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative w-full text-left p-5 rounded-xl overflow-hidden transition-all"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity"
        style={{
          backgroundImage: `
            linear-gradient(90deg, rgba(139,21,56,0.3) 1px, transparent 1px),
            linear-gradient(0deg, rgba(139,21,56,0.3) 1px, transparent 1px)
          `,
          backgroundSize: '10px 10px'
        }}
      />

      {/* Glass Background */}
      <div className="absolute inset-0 bg-white/5 group-hover:bg-gradient-to-br group-hover:from-primary/15 group-hover:via-primary/10 group-hover:to-transparent transition-all duration-300" />

      {/* Animated Border */}
      <div className="absolute inset-0 border border-white/10 group-hover:border-primary/40 rounded-xl transition-all duration-300" />

      {/* Scan Line Effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100"
        animate={isHovered ? {
          x: ['-100%', '200%'],
        } : {}}
        transition={{
          duration: 1.5,
          repeat: isHovered ? Infinity : 0,
          ease: 'linear'
        }}
      />

      {/* Hover Glow */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl blur-xl"
        animate={isHovered ? {
          opacity: [0, 0.5, 0],
        } : {}}
        transition={{
          duration: 2,
          repeat: isHovered ? Infinity : 0,
          ease: 'easeInOut'
        }}
      />
      
      <div className="relative flex items-start gap-4">
        {/* Icon Container */}
        <div className="relative flex-shrink-0">
          {/* Icon Glow */}
          <motion.div
            className="absolute -inset-2 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"
            style={{
              background: 'radial-gradient(circle, rgba(139,21,56,0.3) 0%, transparent 70%)',
              filter: 'blur(10px)',
            }}
          />
          
          <div className="relative w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 group-hover:from-primary/30 group-hover:to-primary/20 border border-primary/30 group-hover:border-primary/50 rounded-xl flex items-center justify-center transition-all duration-300 overflow-hidden">
            {/* Icon Background Animation */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100"
              animate={isHovered ? {
                rotate: [0, 360],
              } : {}}
              transition={{
                duration: 3,
                repeat: isHovered ? Infinity : 0,
                ease: 'linear'
              }}
            />
            
            <Icon className="relative z-10 w-6 h-6 text-primary group-hover:text-white transition-colors duration-300" />
          </div>

          {/* Corner Brackets */}
          <div className="absolute -top-1 -left-1 w-3 h-3 border-l-2 border-t-2 border-primary/0 group-hover:border-primary/60 transition-all rounded-tl-lg" />
          <div className="absolute -bottom-1 -right-1 w-3 h-3 border-r-2 border-b-2 border-primary/0 group-hover:border-primary/60 transition-all rounded-br-lg" />
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="text-white group-hover:text-white transition-colors font-medium">
              {item.label}
            </span>
            {item.badge && (
              <motion.span 
                className="text-xs px-2.5 py-1 bg-primary/25 text-primary group-hover:bg-primary group-hover:text-white rounded-full border border-primary/40 group-hover:border-primary transition-all"
                whileHover={{ scale: 1.05 }}
              >
                {item.badge}
              </motion.span>
            )}
          </div>
          <p className="text-sm text-gray-400 group-hover:text-gray-300 line-clamp-2 transition-colors">
            {item.description}
          </p>
        </div>

        {/* Arrow */}
        <motion.div
          className="flex-shrink-0 mt-1"
          animate={isHovered ? {
            x: [0, 5, 0],
          } : {}}
          transition={{
            duration: 1,
            repeat: isHovered ? Infinity : 0,
            ease: 'easeInOut'
          }}
        >
          <ArrowRight className="w-5 h-5 text-gray-500 group-hover:text-primary transition-colors" />
        </motion.div>
      </div>

      {/* Bottom Glow Line */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
        animate={isHovered ? {
          opacity: [0, 1, 0],
        } : {}}
        transition={{
          duration: 2,
          repeat: isHovered ? Infinity : 0,
          ease: 'easeInOut'
        }}
      />
    </motion.button>
  );
}