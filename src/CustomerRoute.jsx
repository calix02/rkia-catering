import { useContext } from "react";
import { AuthContext } from "./AuthContext";
import { Navigate } from "react-router-dom";
const CustomerRoute = ({ children }) => {
  const { user } = useContext(AuthContext);

  if (!user) return <Navigate to="/" />;

  return user.role === "user" 
    ? children 
    : <Navigate to="/403" />;
};
export default CustomerRoute;
