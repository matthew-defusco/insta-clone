import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/auth";
import UserLayout from "../routes/UserLayout/UserLayout";

export const RequireAuth = () => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/" replace />;
  }

  return (
    <UserLayout>
      <Outlet />
    </UserLayout>
  );
};
