export interface IContactPayload {
  name: string;
  email: string;
  message: string;
}

export interface IMailOptions {
  to: string;
  subject: string;
  html: string;
  replyTo?: string;
}
