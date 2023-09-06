import { useNavigate, useParams } from "react-router-dom";
import { adminService } from "../../../services";
import { useEffect } from "react";
import Container from "../../shared_components/atoms/container/Container";
import Header from "../../shared_components/header/Header";
import Loader from "../../shared_components/loader/Loader";
import { AppRoutes } from "../../types/routing";
import { toast } from "react-toastify";

const InitialPage = () => {
  const { email } = useParams();
  const redirect = useNavigate();

  useEffect(() => {
    const initAdmin = async () => {
      try {
        if (email) {
          const data = await adminService.initAdmin(email);

          if (data) {
            localStorage.setItem("isAdminLocal", JSON.stringify(data));
            if (data.isSuper) {
              redirect(AppRoutes.SADMIN_QUESTIONS);
            } else {
              redirect(AppRoutes.ADMIN_QUESTIONS);
            }
          }
        }
      } catch (error) {
        toast("You are not authorized to access this page");
        redirect(AppRoutes.ROOT);
      }
    };
    initAdmin();
  }, [email, redirect]);

  return (
    <Container justify="start">
      <Header />

      <Loader />
    </Container>
  );
};

export default InitialPage;
