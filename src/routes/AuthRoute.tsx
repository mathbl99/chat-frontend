import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export const AuthRoute = ({ children }: React.PropsWithChildren) => {
  const { token } = useAuth();

  if (!token) {
    return <Navigate to="/" />;
  }

  return children;
};