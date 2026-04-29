export const autoReplyTemplate = (name: string): string => {
  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="color-scheme" content="light dark" />
        <meta name="supported-color-schemes" content="light dark" />
        <title>Thanks for reaching out</title>
        <style>
          /* Dark mode overrides */
          @media (prefers-color-scheme: dark) {
            .body-bg { background:#0f1620 !important; }
            .card { background:#1a2433 !important; box-shadow:none !important; }
            .text-primary { color:#fafbfd !important; }
            .text-secondary { color:#a9b8cc !important; }
            .text-muted { color:#7689a3 !important; }
            .divider { border-top-color:#283648 !important; }
            .footer-bg { background:#0f1620 !important; border-top-color:#283648 !important; }
            .strong-text { color:#fafbfd !important; }
          }
  
          /* Outlook dark mode handling */
          [data-ogsc] .body-bg { background:#0f1620 !important; }
          [data-ogsc] .card { background:#1a2433 !important; }
          [data-ogsc] .text-primary { color:#fafbfd !important; }
          [data-ogsc] .text-secondary { color:#a9b8cc !important; }
          [data-ogsc] .text-muted { color:#7689a3 !important; }
          [data-ogsc] .divider { border-top-color:#283648 !important; }
          [data-ogsc] .footer-bg { background:#0f1620 !important; }
          [data-ogsc] .strong-text { color:#fafbfd !important; }
        </style>
      </head>
      <body class="body-bg" style="margin:0;padding:0;background:#f6f8fb;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" class="body-bg" style="background:#f6f8fb;padding:40px 20px;">
          <tr>
            <td align="center">
              <table role="presentation" width="600" cellspacing="0" cellpadding="0" class="card" style="max-width:600px;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(15,22,32,0.06);">
  
                <!-- Header (gradient stays the same in dark mode — it's already dark) -->
                <tr>
                  <td style="background:#0f1620;background-image:linear-gradient(135deg,#0f1620 0%,#1f41b8 100%);padding:48px 40px;text-align:center;">
                    <div style="display:inline-block;width:56px;height:56px;background:rgba(255,255,255,0.1);border-radius:50%;margin-bottom:20px;line-height:56px;font-size:28px;color:#fafbfd;">✓</div>
                    <h1 style="margin:0;color:#fafbfd;font-size:28px;font-weight:500;letter-spacing:-0.5px;">
                      Message received.
                    </h1>
                    <p style="margin:8px 0 0;color:#bcd2ff;font-size:15px;">
                      Thanks for reaching out, ${name}.
                    </p>
                  </td>
                </tr>
  
                <!-- Content -->
                <tr>
                  <td class="card" style="padding:40px;background:#ffffff;">
                    <p class="text-secondary" style="margin:0 0 16px;color:#283648;font-size:16px;line-height:1.7;">
                      Hi ${name},
                    </p>
                    <p class="text-secondary" style="margin:0 0 16px;color:#283648;font-size:15px;line-height:1.7;">
                      This is just a quick confirmation that your message landed safely in my inbox. I read every message personally and will get back to you within <strong class="strong-text" style="color:#0f1620;">24 hours</strong>.
                    </p>
                    <p class="text-secondary" style="margin:0 0 24px;color:#283648;font-size:15px;line-height:1.7;">
                      In the meantime, if your inquiry is urgent, feel free to reach me on WhatsApp at <strong class="strong-text" style="color:#0f1620;">+234 907 142 3222</strong>.
                    </p>
  
                    <div class="divider" style="border-top:1px solid #eaeff6;padding-top:24px;margin-top:24px;">
                      <p class="text-primary strong-text" style="margin:0 0 4px;color:#0f1620;font-size:15px;font-weight:500;">
                        ~ Collins Sanni
                      </p>
                      <p class="text-muted" style="margin:0;color:#7689a3;font-size:13px;">
                        Software Engineer
                      </p>
                    </div>
                  </td>
                </tr>
  
                <!-- Footer -->
                <tr>
                  <td class="footer-bg" style="background:#fafbfd;padding:20px 40px;border-top:1px solid #eaeff6;text-align:center;">
                    <p class="text-muted" style="margin:0;color:#7689a3;font-size:12px;">
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
