import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  // TODO: STORE USER IN LOCAL STORAGE OR CHECK DB FOR SESSION
  const [user, setUser] = useState();

  const login = async user => {
    try {
      const res = await fetch("http://localhost:3000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      const data = await res.json();
      console.log("Coming from the login auth context", data);
      setUser(data.user);
    } catch (error) {
      console.log(error);
    }
  };

  const logout = async () => {
    await fetch("http://localhost:3000/api/logout", {
      method: "POST",
      credentials: "include",
    });
    setUser(null);
  };

  const checkLogin = async () => {
    const res = await fetch("http://localhost:3000/api/session", {
      credentials: "include",
    });
    const data = await res.json();
    console.log("Coming from checkLogin context", data);
    return data;
  };

  // checkLogin();

  return (
    <AuthContext.Provider value={{ user, login, logout, checkLogin }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
