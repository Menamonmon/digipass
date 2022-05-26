import React, { ButtonHTMLAttributes } from "react";
import clsx from "clsx";
import Link from "next/link";

interface ButtonProps extends ButtonHTMLAttributes<{}> {
  variant?: "outlined" | "filled";
  href?: string;
  leftIcon?: React.ComponentElement<any, any>;
  rightIcon?: React.ComponentElement<any, any>;
}

const Button: React.FC<ButtonProps> = ({
  className,
  href,
  variant,
  children,
  leftIcon,
  rightIcon,
  ...props
}) => {
  variant = variant == undefined ? "filled" : variant;
  const myButton = (
    <button
      {...props}
      className={clsx(
        className,
        "rounded-lg p-2 duration-300 flex flex-row gap-2 justify-center items-center disabled:brightness-50",
        variant === "outlined"
          ? "text-primary border-2 border-primary hover:bg-blue-200"
          : "bg-primary text-secondary hover:brightness-90"
      )}
    >
      {leftIcon && <p className="text-2xl">{leftIcon}</p>}
      {children}
      {rightIcon && <p className="text-2xl">{rightIcon}</p>}
    </button>
  );
  return href !== undefined ? <Link href={href}>{myButton}</Link> : myButton;
};

export default Button;
