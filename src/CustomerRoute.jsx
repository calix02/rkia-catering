import { useContext } from "react";
import { AuthContext } from "./AuthContext";
import { Navigate } from "react-router-dom";

export default function CustomerRoute({ children }) {
  const { user, checkingSession } = useContext(AuthContext);

  if (checkingSession) return <div>Loading...</div>;

  if (!user || user.role !== "customer") return <Navigate to="/403" />;

  return children;
}
