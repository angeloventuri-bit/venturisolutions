import { createContext, useContext, useState, ReactNode } from 'react';

export interface CartItem {
  id: string;
  name: string;
  tier: string;
  price: number;
  type: 'fixed' | 'variable';
  variableDetails?: string;
  category: string;
  paymentType: 'recorrente' | 'unico'; // New field
  splitPayment?: boolean; // For landing pages: 50% upfront + 50% on delivery
}

interface CartContextType {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
  recorrenteItems: CartItem[];
  unicoItems: CartItem[];
  subtotalRecorrente: number;
  subtotalUnico: number;
  subtotal: number;
  discount: number;
  discountPercentage: number;
  totalRecorrente: number;
  totalUnico: number;
  total: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  const addItem = (item: CartItem) => {
    setItems(prev => {
      // Check if item already exists (same id)
      const exists = prev.find(i => i.id === item.id);
      if (exists) {
        return prev; // Don't add duplicates
      }
      return [...prev, item];
    });
  };

  const removeItem = (id: string) => {
    setItems(prev => prev.filter(item => item.id !== id));
  };

  const clearCart = () => {
    setItems([]);
  };

  // Separate items by payment type
  const recorrenteItems = items.filter(item => item.paymentType === 'recorrente');
  const unicoItems = items.filter(item => item.paymentType === 'unico');

  // Calculate subtotals
  const subtotalRecorrente = recorrenteItems.reduce((sum, item) => sum + item.price, 0);
  const subtotalUnico = unicoItems.reduce((sum, item) => sum + item.price, 0);
  const subtotal = subtotalRecorrente + subtotalUnico;

  // Calculate discount based on number of items
  const getDiscountPercentage = (itemCount: number): number => {
    if (itemCount >= 4) return 15;
    if (itemCount === 3) return 10;
    if (itemCount === 2) return 5;
    return 0;
  };

  const discountPercentage = getDiscountPercentage(items.length);
  const discount = subtotal * (discountPercentage / 100);
  
  // Apply discount proportionally
  const discountRecorrente = subtotalRecorrente * (discountPercentage / 100);
  const discountUnico = subtotalUnico * (discountPercentage / 100);
  
  const totalRecorrente = subtotalRecorrente - discountRecorrente;
  const totalUnico = subtotalUnico - discountUnico;
  const total = totalRecorrente + totalUnico;

  return (
    <CartContext.Provider value={{ 
      items, 
      addItem, 
      removeItem, 
      clearCart, 
      recorrenteItems,
      unicoItems,
      subtotalRecorrente,
      subtotalUnico,
      subtotal, 
      discount, 
      discountPercentage, 
      totalRecorrente,
      totalUnico,
      total 
    }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within CartProvider');
  }
  return context;
}
