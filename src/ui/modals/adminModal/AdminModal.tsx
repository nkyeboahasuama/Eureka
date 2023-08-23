import React, { useEffect } from "react";
import Container from "../../shared_components/atoms/container/Container";
import UserEmail from "../../shared_components/user/UserEmail";
import Button from "../../shared_components/atoms/button/Button";
import { ModalContent, ModalWrapper } from "../modalStyles/ModalStyles";
import Typography from "../../shared_components/atoms/typography/Typography";
import { useNavigate } from "react-router-dom";
import { IQuestionDocument } from "../../../core";
import { BodyContainer } from "../../shared_components/atoms/container/ContainerStyles";
import { questionService } from "../../../services";
import { useState } from "react";
import DateComponent from "../../shared_components/date/Date";
import { AppRoutes } from "../../types/routing";
import { useToast } from "../../hooks/useToast";

interface AdminModalProps {
  closeAdminModal: () => void;
  question?: IQuestionDocument | null;
  index?: number;
}

const AdminModal: React.FC<AdminModalProps> = ({
  closeAdminModal,
  question,
}) => {
  const [approvedValidated, setApprovedValidated] = useState(0);
  const { user, marked, markedBy, availability, id, validators, body } =
    question || {};
  const navigate = useNavigate();
  const { show: showToast, update: updateToast } = useToast();

  const AdminData = localStorage.getItem("isAdminLocal")
    ? JSON.parse(localStorage.getItem("isAdminLocal")!)
    : null;

  useEffect(() => {
    const validations = validators?.filter(
      (a) => a.status === "approve"
    ).length;
    if (validations) {
      setApprovedValidated(validations);
    }
  }, [question, validators]);

  const handleMarkQuestion = async () => {
    if (question) {
      try {
        const adminId: string = AdminData.id;

        if (adminId !== markedBy) {
          showToast("Proceeding to answer...", { isLoading: true });
          await questionService.markQuestion(adminId, id ?? "");
          updateToast("Done", { isLoading: false, autoClose: 1000 });
          navigate(`${AppRoutes.ADMIN_QUESTIONS}/${id}`);
        }
      } catch (error) {
        console.error(error);
      }
    }
  };

  const isMarkedByLoggedUser = marked && markedBy === AdminData.id;

  const isNotMarkedByLoggedUser = marked && markedBy !== AdminData.id;

  const openQuestionMarkedByLoggedUser =
    availability === "open" && isMarkedByLoggedUser;

  const openQuestionNotMarkedByLoggedUser =
    availability === "open" && isNotMarkedByLoggedUser;

  const unMarkedValidatedQuestion = !marked && approvedValidated > 1;

  return (
    <>
      {question && (
        <ModalWrapper>
          <ModalContent>
            <Container
              justify="start"
              m="0 0 20px 0"
              variant="primary"
              h="65vh"
              w="100%"
            >
              <Container h="10%" w="90%" m=" 5px 0px" fd="row" align="start">
                <DateComponent date={question.createdAt} />
                <UserEmail user={user} />
              </Container>
              <BodyContainer
                w="90%"
                justify="start"
                lh="2.0"
                style={{ overflow: "auto" }}
              >
                {<Typography variant="h3">{body}</Typography>}
              </BodyContainer>
            </Container>
            {openQuestionMarkedByLoggedUser && (
              <Button
                onClick={() => navigate(`${AppRoutes.ADMIN_QUESTIONS}/${id}`)}
                variant="accept"
              >
                Proced to answer
              </Button>
            )}{" "}
            {unMarkedValidatedQuestion && (
              <Button variant="accept" onClick={handleMarkQuestion}>
                Proceed to answer
              </Button>
            )}{" "}
            {openQuestionNotMarkedByLoggedUser && (
              <Button variant="warning">
                Question has been marked to be answered by another user !
              </Button>
            )}
            <Button
              style={{ marginTop: 10 }}
              w="100%"
              onClick={() => closeAdminModal()}
              variant="secondary"
            >
              Close
            </Button>
          </ModalContent>
        </ModalWrapper>
      )}
    </>
  );
};

export default AdminModal;
