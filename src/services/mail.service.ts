import { transporter } from "../config/mailer";
import { env } from "../config/env";
import type { IMailOptions } from "../interfaces/contact.interface";
import { ApiError } from "../utils/apiError";

export const sendMail = async (options: IMailOptions): Promise<void> => {
  try {
    await transporter.sendMail({
      from: `"${env.senderName}" <${env.smtp.user}>`,
      to: options.to,
      subject: options.subject,
      html: options.html,
      replyTo: options.replyTo,
    });
  } catch (error) {
    console.error("Mail send error:", error);
    throw new ApiError(500, "Failed to send email. Please try again later.");
  }
};
