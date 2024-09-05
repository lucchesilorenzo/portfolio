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
      from: "Your Portfolio <onboarding@resend.dev>",
      to: [email],
      subject: "Message from contact form",
      react: ContactFormEmail({ name, email, message }),
    });

    if (error) throw new Error(error.message);

    return { success: true, data };
  } catch (error) {
    if (error instanceof Error) {
      return { success: false, error: error.message };
    } else {
      return {
        success: false,
        error: "Something went wrong. Please try again later.",
      };
    }
  }
}
