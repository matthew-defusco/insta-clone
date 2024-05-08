import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  // TODO: STORE USER IN LOCAL STORAGE OR CHECK DB FOR SESSION
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("authed")));

  const login = async user => {
    try {
      const res = await fetch("http://localhost:3000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
        credentials: "include",
        mode: "cors",
      });

      const data = await res.json();
      console.log("Coming from the login auth context", data);
      if (data.user) {
        setUser(data.user);
        localStorage.setItem("authed", JSON.stringify(true));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const logout = async () => {
    const res = await fetch("http://localhost:3000/api/logout", {
      method: "POST",
      credentials: "include",
      mode: "cors",
    });
    const data = await res.json();
    console.log(data);
    localStorage.setItem("authed", JSON.stringify(false));
    setUser(null);
  };

  const checkLogin = async () => {
    const res = await fetch("http://localhost:3000/api/session");
    const data = await res.json();
    console.log("Coming from checkLogin context", data);
    if (data.user) {
      setUser(data.user);
    } else {
      logout();
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, checkLogin }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
