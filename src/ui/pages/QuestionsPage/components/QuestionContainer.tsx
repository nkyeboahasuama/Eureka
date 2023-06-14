import { useState } from "react";
import Container from "../../../shared_components/atoms/container/Container";
import Typography from "../../../shared_components/atoms/typography/Typography";
import Chips from "../../../shared_components/atoms/chips/Chips";
import UserEmail from "../../../shared_components/user/UserEmail";
import Date from "../../../shared_components/date/Date";
import AdminModal from "../../../modals/adminModal/AdminModal";
import { questions } from "../questionsList";

export interface Question {
  id: number;
  question: string;
}
const QuestionContainer = () => {
  const [modal, setModal] = useState(false);
  const [selectedQuestion, setSelectedQuestion] = useState<Question | null>(
    null
  );

  const openAdminModal = (question: Question) => {
    setModal(true);
    setSelectedQuestion(question);
  };

  const closeAdminModal = () => {
    setModal(false);
    setSelectedQuestion(null);
  };
  return (
    <>
      {questions.map((question, index: number) => (
        <Container
          key={index}
          h="20%"
          w="90%"
          text="left"
          m="10px 0"
          align="left"
        >
          <Date />
          <Typography
            style={{
              cursor: "pointer",
            }}
            onClick={() => openAdminModal(question)}
            variant="h3"
            weight={500}
          >
            {question.question}
          </Typography>

          <Container m="10px 0 0 0" fd="row" justify="space-between" w="100%">
            <UserEmail />
            <Chips variant="open" />
          </Container>
          {modal && (
            <AdminModal
              question={selectedQuestion}
              closeAdminModal={closeAdminModal}
            />
          )}
        </Container>
      ))}
    </>
  );
};

export default QuestionContainer;
