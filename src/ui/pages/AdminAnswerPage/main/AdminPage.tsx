import Container from "../../../shared_components/atoms/container/Container";
import Header from "../../../shared_components/header/Header";
import QuestionField from "../components/QuestionField";
import AnswerField from "../components/AnswerField";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { questionService } from "../../../../services";
import { IQuestionDocument } from "../../../../core";
import { answerService } from "../../../../services/answer.service";

const AdminPage = () => {
  const params = useParams();
  const questionId = params.id;
  const [questions, setQuestions] = useState<IQuestionDocument[] | null>(null);

  const question = questions?.find((q) => q.id === questionId);

  useEffect(() => {
    const getValidatedQuestionsList = async () => {
      const data = await questionService.getValidatedQuestions();
      setQuestions(data);
    };

    const getAllQuestions = async () => {
      const allQuestions = await questionService.getQuestions();
      setQuestions(allQuestions);
      console.log(allQuestions);
    };
    getValidatedQuestionsList();
    if (!question) {
      getAllQuestions();
    }
  }, []);

  return (
    <Container justify="space-between">
      <Header page="Questions" />
      <QuestionField question={question} />
      <AnswerField />
    </Container>
  );
};

export default AdminPage;
