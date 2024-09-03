import { z } from "zod";

export const formSchema = z.object({
  name: z.string().min(1, "Name is required.").max(50, "Name is too long."),
  email: z.string().min(1, "Email is required.").email("Invalid email."),
  message: z
    .string()
    .min(1, "Message is required.")
    .max(500, "Message is too long."),
});

export type ContactFormSchema = z.infer<typeof formSchema>;
