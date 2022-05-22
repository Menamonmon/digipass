import React, { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

interface ButtonProps extends ButtonHTMLAttributes<{}> {
  variant: "outlined" | "filled";
}

const Button: React.FC<ButtonProps> = ({ className, variant, ...props }) => {
  return (
    <button
      {...props}
      className={clsx(
        className,
        variant === "outlined"
          ? "rounded-lg text-primary border-2 border-primary p-2 hover:bg-blue-200 duration-300"
          : "rounded-lg bg-primary text-secondary p-2 hover:brightness-90 duration-300"
      )}
    />
  );
};

export default Button;
