"use server";

import { sendContactEmail } from "@/lib/email/send-contact-email";

export async function contactAction(formData: FormData) {
  await sendContactEmail({
    name: formData.get("name") as string,
    subject: formData.get("subject") as string,
    message: formData.get("message") as string,
  });
}
