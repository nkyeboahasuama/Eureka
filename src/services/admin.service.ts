import { IAdmin } from "../core";
import { getUsernameFromEmail, isSuperAdmin } from "../core/admin";
import { AdminRepo } from "../infras/cloud";

const initAdmin = async (email: string) => {
  const admin = await AdminRepo.getAdminByEmail(email);
  if (!admin) {
    const username = getUsernameFromEmail(email);
    const isSuper = isSuperAdmin(email);
    const admin: IAdmin = { email, isSuper, username: username };
    await AdminRepo.addDoc(admin);
    return;
    // first time login. Init user.
  }
  // skip
};

export const adminService = {
  initAdmin,
} as const;
