import { Navigate, Outlet } from "react-router-dom";
import { AppRoutes } from "../../types/routing";

const SuperAdminAuthorization = () => {
  const loggedInUser = localStorage.getItem("isAdminLocal")
    ? JSON.parse(localStorage.getItem("isAdminLocal") as string)
    : null;

  const isSuper = loggedInUser.isSuper;

  return isSuper ? <Outlet /> : <Navigate to={AppRoutes.SADMIN_QUESTIONS} />;
};

export default SuperAdminAuthorization;
