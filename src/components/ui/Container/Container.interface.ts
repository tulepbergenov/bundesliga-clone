import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface IContainer
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  width?: "xl" | "lg";
}
