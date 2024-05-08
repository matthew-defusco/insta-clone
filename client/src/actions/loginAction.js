import { redirect } from "react-router-dom";
import { useAuth } from "../context/auth";

export const loginAction = async ({ request }) => {
  const { login } = useAuth();
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");
  try {
    await login({ email, password });
  } catch (error) {
    return {
      error: "Invalid login attempt.",
    };
  }
  return redirect("/dashboard");
};
