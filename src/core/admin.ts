import { IAdminDocument, IQuestionDocument } from "./interfaces";

//
export const superAdmins = [
  "sp@gmail.com",
  "anthony@gmail.com",
  "snana@gmail.com",
];
export const admins = ["ad@gmail.com", "nana@gmail.com"];
//

export function isValidAdmin(email: string) {
  const combined = superAdmins.concat(admins);
  return combined.includes(email);
}

export function isSuperAdmin(email: string) {
  if (superAdmins.includes(email)) return true;
  return false;
}

export function isAdmin(email: string) {
  if (admins.includes(email)) return true;
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
  if (qtnValidtors.includes(admin.id))
    throw new Error("User cannot validate same question twice");
}
