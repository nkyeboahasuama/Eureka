import { Navigate } from "react-router-dom";
import { AppRoutes } from "../../types/routing";

import Loader from "../../shared_components/loader/Loader";
import useVerifyUserToken from "./hooks/useVerifyUserToken";
import SuperAdminAuthorization from "./SuperAdminAuthorization";
import AdminAuthorization from "./AdminAuthorization";

const ProtectedRoute = () => {
  const { isLoading, loggedInUser } = useVerifyUserToken();

  return isLoading ? (
    <Loader />
  ) : loggedInUser ? (
    loggedInUser.isSuper ? (
      <SuperAdminAuthorization />
    ) : (
      <AdminAuthorization />
    )
  ) : (
    <Navigate to={AppRoutes.ROOT} />
  );
};

export default ProtectedRoute;
