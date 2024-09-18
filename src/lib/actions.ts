"use server";

import ContactFormEmail from "@/emails/contact-form-email";
import { randomUUID } from "crypto";
import { Resend } from "resend";
import { contactFormSchema } from "./validations";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(contactData: unknown) {
  const validatedContactData = contactFormSchema.safeParse(contactData);

  if (!validatedContactData.success) {
    return { message: "Invalid form data." };
  }

  const { name, email, message } = validatedContactData.data;

  try {
    await resend.emails.send({
      from: "Your Portfolio <onboarding@resend.dev>",
      to: "lorenzolucchesi3@gmail.com",
      subject: "Message from contact form",
      react: ContactFormEmail({ name, email, message }),
      headers: {
        "X-Entity-Ref-ID": randomUUID(),
      },
    });
  } catch (error) {
    return {
      message: "Something went wrong. Please try again later.",
    };
  }
}
