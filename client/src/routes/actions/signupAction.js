import { useAuth } from "../../context/auth";
import { useNavigate } from "react-router-dom";

const signup = async user => {
  const navigate = useNavigate();
  const auth = useAuth();
  const res = await fetch(`http://localhost:3000/api/signup`, {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      "Content-Type": "application/json",
    },
  });

  console.log("coming from signup action", res.json());
  auth.login(res.json());
  navigate("/");

  return user;
};

const action = async ({ request }) => {
  const data = await request.formData();
  const email = data.get("email");
  const fullName = data.get("fullName");
  const username = data.get("username");
  const password = data.get("password");
  // console.log(request);
  // console.log(data.get("username"));
  return signup({ email, fullName, username, password });
};

export default action;
