import classNames from "classnames";
import { IContainer } from "./Container.interface";

export const Container = ({
  children,
  className,
  width = "lg",
  ...props
}: IContainer) => {
  return (
    <div
      className={classNames("container", {
        ["lg:max-w-screen-lg"]: width === "lg",
        ["xl:max-w-screen-xl"]: width === "xl",
      })}
      {...props}
    >
      {children}
    </div>
  );
};
