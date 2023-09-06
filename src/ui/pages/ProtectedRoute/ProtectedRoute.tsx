import { Navigate, Outlet } from "react-router-dom";
import { AppRoutes } from "../../types/routing";

const ProtectedRoute = () => {
  const loggedInUser = localStorage.getItem("isAdminLocal")
    ? JSON.parse(localStorage.getItem("isAdminLocal") as string)
    : null;
  return loggedInUser ? <Outlet /> : <Navigate to={AppRoutes.ROOT} />;
};

export default ProtectedRoute;
