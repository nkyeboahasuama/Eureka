import { useEffect, useState, useCallback } from "react";
import { IAdminDocument } from "../../../../core";
import { jwtDecode } from "jwt-decode";
import { adminService } from "../../../../services";

const useVerifyUserToken = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loggedInUser, setLoggedInUser] = useState<IAdminDocument | null>(null);

  const searchParams = new URLSearchParams(window.location.search);
  const token = searchParams.get("token");

  const handleTokenVerification = useCallback(async (token: string | null) => {
    try {
      if (token) {
        const decodedToken = jwtDecode<IAdminDocument>(token);
        const data = await adminService.initAdmin(decodedToken.email);
        if (data) {
          localStorage.setItem("isAdminLocal", JSON.stringify(decodedToken));
          setLoggedInUser(decodedToken);
        } else {
          throw new Error("Admin data retrieval failed");
        }
      } else {
        const isAdminLocal = localStorage.getItem("isAdminLocal");
        const loggedInUser = isAdminLocal ? JSON.parse(isAdminLocal) : null;

        if (loggedInUser) {
          setLoggedInUser(loggedInUser);
        } else {
          throw new Error("User not logged in");
        }
      }
    } catch (error: any) {
      console.error("Error:", error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    handleTokenVerification(token);
  }, [token, handleTokenVerification]);

  return { isLoading, loggedInUser };
};

export default useVerifyUserToken;
