import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useAuth } from "./context/auth";
import { RequireAuth } from "./components/RequireAuth";
import {
  loginAction,
  logoutAction,
  signupAction,
  addPost,
  postEngageAction,
} from "./actions/index.js";
// import { loginAction } from "./actions/loginAction";
// import { logoutAction } from "./actions/logoutAction";
// import { signupAction } from "./actions/signupAction";
// import { addPost } from "./actions/addPostAction";
import BaseError from "./components/errors/BaseError";
import Layout from "./routes/Layout/Layout";
import Login from "./routes/Login/Login";
import Signup from "./routes/Signup/Signup";
import Feed from "./routes/Feed/Feed";
import AddPost from "./routes/AddPost/AddPost";
import ProfileLayout from "./routes/ProfileLayout/ProfileLayout";
import { profileLoader } from "./loaders/profileLoader";

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
              path: "me",
              element: <ProfileLayout profileUser={authContext.user} />,
              loader: profileLoader(authContext),
            },
            {
              path: "create",
              action: addPost,
              element: <AddPost />,
            },
            {
              path: "api/posts/:postId",
              action: postEngageAction,
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
