import Container from "../../shared_components/atoms/container/Container";
import { BodyContainer } from "../../shared_components/atoms/container/ContainerStyles";
import HeaderField from "./HeaderField";
import BodyField from "./BodyField";
import { useEffect } from "react";
import { adminService } from "../../../services";
import { toast } from "react-toastify";
import { IAdminDocument } from "../../../core";

const IntroductionPage = () => {
  const getUser = () => {
    const user: IAdminDocument = localStorage.getItem("isAdminLocal")
      ? JSON.parse(localStorage.getItem("isAdminLocal")!)
      : null;
    return user;
  };

  const updateFirstTimeLogin = async (userId: any) => {
    try {
      await adminService.updateAdminUserFirstTimeLoginAfterLogin(userId);
    } catch (error: any) {
      toast.error(error);
    }
  };
  useEffect(() => {
    const user = getUser();
    if (user) {
      updateFirstTimeLogin(user.id);
    }
  }, []);

  return (
    <Container justify="space-between">
      <BodyContainer style={{ height: "35%", color: "white" }} bg="black">
        <HeaderField />{" "}
      </BodyContainer>

      <BodyContainer style={{ height: "65%", gap: 5 }}>
        <BodyField />{" "}
      </BodyContainer>
    </Container>
  );
};

export default IntroductionPage;
