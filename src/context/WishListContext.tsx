import { createContext, useContext, useEffect, useState } from "react";
import { Product } from "../types/Product";

interface WishlistContextValues {
  addProductToWishlist(data: WishlistProduct): void;
  isStarred(productId: Product["id"]): boolean;
  removeProductFromWishlist(productId: Product["id"]): void;
}

interface WishlistProduct {
  product: Product;
}

const WishlistContext = createContext<WishlistContextValues>({} as WishlistContextValues);

export function WishlistContextProvider({ children }: WithChildren) {
  const [wishlistProducts, setWishlistProducts] = useState<WishlistProduct[]>([]);

  function isStarred(productId: Product["id"]) {
    return !!wishlistProducts.find((item) => item.product.id === productId);
  }

  function removeProductFromWishlist(productId: Product["id"]) {
    const wishlistProductIndex = wishlistProducts.findIndex((prod) => prod.product.id === productId);

    setWishlistProducts((oldState) => oldState.filter((_, index) => index !== wishlistProductIndex));
  }

  function addProductToWishlist(data: WishlistProduct) {
    setWishlistProducts((oldValue) => [...oldValue, data]);
  }

  useEffect(() => {
    // console.log(removeProductFromWishList("e179a0f4-3b08-46ae-8f62-92ef17dca330"));
  }, [wishlistProducts]);

  return (
    <WishlistContext.Provider
      value={{
        addProductToWishlist,
        isStarred,
        removeProductFromWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlistContext() {
  return useContext(WishlistContext);
}
