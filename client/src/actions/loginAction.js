import { redirect } from "react-router-dom";

export const loginAction =
  authContext =>
  async ({ request }) => {
    const { login } = authContext;
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
