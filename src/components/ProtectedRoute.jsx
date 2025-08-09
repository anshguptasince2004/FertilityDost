import { Navigate } from "react-router-dom";
import jwtDecode from "jwt-decode";

const PrivateAdminRoute = ({ children }) => {
  const token = localStorage.getItem("adminToken");

  if (!token) return <Navigate to="/admin" replace />;

  try {
    const decoded = jwtDecode(token);
    if (decoded.role !== "admin") {
      return <Navigate to="/admin" replace />;
    }
  } catch (err) {
    return <Navigate to="/admin" replace />;
  }

  return children;
};

export default PrivateAdminRoute;