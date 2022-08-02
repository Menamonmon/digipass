import React from "react";
import useAuth from "../../hooks/useAuth";
import { ProtectedRoute } from "./ProtectedRoute";

export const StudentLayout: React.FC<{}> = ({ children }) => {
  const { authStatus } = useAuth();
  const isTeacher =
    authStatus === "new_student" || authStatus === "old_student";

  return (
    <ProtectedRoute allowed={isTeacher} redirect="/">
      {children}
    </ProtectedRoute>
  );
};
