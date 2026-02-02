import { motion } from 'motion/react';
import googleLogo from 'figma:asset/483eb71f1e7a7065e407983e146394454897cf02.png';
import ecommerceLogo from 'figma:asset/30d1a2fd860d539c5afd0ff69ccc51dd2.png';
import rakutenLogo from 'figma:asset/bb6f67edabcca950af7c32a6545e0ba80e540f3e.png';
import medicinaLogo from 'figma:asset/6ab57a21edaf23e2b458fb3161b52704b278c123.png';
import sbaitLogo from 'figma:asset/70b2b208b7944ece11f0bd1eefe70722014ce65e.png';
import pinterestLogo from 'figma:asset/a96c16f9659899d48f069cb2ef62247d71554f04.png';

const companies = [
  { src: googleLogo, alt: 'Google' },
  { src: ecommerceLogo, alt: 'E-commerce Brasil' },
  { src: rakutenLogo, alt: 'Rakuten' },
  { src: medicinaLogo, alt: 'Medicina USP' },
  { src: sbaitLogo, alt: 'SBAIT' },
  { src: pinterestLogo, alt: 'Pinterest' },
];

export function CompanyLogosMarquee() {
  // Duplicate the array to create seamless loop
  const duplicatedCompanies = [...companies, ...companies, ...companies, ...companies];

  return (
    <div className="relative w-full overflow-hidden py-8">
      {/* Gradient masks for depth of field effect - stronger on edges */}
      <div className="absolute left-0 top-0 bottom-0 w-1/3 bg-gradient-to-r from-background via-background/70 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-background via-background/70 to-transparent z-10 pointer-events-none" />
      
      {/* Animated container - very slow movement (180s for 6 logos) */}
      <motion.div
        className="flex gap-20 items-center"
        animate={{
          x: [0, -2000],
        }}
        transition={{
          x: {
            duration: 180,
            repeat: Infinity,
            ease: "linear",
          },
        }}
      >
        {duplicatedCompanies.map((company, index) => (
          <div
            key={index}
            className="flex-shrink-0 relative transition-all duration-1000"
            style={{
              // Calculate blur based on position - focused in center
              filter: `blur(${getBlurAmount(index, duplicatedCompanies.length)}px) grayscale(${getGrayscale(index, duplicatedCompanies.length)})`,
              opacity: getOpacity(index, duplicatedCompanies.length),
              transform: `scale(${getScale(index, duplicatedCompanies.length)})`,
            }}
          >
            <img
              src={company.src}
              alt={company.alt}
              className="h-14 w-auto object-contain"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

// Calculate blur amount based on position (simulate depth of field)
// Center is 0px blur, edges get progressively blurred
function getBlurAmount(index: number, total: number): number {
  const normalizedPosition = (index % 6) / 6; // Position within cycle (0 to 1)
  
  // More blur at edges (0 and 1), ZERO blur in center (0.5)
  const distanceFromCenter = Math.abs(normalizedPosition - 0.5) * 2;
  
  // Exponential curve for more dramatic effect near edges
  return Math.pow(distanceFromCenter, 2) * 6; // Max 6px blur at edges, 0px at center
}

// Calculate opacity based on position - fully visible in center
function getOpacity(index: number, total: number): number {
  const normalizedPosition = (index % 6) / 6;
  const distanceFromCenter = Math.abs(normalizedPosition - 0.5) * 2;
  
  // Exponential fade
  return 1 - (Math.pow(distanceFromCenter, 1.5) * 0.5); // Min 50% opacity at edges
}

// Calculate scale based on position - full size in center
function getScale(index: number, total: number): number {
  const normalizedPosition = (index % 6) / 6;
  const distanceFromCenter = Math.abs(normalizedPosition - 0.5) * 2;
  
  return 1 - (Math.pow(distanceFromCenter, 1.5) * 0.2); // Min 80% scale at edges
}

// Calculate grayscale based on position - no grayscale in center
function getGrayscale(index: number, total: number): number {
  const normalizedPosition = (index % 6) / 6;
  const distanceFromCenter = Math.abs(normalizedPosition - 0.5) * 2;
  
  return Math.pow(distanceFromCenter, 2) * 0.4; // Max 40% grayscale at edges, 0% at center
}
