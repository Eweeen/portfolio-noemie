import { sendEmail } from "./send-email";

interface ContactData {
  name: string;
  subject: string;
  message: string;
}

export async function sendContactEmail({
  name,
  subject,
  message,
}: ContactData) {
  await sendEmail({
    to: process.env.MAIL_FROM_EMAIL!,
    subject,
    html: `
      <h2>Nouveau message</h2>

      <p><strong>Nom :</strong> ${name}</p>

      <p><strong>Message :</strong></p>
      <p>${message}</p>
    `,
  });
}
