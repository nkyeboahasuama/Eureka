import { env } from "../infras/env";

export interface NotificationPayloadType {
  to: string;
  message: string;
  subject: string;
}

export type NotificationServicePayload = Omit<
  NotificationPayloadType,
  "subject"
>;

export const sendMail = async (payload: NotificationPayloadType) => {
  const body = JSON.stringify(payload);
  return await fetch(env.MAILING_SERVER_URL, {
    body,
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const NotificationService = {
  submitAnswerNotification: async (payload: NotificationServicePayload) => {
    await sendMail({
      ...payload,
      subject: "Eureka Community💡! Answer to your Question.",
    });
  },
  submitQuestionNotification: async (payload: NotificationServicePayload) => {
    await sendMail({
      ...payload,
      subject: "Eureka Community💡: New Question🙋🏻‍♀️🙋🏽",
    });
  },
};
