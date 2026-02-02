// ═══════════════════════════════════════════════════════════════
// 🧪 TESTE COMPLETO DO SISTEMA DE E-MAIL - VENTURI SOLUTIONS
// ═══════════════════════════════════════════════════════════════
// 
// COMO USAR:
// 1. Abra o console do navegador (F12)
// 2. Copie TUDO deste arquivo
// 3. Cole no console e pressione Enter
// 4. Aguarde o resultado (10-15 segundos)
//
// O script vai testar:
// ✅ Conectividade com servidor
// ✅ Credenciais do Supabase
// ✅ Criação de lead de teste
// ✅ Envio de e-mail
// ✅ Configuração da RESEND_API_KEY
//
// ═══════════════════════════════════════════════════════════════

(async () => {
  // Configuração
  const CONFIG = {
    projectId: 'jfvcpopsllpidknprmvj',
    anonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpmdmNwb3BzbGxwaWRrbnBybXZqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjIyNjI3NjYsImV4cCI6MjA3NzgzODc2Nn0.FhpNDH3oeM8GtGQkwq69PbNXsWy_4HVW33IIeNLmgFE',
    healthUrl: 'https://jfvcpopsllpidknprmvj.supabase.co/functions/v1/make-server-26a83c87/health',
    leadsUrl: 'https://jfvcpopsllpidknprmvj.supabase.co/functions/v1/make-server-26a83c87/leads'
  };

  // Estilos para console
  const STYLES = {
    title: 'background: linear-gradient(135deg, #8B1538, #6B0F2A); color: white; padding: 10px 20px; font-size: 16px; font-weight: bold; border-radius: 4px;',
    success: 'color: #22c55e; font-weight: bold; font-size: 14px;',
    error: 'color: #ef4444; font-weight: bold; font-size: 14px;',
    warning: 'color: #f59e0b; font-weight: bold; font-size: 14px;',
    info: 'color: #3b82f6; font-weight: bold; font-size: 14px;',
    section: 'color: #8B1538; font-weight: bold; font-size: 14px;',
    code: 'background: #1a1a1a; color: #22c55e; padding: 2px 6px; border-radius: 3px; font-family: monospace;'
  };

  // Função para log estilizado
  const log = {
    title: (msg) => console.log(`%c${msg}`, STYLES.title),
    success: (msg) => console.log(`%c✅ ${msg}`, STYLES.success),
    error: (msg) => console.log(`%c❌ ${msg}`, STYLES.error),
    warning: (msg) => console.log(`%c⚠️  ${msg}`, STYLES.warning),
    info: (msg) => console.log(`%c💡 ${msg}`, STYLES.info),
    section: (msg) => console.log(`\n%c${msg}`, STYLES.section),
    code: (msg) => console.log(`%c${msg}`, STYLES.code),
    separator: () => console.log('\n' + '═'.repeat(60) + '\n')
  };

  // Início do teste
  log.separator();
  log.title('🧪 TESTE COMPLETO DO SISTEMA DE E-MAIL');
  log.separator();

  // Teste 1: Health Check
  log.section('📋 TESTE 1: Verificando servidor...');
  
  try {
    const healthResponse = await fetch(CONFIG.healthUrl, {
      headers: {
        'Authorization': `Bearer ${CONFIG.anonKey}`
      }
    });
    
    if (healthResponse.ok) {
      const healthData = await healthResponse.json();
      log.success('Servidor está online e respondendo');
      log.code(`Status: ${healthData.status}`);
    } else {
      log.error('Servidor retornou erro');
      log.code(`Status HTTP: ${healthResponse.status}`);
      throw new Error('Health check failed');
    }
  } catch (error) {
    log.error('Não foi possível conectar ao servidor');
    log.code(`Erro: ${error.message}`);
    log.warning('Verifique:');
    console.log('   • Conexão com internet');
    console.log('   • URL do servidor está correta');
    console.log('   • Edge Function está deployada');
    log.separator();
    return;
  }

  // Teste 2: Criar Lead
  log.section('📋 TESTE 2: Criando lead de teste...');
  
  const testLead = {
    nome: 'Teste Sistema',
    email: 'angelo.venturi@venturisolutions.com.br',
    telefone: '(11) 96314-4616',
    empresa: 'Validação Automática',
    desafio: 'Testar sistema de notificações por e-mail',
    origem: 'automated_test',
    origem_detalhes: JSON.stringify({
      type: 'oneliner_validation',
      timestamp: new Date().toISOString(),
      browser: navigator.userAgent.split(' ').pop()
    })
  };

  try {
    const leadResponse = await fetch(CONFIG.leadsUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${CONFIG.anonKey}`
      },
      body: JSON.stringify(testLead)
    });

    const leadResult = await leadResponse.json();

    if (leadResponse.ok && leadResult.success) {
      log.success('Lead criado com sucesso!');
      log.code(`ID: ${leadResult.lead?.id}`);
      log.code(`Nome: ${leadResult.lead?.nome}`);
      
      // Teste 3: Verificar E-mail
      log.section('📋 TESTE 3: Verificando envio de e-mail...');
      
      if (leadResult.email) {
        const emailStatus = leadResult.email;
        
        // Verificar se está configurado
        if (emailStatus.configured === false) {
          log.error('RESEND_API_KEY não está configurada!');
          log.separator();
          log.warning('🔧 PRÓXIMOS PASSOS:');
          console.log('\n1. Acesse: https://resend.com/api-keys');
          console.log('2. Crie uma nova API Key');
          console.log('   • Nome: "Venturi Solutions"');
          console.log('   • Permissão: Sending access');
          console.log('3. Copie a chave (começa com "re_")');
          console.log('4. Configure no Supabase:');
          console.log('   • Dashboard → Settings → Secrets');
          console.log('   • New Secret: RESEND_API_KEY');
          console.log('   • Cole a chave');
          console.log('5. Execute este teste novamente\n');
          log.separator();
          log.info('Lead foi salvo, mas e-mail não será enviado até configurar a chave');
          
        } else if (emailStatus.sent === true) {
          log.success('E-mail enviado com sucesso!');
          log.separator();
          log.title('🎉 SISTEMA 100% FUNCIONAL!');
          log.separator();
          console.log('\n✅ Tudo está funcionando perfeitamente!\n');
          console.log('📧 PRÓXIMOS PASSOS:\n');
          console.log('1. Verifique seu e-mail:');
          log.code('   angelo.venturi@venturisolutions.com.br');
          console.log('\n2. Procure pelo assunto:');
          log.code('   🎯 Novo Lead: Teste Sistema - Validação Automática');
          console.log('\n3. Teste pelo formulário real do site');
          console.log('4. Configure domínio personalizado (opcional):');
          log.code('   https://resend.com/docs/send-with-domains');
          console.log('\n');
          log.separator();
          
          log.info('📊 O QUE ACONTECE AGORA:');
          console.log('\n   • Cada formulário preenchido = e-mail automático');
          console.log('   • Leads salvos permanentemente no banco');
          console.log('   • Rastreamento de origem funcionando');
          console.log('   • Redirecionamento para WhatsApp ativo');
          console.log('   • CRM disponível em /admin/crm\n');
          
        } else if (emailStatus.error) {
          log.warning('E-mail configurado mas não foi enviado');
          log.code(`Erro: ${JSON.stringify(emailStatus.error, null, 2)}`);
          log.separator();
          log.info('🔧 POSSÍVEIS CAUSAS:');
          console.log('\n   • API Key do Resend inválida');
          console.log('   • Limite de envios excedido (plano free: 100/dia)');
          console.log('   • Erro temporário da API do Resend');
          console.log('   • Domínio não verificado\n');
          log.warning('SOLUÇÃO:');
          console.log('\n   1. Acesse Resend Dashboard: https://resend.com/emails');
          console.log('   2. Verifique o status dos e-mails');
          console.log('   3. Confirme que a API Key está ativa');
          console.log('   4. Veja os logs no Supabase Dashboard\n');
        }
        
      } else {
        log.warning('Resposta do servidor não inclui status de e-mail');
        log.code(JSON.stringify(leadResult, null, 2));
      }
      
    } else {
      log.error('Erro ao criar lead');
      log.code(`Status HTTP: ${leadResponse.status}`);
      log.code(`Resposta: ${JSON.stringify(leadResult, null, 2)}`);
      
      log.separator();
      log.warning('🔧 SOLUÇÕES COMUNS:');
      
      if (leadResult.error && leadResult.error.includes('relation')) {
        console.log('\n❌ ERRO: Tabela não existe');
        console.log('\nSOLUÇÃO:');
        console.log('   O sistema usa KV Store que é automático.');
        console.log('   Se está vendo este erro, verifique os logs do servidor.\n');
      } else if (leadResponse.status === 401) {
        console.log('\n❌ ERRO: Não autorizado');
        console.log('\nSOLUÇÃO:');
        console.log('   • Verifique se a ANON_KEY está correta');
        console.log('   • Confirme as permissões no Supabase\n');
      } else {
        console.log('\n❌ ERRO: Problema no servidor');
        console.log('\nSOLUÇÃO:');
        console.log('   • Veja os logs: Supabase → Edge Functions → Logs');
        console.log('   • Abra: /DIAGNOSTICO_EMAIL.md');
        console.log('   • Execute: /TESTE_EMAIL_RAPIDO.md\n');
      }
    }
    
  } catch (error) {
    log.error('Erro ao processar requisição');
    log.code(`Erro: ${error.message}`);
    log.separator();
    log.warning('Verifique:');
    console.log('   • Conexão com internet está estável');
    console.log('   • Formato dos dados está correto');
    console.log('   • Edge Function está deployada e ativa');
  }

  // Resumo final
  log.separator();
  log.section('📚 DOCUMENTAÇÃO DISPONÍVEL:');
  console.log('\n   • /VALIDACAO_5MIN.md - Validação completa (5 min)');
  console.log('   • /README_EMAIL_SISTEMA.md - Documentação completa');
  console.log('   • /STATUS_SISTEMA_EMAIL.md - Status e arquitetura');
  console.log('   • /TESTE_EMAIL_RAPIDO.md - Testes rápidos (2 min)');
  console.log('   • /DIAGNOSTICO_EMAIL.md - Troubleshooting detalhado\n');
  
  log.separator();
  log.title('🧪 TESTE CONCLUÍDO');
  log.separator();
  
  console.log('\n💡 Dica: Execute este teste sempre que quiser validar o sistema!\n');
  
})();
