# 🌐 CONFIGURAÇÃO DE DOMÍNIO

## ❓ **QUAL É SEU DOMÍNIO?**

Por favor, me informe qual domínio você já conectou:

- [ ] venturisolutions.com.br
- [ ] venturi.com.br
- [ ] Outro: _______________

---

## 🔧 **O QUE PRECISO CONFIGURAR:**

Quando você me informar o domínio, vou atualizar:

### 1. `/public/_redirects`
```
# Force HTTPS
http://seudominio.com.br/*  https://seudominio.com.br/:splat  301

# Force non-WWW (ou WWW)
https://www.seudominio.com.br/*  https://seudominio.com.br/:splat  301
```

### 2. `/public/sitemap.xml`
```xml
<loc>https://seudominio.com.br/</loc>
```

### 3. `/public/robots.txt`
```
Sitemap: https://seudominio.com.br/sitemap.xml
```

### 4. Componente SEO
Atualizar canonical URLs para o domínio correto

---

## 📋 **CHECKLIST PÓS-DOMÍNIO**

Depois que eu configurar tudo, você precisa:

### 1. ✅ **Verificar HTTPS:**
```
https://seudominio.com.br
```
Deve ter cadeado verde 🔒

### 2. ✅ **Testar Redirects:**
```
http://seudominio.com.br → deve redirecionar para HTTPS
https://www.seudominio.com.br → deve redirecionar (com ou sem www)
```

### 3. ✅ **Google Search Console:**

1. Acesse: https://search.google.com/search-console
2. Clique em "Adicionar propriedade"
3. Digite: `https://seudominio.com.br`
4. Escolha método de verificação:

**OPÇÃO A - Meta Tag (mais fácil):**
```html
<!-- Copie a meta tag do Google -->
<!-- Cole no /index.html dentro do <head> -->
<meta name="google-site-verification" content="CODIGO_AQUI" />
```

**OPÇÃO B - DNS (via Cloudflare):**
```
Tipo: TXT
Nome: @
Valor: google-site-verification=XXXXX
```

5. Clique em "Verificar"

### 4. ✅ **Enviar Sitemap:**

No Google Search Console:
1. Menu lateral → "Sitemaps"
2. Adicionar novo sitemap
3. Digite: `sitemap.xml`
4. Clique em "Enviar"

### 5. ✅ **Solicitar Indexação:**

1. Vá em "Inspeção de URL"
2. Cole: `https://seudominio.com.br/`
3. Clique em "Solicitar indexação"

Repita para URLs importantes:
- `/blog`
- `/solucoes/ads-performance`
- `/solucoes/sites-landing-pages`
- etc.

---

## 🎯 **VERIFICAR SE ESTÁ INDEXADO**

Depois de 24-48 horas, teste:

```
Google: site:seudominio.com.br
```

Se aparecer resultados = ✅ Indexado!

---

## 📊 **CLOUDFLARE ANALYTICS**

No Cloudflare Dashboard:

1. Vá no seu site
2. Menu "Analytics & Logs" → "Web Analytics"
3. Ative se ainda não estiver

Você verá:
- Visitantes em tempo real
- Páginas mais acessadas
- Origem do tráfego
- Desempenho

---

## 🚀 **OTIMIZAÇÕES CLOUDFLARE**

### 1. **Speed → Optimization:**
- ✅ Auto Minify (JS, CSS, HTML)
- ✅ Brotli
- ✅ Early Hints
- ✅ Rocket Loader

### 2. **SSL/TLS:**
- Mode: **Full (strict)**
- ✅ Always Use HTTPS
- ✅ HTTP Strict Transport Security (HSTS)
- ✅ Minimum TLS Version: 1.2

### 3. **Caching:**
- Cache Level: **Standard**
- Browser Cache TTL: **4 hours**

### 4. **Security:**
- Security Level: **Medium**
- ✅ Bot Fight Mode
- ✅ Email Address Obfuscation

---

## 📧 **EMAIL PROFISSIONAL (OPCIONAL)**

Com domínio próprio, você pode ter:
- contato@seudominio.com.br
- comercial@seudominio.com.br
- angelo@seudominio.com.br

**Opções:**

### 1. **Google Workspace** (recomendado)
- Custo: R$ 30/mês por usuário
- Gmail + Drive + Meet
- Site: https://workspace.google.com

### 2. **Cloudflare Email Routing** (grátis!)
- Apenas forwarding (encaminha para Gmail pessoal)
- Grátis ilimitado
- Configuração: Cloudflare Dashboard → Email

### 3. **Titan (Hostinger)**
- Custo: R$ 15/mês
- Email profissional simples

---

## 🎨 **FAVICON**

Adicione um favicon ao site:

1. Crie uma imagem 512x512px com logo Venturi
2. Converta para `.png` ou `.ico`
3. Salve como `/public/favicon.png`
4. Adicione no `/index.html`:

```html
<head>
  <link rel="icon" type="image/png" href="/favicon.png" />
  <link rel="apple-touch-icon" href="/favicon.png" />
</head>
```

---

## 📱 **REDES SOCIAIS**

Atualize links em:

### Instagram:
- Bio: "Transformando Marketing em Resultados"
- Link: https://seudominio.com.br
- Story Highlight: "Site" → Link

### LinkedIn (Empresa):
- Website: https://seudominio.com.br
- Post de lançamento: "Novo site no ar! 🚀"

### LinkedIn (Pessoal):
- Site no perfil
- Post sobre lançamento

### Facebook:
- Página da empresa
- Website: https://seudominio.com.br

---

## 🎯 **PRÓXIMOS PASSOS**

### **AGORA:**
1. Me informe o domínio
2. Eu atualizo todos os arquivos
3. Você faz commit + push
4. Cloudflare faz deploy automático

### **HOJE:**
- Configure Google Search Console
- Envie sitemap
- Solicite indexação

### **ESTA SEMANA:**
- Publique 2-3 posts no blog
- Compartilhe em redes sociais
- Configure email profissional (opcional)

### **ESTE MÊS:**
- Monitore Analytics
- Otimize páginas com mais tráfego
- Crie mais conteúdo

---

## ⚡ **ME INFORME O DOMÍNIO**

Para eu configurar tudo corretamente, me diga:

**Qual é o domínio?**
- [ ] venturisolutions.com.br
- [ ] venturi.com.br
- [ ] Outro: _______________

**Você quer:**
- [ ] Sem WWW (https://dominio.com.br)
- [ ] Com WWW (https://www.dominio.com.br)

**Já tem HTTPS funcionando?**
- [ ] Sim, cadeado verde
- [ ] Não, ainda HTTP
- [ ] Não sei

---

## 🆘 **PROBLEMAS COMUNS**

### "Domínio não carrega"
- Aguarde propagação DNS (até 24h)
- Verifique nameservers no Cloudflare
- Force refresh: Ctrl + Shift + R

### "HTTPS não funciona"
- No Cloudflare: SSL/TLS → Full (strict)
- Aguarde 15 minutos para certificado provisionar

### "Redirect loop (erro infinito)"
- Cloudflare: SSL/TLS → Mude para "Full (strict)"
- Desative "Always Use HTTPS" temporariamente

### "404 em rotas internas"
- Verifique se `_redirects` está correto
- Deve ter: `/* /index.html 200`

---

**Me informe o domínio agora para eu configurar tudo! 🚀**
