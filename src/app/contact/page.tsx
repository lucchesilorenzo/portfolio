import React from "react";
import ContactForm from "@/components/contact-form";

export default function Contact() {
  return (
    <section className="space-y-8">
      <h1 className="text-center text-3xl font-semibold tracking-tight lg:text-4xl">
        Contact me
      </h1>
      <p className="text-muted-foreground">
        Please contact me directly at{" "}
        <span className="underline">lorenzolucchesi3@gmail.com</span> or through
        this form.
      </p>

      <ContactForm />
    </section>
  );
}
