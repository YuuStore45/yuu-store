import type { AppProps } from "next/app";
import { AuthContextProvider } from "../context/AuthContext";
import { CartContextProvider } from "../context/CartContext";
import { WishListContextProvider } from "../context/WishListContext";

import "../styles/index.css";

import "tippy.js/dist/tippy.css";
import "tippy.js/animations/shift-away.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <AuthContextProvider>
        <CartContextProvider>
          <WishListContextProvider>
            <Component {...pageProps} />
          </WishListContextProvider>
        </CartContextProvider>
      </AuthContextProvider>
    </>
  );
}

export default MyApp;
