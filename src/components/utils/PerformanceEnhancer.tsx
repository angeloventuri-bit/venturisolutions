import { useEffect } from 'react';
import { preloadCriticalResources, lazyLoadImages, prefetchOnHover } from '../../utils/seoInfrastructure';

/**
 * PerformanceEnhancer - Component that implements various performance optimizations
 * 
 * Features:
 * - Resource preloading
 * - Lazy loading of images
 * - Link prefetching on hover
 * - Web Vitals monitoring
 */

export function PerformanceEnhancer() {
  useEffect(() => {
    // Preload critical resources
    preloadCriticalResources();

    // Setup lazy loading for images
    lazyLoadImages();

    // Setup prefetching for navigation links
    prefetchOnHover('a[href^="/"]');

    // Web Vitals monitoring (for Core Web Vitals)
    if ('PerformanceObserver' in window) {
      try {
        // Largest Contentful Paint (LCP)
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          console.debug('LCP:', lastEntry.renderTime || lastEntry.loadTime);
        });
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

        // First Input Delay (FID) - Replaced by INP
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            console.debug('FID:', entry.processingStart - entry.startTime);
          });
        });
        fidObserver.observe({ entryTypes: ['first-input'] });

        // Cumulative Layout Shift (CLS)
        let clsScore = 0;
        const clsObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (!(entry as any).hadRecentInput) {
              clsScore += (entry as any).value;
              console.debug('CLS:', clsScore);
            }
          }
        });
        clsObserver.observe({ entryTypes: ['layout-shift'] });
      } catch (e) {
        // Performance monitoring not critical - fail silently
        console.debug('Performance monitoring setup error:', e);
      }
    }

    // Connection quality detection
    if ('connection' in navigator || 'mozConnection' in navigator || 'webkitConnection' in navigator) {
      const connection = (navigator as any).connection || (navigator as any).mozConnection || (navigator as any).webkitConnection;
      
      if (connection) {
        const effectiveType = connection.effectiveType;
        console.debug('Connection type:', effectiveType);
        
        // Adjust strategies based on connection
        if (effectiveType === 'slow-2g' || effectiveType === '2g') {
          // On slow connections, disable prefetching and reduce image quality
          document.body.classList.add('slow-connection');
        }
      }
    }

    // Service Worker registration (for PWA and caching)
    if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
      window.addEventListener('load', () => {
        navigator.serviceWorker
          .register('/sw.js')
          .then((registration) => {
            console.debug('Service Worker registered:', registration);
          })
          .catch((error) => {
            console.debug('Service Worker registration failed:', error);
          });
      });
    }

    // Cleanup
    return () => {
      // Cleanup observers if needed
    };
  }, []);

  return null; // This component doesn't render anything
}

/**
 * Image component with automatic lazy loading
 */
interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
}

export function LazyImage({ src, alt, className, width, height, ...props }: LazyImageProps) {
  useEffect(() => {
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            if (img.dataset.src) {
              img.src = img.dataset.src;
              img.removeAttribute('data-src');
            }
            observer.unobserve(img);
          }
        });
      });

      const img = document.querySelector(`img[data-src="${src}"]`);
      if (img) {
        observer.observe(img);
      }

      return () => {
        if (img) observer.unobserve(img);
      };
    }
  }, [src]);

  return (
    <img
      data-src={src}
      alt={alt}
      className={className}
      width={width}
      height={height}
      loading="lazy"
      decoding="async"
      {...props}
      style={{
        ...props.style,
        contentVisibility: 'auto',
      }}
    />
  );
}

/**
 * Hook for detecting slow connections
 */
export function useConnectionQuality() {
  const [connectionQuality, setConnectionQuality] = React.useState<'fast' | 'medium' | 'slow'>('fast');

  useEffect(() => {
    if ('connection' in navigator) {
      const connection = (navigator as any).connection;
      
      if (connection) {
        const updateConnectionQuality = () => {
          const effectiveType = connection.effectiveType;
          
          if (effectiveType === 'slow-2g' || effectiveType === '2g') {
            setConnectionQuality('slow');
          } else if (effectiveType === '3g') {
            setConnectionQuality('medium');
          } else {
            setConnectionQuality('fast');
          }
        };

        updateConnectionQuality();
        connection.addEventListener('change', updateConnectionQuality);

        return () => {
          connection.removeEventListener('change', updateConnectionQuality);
        };
      }
    }
  }, []);

  return connectionQuality;
}

/**
 * Component that defers non-critical rendering
 */
interface DeferredProps {
  children: React.ReactNode;
  delay?: number;
}

export function Deferred({ children, delay = 100 }: DeferredProps) {
  const [isReady, setIsReady] = React.useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsReady(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  if (!isReady) {
    return null;
  }

  return <>{children}</>;
}

// Add React import for hooks
import * as React from 'react';
