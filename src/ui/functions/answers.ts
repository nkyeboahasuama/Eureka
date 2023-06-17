import { answerService } from "../../services/answer.service";

export const getAnswerById = async (answerId: string) => {
  const data = await answerService.getAnswers();

  const answerObj = data.filter((q) => q.id === answerId);
  const body = answerObj[0];
  return body;
};
