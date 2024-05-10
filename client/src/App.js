import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useAuth } from "./context/auth";
import Signup from "./routes/Signup/Signup";
import Dashboard from "./routes/Dashboard/Dashboard";
import { RequireAuth } from "./components/RequireAuth";
import { loginAction } from "./actions/loginAction";
import { logoutAction } from "./actions/logoutAction";
import BaseError from "./components/errors/BaseError";
import Layout from "./routes/Layout/Layout";
import Login from "./routes/Login/Login";
import { signupAction } from "./actions/signupAction";

function App() {
  const authContext = useAuth();
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Login />,
          action: loginAction(authContext),
        },
        {
          path: "/signup",
          element: <Signup />,
          action: signupAction(authContext),
        },
        {
          path: "/dashboard",
          element: <Dashboard />,
          action: logoutAction(authContext),
        },
      ],
      errorElement: <BaseError />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
