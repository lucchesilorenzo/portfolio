"use server";

import ContactFormEmail from "@/emails/contact-form-email";
import { Resend } from "resend";
import { type ContactFormSchema, formSchema } from "./schemas";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(data: ContactFormSchema) {
  const result = formSchema.safeParse(data);

  if (result.error) {
    return { error: result.error.format() };
  }

  try {
    const { name, email, message } = result.data;
    const { data, error } = await resend.emails.send({
      from: "Contact Form <lorenzolucchesi3@gmail.com>",
      to: [email],
      subject: "Message from contact form",
      react: ContactFormEmail({ name, email, message }),
    });

    if (error) return { error: error.message };

    return { success: true, data };
  } catch (error) {
    return { error };
  }
}
