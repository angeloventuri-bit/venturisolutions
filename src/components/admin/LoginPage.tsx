import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { Lock, Eye, EyeOff, Shield, Home } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Card } from '../ui/card';
import { VenturiLogo } from '../VenturiLogo';

// Simple auth - in production use proper backend authentication
const ADMIN_CREDENTIALS = {
  username: 'admin',
  password: 'venturi2024' // Change this to a secure password
};

export function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (username === ADMIN_CREDENTIALS.username && password === ADMIN_CREDENTIALS.password) {
      // Set auth token
      localStorage.setItem('venturi_admin_token', 'authenticated');
      navigate('/admin/dashboard');
    } else {
      setError('Credenciais inválidas');
      setTimeout(() => setError(''), 3000);
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6 relative overflow-hidden">
      {/* Back to Home Button */}
      <div className="absolute top-6 left-6 z-20">
        <Button
          variant="outline"
          size="sm"
          onClick={() => navigate('/')}
          className="gap-2"
        >
          <Home className="w-4 h-4" />
          Voltar ao Site
        </Button>
      </div>

      {/* Background Effects */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(139, 21, 56, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139, 21, 56, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md relative z-10"
      >
        <Card className="p-8 glass-premium border-primary/30">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <VenturiLogo className="h-12" />
          </div>

          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 border border-primary/20 rounded-2xl mb-4">
              <Shield className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-3xl mb-2">Área Admin</h1>
            <p className="text-muted-foreground">
              Acesso restrito à equipe comercial
            </p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="text-sm mb-2 block font-medium">Usuário</label>
              <Input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Digite seu usuário"
                className="glass border-primary/30 focus:border-primary/50 h-12"
                required
              />
            </div>

            <div>
              <label className="text-sm mb-2 block font-medium">Senha</label>
              <div className="relative">
                <Input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Digite sua senha"
                  className="glass border-primary/30 focus:border-primary/50 h-12 pr-12"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-500 text-sm text-center"
              >
                {error}
              </motion.div>
            )}

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-primary to-red-600 hover:from-red-600 hover:to-primary h-12"
            >
              <Lock className="w-4 h-4 mr-2" />
              Entrar
            </Button>
          </form>

          {/* Info */}
          <div className="mt-6 pt-6 border-t border-primary/10 text-center text-xs text-muted-foreground">
            <div className="flex items-center justify-center gap-2">
              <Shield className="w-3 h-3" />
              <p>Acesso protegido - Entre em contato com o administrador</p>
            </div>
          </div>
        </Card>
      </motion.div>
    </div>
  );
}
