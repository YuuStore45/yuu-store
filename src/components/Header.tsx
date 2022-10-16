import { Icon } from "@iconify/react";
import { BsHandbag } from "react-icons/bs";

import classNames from "classnames";

import Link from "next/link";
import { useCartContext } from "../context/CartContext";

const isLogged = false;

export default function Header() {
  const { cartProductsQuantity } = useCartContext();

  return (
    <header className="h-16 md:h-20 lg:md-20 flex items-center md:justify-between max-w-container mx-auto px-4">
      <div className="flex items-center">
        <Link href="/" passHref>
          <a className="hidden md:flex">
            <h1 className="font-extrabold text-2xl md:text-3xl"> YuuStore </h1>
          </a>
        </Link>

        <p className="mt-1 ml-2 hidden md:block text-base text-weak"> Encontre produtos incríveis! </p>

        <button className="block self-end md:hidden">
          <Icon icon="icon-park-outline:hamburger-button" className={classNames("icon")} />
        </button>
      </div>

      <Link href="/" passHref>
        <a className="self-center md:hidden mx-auto">
          <h1 className="font-extrabold text-2xl md:text-3xl"> YuuStore </h1>
        </a>
      </Link>

      <div className="flex items-center justify-center justify-items-start">
        <Link href={isLogged ? "/my-account" : "/login"} passHref>
          <a className={classNames("hide-for-mobile", "hover:opacity-60 duration-200")}>
            {isLogged ? "Minha Conta" : "Entrar/Registrar"}
          </a>
        </Link>

        <Link href="/cart" passHref>
          <a className="relative flex justify-center items-center ml-2 rounded-full border border-gray p-1 w-10 h-10">
            <BsHandbag className={classNames("w-5 h-5")} />

            <span className="absolute text-weak top-[-6px] right-[-6px] bg-white rounded-full w-5 h-5 text-center shadow-md">
              {cartProductsQuantity}
            </span>
          </a>
        </Link>
      </div>
    </header>
  );
}
