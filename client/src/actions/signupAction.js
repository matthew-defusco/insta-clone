import { redirect } from "react-router-dom";
import { config } from "../config";

export const signupAction =
  authContext =>
  async ({ request }) => {
    const { login } = authContext;
    const formData = await request.formData();
    const user = Object.fromEntries(formData);
    const URL = config.url;

    const email = formData.get("email");
    const password = formData.get("password");

    try {
      await fetch(URL + "/api/signup", {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      await login({ email, password });
      return redirect("/feed");
    } catch (error) {
      console.log(error);
    }
  };
