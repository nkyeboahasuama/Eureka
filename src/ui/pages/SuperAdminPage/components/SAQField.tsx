import { useState } from "react";
import Typography from "../../../shared_components/atoms/typography/Typography";
import Chips from "../../../shared_components/atoms/chips/Chips";
import Button from "../../../shared_components/atoms/button/Button";
import SAdminModal from "../../../modals/superAdminModal/SAdminModal";
import AdminModal from "../../../modals/adminModal/AdminModal";
import SAQUserDetails from "./SAQUserDetails";
import { BodyContainer } from "../../../shared_components/atoms/container/ContainerStyles";
import { adminQuestions } from "./SAQAdminQs";

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
    <BodyContainer h="fit" w="90%" text="left" m="0px 0">
      <SAQUserDetails />
      <Typography
        style={{ cursor: "pointer", margin: "5px 0 10px 0" }}
        variant="h3"
        onClick={openAdminModal}
      >
        {adminQuestions.question}
      </Typography>

      <BodyContainer justify="space-between" fd="row">
        <Button
          variant="secondary"
          w="40%"
          style={{ borderRadius: 20, margin: 0 }}
          onClick={openSAdminModal}
        >
          Review
        </Button>
        <Chips variant={adminQuestions.status} />
      </BodyContainer>
      {modal && <SAdminModal closeSAdminModal={closeSAdminModal} />}
      {adminModal && (
        <AdminModal
          question={adminQuestions}
          closeAdminModal={closeAdminModal}
        />
      )}
    </BodyContainer>
  );
};

export default SAdminQuestionField;
