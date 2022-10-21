import classNames from "classnames";
import React from "react";

import { Icon } from "@iconify/react";

interface ScrollToTopButtonProps {
  show: boolean;
}

export default function ScrollToTopButton({ show }: ScrollToTopButtonProps) {
  return (
    <div
      onClick={() => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth",
        });
      }}
      className={classNames(
        "fixed cursor-pointer bottom-4 md:bottom-8 right-4 border w-8 h-8 bg-white flex justify-center items-center border-gray rounded-full shadow-md translate-y-28 duration-200",
        { "translate-y-0": show }
      )}
    >
      <Icon icon="akar-icons:arrow-up" className="icon" />
    </div>
  );
}
