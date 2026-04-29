import { env } from "../config/env";

export const autoReplyTemplate = (name: string): string => {
  return `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8" />
      <title>Thanks for reaching out</title>
    </head>
    <body style="margin:0;padding:0;background:#f6f8fb;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#f6f8fb;padding:40px 20px;">
        <tr>
          <td align="center">
            <table role="presentation" width="600" cellspacing="0" cellpadding="0" style="max-width:600px;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(15,22,32,0.06);">
              <!-- Header with gradient -->
              <tr>
                <td style="background:linear-gradient(135deg,#0f1620 0%,#1f41b8 100%);padding:48px 40px;text-align:center;">
                  <div style="display:inline-block;width:56px;height:56px;background:rgba(255,255,255,0.1);border-radius:50%;margin-bottom:20px;line-height:56px;font-size:28px;">✓</div>
                  <h1 style="margin:0;color:#fafbfd;font-size:28px;font-weight:500;letter-spacing:-0.5px;">
                    Message received.
                  </h1>
                  <p style="margin:8px 0 0;color:rgba(255,255,255,0.7);font-size:15px;">
                    Thanks for reaching out, ${name}.
                  </p>
                </td>
              </tr>

              <!-- Content -->
              <tr>
                <td style="padding:40px;">
                  <p style="margin:0 0 16px;color:#283648;font-size:16px;line-height:1.7;">
                    Hi ${name},
                  </p>
                  <p style="margin:0 0 16px;color:#283648;font-size:15px;line-height:1.7;">
                    This is just a quick confirmation that your message landed safely in my inbox. I read every message personally and will get back to you within <strong style="color:#0f1620;">24 hours</strong>.
                  </p>
                  <p style="margin:0 0 24px;color:#283648;font-size:15px;line-height:1.7;">
                    In the meantime, if your inquiry is urgent, feel free to reach me on WhatsApp at <strong>+234 907 142 3222</strong>.
                  </p>

                  <div style="border-top:1px solid #eaeff6;padding-top:24px;margin-top:24px;">
                    <p style="margin:0 0 4px;color:#0f1620;font-size:15px;font-weight:500;">
                      ~ Collins Sanni
                    </p>
                    <p style="margin:0;color:#7689a3;font-size:13px;">
                      Software Engineer 
                    </p>
                  </div>
                </td>
              </tr>

              <!-- Footer -->
              <tr>
                <td style="background:#fafbfd;padding:20px 40px;border-top:1px solid #eaeff6;text-align:center;">
                  <p style="margin:0;color:#7689a3;font-size:12px;">
                    This is an automated confirmation. No need to reply to this email.
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
