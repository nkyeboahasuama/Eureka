import { IAdmin } from "../core";
import {
  getUsernameFromEmail,
  isSuperAdmin,
  isValidAdmin,
} from "../core/admin";
import { AdminRepo } from "../infras/cloud";

const initAdmin = async (email: string) => {
  const admin = await AdminRepo.getAdminByEmail(email);
  if (!admin) {
    const username = getUsernameFromEmail(email);
    if (!isValidAdmin(email)) {
      throw new Error("User is not a valid admin");
    }
    const isSuper = isSuperAdmin(email);

    const admin: IAdmin = { email, isSuper, username: username };
    const ref = await AdminRepo.addDoc(admin);
    return { ...admin, id: ref.id };
    // first time login. Init user.
  }
  // skip
  return admin;
};

export const adminService = {
  initAdmin,
} as const;
