import { IAnswer } from "../core";
import { AdminRepo, AnswerRepo, QuestionRepo } from "../infras/cloud";

const submitDraftAnswer = async (
  adminId: string,
  questionId: string,
  body: string
) => {
  const payload: IAnswer = {
    body,
    question: questionId,
    admin: adminId,
    availability: "open",
    editedBy: null,
    isEdited: false,
    submittedBy: null,
  };

  await AnswerRepo.addDoc(payload);
};

const editAndSubmitDraft = async (
  adminId: string,
  questionId: string,
  body: string
) => {
  const [admin, qtn] = await Promise.all([
    AdminRepo.getDoc(adminId),
    QuestionRepo.getDoc(questionId),
  ]);

  if (!admin || !qtn) throw new Error("Invalid");
};

export const answerService = {
  submitDraftAnswer,
} as const;
