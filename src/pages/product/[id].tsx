import { Icon } from "@iconify/react";
import Header from "../../components/Header";

import classNames from "classnames";
import { commonStyles } from "../../common/styles";

import { GetStaticPaths, GetStaticProps } from "next/types";

import api from "../../service/api";

import { Product } from "../../types/Product";

import { formatCurrency } from "../../utils/formatCurrency";

interface Props {
  product: Product;
}

export default function ProductPage({ product }: Props) {
  return (
    <>
      <Header />

      <main className="w-full h-full ">
        <section>
          <div className="flex justify-center bg-white100">
            <img src={`/${product?.image}`} alt="" className="h-full" />
          </div>
          <div className="px-4 py-3 flex justify-between">
            <div>
              <h1 className="text-lg"> {product?.title} </h1>

              <span className="text-xl"> {formatCurrency(product?.price)} </span>
            </div>
            <div className="flex justify-center items-start">
              <Icon icon="akar-icons:heart" className={classNames(commonStyles["icon-size"])} />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await api.get<Product[]>("/products");

  const paths = data.map((item) => ({
    params: { id: item.id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await api.get(`/products/${ctx?.params?.id}`);

  return {
    props: {
      product: data,
    },
  };
};
