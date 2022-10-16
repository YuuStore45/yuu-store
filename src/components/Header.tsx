import { Icon } from "@iconify/react";
import { BsHandbag } from "react-icons/bs";

import classNames from "classnames";

import Link from "next/link";

const isLogged = false;

export default function Header() {
  return (
    <header className="h-16 md:h-20 lg:md-20 flex items-center md:justify-between max-w-container mx-auto px-6">
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
          <a className="ml-2">
            <BsHandbag className={classNames("icon")} />
          </a>
        </Link>
      </div>
    </header>
  );
}
