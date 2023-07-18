import { AdminRepo } from "../infras/cloud";
import { NotificationPayloadType, sendMail } from "./notification.service";

export const NotifySuperAdmins = async (
  payload: Omit<NotificationPayloadType, "to">
) => {
  const superAdmins = await AdminRepo.getSuperAdmins();
  const promises = superAdmins.map((doc) => {
    return sendMail({ ...payload, to: doc.email });
  });

  await Promise.all(promises);
};
