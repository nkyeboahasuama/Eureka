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
  const {
    user,
    marked,
    markedBy,
    markedAt,
    availability,
    id,
    validators,
    body,
  } = question || {};
  const navigate = useNavigate();

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
  }, [question]);

  const handleMarkQuestion = async () => {
    if (question) {
      try {
        const adminId: string = AdminData.id;

        if (adminId !== markedBy) {
          await questionService.markQuestion(adminId, id ?? "");
          navigate(`/questions/question/${id}`);
        }
      } catch (error) {
        console.error(error);
      }
    }
  };

  const isMarkedByLoggedUser = marked && markedBy === AdminData.id;

  const isNotMarkedByLoggedUser = marked && markedBy !== AdminData.id;

  const openQuestionMarkedByLoggedUser =
    isMarkedByLoggedUser && availability === "open";

  const openQuestionNotMarkedByLoggedUser =
    isNotMarkedByLoggedUser && availability === "open";

  const unMarkedValidatedQuestion = !marked && approvedValidated > 1;

  const unMarkedUnvalidatedQuestion = !marked && approvedValidated < 2;

  const closedQuestion = availability === "closed";
  return (
    <>
      {question && (
        <ModalWrapper>
          <ModalContent>
            <Container
              justify="start"
              p="0 10px"
              variant="primary"
              h="70vh"
              w="80vw"
            >
              <Container h="10%" w="95%" m=" 5px 0px" fd="row" align="start">
                <DateComponent date={markedAt} />
                <UserEmail user={user} />
              </Container>
              <BodyContainer
                justify="start"
                lh="2.0"
                style={{ overflow: "scroll" }}
              >
                {<Typography variant="h3">{body}</Typography>}
                {isMarkedByLoggedUser && (
                  <Typography variant="small">
                    Marked by you, {markedBy}!{" "}
                  </Typography>
                )}{" "}
                {isNotMarkedByLoggedUser && (
                  <Typography variant="small">
                    Marked by {markedBy}, not you!{" "}
                  </Typography>
                )}
              </BodyContainer>
            </Container>
            {openQuestionMarkedByLoggedUser && (
              <Button
                onClick={() => navigate(`/questions/question/${id}`)}
                style={{
                  backgroundColor: "rgba(3, 180, 120, 0.5)",
                  color: "white",
                }}
              >
                I would like to answer now!
              </Button>
            )}{" "}
            {unMarkedValidatedQuestion && (
              <Button variant="accept" onClick={handleMarkQuestion}>
                Want to answer?
              </Button>
            )}{" "}
            {unMarkedUnvalidatedQuestion && (
              <Button variant="disabled">Question needs validation!</Button>
            )}{" "}
            {closedQuestion && (
              <Button variant="disabled">Question is closed!</Button>
            )}{" "}
            {openQuestionNotMarkedByLoggedUser && (
              <Button variant="disabled">Someone in here!</Button>
            )}
            <Button
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
