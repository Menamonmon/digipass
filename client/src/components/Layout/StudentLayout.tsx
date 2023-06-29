import React, { PropsWithChildren } from "react";
import useAuth from "../../hooks/useAuth";
import { PageNotFound } from "./PageNotFound";
import { ProtectedRoute } from "./ProtectedRoute";

export const StudentLayout: React.FC<PropsWithChildren> = ({ children }) => {
  const { authStatus } = useAuth();
  const isStudent =
    authStatus === "new_student" || authStatus === "old_student";

  return (
    <ProtectedRoute
      allowed={isStudent}
      redirect="/"
      override
      alternativeChildren={<PageNotFound />}
    >
      {children}
    </ProtectedRoute>
  );
};
