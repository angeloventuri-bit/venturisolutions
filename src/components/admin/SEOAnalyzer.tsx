import { useState, useEffect } from 'react';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { Progress } from '../ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { 
  Search, 
  TrendingUp, 
  AlertCircle, 
  CheckCircle2, 
  XCircle,
  Sparkles,
  Brain,
  Globe,
  FileText,
  Image as ImageIcon,
  Hash,
  Clock,
  BarChart3,
  Lightbulb,
  Share2,
  Eye
} from 'lucide-react';
import { motion } from 'motion/react';

interface SEOAnalyzerProps {
  title: string;
  description?: string;
  excerpt?: string;
  content: string;
  slug?: string;
  tags?: string[];
  category?: string;
  author?: string;
  publishDate?: string;
  featuredImage?: string;
}

interface SEOIssue {
  type: 'error' | 'warning' | 'success';
  category: string;
  message: string;
  impact: 'high' | 'medium' | 'low';
}

export function SEOAnalyzer({
  title,
  description,
  excerpt,
  content,
  slug = '',
  tags = [],
  category = '',
  author = 'Venturi Solutions',
  publishDate = new Date().toISOString(),
  featuredImage = ''
}: SEOAnalyzerProps) {
  const [seoScore, setSeoScore] = useState(0);
  const [issues, setIssues] = useState<SEOIssue[]>([]);
  const [keywords, setKeywords] = useState<{ word: string; count: number; density: number }[]>([]);
  const [readingTime, setReadingTime] = useState(0);

  // Use excerpt as description if description not provided
  const metaDescription = description || excerpt || '';

  useEffect(() => {
    analyzeSEO();
  }, [title, metaDescription, content, slug, tags]);

  const analyzeSEO = () => {
    const newIssues: SEOIssue[] = [];
    let score = 100;

    // Análise de Título
    if (!title) {
      newIssues.push({
        type: 'error',
        category: 'Título',
        message: 'Título está vazio',
        impact: 'high'
      });
      score -= 15;
    } else if (title.length < 30) {
      newIssues.push({
        type: 'warning',
        category: 'Título',
        message: `Título muito curto (${title.length} caracteres). Recomendado: 50-60 caracteres`,
        impact: 'medium'
      });
      score -= 8;
    } else if (title.length > 70) {
      newIssues.push({
        type: 'warning',
        category: 'Título',
        message: `Título muito longo (${title.length} caracteres). Pode ser cortado no Google`,
        impact: 'medium'
      });
      score -= 5;
    } else {
      newIssues.push({
        type: 'success',
        category: 'Título',
        message: `Tamanho ideal (${title.length} caracteres)`,
        impact: 'low'
      });
    }

    // Análise de Descrição
    if (!metaDescription) {
      newIssues.push({
        type: 'error',
        category: 'Descrição',
        message: 'Meta descrição está vazia',
        impact: 'high'
      });
      score -= 15;
    } else if (metaDescription.length < 120) {
      newIssues.push({
        type: 'warning',
        category: 'Descrição',
        message: `Descrição muito curta (${metaDescription.length} caracteres). Recomendado: 150-160 caracteres`,
        impact: 'medium'
      });
      score -= 8;
    } else if (metaDescription.length > 165) {
      newIssues.push({
        type: 'warning',
        category: 'Descrição',
        message: `Descrição muito longa (${metaDescription.length} caracteres). Pode ser cortada no Google`,
        impact: 'medium'
      });
      score -= 5;
    } else {
      newIssues.push({
        type: 'success',
        category: 'Descrição',
        message: `Tamanho ideal (${metaDescription.length} caracteres)`,
        impact: 'low'
      });
    }

    // Análise de Conteúdo
    const wordCount = content.split(/\s+/).length;
    if (wordCount < 300) {
      newIssues.push({
        type: 'error',
        category: 'Conteúdo',
        message: `Conteúdo muito curto (${wordCount} palavras). Mínimo recomendado: 600 palavras`,
        impact: 'high'
      });
      score -= 20;
    } else if (wordCount < 600) {
      newIssues.push({
        type: 'warning',
        category: 'Conteúdo',
        message: `Conteúdo poderia ser mais completo (${wordCount} palavras). Ideal: 1000-2000 palavras`,
        impact: 'medium'
      });
      score -= 10;
    } else {
      newIssues.push({
        type: 'success',
        category: 'Conteúdo',
        message: `Bom tamanho de conteúdo (${wordCount} palavras)`,
        impact: 'low'
      });
    }

    // Análise de Slug
    if (!slug) {
      newIssues.push({
        type: 'error',
        category: 'URL',
        message: 'Slug está vazio',
        impact: 'high'
      });
      score -= 10;
    } else if (slug.length > 60) {
      newIssues.push({
        type: 'warning',
        category: 'URL',
        message: 'Slug muito longo. URLs curtas são melhores para SEO',
        impact: 'low'
      });
      score -= 3;
    } else {
      newIssues.push({
        type: 'success',
        category: 'URL',
        message: 'Slug otimizada',
        impact: 'low'
      });
    }

    // Análise de Imagem
    if (!featuredImage) {
      newIssues.push({
        type: 'warning',
        category: 'Imagem',
        message: 'Nenhuma imagem destacada definida. Importante para redes sociais',
        impact: 'medium'
      });
      score -= 8;
    } else {
      newIssues.push({
        type: 'success',
        category: 'Imagem',
        message: 'Imagem destacada configurada',
        impact: 'low'
      });
    }

    // Análise de Tags
    if (tags.length === 0) {
      newIssues.push({
        type: 'warning',
        category: 'Tags',
        message: 'Nenhuma tag definida. Tags ajudam na categorização',
        impact: 'low'
      });
      score -= 5;
    } else if (tags.length < 3) {
      newIssues.push({
        type: 'warning',
        category: 'Tags',
        message: `Poucas tags (${tags.length}). Recomendado: 3-5 tags`,
        impact: 'low'
      });
      score -= 3;
    } else if (tags.length > 10) {
      newIssues.push({
        type: 'warning',
        category: 'Tags',
        message: `Muitas tags (${tags.length}). Pode parecer spam`,
        impact: 'low'
      });
      score -= 3;
    } else {
      newIssues.push({
        type: 'success',
        category: 'Tags',
        message: `Número ideal de tags (${tags.length})`,
        impact: 'low'
      });
    }

    // Análise de Headings (H2, H3)
    const h2Count = (content.match(/## /g) || []).length;
    const h3Count = (content.match(/### /g) || []).length;
    
    if (h2Count === 0) {
      newIssues.push({
        type: 'error',
        category: 'Estrutura',
        message: 'Nenhum H2 encontrado. Use headings para estruturar o conteúdo',
        impact: 'high'
      });
      score -= 15;
    } else if (h2Count < 3) {
      newIssues.push({
        type: 'warning',
        category: 'Estrutura',
        message: `Poucos H2 (${h2Count}). Recomendado: 3-6 subtítulos`,
        impact: 'medium'
      });
      score -= 8;
    } else {
      newIssues.push({
        type: 'success',
        category: 'Estrutura',
        message: `Boa estrutura de headings (${h2Count} H2, ${h3Count} H3)`,
        impact: 'low'
      });
    }

    // Análise de Links Internos
    const internalLinks = (content.match(/\[.*?\]\(\/.*?\)/g) || []).length;
    if (internalLinks === 0) {
      newIssues.push({
        type: 'warning',
        category: 'Links',
        message: 'Nenhum link interno. Links internos melhoram SEO',
        impact: 'medium'
      });
      score -= 8;
    } else {
      newIssues.push({
        type: 'success',
        category: 'Links',
        message: `${internalLinks} link(s) interno(s) encontrado(s)`,
        impact: 'low'
      });
    }

    // Análise de Palavras-chave
    const extractedKeywords = extractKeywords(content, title);
    setKeywords(extractedKeywords);

    // Tempo de leitura
    const readTime = Math.ceil(wordCount / 200);
    setReadingTime(readTime);

    setIssues(newIssues);
    setSeoScore(Math.max(0, Math.min(100, score)));
  };

  const extractKeywords = (text: string, pageTitle: string) => {
    // Remover markdown e caracteres especiais
    const cleanText = text.toLowerCase()
      .replace(/[#*_`\[\]()]/g, ' ')
      .replace(/\s+/g, ' ');

    // Palavras comuns a ignorar (stop words)
    const stopWords = new Set([
      'o', 'a', 'os', 'as', 'um', 'uma', 'de', 'do', 'da', 'dos', 'das', 'em', 'no', 'na', 'nos', 'nas',
      'para', 'por', 'com', 'sem', 'sob', 'sobre', 'entre', 'até', 'desde', 'ao', 'aos', 'à', 'às',
      'e', 'ou', 'mas', 'que', 'se', 'quando', 'como', 'porque', 'pois', 'então', 'já', 'ainda',
      'muito', 'mais', 'menos', 'bem', 'mal', 'todo', 'toda', 'todos', 'todas', 'cada', 'outro', 'outra',
      'este', 'esta', 'esse', 'essa', 'aquele', 'aquela', 'meu', 'minha', 'seu', 'sua', 'nosso', 'nossa'
    ]);

    const words = cleanText.split(/\s+/).filter(word => 
      word.length > 3 && !stopWords.has(word)
    );

    const wordFrequency = new Map<string, number>();
    words.forEach(word => {
      wordFrequency.set(word, (wordFrequency.get(word) || 0) + 1);
    });

    const totalWords = words.length;
    const keywordList = Array.from(wordFrequency.entries())
      .map(([word, count]) => ({
        word,
        count,
        density: (count / totalWords) * 100
      }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 10);

    return keywordList;
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-500';
    if (score >= 60) return 'text-yellow-500';
    return 'text-red-500';
  };

  const getScoreLabel = (score: number) => {
    if (score >= 90) return 'Excelente';
    if (score >= 80) return 'Bom';
    if (score >= 60) return 'Médio';
    if (score >= 40) return 'Ruim';
    return 'Crítico';
  };

  return (
    <div className="space-y-6">
      {/* Score Card */}
      <Card className="p-6 bg-black/40 border-primary/20">
        <div className="flex items-start justify-between mb-6">
          <div>
            <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
              <Search className="w-5 h-5 text-primary" />
              Análise de SEO
            </h3>
            <p className="text-gray-400 text-sm">
              Otimização para mecanismos de busca e IAs generativas
            </p>
          </div>
          <div className="text-right">
            <div className={`text-4xl font-bold ${getScoreColor(seoScore)}`}>
              {seoScore}
            </div>
            <div className="text-sm text-gray-400">{getScoreLabel(seoScore)}</div>
          </div>
        </div>

        <Progress value={seoScore} className="h-3 mb-4" />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <div className="bg-white/5 p-3 rounded-lg border border-white/10">
            <div className="text-gray-400 text-xs mb-1">Palavras</div>
            <div className="text-2xl font-bold">{content.split(/\s+/).length}</div>
          </div>
          <div className="bg-white/5 p-3 rounded-lg border border-white/10">
            <div className="text-gray-400 text-xs mb-1">Tempo Leitura</div>
            <div className="text-2xl font-bold">{readingTime} min</div>
          </div>
          <div className="bg-white/5 p-3 rounded-lg border border-white/10">
            <div className="text-gray-400 text-xs mb-1">Problemas</div>
            <div className="text-2xl font-bold text-red-400">
              {issues.filter(i => i.type === 'error').length}
            </div>
          </div>
          <div className="bg-white/5 p-3 rounded-lg border border-white/10">
            <div className="text-gray-400 text-xs mb-1">Avisos</div>
            <div className="text-2xl font-bold text-yellow-400">
              {issues.filter(i => i.type === 'warning').length}
            </div>
          </div>
        </div>
      </Card>

      {/* Tabs de Análise */}
      <Tabs defaultValue="issues" className="w-full">
        <TabsList className="grid w-full grid-cols-4 bg-black/40 border border-primary/20">
          <TabsTrigger value="issues" className="data-[state=active]:bg-primary/20">
            <AlertCircle className="w-4 h-4 mr-2" />
            Problemas
          </TabsTrigger>
          <TabsTrigger value="preview" className="data-[state=active]:bg-primary/20">
            <Eye className="w-4 h-4 mr-2" />
            Preview
          </TabsTrigger>
          <TabsTrigger value="keywords" className="data-[state=active]:bg-primary/20">
            <Hash className="w-4 h-4 mr-2" />
            Palavras-chave
          </TabsTrigger>
          <TabsTrigger value="geo" className="data-[state=active]:bg-primary/20">
            <Brain className="w-4 h-4 mr-2" />
            GEO (IA)
          </TabsTrigger>
        </TabsList>

        {/* Tab: Problemas e Sugestões */}
        <TabsContent value="issues" className="space-y-4">
          <Card className="p-6 bg-black/40 border-primary/20">
            <h4 className="font-semibold mb-4 flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-yellow-500" />
              Problemas e Sugestões
            </h4>
            <div className="space-y-3">
              {issues.map((issue, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className={`p-4 rounded-lg border ${
                    issue.type === 'error'
                      ? 'bg-red-500/10 border-red-500/30'
                      : issue.type === 'warning'
                      ? 'bg-yellow-500/10 border-yellow-500/30'
                      : 'bg-green-500/10 border-green-500/30'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    {issue.type === 'error' ? (
                      <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    ) : issue.type === 'warning' ? (
                      <AlertCircle className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                    ) : (
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    )}
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-semibold text-sm">{issue.category}</span>
                        <Badge
                          variant="outline"
                          className={`text-xs ${
                            issue.impact === 'high'
                              ? 'border-red-500/50 text-red-400'
                              : issue.impact === 'medium'
                              ? 'border-yellow-500/50 text-yellow-400'
                              : 'border-gray-500/50 text-gray-400'
                          }`}
                        >
                          {issue.impact === 'high' ? 'Alto impacto' : issue.impact === 'medium' ? 'Médio impacto' : 'Baixo impacto'}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-300">{issue.message}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </Card>
        </TabsContent>

        {/* Tab: Preview Google e Redes Sociais */}
        <TabsContent value="preview" className="space-y-4">
          <Card className="p-6 bg-black/40 border-primary/20">
            <h4 className="font-semibold mb-4 flex items-center gap-2">
              <Search className="w-5 h-5 text-blue-500" />
              Preview no Google
            </h4>
            <div className="bg-white p-4 rounded-lg">
              <div className="text-xs text-gray-600 mb-1">
                venturisolutions.com.br › blog › {slug}
              </div>
              <div className="text-blue-600 text-xl mb-2 hover:underline cursor-pointer">
                {title || 'Título do Post'}
              </div>
              <div className="text-sm text-gray-700">
                {publishDate && new Date(publishDate).toLocaleDateString('pt-BR')} — {description || 'Meta descrição do post aparece aqui...'}
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-black/40 border-primary/20">
            <h4 className="font-semibold mb-4 flex items-center gap-2">
              <Share2 className="w-5 h-5 text-primary" />
              Preview Redes Sociais (Open Graph)
            </h4>
            <div className="bg-gray-100 p-4 rounded-lg">
              {featuredImage && (
                <div className="mb-3 bg-gray-300 h-48 rounded-lg flex items-center justify-center">
                  <ImageIcon className="w-12 h-12 text-gray-400" />
                </div>
              )}
              <div className="text-xs text-gray-500 mb-1">
                VENTURISOLUTIONS.COM.BR
              </div>
              <div className="text-lg font-semibold text-gray-900 mb-1">
                {title || 'Título do Post'}
              </div>
              <div className="text-sm text-gray-600">
                {description?.substring(0, 100) || 'Descrição do post aparece aqui...'}
              </div>
            </div>
          </Card>
        </TabsContent>

        {/* Tab: Palavras-chave */}
        <TabsContent value="keywords" className="space-y-4">
          <Card className="p-6 bg-black/40 border-primary/20">
            <h4 className="font-semibold mb-4 flex items-center gap-2">
              <Hash className="w-5 h-5 text-primary" />
              Top 10 Palavras-chave Encontradas
            </h4>
            <div className="space-y-2">
              {keywords.map((kw, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 bg-white/5 rounded-lg border border-white/10"
                >
                  <div className="flex items-center gap-3">
                    <div className="text-lg font-bold text-primary">
                      #{index + 1}
                    </div>
                    <div>
                      <div className="font-semibold">{kw.word}</div>
                      <div className="text-xs text-gray-400">
                        Densidade: {kw.density.toFixed(2)}%
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold">{kw.count}</div>
                    <div className="text-xs text-gray-400">ocorrências</div>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6 bg-black/40 border-primary/20">
            <h4 className="font-semibold mb-4 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-green-500" />
              Recomendações de Keywords
            </h4>
            <div className="space-y-3 text-sm text-gray-300">
              <div className="p-3 bg-blue-500/10 border border-blue-500/30 rounded-lg">
                <strong className="text-blue-400">Densidade ideal:</strong> Entre 1-3% para palavra-chave principal
              </div>
              <div className="p-3 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
                <strong className="text-yellow-400">LSI Keywords:</strong> Use sinônimos e variações da palavra-chave principal
              </div>
              <div className="p-3 bg-green-500/10 border border-green-500/30 rounded-lg">
                <strong className="text-green-400">Long-tail:</strong> Foque em palavras-chave de cauda longa (3-5 palavras)
              </div>
            </div>
          </Card>
        </TabsContent>

        {/* Tab: GEO (Generative Engine Optimization) */}
        <TabsContent value="geo" className="space-y-4">
          <Card className="p-6 bg-black/40 border-primary/20">
            <h4 className="font-semibold mb-4 flex items-center gap-2">
              <Brain className="w-5 h-5 text-purple-500" />
              GEO - Otimização para IAs Generativas
            </h4>
            <p className="text-sm text-gray-400 mb-6">
              Seu conteúdo está sendo otimizado para aparecer em respostas de ChatGPT, Gemini, Perplexity e outras IAs generativas.
            </p>

            <div className="space-y-4">
              {/* Schema Markup */}
              <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  <strong className="text-green-400">Schema Markup Configurado</strong>
                </div>
                <p className="text-sm text-gray-300">
                  Dados estruturados JSON-LD estão configurados automaticamente para Article, Author, Publisher e Organization.
                </p>
              </div>

              {/* FAQ Schema */}
              <div className="p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Lightbulb className="w-5 h-5 text-yellow-500" />
                  <strong className="text-yellow-400">Recomendação: FAQ Schema</strong>
                </div>
                <p className="text-sm text-gray-300 mb-3">
                  Adicione uma seção de FAQs ao final do post para melhorar aparição em featured snippets e IAs.
                </p>
                <div className="text-xs font-mono bg-black/40 p-3 rounded border border-white/10">
                  ## Perguntas Frequentes<br /><br />
                  ### Como fazer X?<br />
                  Resposta objetiva aqui...<br /><br />
                  ### Qual é o melhor Y?<br />
                  Resposta objetiva aqui...
                </div>
              </div>

              {/* Listas e Dados Estruturados */}
              <div className="p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <BarChart3 className="w-5 h-5 text-blue-500" />
                  <strong className="text-blue-400">Use Listas e Dados Estruturados</strong>
                </div>
                <p className="text-sm text-gray-300">
                  IAs adoram conteúdo estruturado: listas numeradas, bullet points, tabelas e estatísticas com fontes.
                </p>
              </div>

              {/* Citabilidade */}
              <div className="p-4 bg-purple-500/10 border border-purple-500/30 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <FileText className="w-5 h-5 text-purple-500" />
                  <strong className="text-purple-400">Citabilidade</strong>
                </div>
                <p className="text-sm text-gray-300">
                  Inclua dados, estatísticas e informações que IAs possam citar. Use: "De acordo com [estudo/pesquisa]..."
                </p>
              </div>

              {/* Responda Perguntas Diretas */}
              <div className="p-4 bg-pink-500/10 border border-pink-500/30 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="w-5 h-5 text-pink-500" />
                  <strong className="text-pink-400">Respostas Diretas</strong>
                </div>
                <p className="text-sm text-gray-300">
                  Comece parágrafos com respostas diretas. Ex: "A melhor forma de fazer X é..." ou "Sim, você pode..."
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-black/40 border-primary/20">
            <h4 className="font-semibold mb-4 flex items-center gap-2">
              <Globe className="w-5 h-5 text-cyan-500" />
              Checklist GEO
            </h4>
            <div className="space-y-2">
              {[
                { label: 'Dados estruturados (Schema)', checked: true },
                { label: 'Título claro e direto', checked: title.length > 30 },
                { label: 'Conteúdo > 600 palavras', checked: content.split(/\s+/).length > 600 },
                { label: 'Subtítulos (H2/H3)', checked: (content.match(/## /g) || []).length > 0 },
                { label: 'Listas ou bullet points', checked: content.includes('- ') || content.includes('* ') },
                { label: 'Respostas diretas', checked: true },
                { label: 'Dados/estatísticas citáveis', checked: false },
                { label: 'Seção de FAQ', checked: content.toLowerCase().includes('perguntas') }
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/10"
                >
                  {item.checked ? (
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                  ) : (
                    <XCircle className="w-5 h-5 text-gray-500 flex-shrink-0" />
                  )}
                  <span className={item.checked ? 'text-white' : 'text-gray-400'}>
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}