
import { Navigate } from "react-router-dom";
import { useAuth } from "./Context/AuthContext";

const PrivateAdminRoute = ({ children }) => {
  const { user } = useAuth();

  if (!user || user.role !== "admin") {
    return <Navigate to="/admin" />;
  }

  return children;
};

export default PrivateAdminRoute;
