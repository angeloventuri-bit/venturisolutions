# 📝 Guia de Gerenciamento de Conteúdo - Venturi Solutions

## 🎯 Visão Geral

Este guia explica como adicionar, editar e gerenciar:
- ✍️ Posts de Blog
- 🛠️ Soluções/Serviços
- 📦 Produtos

**Sistema de Conteúdo: Arquivos TypeScript estruturados**
- ✅ Simples de editar (não precisa de banco de dados)
- ✅ Versionado com Git
- ✅ Type-safe (erros detectados automaticamente)
- ✅ Performance máxima (sem API calls)

---

## 📚 Como Adicionar/Editar Posts de Blog

### 📂 Arquivo: `/content/blog-posts.ts`

### ✏️ Adicionar Novo Post

```typescript
{
  id: '5', // Próximo número sequencial
  slug: 'seu-post-url-amigavel', // URL: /blog/seu-post-url-amigavel
  title: 'Título do Seu Post',
  excerpt: 'Resumo curto e atrativo que aparece nos cards',
  category: 'Performance & Ads', // ou 'Tecnologia & IA', 'SEO & GEO', etc
  author: 'Equipe Venturi',
  date: '30 Out 2025',
  readTime: '12 min',
  image: 'URL_DA_IMAGEM_AQUI', // Unsplash ou outra fonte
  tags: ['Tag1', 'Tag2', 'Tag3'],
  featured: false, // true = aparece em destaque na home
  content: `
# Título do Post

## Subtítulo

Conteúdo do post aqui em **Markdown**.

### Seção 1
Texto da seção...

### Seção 2
Mais conteúdo...

## Conclusão
Texto de conclusão...
  `
}
```

### 🎨 Dicas de Conteúdo

**Título:**
- Máximo 60 caracteres
- Chamativo e claro
- Use números (ex: "5 Formas de...", "Como Aumentar em 300%")

**Excerpt:**
- 120-150 caracteres
- Desperte curiosidade
- Inclua benefício claro

**Conteúdo:**
- Use Markdown (# para títulos, ** para negrito, etc)
- Estruture com subtítulos (##, ###)
- Inclua exemplos práticos
- Termine com CTA

**Tags:**
- 3-5 tags relevantes
- Use tags existentes quando possível
- Mantenha consistência

---

## 🛠️ Como Adicionar/Editar Soluções

### 📂 Arquivo: `/content/solutions.ts`

### ✏️ Adicionar Nova Solução

```typescript
{
  id: '7',
  slug: 'nome-da-solucao',
  title: 'Nome da Solução',
  subtitle: 'Frase de impacto',
  description: 'Descrição completa de 1-2 parágrafos',
  icon: 'NomeDoIcone', // Lucide React icon name
  image: 'URL_DA_IMAGEM',
  
  benefits: [
    'Benefício 1',
    'Benefício 2',
    'Benefício 3'
  ],
  
  features: [
    'Feature 1',
    'Feature 2',
    'Feature 3'
  ],
  
  process: [
    {
      step: 1,
      title: 'Primeira Etapa',
      description: 'Descrição do que acontece'
    },
    {
      step: 2,
      title: 'Segunda Etapa',
      description: 'Descrição do que acontece'
    }
  ],
  
  pricing: {
    starter: 2500,
    professional: 5500,
    enterprise: 12000
  },
  
  caseStudy: {
    client: 'Nome do Cliente',
    challenge: 'Desafio enfrentado',
    solution: 'Como resolvemos',
    results: [
      'Resultado 1',
      'Resultado 2',
      'Resultado 3'
    ]
  },
  
  faq: [
    {
      question: 'Pergunta 1?',
      answer: 'Resposta detalhada...'
    },
    {
      question: 'Pergunta 2?',
      answer: 'Resposta detalhada...'
    }
  ]
}
```

### 🎯 Estrutura Ideal de Solução

**Benefits vs Features:**
- **Benefits** = Resultados/Impacto (ex: "Aumento de 300% no ROI")
- **Features** = O que está incluído (ex: "Google Ads", "Meta Ads")

**Process:**
- 3-5 steps idealmente
- Cada step com título claro e descrição de 1-2 linhas

**Pricing:**
- 3 tiers: Starter, Professional, Enterprise
- Valores em reais (sem centavos)
- Professional = mais popular (destaque automático)

**Case Study (opcional):**
- Use cliente real ou fictício inspirado em caso real
- Números específicos nos resultados
- Formato: +X% ou R$ X

**FAQ:**
- 3-5 perguntas mais frequentes
- Respostas objetivas e honestas
- Antecipe objeções comuns

---

## 🔗 Como Funcionam as URLs

### Blog Posts
```
/blog/como-aumentar-roi-campanhas-pagas-300
/blog/ia-generativa-crescimento-negocios-b2b
```

### Soluções
```
/solucoes/ads-performance
/solucoes/sites-landing-pages
/solucoes/seo-geo-360
```

**URLs são definidas pelo campo `slug`**

---

## 🖼️ Como Adicionar Imagens

### Opção 1: Unsplash (Recomendado)
1. Acesse [unsplash.com](https://unsplash.com)
2. Busque imagem relevante
3. Clique com botão direito > Copiar endereço da imagem
4. Cole a URL completa no campo `image`

### Opção 2: Imgur (Upload próprio)
1. Acesse [imgur.com](https://imgur.com)
2. Faça upload da imagem
3. Copie o "Direct Link"
4. Cole no campo `image`

### Opção 3: Cloudinary/CDN próprio
- Se tiver CDN configurado, use URLs do seu domínio

**Dimensões recomendadas:**
- Blog featured: 1200x600px
- Blog regular: 800x400px
- Soluções: 1200x600px

---

## 📊 Categorias e Tags

### Categorias de Blog (usar existentes)
- `Performance & Ads`
- `Tecnologia & IA`
- `SEO & GEO`
- `Estratégia Comercial`

**Para adicionar nova categoria:**
1. Edite `/content/blog-posts.ts`
2. Use a nova categoria no post
3. Sistema detecta automaticamente

### Tags Populares
- ROI, CAC, LTV
- Google Ads, Meta Ads
- SEO, GEO
- IA, Automação
- Vendas, Performance
- B2B, B2C

---

## 🚀 Workflow de Publicação

### 1. Editar Conteúdo
```bash
# Edite o arquivo relevante
nano /content/blog-posts.ts
# ou
nano /content/solutions.ts
```

### 2. Verificar Erros
- TypeScript detectará erros automaticamente
- Campos obrigatórios faltando
- Tipos incorretos

### 3. Testar Localmente
```bash
# Site atualiza automaticamente
# Navegue para a nova URL
```

### 4. Deploy (Git)
```bash
git add content/
git commit -m "Adiciona novo post: [Título]"
git push
```

**Deploy é automático!** 🎉

---

## ✅ Checklist de Qualidade

### Para Blog Posts
- [ ] Título chamativo (< 60 caracteres)
- [ ] Excerpt atrativo (120-150 caracteres)
- [ ] Categoria correta
- [ ] 3-5 tags relevantes
- [ ] Imagem de boa qualidade
- [ ] Conteúdo estruturado com Markdown
- [ ] CTA no final
- [ ] Sem erros de português

### Para Soluções
- [ ] Título claro
- [ ] Subtitle de impacto
- [ ] 5+ benefits
- [ ] 8+ features
- [ ] 3-5 process steps
- [ ] Pricing nos 3 tiers
- [ ] Case study (opcional mas recomendado)
- [ ] 3-5 FAQs
- [ ] Imagem representativa

---

## 💡 Dicas de SEO

### URLs (Slugs)
- Use apenas letras minúsculas
- Separe com hífens (-)
- Sem acentos ou caracteres especiais
- Mantenha curto (3-5 palavras)
- Inclua palavra-chave principal

**Bom:** `como-aumentar-roi-ads`
**Ruim:** `Como_Aumentar_o_ROI_das_Suas_Campanhas_de_Google_Ads_2025`

### Títulos
- Inclua palavra-chave principal
- Use números quando relevante
- Desperte curiosidade

### Conteúdo
- Mínimo 800 palavras para blog
- Use subtítulos (##, ###)
- Inclua listas e exemplos
- Adicione internal links quando relevante

---

## 🤔 FAQ Técnico

### Como adicionar nova categoria?
Apenas use no post. O sistema detecta automaticamente.

### Posso usar HTML no conteúdo?
Sim, mas prefira Markdown para melhor manutenção.

### E se eu deletar um post?
Remova do array. URLs antigas retornarão 404.

### Como reordenar posts na home?
Posts são exibidos na ordem do array. Primeiros = primeiro na home.

### Como destacar um post?
Defina `featured: true`

### Onde ficam as imagens?
Use URLs externas (Unsplash, Imgur, CDN). Não use arquivos locais.

---

## 🆘 Problemas Comuns

### "Post não encontrado"
- Verifique se o `slug` está correto
- Slug deve ser único
- Sem espaços ou caracteres especiais

### Imagem não carrega
- URL deve ser completa (https://...)
- Teste a URL no navegador diretamente
- Use HTTPS, não HTTP

### Erros no TypeScript
- Todos os campos obrigatórios devem estar preenchidos
- Respeite os tipos (string, number, array)
- Use vírgulas entre objetos no array

---

## 📞 Suporte

Dúvidas sobre gerenciamento de conteúdo?
- Email: dev@venturi.com.br
- Docs: Este arquivo
- Exemplos: Veja posts existentes em `/content/blog-posts.ts`

---

**Última atualização:** 30 Out 2025
**Versão:** 1.0
