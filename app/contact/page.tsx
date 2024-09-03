import React from "react";
import ContactForm from "@/components/contact-form";

function Contact() {
  return (
    <section className="space-y-8">
      <h1 className="text-center text-4xl font-semibold tracking-tight">
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

export default Contact;
