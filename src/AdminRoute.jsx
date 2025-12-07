const AdminRoute = ({ children }) => {
  const { user } = useContext(AuthContext);

  if (!user) return <Navigate to="/login" />;

  return user.role === "admin" 
    ? children 
    : <Navigate to="/403" />;
};
export default AdminRoute;
