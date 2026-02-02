import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, MessageCircle, ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';
import { saveLead } from '../../utils/leadTracking';

export function ExitIntentPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    // Check if already shown in this session
    const shownInSession = sessionStorage.getItem('venturi_exit_popup_shown');
    if (shownInSession) {
      setHasShown(true);
      return;
    }

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        if (!hasShown && !sessionStorage.getItem('venturi_exit_popup_shown')) {
          setIsVisible(true);
          setHasShown(true);
          sessionStorage.setItem('venturi_exit_popup_shown', 'true');
        }
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [hasShown]);

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleWhatsAppClick = () => {
    // Save simple lead tracking event
    try {
      saveLead({
        nome: 'Visitante Exit Intent',
        email: 'nao-informado@exit-intent.com',
        empresa: 'Não informado',
        desafio: 'Clicou no WhatsApp do Exit Popup',
        servicoInteresse: 'Exit Intent Popup',
        status: 'novo'
      });
    } catch (err) {
      console.error('Error saving lead:', err);
    }

    // Construct WhatsApp message with placeholders
    const message = `Olá! Estava saindo do site mas decidi agendar uma reunião breve.%0A%0A` +
      `*Nome:* (digite seu nome)%0A` +
      `*Email:* (digite seu email)%0A` +
      `*Empresa:* (digite sua empresa)%0A` +
      `*Dor/Desafio:* (como podemos ajudar?)`;
    
    const whatsappUrl = `https://wa.me/5511963144616?text=${message}`;
    
    // Redirect to WhatsApp
    window.open(whatsappUrl, '_blank');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-md bg-background border border-primary/20 rounded-2xl shadow-2xl overflow-hidden"
          >
            {/* Decorator */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-red-600" />
            
            {/* Close Button */}
            <button 
              onClick={handleClose}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-muted transition-colors text-muted-foreground hover:text-foreground z-10"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="p-6 sm:p-8">
              <div className="mb-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                  <MessageCircle className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold mb-2">Espere! Não vá embora ainda...</h2>
                <p className="text-muted-foreground">
                  Você está a um passo de perder a oportunidade de conhecer as soluções da Venturi. 
                  Marque uma reunião breve para saber como podemos auxiliar.
                </p>
              </div>

              <div className="space-y-4">
                <Button 
                  onClick={handleWhatsAppClick}
                  className="w-full bg-gradient-to-r from-primary to-red-600 hover:from-red-600 hover:to-primary text-white font-medium py-6 mt-2 group"
                >
                  <span className="mr-2">Agendar reunião breve no WhatsApp</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                
                <p className="text-xs text-center text-muted-foreground mt-4">
                  Prometemos não enviar spam. Sua mensagem vai direto para nosso time comercial.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
