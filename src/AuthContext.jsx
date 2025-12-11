import { createContext, useState, useEffect } from "react";
import LoadingScreen from "./LoadingScreen";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [checkingSession, setCheckingSession] = useState(true);

  // Restore session on refresh
  useEffect(() => {
    fetch("http://localhost/backend/api/check_session.php", {
      credentials: "include"
    })
      .then(res => res.json())
      .then(data => {
        if (data.logged_in) {
          setUser(data.user);
        }
        setCheckingSession(false);
      });
  }, []);

  const login = async (username, password) => {
    try {
      const response = await fetch(
        "http://localhost/backend/api/login.php",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
          body: JSON.stringify({ username, password })
        }
      );

      const data = await response.json();

      if (data.success) {
        setUser(data.user);
        return data;
      }

      return null;
    } catch (err) {
      console.error(err);
      return null;
    }
  };
  const logout = async () => {
  try {
    const res = await fetch("http://localhost/backend/api/logout.php", {
      method: "POST",
      credentials: "include",
    });

    const data = await res.json();
    if (data.success) {
      setUser(null); // clear React state
      return true;
    }
    return false;
  } catch (err) {
    console.error(err);
    return false;
  }
};


  return (
    <AuthContext.Provider value={{ user, login, logout, checkingSession }}>
      {checkingSession ? <LoadingScreen /> : children}
    </AuthContext.Provider>
  );
};
