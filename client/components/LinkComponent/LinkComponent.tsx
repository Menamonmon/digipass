import clsx from "clsx";
import React, { AnchorHTMLAttributes } from "react";

const LinkComponent: React.FC<AnchorHTMLAttributes<{}>> = ({
  className,
  ...props
}) => {
  return <a {...props} className={clsx(className, "cursor-pointer")} />;
};

export default LinkComponent;
