import { Navigate, Outlet } from "react-router-dom";
import { AppRoutes } from "../../types/routing";
import { useEffect, useState } from "react";
import { adminService } from "../../../services";
import { IAdmin } from "../../../core";
import { jwtDecode } from "jwt-decode";

const ProtectedRoute = () => {
  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const token = searchParams.get("jwt");

    try {
      if (token) {
        const decodedToken = jwtDecode<IAdmin>(token);
        verifyDecodedToken(decodedToken);
      } else {
        console.log("none");
        <Navigate to={AppRoutes.ROOT} />;
      }
    } catch (error) {
      console.error("JWT decoding error:", error);
    }
  }, []);

  async function verifyDecodedToken(decodedToken: IAdmin) {
    try {
      const data = await adminService.initAdmin(decodedToken.email);

      if (data) {
        localStorage.setItem("isAdminLocal", JSON.stringify(data));
      } else {
        console.error("Admin data retrieval failed.");
      }
    } catch (error) {
      console.error("Admin data retrieval error:", error);
    }
  }

  const isAdminLocal = localStorage.getItem("isAdminLocal");
  const loggedInUser = isAdminLocal ? JSON.parse(isAdminLocal) : null;

  return loggedInUser ? <Outlet /> : <Navigate to={AppRoutes.ROOT} />;
};

export default ProtectedRoute;
