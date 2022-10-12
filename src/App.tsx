import { AiOutlineUser, AiOutlineShoppingCart } from "react-icons/ai";
import { BsHandbag } from "react-icons/bs";
import { Icon } from "@iconify/react";

import classNames from "classnames";
import { commonStyles } from "./common/styles";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Cart from "./page/Cart";
import Login from "./page/Login";
import NotFoundPage from "./page/NotFoundPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="cart" element={<Cart />} />
            <Route path="login" element={<Login />} />

            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
