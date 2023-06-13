import Container from "../../../shared_components/atoms/container/Container";
import Typography from "../../../shared_components/atoms/typography/Typography";
import { useParams } from "react-router-dom";
import { questions } from "../../QuestionsPage/questionsList";

const QuestionField = () => {
  const params = useParams();
  const questionId = params.id;

  const question = questions.find(
    (q) => q.id === parseInt(questionId ?? "", 10)
  );
  return (
    <Container  w="90%" h="30%" text="left" align="start" justify="start">
      <Typography variant="h3" weight={600}>
        {question?.question}
      </Typography>
    </Container>
  );
};

export default QuestionField;
