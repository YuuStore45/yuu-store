import { Icon } from "@iconify/react";
import Header from "../../components/Header";
import QuantityInput from "../../components/QuantityInput";
import Footer from "../../components/Footer";
import classNames from "classnames";

import { GetStaticPaths, GetStaticProps } from "next/types";

import api from "../../service/api";

import { Product } from "../../types/Product";

import { formatCurrency } from "../../utils/formatCurrency";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useCartContext } from "../../context/CartContext";
import { useWishListContext } from "../../context/WishListContext";

import Rating from "react-rating";
import tippy from "tippy.js";

interface Props {
  product: Product;
}

interface ProductVariantOptions {
  label: string;
  value: number;
}

export default function ProductPage({ product }: Props) {
  const [productVariantOptions, setProductVariantOptions] = useState<ProductVariantOptions[]>(
    product.variants ? product.variants?.map((variant) => ({ value: -1, label: variant.label })) : []
  );
  const [productQuantity, setProductQuantity] = useState(1);

  const pageTitle = `Yuu Store: ${product.title || ""}`;

  const { addProductToCart } = useCartContext();
  const { addProductToWishList, isStarred, removeProductFromWishList } = useWishListContext();

  function addToCart() {
    addProductToCart({
      productQuantity,
      product,
    });
  }

  function handleAddProductToWishList() {
    if (isStarred(product.id)) {
      return removeProductFromWishList(product.id);
    }

    addProductToWishList({
      product,
    });
  }

  function chooseVariant(fieldLabel: string, index: number) {
    const arr = productVariantOptions.map((variant) => {
      if (variant.label === fieldLabel) {
        return {
          ...variant,
          value: index,
        };
      }
      return variant;
    });

    setProductVariantOptions(arr);
  }

  function handleBuyProduct() {
    console.log({
      product,
      quantity: productQuantity,
      productVariants: productVariantOptions,
    });
  }

  if (typeof window !== "undefined") {
    tippy("[data-tippy-content]", {
      animation: "shift-away",
      arrow: true,
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
                <h1 className=""> {product?.title} </h1>

                <p className=""> {product.description.short} </p>
              </div>

              <div className="mt-1 flex items-center">
                <div className="h-5">
                  {/* @ts-ignore */}
                  <Rating
                    initialRating={product.rating}
                    readonly
                    emptySymbol={<Icon icon="ant-design:star-outlined" className="w-5 h-5" />}
                    fullSymbol={<Icon icon="ant-design:star-filled" className="w-5 h-5 text-yellow-color" />}
                  />
                </div>

                <span className="ml-1"> {product.rating} </span>
              </div>

              <div className="mt-6">
                <div className="">
                  <span className="line-through"> {product.hasDiscount && formatCurrency(product.price.value)} </span>
                  <h1> {formatCurrency(product.hasDiscount ? product.price.withDiscount : product.price.value)} </h1>
                </div>

                <div className="flex flex-row items-center text-weak mt-1">
                  <Icon icon="carbon:delivery" className="icon" />

                  <span className="ml-2">
                    Frete {product.delivery.free ? "Grátis" : formatCurrency(product.delivery.value)}(chega em até 10
                    dias)
                  </span>
                </div>
              </div>

              <div className="mt-7">
                {product.variants?.map((variant) => (
                  <div key={variant.label}>
                    <strong> {variant.label}: </strong>

                    <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                      {variant.options.map((option, index) => (
                        <div
                          data-tippy-content={option.label}
                          onClick={() => chooseVariant(variant.label, index)}
                          key={option.label}
                          className={classNames(
                            "cursor-pointer border border-gray rounded-sm w-20 h-20 flex justify-center items-center",
                            {
                              "border-black":
                                productVariantOptions.find((item) => item.label === variant.label)?.value === index,
                            }
                          )}
                        >
                          <img src={"/" + option.image} alt="1" className="object-scale-down w-full h-full" />
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Buttons */}
              <div className="mt-7">
                <QuantityInput value={productQuantity} setValue={setProductQuantity} />

                <div className="mt-2 flex">
                  <button
                    onClick={addToCart}
                    className="px-3 py-2 border text-white bg-black border-gray duration-200 hover:bg-transparent hover:text-normal-color"
                  >
                    Adicionar ao carrinho
                  </button>

                  <div className="mx-1"></div>

                  <button
                    onClick={handleBuyProduct}
                    className="px-3 py-2 border text-white bg-black border-gray duration-200 hover:bg-transparent hover:text-normal-color"
                  >
                    Comprar
                  </button>
                </div>

                <button
                  className="flex items-center justify-center mt-8 hover:underline underline-offset-2"
                  onClick={handleAddProductToWishList}
                >
                  <Icon
                    icon={isStarred(product.id) ? "ant-design:heart-filled" : "akar-icons:heart"}
                    className={classNames({ "text-red-color": isStarred(product.id) })}
                  />

                  <span className="text-base ml-2">
                    {isStarred(product.id) ? "Remover da" : "Adicionar à"} lista de desejos
                  </span>
                </button>
              </div>

              <div className="bg-gray h-[1px] w-full my-4"></div>
            </div>
          </div>
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
