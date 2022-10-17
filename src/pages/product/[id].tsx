import { Icon } from "@iconify/react";
import Header from "../../components/Header";
import QuantityInput from "../../components/QuantityInput";
import Footer from "../../components/Footer";
import BottomSlideButton from "../../components/BottomSlideButton";

import { GetStaticPaths, GetStaticProps } from "next/types";

import api from "../../service/api";

import { Product } from "../../types/Product";

import { formatCurrency } from "../../utils/formatCurrency";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { useCartContext } from "../../context/CartContext";

interface Props {
  product: Product;
}

export default function ProductPage({ product }: Props) {
  const [productQuantity, setProductQuantity] = useState(1);

  const pageTitle = `Yuu Store: ${product.title || ""}`;

  const { addProductToCart } = useCartContext();

  function addToCart() {
    addProductToCart({
      productQuantity,
      product,
    });
  }

  return (
    <>
      <Head>
        <title> {pageTitle} </title>
        <meta name="description" content={product.description.short} />
      </Head>

      <Header />

      <main className="w-full h-full border-t border-gray">
        <section className="max-w-container mx-auto px-4">
          <div className="flex items-center py-3 md:py-4">
            <p className="text-weak text-base">
              <Link passHref href="/">
                <a>Home</a>
              </Link>
              <span className="mx-2"> / </span>
              <span> Beleza </span>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4">
            <img
              src={`/${product.images.primary}`}
              alt="Base"
              className="md:max-w-[360px] lg:max-w-[488px] xl:max-w-[572px]"
            />

            <div className="mt-3 md:mt-0">
              <div>
                <h1 className="text-2xl lg:text-3xl"> {product?.title} </h1>

                <span className="text-sm lg:text-base text-weak"> {product.description.short} </span>
              </div>

              <div className="mt-6">
                <div className="">
                  <span className="line-through"> {product.hasDiscount && formatCurrency(product.price.value)} </span>
                  <h2> {formatCurrency(product.hasDiscount ? product.price.withDiscount : product.price.value)} </h2>
                </div>

                <div className="flex flex-row items-center text-weak mt-1">
                  <Icon icon="carbon:delivery" className="icon" />

                  <span className="ml-2">
                    Frete {product.delivery.free ? "Grátis" : formatCurrency(product.delivery.value)}
                  </span>
                </div>
              </div>

              {/* Buttons */}
              <div className="mt-7">
                <div>
                  <QuantityInput value={productQuantity} setValue={setProductQuantity} />
                </div>

                <div className="mt-2 flex">
                  <button
                    onClick={addToCart}
                    className="px-3 py-2 border text-white bg-black border-gray duration-200 hover:bg-transparent hover:text-normal"
                  >
                    Adicionar ao carrinho
                  </button>

                  <div className="mx-1"></div>

                  <button className="px-3 py-2 border text-white bg-black border-gray duration-200 hover:bg-transparent hover:text-normal">
                    Comprar
                  </button>
                </div>
              </div>

              <div className="bg-gray h-[1px] w-full my-4"></div>

              <div>
                <div>
                  <h3> Descrição </h3>

                  <p className="mt-2">Maquiagem</p>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="flex flex-col items-center md:items-start md:flex-row lg:w-[768px] xl:w-[1152px]">
            <div className="flex justify-center bg-white100 w-full md:w-auto">
              <img
                src={`/${product?.image}`}
                alt="A"
                className="h-full w-full min-w-[272px] md:w-72 md:h-72  md:min-w-[288px] lg:min-w-[384px] lg:min-h-[384px] xl:min-w-[448px] xl:min-h-[448px]"
              />
            </div>
            <div className="px-4 py-3 md:py-0 w-full">
              <div className="flex justify-between">
                <div>
                  <h2> {product?.title} </h2>

                  <h1 className="text-xl"> {formatCurrency(product?.price)} </h1>
                </div>
                <div className="flex justify-center items-start">
                  <button>
                    <Icon icon="akar-icons:heart" className={classNames("icon", "text-red")} />
                  </button>
                </div>
              </div>

              <Tabs.Group style="default">
                <Tabs.Item title="Descrição" style={{ borderColor: "#7159c1" }}>
                  <h2 className="text-weak"> Descrição </h2>
                </Tabs.Item>
                <Tabs.Item title="Availiação">
                  <h2 className="text-weak"> Avaliação </h2>
                </Tabs.Item>
              </Tabs.Group>
            </div>
          </div> */}
        </section>
      </main>

      <Footer />
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
  const { data } = await api.get<Product>(`/products/${ctx?.params?.id}`);

  return {
    props: {
      product: data,
    },
  };
};
