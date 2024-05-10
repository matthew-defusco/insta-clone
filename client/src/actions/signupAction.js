import { redirect } from "react-router-dom";

export const signupAction =
  authContext =>
  async ({ request }) => {
    const { login } = authContext;
    const formData = await request.formData();
    const user = Object.fromEntries(formData);

    const email = formData.get("email");
    const password = formData.get("password");

    try {
      await fetch("http://localhost:3000/api/signup", {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      await login({ email, password });
      return redirect("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };
