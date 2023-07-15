import clsx from "clsx";
import React, { HTMLProps, PropsWithChildren } from "react";

const Tooltipped: React.FC<PropsWithChildren<HTMLProps<HTMLDivElement>>> = ({
  children,
  className,
  ...rest
}) => {
  const classNameWithoutLineClamp = className?.replaceAll(
    /line-clamp-([1-9]|none)/g,
    ""
  );
  let tooltipText = children;
  if (Array.isArray(children)) {
    tooltipText = children.join("");
  }
  return (
    <div
      data-tip={tooltipText}
      className={clsx("tooltip", classNameWithoutLineClamp)}
      {...rest}
    >
      <div className={className}>{children}</div>
    </div>
  );
};

export default Tooltipped;
