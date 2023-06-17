import { useNavigate, useParams } from "react-router-dom";
import { adminService } from "../../../services";
import { useEffect } from "react";
import { isValidAdmin } from "../../../core/admin";

import Container from "../../shared_components/atoms/container/Container";
import Header from "../../shared_components/header/Header";

import Loader from "../../shared_components/loader/Loader";

const InitialPage = () => {
  const { email } = useParams();
  const redirect = useNavigate();

  useEffect(() => {
    const initAdmin = async () => {
      try {
        if (email) {
          const data = await adminService.initAdmin(email);
          console.log(data);

          if (data.isSuper) {
            console.log("valid Super");
            redirect(`/superadmin/validatequestions`);
            localStorage.setItem("isAdminLocal", JSON.stringify(data));
          } else if (isValidAdmin(email)) {
            localStorage.setItem("isAdminLocal", JSON.stringify(data));
            console.log("valid admin");
            redirect(`/admin/validquestions`);
          }
        }
      } catch (error) {
        console.log("invalid admin or super");
        alert("You are not authorized to access this page");
        redirect("/askquestion/form/");
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
