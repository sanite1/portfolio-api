import nodemailer from "nodemailer";
import { env } from "./env";

export const transporter = nodemailer.createTransport({
  host: env.smtp.host,
  port: env.smtp.port,
  secure: env.smtp.port === 465,
  auth: {
    user: env.smtp.user,
    pass: env.smtp.pass,
  },
});

// Verify connection on startup so we know if SMTP creds are wrong before any request comes in
export const verifyMailer = async () => {
  try {
    await transporter.verify();
    console.log("✓ Mail transporter ready");
  } catch (error) {
    console.error("✗ Mail transporter failed:", error);
  }
};
