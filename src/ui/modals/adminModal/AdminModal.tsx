import React from "react";
import Container from "../../shared_components/atoms/container/Container";
import Date from "../../shared_components/date/Date";
import UserEmail from "../../shared_components/user/UserEmail";
import Button from "../../shared_components/atoms/button/Button";
import { ModalContent, ModalWrapper } from "../modalStyles/ModalStyles";
import Typography from "../../shared_components/atoms/typography/Typography";
import { useNavigate } from "react-router-dom";
import { IQuestionDocument } from "../../../core";

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
          <Container justify="start" h="400px" lh="1.5">
            {<Typography variant="h3">{question?.body}</Typography>}
          </Container>
        </Container>

        {question?.marked ? (
          <Button variant="disabled">I would like to answer</Button>
        ) : (
          <Button
            onClick={() => navigate(`/questions/question/${question?.id}`)}
            variant="accept"
          >
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
