import { motion } from 'motion/react';
import { Shield, Lock, Eye, FileText, Mail, Phone } from 'lucide-react';
import { Navigation } from '../sections/Navigation';
import { Footer } from '../sections/Footer';
import { SEOHead } from '../utils/SEOHead';

export function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Política de Privacidade | Venturi Solutions"
        description="Conheça nossa política de privacidade e como protegemos seus dados de acordo com a LGPD."
        keywords={['política de privacidade', 'LGPD', 'proteção de dados', 'privacidade']}
        canonicalUrl="https://venturisolutions.com.br/privacidade"
      />

      <Navigation />

      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 border border-primary/20 rounded-2xl mb-6">
              <Shield className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-6xl mb-4">Política de Privacidade</h1>
            <p className="text-muted-foreground text-lg">
              Última atualização: 20 de Janeiro de 2025
            </p>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="prose prose-invert prose-lg max-w-none"
          >
            <div className="space-y-8">
              {/* Introdução */}
              <section>
                <div className="flex items-start gap-3 mb-4">
                  <FileText className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-2xl mb-3">1. Introdução</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      A Venturi Solutions está comprometida em proteger a privacidade e segurança dos dados pessoais de seus clientes, visitantes e usuários. Esta Política de Privacidade descreve como coletamos, usamos, armazenamos e protegemos suas informações pessoais em conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018).
                    </p>
                  </div>
                </div>
              </section>

              {/* Dados Coletados */}
              <section>
                <div className="flex items-start gap-3 mb-4">
                  <Eye className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-2xl mb-3">2. Dados Coletados</h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Coletamos as seguintes informações quando você utiliza nossos serviços:
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li><strong>Dados de Identificação:</strong> Nome, e-mail, telefone, empresa</li>
                      <li><strong>Dados de Navegação:</strong> IP, cookies, páginas visitadas, tempo de permanência</li>
                      <li><strong>Dados de Origem:</strong> Como você chegou ao nosso site (orgânico, anúncios, UTMs)</li>
                      <li><strong>Dados Comerciais:</strong> Informações sobre interesse em serviços, orçamentos solicitados</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Finalidade */}
              <section>
                <div className="flex items-start gap-3 mb-4">
                  <FileText className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-2xl mb-3">3. Finalidade do Tratamento</h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Utilizamos seus dados para:
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>✅ Responder suas solicitações de contato e orçamentos</li>
                      <li>✅ Prestar serviços de marketing digital contratados</li>
                      <li>✅ Enviar comunicações sobre nossos serviços (com seu consentimento)</li>
                      <li>✅ Melhorar a experiência de navegação no site</li>
                      <li>✅ Gerar relatórios analíticos e métricas de performance</li>
                      <li>✅ Cumprir obrigações legais e regulatórias</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Compartilhamento */}
              <section>
                <div className="flex items-start gap-3 mb-4">
                  <Lock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-2xl mb-3">4. Compartilhamento de Dados</h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Seus dados podem ser compartilhados com:
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li><strong>Fornecedores de Tecnologia:</strong> Cloudflare, Google Analytics, Meta Pixel (para analytics e otimização)</li>
                      <li><strong>Plataformas de Comunicação:</strong> WhatsApp (para atendimento comercial)</li>
                      <li><strong>Autoridades Legais:</strong> Quando exigido por lei ou ordem judicial</li>
                    </ul>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      <strong>Não vendemos nem alugamos seus dados pessoais para terceiros.</strong>
                    </p>
                  </div>
                </div>
              </section>

              {/* Segurança */}
              <section>
                <div className="flex items-start gap-3 mb-4">
                  <Shield className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-2xl mb-3">5. Segurança dos Dados</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      Implementamos medidas técnicas e organizacionais de segurança para proteger seus dados contra acesso não autorizado, perda, destruição ou alteração. Isso inclui:
                    </p>
                    <ul className="space-y-2 text-muted-foreground mt-4">
                      <li>🔒 Criptografia SSL/TLS em todas as comunicações</li>
                      <li>🔒 Armazenamento seguro em servidores protegidos</li>
                      <li>🔒 Controles de acesso restrito aos dados</li>
                      <li>🔒 Monitoramento contínuo de segurança</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Direitos do Titular */}
              <section>
                <div className="flex items-start gap-3 mb-4">
                  <FileText className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-2xl mb-3">6. Seus Direitos (LGPD)</h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      De acordo com a LGPD, você tem direito a:
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>📋 <strong>Confirmação:</strong> Saber se tratamos seus dados</li>
                      <li>🔍 <strong>Acesso:</strong> Solicitar cópia dos seus dados</li>
                      <li>✏️ <strong>Correção:</strong> Corrigir dados incompletos ou desatualizados</li>
                      <li>🗑️ <strong>Exclusão:</strong> Solicitar exclusão dos seus dados</li>
                      <li>🚫 <strong>Oposição:</strong> Opor-se ao tratamento dos seus dados</li>
                      <li>📤 <strong>Portabilidade:</strong> Solicitar transferência dos dados para outro fornecedor</li>
                      <li>❌ <strong>Revogação:</strong> Revogar consentimento a qualquer momento</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Cookies */}
              <section>
                <div className="flex items-start gap-3 mb-4">
                  <Eye className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-2xl mb-3">7. Cookies e Tecnologias</h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Utilizamos cookies e tecnologias semelhantes para:
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>🍪 Melhorar a experiência de navegação</li>
                      <li>📊 Analisar o tráfego e comportamento dos visitantes</li>
                      <li>🎯 Personalizar conteúdo e anúncios</li>
                      <li>💾 Armazenar preferências do usuário</li>
                    </ul>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      Você pode gerenciar cookies através das configurações do seu navegador.
                    </p>
                  </div>
                </div>
              </section>

              {/* Retenção */}
              <section>
                <div className="flex items-start gap-3 mb-4">
                  <FileText className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-2xl mb-3">8. Retenção de Dados</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      Mantemos seus dados pessoais apenas pelo tempo necessário para cumprir as finalidades descritas nesta política ou conforme exigido por lei. Após esse período, os dados são excluídos ou anonimizados de forma segura.
                    </p>
                  </div>
                </div>
              </section>

              {/* Alterações */}
              <section>
                <div className="flex items-start gap-3 mb-4">
                  <FileText className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-2xl mb-3">9. Alterações na Política</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      Esta Política de Privacidade pode ser atualizada periodicamente. A data da última atualização está indicada no início deste documento. Recomendamos que você revise esta política regularmente.
                    </p>
                  </div>
                </div>
              </section>

              {/* Contato */}
              <section className="mt-12 p-6 bg-primary/5 border border-primary/10 rounded-xl">
                <h2 className="text-2xl mb-4 flex items-center gap-2">
                  <Mail className="w-6 h-6 text-primary" />
                  10. Contato - Encarregado de Dados (DPO)
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Para exercer seus direitos ou esclarecer dúvidas sobre privacidade, entre em contato:
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                    <a href="mailto:privacidade@venturisolutions.com.br" className="text-primary hover:underline">
                      privacidade@venturisolutions.com.br
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                    <a href="tel:+5511963144616" className="text-primary hover:underline">
                      +55 11 96314-4616
                    </a>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  <strong>Venturi Solutions</strong><br />
                  CNPJ: [SEU_CNPJ_AQUI]<br />
                  São Paulo - SP, Brasil
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
