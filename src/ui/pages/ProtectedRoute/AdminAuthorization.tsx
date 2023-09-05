import { Navigate, Outlet } from "react-router-dom";
import { AppRoutes } from "../../types/routing";

const AdminAuthorization = () => {
  const loggedInUser = localStorage.getItem("isAdminLocal")
    ? JSON.parse(localStorage.getItem("isAdminLocal")!)
    : null;

  const isAdmin = loggedInUser.isSuper === false;

  return isAdmin ? <Outlet /> : <Navigate to={AppRoutes.ROOT} />;
};

export default AdminAuthorization;
