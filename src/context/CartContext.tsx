import { createContext, useContext, useEffect, useState, ReactNode } from "react";

export interface CartItem {
  id: string; // slug + size — maps to a WooCommerce cart item key
  slug: string;
  name: string;
  price: number;
  image: string;
  size?: string;
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  addItem: (item: Omit<CartItem, "quantity" | "id">, quantity?: number) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  subtotal: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const STORAGE_KEY = "terra-studios-cart";

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? (JSON.parse(stored) as CartItem[]) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      /* storage unavailable */
    }
  }, [items]);

  const addItem = (item: Omit<CartItem, "quantity" | "id">, quantity = 1) => {
    const id = `${item.slug}${item.size ? `-${item.size}` : ""}`;
    setItems(prev => {
      const existing = prev.find(i => i.id === id);
      if (existing) {
        return prev.map(i => (i.id === id ? { ...i, quantity: i.quantity + quantity } : i));
      }
      return [...prev, { ...item, id, quantity }];
    });
  };

  const removeItem = (id: string) => setItems(prev => prev.filter(i => i.id !== id));

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) return removeItem(id);
    setItems(prev => prev.map(i => (i.id === id ? { ...i, quantity } : i)));
  };

  const clearCart = () => setItems([]);

  const totalItems = items.reduce((sum, i) => sum + i.quantity, 0);
  const subtotal = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  return (
    <CartContext.Provider
      value={{ items, addItem, removeItem, updateQuantity, clearCart, totalItems, subtotal }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
