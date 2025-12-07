import axios from "axios";
import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async (username, password) => {
    try {
      const res = await axios.post(
        "http://localhost/backend/api/login.php",
        { username, password },
        { withCredentials: true }
      );

      if (res.data.user) {
        setUser(res.data.user);
        return true;
      }
    } catch (err) {
      console.error(err);
    }

    return false;
  };

  return (
    <AuthContext.Provider value={{ user, login }}>
      {children}
    </AuthContext.Provider>
  );
};
