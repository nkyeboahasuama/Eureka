import Container from "../../../shared_components/atoms/container/Container";
import Header from "../../../shared_components/header/Header";
import QuestionsField from "../components/QuestionsField";

const QuestionsPage = () => {
  return (
    <Container variant="primary">
      <Header page="Questions Poll" />
      <QuestionsField />
    </Container>
  );
};

export default QuestionsPage;
