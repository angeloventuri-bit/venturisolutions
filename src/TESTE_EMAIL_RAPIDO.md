# 🧪 TESTE RÁPIDO - Verificar se e-mail funciona

## ⚡ Teste em 30 segundos

### Método 1: Teste direto no site

1. **Abra seu site**
2. **Pressione F12** (Console do navegador)
3. **Cole e execute este código:**

```javascript
// Teste automático do sistema de e-mail
(async function testarEmail() {
  console.log('🧪 Iniciando teste do sistema de e-mail...\n');
  
  // 1. Verificar variáveis de ambiente
  console.log('1️⃣ Verificando configuração do Supabase:');
  const supabaseUrl = import.meta.env?.VITE_SUPABASE_URL;
  const supabaseKey = import.meta.env?.VITE_SUPABASE_ANON_KEY;
  
  if (!supabaseUrl || supabaseUrl.includes('YOUR_SUPABASE')) {
    console.error('❌ SUPABASE_URL não configurada!');
    console.log('📖 Solução: Configure as variáveis de ambiente');
    console.log('📄 Veja: /CONFIGURAR_EMAIL_AGORA.md - Passo 2.5\n');
    return;
  } else {
    console.log(`✅ SUPABASE_URL: ${supabaseUrl}`);
  }
  
  if (!supabaseKey || supabaseKey.includes('YOUR_SUPABASE')) {
    console.error('❌ SUPABASE_ANON_KEY não configurada!');
    console.log('📖 Solução: Configure as variáveis de ambiente');
    console.log('📄 Veja: /CONFIGURAR_EMAIL_AGORA.md - Passo 2.5\n');
    return;
  } else {
    console.log(`✅ SUPABASE_ANON_KEY: ${supabaseKey.substring(0, 20)}...`);
  }
  
  // 2. Testar conexão com Edge Function
  console.log('\n2️⃣ Testando Edge Function send-lead-email:');
  
  try {
    const { createClient } = await import('https://esm.sh/@supabase/supabase-js@2');
    const supabase = createClient(supabaseUrl, supabaseKey);
    
    const testData = {
      nome: 'Teste Automático',
      email: 'teste@venturisolutions.com.br',
      telefone: '11999999999',
      empresa: 'Teste Script',
      desafio: 'Testando sistema de e-mail',
      origem: 'direct',
      origem_detalhes: JSON.stringify({ type: 'direct', test: true })
    };
    
    console.log('📤 Enviando lead de teste...');
    
    const { data, error } = await supabase.functions.invoke('send-lead-email', {
      body: testData
    });
    
    if (error) {
      console.error('❌ Erro ao invocar Edge Function:', error);
      console.log('\n🔍 Diagnóstico do erro:');
      
      if (error.message?.includes('not found')) {
        console.log('❌ Edge Function "send-lead-email" não existe');
        console.log('📖 Solução: Deploy da função no Supabase');
        console.log('📄 Veja: /CONFIGURAR_EMAIL_AGORA.md - Passo 2.4');
      } else if (error.message?.includes('RESEND_API_KEY')) {
        console.log('❌ RESEND_API_KEY não configurada no Supabase');
        console.log('📖 Solução: Adicione a chave no Vault do Supabase');
        console.log('📄 Veja: /CONFIGURAR_EMAIL_AGORA.md - Passo 2.2');
      } else if (error.message?.includes('Invalid API key')) {
        console.log('❌ RESEND_API_KEY inválida');
        console.log('📖 Solução: Gere nova chave no Resend');
        console.log('📄 Veja: /CONFIGURAR_EMAIL_AGORA.md - Passo 1.3');
      } else {
        console.log('❌ Erro desconhecido:', error.message);
        console.log('📖 Solução: Verifique os logs da Edge Function no Supabase');
      }
      
      console.log('\n📋 Checklist completo: /DIAGNOSTICO_EMAIL.md');
      return;
    }
    
    console.log('✅ Edge Function respondeu com sucesso!');
    console.log('📧 Resposta:', data);
    
    // 3. Verificar se e-mail foi enviado
    console.log('\n3️⃣ Status do envio:');
    if (data?.success) {
      console.log('✅ Lead salvo no banco de dados');
      console.log('✅ E-mail enviado com sucesso!');
      console.log('\n🎉 SISTEMA FUNCIONANDO PERFEITAMENTE!');
      console.log('📬 Verifique o e-mail: angelo.venturi@venturisolutions.com.br');
      console.log('📊 Verifique no Supabase: Table Editor → leads');
    } else {
      console.warn('⚠️ Resposta inesperada:', data);
    }
    
  } catch (error) {
    console.error('❌ Erro no teste:', error);
    console.log('\n🔍 Possíveis causas:');
    console.log('1. Edge Function não está deployed');
    console.log('2. Problemas de CORS');
    console.log('3. Supabase offline (improvável)');
    console.log('\n📋 Veja o diagnóstico completo: /DIAGNOSTICO_EMAIL.md');
  }
  
  console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log('📖 Documentação completa:');
  console.log('   • /CONFIGURAR_EMAIL_AGORA.md - Setup passo-a-passo');
  console.log('   • /DIAGNOSTICO_EMAIL.md - Resolver problemas');
  console.log('   • /SETUP_RAPIDO_10MIN.md - Guia rápido');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
})();
```

4. **Pressione Enter**
5. **Leia o resultado no console**

### Interpretação dos resultados

**✅ Sucesso total:**
```
✅ SUPABASE_URL: https://...
✅ SUPABASE_ANON_KEY: eyJ...
✅ Edge Function respondeu com sucesso!
✅ Lead salvo no banco de dados
✅ E-mail enviado com sucesso!
🎉 SISTEMA FUNCIONANDO PERFEITAMENTE!
```
**Ação:** Verifique seu e-mail!

---

**❌ Erro: Variáveis não configuradas**
```
❌ SUPABASE_URL não configurada!
```
**Solução:** Configure o arquivo `.env` ou variáveis de ambiente  
**Guia:** `/CONFIGURAR_EMAIL_AGORA.md` - Passo 2.5

---

**❌ Erro: Edge Function não existe**
```
❌ Edge Function "send-lead-email" não existe
```
**Solução:** Deploy da função no Supabase  
**Guia:** `/CONFIGURAR_EMAIL_AGORA.md` - Passo 2.4

---

**❌ Erro: RESEND_API_KEY não configurada**
```
❌ RESEND_API_KEY não configurada no Supabase
```
**Solução:** Adicione a chave no Vault  
**Guia:** `/CONFIGURAR_EMAIL_AGORA.md` - Passo 2.2

---

## Método 2: Teste via formulário do site

1. **Abra o console (F12)**
2. **Role até o formulário** de contato
3. **Preencha com dados de teste:**
   - Nome: `Teste Angelo`
   - E-mail: `seu-email@teste.com`
   - Telefone: `11999999999`
   - Empresa: `Teste Ltda`
   - Desafio: `Testando e-mail`
4. **Clique em** "Agendar Conversa"
5. **Observe o console:**

**✅ Mensagem esperada:**
```
✅ Lead salvo no CRM local: {...}
✅ Lead enviado e e-mail disparado para angelo.venturi@venturisolutions.com.br
```

**❌ Mensagem de problema:**
```
💡 Supabase não configurado. Lead salvo no localStorage.
```
ou
```
⚠️ Erro ao enviar via Supabase: ...
```

---

## Método 3: Testar Edge Function direto no Supabase

1. **Acesse** seu projeto Supabase
2. **Edge Functions** → `send-lead-email`
3. **Clique em** "Invoke" ou "Test"
4. **Cole este JSON:**

```json
{
  "nome": "Teste Supabase",
  "email": "teste@teste.com",
  "telefone": "11999999999",
  "empresa": "Teste Direto",
  "desafio": "Testando direto no Supabase",
  "origem": "direct",
  "origem_detalhes": "{\"type\":\"direct\",\"test\":true}"
}
```

5. **Clique em** "Send" ou "Invoke"
6. **Verifique a resposta:**

**✅ Sucesso (Status 200):**
```json
{
  "success": true,
  "message": "Lead salvo e e-mail enviado com sucesso",
  "lead": {...},
  "email": {...}
}
```

**❌ Erro (Status 500):**
```json
{
  "error": "RESEND_API_KEY is not defined"
}
```
**Solução:** Configure o secret no Vault

---

## Método 4: Verificar logs em tempo real

### No Supabase:
1. **Edge Functions** → `send-lead-email` → **Logs**
2. Faça um teste enviando o formulário
3. Atualize a página de logs
4. Procure por erros em vermelho

### Erros comuns nos logs:

**Erro 1:**
```
RESEND_API_KEY is not defined
```
**Causa:** Secret não configurado  
**Solução:** Settings → Vault → Add `RESEND_API_KEY`

**Erro 2:**
```
relation "leads" does not exist
```
**Causa:** Tabela não criada  
**Solução:** SQL Editor → Execute `/supabase-schema/leads-table.sql`

**Erro 3:**
```
Invalid API key
```
**Causa:** Chave do Resend errada  
**Solução:** Gere nova chave no Resend e atualize no Vault

---

## Teste completo - Checklist

Execute cada teste na ordem:

### 1. Teste de variáveis de ambiente
```javascript
console.log('SUPABASE_URL:', import.meta.env?.VITE_SUPABASE_URL);
console.log('ANON_KEY:', import.meta.env?.VITE_SUPABASE_ANON_KEY?.substring(0,20) + '...');
```
- [ ] Ambas as variáveis aparecem
- [ ] Não contêm "YOUR_SUPABASE"

### 2. Teste de Edge Function (método 1 acima)
- [ ] Função responde sem erro
- [ ] Status é 200
- [ ] Response contém `success: true`

### 3. Teste de formulário
- [ ] Toast de sucesso aparece
- [ ] WhatsApp abre automaticamente
- [ ] Console mostra "Lead enviado e e-mail disparado"

### 4. Verificação de recebimento
- [ ] E-mail chegou em angelo.venturi@venturisolutions.com.br
- [ ] Lead apareceu no Supabase (Table Editor → leads)
- [ ] Origem foi rastreada corretamente

---

## 🎯 Resultado Final

Se TODOS os testes passaram:
```
🎉 PARABÉNS! Sistema 100% funcional!

✅ Formulário funciona
✅ Dados salvos no banco
✅ E-mail enviado automaticamente
✅ Rastreamento de origem funcionando
✅ WhatsApp integrado

Próximos passos:
• Configure seu domínio no Resend (opcional)
• Personalize o template do e-mail
• Configure alertas adicionais
• Teste campanhas com UTMs
```

---

## 📞 Suporte

Se algum teste falhou:

1. **Anote qual teste falhou**
2. **Copie a mensagem de erro completa**
3. **Consulte:**
   - `/DIAGNOSTICO_EMAIL.md` - Resolver problemas
   - `/CONFIGURAR_EMAIL_AGORA.md` - Setup completo
   - Logs da Edge Function no Supabase

---

**⏱️ Tempo de teste: 30 segundos**  
**🎯 Resultado: Saber exatamente o que falta configurar**
