import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/auth";

export const RequireAuth = ({ element }) => {
  const { user } = useAuth();

  return user ? element || <Outlet /> : <Navigate to="/" />;
};
