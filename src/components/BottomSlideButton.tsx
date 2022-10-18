import classNames from "classnames";
import React, { HTMLAttributes } from "react";

interface BottomSlideButtonProps extends WithChildren {
  slideElement: React.ReactNode;
  className?: HTMLAttributes<HTMLButtonElement>["className"];
}

export default function BottomSlideButton({ children, slideElement, className }: BottomSlideButtonProps) {
  return (
    <button className={classNames(className, "group relative flex")}>
      <div className="duration-200 group-hover:translate-y-[-40px] group-hover:invisible"> {children} </div>

      <div className="absolute duration-200 left-0 top-0 invisible translate-y-10 w-full h-full flex justify-center items-center group-hover:translate-y-0 group-hover:visible">
        {slideElement}
      </div>
    </button>
  );
}
