import { AdminManager } from "./admin.user";
import { IAdminDocument, IQuestionDocument } from "./interfaces";

export function isValidAdmin(email: string) {
  return AdminManager.allAdmins.includes(email);
}

export function isSuperAdmin(email: string) {
  if (AdminManager.superAdmins.includes(email)) return true;
  return false;
}

export function isAdmin(email: string) {
  if (AdminManager.admins.includes(email)) return true;
  return false;
}

export function getUsernameFromEmail(email: string) {
  // validate email first
  const username = email.split("@")[0];
  return username ?? "";
}

export function checkIfAdminCanValidateQuestion(
  admin: IAdminDocument,
  question: IQuestionDocument
) {
  if (!admin.isSuper)
    throw new Error("User not privileged to validate question");
  const qtnValidtors = question.validators.map((v) => v.admin);
  if (question.validators?.length === 3)
    throw Error("Maximum validation length reached");
  if (qtnValidtors.includes(admin.id))
    throw new Error("User cannot validate same question twice");
}
