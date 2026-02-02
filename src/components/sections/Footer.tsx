import { motion } from 'motion/react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ArrowRight, Mail, Phone, MapPin, Linkedin, Instagram, Youtube } from 'lucide-react';
import logoImage from 'figma:asset/3e259d13c795140aec8a0e73c8cca5713e7d0fc0.png';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();
  const location = useLocation();

  const footerLinks = {
    solutions: [
      { label: 'Ads & Performance', href: '/solucoes/ads-performance', isRoute: true },
      { label: 'Sites & Landing Pages', href: '/solucoes/sites-landing-pages', isRoute: true },
      { label: 'Treinamento Comercial', href: '/solucoes/treinamento-comercial', isRoute: true },
      { label: 'Reestruturação', href: '/solucoes/reestruturacao', isRoute: true },
      { label: 'SEO/GEO 360', href: '/solucoes/seo-geo', isRoute: true },
      { label: 'Agentes IA', href: '/solucoes/agentes-ia', isRoute: true },
    ],
    company: [
      { label: 'Sobre Nós', href: '#hero', isRoute: false },
      { label: 'Blog', href: '/blog', isRoute: true },
      { label: 'Metodologia VaaS', href: '#solution', isRoute: false },
      { label: 'Casos de Sucesso', href: '#connection', isRoute: false },
      { label: 'Desafios', href: '#problem', isRoute: false },
      { label: 'Política de Privacidade', href: '/privacidade', isRoute: true },
      { label: 'Termos de Uso', href: '/termos', isRoute: true },
      { label: 'Área Admin', href: '/admin/login', isRoute: true },
    ],
    contact: [
      { icon: Mail, label: 'angelo.venturi@venturisolutions.com.br', href: 'mailto:angelo.venturi@venturisolutions.com.br' },
      { icon: Phone, label: '+55 (11) 96314-4616', href: 'https://wa.me/5511963144616' },
      { icon: MapPin, label: 'São Paulo, Brasil', href: '#' },
    ],
  };

  const socialLinks = [
    { icon: Instagram, href: 'https://www.instagram.com/venturisolutions/', label: 'Instagram' },
    { icon: Linkedin, href: 'https://www.linkedin.com/company/venturii-solutions', label: 'LinkedIn' },
    { icon: Youtube, href: 'https://www.youtube.com/@venturisolutions', label: 'YouTube' },
  ];

  const handleLinkClick = (href: string, isRoute: boolean = false) => {
    if (isRoute) {
      // É uma rota - usa React Router
      navigate(href);
    } else if (href.startsWith('#')) {
      // É uma âncora - verifica se precisa navegar para home primeiro
      if (location.pathname !== '/') {
        navigate('/' + href);
        setTimeout(() => {
          document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="relative bg-black border-t border-primary/20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(139, 21, 56, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139, 21, 56, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <motion.div 
              className="mb-6"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img 
                src={logoImage} 
                alt="Venturi Solutions" 
                className="h-7 object-contain drop-shadow-[0_0_12px_rgba(139,21,56,0.6)]"
              />
            </motion.div>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              Crescimento orientado a resultados através de tecnologia, estratégia e execução.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 bg-white/5 hover:bg-primary/20 border border-white/10 hover:border-primary/30 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Solutions Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-white mb-6 tracking-tight">Soluções</h3>
            <ul className="space-y-3">
              {footerLinks.solutions.map((link, index) => (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + index * 0.05 }}
                >
                  <button
                    onClick={() => handleLinkClick(link.href, link.isRoute)}
                    className="text-gray-400 hover:text-white transition-colors group flex items-center gap-2 text-left"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -ml-5 group-hover:ml-0 transition-all" />
                    {link.label}
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Company Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-white mb-6 tracking-tight">Empresa</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.05 }}
                >
                  <button
                    onClick={() => handleLinkClick(link.href, link.isRoute)}
                    className="text-gray-400 hover:text-white transition-colors group flex items-center gap-2 text-left"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -ml-5 group-hover:ml-0 transition-all" />
                    {link.label}
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-white mb-6 tracking-tight">Contato</h3>
            <ul className="space-y-4">
              {footerLinks.contact.map((contact, index) => (
                <motion.li
                  key={contact.label}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.05 }}
                >
                  <a
                    href={contact.href}
                    className="text-gray-400 hover:text-white transition-colors group flex items-center gap-3"
                  >
                    <div className="w-8 h-8 bg-white/5 group-hover:bg-primary/20 border border-white/10 group-hover:border-primary/30 rounded-lg flex items-center justify-center transition-all">
                      <contact.icon className="w-4 h-4" />
                    </div>
                    <span className="text-sm">{contact.label}</span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-white/10"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-500">
              © {currentYear} Venturi Solutions. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-6 text-sm text-gray-500">
              <button className="hover:text-white transition-colors">
                Termos de Uso
              </button>
              <span>•</span>
              <button className="hover:text-white transition-colors">
                Política de Privacidade
              </button>
              <span>•</span>
              <button className="hover:text-white transition-colors">
                Cookies
              </button>
            </div>
          </div>

          {/* Premium Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-8 flex flex-col gap-4 items-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/10 to-red-600/10 border border-primary/20 rounded-full">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-xs text-gray-400">
                Powered by <span className="text-primary">Value as a Service</span> Technology
              </span>
            </div>
            
            {/* Admin Access Link */}
            <button
              onClick={() => navigate('/admin/login')}
              className="text-[10px] text-gray-600 hover:text-primary transition-colors"
            >
              Área Administrativa
            </button>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}