import Container from "../../../shared_components/atoms/container/Container";
import Header from "../../../shared_components/header/Header";
import QuestionField from "../components/QuestionField";
import AnswerField from "../components/AnswerField";

const AdminPage = () => {
  return (
    <Container justify="space-between">
      <Header page="Questions" />
      <QuestionField />
      <AnswerField />
    </Container>
  );
};

export default AdminPage;
