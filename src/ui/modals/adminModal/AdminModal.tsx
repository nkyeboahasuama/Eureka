import React, { useEffect } from "react";
import Container from "../../shared_components/atoms/container/Container";
import Date from "../../shared_components/date/Date";
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
  const navigate = useNavigate();

  const AdminData = localStorage.getItem("isAdminLocal")
    ? JSON.parse(localStorage.getItem("isAdminLocal")!)
    : null;

  useEffect(() => {
    const validations = question?.validators.filter(
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

        if (adminId !== question.markedBy) {
          await questionService.markQuestion(adminId, question.id);
          navigate(`/questions/question/${question?.id}`);
        }
      } catch (error) {
        console.error(error);
      }
    }
  };
  return (
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
            <DateComponent date={question?.markedAt} />
            <UserEmail user={question?.user} />
          </Container>
          <BodyContainer
            justify="start"
            lh="2.0"
            style={{ overflow: "scroll" }}
          >
            {<Typography variant="h3">{question?.body}</Typography>}
            {question?.marked && question.markedBy === AdminData.id ? (
              <Typography variant="small">
                Marked by you, {question.markedBy}!{" "}
              </Typography>
            ) : (
              question?.marked && (
                <Typography variant="small">
                  Marked by {question?.markedBy}, not you!{" "}
                </Typography>
              )
            )}
          </BodyContainer>
        </Container>
        {question?.marked &&
        question.markedBy === AdminData.id &&
        question.availability === "open" ? (
          <Button
            onClick={() => navigate(`/questions/question/${question?.id}`)}
            style={{
              backgroundColor: "rgba(3, 180, 120, 0.5)",
              color: "white",
            }}
          >
            I would like to answer now!
          </Button>
        ) : !question?.marked && approvedValidated > 1 ? (
          <Button variant="accept" onClick={handleMarkQuestion}>
            Want to answer?
          </Button>
        ) : !question?.marked && approvedValidated < 3 ? (
          <Button variant="disabled">Question needs validation!</Button>
        ) : question?.availability === "closed" ? (
          <Button variant="disabled">Question is closed!</Button>
        ) : (
          <Button variant="disabled">Someone in here!</Button>
        )}

        <Button w="100%" onClick={() => closeAdminModal()} variant="secondary">
          Close
        </Button>
      </ModalContent>
    </ModalWrapper>
  );
};

export default AdminModal;
