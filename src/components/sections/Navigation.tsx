import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../ui/button';
import { Menu, X, ArrowRight, ChevronDown, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import logoImage from 'figma:asset/3e259d13c795140aec8a0e73c8cca5713e7d0fc0.png';
import logoIconImage from 'figma:asset/9303ae4bc615fe3cfd81cd63dd4956fe81377797.png';
import { MegaMenuDropdown } from './MegaMenu';
import { scrollToSection as scrollToSectionUtil } from '../../utils/scrollToForm';
import { useContactDialog } from '../../utils/useContactDialog';

type MegaMenuType = 'solutions' | 'company' | 'blog' | 'training' | null;

const navItems = [
  { label: 'Início', href: '#hero' },
  { label: 'Soluções', hasMegaMenu: true, megaMenuType: 'solutions' as MegaMenuType },
  { label: 'Treinamentos', hasMegaMenu: true, megaMenuType: 'training' as MegaMenuType },
  { label: 'Empresa', hasMegaMenu: true, megaMenuType: 'company' as MegaMenuType },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#hero');
  const [openMegaMenu, setOpenMegaMenu] = useState<MegaMenuType>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const { openDialog } = useContactDialog();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fechar mega menu ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpenMegaMenu(null);
      }
    };

    if (openMegaMenu) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [openMegaMenu]);

  const scrollToSection = (href: string) => {
    scrollToSectionUtil(href);
    setIsMobileMenuOpen(false);
    setOpenMegaMenu(null);
  };

  const handleNavItemClick = (item: typeof navItems[0]) => {
    if (item.hasMegaMenu && item.megaMenuType) {
      // Toggle mega menu
      setOpenMegaMenu(openMegaMenu === item.megaMenuType ? null : item.megaMenuType);
    } else if (item.href) {
      // Se é uma rota (começa com /), navega
      if (item.href.startsWith('/')) {
        navigate(item.href);
        setIsMobileMenuOpen(false);
        setOpenMegaMenu(null);
      } else {
        // Se é uma âncora (#), faz scroll
        scrollToSection(item.href);
      }
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      {/* Ultra Premium Background */}
      <div className={`relative transition-all duration-700 ${
        isScrolled 
          ? 'bg-black/80 backdrop-blur-2xl border-b border-primary/20 shadow-2xl shadow-primary/20' 
          : 'bg-gradient-to-b from-black/40 via-black/20 to-transparent backdrop-blur-sm border-b border-white/5'
      }`}>
        
        {/* Animated Grid Overlay */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
          <div className={`absolute inset-0 transition-opacity duration-700 ${
            isScrolled ? 'opacity-30' : 'opacity-10'
          }`}
            style={{
              backgroundImage: `
                linear-gradient(90deg, rgba(139,21,56,0.1) 1px, transparent 1px),
                linear-gradient(0deg, rgba(139,21,56,0.1) 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px'
            }}
          />
        </div>

        {/* Gradient Glow Top */}
        <div className={`absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none transition-opacity duration-700 ${
          isScrolled ? 'opacity-100' : 'opacity-50'
        }`} />
        
        {/* Animated Border Glow */}
        <div className="absolute inset-x-0 bottom-0 h-px overflow-hidden">
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-transparent via-primary to-transparent"
            animate={{
              x: ['-100%', '100%'],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'linear'
            }}
            style={{
              opacity: isScrolled ? 0.6 : 0.3
            }}
          />
        </div>

        {/* Scan Line Effect */}
        <motion.div 
          className="absolute inset-0 h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent pointer-events-none"
          animate={{
            y: ['0%', '100%'],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'linear'
          }}
        />
      
      <div ref={navRef} className="relative max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Ultra Premium Venturi Logo */}
          <motion.button
            onClick={() => {
              navigate('/');
              window.scrollTo({ top: 0, behavior: 'smooth' });
              setIsMobileMenuOpen(false);
              setOpenMegaMenu(null);
            }}
            className="flex items-center gap-3 group relative z-50"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Logo Glow Container */}
            <div className="relative">
              {/* Animated Glow Ring */}
              <motion.div 
                className="absolute -inset-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
                animate={{
                  boxShadow: [
                    '0 0 20px rgba(139,21,56,0.3)',
                    '0 0 40px rgba(163,29,69,0.5)',
                    '0 0 20px rgba(139,21,56,0.3)',
                  ]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
              />
              
              {/* Scan Lines over Logo */}
              <div className="absolute inset-0 overflow-hidden rounded-lg opacity-0 group-hover:opacity-20">
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-b from-transparent via-white to-transparent h-full"
                  animate={{
                    y: ['-100%', '200%'],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: 'linear'
                  }}
                />
              </div>

              {/* Logo Completa - Mobile e Desktop */}
              <img 
                src={logoImage} 
                alt="Venturi Solutions" 
                className="h-6 md:h-7 object-contain relative drop-shadow-[0_0_20px_rgba(139,21,56,0.8)] group-hover:drop-shadow-[0_0_30px_rgba(163,29,69,1)] transition-all duration-300"
              />
            </div>

            {/* Corner Brackets */}
            <div className="absolute -left-2 -top-2 w-3 h-3 border-l-2 border-t-2 border-primary/50 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="absolute -right-2 -bottom-2 w-3 h-3 border-r-2 border-b-2 border-primary/50 opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.button>

          {/* Ultra Premium Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item, index) => (
              <div
                key={item.label}
                className="relative"
              >
                <motion.button
                  onClick={() => handleNavItemClick(item)}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="relative px-5 py-3 rounded-xl transition-all flex items-center gap-2 group overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Background Layers */}
                  <div className={`absolute inset-0 transition-all duration-300 ${
                    openMegaMenu === item.megaMenuType
                      ? 'bg-gradient-to-br from-primary/30 via-primary/20 to-transparent'
                      : 'bg-transparent group-hover:bg-gradient-to-br group-hover:from-white/10 group-hover:via-white/5 group-hover:to-transparent'
                  }`} />

                  {/* Animated Border */}
                  <div className={`absolute inset-0 rounded-xl border transition-all duration-300 ${
                    openMegaMenu === item.megaMenuType
                      ? 'border-primary/50 shadow-lg shadow-primary/20'
                      : 'border-white/10 group-hover:border-primary/30'
                  }`} />

                  {/* Hover Scan Effect */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100"
                    animate={{
                      x: ['-100%', '200%'],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: 'linear'
                    }}
                  />

                  {/* Glow Orbs */}
                  <motion.div
                    className="absolute -inset-4 opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{
                      background: 'radial-gradient(circle at center, rgba(139,21,56,0.2) 0%, transparent 70%)',
                    }}
                    animate={{
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'easeInOut'
                    }}
                  />

                  {/* Text Content */}
                  <span className={`relative z-10 tracking-wide transition-colors duration-300 ${
                    openMegaMenu === item.megaMenuType
                      ? 'text-white'
                      : 'text-gray-300 group-hover:text-white'
                  }`}>
                    {item.label}
                  </span>
                  
                  {item.hasMegaMenu && (
                    <motion.div
                      animate={{ 
                        rotate: openMegaMenu === item.megaMenuType ? 180 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className={`w-4 h-4 transition-colors duration-300 ${
                        openMegaMenu === item.megaMenuType
                          ? 'text-primary'
                          : 'text-gray-400 group-hover:text-primary'
                      }`} />
                    </motion.div>
                  )}

                  {/* Active Indicator */}
                  {openMegaMenu === item.megaMenuType && (
                    <>
                      <motion.div
                        layoutId="activeMegaMenu"
                        className="absolute inset-0 bg-gradient-to-r from-[#8B1538]/20 via-[#A31D45]/20 to-[#8B1538]/20 rounded-xl"
                        transition={{ type: 'spring', stiffness: 400, damping: 35 }}
                      />
                      
                      {/* Bottom Glow Line */}
                      <motion.div
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent"
                        layoutId="activeGlow"
                        transition={{ type: 'spring', stiffness: 400, damping: 35 }}
                      />
                    </>
                  )}

                  {/* Corner Accents */}
                  <div className="absolute top-0 left-0 w-2 h-2 border-l border-t border-primary/0 group-hover:border-primary/50 transition-all rounded-tl-xl" />
                  <div className="absolute bottom-0 right-0 w-2 h-2 border-r border-b border-primary/0 group-hover:border-primary/50 transition-all rounded-br-xl" />
                </motion.button>
                
                {/* Mega Menu Dropdown for this item */}
                {item.hasMegaMenu && item.megaMenuType && (
                  <AnimatePresence>
                    {openMegaMenu === item.megaMenuType && (
                      <MegaMenuDropdown
                        type={item.megaMenuType}
                      />
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>

          {/* Ultra Premium CTA Button */}
          <div className="hidden md:block">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.98 }}
            >
              <div className="relative group">
                {/* Animated Outer Glow */}
                <motion.div 
                  className="absolute -inset-1 rounded-xl opacity-50 group-hover:opacity-100 transition-opacity blur-lg"
                  animate={{
                    background: [
                      'linear-gradient(45deg, #8B1538, #A31D45, #8B1538)',
                      'linear-gradient(90deg, #A31D45, #8B1538, #A31D45)',
                      'linear-gradient(135deg, #8B1538, #A31D45, #8B1538)',
                    ]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'linear'
                  }}
                />

                {/* Pulsing Ring */}
                <motion.div
                  className="absolute -inset-2 rounded-xl border-2 border-primary/30"
                  animate={{
                    scale: [1, 1.05, 1],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut'
                  }}
                />

                {/* Button Container */}
                <div className="relative overflow-hidden rounded-xl">
                  {/* Shimmer Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    animate={{
                      x: ['-200%', '200%'],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'linear',
                      repeatDelay: 1
                    }}
                  />

                  <Button
                    onClick={openDialog}
                    className="relative bg-gradient-to-r from-[#8B1538] via-[#A31D45] to-[#8B1538] hover:from-[#A31D45] hover:via-[#8B1538] hover:to-[#A31D45] shadow-2xl border border-primary/50 px-8 py-6 overflow-hidden group bg-[length:200%_100%] hover:bg-[position:100%_0] transition-all duration-500"
                  >
                    {/* Inner Glow */}
                    <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    
                    {/* Sparkle Effect */}
                    <motion.div
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                      animate={{
                        scale: [0, 1.5, 0],
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 1
                      }}
                    >
                      <Sparkles className="w-6 h-6 text-white/50" />
                    </motion.div>

                    <span className="relative z-10 flex items-center gap-2">
                      Começar Agora
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                    </span>

                    {/* Corner Brackets */}
                    <div className="absolute top-1 left-1 w-3 h-3 border-l-2 border-t-2 border-white/30 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute bottom-1 right-1 w-3 h-3 border-r-2 border-b-2 border-white/30 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Ultra Premium Mobile Menu Button */}
          <motion.button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden relative p-3 text-white bg-gradient-to-br from-white/10 to-white/5 hover:from-white/20 hover:to-white/10 rounded-xl border border-white/20 hover:border-primary/50 overflow-hidden group"
            whileTap={{ scale: 0.95 }}
          >
            {/* Animated Background */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
            />

            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="relative z-10"
                >
                  <X className="w-5 h-5" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="relative z-10"
                >
                  <Menu className="w-5 h-5" />
                </motion.div>
              )}
            </AnimatePresence>

            {/* Corner Indicators */}
            <div className="absolute top-0 left-0 w-2 h-2 border-l border-t border-primary/50 rounded-tl-lg" />
            <div className="absolute bottom-0 right-0 w-2 h-2 border-r border-b border-primary/50 rounded-br-lg" />
          </motion.button>
        </div>

        {/* Mega Menu Dropdowns */}
        <AnimatePresence>
          {openMegaMenu && (
            <MegaMenuDropdown
              type={openMegaMenu}
              onClose={() => setOpenMegaMenu(null)}
            />
          )}
        </AnimatePresence>

        {/* Ultra Premium Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: [0.19, 1, 0.22, 1] }}
              className="md:hidden overflow-hidden mt-4"
            >
              {/* Mobile Menu Container */}
              <div className="relative rounded-2xl overflow-hidden border border-primary/20">
                {/* Animated Grid Background */}
                <div className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: `
                      linear-gradient(90deg, rgba(139,21,56,0.3) 1px, transparent 1px),
                      linear-gradient(0deg, rgba(139,21,56,0.3) 1px, transparent 1px)
                    `,
                    backgroundSize: '20px 20px'
                  }}
                />

                {/* Glass Background */}
                <div className="absolute inset-0 bg-black/95 backdrop-blur-2xl" />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-primary/5" />

                {/* Menu Items */}
                <div className="relative pt-6 pb-8 space-y-2 px-4">
                  {navItems.map((item, index) => (
                    <motion.button
                      key={item.label}
                      onClick={() => handleNavItemClick(item)}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="relative flex items-center justify-between w-full text-left py-4 px-5 rounded-xl text-gray-300 hover:text-white transition-all group overflow-hidden"
                      whileTap={{ scale: 0.98 }}
                    >
                      {/* Background */}
                      <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      
                      {/* Border */}
                      <div className="absolute inset-0 border border-white/10 group-hover:border-primary/30 rounded-xl transition-colors" />

                      {/* Scan Line */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent opacity-0 group-hover:opacity-100"
                        animate={{
                          x: ['-100%', '200%'],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          ease: 'linear'
                        }}
                      />

                      <span className="relative z-10">{item.label}</span>
                      {item.hasMegaMenu && (
                        <ChevronDown className="relative z-10 w-4 h-4 text-gray-500 group-hover:text-primary transition-colors" />
                      )}

                      {/* Corner Accents */}
                      <div className="absolute top-1 left-1 w-2 h-2 border-l border-t border-primary/0 group-hover:border-primary/50 transition-all rounded-tl-xl" />
                      <div className="absolute bottom-1 right-1 w-2 h-2 border-r border-b border-primary/0 group-hover:border-primary/50 transition-all rounded-br-xl" />
                    </motion.button>
                  ))}
                  
                  {/* Mobile CTA */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: navItems.length * 0.05 }}
                    className="pt-4"
                  >
                    <div className="relative group">
                      {/* Outer Glow */}
                      <motion.div 
                        className="absolute -inset-1 bg-gradient-to-r from-[#8B1538] to-[#A31D45] rounded-xl blur-lg opacity-50 group-hover:opacity-75"
                        animate={{
                          opacity: [0.5, 0.75, 0.5],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: 'easeInOut'
                        }}
                      />
                      
                      <Button
                        onClick={openDialog}
                        className="relative w-full bg-gradient-to-r from-[#8B1538] to-[#A31D45] shadow-2xl border border-primary/50 py-6 overflow-hidden"
                      >
                        {/* Shimmer */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                          animate={{
                            x: ['-200%', '200%'],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: 'linear'
                          }}
                        />
                        
                        <span className="relative z-10 flex items-center justify-center gap-2">
                          Começar Agora
                          <ArrowRight className="w-4 h-4" />
                        </span>
                      </Button>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      </div>
    </motion.nav>
  );
}