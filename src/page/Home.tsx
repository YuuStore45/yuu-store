import { BsHandbag } from "react-icons/bs";
import { Icon } from "@iconify/react";

import classNames from "classnames";
import { commonStyles } from "../common/styles";

import { Link } from "react-router-dom";
import { faker } from "@faker-js/faker";
import Header from "../components/Header";

const categories = [{ title: "Tecnologia" }, { title: "Beleza" }];

const products = Array.from({ length: 6 }).map(() => ({
  title: "SmartWatch",
  image: "smart-watch.png",
  price: 132.22,
  description: "IWO CW27 MAX Smartwatch 1.92 Polegadas Para iOS/Android",
}));

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <section
          className={classNames(
            "bg-home w-full h-80 xl:h-[448px] flex justify-center items-center",
            commonStyles["page-padding"]
          )}
        >
          <div className="text-center">
            <h1 className="font-extrabold text-5xl md:text-7xl">
              {/* {["Confiável.", "Seguro.", "Rápido."].map((text) => (
                <span key={text} className="text-5xl md:text-7xl">
                  {text}
                </span>
              ))} */}
              Confiável. Seguro. Rápido.
              {/* <span>Confiável.</span>
              <span className="text-5xl md:text-7xl">Seguro.</span>
              <span className="text-5xl md:text-7xl">Rápido.</span> */}
            </h1>
            <p className="mt-3 text-sm md:text-base">
              YuuStore é uma loja 100% focada na segurança e rapidez da sua compra!
            </p>
          </div>
        </section>

        <div className="mt-4"></div>

        <section className={classNames(commonStyles["page-padding"], "py-4")}>
          <div>
            {/* <h1 className="text-xl text-center mb-4"> Produtos </h1> */}

            <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
              {products.map((prod) => (
                <div
                  key={Math.random()}
                  className="bg-white100 h-72 rounded-lg flex flex-col items-center justify-between py-2"
                >
                  <div className="relative w-36 h-36">
                    <img src={prod.image} className="object-cover" />
                  </div>

                  <div className="mt-2 flex flex-col justify-start w-full px-3">
                    <div className="flex justify-between items-center">
                      <strong className="text-base"> {faker.commerce.product()} </strong>
                      <strong className="text-base">{faker.finance.amount(50, 300, 2, "R$")}</strong>
                    </div>

                    <p className="text-xs"> {faker.commerce.productDescription().slice(0, 60) + "..."} </p>

                    <button className="mt-2 duration-200 bg-sky px-3 py-2 rounded-md font-bold">
                      Adicionar no carrinho
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="h-96">
          <h1> Também temos </h1>
        </section>
      </main>
    </>
  );
}
