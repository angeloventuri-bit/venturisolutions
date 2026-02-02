import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { CheckCircle2, Rocket, Zap, Shield, X } from 'lucide-react';
import { motion } from 'motion/react';
import { saveLead } from '../utils/leadTracking';
import { toast } from 'sonner@2.0.3';

interface ContactFormDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ContactFormDialog({ open, onOpenChange }: ContactFormDialogProps) {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    
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
      const { projectId, publicAnonKey } = await import('../utils/supabase/info');
      
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
          }
        } else {
          console.warn('⚠️ Erro ao processar lead no servidor:', result);
        }
      } else {
        console.log('💡 Supabase não configurado. Lead salvo apenas no localStorage.');
      }
    } catch (error) {
      console.warn('⚠️ Erro ao conectar com servidor:', error);
      console.log('💡 Lead foi salvo localmente.');
    }
    
    // Tentar enviar via Formspree (Fallback de Email)
    try {
      await fetch('https://formspree.io/f/mzzdlwkl', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...leadData,
          origem: savedLead.source.type,
          origem_detalhes: savedLead.source,
          subject: `Novo Lead Venturi: ${leadData.nome} - ${leadData.empresa}`
        })
      });
    } catch (emailError) {
      console.warn('Falha ao enviar email via Formspree', emailError);
    }
    
    // Reset form e fechar dialog
    form.reset();
    onOpenChange(false);
    
    // Mostrar toast de sucesso com mensagem clara
    toast.success('✅ Formulário enviado com sucesso!', {
      description: 'Alguém da Venturi entrará em contato em até 15 minutos. Você será redirecionado para o WhatsApp agora.',
      duration: 5000,
    });
    
    // Disparar evento de conversão do Google Ads
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'conversion', {
        'send_to': 'AW-16826589939/N3biCMrd-MobEPPFxdc-'
      });
    }

    // Redirecionar para WhatsApp comercial imediatamente
    setTimeout(() => {
      const mensagem = `Olá! Acabei de preencher o formulário no site da Venturi Solutions.%0A%0ANome: ${leadData.nome}%0AEmpresa: ${leadData.empresa || 'Não informado'}`;
      window.open(`https://wa.me/5511963144616?text=${mensagem}`, '_blank');
    }, 800);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto glass-premium border-primary/30 p-0">
        {/* Header fixo */}
        <DialogHeader className="sticky top-0 z-50 glass-premium border-b border-primary/20 p-6">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-red-600 flex items-center justify-center flex-shrink-0">
                <Rocket className="w-5 h-5 text-white" />
              </div>
              <div>
                <DialogTitle className="text-2xl">Agende uma Conversa</DialogTitle>
                <DialogDescription className="text-sm text-muted-foreground mt-1">
                  Preencha e receba contato em <span className="text-primary font-medium">até 15 minutos</span>
                </DialogDescription>
              </div>
            </div>
          </div>
        </DialogHeader>

        {/* Formulário com scroll */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div className="group">
            <label className="text-sm mb-1.5 block font-medium">Nome Completo *</label>
            <Input
              type="text"
              name="nome"
              placeholder="Seu nome"
              className="glass border-primary/30 focus:border-primary/50 h-11 text-base transition-all group-hover:border-primary/40"
              required
            />
          </div>

          <div className="group">
            <label className="text-sm mb-1.5 block font-medium">Email Corporativo *</label>
            <Input
              type="email"
              name="email"
              placeholder="seu@email.com.br"
              className="glass border-primary/30 focus:border-primary/50 h-11 text-base transition-all group-hover:border-primary/40"
              required
            />
          </div>

          <div className="group">
            <label className="text-sm mb-1.5 block font-medium">Telefone *</label>
            <Input
              type="tel"
              name="telefone"
              placeholder="(11) 99999-9999"
              className="glass border-primary/30 focus:border-primary/50 h-11 text-base transition-all group-hover:border-primary/40"
              required
            />
          </div>

          <div className="group">
            <label className="text-sm mb-1.5 block font-medium">Empresa *</label>
            <Input
              type="text"
              name="empresa"
              placeholder="Nome da empresa"
              className="glass border-primary/30 focus:border-primary/50 h-11 text-base transition-all group-hover:border-primary/40"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="group">
              <label className="text-sm mb-1.5 block font-medium">Nicho de Atuação *</label>
              <select
                name="nicho"
                className="glass border-primary/30 focus:border-primary/50 h-11 text-base transition-all group-hover:border-primary/40 w-full rounded-md px-3 bg-background text-foreground"
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
              <label className="text-sm mb-1.5 block font-medium">Serviço de Interesse</label>
              <select
                name="servicoInteresse"
                className="glass border-primary/30 focus:border-primary/50 h-11 text-base transition-all group-hover:border-primary/40 w-full rounded-md px-3 bg-background text-foreground"
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
            <label className="text-sm mb-1.5 block font-medium">Faturamento Mensal</label>
            <select
              name="faturamentoMensal"
              className="glass border-primary/30 focus:border-primary/50 h-11 text-base transition-all group-hover:border-primary/40 w-full rounded-md px-3 bg-background text-foreground"
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
            <label className="text-sm mb-1.5 block font-medium">Principal Desafio *</label>
            <Textarea
              name="desafio"
              placeholder="Explique seus objetivos, contexto sobre sua empresa, desafios específicos e métricas de sucesso"
              className="glass border-primary/30 focus:border-primary/50 min-h-[100px] text-base transition-all group-hover:border-primary/40"
              required
            />
          </div>

          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="pt-2">
            <div className="relative group/button">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-red-600 rounded-xl blur-sm opacity-30 group-hover/button:opacity-50 transition-all" />
              <Button
                type="submit"
                className="relative w-full bg-gradient-to-r from-primary to-red-600 hover:from-red-600 hover:to-primary text-base py-6 group/button shadow-2xl"
              >
                <CheckCircle2 className="w-5 h-5 mr-2" />
                Agendar Conversa com Especialista
                <Zap className="w-5 h-5 ml-2 group-hover/button:scale-125 group-hover/button:rotate-12 transition-all" />
              </Button>
            </div>
          </motion.div>

          <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground text-center pt-2">
            <Shield className="w-3 h-3 flex-shrink-0" />
            <span>Respeitamos sua privacidade. Dados protegidos e seguros.</span>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
