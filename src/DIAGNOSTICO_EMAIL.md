# 🔍 DIAGNÓSTICO: Por que não estou recebendo e-mails?

## ⚡ Checklist Rápido - Descubra o problema em 2 minutos

### ✅ 1. Resend está configurado?

**Verificar:**
- [ ] Você criou conta em https://resend.com
- [ ] Você criou uma API Key
- [ ] A API Key começa com `re_`
- [ ] Você copiou a chave COMPLETA

**Como testar:**
1. Acesse https://resend.com/api-keys
2. Você deve ver sua chave listada
3. Status deve estar **"Active"**

❌ **Se não tiver:** Vá ao Passo 1 do `/CONFIGURAR_EMAIL_AGORA.md`

---

### ✅ 2. API Key do Resend está no Supabase?

**Verificar:**
1. Acesse seu projeto Supabase
2. **Settings** → **Vault** (ou **Secrets**)
3. Procure por: `RESEND_API_KEY`

**Deve ter:**
- Nome: `RESEND_API_KEY` (exatamente assim)
- Valor: Sua chave do Resend (`re_...`)

❌ **Se não tiver:** Vá ao Passo 2.2 do `/CONFIGURAR_EMAIL_AGORA.md`

---

### ✅ 3. Tabela 'leads' existe no Supabase?

**Verificar:**
1. Supabase → **Table Editor**
2. Procure pela tabela **"leads"**

**Deve ter as colunas:**
- id
- created_at
- nome
- email
- telefone
- empresa
- desafio
- status
- origem
- origem_detalhes

❌ **Se não tiver:** Vá ao Passo 2.3 do `/CONFIGURAR_EMAIL_AGORA.md`

---

### ✅ 4. Edge Function está deployed?

**Verificar:**
1. Supabase → **Edge Functions**
2. Procure por: `send-lead-email`
3. Status deve estar: **"Deployed"** 🟢

**Deve ter:**
- Nome exato: `send-lead-email`
- Status: Verde/Deployed
- Última deploy: Data recente

❌ **Se não tiver:** Vá ao Passo 2.4 do `/CONFIGURAR_EMAIL_AGORA.md`

---

### ✅ 5. Site está conectado ao Supabase?

**Verificar no código:**

Abra o arquivo `/components/sections/CTASection.tsx` e procure por:

```typescript
const supabaseUrl = import.meta.env?.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env?.VITE_SUPABASE_ANON_KEY;
```

**Teste rápido:**
1. Abra seu site
2. Abra o Console do navegador (F12)
3. Preencha e envie o formulário
4. Procure no console por uma dessas mensagens:

✅ **Mensagem esperada (FUNCIONANDO):**
```
✅ Lead salvo no CRM local: {...}
✅ Lead enviado e e-mail disparado para angelo.venturi@venturisolutions.com.br
```

❌ **Mensagens de problema:**

**Problema 1:** 
```
💡 Supabase não configurado. Lead salvo no localStorage.
```
**Causa:** Variáveis de ambiente não configuradas  
**Solução:** Configure as variáveis (ver abaixo)

**Problema 2:**
```
⚠️ Erro ao enviar via Supabase: FunctionsRelayError: ...
```
**Causa:** Edge Function não existe ou não foi deployed  
**Solução:** Vá ao Passo 2.4 do `/CONFIGURAR_EMAIL_AGORA.md`

**Problema 3:**
```
⚠️ Erro ao enviar via Supabase: Invalid API key
```
**Causa:** RESEND_API_KEY errada ou não configurada  
**Solução:** Vá ao Passo 2.2 do `/CONFIGURAR_EMAIL_AGORA.md`

---

## 🔧 Como configurar as variáveis de ambiente

### Opção A: Você está usando Figma Make (Replit/Cloud)

As variáveis devem ser injetadas automaticamente. Verifique com o suporte do Figma Make.

### Opção B: Você clonou o código localmente

**Criar arquivo `.env`:**

1. Na raiz do projeto, crie um arquivo chamado `.env`
2. Adicione estas linhas:

```env
VITE_SUPABASE_URL=https://SEU_PROJETO.supabase.co
VITE_SUPABASE_ANON_KEY=SUA_CHAVE_ANON_AQUI
```

3. Substitua os valores:
   - **VITE_SUPABASE_URL:** Copie de Supabase → Settings → API → Project URL
   - **VITE_SUPABASE_ANON_KEY:** Copie de Supabase → Settings → API → anon/public key

4. **Importante:** 
   - NÃO commite o arquivo `.env` no git
   - Reinicie o servidor de desenvolvimento depois de criar o arquivo
   - Use `npm run dev` ou `yarn dev`

### Opção C: Deploy em produção (Vercel, Netlify, etc)

1. Vá nas configurações do seu projeto no serviço de hosting
2. Procure por **"Environment Variables"** ou **"Variáveis de Ambiente"**
3. Adicione:
   - `VITE_SUPABASE_URL` = `https://seu-projeto.supabase.co`
   - `VITE_SUPABASE_ANON_KEY` = `sua-chave-anon-aqui`
4. Re-deploy o site

---

## 🧪 Teste Completo Passo-a-Passo

### 1. Abra o Console do navegador

1. Acesse seu site
2. Pressione **F12** (ou Cmd+Option+I no Mac)
3. Vá na aba **"Console"**
4. Deixe aberto

### 2. Preencha o formulário

1. Role até a seção "Entre em contato"
2. Preencha:
   - Nome: `Teste Angelo`
   - E-mail: `teste@teste.com`
   - Telefone: `11999999999`
   - Empresa: `Teste Ltda`
   - Desafio: `Testando e-mail`
3. Clique em **"Agendar Conversa com Especialista"**

### 3. Analise os logs

**Cenário 1: TUDO FUNCIONANDO ✅**
```javascript
✅ Lead salvo no CRM local: {nome: "Teste Angelo", ...}
📊 Origem rastreada: {type: "direct", ...}
✅ Lead enviado e e-mail disparado para angelo.venturi@venturisolutions.com.br: {...}
```
**Ação:** Verifique seu e-mail (angelo.venturi@venturisolutions.com.br)

---

**Cenário 2: Supabase não configurado ⚠️**
```javascript
✅ Lead salvo no CRM local: {...}
💡 Supabase não configurado. Lead salvo no localStorage.
📧 Para receber notificações automáticas no e-mail, configure o Supabase.
```
**Problema:** Variáveis de ambiente não configuradas  
**Solução:** Configure `.env` ou variáveis de ambiente no hosting

---

**Cenário 3: Erro ao chamar Edge Function ❌**
```javascript
✅ Lead salvo no CRM local: {...}
⚠️ Erro ao enviar via Supabase: FunctionsRelayError
```
**Problema:** Edge Function não existe ou não está deployed  
**Solução:** 
1. Supabase → Edge Functions
2. Verifique se `send-lead-email` existe
3. Se não, faça deploy (Passo 2.4)

---

**Cenário 4: Erro na API do Resend ❌**
```javascript
✅ Lead salvo no CRM local: {...}
⚠️ Erro ao enviar via Supabase: Invalid API key
```
**Problema:** RESEND_API_KEY incorreta  
**Solução:**
1. Gere nova chave no Resend
2. Atualize no Supabase Vault
3. Re-deploy da Edge Function

---

## 📋 Checklist de Verificação Completa

Use este checklist para garantir que tudo está configurado:

### Resend
- [ ] Conta criada em https://resend.com
- [ ] API Key criada
- [ ] API Key começa com `re_`
- [ ] API Key está **Active** no dashboard

### Supabase - Secrets
- [ ] Projeto criado
- [ ] Secret `RESEND_API_KEY` existe no Vault
- [ ] Valor do secret é a chave do Resend

### Supabase - Database
- [ ] Tabela `leads` existe
- [ ] Tabela tem as colunas corretas
- [ ] RLS (Row Level Security) está habilitado
- [ ] Políticas de acesso estão criadas

### Supabase - Edge Function
- [ ] Edge Function `send-lead-email` existe
- [ ] Status é "Deployed" 🟢
- [ ] Código foi colado corretamente
- [ ] Não há erros nos logs

### Site - Frontend
- [ ] Variável `VITE_SUPABASE_URL` configurada
- [ ] Variável `VITE_SUPABASE_ANON_KEY` configurada
- [ ] Servidor reiniciado após criar `.env`
- [ ] Console não mostra erros de CORS
- [ ] Console mostra "Lead enviado e e-mail disparado"

### Teste
- [ ] Formulário preenchido e enviado
- [ ] WhatsApp abriu automaticamente
- [ ] Toast de sucesso apareceu
- [ ] Console mostra mensagem de sucesso
- [ ] E-mail recebido em angelo.venturi@venturisolutions.com.br
- [ ] Lead apareceu no Supabase Table Editor

---

## 🆘 Ainda não funciona?

### Verifique os logs da Edge Function

1. Supabase → **Edge Functions** → `send-lead-email`
2. Clique em **"Logs"** ou **"View Logs"**
3. Procure por erros recentes
4. Os erros mais comuns são:

| Erro nos logs | Causa | Solução |
|---------------|-------|---------|
| `RESEND_API_KEY is not defined` | Secret não configurado | Adicione no Vault |
| `Invalid API key` | Chave errada | Gere nova chave |
| `relation "leads" does not exist` | Tabela não criada | Execute o SQL |
| `unauthorized` | Política RLS bloqueando | Execute o SQL completo |
| `Failed to send email` | Problema no Resend | Verifique conta Resend |

### Teste a Edge Function diretamente

1. Supabase → **Edge Functions** → `send-lead-email`
2. Clique em **"Invoke"** ou **"Test"**
3. Use este JSON de teste:

```json
{
  "nome": "Teste Angelo",
  "email": "teste@teste.com",
  "telefone": "11999999999",
  "empresa": "Teste Ltda",
  "desafio": "Testando sistema",
  "origem": "direct",
  "origem_detalhes": "{\"type\":\"direct\"}"
}
```

4. Clique em **"Send"**
5. Verifique a resposta:
   - ✅ Status 200 = Funcionou!
   - ❌ Status 400/500 = Veja o erro na resposta

---

## 📞 Próximos Passos

### Se tudo funcionou ✅
1. Faça mais alguns testes
2. Configure seu domínio no Resend (opcional)
3. Adicione mais destinatários de e-mail (opcional)
4. Configure alertas no Supabase

### Se ainda tem problemas ❌
1. Tire prints dos erros no console
2. Tire prints dos logs da Edge Function
3. Verifique cada item do checklist novamente
4. Consulte `/CONFIGURAR_EMAIL_AGORA.md` para guia completo

---

**💡 Dica:** 90% dos problemas são por:
1. API Key do Resend não configurada no Vault
2. Edge Function não deployed
3. Variáveis de ambiente não configuradas no frontend

Verifique esses 3 pontos primeiro! 🎯
