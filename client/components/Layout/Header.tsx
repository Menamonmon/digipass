import Link from "next/link";
import React, { PropsWithChildren } from "react";
import LinkComponent from "../LinkComponent/LinkComponent";

const Header: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <div className="flex bg-secondary justify-between items-stretch h-14 p-2 border-b-secondary-dark border-b drop-shadow-md">
      <LinkComponent href="/" className="inline-flex flex-row">
        <img src="/images/standalone-icon.png" height="100%" />
        <img src="/images/logo-text.png" height="100%" className="ml-2 p-1" />
      </LinkComponent>
      {children}
    </div>
  );
};

export default Header;
