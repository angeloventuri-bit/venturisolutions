import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import rappiLogo from 'figma:asset/3382afea3ce5330d05a4f7d6acf8a290ba762655.png';
import pinterestLogo from 'figma:asset/69538780f6e6c583f5a16e9eae7e5bb25fdda411.png';
import ecommerceBrasilLogo from 'figma:asset/6f0f56a25da0d5a994f22d3776d37e8c19e09edd.png';
import googleLogo from 'figma:asset/34991c295b47fca95374f39e14cd284814993b60.png';
import innovaLogo from 'figma:asset/e4bcdf9cc73b33b428c81c6a7ee7185830adeb31.png';
import redCircleLogo from 'figma:asset/438a195d50d885366bbb7050c7345b54785dfb09.png';
import rakutenLogo from 'figma:asset/ceb67a3b26ce9de5ecd9d368e3a6031ac942e95d.png';
import mercadoLivreLogo from 'figma:asset/cbc0c50ce0fa2b88584d57f134ef6f39f6481c47.png';
import centauroLogo from 'figma:asset/360b48858eabea165ffa0cc8e0c3f192b8889513.png';

// Array de logos de empresas
const companies = [
  { name: 'Google', logo: googleLogo },
  { name: 'Rakuten', logo: rakutenLogo },
  { name: 'Rappi', logo: rappiLogo },
  { name: 'Pinterest', logo: pinterestLogo },
  { name: 'Mercado Livre', logo: mercadoLivreLogo },
  { name: 'Innova', logo: innovaLogo },
  { name: 'E-commerce Brasil', logo: ecommerceBrasilLogo },
  { name: 'Centauro', logo: centauroLogo },
  { name: 'Partner', logo: redCircleLogo },
];

// Dividir logos em dois grupos para as duas fileiras
const firstRow = companies.slice(0, 5);
const secondRow = companies.slice(5);

export function LogosMarquee() {
  // Duplicar os logos para criar efeito infinito
  const duplicatedFirstRow = [...firstRow, ...firstRow, ...firstRow];
  const duplicatedSecondRow = [...secondRow, ...secondRow, ...secondRow];

  return (
    <div className="relative w-full py-6 md:py-12">
      <div className="space-y-3 md:space-y-6">
        {/* Primeira Fileira - Esquerda para Direita */}
        <MarqueeRow logos={duplicatedFirstRow} direction="left" rowId="row1" />
        
        {/* Segunda Fileira - Direita para Esquerda */}
        <MarqueeRow logos={duplicatedSecondRow} direction="right" rowId="row2" />
      </div>
    </div>
  );
}

// Componente de fileira do marquee
function MarqueeRow({
  logos,
  direction,
  rowId,
}: {
  logos: { name: string; logo: string }[];
  direction: 'left' | 'right';
  rowId: string;
}) {
  const baseLength = direction === 'left' ? firstRow.length : secondRow.length;
  
  return (
    <div className="relative overflow-hidden py-2">
      {/* Fade Gradient - Esquerda com blur suave */}
      <div className="absolute left-0 top-0 bottom-0 w-32 md:w-48 lg:w-64 z-10 pointer-events-none">
        {/* Camada 1 - Background fade mais longo */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 via-background/40 via-background/10 to-transparent" />
        {/* Camada 2 - Blur com fade suave */}
        <div 
          className="absolute inset-0 backdrop-blur-md"
          style={{
            maskImage: 'linear-gradient(to right, black 0%, black 20%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.2) 75%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to right, black 0%, black 20%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.2) 75%, transparent 100%)',
          }}
        />
      </div>
      
      {/* Fade Gradient - Direita com blur suave */}
      <div className="absolute right-0 top-0 bottom-0 w-32 md:w-48 lg:w-64 z-10 pointer-events-none">
        {/* Camada 1 - Background fade mais longo */}
        <div className="absolute inset-0 bg-gradient-to-l from-background via-background/80 via-background/40 via-background/10 to-transparent" />
        {/* Camada 2 - Blur com fade suave */}
        <div 
          className="absolute inset-0 backdrop-blur-md"
          style={{
            maskImage: 'linear-gradient(to left, black 0%, black 20%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.2) 75%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to left, black 0%, black 20%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.2) 75%, transparent 100%)',
          }}
        />
      </div>

      {/* Scrolling Container */}
      <motion.div
        className="flex gap-8 md:gap-12 lg:gap-16"
        animate={{
          x: direction === 'left' 
            ? [0, -100 * (baseLength / 3)]
            : [-100 * (baseLength / 3), 0],
        }}
        transition={{
          x: {
            duration: 35,
            repeat: Infinity,
            ease: 'linear',
          },
        }}
      >
        {logos.map((company, index) => (
          <LogoItem
            key={`${rowId}-${company.name}-${index}`}
            company={company}
            index={index}
            rowId={rowId}
          />
        ))}
      </motion.div>
    </div>
  );
}

// Componente individual de logo com scale baseado em posição
function LogoItem({
  company,
  index,
  rowId,
}: {
  company: { name: string; logo: string };
  index: number;
  rowId: string;
}) {
  const [scale, setScale] = useState(0.85);
  const [opacity, setOpacity] = useState(0.7);
  const [blur, setBlur] = useState(0);

  useEffect(() => {
    const updateScale = () => {
      const marqueeElement = document.getElementById(`logo-${rowId}-${index}`);
      if (!marqueeElement) return;

      const rect = marqueeElement.getBoundingClientRect();
      const windowCenter = window.innerWidth / 2;
      const elementCenter = rect.left + rect.width / 2;

      // Distância do centro da tela (-1 a 1)
      const distanceFromCenter = Math.abs(elementCenter - windowCenter) / (window.innerWidth / 2);

      // Validar que distanceFromCenter é um número válido
      if (isNaN(distanceFromCenter) || !isFinite(distanceFromCenter)) return;

      // Calcular scale (1.15 no centro, 0.85 nas pontas) - MOBILE OTIMIZADO
      const newScale = 1.15 - distanceFromCenter * 0.3;
      
      // Calcular opacity (1 no centro, 0.7 nas pontas) - MAIOR VISIBILIDADE MOBILE
      const newOpacity = 1 - distanceFromCenter * 0.3;
      
      // Calcular blur (0 no centro, 1px nas pontas) - MENOS BLUR MOBILE
      const newBlur = distanceFromCenter * 1;

      // Validar e aplicar valores
      const validScale = Math.max(0.85, Math.min(1.15, newScale));
      const validOpacity = Math.max(0.7, Math.min(1, newOpacity));
      const validBlur = Math.max(0, Math.min(1, newBlur));

      if (!isNaN(validScale) && isFinite(validScale)) setScale(validScale);
      if (!isNaN(validOpacity) && isFinite(validOpacity)) setOpacity(validOpacity);
      if (!isNaN(validBlur) && isFinite(validBlur)) setBlur(validBlur);
    };

    // Aguardar um tick para garantir que o DOM está pronto
    const timeout = setTimeout(() => {
      updateScale();
    }, 100);

    // Reduzido para 10 FPS (ao invés de 20 FPS) para melhor performance
    const interval = setInterval(updateScale, 100);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [index, rowId]);

  return (
    <div
      id={`logo-${rowId}-${index}`}
      className="flex-shrink-0 transition-all duration-100 ease-out"
      style={{
        transform: `scale(${scale})`,
        opacity: opacity,
        filter: `blur(${blur}px)`,
      }}
    >
      {/* Logo Container - OTIMIZADO PARA MOBILE COM ALTA VISIBILIDADE */}
      <div className="w-20 h-12 md:w-24 md:h-16 lg:w-28 lg:h-18 flex items-center justify-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg hover:border-primary/40 hover:bg-white/15 transition-all duration-300 group relative overflow-hidden p-2 md:p-3">
        {/* Hover Glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-red-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Logo Image - MAIOR VISIBILIDADE MOBILE */}
        <ImageWithFallback
          src={company.logo}
          alt={company.name}
          className={`w-full h-full object-contain relative z-10 group-hover:scale-110 transition-all duration-300 ${
            company.name === 'Innova' 
              ? 'opacity-90 brightness-150 group-hover:opacity-100 group-hover:brightness-125' 
              : company.name === 'Mercado Livre'
              ? 'opacity-80 brightness-200 group-hover:opacity-100 group-hover:brightness-175'
              : 'opacity-85 group-hover:opacity-100'
          }`}
        />
      </div>
    </div>
  );
}
