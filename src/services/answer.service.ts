import { runTransaction } from "firebase/firestore";
import {
  IAdminDocument,
  IAnswer,
  IAnswerDocument,
  IQuestionDocument,
} from "../core";
import { AdminRepo, AnswerRepo, QuestionRepo } from "../infras/cloud";
import { cloud } from "../infras/cloud/setup";

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
  const qtn = await QuestionRepo.getDoc(questionId);
  if (!qtn) throw new Error("Invalid question submitted");
  checkIfQtnCanBeAnswered(qtn);
  await AnswerRepo.addDoc(payload);
};

const editAndSubmitDraft = async (
  adminId: string,
  answerId: string,
  body: string
) => {
  await runTransaction(cloud.db, async (transaction) => {
    const answerDocRef = AnswerRepo.createDocRef(answerId);
    const adminDocRef = AdminRepo.createDocRef(adminId);

    const [adminRef, answerRef] = await Promise.all([
      transaction.get(adminDocRef),
      transaction.get(answerDocRef),
    ]);
    const admin = adminRef.data() as IAdminDocument;
    const answer = answerRef.data() as IAnswerDocument;
    if (!admin || !answer) throw new Error("Invalid User and Answer");
    let payload: any = {};
    const questionDocRef = QuestionRepo.createDocRef(answer.question);
    const questionDoc = (await (
      await transaction.get(questionDocRef)
    ).data()) as IQuestionDocument;
    if (!questionDoc) throw new Error("Invalid question doc"); // must only fire if question is not valid, but must be since answer is valid
    checkIfCanEditAndSubmitAnswer(questionDoc, answer);
    if (isEditted(answer.body, body)) {
      payload.body = body;
      payload.editedBy = adminId;
      payload.submittedBy = adminId;
    } else {
      // close answer
      payload.submittedBy = answer.admin;
    }
    payload.availability = "closed";
    transaction.update(answerDocRef, payload);
    transaction.update(questionDocRef, { availability: "closed" });
    await Promise.resolve();
  });
};

const getAnswers = async () => {
  return await AnswerRepo.getDocs();
};

export const answerService = {
  submitDraftAnswer,
  editAndSubmitDraft,
  getAnswers,
} as const;

function isEditted(oldBody: string, newBody: string) {
  if (oldBody !== newBody) return true;
  return false;
}

function checkIfCanEditAndSubmitAnswer(
  question: IQuestionDocument,
  ans: IAnswerDocument
) {
  if (question.availability !== "open")
    throw new Error("Question already closed");
  if (ans.availability !== "open")
    throw new Error("Answer has already been submitted");
}

function checkIfQtnCanBeAnswered(qtn: IQuestionDocument) {
  if (qtn.marked || qtn.availability === "closed")
    throw new Error("Question is currently closed");
}
