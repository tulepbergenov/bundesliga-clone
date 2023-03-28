import classNames from "classnames";
import { forwardRef } from "react";
import { IButton } from "./Button.interface";

export const Button = forwardRef<HTMLButtonElement, IButton>(
  ({ children, className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={classNames(
          "inline-block w-fit bg-gray-900 px-12 py-4 text-sm font-bold uppercase text-white",
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
