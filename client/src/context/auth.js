import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async user => {
    try {
      console.log("Coming from the login auth context", res.json());
      setUser(user);
    } catch (error) {
      console.log(error);
    }
  };

  const logout = async () => {
    await fetch("http://localhost:3000/api/logout");
    setUser(null);
  };

  const checkLogin = async () => {};

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
