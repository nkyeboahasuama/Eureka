import Container from "../../../shared_components/atoms/container/Container";
import QuestionContainer from "./QuestionContainer";

const QuestionsField = () => {
  return (
    <Container h="85%" variant="primary" justify="start">
      <QuestionContainer />
    </Container>
  );
};

export default QuestionsField;
