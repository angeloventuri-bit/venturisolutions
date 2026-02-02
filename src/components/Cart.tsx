import { useCart } from './CartContext';
import { ShoppingCart, Trash2, Download, Mail, Gift, TrendingDown, Sparkles, Repeat, Zap } from 'lucide-react';
import { Button } from './ui/button';
import { motion, AnimatePresence } from 'motion/react';

export function Cart() {
  const { 
    items, 
    removeItem, 
    clearCart, 
    recorrenteItems,
    unicoItems,
    subtotalRecorrente,
    subtotalUnico,
    subtotal, 
    discount, 
    discountPercentage, 
    totalRecorrente,
    totalUnico,
    total 
  } = useCart();

  // Don't render if cart is empty
  if (items.length === 0) {
    return null;
  }

  const generateProposal = () => {
    const proposalText = `
PROPOSTA COMERCIAL - VENTURI SOLUTIONS
========================================

SERVIÇOS RECORRENTES (Mensalidade):
${recorrenteItems.length > 0 ? recorrenteItems.map((item, i) => `
${i + 1}. ${item.category} - ${item.tier}
   ${item.name}
   ${item.type === 'variable' ? `Modelo Variável: ${item.variableDetails}` : 'Modelo Fixo'}
   Valor: R$ ${item.price.toLocaleString('pt-BR')}/mês
`).join('') : 'Nenhum serviço recorrente selecionado\n'}

PAGAMENTOS ÚNICOS:
${unicoItems.length > 0 ? unicoItems.map((item, i) => `
${i + 1}. ${item.category} - ${item.tier}
   ${item.name}
   Valor: R$ ${item.price.toLocaleString('pt-BR')}${item.splitPayment ? ' (50% sinal + 50% entrega)' : ''}
`).join('') : 'Nenhum pagamento único selecionado\n'}

RESUMO FINANCEIRO:
Subtotal Recorrente: R$ ${subtotalRecorrente.toLocaleString('pt-BR')}/mês
Subtotal Único: R$ ${subtotalUnico.toLocaleString('pt-BR')}
${discountPercentage > 0 ? `Desconto Combo (${discountPercentage}%): -R$ ${discount.toLocaleString('pt-BR')}` : ''}

INVESTIMENTO TOTAL:
Recorrente/Mês: R$ ${totalRecorrente.toLocaleString('pt-BR')}
Pagamento Único: R$ ${totalUnico.toLocaleString('pt-BR')}

---
Venturi Solutions - Value as a Service
Contato: angelo.venturi@venturisolutions.com.br
WhatsApp: +55 (11) 96314-4616
    `.trim();

    const blob = new Blob([proposalText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'proposta-venturi-solutions.txt';
    a.click();
    URL.revokeObjectURL(url);
  };

  const sendEmail = () => {
    const subject = 'Proposta Comercial - Venturi Solutions';
    const body = `
Olá!

Gostaria de solicitar uma proposta para os seguintes serviços:

RECORRENTES:
${recorrenteItems.map((item, i) => `${i + 1}. ${item.category} - ${item.tier} (R$ ${item.price.toLocaleString('pt-BR')}/mês)`).join('\n')}

ÚNICOS:
${unicoItems.map((item, i) => `${i + 1}. ${item.category} - ${item.tier} (R$ ${item.price.toLocaleString('pt-BR')}${item.splitPayment ? ' - 50% sinal + 50% entrega' : ''})`).join('\n')}

Investimento Recorrente/Mês: R$ ${totalRecorrente.toLocaleString('pt-BR')}
Investimento Único: R$ ${totalUnico.toLocaleString('pt-BR')}

Aguardo retorno.

Atenciosamente.
    `.trim();

    window.location.href = `mailto:angelo.venturi@venturisolutions.com.br?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <motion.div 
      initial={{ x: 420, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 420, opacity: 0 }}
      transition={{ type: "spring", damping: 25, stiffness: 200 }}
      className="hidden lg:flex fixed right-0 top-0 h-screen w-[420px] bg-gradient-to-b from-background via-background to-primary/5 border-l-2 border-primary/30 shadow-2xl overflow-hidden z-30"
    >
      {/* Glow Effect */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow pointer-events-none" />
      
      <div className="relative h-full flex flex-col">
        {/* Header */}
        <div className="p-6 border-b border-primary/20 glass-premium">
          <div className="flex items-center gap-3 mb-2">
            <div className="relative">
              <div className="absolute -inset-1 bg-primary/30 rounded-lg blur" />
              <div className="relative bg-gradient-to-br from-primary to-red-600 p-2 rounded-lg">
                <ShoppingCart className="w-6 h-6 text-white" />
              </div>
            </div>
            <div>
              <h2 className="text-2xl text-white">Carrinho</h2>
              <p className="text-sm text-gray-400">
                {items.length} {items.length === 1 ? 'produto' : 'produtos'}
              </p>
            </div>
          </div>

          {/* Discount Badge */}
          <AnimatePresence>
            {discountPercentage > 0 && (
              <motion.div 
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                className="mt-4 relative"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg blur opacity-30 animate-pulse-glow" />
                <div className="relative glass-premium px-3 py-2 rounded-lg border border-green-500/30 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-green-400 animate-pulse" />
                  <span className="text-sm text-green-400">
                    Desconto de {discountPercentage}% aplicado!
                  </span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Discount Tiers Info */}
        {items.length > 0 && (
          <div className="px-6 py-4 bg-gradient-to-r from-primary/5 to-transparent border-b border-primary/10">
            <div className="flex items-center gap-2 mb-2">
              <TrendingDown className="w-4 h-4 text-primary" />
              <span className="text-xs text-gray-400 uppercase tracking-wider">Descontos Progressivos</span>
            </div>
            <div className="space-y-1 text-xs">
              <div className={`flex justify-between transition-colors ${items.length >= 2 ? 'text-green-400' : items.length === 1 ? 'text-primary' : 'text-gray-500'}`}>
                <span>2 produtos:</span>
                <span className="flex items-center gap-1">
                  5% de desconto
                  {items.length === 1 && <Sparkles className="w-3 h-3 animate-pulse" />}
                </span>
              </div>
              <div className={`flex justify-between transition-colors ${items.length >= 3 ? 'text-green-400' : items.length === 2 ? 'text-primary' : 'text-gray-500'}`}>
                <span>3 produtos:</span>
                <span className="flex items-center gap-1">
                  10% de desconto
                  {items.length === 2 && <Sparkles className="w-3 h-3 animate-pulse" />}
                </span>
              </div>
              <div className={`flex justify-between transition-colors ${items.length >= 4 ? 'text-green-400' : items.length === 3 ? 'text-primary' : 'text-gray-500'}`}>
                <span>4+ produtos:</span>
                <span className="flex items-center gap-1">
                  15% de desconto
                  {items.length === 3 && <Sparkles className="w-3 h-3 animate-pulse" />}
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Items List */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* Recorrentes */}
          {recorrenteItems.length > 0 && (
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Repeat className="w-4 h-4 text-primary" />
                <h3 className="text-sm text-gray-400 uppercase tracking-wider">Recorrente</h3>
              </div>
              <div className="space-y-3">
                <AnimatePresence mode="popLayout">
                  {recorrenteItems.map((item) => (
                    <motion.div 
                      key={`recorrente-${item.id}`} 
                          layout
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          className="relative group"
                        >
                          <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-red-600/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity blur" />
                          <div className="relative glass-premium p-4 rounded-xl border border-primary/20 hover:border-primary/40 transition-all">
                            <div className="flex justify-between items-start mb-2">
                              <div className="flex-1">
                                <div className="flex items-center gap-2 mb-1">
                                  <span className="text-xs px-2 py-0.5 rounded-full bg-primary/20 text-primary border border-primary/30">
                                    {item.tier}
                                  </span>
                                  <span className="text-xs px-2 py-0.5 rounded-full bg-gray-800 text-gray-400">
                                    {item.type === 'variable' ? 'Variável' : 'Fixo'}
                                  </span>
                                </div>
                                <h4 className="text-white text-sm mb-1">{item.category}</h4>
                                <p className="text-xs text-gray-400">{item.name}</p>
                                {item.variableDetails && (
                                  <p className="text-xs text-gray-500 mt-1">{item.variableDetails}</p>
                                )}
                              </div>
                              <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => removeItem(item.id)}
                                className="hover:bg-destructive/10 hover:text-destructive ml-2 h-8 w-8"
                              >
                                <Trash2 className="w-3 h-3" />
                              </Button>
                            </div>
                            <div className="flex justify-between items-center pt-2 border-t border-primary/10">
                              <span className="text-xs text-gray-400">Valor mensal:</span>
                              <span className="text-lg text-primary">
                                R$ {item.price.toLocaleString('pt-BR')}
                              </span>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                </AnimatePresence>
              </div>
            </div>
          )}

          {/* Únicos */}
          {unicoItems.length > 0 && (
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Zap className="w-4 h-4 text-primary" />
                <h3 className="text-sm text-gray-400 uppercase tracking-wider">Pagamento Único</h3>
              </div>
              <div className="space-y-3">
                <AnimatePresence mode="popLayout">
                  {unicoItems.map((item) => (
                    <motion.div 
                      key={`unico-${item.id}`} 
                          layout
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          className="relative group"
                        >
                          <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-red-600/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity blur" />
                          <div className="relative glass-premium p-4 rounded-xl border border-primary/20 hover:border-primary/40 transition-all">
                            <div className="flex justify-between items-start mb-2">
                              <div className="flex-1">
                                <div className="flex items-center gap-2 mb-1">
                                  <span className="text-xs px-2 py-0.5 rounded-full bg-primary/20 text-primary border border-primary/30">
                                    {item.tier}
                                  </span>
                                  {item.splitPayment && (
                                    <span className="text-xs px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/30">
                                      50% + 50%
                                    </span>
                                  )}
                                </div>
                                <h4 className="text-white text-sm mb-1">{item.category}</h4>
                                <p className="text-xs text-gray-400">{item.name}</p>
                                {item.splitPayment && (
                                  <p className="text-xs text-blue-400 mt-1">50% sinal + 50% na entrega</p>
                                )}
                              </div>
                              <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => removeItem(item.id)}
                                className="hover:bg-destructive/10 hover:text-destructive ml-2 h-8 w-8"
                              >
                                <Trash2 className="w-3 h-3" />
                              </Button>
                            </div>
                            <div className="flex justify-between items-center pt-2 border-t border-primary/10">
                              <span className="text-xs text-gray-400">Valor total:</span>
                              <span className="text-lg text-primary">
                                R$ {item.price.toLocaleString('pt-BR')}
                              </span>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                </AnimatePresence>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
          <div className="p-6 border-t border-primary/20 glass-premium space-y-4">
            {/* Totals */}
            <div className="space-y-3">
              {recorrenteItems.length > 0 && (
                <div className="space-y-1">
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>Subtotal Recorrente:</span>
                    <span>R$ {subtotalRecorrente.toLocaleString('pt-BR')}</span>
                  </div>
                </div>
              )}
              
              {unicoItems.length > 0 && (
                <div className="space-y-1">
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>Subtotal Único:</span>
                    <span>R$ {subtotalUnico.toLocaleString('pt-BR')}</span>
                  </div>
                </div>
              )}

              <AnimatePresence>
                {discountPercentage > 0 && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="flex justify-between text-sm overflow-hidden pt-2 border-t border-gray-800"
                  >
                    <span className="text-green-400 flex items-center gap-1">
                      <Gift className="w-3 h-3" />
                      Desconto ({discountPercentage}%):
                    </span>
                    <span className="text-green-400">-R$ {discount.toLocaleString('pt-BR')}</span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Totals with Discount Applied */}
              <div className="pt-3 border-t border-gray-800 space-y-2">
                {recorrenteItems.length > 0 && (
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <Repeat className="w-4 h-4 text-primary" />
                      <span className="text-white">Total/Mês:</span>
                    </div>
                    <span className="text-2xl text-primary text-glow">
                      R$ {totalRecorrente.toLocaleString('pt-BR')}
                    </span>
                  </div>
                )}

                {unicoItems.length > 0 && (
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <Zap className="w-4 h-4 text-primary" />
                      <span className="text-white">Único:</span>
                    </div>
                    <span className="text-2xl text-primary text-glow">
                      R$ {totalUnico.toLocaleString('pt-BR')}
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Actions */}
            <div className="grid grid-cols-2 gap-3">
              <Button
                variant="outline"
                onClick={generateProposal}
                className="glass border-primary/30 hover:border-primary/50 hover:bg-primary/10"
              >
                <Download className="w-4 h-4 mr-2" />
                Baixar
              </Button>
              <Button
                onClick={sendEmail}
                className="bg-gradient-to-r from-primary to-red-600 hover:from-primary/90 hover:to-red-600/90 shadow-lg"
              >
                <Mail className="w-4 h-4 mr-2" />
                Enviar
              </Button>
            </div>

            <Button
              variant="ghost"
              onClick={clearCart}
              className="w-full text-gray-400 hover:text-destructive hover:bg-destructive/10"
            >
              <Trash2 className="w-4 h-4 mr-2" />
              Limpar Carrinho
            </Button>

            <p className="text-xs text-gray-500 text-center">
              * Valores podem variar conforme customização
            </p>
          </div>
      </div>
    </motion.div>
  );
}
