import { redirect } from "react-router-dom";

export const authLoader = authContext => async () => {
  const { user } = authContext;

  if (!user) {
    return redirect("/");
  }
  return null;
};
