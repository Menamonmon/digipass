import React, { PropsWithChildren } from "react";
import LogInButton from "../Navbar/LogInButton";
import SignUpButton from "../Navbar/SignUpButton";
import Header from "./Header";

const Layout: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <div className="">
      <Header>
        <div className="flex gap-2">
          <LogInButton />
          <SignUpButton />
        </div>
      </Header>
      {children}
    </div>
  );
};

export default Layout;
