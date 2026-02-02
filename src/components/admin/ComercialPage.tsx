import { useNavigate } from 'react-router-dom';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Presentation, DollarSign, BarChart3, Users, TrendingUp, Target, ArrowRight, FileText } from 'lucide-react';
import { motion } from 'motion/react';
import { VenturiLogo } from '../VenturiLogo';

export function ComercialPage() {
  const navigate = useNavigate();

  const tools = [
    {
      icon: Presentation,
      title: 'Apresentação Comercial',
      description: 'Apresentação completa com metodologia VaaS, portfólio e cases de sucesso',
      path: '/admin/presentation',
      color: 'from-[#8B1538] to-[#A31D45]',
      stats: '40+ slides'
    },
    {
      icon: DollarSign,
      title: 'Precificação Detalhada',
      description: 'Tabela completa de preços, tiers e pacotes integrados com carrinho',
      path: '/admin/pricing',
      color: 'from-[#A31D45] to-[#6B0F2A]',
      stats: '6 serviços'
    },
  ];

  const features = [
    {
      icon: Target,
      title: 'Material de Vendas',
      description: 'Apresentações e precificação profissionais'
    },
    {
      icon: Users,
      title: 'Gestão de Leads',
      description: 'CRM integrado com rastreamento automático'
    },
    {
      icon: TrendingUp,
      title: 'Analytics',
      description: 'Acompanhamento de origem e conversão'
    },
    {
      icon: BarChart3,
      title: 'Performance',
      description: 'Métricas e KPIs em tempo real'
    },
  ];

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-4"
        >
          <div className="flex justify-center mb-4">
            <VenturiLogo variant="horizontal" size="sm" />
          </div>
          
          <h1 className="text-4xl md:text-5xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B1538] via-[#A31D45] to-[#8B1538]">
              Área Comercial
            </span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ferramentas e recursos para apresentações e negociações comerciais
          </p>
        </motion.div>

        {/* Main Tools */}
        <div className="grid md:grid-cols-2 gap-6">
          {tools.map((tool, index) => (
            <motion.div
              key={tool.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="group"
            >
              <div className="relative">
                <div className={`absolute -inset-1 bg-gradient-to-r ${tool.color} rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-all`} />
                
                <Card className="relative glass border-primary/30 hover:border-primary/50 transition-all p-8 cursor-pointer h-full"
                  onClick={() => navigate(tool.path)}
                >
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${tool.color} flex items-center justify-center mb-6 shadow-lg`}>
                    <tool.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-2xl">{tool.title}</h3>
                      <span className="text-xs px-3 py-1 rounded-full bg-primary/20 text-primary border border-primary/30">
                        {tool.stats}
                      </span>
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {tool.description}
                    </p>

                    {/* Action */}
                    <div className="flex items-center gap-2 text-primary group-hover:gap-4 transition-all pt-2">
                      <span className="font-medium">Abrir ferramenta</span>
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>
                </Card>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="space-y-6"
        >
          <div className="text-center">
            <h2 className="text-2xl">Recursos Disponíveis</h2>
            <p className="text-muted-foreground mt-2">
              Sistema completo de gestão comercial e relacionamento com clientes
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + index * 0.05 }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="glass border-primary/20 hover:border-primary/40 transition-all p-6 text-center h-full">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-medium mb-2">{feature.title}</h4>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Card className="glass border-primary/30 p-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-2 text-center md:text-left">
                <h3 className="text-xl flex items-center gap-2 justify-center md:justify-start">
                  <FileText className="w-5 h-5 text-primary" />
                  Documentação e Guias
                </h3>
                <p className="text-muted-foreground">
                  Acesse os guias de uso e documentação técnica do sistema
                </p>
              </div>
              
              <div className="flex gap-3">
                <Button
                  variant="outline"
                  onClick={() => navigate('/admin/crm')}
                  className="border-primary/30 hover:border-primary/50"
                >
                  Ir para CRM
                </Button>
                <Button
                  onClick={() => navigate('/admin/presentation')}
                  className="bg-gradient-to-r from-primary to-red-600 hover:from-red-600 hover:to-primary"
                >
                  Iniciar Apresentação
                </Button>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Info Cards */}
        <div className="grid md:grid-cols-3 gap-4">
          <Card className="glass border-primary/20 p-6">
            <div className="space-y-2">
              <div className="text-sm text-muted-foreground">Sistema de E-mails</div>
              <div className="text-2xl font-bold text-primary">100% Configurado</div>
              <div className="text-xs text-muted-foreground">
                Notificações automáticas via Resend
              </div>
            </div>
          </Card>

          <Card className="glass border-primary/20 p-6">
            <div className="space-y-2">
              <div className="text-sm text-muted-foreground">E-mails de Notificação</div>
              <div className="text-lg">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  <span className="text-sm">angelo.venturi@venturisolutions.com.br</span>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-yellow-500" />
                  <span className="text-sm">rafael.vianna@venturisolutions.com.br</span>
                </div>
                <div className="text-xs text-muted-foreground mt-2">
                  ⚠️ Verifique domínio no Resend para ativar segundo e-mail
                </div>
              </div>
            </div>
          </Card>

          <Card className="glass border-primary/20 p-6">
            <div className="space-y-2">
              <div className="text-sm text-muted-foreground">WhatsApp Integrado</div>
              <div className="text-lg font-bold">+55 11 96314-4616</div>
              <div className="text-xs text-muted-foreground">
                Redirecionamento automático após lead
              </div>
            </div>
          </Card>
        </div>

      </div>
    </div>
  );
}
