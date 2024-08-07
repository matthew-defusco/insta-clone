import { createContext, useContext, useState } from "react";
import { config } from "../config";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const URL = config.url;

  const login = async user => {
    try {
      const res = await fetch(URL + "/api/login", {
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
        localStorage.setItem("user", JSON.stringify(data.user));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const logout = async () => {
    const res = await fetch(URL + "/api/logout", {
      method: "POST",
      credentials: "include",
      mode: "cors",
    });
    const data = await res.json();
    console.log(data);
    localStorage.removeItem("user");
    setUser(null);
  };

  const checkLogin = async () => {
    const res = await fetch(URL + "/api/session");
    const data = await res.json();
    console.log("Coming from checkLogin context", data);
    if (data.user) {
      // setUser(data.user);
      return user;
    } else {
      // logout();
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
