import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { List, ChevronRight } from 'lucide-react';
import { Card } from '../ui/card';

interface TocItem {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  content: string;
}

export function TableOfContents({ content }: TableOfContentsProps) {
  const [items, setItems] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    // Extract headings from HTML content
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = content;
    
    const headings = tempDiv.querySelectorAll('h2, h3, h4');
    const tocItems: TocItem[] = [];

    headings.forEach((heading, index) => {
      const text = heading.textContent || '';
      const level = parseInt(heading.tagName.substring(1));
      const id = `heading-${index}`;
      
      // Add ID to actual heading in the DOM
      const actualHeading = document.querySelectorAll('h2, h3, h4')[index];
      if (actualHeading) {
        actualHeading.id = id;
      }

      tocItems.push({ id, text, level });
    });

    setItems(tocItems);
  }, [content]);

  useEffect(() => {
    // Intersection Observer for active heading
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-100px 0px -66%',
      }
    );

    // Observe all headings
    const headings = document.querySelectorAll('h2[id], h3[id], h4[id]');
    headings.forEach((heading) => observer.observe(heading));

    return () => {
      headings.forEach((heading) => observer.unobserve(heading));
    };
  }, [items]);

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  if (items.length === 0) return null;

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.7 }}
      className="sticky top-24 hidden lg:block"
    >
      <Card className="p-6 bg-card/50 border-primary/10">
        <div className="flex items-center gap-2 mb-4">
          <List className="w-5 h-5 text-primary" />
          <h3 className="font-semibold">Neste Artigo</h3>
        </div>

        <nav className="space-y-2">
          {items.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToHeading(item.id)}
              className={`
                w-full text-left text-sm transition-all block group
                ${item.level === 3 ? 'pl-4' : ''}
                ${item.level === 4 ? 'pl-8' : ''}
                ${
                  activeId === item.id
                    ? 'text-primary font-medium'
                    : 'text-muted-foreground hover:text-foreground'
                }
              `}
            >
              <span className="flex items-start gap-2">
                <ChevronRight
                  className={`
                    w-4 h-4 flex-shrink-0 mt-0.5 transition-transform
                    ${activeId === item.id ? 'text-primary translate-x-1' : 'opacity-0 group-hover:opacity-50'}
                  `}
                />
                <span className="line-clamp-2">{item.text}</span>
              </span>
            </button>
          ))}
        </nav>
      </Card>
    </motion.div>
  );
}
