import { useState } from "react";
import Container from "../../../shared_components/atoms/container/Container";
import Typography from "../../../shared_components/atoms/typography/Typography";
import Chips from "../../../shared_components/atoms/chips/Chips";
import Button from "../../../shared_components/atoms/button/Button";
import Date from "../../../shared_components/date/Date";
import UserEmail from "../../../shared_components/user/UserEmail";
import SAdminModal from "../../../modals/superAdminModal/SAdminModal";
import AdminModal from "../../../modals/adminModal/AdminModal";

const SAdminQuestionField = () => {
  const [modal, setModal] = useState(false);
  const [adminModal, setAdminModal] = useState(false);

  const openSAdminModal = () => {
    setModal(true);
  };

  const closeSAdminModal = () => {
    setModal(false);
  };

  const openAdminModal = () => {
    setAdminModal(true);
  };
  const closeAdminModal = () => {
    setAdminModal(false);
  };

  return (
    <Container h="20%" w="90%" text="left" m="10px 0">
      <Container justify="space-between" w="100%" fd="row">
        <Date />
        <UserEmail />
      </Container>

      <Typography
        style={{ cursor: "pointer" }}
        variant="h3"
        onClick={openAdminModal}
      >
        How can you How can you How can How can you How can?
      </Typography>

      <Container justify="space-between" fd="row">
        <Button
          variant="secondary"
          w="40%"
          style={{ borderRadius: 20, margin: 0 }}
          onClick={openSAdminModal}
        >
          Review
        </Button>
        <Chips variant="open" />
      </Container>
      {modal && <SAdminModal closeSAdminModal={closeSAdminModal} />}
      {/* {adminModal && <AdminModal closeAdminModal={closeAdminModal} />} */}
    </Container>
  );
};

export default SAdminQuestionField;
