import { redirect } from "react-router-dom";

export const logoutAction = authContext => async () => {
  const { logout } = authContext;
  logout();
  return redirect("/");
};
