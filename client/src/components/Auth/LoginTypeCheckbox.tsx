import { Checkbox } from "@mui/material";
import React from "react";
import useAuth from "../../hooks/useAuth";

const LoginTypeCheckbox = () => {
  const { setUserType } = useAuth();

  return (
    <div className="flex items-center">
      <Checkbox
        onChange={(event) => {
          setUserType(event.target.checked ? "student" : "teacher");
        }}
      />
      <h5>Login as a student</h5>
    </div>
  );
};

export default LoginTypeCheckbox;
