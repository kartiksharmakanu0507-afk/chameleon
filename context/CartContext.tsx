"use client";

import {
  createContext,
  useContext,
  useState,
} from "react";

const CartContext = createContext<any>(null);

export function CartProvider({
  children,
}: {
  children: React.ReactNode;
}) {

  const [cart, setCart] = useState<any[]>([]);

  const [showCart, setShowCart] = useState(false);

  return (

    <CartContext.Provider
      value={{
        cart,
        setCart,
        showCart,
        setShowCart,
      }}
    >

      {children}

    </CartContext.Provider>

  );

}

export const useCart = () => useContext(CartContext);