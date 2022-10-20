import { createContext, useContext, useEffect, useState } from "react";
import { Product } from "../types/Product";

interface WishListContextValues {
  addProductToWishList(data: WishListProduct): void;
  isStarred(productId: Product["id"]): boolean;
  removeProductFromWishList(productId: Product["id"]): void;
}

interface WishListProduct {
  product: Product;
}

const WishListContext = createContext<WishListContextValues>({} as WishListContextValues);

export function WishListContextProvider({ children }: WithChildren) {
  const [wishListProducts, setWishListProducts] = useState<WishListProduct[]>([]);

  function isStarred(productId: Product["id"]) {
    return !!wishListProducts.find((item) => item.product.id === productId);
  }

  function removeProductFromWishList(productId: Product["id"]) {
    const wishListProductIndex = wishListProducts.findIndex((prod) => prod.product.id === productId);

    setWishListProducts((oldState) => oldState.filter((_, index) => index !== wishListProductIndex));
  }

  function addProductToWishList(data: WishListProduct) {
    setWishListProducts((oldValue) => [...oldValue, data]);
  }

  useEffect(() => {
    // console.log(removeProductFromWishList("e179a0f4-3b08-46ae-8f62-92ef17dca330"));
  }, [wishListProducts]);

  return (
    <WishListContext.Provider value={{ addProductToWishList, isStarred, removeProductFromWishList }}>
      {children}
    </WishListContext.Provider>
  );
}

export function useWishListContext() {
  return useContext(WishListContext);
}
