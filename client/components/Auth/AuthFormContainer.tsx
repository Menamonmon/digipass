import clsx from "clsx";
import React, { PropsWithChildren } from "react";

const AuthFormContainer: React.FC<
  PropsWithChildren<{ className?: string }>
> = ({className, children}) => {
  return <div className={clsx(className, "border-2 border-primary rounded-lg p-4 flex flex-col mx-auto max-w-3xl mt-10")}>{children}</div>;
};

export default AuthFormContainer;
