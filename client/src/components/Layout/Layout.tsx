import React, { PropsWithChildren } from "react";
import useAuth from "../../hooks/useAuth";
import LogInButton from "../Navbar/LogInButton";
import SignUpButton from "../Navbar/SignUpButton";
import { UserProfileMenu } from "../UserProfileMenu";
import Header from "./Header";

const Layout: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  const { authStatus } = useAuth();
  return (
    <div className="">
      <Header>
        {authStatus === "not_authenticated" ? (
          <div className="flex gap-2">
            <LogInButton />
            <SignUpButton />
          </div>
        ) : (
          <UserProfileMenu />
        )}
      </Header>
      {children}
    </div>
  );
};

export default Layout;
