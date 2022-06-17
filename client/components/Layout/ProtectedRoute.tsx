import { useRouter } from "next/router";
import React, { useEffect } from "react";
import useAuth from "../../hooks/useAuth";

interface ProtectedRouteProps {
  redirect: string;
  allowed?: boolean;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  redirect,
  allowed,
  children,
}) => {
  const { isAuthenticated } = useAuth();
  const router = useRouter();
  const needToRedirect = allowed !== undefined ? allowed : isAuthenticated;
  useEffect(() => {
    if (!needToRedirect) {
      router.push(redirect);
    }
  }, [needToRedirect]);
  return <>{children}</>;
};

export default ProtectedRoute;
