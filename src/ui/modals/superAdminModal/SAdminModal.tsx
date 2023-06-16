import React, { useEffect, useState } from "react";
import Container from "../../shared_components/atoms/container/Container";
import Date from "../../shared_components/date/Date";
import UserEmail from "../../shared_components/user/UserEmail";
import Button from "../../shared_components/atoms/button/Button";

import Typography from "../../shared_components/atoms/typography/Typography";
import { ModalContent, ModalWrapper } from "../modalStyles/ModalStyles";
import { IQuestionDocument, ValidationStatusType } from "../../../core";
import { adminService, questionService } from "../../../services";
import { IAdminDocument } from "../../../core";
import { BodyContainer } from "../../shared_components/atoms/container/ContainerStyles";

interface SAdminModalProps {
  closeSAdminModal: () => void;
  question?: IQuestionDocument | null;
  getQuestionsList: () => void;
}

const SAdminModal: React.FC<SAdminModalProps> = ({
  closeSAdminModal,
  question,
  getQuestionsList,
}) => {
  const [adminId, setAdminId] = useState<IAdminDocument | null>(null);

  const handleValidation = async (status: ValidationStatusType) => {
    try {
      closeSAdminModal();
      if (status === "approve" && question?.id && adminId?.id) {
        await questionService.validateQuestion(adminId.id, question.id, status);
        getQuestionsList();
      } else if (status === "reject" && question?.id && adminId?.id) {
        await questionService.validateQuestion(adminId.id, question.id, status);
        getQuestionsList();
      }
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    const getAdminId = async () => {
      try {
        const user = localStorage.getItem("isSuperLocal")
          ? JSON.parse(localStorage.getItem("isSuperLocal")!)
          : null;
        console.log(user);
        if (user.isSuper) {
          const data = await adminService.initAdmin(user.email);
          console.log(data.id);
          setAdminId(data);
        }
      } catch (error) {
        console.error(error);
      }
    };

    getAdminId();
  }, []);

  return (
    <ModalWrapper>
      <ModalContent>
        <Container
          justify="start"
          p="0 10px"
          variant="primary"
          h="60vh"
          w="80vw"
        >
          <Container w="95%" m="5px 0" h="10%" fd="row" align="start">
            <Date />
            <UserEmail user={question?.user} />
          </Container>
          <BodyContainer
            justify="start"
            lh="2.0"
            style={{ overflow: "scroll" }}
          >
            <Typography variant="h3">{question?.body}</Typography>
          </BodyContainer>
        </Container>
        <Container h="fit">
          <Button variant="accept" onClick={() => handleValidation("approve")}>
            Accept
          </Button>
          <Button variant="reject" onClick={() => handleValidation("reject")}>
            Reject
          </Button>
        </Container>
        <Button
          style={{ marginTop: 40 }}
          onClick={closeSAdminModal}
          variant="secondary"
        >
          Close
        </Button>
      </ModalContent>
    </ModalWrapper>
  );
};

export default SAdminModal;
