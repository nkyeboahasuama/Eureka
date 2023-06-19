import { questionService } from "../../services";

export const getQuestionById = async (questionId: string) => {
  const data = await questionService.getQuestions();

  const questionObj = data.filter((q) => q.id === questionId);
  const body = questionObj[0];
  console.log(body);
  return body;
};
