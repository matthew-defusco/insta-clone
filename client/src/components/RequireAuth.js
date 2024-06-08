import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../context/auth";
import UserLayout from "../routes/UserLayout/UserLayout";

export const RequireAuth = () => {
  const { user } = useAuth();
  const location = useLocation();

  if (!user) {
    return <Navigate to="/" replace state={{ from: location }} />;
  }

  return (
    <UserLayout>
      <Outlet />
    </UserLayout>
  );
};
