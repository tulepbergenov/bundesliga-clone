import classNames from "classnames";
import { createElement } from "react";
import { IHeading } from "./Heading.interface";

export const Heading = ({ as, children, className, ...props }: IHeading) => {
  return createElement(
    as,
    {
      className: classNames("mb-4 text-5xl font-bold", className),
      ...props,
    },
    children
  );
};
