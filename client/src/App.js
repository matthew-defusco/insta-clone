import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home/Home";
import { AuthProvider } from "./context/auth";
import Signup from "./routes/Signup/Signup";
import Dashboard from "./routes/Dashboard/Dashboard";
import { RequireAuth } from "./components/RequireAuth";

function App() {
  return (
    <AuthProvider>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route element={<RequireAuth />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;
