# 🧪 TESTE FINAL - Validar Sistema de E-mail

## ✅ Acabamos de configurar o servidor!

O servidor Supabase foi atualizado com todas as rotas de leads e envio de e-mail automático.

---

## 🚀 Como testar AGORA (2 minutos)

### Método 1: Teste pelo Console do Navegador

**1. Abra o site da Venturi Solutions**

**2. Abra o Console do navegador (F12)**

**3. Cole e execute este código:**

```javascript
// Teste completo do sistema de e-mail
console.log('🧪 INICIANDO TESTE COMPLETO DE E-MAIL\n');
console.log('═══════════════════════════════════════\n');

// Configuração do teste
const testLead = {
  nome: 'Teste Sistema',
  email: 'angelo.venturi@venturisolutions.com.br',
  telefone: '(11) 99999-9999',
  empresa: 'Teste Automático',
  desafio: 'Validar sistema de notificações por e-mail',
  origem: 'test',
  origem_detalhes: JSON.stringify({
    type: 'automated_test',
    timestamp: new Date().toISOString(),
    browser: navigator.userAgent
  })
};

// Importar configuração do Supabase
import('https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm').then(async ({ createClient }) => {
  
  // Verificar se as variáveis de ambiente existem
  const projectId = localStorage.getItem('supabase_project_id');
  const anonKey = localStorage.getItem('supabase_anon_key');
  
  console.log('📋 Passo 1: Verificando configuração...\n');
  
  if (!projectId || !anonKey) {
    console.log('❌ ERRO: Credenciais do Supabase não encontradas');
    console.log('');
    console.log('🔧 SOLUÇÃO:');
    console.log('Execute este código primeiro para configurar:');
    console.log('');
    console.log("localStorage.setItem('supabase_project_id', 'SEU_PROJECT_ID');");
    console.log("localStorage.setItem('supabase_anon_key', 'SUA_ANON_KEY');");
    console.log('');
    console.log('📖 Guia completo: /CONFIGURAR_EMAIL_AGORA.md');
    return;
  }
  
  console.log('✅ Credenciais encontradas');
  console.log(`   Project ID: ${projectId}`);
  console.log(`   Anon Key: ${anonKey.substring(0, 20)}...`);
  console.log('');
  
  // Testar Edge Function
  console.log('📋 Passo 2: Testando Edge Function...\n');
  
  try {
    const response = await fetch(`https://${projectId}.supabase.co/functions/v1/make-server-26a83c87/leads`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${anonKey}`
      },
      body: JSON.stringify(testLead)
    });
    
    const result = await response.json();
    
    console.log('📬 Resposta do servidor:', response.status);
    console.log('');
    
    if (response.ok) {
      console.log('✅ SUCESSO! Lead criado');
      console.log('');
      console.log('📊 Detalhes:');
      console.log('   Lead ID:', result.lead?.id);
      console.log('   Nome:', result.lead?.nome);
      console.log('   E-mail:', result.lead?.email);
      console.log('');
      
      if (result.email) {
        console.log('📧 Status do E-mail:');
        console.log('   Configurado:', result.email.configured ? '✅ Sim' : '❌ Não');
        console.log('   Enviado:', result.email.sent ? '✅ Sim' : '❌ Não');
        
        if (result.email.error) {
          console.log('   Erro:', result.email.error);
        }
        console.log('');
        
        if (!result.email.configured) {
          console.log('⚠️ ATENÇÃO: RESEND_API_KEY não está configurada!');
          console.log('');
          console.log('🔧 SOLUÇÃO:');
          console.log('1. Acesse: https://resend.com/api-keys');
          console.log('2. Crie uma API Key');
          console.log('3. No Supabase, vá em Settings → Secrets');
          console.log('4. Adicione: RESEND_API_KEY = sua_chave');
          console.log('');
          console.log('📖 Guia completo: /CONFIGURAR_EMAIL_AGORA.md - Passo 1');
        } else if (result.email.sent) {
          console.log('🎉 TUDO FUNCIONANDO!');
          console.log('');
          console.log('✅ Lead salvo no banco');
          console.log('✅ E-mail enviado com sucesso');
          console.log('');
          console.log('📥 Verifique sua caixa de entrada:');
          console.log('   → angelo.venturi@venturisolutions.com.br');
          console.log('');
          console.log('🎯 Próximos passos:');
          console.log('   1. Teste pelo formulário do site');
          console.log('   2. Configure domínio personalizado no Resend (opcional)');
          console.log('   3. Customize o template de e-mail (opcional)');
        } else {
          console.log('⚠️ E-mail configurado mas não foi enviado');
          console.log('');
          console.log('🔍 Possíveis causas:');
          console.log('   • API Key do Resend inválida');
          console.log('   • Limite de envios excedido (free tier)');
          console.log('   • Erro temporário da API');
          console.log('');
          console.log('🔧 SOLUÇÃO:');
          console.log('   1. Verifique os logs no Supabase');
          console.log('   2. Teste a API Key do Resend');
          console.log('   3. Veja: /DIAGNOSTICO_EMAIL.md');
        }
      }
      
      console.log('');
      console.log('═══════════════════════════════════════');
      console.log('✅ TESTE CONCLUÍDO COM SUCESSO');
      console.log('═══════════════════════════════════════');
      
    } else {
      console.log('❌ ERRO ao criar lead');
      console.log('');
      console.log('📋 Detalhes do erro:');
      console.log(JSON.stringify(result, null, 2));
      console.log('');
      console.log('🔧 SOLUÇÕES COMUNS:');
      console.log('');
      console.log('Se o erro for "relation does not exist":');
      console.log('   → Execute o SQL em /supabase-schema/leads-table.sql');
      console.log('   → Guia: /CONFIGURAR_EMAIL_AGORA.md - Passo 2.3');
      console.log('');
      console.log('Se o erro for "FunctionsRelayError":');
      console.log('   → Verifique se a Edge Function está deployada');
      console.log('   → Guia: /CONFIGURAR_EMAIL_AGORA.md - Passo 2.4');
      console.log('');
      console.log('Se o erro for "Unauthorized":');
      console.log('   → Verifique a ANON_KEY');
      console.log('   → Guia: /CONFIGURAR_EMAIL_AGORA.md - Passo 2.5');
    }
    
  } catch (error) {
    console.log('❌ ERRO na requisição');
    console.log('');
    console.log('📋 Detalhes:');
    console.log('   Mensagem:', error.message);
    console.log('');
    console.log('🔧 Verifique:');
    console.log('   • Conexão com internet');
    console.log('   • URL do Supabase está correta');
    console.log('   • Edge Function está deployada');
    console.log('');
    console.log('📖 Guia completo: /DIAGNOSTICO_EMAIL.md');
  }
  
}).catch(error => {
  console.log('❌ ERRO ao carregar biblioteca Supabase');
  console.log('   Mensagem:', error.message);
});
```

---

## Método 2: Teste pelo Formulário do Site

**1. Acesse a landing page da Venturi Solutions**

**2. Role até o formulário de contato**

**3. Preencha com seus dados:**
- Nome: Teste Sistema
- E-mail: angelo.venturi@venturisolutions.com.br
- Telefone: (11) 99999-9999
- Empresa: Teste
- Desafio: Validar e-mails

**4. Clique em "Enviar"**

**5. Verifique o console do navegador (F12)**

**6. Procure por uma das mensagens:**

✅ **Funcionando:**
```
✅ Lead enviado e e-mail disparado para angelo.venturi@venturisolutions.com.br
```

⚠️ **Configuração incompleta:**
```
⚠️ E-mail não enviado - Configure RESEND_API_KEY
```

❌ **Erro:**
```
❌ Erro ao processar lead: [mensagem de erro]
```

---

## 📊 Checklist de Validação

Marque o que você completou:

### Configuração Base
- [ ] RESEND_API_KEY configurada no Supabase
- [ ] Project ID do Supabase identificado
- [ ] Anon Key do Supabase identificada
- [ ] Edge Function deployada

### Teste do Sistema
- [ ] Console não mostra erros
- [ ] Lead foi salvo no KV Store
- [ ] Resposta do servidor: `{ success: true }`
- [ ] `email.configured = true`
- [ ] `email.sent = true`

### E-mail Recebido
- [ ] E-mail chegou na caixa de entrada
- [ ] Assunto: "🎯 Novo Lead: [nome]"
- [ ] Visual dark com tema bordô/vinho
- [ ] Botão "Responder E-mail" funciona
- [ ] Botão "WhatsApp" funciona (se telefone preenchido)
- [ ] Detalhes do lead estão corretos

---

## 🎯 Resultados Esperados

### ✅ TUDO FUNCIONANDO

```
✅ Lead salvo no banco
✅ E-mail enviado com sucesso
📥 Verifique sua caixa de entrada
```

**O que fazer agora:**
- ✅ Sistema pronto para uso
- 📧 Você receberá um e-mail a cada novo lead
- 🎨 Personalize o template se quiser (opcional)

---

### ⚠️ RESEND_API_KEY NÃO CONFIGURADA

```
⚠️ ATENÇÃO: RESEND_API_KEY não está configurada!
```

**Como resolver:**

1. **Acesse Resend:**
   - URL: https://resend.com/api-keys
   - Faça login ou crie conta (grátis)

2. **Crie API Key:**
   - Click em "Create API Key"
   - Nome: "Venturi Solutions"
   - Copie a chave (começa com `re_`)

3. **Configure no Supabase:**
   - Você já fez isso através do modal que apareceu!
   - A chave está armazenada como `RESEND_API_KEY`

4. **Teste novamente:**
   - Execute o código de teste do console de novo
   - Ou envie outro lead pelo formulário

---

### ❌ ERROS COMUNS

#### Erro: "Failed to fetch"
**Causa:** Edge Function não está rodando

**Solução:**
1. Verifique se o servidor foi deployado
2. Acesse Supabase Dashboard → Edge Functions
3. Verifique se `make-server-26a83c87` está ativo

---

#### Erro: "relation does not exist"
**Causa:** Tabela do KV Store não existe

**Solução:**
Não precisa fazer nada! O sistema usa KV Store que já está configurado automaticamente.

---

#### Erro: "Unauthorized"
**Causa:** Anon Key incorreta

**Solução:**
1. Acesse Supabase → Settings → API
2. Copie a `anon public` key
3. Execute no console:
```javascript
localStorage.setItem('supabase_anon_key', 'SUA_CHAVE_AQUI');
```

---

## 🔄 Próximos Passos

### Se está tudo funcionando: ✅

1. **Teste pelo formulário real do site**
2. **Configure domínio personalizado no Resend** (opcional)
   - Permite enviar de `noreply@venturisolutions.com.br`
   - Guia: https://resend.com/docs/send-with-domains

3. **Customize o template de e-mail** (opcional)
   - Arquivo: `/supabase/functions/server/index.tsx`
   - Procure por `emailHtml`
   - Modifique HTML como quiser

4. **Configure o CRM**
   - Acesse `/admin/crm`
   - Senha já configurada
   - Gerencie leads em Kanban

---

### Se ainda não está funcionando: ⚠️

1. **Execute o teste de diagnóstico:**
   - Abra: `/TESTE_EMAIL_RAPIDO.md`
   - Execute todos os scripts
   - Leia os resultados

2. **Leia o diagnóstico completo:**
   - Abra: `/DIAGNOSTICO_EMAIL.md`
   - Siga o checklist passo-a-passo

3. **Configure do zero:**
   - Abra: `/CONFIGURAR_EMAIL_AGORA.md`
   - Siga todos os passos
   - Tempo: 10-15 minutos

---

## 💡 Dica Final

**O servidor Supabase já está configurado e pronto!**

A única coisa que falta é garantir que você tenha:
1. ✅ RESEND_API_KEY configurada (você acabou de fazer!)
2. ✅ Credenciais do Supabase salvas no localStorage

Se os dois estiverem OK, o sistema funciona automaticamente.

---

## 🎬 Teste Agora!

**Cole o código do Método 1 no console e veja a mágica acontecer! 🚀**

Qualquer mensagem de erro será super clara e dirá EXATAMENTE o que fazer.

**Boa sorte! 📧**
