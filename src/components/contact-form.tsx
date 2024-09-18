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
import { contactFormSchema } from "@/lib/validations";
import { Textarea } from "./ui/textarea";
import { type TContactFormSchema } from "@/lib/validations";
import { FaArrowRight } from "react-icons/fa6";
import { sendEmail } from "@/lib/actions";

export default function ContactForm() {
  const form = useForm<TContactFormSchema>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(data: TContactFormSchema) {
    const result = await sendEmail(data);
    if (result) {
      toast.warning(result?.message);
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
              <FormLabel htmlFor="name">Name</FormLabel>
              <FormControl>
                <Input id="name" placeholder="Name" {...field} />
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
              <FormLabel htmlFor="email">Email</FormLabel>
              <FormControl>
                <Input id="email" placeholder="Email" {...field} />
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
              <FormLabel htmlFor="message">Message</FormLabel>
              <FormControl>
                <Textarea
                  id="message"
                  rows={6}
                  placeholder="Message"
                  {...field}
                />
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
