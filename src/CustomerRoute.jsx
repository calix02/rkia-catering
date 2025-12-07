const CustomerRoute = ({ children }) => {
  const { user } = useContext(AuthContext);

  if (!user) return <Navigate to="/login" />;

  return user.role === "customer" 
    ? children 
    : <Navigate to="/403" />;
};
export default CustomerRoute;
