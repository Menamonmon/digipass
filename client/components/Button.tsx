import React, { ButtonHTMLAttributes } from "react";
import clsx from "clsx";
import Link from "next/link";

interface ButtonProps extends ButtonHTMLAttributes<{}> {
  variant: "outlined" | "filled";
  href?: string;
}

const Button: React.FC<ButtonProps> = ({
  className,
  href,
  variant,
  ...props
}) => {
  return href !== undefined ? (
    <Link href={href}>
      <button
        {...props}
        className={clsx(
          className,
          variant === "outlined"
            ? "rounded-lg text-primary border-2 border-primary p-2 hover:bg-blue-200 duration-300"
            : "rounded-lg bg-primary text-secondary p-2 hover:brightness-90 duration-300"
        )}
      />
    </Link>
  ) : (
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
