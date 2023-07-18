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
import { toast } from "react-toastify";

interface SAdminModalProps {
  closeSAdminModal: () => void;
  question: IQuestionDocument | null;
  questions: IQuestionDocument[];
  getQuestionsList: () => void;
  newState?: (data: IQuestionDocument) => void;
}

const SAdminModal: React.FC<SAdminModalProps> = ({
  closeSAdminModal,
  question,
  newState,
}) => {
  const user: IAdminDocument = JSON.parse(
    localStorage.getItem("isAdminLocal")!
  );

  const handleValidation = async (status: ValidationStatusType) => {
    try {
      const admin: string = user.id;

      if (status === "approve" && question?.id && user.id) {
        await questionService.validateQuestion(user.id, question.id, status);
        toast("Question accepted successfully");

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
        toast("Question rejected successfully");

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
    }
  };

  const maximumValidators = question?.validators.length === 3;
  const closedQuestion = question?.availability === "closed";

  const adminValidatedQuestion =
    question?.validators.length &&
    question?.validators.find((validator) => validator.admin === user.id);

  const hideValidationButtons =
    maximumValidators || closedQuestion || adminValidatedQuestion;

  return (
    <ModalWrapper>
      <ModalContent>
        <Container
          justify="start"
          m="0 0 20px 0"
          variant="primary"
          h={hideValidationButtons ? "65vh" : "55vh"}
          w="100%"
        >
          <Container w="90%" m="5px 0" h="10%" fd="row" align="start">
            <DateComponent date={question?.markedAt} />
            <UserEmail user={question?.user} />
          </Container>
          <BodyContainer
            w="90%"
            justify="start"
            lh="2.0"
            style={{ overflow: "auto" }}
          >
            <Typography variant="h3">{question?.body}</Typography>
          </BodyContainer>
        </Container>
        {!hideValidationButtons && (
          <Container h="fit" m="0 0 20px 0">
            <Button
              variant="accept"
              onClick={() => handleValidation("approve")}
            >
              Accept
            </Button>
            <Button variant="reject" onClick={() => handleValidation("reject")}>
              Reject
            </Button>
          </Container>
        )}
        <Button
          style={{ marginTop: 10 }}
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
