import { Icon } from "@iconify/react";
import classNames from "classnames";

import Header from "../components/Header";

import Link from "next/link";
import api from "../service/api";

import { Product } from "../types/Product";
import { GetStaticProps } from "next";
import Head from "next/head";
import { formatCurrency } from "../utils/formatCurrency";
import { Rating } from "react-simple-star-rating";
import BottomSlideButton from "../components/BottomSlideButton";

interface Props {
  products: Product[];
}

export default function HomePage({ products }: Props) {
  return (
    <>
      <Head>
        <title> Yuu Store - Encontre algo único! </title>
      </Head>

      <Header />

      <main>
        <section className="bg-home w-full h-80 xl:h-[448px] flex justify-center items-center">
          <div className="text-center px-4">
            <h1 className="font-extrabold text-4xl md:text-6xl">Confiável. Seguro. Rápido.</h1>
            <p className="mt-3 text-sm md:text-base">
              YuuStore é uma loja 100% focada na segurança e rapidez da sua compra!
            </p>
          </div>
        </section>

        <div className="mt-4"></div>

        <section className="max-w-container mx-auto p-4">
          <div>
            <h1 className="text-xl text-center mb-4"> Nossos mais vendidos </h1>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-4 2xl:grid-cols-5">
              {products?.map((prod) => (
                <Link href={`/product/${prod.id}`} key={prod.id} passHref>
                  <a className="bg-white100 group cursor-pointer h-68 rounded-lg flex flex-col items-center justify-between py-3">
                    <div className="relative w-36 h-36">
                      <img src={prod.images.thumb} className="object-cover duration-200 group-hover:scale-110" />
                    </div>

                    <div className="mt-1 flex flex-col justify-start w-full px-3">
                      <div className="flex justify-between items-center">
                        <h3> {prod.title} </h3>
                      </div>

                      <div className="w-full flex"></div>

                      <div>
                        <strong className="text-base">
                          {formatCurrency(prod.hasDiscount ? prod.price.withDiscount : prod.price.value)}
                        </strong>
                        <span className="line-through"> {prod.hasDiscount && formatCurrency(prod.price.value)} </span>
                      </div>

                      {/* <p className="text-sm"> {prod.description.short.slice(0, 60) + "..."} </p> */}

                      <button className="mt-2 duration-200 hover:bg-transparent border-sky border-2 bg-sky px-3 py-2 rounded-md font-bold">
                        Adicionar no carrinho
                      </button>
                    </div>
                  </a>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="h-96">{/* <h1> Também temos </h1> */}</section>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await api.get("/products");

  return {
    props: {
      products: data,
    },
  };
};
