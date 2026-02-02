import { ShoppingCart, Check, Sparkles } from 'lucide-react';
import { Button } from './ui/button';
import { useCart, CartItem } from './CartContext';
import { useState, useEffect } from 'react';
import { toast } from 'sonner@2.0.3';

interface AddToCartButtonProps {
  item: CartItem;
  variant?: 'default' | 'outline' | 'ghost';
  size?: 'default' | 'sm' | 'lg';
  className?: string;
}

export function AddToCartButton({ item, variant = 'default', size = 'default', className = '' }: AddToCartButtonProps) {
  const { items, addItem, discountPercentage } = useCart();
  const [justAdded, setJustAdded] = useState(false);
  
  const isInCart = items.some(i => i.id === item.id);
  const isFirstItem = items.length === 0;

  useEffect(() => {
    if (justAdded) {
      const timer = setTimeout(() => setJustAdded(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [justAdded]);

  const handleAdd = () => {
    if (!isInCart) {
      const wasFirstItem = items.length === 0;
      addItem(item);
      setJustAdded(true);
      
      // Show toast notification
      if (wasFirstItem) {
        toast.success('Produto adicionado!', {
          description: 'Veja o carrinho na lateral direita →',
          icon: <Sparkles className="w-4 h-4 text-primary" />,
        });
      } else {
        toast.success('Produto adicionado ao carrinho!');
      }
    }
  };

  return (
    <Button
      variant={isInCart ? 'outline' : variant}
      size={size}
      onClick={handleAdd}
      disabled={isInCart}
      className={`${
        isInCart 
          ? 'border-green-500 text-green-500 cursor-not-allowed' 
          : 'bg-gradient-to-r from-[#8B1538] to-[#A31D45] hover:from-[#6B0F2A] hover:to-[#8B1538]'
      } transition-all ${className}`}
    >
      {isInCart ? (
        <>
          <Check className="w-4 h-4 mr-2" />
          {justAdded ? 'Adicionado!' : 'No Carrinho'}
        </>
      ) : (
        <>
          <ShoppingCart className="w-4 h-4 mr-2" />
          Adicionar ao Carrinho
        </>
      )}
    </Button>
  );
}
