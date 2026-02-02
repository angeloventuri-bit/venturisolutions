import { motion } from 'motion/react';
import rappiLogo from 'figma:asset/3382afea3ce5330d05a4f7d6acf8a290ba762655.png';
import pinterestLogo from 'figma:asset/69538780f6e6c583f5a16e9eae7e5bb25fdda411.png';
import ecommerceBrasilLogo from 'figma:asset/6f0f56a25da0d5a994f22d3776d37e8c19e09edd.png';
import googleLogo from 'figma:asset/34991c295b47fca95374f39e14cd284814993b60.png';
import innovaLogo from 'figma:asset/e4bcdf9cc73b33b428c81c6a7ee7185830adeb31.png';
import redCircleLogo from 'figma:asset/438a195d50d885366bbb7050c7345b54785dfb09.png';
import rakutenLogo from 'figma:asset/ceb67a3b26ce9de5ecd9d368e3a6031ac942e95d.png';
import mercadoLivreLogo from 'figma:asset/cbc0c50ce0fa2b88584d57f134ef6f39f6481c47.png';
import centauroLogo from 'figma:asset/360b48858eabea165ffa0cc8e0c3f192b8889513.png';

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

export function PresentationLogosMarquee() {
  // Duplicate the array to create seamless loop
  const duplicatedCompanies = [...companies, ...companies, ...companies, ...companies];

  return (
    <div className="relative w-full overflow-hidden">
      {/* Label */}
      <div className="text-center py-2 border-b border-white/5">
        <p className="text-xs text-gray-500 uppercase tracking-widest">Empresas Parceiras</p>
      </div>
      
      <div className="relative py-3">
        {/* Gradient masks - apenas 15% de cada lado, deixando 70% do meio totalmente focado */}
        <div className="absolute left-0 top-0 bottom-0 w-[15%] z-10 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-transparent" />
          <div 
            className="absolute inset-0 backdrop-blur-md"
            style={{
              maskImage: 'linear-gradient(to right, black 0%, rgba(0,0,0,0.5) 50%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to right, black 0%, rgba(0,0,0,0.5) 50%, transparent 100%)',
            }}
          />
        </div>
        <div className="absolute right-0 top-0 bottom-0 w-[15%] z-10 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-l from-background via-background/70 to-transparent" />
          <div 
            className="absolute inset-0 backdrop-blur-md"
            style={{
              maskImage: 'linear-gradient(to left, black 0%, rgba(0,0,0,0.5) 50%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to left, black 0%, rgba(0,0,0,0.5) 50%, transparent 100%)',
            }}
          />
        </div>
        
        {/* Animated container */}
        <motion.div
          className="flex gap-12 items-center"
          animate={{
            x: [0, -2400],
          }}
          transition={{
            x: {
              duration: 200,
              repeat: Infinity,
              ease: "linear",
            },
          }}
        >
          {duplicatedCompanies.map((company, index) => (
            <div
              key={`${company.name}-${index}`}
              className="flex-shrink-0 relative"
              style={{
                filter: `blur(${getBlurAmount(index, duplicatedCompanies.length)}px)`,
                opacity: getOpacity(index, duplicatedCompanies.length),
                transform: `scale(${getScale(index, duplicatedCompanies.length)})`,
              }}
            >
              {/* Logo Container */}
              <div className="w-20 h-14 flex items-center justify-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-2">
                <img
                  src={company.logo}
                  alt={company.name}
                  className={`w-full h-full object-contain ${
                    company.name === 'Innova' 
                      ? 'opacity-60 brightness-150' 
                      : company.name === 'Mercado Livre'
                      ? 'opacity-50 brightness-200'
                      : 'opacity-70'
                  }`}
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

// Calculate blur amount based on position
function getBlurAmount(index: number, total: number): number {
  const normalizedPosition = (index % 9) / 9;
  const distanceFromCenter = Math.abs(normalizedPosition - 0.5) * 2;
  return Math.pow(distanceFromCenter, 2) * 4; // Max 4px blur
}

// Calculate opacity based on position
function getOpacity(index: number, total: number): number {
  const normalizedPosition = (index % 9) / 9;
  const distanceFromCenter = Math.abs(normalizedPosition - 0.5) * 2;
  return 1 - (Math.pow(distanceFromCenter, 1.5) * 0.4); // Min 60% opacity
}

// Calculate scale based on position
function getScale(index: number, total: number): number {
  const normalizedPosition = (index % 9) / 9;
  const distanceFromCenter = Math.abs(normalizedPosition - 0.5) * 2;
  return 1 - (Math.pow(distanceFromCenter, 1.5) * 0.15); // Min 85% scale
}
