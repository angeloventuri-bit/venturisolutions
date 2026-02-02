import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { Newspaper, ArrowRight, Clock, User, TrendingUp, Zap, Target, Sparkles } from 'lucide-react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { blogPosts as allBlogPosts } from '../../content/blog-posts';

// Use posts from content file
const blogPosts = allBlogPosts;

const categories = [
  { name: 'Todos', count: 47 },
  { name: 'Performance & Ads', count: 15 },
  { name: 'Tecnologia & IA', count: 8 },
  { name: 'SEO & DIO', count: 12 },
  { name: 'Estratégia', count: 12 }
];

export function BlogSection() {
  const navigate = useNavigate();

  return (
    <section id="blog" className="relative py-32 px-6 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-primary/5" />
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(139, 21, 56, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139, 21, 56, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6"
          >
            <Newspaper className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">Blog & Insights</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl mb-6 max-w-4xl mx-auto"
          >
            Conhecimento que{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-red-600">
              Impulsiona Resultados
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            Estratégias, insights e cases reais para acelerar o crescimento do seu negócio
          </motion.p>
        </div>

        {/* Categories Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-3 mb-16"
        >
          {categories.map((category) => (
            <button
              key={category.name}
              className="group px-4 py-2 bg-white/5 hover:bg-primary/10 border border-white/10 hover:border-primary/30 rounded-full transition-all"
            >
              <span className="text-sm text-gray-300 group-hover:text-white">
                {category.name}
              </span>
              <span className="ml-2 text-xs text-muted-foreground">({category.count})</span>
            </button>
          ))}
        </motion.div>

        {/* Featured Posts */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {blogPosts.filter(post => post.featured).map((post, index) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => navigate(`/blog/${post.slug}`)}
              className="cursor-pointer"
            >
              <Card className="group relative h-full overflow-hidden bg-card/50 backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-all hover:shadow-2xl hover:shadow-primary/10">
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10" />
                  <ImageWithFallback
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 z-20">
                    <Badge className="bg-primary/90 backdrop-blur-sm border-primary/30 text-white">
                      {post.category}
                    </Badge>
                  </div>

                  {/* Featured Badge */}
                  <div className="absolute top-4 right-4 z-20">
                    <div className="flex items-center gap-1 px-3 py-1 bg-yellow-500/90 backdrop-blur-sm rounded-full text-xs text-black">
                      <Sparkles className="w-3 h-3" />
                      Destaque
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl mb-3 text-white group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </div>
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        {post.author}
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-primary group-hover:gap-3 transition-all">
                      Ler mais
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Regular Posts */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {blogPosts.filter(post => !post.featured).map((post, index) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => navigate(`/blog/${post.slug}`)}
              className="cursor-pointer"
            >
              <Card className="group relative h-full overflow-hidden bg-card/50 backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-all hover:shadow-lg hover:shadow-primary/10">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent z-10" />
                  <ImageWithFallback
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  <div className="absolute top-4 left-4 z-20">
                    <Badge className="bg-primary/80 backdrop-blur-sm border-primary/30 text-white text-xs">
                      {post.category}
                    </Badge>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl mb-2 text-white group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed line-clamp-2">
                    {post.excerpt}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </div>
                    <button className="flex items-center gap-2 text-xs text-primary hover:gap-3 transition-all">
                      Ler mais
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button
            size="lg"
            variant="outline"
            onClick={() => navigate('/blog')}
            className="group glass border-primary/30 hover:border-primary/50 px-8"
          >
            Ver Todos os Artigos
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
