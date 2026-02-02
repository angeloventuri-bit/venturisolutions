# 📧 E-MAIL - RESUMO DE 1 PÁGINA

## 🎯 SITUAÇÃO

**Você tem:** Sistema de e-mail 100% implementado no código  
**Você precisa:** Configurar uma vez (15 min) para começar a receber

---

## 🚀 SOLUÇÃO RÁPIDA (15 minutos)

### 1️⃣ RESEND (3 min) - Provedor de E-mail

1. Abrir https://resend.com → Sign Up
2. API Keys → Create → Copiar chave (`re_...`)

### 2️⃣ SUPABASE (10 min) - Banco de Dados

**A. Criar tabela (2 min)**
1. https://supabase.com/dashboard → SQL Editor
2. Copiar `/supabase-schema/leads-table.sql` → Run

**B. Adicionar chave Resend (1 min)**
1. Settings → Vault → New Secret
2. Name: `RESEND_API_KEY` | Value: `re_...`

**C. Criar função de e-mail (3 min)**
1. Edge Functions → New Function → Nome: `send-lead-email`
2. Copiar `/supabase-functions/send-lead-email.ts` → Deploy

**D. Copiar credenciais (1 min)**
1. Settings → API → Copiar:
   - Project URL: `https://xxx.supabase.co`
   - Anon Key: `eyJ...`

### 3️⃣ CONECTAR AO SITE (2 min)

Criar arquivo `.env` na raiz:
```env
VITE_SUPABASE_URL=https://seu-projeto.supabase.co
VITE_SUPABASE_ANON_KEY=sua-chave-anon-aqui
```

Reiniciar servidor.

---

## ✅ TESTAR (30 segundos)

1. Preencher formulário do site
2. Verificar console: `✅ Lead enviado e e-mail disparado`
3. Verificar e-mail: `angelo.venturi@venturisolutions.com.br`

---

## ❓ PROBLEMAS COMUNS

| Mensagem no Console | Causa | Solução |
|---------------------|-------|---------|
| `Supabase não configurado` | `.env` faltando | Criar `.env` com credenciais |
| `FunctionsRelayError` | Função não existe | Deploy da Edge Function |
| `RESEND_API_KEY not defined` | Secret faltando | Adicionar no Vault |

---

## 📚 GUIAS COMPLETOS

**Configuração passo-a-passo:** `/CONFIGURAR_EMAIL_AGORA.md`  
**Teste automático:** `/TESTE_EMAIL_RAPIDO.md`  
**Resolver problemas:** `/DIAGNOSTICO_EMAIL.md`  
**Visão geral:** `/COMECE_POR_AQUI_EMAIL.md`

---

## 💰 CUSTO

**R$ 0,00** - Totalmente grátis
- Resend: 100 e-mails/dia grátis
- Supabase: 500MB + 500k funções grátis

---

## 🎁 RESULTADO

Após configurar, TODA vez que alguém preencher o formulário:

✅ E-mail automático para você  
✅ Lead salvo no banco  
✅ Origem rastreada (Google Ads, orgânico, UTM)  
✅ Botões para responder por e-mail ou WhatsApp  

---

## ⏰ AÇÃO AGORA

**15 minutos disponíveis?** → `/CONFIGURAR_EMAIL_AGORA.md`  
**2 minutos disponíveis?** → `/TESTE_EMAIL_RAPIDO.md`  
**Sem tempo?** → Salve este arquivo e configure depois

---

**Boa configuração! 🚀**
