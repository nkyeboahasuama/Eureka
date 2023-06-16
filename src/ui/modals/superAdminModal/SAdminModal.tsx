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
// import ErrorBoundary from "../../errorhandler/ErrorBoundary";

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
  const handleValidation = async (status: ValidationStatusType) => {
    try {
      const user: IAdminDocument = JSON.parse(
        localStorage.getItem("isAdminLocal")!
      );
      closeSAdminModal();
      if (status === "approve" && question?.id && user.id) {
        await questionService.validateQuestion(user.id, question.id, status);
        getQuestionsList();
      } else if (status === "reject" && question?.id && user.id) {
        await questionService.validateQuestion(user.id, question.id, status);
        getQuestionsList();
      }
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  return (
    // <ErrorBoundary>
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
    // </ErrorBoundary>
  );
};

export default SAdminModal;
