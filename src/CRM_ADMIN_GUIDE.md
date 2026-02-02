# 🎯 Guia Completo - Sistema CRM Admin Venturi Solutions

## 📋 Visão Geral

Sistema completo de CRM integrado à área administrativa da Venturi Solutions com:
- ✅ Rastreamento automático de origem dos leads (orgânico/pago/direto/referral/social)
- ✅ Sistema Kanban para gestão de pipeline comercial
- ✅ Integração WhatsApp e email com um clique
- ✅ Captura automática de leads do formulário de contato
- ✅ Tracking completo de UTM parameters e fonte de tráfego
- ✅ Anotações e histórico de interações
- ✅ Analytics e métricas em tempo real

---

## 🔐 Acesso à Área Admin

### URL de Acesso
```
https://seu-site.com/admin/login
```

### Credenciais Padrão
- **Usuário:** `admin`
- **Senha:** `venturi2024`

> ⚠️ **IMPORTANTE:** Altere a senha padrão em produção editando o arquivo `/components/admin/LoginPage.tsx`

---

## 📊 Estrutura da Área Admin

### 1. **CRM - Gestão de Leads** (`/admin/crm`)
Sistema Kanban completo para gestão do pipeline comercial.

#### Estágios do Funil:
1. **Novo Lead** - Leads recém-capturados
2. **Contato Inicial** - Primeiro contato realizado
3. **Qualificado** - Lead qualificado como oportunidade
4. **Proposta Enviada** - Proposta comercial enviada
5. **Em Negociação** - Negociação ativa
6. **Ganho 🎉** - Negócio fechado
7. **Perdido** - Oportunidade perdida

#### Funcionalidades:
- ✅ **Drag & Drop** - Arraste os cards entre os estágios
- ✅ **Busca** - Busque por nome, email ou empresa
- ✅ **Detalhes do Lead** - Clique no card para ver informações completas
- ✅ **Integração WhatsApp** - Botão direto para abrir conversa
- ✅ **Integração Email** - Link direto para email
- ✅ **Anotações** - Adicione notas e histórico de interações
- ✅ **Rastreamento de Origem** - Veja de onde veio cada lead

### 2. **Apresentação Comercial** (`/admin/presentation`)
Apresentação interativa para uso em reuniões comerciais.

### 3. **Precificação** (`/admin/pricing`)
Tabelas de preços detalhadas de todos os produtos e serviços.

---

## 🎯 Rastreamento Automático de Leads

### O que é rastreado automaticamente:

#### 1. **Origem do Tráfego**
- **Orgânico** - Google, Bing, DuckDuckGo (SEO)
- **Pago** - Google Ads, Meta Ads (UTM com cpc/ppc/paid)
- **Direto** - Acesso direto ao site (sem referrer)
- **Referral** - Vindo de outros sites
- **Social** - Facebook, Instagram, LinkedIn, Twitter/X

#### 2. **Parâmetros UTM** (se disponíveis)
- `utm_source` - Fonte da campanha
- `utm_medium` - Meio (cpc, email, social)
- `utm_campaign` - Nome da campanha
- `utm_term` - Palavras-chave
- `utm_content` - Variação do anúncio

#### 3. **Informações Técnicas**
- **Device** - Desktop ou Mobile
- **Browser** - Chrome, Safari, Firefox, Edge
- **Landing Page** - Primeira página visitada
- **Referrer** - Site de origem (se houver)
- **Timestamp** - Data e hora exatas

### Exemplos de URLs rastreadas:

```
# Tráfego Pago - Google Ads
https://venturi.com.br/?utm_source=google_ads&utm_medium=cpc&utm_campaign=servicos_2024

# Tráfego Orgânico - Google
https://venturi.com.br/ (vindo de google.com)

# Tráfego Social - Instagram
https://venturi.com.br/?utm_source=instagram&utm_medium=social&utm_campaign=ads_jan

# Tráfego Direto
https://venturi.com.br/ (digitado diretamente)
```

---

## 💡 Como Usar o Sistema CRM

### 1. **Captura Automática de Leads**
Quando um visitante preenche o formulário de contato no site:
1. ✅ Lead é automaticamente salvo no CRM
2. ✅ Origem é rastreada e registrada
3. ✅ Status inicial: "Novo Lead"
4. ✅ Notificação via toast no site
5. ✅ Redirecionamento automático para WhatsApp

### 2. **Gestão do Pipeline**
1. Acesse `/admin/crm`
2. Veja todos os leads organizados por estágio
3. **Arraste e solte** cards entre os estágios
4. **Clique** em um card para ver detalhes completos

### 3. **Análise de Origem**
No card do lead você verá:
- Badge colorido indicando o tipo de tráfego
- Detalhes da campanha (se houver UTM)
- Device e browser utilizados
- Página de entrada no site

### 4. **Contato com Leads**

#### WhatsApp (Recomendado)
1. Clique no botão "WhatsApp" no card do lead
2. Abre automaticamente a conversa com o número cadastrado
3. Mensagem pré-formatada pronta para editar

#### Email
1. Clique no ícone de email
2. Abre seu cliente de email padrão
3. Destinatário já preenchido

#### Telefone
- Número exibido no card para ligação direta

### 5. **Adicionar Anotações**
1. Clique no card do lead para abrir os detalhes
2. Role até a seção "Anotações"
3. Digite sua nota (ex: "Ligação realizada dia 15/01 - interessado em Ads Performance")
4. Clique no botão "Salvar"
5. Nota fica registrada com data e hora

---

## 📈 Analytics e Métricas

### Cards de Métricas no Topo:
1. **Total de Leads** - Quantidade total no sistema
2. **Tráfego Orgânico** - Leads vindos de SEO
3. **Tráfego Pago** - Leads de campanhas pagas
4. **Qualificados** - Leads no estágio "Qualificado"

### Filtros e Buscas:
- **Busca Geral** - Nome, email ou empresa
- **Filtros** (futuro) - Por data, origem, estágio

---

## 🔧 Configurações Técnicas

### Armazenamento dos Dados
Por padrão, os leads são salvos no `localStorage` do navegador.

**Para produção, implemente:**
1. Backend API para salvar leads
2. Banco de dados (PostgreSQL, MongoDB, etc)
3. Sistema de notificações por email/Slack
4. Backup automático dos dados

### Arquivos Importantes:
```
/utils/leadTracking.ts          # Lógica de rastreamento
/components/admin/CRMPage.tsx   # Interface do CRM
/components/admin/LoginPage.tsx # Autenticação
/components/sections/CTASection.tsx # Captura de leads
```

### Modificar Credenciais de Acesso:
Edite `/components/admin/LoginPage.tsx`:
```typescript
const ADMIN_CREDENTIALS = {
  username: 'seu_usuario',
  password: 'sua_senha_segura'
};
```

---

## 🚀 Próximos Passos Recomendados

### Integração com Backend Real:
1. **API de Leads**
   ```javascript
   // Exemplo de integração
   async function saveLead(leadData) {
     const response = await fetch('/api/leads', {
       method: 'POST',
       headers: { 'Content-Type': 'application/json' },
       body: JSON.stringify(leadData)
     });
     return response.json();
   }
   ```

2. **Notificações por Email**
   - Enviar email automático quando novo lead chega
   - Notificar equipe comercial via Slack/Telegram

3. **Integração CRM Externo**
   - HubSpot
   - RD Station
   - Pipedrive
   - Salesforce

4. **Analytics Avançado**
   - Google Analytics 4
   - Facebook Pixel
   - Google Tag Manager
   - Hotjar / Microsoft Clarity

---

## 📱 Integração WhatsApp

### Formato do Número:
```javascript
// Brasileiro: +55 (DDD) 9XXXX-XXXX
// Removido automaticamente caracteres especiais
// Exemplo: (11) 99999-9999 → 5511999999999
```

### Customizar Mensagem Inicial:
Edite em `/components/admin/CRMPage.tsx`:
```javascript
const openWhatsApp = (phone: string) => {
  const cleanPhone = phone.replace(/\D/g, '');
  const message = 'Sua mensagem personalizada aqui';
  window.open(`https://wa.me/55${cleanPhone}?text=${encodeURIComponent(message)}`, '_blank');
};
```

---

## 🔒 Segurança

### Recomendações:
1. ✅ Altere credenciais padrão
2. ✅ Implemente autenticação JWT em produção
3. ✅ Use HTTPS sempre
4. ✅ Implemente rate limiting
5. ✅ Valide inputs no backend
6. ✅ Não armazene senhas em plain text
7. ✅ Faça backup regular dos dados

---

## 🆘 Suporte e Troubleshooting

### Lead não apareceu no CRM?
1. Verifique se o formulário foi enviado com sucesso
2. Abra o Console do navegador (F12)
3. Procure por mensagens de erro
4. Verifique se localStorage está habilitado

### Rastreamento não funciona?
1. Verifique se UTM parameters estão corretos na URL
2. Confirme que `initializeTracking()` está sendo chamado
3. Teste com diferentes origens de tráfego

### Não consigo fazer login?
1. Verifique credenciais (case-sensitive)
2. Limpe cache e cookies
3. Verifique localStorage
4. Tente em navegador privado/anônimo

---

## 📞 Contato

Para dúvidas ou suporte técnico, entre em contato com a equipe de desenvolvimento.

---

**Última atualização:** Novembro 2024
**Versão do Sistema:** 1.0.0
