import { Icon } from "@iconify/react";
import { BsHandbag } from "react-icons/bs";

import classNames from "classnames";
import { commonStyles } from "../common/styles";

import Link from "next/link";

const isLogged = false;

export default function Header() {
  return (
    <header
      className={classNames("h-16 md:h-20 lg:md-20 flex items-center justify-between", commonStyles["page-padding"])}
    >
      <div className="flex items-center">
        <Link href="/">
          <h1 className="font-extrabold text-2xl md:text-3xl"> YuuStore </h1>
        </Link>

        <div className="mx-2 md:mx-3 lg:mx-4"></div>

        <p className="mt-[2px] hidden md:block text-base text-weak"> Encontre produtos incríveis! </p>
      </div>

      <div className="flex items-center justify-center">
        <Link href={isLogged ? "/my-account" : "/login"} passHref>
          <a className={classNames(commonStyles["hide-for-mobile"], "hover:opacity-60 duration-200")}>
            {isLogged ? "Minha Conta" : "Entrar/Registrar"}
          </a>
        </Link>

        <div className="mx-3"></div>

        <button className="block md:hidden">
          <Icon icon="icon-park-outline:hamburger-button" className={classNames(commonStyles["icon-size"], "")} />
        </button>

        <div className="mx-1"></div>

        <Link href="/cart" passHref>
          <a>
            <BsHandbag className={classNames(commonStyles["icon-size"], "")} />
          </a>
        </Link>
      </div>
    </header>
  );
}
