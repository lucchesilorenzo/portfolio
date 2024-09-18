import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Name is required.")
    .max(50, "Name is too long."),
  email: z.string().trim().min(1, "Email is required.").email("Invalid email."),
  message: z
    .string()
    .trim()
    .min(1, "Message is required.")
    .max(500, "Message is too long."),
});

export type TContactFormSchema = z.infer<typeof contactFormSchema>;
