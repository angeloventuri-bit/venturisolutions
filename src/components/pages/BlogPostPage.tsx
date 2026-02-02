import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Clock, User, Calendar, Tag, Share2 } from 'lucide-react';
import { Navigation } from '../sections/Navigation';
import { Footer } from '../sections/Footer';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Card } from '../ui/card';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { SEO } from '../utils/SEO';
import { generateArticleSchema, generateBreadcrumbSchema, extractGEOContent } from '../utils/SEOHead';
import { useContactDialog } from '../../utils/useContactDialog';
import { ContactFormDialog } from '../ContactFormDialog';
import { TableOfContents } from '../blog/TableOfContents';

// Local storage key (same as BlogManager)
const BLOG_POSTS_KEY = 'venturi_blog_posts';

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string[];
  image: string;
  author: string;
  date: string;
  dateISO?: string;
  readTime: string;
  featured: boolean;
  geoSummary?: string;
  keywords?: string[];
}

export function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { openDialog, isOpen, closeDialog } = useContactDialog();
  
  // Load posts from localStorage
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [post, setPost] = useState<BlogPost | undefined>();

  useEffect(() => {
    const savedPosts = localStorage.getItem(BLOG_POSTS_KEY);
    if (savedPosts) {
      const posts = JSON.parse(savedPosts);
      setBlogPosts(posts);
      const foundPost = posts.find((p: BlogPost) => p.slug === slug);
      setPost(foundPost);
    }
  }, [slug]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl mb-4">Post não encontrado</h1>
          <Button onClick={() => navigate('/blog')}>Voltar para o Blog</Button>
        </div>
      </div>
    );
  }

  // Posts relacionados
  const relatedPosts = blogPosts
    .filter(p => p.category === post.category && p.id !== post.id)
    .slice(0, 3);

  // Gerar URL canônica
  const canonicalUrl = `https://venturisolutions.com.br/blog/${post.slug}`;
  
  // Gerar data ISO se não existir
  const dateISO = post.dateISO || new Date().toISOString();
  
  // Extrair conteúdo GEO se não existir
  const geoContent = post.geoSummary ? {
    summary: post.geoSummary,
    keyPoints: post.geoKeyPoints || [],
    entities: post.geoEntities || [],
    qa: post.geoFAQ?.map(item => ({ question: item.q, answer: item.a })),
  } : extractGEOContent(post.content, {
    title: post.title,
    category: post.category,
    tags: post.tags,
  });

  // Gerar Schema.org estruturado
  const articleSchema = generateArticleSchema({
    title: post.metaTitle || post.title,
    description: post.metaDescription || post.excerpt,
    url: canonicalUrl,
    image: post.image,
    datePublished: dateISO,
    author: post.author,
    category: post.category,
    keywords: post.focusKeyphrases || post.tags,
  });

  // Gerar Breadcrumb Schema
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://venturisolutions.com.br' },
    { name: 'Blog', url: 'https://venturisolutions.com.br/#blog' },
    { name: post.category, url: `https://venturisolutions.com.br/#blog?category=${encodeURIComponent(post.category)}` },
    { name: post.title, url: canonicalUrl },
  ]);

  // Combinar schemas
  const combinedSchema = {
    '@context': 'https://schema.org',
    '@graph': [articleSchema, breadcrumbSchema],
  };

  return (
    <div className="min-h-screen bg-background">
      {/* SEO + GEO Optimization */}
      <SEO
        title={post.metaTitle || post.title}
        description={post.metaDescription || post.excerpt}
        keywords={post.focusKeyphrases || post.tags}
        canonical={`/blog/${post.slug}`}
        type="article"
        image={post.image}
        publishedTime={dateISO}
        author={post.author}
        tags={post.tags}
        schema={combinedSchema}
      />
      
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-12 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-background" />
        
        <div className="max-w-4xl mx-auto relative">
          {/* Back Button */}
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => navigate('/blog')}
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar para Blog
          </motion.button>

          {/* Category Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6"
          >
            <Badge className="bg-primary/10 text-primary border-primary/20">
              {post.category}
            </Badge>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl mb-6"
          >
            {post.title}
          </motion.h1>

          {/* Meta Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap items-center gap-6 text-muted-foreground mb-8"
          >
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{post.readTime} de leitura</span>
            </div>
          </motion.div>

          {/* Tags */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-2 mb-8"
          >
            {post.tags.map(tag => (
              <span
                key={tag}
                className="flex items-center gap-1 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm"
              >
                <Tag className="w-3 h-3" />
                {tag}
              </span>
            ))}
          </motion.div>

          {/* Share Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Button variant="outline" size="sm" className="gap-2">
              <Share2 className="w-4 h-4" />
              Compartilhar
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="px-6 mb-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          className="max-w-5xl mx-auto"
        >
          <div className="relative rounded-2xl overflow-hidden border border-primary/20 shadow-2xl shadow-primary/10">
            <ImageWithFallback
              src={post.image}
              alt={post.title}
              className="w-full h-[400px] md:h-[500px] object-cover"
            />
          </div>
        </motion.div>
      </section>

      {/* Content */}
      <section className="px-6 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[1fr_300px] gap-12">
            {/* Main Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <article className="prose prose-invert prose-lg max-w-none prose-headings:scroll-mt-24">
                <style>{`
                  article h2 {
                    font-size: 2rem;
                    font-weight: 700;
                    margin-top: 3rem;
                    margin-bottom: 1.5rem;
                    color: #fff;
                    line-height: 1.3;
                  }
                  article h3 {
                    font-size: 1.5rem;
                    font-weight: 600;
                    margin-top: 2rem;
                    margin-bottom: 1rem;
                    color: #fff;
                    line-height: 1.4;
                  }
                  article h4 {
                    font-size: 1.25rem;
                    font-weight: 600;
                    margin-top: 1.5rem;
                    margin-bottom: 0.75rem;
                    color: #fff;
                  }
                  article p {
                    margin-bottom: 1.5rem;
                    line-height: 1.8;
                    color: rgba(255, 255, 255, 0.8);
                  }
                  article ul, article ol {
                    margin: 1.5rem 0;
                    padding-left: 2rem;
                  }
                  article li {
                    margin-bottom: 0.75rem;
                    line-height: 1.7;
                    color: rgba(255, 255, 255, 0.8);
                  }
                  article strong {
                    font-weight: 600;
                    color: #fff;
                  }
                  article em {
                    font-style: italic;
                  }
                  article a {
                    color: #A31D45;
                    text-decoration: underline;
                  }
                  article a:hover {
                    color: #8B1538;
                  }
                  article blockquote {
                    border-left: 4px solid #8B1538;
                    padding-left: 1.5rem;
                    margin: 2rem 0;
                    font-style: italic;
                    color: rgba(255, 255, 255, 0.9);
                  }
                  article img {
                    border-radius: 0.5rem;
                    margin: 2rem 0;
                  }
                  article code {
                    background: rgba(139, 21, 56, 0.1);
                    padding: 0.25rem 0.5rem;
                    border-radius: 0.25rem;
                    font-size: 0.9em;
                    font-family: monospace;
                  }
                  article pre {
                    background: rgba(139, 21, 56, 0.1);
                    padding: 1.5rem;
                    border-radius: 0.5rem;
                    overflow-x: auto;
                    margin: 2rem 0;
                  }
                `}</style>
                <div 
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
              </article>
            </motion.div>

            {/* Table of Contents - Sidebar */}
            <aside>
              <TableOfContents content={post.content} />
            </aside>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="px-6 py-16 bg-gradient-to-b from-background to-primary/5">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl mb-8">Artigos Relacionados</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              {relatedPosts.map(relatedPost => (
                <Card
                  key={relatedPost.id}
                  onClick={() => navigate(`/blog/${relatedPost.slug}`)}
                  className="group cursor-pointer overflow-hidden bg-card/50 border-primary/10 hover:border-primary/30 transition-all"
                >
                  <div className="relative h-48 overflow-hidden">
                    <ImageWithFallback
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <Badge className="bg-primary/10 text-primary border-primary/20 mb-3">
                      {relatedPost.category}
                    </Badge>
                    <h3 className="text-xl mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {relatedPost.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {relatedPost.excerpt}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="px-6 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="bg-gradient-to-br from-primary/10 to-red-600/5 border-primary/20 p-12">
            <h2 className="text-3xl md:text-4xl mb-4">
              Gostou do Conteúdo?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Transforme conhecimento em ação. Agende uma conversa com nossos especialistas.
            </p>
            <Button
              size="lg"
              onClick={openDialog}
              className="bg-gradient-to-r from-primary to-red-600 hover:from-red-600 hover:to-primary"
            >
              Falar com Especialista
            </Button>
          </Card>
        </div>
      </section>

      <Footer />
      
      {/* Global Contact Form Dialog */}
      <ContactFormDialog open={isOpen} onOpenChange={closeDialog} />
    </div>
  );
}