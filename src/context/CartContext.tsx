import { createContext, useContext, useEffect, useState } from "react";
import { Product } from "../types/Product";

interface CartContextValues {
  addProductToCart(data: CartProduct): void;
  cartProductsQuantity: number;
}

interface CartProduct {
  productQuantity: number;
  product: Product;
}

const CartContext = createContext<CartContextValues>({} as CartContextValues);

export function CartContextProvider({ children }: WithChildren) {
  const [cartProductsQuantity, setCartProductsQuantity] = useState(0);
  const [cartProducts, setCartProducts] = useState<CartProduct[]>([]);

  function addProductToCart(data: CartProduct) {
    setCartProductsQuantity((oldValue) => oldValue + 1);
    setCartProducts((oldValue) => [...oldValue, data]);
  }

  useEffect(() => {
    console.log("Cart context loaded");

    console.log(cartProducts, cartProductsQuantity);
  }, [cartProducts, cartProductsQuantity]);

  return <CartContext.Provider value={{ cartProductsQuantity, addProductToCart }}>{children}</CartContext.Provider>;
}

export function useCartContext() {
  return useContext(CartContext);
}
