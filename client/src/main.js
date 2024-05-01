import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import "./styles/global.css";
import "./styles/utilities.css";
// import NotFound from "./routes/Error/Error";
// import Signup from "./routes/Signup/Signup";
// import Home from "./routes/Home/Home";
// import { signupAction } from "./routes/actions";
import { AuthProvider } from "./context/auth";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     errorElement: <NotFound />,
//     children: [
//       {
//         path: "/",
//         element: <Home />,
//       },
//       {
//         path: "/signup",
//         element: <Signup />,
//         action: signupAction,
//       },
//     ],
//   },
// ]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
