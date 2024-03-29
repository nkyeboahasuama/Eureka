import { IQuestion, ValidationStatusType } from "../core";
import { checkIfAdminCanValidateQuestion } from "../core/admin";
import { AdminRepo, AnswerRepo, QuestionRepo } from "../infras/cloud";

const addQuestion = async (payload: Pick<IQuestion, "body" | "user">) => {
  const $payload: IQuestion = {
    ...payload,
    availability: "open",
    marked: false,
    validators: [],
    markedAt: null,
    markedBy: null,
  };
  await QuestionRepo.addDoc($payload);
  return $payload;
};

const validateQuestion = async (
  adminId: string,
  questionId: string,
  status: ValidationStatusType
) => {
  if (!adminId || !questionId || !status)
    throw new Error("Failed to validate question. ");
  const [admin, question] = await Promise.all([
    AdminRepo.getDoc(adminId),
    QuestionRepo.getDoc(questionId),
  ]);
  if (!admin || !question) throw new Error("Invalid user or Question");
  checkIfAdminCanValidateQuestion(admin, question);
  const validator: Pick<IQuestion, "validators">["validators"][number] = {
    admin: adminId,
    status,
  };
  await QuestionRepo.addValidator(questionId, validator);
  // if at least two checks, send notification to admins about a new question
  const approvedLen = [...question.validators, { status }].filter(
    (val) => val.status === "approve"
  );
  if (approvedLen.length >= 2) {
  }
};

const markQuestion = async (adminId: string, questionId: string) => {
  if (!adminId || !questionId) return;
  const today = new Date().toUTCString();
  const [admin, question, canMarkQuestion] = await Promise.all([
    AdminRepo.getDoc(adminId),
    QuestionRepo.getDoc(questionId),
    QuestionRepo.getAdminCanMarkQuestion(adminId),
  ]);
  if (!canMarkQuestion) throw new Error("Unable to mark question");
  if (admin && question) {
    await QuestionRepo.editDocById(questionId, {
      marked: true,
      markedAt: today,
      markedBy: admin.id,
    });
  } else throw new Error("Invalid Question or User");
};

const getQuestions = async () => {
  const results = await QuestionRepo.getDocs();
  return results;
};

const getValidatedQuestions = async () => {
  const results = await QuestionRepo.getValidatedDocs();
  return results;
};

const getQuestionAnswerExists = async (id: string) => {
  await AnswerRepo.getQuestionAnswerExists(id);
};

export const questionService = {
  addQuestion,
  markQuestion,
  validateQuestion,
  getQuestions,
  getValidatedQuestions,
  getQuestionAnswerExists,
} as const;
