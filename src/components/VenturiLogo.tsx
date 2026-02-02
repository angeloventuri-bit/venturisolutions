import logoHorizontal from 'figma:asset/3e259d13c795140aec8a0e73c8cca5713e7d0fc0.png';
import logoIcon from 'figma:asset/c426208318d3d516a82cbedbf35baee7ea0201e2.png';
import logoIconLarge from 'figma:asset/a9b9f16cf15a44b086d1a464dbb95d2364ca6b5a.png';

interface VenturiLogoProps {
  variant?: 'horizontal' | 'icon' | 'icon-large';
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export function VenturiLogo({ variant = 'horizontal', className = '', size = 'md' }: VenturiLogoProps) {
  const sizeClasses = {
    sm: 'h-5',
    md: 'h-7',
    lg: 'h-10',
    xl: 'h-14',
  };

  const iconSizeClasses = {
    sm: 'h-6 w-6',
    md: 'h-8 w-8',
    lg: 'h-12 w-12',
    xl: 'h-16 w-16',
  };

  if (variant === 'icon') {
    return (
      <img 
        src={logoIcon} 
        alt="Venturi Solutions" 
        className={`${iconSizeClasses[size]} object-contain ${className}`}
      />
    );
  }

  if (variant === 'icon-large') {
    return (
      <img 
        src={logoIconLarge} 
        alt="Venturi Solutions" 
        className={`${iconSizeClasses[size]} object-contain ${className}`}
      />
    );
  }

  return (
    <img 
      src={logoHorizontal} 
      alt="Venturi Solutions" 
      className={`${sizeClasses[size]} object-contain ${className}`}
    />
  );
}
