import type { AppProps } from "next/app";

import { AuthContextProvider } from "../context/AuthContext";
import { CartContextProvider } from "../context/CartContext";
import { WishlistContextProvider } from "../context/WishlistContext";

import "../styles/index.css";

import "tippy.js/dist/tippy.css";
import "tippy.js/animations/shift-away.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <AuthContextProvider>
        <CartContextProvider>
          <WishlistContextProvider>
            <Component {...pageProps} />
          </WishlistContextProvider>
        </CartContextProvider>
      </AuthContextProvider>
    </>
  );
}

export default MyApp;
