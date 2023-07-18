import { AdminRepo } from "../infras/cloud";

const initAdmin = async (email: string) => {
  const admin = await AdminRepo.getAdminByEmail(email);
  if (!admin) {
    throw new Error("User not authorized");
  }
  return admin;
};

export const adminService = {
  initAdmin,
} as const;
