import { createContext, useContext, useEffect, useState } from "react";
import { Product } from "../types/Product";

interface CartContextValues {
  addProductToCart(data: CartProduct): void;
  removeProductFromCart(productId: Product["id"]): void;
  isOnCart(productId: Product["id"]): boolean;

  cartProductsQuantity: number;
  cartProducts: CartProduct[];
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
    setCartProducts((oldValue) => {
      localStorage.setItem("cart_content", JSON.stringify([...oldValue, data]));

      return [...oldValue, data];
    });
  }

  function removeProductFromCart(productId: Product["id"]) {
    const cartProductIndex = cartProducts.findIndex((prod) => prod.product.id === productId);

    setCartProducts((oldState) => {
      const data = oldState.filter((_, index) => index !== cartProductIndex);

      localStorage.setItem("cart_content", JSON.stringify(data));

      return data;
    });
  }

  function isOnCart(productId: Product["id"]) {
    const cartProductIndex = cartProducts.findIndex((prod) => prod.product.id === productId);

    return cartProductIndex !== -1 ? true : false;
  }

  useEffect(() => {
    const storedCartContet: CartProduct[] = JSON.parse(localStorage.getItem("cart_content") || "[]");

    if (storedCartContet.length !== 0) {
      setCartProducts(storedCartContet);
    }
  }, []);

  useEffect(() => {
    setCartProductsQuantity(cartProducts.length);
  }, [cartProducts]);

  return (
    <CartContext.Provider
      value={{ cartProductsQuantity, addProductToCart, isOnCart, removeProductFromCart, cartProducts }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCartContext() {
  return useContext(CartContext);
}
