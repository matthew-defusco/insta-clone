import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useAuth } from "./context/auth";
import { RequireAuth } from "./components/RequireAuth";
import { loginAction } from "./actions/loginAction";
import { logoutAction } from "./actions/logoutAction";
import { signupAction } from "./actions/signupAction";
import BaseError from "./components/errors/BaseError";
import Layout from "./routes/Layout/Layout";
import Login from "./routes/Login/Login";
import Signup from "./routes/Signup/Signup";
import UserLayout from "./routes/UserLayout/UserLayout";
import Test from "./components/Test";

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
          path: "/home",
          element: <RequireAuth />,
          action: logoutAction(authContext),
          children: [
            {
              path: "test",
              element: <Test />,
            },
          ],
        },
      ],
      errorElement: <BaseError />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
