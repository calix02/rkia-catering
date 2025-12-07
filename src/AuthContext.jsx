import axios from "axios";
import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  
  const login = async (username, password) => {
    try {
      const response = await fetch("http://localhost/backend/api/login.php", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        credentials: "include",
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (data.success) {
        setUser(data.user);   // Save user in context
        return data;          // ❗ return full JSON including user + role
      }

      return null;
    } catch (err) {
      console.error(err);
      return null;
    }
  };


  return (
    <AuthContext.Provider value={{ user, login }}>
      {children}
    </AuthContext.Provider>
  );
};
