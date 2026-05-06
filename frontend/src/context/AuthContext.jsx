import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    user: null,
    access: localStorage.getItem("access") || null,
  });

  const isAuthenticated = !!auth.access;

  // 🔹 Fetch current user
  const fetchUser = async (token) => {
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/auth/me/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();

      setAuth((prev) => ({
        ...prev,
        user: data,
      }));
    } catch (err) {
      console.error("Failed to fetch user", err);
    }
  };

  // 🔹 Load user on app start
  useEffect(() => {
    if (auth.access && !auth.user) {
      fetchUser(auth.access);
    }
  }, []);

  // 🔐 LOGIN
  const login = async (username, password) => {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/auth/token/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    const data = await res.json();

    if (!res.ok) throw new Error(data.detail);

    localStorage.setItem("access", data.access);
    localStorage.setItem("refresh", data.refresh);

    setAuth({
      access: data.access,
      user: null,
    });

    await fetchUser(data.access);
  };

  //REGISTER
const register = async (formData) => {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/auth/register/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(JSON.stringify(data));
  }

  return data;
};


  // 🔓 LOGOUT
  const logout = () => {
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");

    setAuth({
      access: null,
      user: null,
    });
  };

  return (
    <AuthContext.Provider value={{ auth, isAuthenticated, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);