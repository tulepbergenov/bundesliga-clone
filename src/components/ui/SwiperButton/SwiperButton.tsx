import classNames from "classnames";
import { forwardRef } from "react";
import { ISwiperButton } from "./SwiperButton.interface";
import styles from "./SwiperButton.module.css";

export const SwiperButton = forwardRef<HTMLButtonElement, ISwiperButton>(
  ({ className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        type="button"
        className={classNames(styles.btn, className)}
        {...props}
      ></button>
    );
  }
);

SwiperButton.displayName = "SwiperButton";
