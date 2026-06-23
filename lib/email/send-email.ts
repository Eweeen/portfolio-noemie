import { mailjet } from "@/lib/mailjet";

interface SendEmailParams {
  to: string;
  subject: string;
  html: string;
  text?: string;
}

export async function sendEmail({
  to,
  subject,
  html,
  text,
}: SendEmailParams): Promise<void> {
  await mailjet.post("send", { version: "v3.1" }).request({
    Messages: [
      {
        From: {
          Email: process.env.MAIL_FROM_EMAIL!,
          Name: process.env.MAIL_FROM_NAME!,
        },
        To: [{ Email: to }],
        Subject: subject,
        HTMLPart: html,
        TextPart: text,
      },
    ],
  });
}
