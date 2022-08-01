import React from "react";
import useAuth from "../../hooks/useAuth";
import Button from "../Button";

const LogoutButton: React.FC<{}> = () => {
  const { handleLogout } = useAuth();

  return <Button onClick={handleLogout}>Logout</Button>;
};

export default LogoutButton;
