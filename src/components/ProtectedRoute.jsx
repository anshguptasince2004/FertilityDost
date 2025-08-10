import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateAdminRoute = () => {
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));

  if (!token || !user || user.role !== "admin") {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default PrivateAdminRoute;
