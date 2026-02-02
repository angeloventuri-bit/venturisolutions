import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  LayoutDashboard, 
  Users, 
  Presentation, 
  DollarSign,
  LogOut,
  Menu,
  X,
  Home,
  FileText
} from 'lucide-react';
import { Button } from '../ui/button';
import { VenturiLogo } from '../VenturiLogo';
import { useState } from 'react';

const navigation = [
  { 
    name: 'CRM', 
    href: '/admin/crm', 
    icon: Users,
    description: 'Gestão de leads e pipeline'
  },
  { 
    name: 'Área Comercial', 
    href: '/admin/comercial', 
    icon: LayoutDashboard,
    description: 'Hub de vendas e apresentações'
  },
  { 
    name: 'Blog', 
    href: '/admin/blog', 
    icon: FileText,
    description: 'Gerenciar posts e conteúdo'
  },
  { 
    name: 'Apresentação', 
    href: '/admin/presentation', 
    icon: Presentation,
    description: 'Apresentação comercial'
  },
  { 
    name: 'Precificação', 
    href: '/admin/pricing', 
    icon: DollarSign,
    description: 'Tabelas de preços e propostas'
  },
];

export function AdminDashboard() {
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('venturi_admin_token');
    navigate('/admin/login');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 glass-premium border-b border-primary/20 backdrop-blur-xl">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-4">
            <VenturiLogo className="h-8" />
            <div className="hidden md:block">
              <h1 className="text-lg">Admin Dashboard</h1>
              <p className="text-xs text-muted-foreground">Área Comercial</p>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              onClick={() => navigate('/')}
              className="gap-2"
            >
              <Home className="w-4 h-4" />
              Voltar ao Site
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleLogout}
              className="gap-2"
            >
              <LogOut className="w-4 h-4" />
              Sair
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-primary/10 bg-card/50 backdrop-blur-xl"
          >
            <div className="p-4 space-y-2">
              {navigation.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.href;
                
                return (
                  <button
                    key={item.name}
                    onClick={() => {
                      navigate(item.href);
                      setMobileMenuOpen(false);
                    }}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                      isActive
                        ? 'bg-primary/10 text-primary border border-primary/20'
                        : 'hover:bg-primary/5 text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <div className="text-left">
                      <div className="font-medium">{item.name}</div>
                      <div className="text-xs text-muted-foreground">{item.description}</div>
                    </div>
                  </button>
                );
              })}
              <div className="pt-2 space-y-2">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full gap-2" 
                  onClick={() => {
                    navigate('/');
                    setMobileMenuOpen(false);
                  }}
                >
                  <Home className="w-4 h-4" />
                  Voltar ao Site
                </Button>
                <Button variant="ghost" size="sm" className="w-full gap-2" onClick={handleLogout}>
                  <LogOut className="w-4 h-4" />
                  Sair
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </header>

      <div className="flex">
        {/* Sidebar - Desktop */}
        <aside className="hidden md:block w-64 min-h-[calc(100vh-73px)] glass border-r border-primary/10 p-6">
          <nav className="space-y-2">
            {navigation.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.href;
              
              return (
                <button
                  key={item.name}
                  onClick={() => navigate(item.href)}
                  className={`w-full flex items-start gap-3 px-4 py-3 rounded-lg transition-all ${
                    isActive
                      ? 'bg-primary/10 text-primary border border-primary/20'
                      : 'hover:bg-primary/5 text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <Icon className="w-5 h-5 mt-0.5" />
                  <div className="text-left">
                    <div className="font-medium text-sm">{item.name}</div>
                    <div className="text-xs text-muted-foreground mt-0.5">
                      {item.description}
                    </div>
                  </div>
                </button>
              );
            })}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}