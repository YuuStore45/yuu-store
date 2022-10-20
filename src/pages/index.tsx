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
import ProductCard from "../components/ProductCard";

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
            <h1 className="font-extrabold text-[40px] md:text-[48px] lg:text-xl leading-none">
              Confiável. Seguro. Rápido.
            </h1>
            <p className="mt-3 text-base md:text-heading">
              YuuStore é uma loja 100% focada na segurança e rapidez da sua compra!
            </p>
          </div>
        </section>

        <div className="mt-4"></div>

        <section className="max-w-container mx-auto p-4">
          <div>
            <h1 className="text-heading text-center mb-4"> Nossos mais vendidos </h1>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-4 2xl:grid-cols-5">
              {products.map((prod) => (
                <ProductCard key={prod.id} product={prod} />
              ))}
            </div>
          </div>
        </section>

        <section className="h-96">{/* <h1> Também temos </h1> */}</section>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await api.get<Product[]>("/products");

  return {
    props: {
      products: data,
    },
  };
};
