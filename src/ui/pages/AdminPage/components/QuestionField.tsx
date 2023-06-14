import Typography from "../../../shared_components/atoms/typography/Typography";
import { useParams } from "react-router-dom";
import { questions } from "../../QuestionsPage/questionsList";
import { BodyContainer } from "../../../shared_components/atoms/container/ContainerStyles";
import { adminQuestions } from "../../SuperAdminPage/components/SAQAdminQs";
import InfoField from "../../../shared_components/infoBackBtn/InfoBackBtnField";
import Container from "../../../shared_components/atoms/container/Container";

const QuestionField = () => {
  const params = useParams();
  const questionId = params.id;

  const question = questions.find(
    (q) => q.id === parseInt(questionId ?? "", 10)
  );
  return (
    <BodyContainer
      style={{ height: "40%", overflow: "scroll" }}
      w="90%"
      text="left"
      align="start"
      justify="space-between"
    >
      <InfoField />
      <Container h="150px" fd="row" justify="space-between" align="start">
        <Typography variant="h3" weight={600} textAlign="left">
          {question
            ? question.question
            : adminQuestions.id === parseInt(questionId ?? "", 10) &&
              adminQuestions.question}
        </Typography>
      </Container>
    </BodyContainer>
  );
};

export default QuestionField;
