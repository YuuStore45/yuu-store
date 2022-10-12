import { AiOutlineUser, AiOutlineShoppingCart } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { Icon } from "@iconify/react";

import classNames from "classnames";
import { commonStyles } from "./common/styles";

import { useEffect } from "react";

function App() {
  useEffect(() => {}, []);

  return (
    <div>
      <header
        className={classNames("h-16 md:h-20 lg:md-20 flex items-center justify-between", commonStyles["page-padding"])}
      >
        <div className="flex items-center">
          <h1 className="font-extrabold text-2xl md:text-3xl"> YuuStore </h1>

          <div className="mx-2 md:mx-3 lg:mx-4"></div>

          <p className="mt-[2px] hidden md:block text-base"> Encontre produtos incríveis! </p>
        </div>

        <div className="flex items-center justify-center">
          <a href="#" className={classNames(commonStyles["hide-for-mobile"])}>
            Entrar / Registrar
          </a>

          <div className="mx-2"></div>

          <a href="#" className="block md:hidden">
            <Icon icon="icon-park-outline:hamburger-button" className={classNames(commonStyles["icon-size"], "")} />
          </a>

          <a href="#">
            <AiOutlineShoppingCart className={classNames(commonStyles["icon-size"], "")} />
          </a>
        </div>
      </header>
      <main>
        <section
          className={classNames(
            "bg-home w-full h-96 xl:h-[448px] flex justify-center items-center",
            commonStyles["page-padding"]
          )}
        >
          <div className="text-center">
            <h1 className="text-6xl md:text-7xl font-extrabold"> Confiável. Seguro. Rápido. </h1>
            <p className="mt-3 text-sm md:text-base">
              YuuStore é uma loja 100% focada na segurança e rapidez da sua compra!
            </p>
          </div>
        </section>

        <section>ads</section>
      </main>
    </div>
  );
}

export default App;
