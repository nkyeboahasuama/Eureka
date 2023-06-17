import React from "react";
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

interface AdminModalProps {
  closeAdminModal: () => void;
  question?: IQuestionDocument | null;
  index?: number;
}

const AdminModal: React.FC<AdminModalProps> = ({
  closeAdminModal,
  question,
}) => {
  const navigate = useNavigate();

  const AdminData = localStorage.getItem("isAdminLocal")
    ? JSON.parse(localStorage.getItem("isAdminLocal")!)
    : console.log("Doesnt exist");

  const handleMarkQuestion = async () => {
    try {
      const adminId: string = AdminData.id;

      if (question) {
        console.log(question.id);
        console.log(adminId);
        if (adminId === question.markedBy) {
          console.log("I marked this question");
        } else {
          const mark = await questionService.markQuestion(adminId, question.id);
          navigate(`/questions/question/${question?.id}`);
        }
      }
    } catch (error) {
      console.error(error);
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
            <Date />
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

        {question?.marked && question.markedBy === AdminData.id ? (
          <Button
            onClick={() => navigate(`/questions/question/${question?.id}`)}
            style={{
              backgroundColor: "rgba(3, 180, 120, 0.5)",
              color: "white",
            }}
          >
            I would like to answer now!
          </Button>
        ) : !question?.marked ? (
          <Button variant="accept" onClick={handleMarkQuestion}>
            Want to answer?
          </Button>
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
