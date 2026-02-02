import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { createClient } from '@supabase/supabase-js';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Share2, Layers, Cpu } from 'lucide-react';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Navigation } from '../sections/Navigation';
import { Footer } from '../sections/Footer';

// MOCK DE DADOS (Enquanto você não popula o banco)
// Na produção, isso viria do Supabase: const { data } = await supabase.from('generated_pages')...
const MOCK_PAGES: Record<string, any> = {
  'figma-para-react': {
    title: 'Como converter design do Figma para React',
    description: 'Guia completo de implementação high-end transformando layouts Figma em componentes React performáticos.',
    content: {
      intro: 'A ponte entre Design e Engenharia é onde a maioria dos projetos perde performance. Neste guia técnico, abordamos a conversão pixel-perfect.',
      steps: [
        'Exportação de Assets Otimizados (SVG vs PNG)',
        'Tokenização de Design System (Variables)',
        'Componentização Atômica no React',
        'Implementação de Responsividade Mobile-First'
      ],
      tech_stack: ['Figma', 'React', 'Tailwind CSS', 'TypeScript']
    },
    related: [
      { title: 'Figma para Vue.js', slug: 'figma-para-vue' },
      { title: 'Otimização de Assets no React', slug: 'otimizacao-assets-react' }
    ]
  },
  'react-vs-vue': {
    title: 'React vs Vue: Qual escolher para Enterprise SEO?',
    description: 'Uma análise técnica comparativa focada em renderização, hidratação e métricas de Core Web Vitals.',
    content: {
      intro: 'A escolha do framework impacta diretamente o TBT (Total Blocking Time) e o LCP. Analisamos os dois gigantes sob a ótica do SEO Técnico.',
      steps: [
        'Análise de Virtual DOM',
        'Estratégias de Hydration',
        'Ecossistema de SSR (Next.js vs Nuxt)',
        'Performance em Dispositivos Low-End'
      ],
      tech_stack: ['React', 'Vue.js', 'Vite', 'Webpack']
    },
    related: [
      { title: 'Angular para SEO', slug: 'angular-seo' },
      { title: 'React Server Components', slug: 'react-server-components' }
    ]
  }
};

export function ProgrammaticSEOPage() {
  const { slug } = useParams<{ slug: string }>();
  const [pageData, setPageData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // SIMULAÇÃO DE FETCH NO SUPABASE
    // Em produção: 
    // const { data } = await supabase.from('generated_pages').select('*').eq('slug', slug).single();
    
    setLoading(true);
    // INSTRUÇÃO PARA O DEV:
    // Para usar a lógica SQL real que criamos no arquivo seed-pseo-content.sql:
    // 1. Descomente a linha abaixo e remova o setTimeout/MOCK
    /*
    const { data: page, error } = await supabase
      .from('generated_pages')
      .select('*')
      .eq('slug', slug)
      .single();

    if (page) {
       // Buscar relacionados usando a função RPC criada no SQL
       const { data: related } = await supabase
         .rpc('get_related_pages_by_tags', { current_slug: slug });
         
       setPageData({ ...page, related: related || [] });
    }
    */
    
    // MOCK SIMULADO (Para visualização imediata sem backend conectado)
    setTimeout(() => {
      if (slug && MOCK_PAGES[slug]) {
        setPageData(MOCK_PAGES[slug]);
      } else {
        // Fallback genérico para demonstrar o template mesmo sem dados mockados
        setPageData({
          title: slug?.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
          description: `Artigo técnico detalhado sobre ${slug?.replace('-', ' ')}.`,
          content: {
            intro: 'Conteúdo gerado dinamicamente baseado na estrutura de tópicos semânticos.',
            steps: ['Análise de Contexto', 'Implementação Técnica', 'Validação de Performance'],
            tech_stack: ['Tech A', 'Tech B']
          },
          related: []
        });
      }
      setLoading(false);
    }, 500);
  }, [slug]);

  if (loading) {
    return <div className="min-h-screen bg-background flex items-center justify-center">Carregando...</div>;
  }

  if (!pageData) return <div>Página não encontrada</div>;

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/20">
      {/* SEO DINÂMICO (REACT HELMET) */}
      <Helmet>
        <title>{pageData.title} | Venturi Engineering</title>
        <meta name="description" content={pageData.description} />
        <link rel="canonical" href={`https://venturisolutions.com.br/topic/${slug}`} />

        {/* Open Graph / Facebook / WhatsApp */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={pageData.title} />
        <meta property="og:description" content={pageData.description} />
        <meta property="og:url" content={`https://venturisolutions.com.br/topic/${slug}`} />
        {/* Em produção, use uma imagem gerada dinamicamente ou estática do banco */}
        <meta property="og:image" content="https://venturisolutions.com.br/og-image-default.jpg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageData.title} />
        <meta name="twitter:description" content={pageData.description} />
        
        {/* Schema.org Article/TechArticle */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TechArticle",
            "headline": pageData.title,
            "description": pageData.description,
            "articleBody": pageData.content.intro,
            "dependencies": pageData.content.tech_stack.join(', ')
          })}
        </script>
      </Helmet>

      <Navigation />

      <main className="pt-32 pb-20 px-6">
        <article className="max-w-4xl mx-auto">
          {/* Header Semântico */}
          <header className="mb-16">
            <Badge variant="outline" className="mb-6 text-primary border-primary/30">
              Engenharia de Software & SEO
            </Badge>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
              {pageData.title}
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl border-l-4 border-primary pl-6">
              {pageData.description}
            </p>
          </header>

          {/* Conteúdo Gerado (Estrutura pSEO) */}
          <div className="grid lg:grid-cols-3 gap-12">
            
            {/* Coluna Principal */}
            <div className="lg:col-span-2 space-y-12">
              <section className="prose prose-invert max-w-none">
                <p className="text-lg leading-relaxed mb-8">
                  {pageData.content.intro}
                </p>

                <div className="bg-secondary/10 rounded-xl p-8 border border-white/5">
                  <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                    <Layers className="w-5 h-5 text-primary" />
                    Pontos Chave da Implementação
                  </h3>
                  <ul className="space-y-4">
                    {pageData.content.steps.map((step: string, i: number) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                        <span>{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              {/* CTA Contextual */}
              <div className="bg-gradient-to-r from-primary/20 to-purple-500/10 p-8 rounded-2xl border border-primary/20">
                <h3 className="text-2xl font-bold mb-2">Precisa escalar essa solução?</h3>
                <p className="mb-6 text-muted-foreground">
                  Nossa equipe de engenharia implementa arquiteturas como essa diariamente.
                </p>
                <Button className="w-full sm:w-auto">Agendar Code Review</Button>
              </div>
            </div>

            {/* Sidebar Semântica (Linkagem Interna via Vetores) */}
            <aside className="space-y-8">
              <div className="p-6 rounded-xl border border-white/10 bg-card/50 sticky top-32">
                <h4 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-6 flex items-center gap-2">
                  <Cpu className="w-4 h-4" />
                  Stack Tecnológica
                </h4>
                <div className="flex flex-wrap gap-2 mb-8">
                  {pageData.content.tech_stack.map((tech: string) => (
                    <Badge key={tech} variant="secondary" className="bg-secondary/50">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="h-px w-full bg-white/10 mb-8" />

                <h4 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-6 flex items-center gap-2">
                  <Share2 className="w-4 h-4" />
                  Relacionados (AI Match)
                </h4>
                
                {pageData.related && pageData.related.length > 0 ? (
                  <ul className="space-y-4">
                    {pageData.related.map((item: any, i: number) => (
                      <li key={i}>
                        <Link 
                          to={`/topic/${item.slug}`}
                          className="block group"
                        >
                          <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors line-clamp-2">
                            {item.title}
                          </span>
                          <span className="text-xs text-muted-foreground group-hover:text-primary/70">
                            Ler análise completa &rarr;
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-sm text-muted-foreground italic">
                    Nenhum tópico relacionado encontrado via vetor.
                  </p>
                )}
              </div>
            </aside>

          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}