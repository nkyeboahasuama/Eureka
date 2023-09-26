import { AdminRepo } from "../infras/cloud";

const initAdmin = async (email: string) => {
  const admin = await AdminRepo.getAdminByEmail(email);
  if (!admin) {
    throw new Error("User not authorized");
  }
  return admin;
};

const updateAdminUserFirstTimeLoginAfterLogin = async (id: string) => {
  await AdminRepo.updateUserFirsrtTimeLogin(id);
};

export const adminService = {
  initAdmin,
  updateAdminUserFirstTimeLoginAfterLogin,
} as const;
