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
import Profile from "./routes/Profile/Profile";
import Feed from "./routes/Feed/Feed";

function App() {
  const authContext = useAuth();
  const router = createBrowserRouter([
    {
      // path: "/",
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
          element: <RequireAuth />,
          children: [
            {
              path: "feed",
              element: <Feed />,
            },
            {
              path: "profile",
              element: <Profile />,
            },
            {
              path: "logout",
              action: logoutAction(authContext),
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
