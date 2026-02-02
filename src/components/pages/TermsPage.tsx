import { motion } from 'motion/react';
import { FileText, AlertCircle, CheckCircle, XCircle, Scale } from 'lucide-react';
import { Navigation } from '../sections/Navigation';
import { Footer } from '../sections/Footer';
import { SEOHead } from '../utils/SEOHead';

export function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Termos de Uso | Venturi Solutions"
        description="Conheça os termos de uso dos serviços da Venturi Solutions."
        keywords={['termos de uso', 'termos de serviço', 'condições de uso']}
        canonicalUrl="https://venturisolutions.com.br/termos"
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
              <Scale className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-6xl mb-4">Termos de Uso</h1>
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
              {/* Aceitação */}
              <section>
                <div className="flex items-start gap-3 mb-4">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-2xl mb-3">1. Aceitação dos Termos</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      Ao acessar e utilizar os serviços da Venturi Solutions, você concorda com os termos e condições aqui estabelecidos. Se você não concorda com qualquer parte destes termos, não deve utilizar nossos serviços.
                    </p>
                  </div>
                </div>
              </section>

              {/* Serviços */}
              <section>
                <div className="flex items-start gap-3 mb-4">
                  <FileText className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-2xl mb-3">2. Descrição dos Serviços</h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      A Venturi Solutions oferece serviços de marketing digital, incluindo:
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>🚀 Desenvolvimento de Sites e E-commerce</li>
                      <li>📊 Gestão de Anúncios (Google Ads, Facebook Ads)</li>
                      <li>🔍 SEO e GEO (Otimização para Buscadores e IA)</li>
                      <li>🤖 Consultoria em Inteligência Artificial</li>
                      <li>🎓 Treinamentos e Capacitação</li>
                      <li>🔧 Reestruturação de Marketing</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Responsabilidades do Cliente */}
              <section>
                <div className="flex items-start gap-3 mb-4">
                  <AlertCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-2xl mb-3">3. Responsabilidades do Cliente</h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Ao contratar nossos serviços, o cliente compromete-se a:
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>✅ Fornecer informações precisas e atualizadas</li>
                      <li>✅ Fornecer acesso necessário às plataformas (Google Ads, Facebook, site, etc.)</li>
                      <li>✅ Responder solicitações em tempo hábil</li>
                      <li>✅ Realizar pagamentos conforme acordado</li>
                      <li>✅ Não utilizar os serviços para fins ilegais ou antiéticos</li>
                      <li>✅ Respeitar direitos autorais e propriedade intelectual</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Responsabilidades Venturi */}
              <section>
                <div className="flex items-start gap-3 mb-4">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-2xl mb-3">4. Responsabilidades da Venturi</h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      A Venturi Solutions compromete-se a:
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>✅ Prestar serviços com qualidade e profissionalismo</li>
                      <li>✅ Manter confidencialidade das informações do cliente</li>
                      <li>✅ Fornecer relatórios periódicos de performance</li>
                      <li>✅ Seguir as melhores práticas do mercado</li>
                      <li>✅ Cumprir prazos estabelecidos em contrato</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Pagamentos */}
              <section>
                <div className="flex items-start gap-3 mb-4">
                  <FileText className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-2xl mb-3">5. Pagamentos e Reembolsos</h2>
                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                      <p>
                        <strong>5.1 Pagamento:</strong> Os valores e formas de pagamento são estabelecidos em contrato específico. O não pagamento pode resultar em suspensão dos serviços.
                      </p>
                      <p>
                        <strong>5.2 Reembolso:</strong> Solicitações de reembolso serão avaliadas caso a caso. Serviços já prestados não são reembolsáveis.
                      </p>
                      <p>
                        <strong>5.3 Investimento em Mídia:</strong> Valores investidos em plataformas de anúncios (Google, Meta, etc.) são pagos diretamente pelo cliente às plataformas e não são reembolsáveis pela Venturi.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Resultados */}
              <section>
                <div className="flex items-start gap-3 mb-4">
                  <AlertCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-2xl mb-3">6. Garantias e Resultados</h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      <strong>Importante:</strong> Embora trabalhemos com estratégias comprovadas e melhores práticas:
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>⚠️ Não garantimos resultados específicos de vendas ou conversões</li>
                      <li>⚠️ Resultados em marketing digital dependem de múltiplos fatores (mercado, concorrência, orçamento, produto, etc.)</li>
                      <li>⚠️ SEO e resultados orgânicos requerem tempo (3-6 meses para resultados significativos)</li>
                      <li>✅ Garantimos esforço profissional, relatórios transparentes e atualizações regulares</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Propriedade Intelectual */}
              <section>
                <div className="flex items-start gap-3 mb-4">
                  <Scale className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-2xl mb-3">7. Propriedade Intelectual</h2>
                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                      <p>
                        <strong>7.1 Conteúdo do Cliente:</strong> Todo conteúdo fornecido pelo cliente permanece de propriedade do cliente.
                      </p>
                      <p>
                        <strong>7.2 Material Criado:</strong> Sites, criativos, campanhas e conteúdos criados pela Venturi tornam-se propriedade do cliente após pagamento integral, salvo acordo contrário.
                      </p>
                      <p>
                        <strong>7.3 Portfólio:</strong> A Venturi reserva-se o direito de incluir projetos em seu portfólio comercial, salvo acordo de confidencialidade específico.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Confidencialidade */}
              <section>
                <div className="flex items-start gap-3 mb-4">
                  <FileText className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-2xl mb-3">8. Confidencialidade</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      Todas as informações comerciais, estratégias e dados compartilhados entre as partes serão mantidos em confidencialidade. Nenhuma das partes deve divulgar informações confidenciais a terceiros sem autorização prévia.
                    </p>
                  </div>
                </div>
              </section>

              {/* Rescisão */}
              <section>
                <div className="flex items-start gap-3 mb-4">
                  <XCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-2xl mb-3">9. Rescisão de Contrato</h2>
                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                      <p>
                        <strong>9.1 Pelo Cliente:</strong> O cliente pode solicitar rescisão com aviso prévio de 30 dias. Valores já pagos por serviços prestados não são reembolsáveis.
                      </p>
                      <p>
                        <strong>9.2 Pela Venturi:</strong> A Venturi pode rescindir o contrato em caso de não pagamento, violação dos termos ou comportamento inadequado do cliente.
                      </p>
                      <p>
                        <strong>9.3 Obrigações Pós-Rescisão:</strong> Após rescisão, a Venturi entregará todos os materiais e acessos do cliente em até 15 dias úteis.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Limitação de Responsabilidade */}
              <section>
                <div className="flex items-start gap-3 mb-4">
                  <AlertCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-2xl mb-3">10. Limitação de Responsabilidade</h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      A Venturi Solutions não se responsabiliza por:
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>❌ Suspensão ou banimento de contas em plataformas de terceiros (Google, Meta, etc.)</li>
                      <li>❌ Alterações de algoritmos ou políticas de plataformas</li>
                      <li>❌ Perda de dados causada por problemas técnicos de terceiros</li>
                      <li>❌ Resultados negativos decorrentes de informações incorretas fornecidas pelo cliente</li>
                      <li>❌ Lucros cessantes ou danos indiretos</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Modificações */}
              <section>
                <div className="flex items-start gap-3 mb-4">
                  <FileText className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-2xl mb-3">11. Modificações dos Termos</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      A Venturi Solutions reserva-se o direito de modificar estes termos a qualquer momento. Alterações significativas serão comunicadas por e-mail. O uso continuado dos serviços após modificações constitui aceitação dos novos termos.
                    </p>
                  </div>
                </div>
              </section>

              {/* Lei Aplicável */}
              <section>
                <div className="flex items-start gap-3 mb-4">
                  <Scale className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-2xl mb-3">12. Lei Aplicável</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      Estes termos são regidos pelas leis da República Federativa do Brasil. Quaisquer disputas serão resolvidas no foro da comarca de São Paulo - SP.
                    </p>
                  </div>
                </div>
              </section>

              {/* Contato */}
              <section className="mt-12 p-6 bg-primary/5 border border-primary/10 rounded-xl">
                <h2 className="text-2xl mb-4">13. Contato</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Para dúvidas sobre estes termos, entre em contato:
                </p>
                <div className="space-y-2 text-muted-foreground">
                  <p><strong>Venturi Solutions</strong></p>
                  <p>E-mail: contato@venturisolutions.com.br</p>
                  <p>WhatsApp: +55 11 96314-4616</p>
                  <p>CNPJ: [SEU_CNPJ_AQUI]</p>
                  <p>São Paulo - SP, Brasil</p>
                </div>
              </section>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
