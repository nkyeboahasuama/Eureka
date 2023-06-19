import Container from "../../../shared_components/atoms/container/Container";
import Header from "../../../shared_components/header/Header";
import Navigations from "../../../shared_components/navLinks/Navigations";
import QuestionsField from "../components/QuestionsField";

const QuestionsPage = () => {
  return (
    <Container h="auto" justify="space-between" variant="primary">
      <Header page={<Navigations />} />
      <QuestionsField />
    </Container>
  );
};

export default QuestionsPage;
