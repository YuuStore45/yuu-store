import { Icon } from "@iconify/react";
import classNames from "classnames";

import { Product } from "../types/Product";

import React, { useState } from "react";
import Link from "next/link";
import { formatCurrency } from "../utils/formatCurrency";
import { useWishlistContext } from "../context/WishlistContext";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const {
    addProductToWishlist: addProductToWishList,
    isStarred,
    removeProductFromWishlist: removeProductFromWishList,
  } = useWishlistContext();

  function handleAddToWishList() {
    if (isStarred(product.id)) {
      return removeProductFromWishList(product.id);
    }

    addProductToWishList({
      product,
    });
  }

  return (
    // <Link passHref href={`/product/${product.id}`}>
    <div className="bg-card relative group rounded-md py-3">
      <label
        className="z-20 absolute right-0 top-0 w-14 h-14 flex justify-center items-center cursor-pointer"
        onClick={handleAddToWishList}
      >
        <Icon
          icon={isStarred(product.id) ? "ant-design:heart-filled" : "akar-icons:heart"}
          className={classNames("icon duration-200 hover:scale-110", { "text-red-color": isStarred })}
        />
      </label>

      <Link href={`/product/${product.id}`}>
        <a className="w-full flex flex-col items-center justify-between">
          <img
            src={product.images.thumb}
            alt={product.title}
            className="cursor-pointer w-36 h-36 duration-200 group-hover:scale-110"
          />

          <div className="mt-1 flex flex-col justify-start w-full px-3 cursor-pointer">
            <div>
              <h2> {product.title} </h2>
            </div>

            <div>
              <strong className="text-heading2">
                {formatCurrency(product.hasDiscount ? product.price.withDiscount : product.price.value)}
              </strong>
              <span className="line-through ml-1">{product.hasDiscount && formatCurrency(product.price.value)}</span>
            </div>
          </div>
        </a>
      </Link>
    </div>
    // </Link>
  );
}

{
  /* <Link href={`/product/${prod.id}`} key={prod.id} passHref>
                  <a className="bg-white100 group cursor-pointer h-68 rounded-lg flex flex-col items-center justify-between py-3">
                    <div className="relative w-36 h-36">
                      <img src={prod.images.thumb} className="object-cover duration-200 group-hover:scale-110" />
                    </div>

                    <div className="mt-1 flex flex-col justify-start w-full px-3">
                      <div className="flex justify-between items-center">
                        <h2> {prod.title} </h2>
                      </div>

                      <div className="w-full flex"></div>

                      <div className="flex items-center">
                        <h2>{formatCurrency(prod.hasDiscount ? prod.price.withDiscount : prod.price.value)}</h2>
                        <span className="line-through">{prod.hasDiscount && formatCurrency(prod.price.value)}</span>
                      </div>

                      // <p className="text-sm"> {prod.description.short.slice(0, 60) + "..."} </p>

                      <button className="mt-2 duration-200 hover:bg-transparent border-sky border-2 bg-sky px-3 py-2 rounded-md font-bold">
                        Adicionar no carrinho
                      </button>
                    </div>
                  </a>
                </Link> */
}
