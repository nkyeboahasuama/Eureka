import Typography from "../../../shared_components/atoms/typography/Typography";
import { useParams } from "react-router-dom";
import { questions } from "../../QuestionsPage/questionsList";
import { BodyContainer } from "../../../shared_components/atoms/container/ContainerStyles";
import { adminQuestions } from "../../SuperAdminPage/components/SAQAdminQs";

const QuestionField = () => {
  const params = useParams();
  const questionId = params.id;

  const question = questions.find(
    (q) => q.id === parseInt(questionId ?? "", 10)
  );
  return (
    <BodyContainer
      style={{ height: "25%", overflow: "scroll" }}
      w="90%"
      text="left"
      align="start"
      justify="start"
    >
      <Typography variant="h3" weight={600}>
        {question
          ? question.question
          : adminQuestions.id === parseInt(questionId ?? "", 10) &&
            adminQuestions.question}
      </Typography>
    </BodyContainer>
  );
};

export default QuestionField;
