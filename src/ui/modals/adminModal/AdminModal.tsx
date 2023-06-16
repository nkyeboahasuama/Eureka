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
    : null;

  const SuperAdminData = localStorage.getItem("isSuperLocal")
    ? JSON.parse(localStorage.getItem("isSuperLocal")!)
    : null;
  // WYc4fcTqIhtfjTfrjHzi
  const handleMarkQuestion = async () => {
    try {
      const adminId: string = AdminData.id;
      console.log(adminId);
      if (question) {
        console.log(question.id);
        const mark = await questionService.markQuestion(adminId, question.id);
        console.log(mark);
        navigate(`/questions/question/${question?.id}`);
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
          </BodyContainer>
        </Container>

        {question?.marked ? (
          <Button variant="disabled">I would like to answer</Button>
        ) : (
          <Button onClick={handleMarkQuestion} variant="accept">
            I would like to answer
          </Button>
        )}

        <Button w="100%" onClick={() => closeAdminModal()} variant="secondary">
          Close
        </Button>
      </ModalContent>
    </ModalWrapper>
  );
};

export default AdminModal;
