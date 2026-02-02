import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Select } from '../ui/select';
import { CheckCircle2, Rocket, Mail, Phone, Zap, Star, Clock, Shield } from 'lucide-react';
import { motion } from 'motion/react';
import { CornerBrackets } from '../visuals/CornerBrackets';
import { saveLead } from '../../utils/leadTracking';
import { toast } from 'sonner@2.0.3';

export function CTASection() {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    const leadData = {
      nome: formData.get('nome') as string,
      email: formData.get('email') as string,
      telefone: formData.get('telefone') as string,
      empresa: formData.get('empresa') as string,
      nicho: formData.get('nicho') as string,
      servicoInteresse: formData.get('servicoInteresse') as string,
      faturamentoMensal: formData.get('faturamentoMensal') as string,
      desafio: formData.get('desafio') as string,
      status: 'novo' as const,
    };
    
    // Save lead with automatic source tracking (localStorage backup)
    const savedLead = saveLead(leadData);
    
    console.log('✅ Lead salvo no CRM local:', savedLead);
    console.log('📊 Origem rastreada:', savedLead.source);
    
    // Tentar enviar via servidor Supabase (se configurado)
    try {
      // Importar configuração do Supabase
      const { projectId, publicAnonKey } = await import('../../utils/supabase/info');
      
      if (projectId && publicAnonKey && !projectId.includes('YOUR_') && !publicAnonKey.includes('YOUR_')) {
        // Enviar para o servidor
        const response = await fetch(`https://${projectId}.supabase.co/functions/v1/make-server-26a83c87/leads`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${publicAnonKey}`
          },
          body: JSON.stringify({
            nome: leadData.nome,
            email: leadData.email,
            telefone: leadData.telefone,
            empresa: leadData.empresa,
            nicho: leadData.nicho,
            servicoInteresse: leadData.servicoInteresse,
            faturamentoMensal: leadData.faturamentoMensal,
            desafio: leadData.desafio,
            origem: savedLead.source.type,
            origem_detalhes: JSON.stringify(savedLead.source),
          })
        });

        const result = await response.json();

        if (response.ok && result.success) {
          console.log('✅ Lead enviado e salvo no servidor:', result.lead);
          
          if (result.email?.sent) {
            console.log('✅ E-mail disparado com sucesso para angelo.venturi@venturisolutions.com.br');
            console.log('ℹ️ Para receber também em rafael.vianna@venturisolutions.com.br, verifique o domínio no Resend');
            console.log('📖 Guia completo: /VERIFICAR_DOMINIO_RESEND.md');
          } else if (result.email?.configured === false) {
            console.log('⚠️ E-mail não enviado - Configure RESEND_API_KEY no Supabase');
            console.log('📖 Guia: /CONFIGURAR_EMAIL_AGORA.md - Passo 1');
          } else if (result.email?.error) {
            console.warn('⚠️ Erro ao enviar e-mail:', result.email.error);
          }
        } else {
          console.warn('⚠️ Erro ao processar lead no servidor:', result);
          console.log('💡 Verifique se o servidor está configurado. Veja: /CONFIGURAR_EMAIL_AGORA.md');
        }
      } else {
        console.log('💡 Supabase não configurado. Lead salvo apenas no localStorage.');
        console.log('📧 Para receber notificações automáticas no e-mail, configure o Supabase.');
        console.log('📖 Guia rápido: /CONFIGURAR_EMAIL_AGORA.md (10-15 minutos)');
      }
    } catch (error) {
      console.warn('⚠️ Erro ao conectar com servidor:', error);
      console.log('💡 Lead foi salvo localmente. Para habilitar e-mails: /CONFIGURAR_EMAIL_AGORA.md');
    }
    
    // Mostrar toast de sucesso
    toast.success('Obrigado pelo interesse!', {
      description: 'Nossa equipe entrará em contato em até 15 minutos.',
    });

    // Disparar evento de conversão do Google Ads
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'conversion', {
        'send_to': 'AW-16826589939/N3biCMrd-MobEPPFxdc-'
      });
    }
    
    // Reset form
    e.currentTarget.reset();
    
    // Redirecionar para WhatsApp imediatamente
    setTimeout(() => {
      const mensagem = `Olá! Acabei de preencher o formulário no site da Venturi Solutions.%0A%0ANome: ${leadData.nome}%0AEmpresa: ${leadData.empresa || 'Não informado'}`;
      window.open(`https://wa.me/5511963144616?text=${mensagem}`, '_blank');
    }, 1000);
  };

  return (
    <section id="cta" className="relative py-16 md:py-24 px-4 md:px-6 overflow-hidden">
      
      {/* Premium Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(239, 68, 68, 0.3) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start lg:items-center">
          {/* Left Column - Premium CTA Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
            className="space-y-8"
          >
            <div className="space-y-4 md:space-y-6">
              {/* Heading */}
              <h2 className="text-3xl md:text-4xl lg:text-6xl leading-tight">
                Entre em contato para saber{' '}
                <span className="relative inline-block">
                  <span className="absolute inset-0 blur-lg bg-gradient-to-r from-primary to-red-600 opacity-20" />
                  <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-primary via-red-500 to-red-600">
                    como podemos ajudar
                  </span>
                </span>
              </h2>

              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Vamos conversar sobre como conectar o que você oferece pro mercado para quem realmente precisa e{' '}
                <span className="text-foreground font-medium">escalar suas vendas</span>.
              </p>
              
              <p className="text-base text-muted-foreground leading-relaxed pt-2">
                Agende um bate-papo com nosso time. Faremos uma{' '}
                <span className="text-foreground">análise inicial do potencial de crescimento</span> do seu negócio –{' '}
                <span className="text-foreground">sem compromisso e sem jargões</span>.
              </p>
            </div>

            {/* Premium Features */}
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              {[
                { icon: Clock, text: 'Resposta em 15min', color: 'from-primary to-red-600' },
                { icon: Shield, text: '100% Seguro', color: 'from-red-600 to-red-800' },
                { icon: Star, text: 'Conversa Gratuita', color: 'from-gray-600 to-gray-800' },
                { icon: Zap, text: 'Setup Rápido', color: 'from-red-700 to-red-900' },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="relative group"
                >
                  <div className={`absolute -inset-0.5 bg-gradient-to-r ${feature.color} rounded-xl blur-sm opacity-0 group-hover:opacity-60 transition-all`} />
                  <div className="relative glass rounded-xl p-3 md:p-4 flex items-center gap-2 md:gap-3">
                    <div className={`flex-shrink-0 w-9 h-9 md:w-10 md:h-10 rounded-lg bg-gradient-to-br ${feature.color} flex items-center justify-center`}>
                      <feature.icon className="w-4 h-4 md:w-5 md:h-5 text-white" />
                    </div>
                    <span className="text-xs md:text-sm font-medium">{feature.text}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Premium Contact Info */}
            <div className="space-y-3 pt-4 hidden lg:block">
              <a 
                href="mailto:angelo.venturi@venturisolutions.com.br"
                className="flex items-center gap-3 text-muted-foreground group hover:text-foreground transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <span className="text-sm md:text-base">angelo.venturi@venturisolutions.com.br</span>
              </a>
              <a 
                href="https://wa.me/5511963144616"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground group hover:text-foreground transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <span className="text-sm md:text-base">+55 (11) 96314-4616</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column - Premium Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
          >
            <div className="relative group">
              {/* Subtle Glow */}
              <div className="absolute -inset-2 bg-gradient-to-r from-primary to-red-600 rounded-3xl blur-xl opacity-10 group-hover:opacity-20 transition-all duration-500" />
              
              <Card className="relative glass-premium p-5 md:p-8 lg:p-10 overflow-hidden border-primary/30">
                <CornerBrackets />
                
                {/* Subtle Background Elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-2xl" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-red-800/5 to-transparent rounded-full blur-2xl" />
                
                <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6 relative z-10">
                  <div className="space-y-2 md:space-y-3">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-red-600 flex items-center justify-center">
                        <Rocket className="w-4 h-4 text-white" />
                      </div>
                      <h3 className="text-xl md:text-2xl">Agende uma Conversa</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Preencha o formulário e nossa equipe entrará em contato para um{' '}
                      <span className="text-primary font-medium">bate-papo sem compromisso</span>
                    </p>
                  </div>

                  <div className="space-y-3 md:space-y-4">
                    <div className="group">
                      <label className="text-sm mb-1.5 md:mb-2 block font-medium">Nome Completo</label>
                      <Input
                        type="text"
                        name="nome"
                        placeholder="Seu nome"
                        className="glass border-primary/30 focus:border-primary/50 h-12 md:h-12 text-base transition-all group-hover:border-primary/40"
                        required
                      />
                    </div>

                    <div className="group">
                      <label className="text-sm mb-1.5 md:mb-2 block font-medium">Email Corporativo</label>
                      <Input
                        type="email"
                        name="email"
                        placeholder="seu@email.com.br"
                        className="glass border-primary/30 focus:border-primary/50 h-12 md:h-12 text-base transition-all group-hover:border-primary/40"
                        required
                      />
                    </div>

                    <div className="group">
                      <label className="text-sm mb-1.5 md:mb-2 block font-medium">Telefone</label>
                      <Input
                        type="tel"
                        name="telefone"
                        placeholder="(11) 99999-9999"
                        className="glass border-primary/30 focus:border-primary/50 h-12 md:h-12 text-base transition-all group-hover:border-primary/40"
                        required
                      />
                    </div>

                    <div className="group">
                      <label className="text-sm mb-1.5 md:mb-2 block font-medium">Empresa</label>
                      <Input
                        type="text"
                        name="empresa"
                        placeholder="Nome da empresa"
                        className="glass border-primary/30 focus:border-primary/50 h-12 md:h-12 text-base transition-all group-hover:border-primary/40"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                      <div className="group">
                        <label className="text-sm mb-1.5 md:mb-2 block font-medium">Nicho de Atuação</label>
                        <select
                          name="nicho"
                          className="glass border-primary/30 focus:border-primary/50 h-12 md:h-12 text-base transition-all group-hover:border-primary/40 w-full rounded-md px-3 bg-background text-foreground"
                          required
                        >
                          <option value="">Selecione seu nicho</option>
                          <option value="Tecnologia">Tecnologia e Software</option>
                          <option value="Saúde">Saúde e Bem-estar</option>
                          <option value="Educação">Educação e Treinamento</option>
                          <option value="Varejo">Varejo e E-commerce</option>
                          <option value="Serviços">Serviços Profissionais</option>
                          <option value="Indústria">Indústria e Manufatura</option>
                          <option value="Construção">Construção e Imóveis</option>
                          <option value="Alimentação">Alimentação e Bebidas</option>
                          <option value="Turismo">Turismo e Hotelaria</option>
                          <option value="Financeiro">Serviços Financeiros</option>
                          <option value="Agronegócio">Agronegócio</option>
                          <option value="Logística">Logística e Transporte</option>
                          <option value="Outro">Outro</option>
                        </select>
                      </div>

                      <div className="group">
                        <label className="text-sm mb-1.5 md:mb-2 block font-medium">Serviço de Interesse</label>
                        <select
                          name="servicoInteresse"
                          className="glass border-primary/30 focus:border-primary/50 h-12 md:h-12 text-base transition-all group-hover:border-primary/40 w-full rounded-md px-3 bg-background text-foreground"
                        >
                          <option value="">Selecione</option>
                          <option value="Growth & Performance (Ads)">Growth & Performance (Ads)</option>
                          <option value="SEO Programático">SEO Programático</option>
                          <option value="Consultoria de Vendas/CRM">Consultoria de Vendas/CRM</option>
                          <option value="Automação & IA">Automação & IA</option>
                          <option value="Outro">Outro</option>
                        </select>
                      </div>
                    </div>

                    <div className="group">
                      <label className="text-sm mb-1.5 md:mb-2 block font-medium">Faturamento Mensal</label>
                      <select
                        name="faturamentoMensal"
                        className="glass border-primary/30 focus:border-primary/50 h-12 md:h-12 text-base transition-all group-hover:border-primary/40 w-full rounded-md px-3 bg-background text-foreground"
                      >
                        <option value="">Selecione</option>
                        <option value="Até R$ 50k">Até R$ 50k</option>
                        <option value="R$ 50k - R$ 100k">R$ 50k - R$ 100k</option>
                        <option value="R$ 100k - R$ 250k">R$ 100k - R$ 250k</option>
                        <option value="R$ 250k - R$ 500k">R$ 250k - R$ 500k</option>
                        <option value="R$ 500k - R$ 1M">R$ 500k - R$ 1M</option>
                        <option value="Acima de R$ 1M">Acima de R$ 1M</option>
                      </select>
                    </div>

                    <div className="group">
                      <label className="text-sm mb-1.5 md:mb-2 block font-medium">Principal Desafio</label>
                      <Textarea
                        name="desafio"
                        placeholder="Descreva brevemente seu principal desafio de crescimento..."
                        className="glass border-primary/30 focus:border-primary/50 min-h-[100px] md:min-h-[120px] text-base transition-all group-hover:border-primary/40"
                        required
                      />
                    </div>
                  </div>

                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <div className="relative group/button">
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-red-600 rounded-xl blur-sm opacity-30 group-hover/button:opacity-50 transition-all" />
                      <Button
                        type="submit"
                        className="relative w-full bg-gradient-to-r from-primary to-red-600 hover:from-red-600 hover:to-primary text-base md:text-lg py-6 md:py-7 group/button shadow-2xl"
                      >
                        <CheckCircle2 className="w-5 h-5 mr-2" />
                        <span className="hidden sm:inline">Agendar Conversa com Especialista</span>
                        <span className="sm:hidden">Agendar Conversa</span>
                        <Zap className="w-5 h-5 ml-2 group-hover/button:scale-125 group-hover/button:rotate-12 transition-all" />
                      </Button>
                    </div>
                  </motion.div>

                  <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground text-center">
                    <Shield className="w-3 h-3 flex-shrink-0" />
                    <span>Respeitamos sua privacidade. Dados protegidos e seguros.</span>
                  </div>
                </form>

                {/* Contact Info Mobile - Below form */}
                <div className="lg:hidden mt-6 space-y-3">
                  <a 
                    href="mailto:angelo.venturi@venturisolutions.com.br"
                    className="flex items-center gap-3 text-muted-foreground group hover:text-foreground transition-colors"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-sm">angelo.venturi@venturisolutions.com.br</span>
                  </a>
                  <a 
                    href="https://wa.me/5511963144616"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-muted-foreground group hover:text-foreground transition-colors"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-sm">+55 (11) 96314-4616</span>
                  </a>
                </div>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
