import { useContext } from "react";
import { AuthContext } from "./AuthContext";
import { Navigate } from "react-router-dom";

export default function AdminRoute({ children }) {
  const { user, checkingSession } = useContext(AuthContext);

  if (checkingSession) return null; 

  if (!user || user.role !== "admin") {
    return <Navigate to="/" />; 
  }

  return children;
}
