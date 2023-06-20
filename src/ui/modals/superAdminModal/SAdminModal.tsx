import React from "react";
import Container from "../../shared_components/atoms/container/Container";
import UserEmail from "../../shared_components/user/UserEmail";
import Button from "../../shared_components/atoms/button/Button";

import Typography from "../../shared_components/atoms/typography/Typography";
import { ModalContent, ModalWrapper } from "../modalStyles/ModalStyles";
import { IQuestionDocument, ValidationStatusType } from "../../../core";
import { questionService } from "../../../services";
import { IAdminDocument } from "../../../core";
import { BodyContainer } from "../../shared_components/atoms/container/ContainerStyles";
import DateComponent from "../../shared_components/date/Date";

interface SAdminModalProps {
  closeSAdminModal: () => void;
  question?: IQuestionDocument | null;
  questions: IQuestionDocument[];
  getQuestionsList: () => void;
  newState?: (data: IQuestionDocument) => void;
}

const SAdminModal: React.FC<SAdminModalProps> = ({
  closeSAdminModal,
  question,
  newState,
}) => {
  const handleValidation = async (status: ValidationStatusType) => {
    try {
      const user: IAdminDocument = JSON.parse(
        localStorage.getItem("isAdminLocal")!
      );
      const admin: string = user.id;

      if (status === "approve" && question?.id && user.id) {
        await questionService.validateQuestion(user.id, question.id, status);
        const existingValidators = question.validators || [];
        const updateValidators = [
          ...existingValidators,
          {
            admin: admin,
            status: status,
          },
        ];
        const updateQuestion = {
          ...question,
          validators: updateValidators,
        };
        if (newState) newState(updateQuestion);
        closeSAdminModal();
      } else if (status === "reject" && question?.id && user.id) {
        await questionService.validateQuestion(user.id, question.id, status);
        const existingValidators = question.validators || [];
        const updateValidators = [
          ...existingValidators,
          {
            admin: admin,
            status: status,
          },
        ];
        const updateQuestion = {
          ...question,
          validators: updateValidators,
        };
        if (newState) newState(updateQuestion);
        closeSAdminModal();
      }
      closeSAdminModal();
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

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
            <DateComponent date={question?.markedAt} />
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
