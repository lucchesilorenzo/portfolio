"use client";

import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { formSchema } from "@/lib/schemas";
import { Textarea } from "./ui/textarea";
import { ContactFormSchema } from "@/lib/schemas";
import { FaArrowRight } from "react-icons/fa6";
import { sendEmail } from "@/lib/actions";

function ContactForm() {
  const form = useForm<ContactFormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(data: ContactFormSchema) {
    const result = await sendEmail(data);
    console.log(data);

    if (result?.error) {
      toast.error("Something went wrong. Please try again later.");
      return;
    }

    toast.success("Message sent successfully!");
    form.reset();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="Email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea rows={6} placeholder="Message" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex items-center justify-center">
          <Button
            type="submit"
            className="rounded-sm px-6 py-2"
            disabled={form.formState.isSubmitting}
          >
            {!form.formState.isSubmitting ? (
              <>
                <span className="mr-2">Send</span>
                <FaArrowRight />
              </>
            ) : (
              "Sending..."
            )}
          </Button>
        </div>
      </form>
    </Form>
  );
}

export default ContactForm;
