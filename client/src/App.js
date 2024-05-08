import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home/Home";
import { AuthProvider, useAuth } from "./context/auth";
import Signup from "./routes/Signup/Signup";
import Dashboard from "./routes/Dashboard/Dashboard";
import { RequireAuth } from "./components/RequireAuth";
import { useEffect } from "react";
import { loginAction } from "./actions/loginAction";

function App() {
  const { login } = useAuth();

  return (
    <AuthProvider>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} action={loginAction} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/dashboard"
            element={<RequireAuth element={<Dashboard />} />}
          />
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;
