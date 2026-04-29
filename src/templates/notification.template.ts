import type { IContactPayload } from "../interfaces/contact.interface";

export const notificationTemplate = (payload: IContactPayload): string => {
  const { name, email, message } = payload;
  const safeMessage = message.replace(/\n/g, "<br />");

  return `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8" />
      <title>New Portfolio Message</title>
    </head>
    <body style="margin:0;padding:0;background:#f6f8fb;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#f6f8fb;padding:40px 20px;">
        <tr>
          <td align="center">
            <table role="presentation" width="600" cellspacing="0" cellpadding="0" style="max-width:600px;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(15,22,32,0.06);">
              <!-- Header -->
              <tr>
                <td style="background:#0f1620;padding:32px 40px;">
                  <div style="color:#5b8bff;font-size:11px;font-family:monospace;letter-spacing:2px;margin-bottom:6px;">NEW MESSAGE</div>
                  <h1 style="margin:0;color:#fafbfd;font-size:24px;font-weight:500;">You've got mail, Collins.</h1>
                </td>
              </tr>

              <!-- Content -->
              <tr>
                <td style="padding:40px;">
                  <p style="margin:0 0 24px;color:#283648;font-size:15px;line-height:1.6;">
                    Someone reached out through your portfolio. Here are the details:
                  </p>

                  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#f6f8fb;border-radius:12px;padding:24px;margin-bottom:24px;">
                    <tr>
                      <td style="padding:8px 0;">
                        <div style="color:#7689a3;font-size:11px;text-transform:uppercase;letter-spacing:1.5px;font-family:monospace;margin-bottom:4px;">From</div>
                        <div style="color:#0f1620;font-size:16px;font-weight:500;">${name}</div>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding:8px 0;border-top:1px solid #d4dde8;">
                        <div style="color:#7689a3;font-size:11px;text-transform:uppercase;letter-spacing:1.5px;font-family:monospace;margin-bottom:4px;padding-top:8px;">Email</div>
                        <div style="color:#2752e6;font-size:15px;">
                          <a href="mailto:${email}" style="color:#2752e6;text-decoration:none;">${email}</a>
                        </div>
                      </td>
                    </tr>
                  </table>

                  <div style="color:#7689a3;font-size:11px;text-transform:uppercase;letter-spacing:1.5px;font-family:monospace;margin-bottom:12px;">Message</div>
                  <div style="background:#fafbfd;border-left:3px solid #5b8bff;padding:20px 24px;border-radius:8px;color:#283648;font-size:15px;line-height:1.7;">
                    ${safeMessage}
                  </div>

                  <a href="mailto:${email}" style="display:inline-block;margin-top:32px;background:#0f1620;color:#fafbfd;padding:14px 28px;border-radius:999px;text-decoration:none;font-size:14px;font-weight:500;">
                    Reply to ${name} →
                  </a>
                </td>
              </tr>

              <!-- Footer -->
              <tr>
                <td style="background:#fafbfd;padding:24px 40px;border-top:1px solid #eaeff6;">
                  <p style="margin:0;color:#7689a3;font-size:12px;line-height:1.5;">
                    Sent automatically from your portfolio contact form.<br/>
                    ${new Date().toLocaleString("en-US", {
                      dateStyle: "full",
                      timeStyle: "short",
                    })}
                  </p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </body>
  </html>
  `;
};
