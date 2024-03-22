import { ButtonHTMLAttributes } from "react";
import "./Button.scss";

const sizes = ["sm", "md", "lg"] as const;
export type ButtonSize = (typeof sizes)[number];

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: ButtonSize;
};

const BASE_CLASS = "core-button";

export const Button = ({ size = "md", children, ...rest }: Props) => {
  const classes = [BASE_CLASS, `${BASE_CLASS}--${size}`].join(" ");

  // <button class="core-button core-button--md">
  // <button class="core-button core-button--sm">
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
};
