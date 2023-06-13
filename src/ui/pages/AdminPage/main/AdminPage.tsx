import Container from "../../../shared_components/atoms/container/Container";
import Header from "../../../shared_components/header/Header";
import QuestionField from "../components/QuestionField";
import AnswerField from "../components/AnswerField";
import InfoField from "../components/InfoField";

const AdminPage = () => {
  return (
    <Container justify="space-between">
      <Header page="Questions" />
      <InfoField />
      <QuestionField />
      <AnswerField />
    </Container>
  );
};

export default AdminPage;
