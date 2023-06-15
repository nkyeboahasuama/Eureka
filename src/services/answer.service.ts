import { runTransaction } from "firebase/firestore";
import { IAnswer } from "../core";
import { AdminRepo, AnswerRepo } from "../infras/cloud";

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
  answerId: string,
  body: string
) => {
  const [admin, answer] = await Promise.all([
    AdminRepo.getDoc(adminId),
    AnswerRepo.getDoc(answerId),
  ]);

  if (!admin || !answer) throw new Error("Invalid");
  let payload: any = {};
  if (isEditted(answer.body, body)) {
    payload.body = body;
    payload.editedBy = adminId;
    payload.submittedBy = adminId;
  } else {
    // close answer
    payload.submittedBy = answer.admin;
  }
  payload.availability = "closed";
  // await AnswerRepo.editDocById(answerId, payload);
};

export const answerService = {
  submitDraftAnswer,
  editAndSubmitDraft,
} as const;

function isEditted(oldBody: string, newBody: string) {
  if (oldBody !== newBody) return true;
  return false;
}
