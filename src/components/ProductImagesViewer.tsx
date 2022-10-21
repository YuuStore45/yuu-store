import classNames from "classnames";

import React, { useRef } from "react";

import { Product } from "../types/Product";

interface ProductImagesProps {
  images: Product["images"];
  currentImage: string;
  changeImage(newImage: string): void;
  scroll: number;
}

export default function ProductImagesViewer({ images, currentImage, changeImage, scroll }: ProductImagesProps) {
  return (
    <div
      className={classNames("md:max-w-[360px] lg:max-w-[488px] xl:max-w-[572px]", { "md:fixed md:top-8": scroll > 80 })}
    >
      <img
        src={`/${currentImage}`}
        alt="Base"
        className="w-full aspect-square md:max-h-[360px] lg:max-h-[488px] xl:max-h-[572px] object-scale-down"
      />

      <div className="md:max-w-[360px] lg:max-w-[488px] xl:max-w-[572px] mt-1 whitespace-nowrap overflow-x-scroll hide-scrollbar-thumb">
        {[images.primary, ...(images.attachments || [])].map((image) => (
          <div
            key={Math.random()}
            className={classNames(
              "cursor-pointer rounded-sm hover:opacity-75 duration-200 mx-[10px] w-20 h-20 md:w-28 md:h-28 lg:w-28 lg:h-28 inline-block overflow-auto first:ml-0 justify-center items-center border border-gray",
              { "border-black": currentImage === image }
            )}
            onClick={() => changeImage(image)}
          >
            <img src={"/" + image} alt="Att" className="object-scale-down w-full h-full" />
          </div>
        ))}
      </div>
    </div>
  );
}
