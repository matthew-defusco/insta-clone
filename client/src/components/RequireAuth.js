import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/auth";

export const RequireAuth = ({ children }) => {
  const auth = useAuth();

  return auth.user ? <Outlet /> : <Navigate to="/" />;
};
