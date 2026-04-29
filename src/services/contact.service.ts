import { sendMail } from "./mail.service";
import { notificationTemplate } from "../templates/notification.template";
import { autoReplyTemplate } from "../templates/autoReply.template";
import { env } from "../config/env";
import type { IContactPayload } from "../interfaces/contact.interface";
import type { ContactSubmissionResult } from "../types/contact.type";

export const submitContactService = async (
  payload: IContactPayload
): Promise<ContactSubmissionResult> => {
  const { name, email, message } = payload;

  // 1. Send notification to portfolio owner
  await sendMail({
    to: env.recipientEmail,
    subject: `New portfolio message from ${name}`,
    html: notificationTemplate({ name, email, message }),
    replyTo: email,
  });

  // 2. Send auto-reply to the sender (don't fail the request if this errors)
  try {
    await sendMail({
      to: email,
      subject: "Thanks for reaching out — message received",
      html: autoReplyTemplate(name),
    });
  } catch (error) {
    console.error("Auto-reply failed (notification still sent):", error);
  }

  return {
    submittedAt: new Date().toISOString(),
  };
};
