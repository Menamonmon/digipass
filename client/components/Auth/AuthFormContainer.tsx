import clsx from "clsx";
import React, { PropsWithChildren } from "react";

const AuthFormContainer: React.FC<
  PropsWithChildren<{ className?: string }>
> = ({className, children}) => {
  return <div className={clsx(className, "")}>{children}</div>;
};

export default AuthFormContainer;
