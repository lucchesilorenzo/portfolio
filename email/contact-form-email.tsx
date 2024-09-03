import * as React from "react";
import { type ContactFormSchema } from "@/lib/schemas";
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/components";

type ContactFormEmailProps = ContactFormSchema;

function ContactFormEmail({ name, email, message }: ContactFormEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New message from your portfolio</Preview>
      <Body>
        <Container>
          <Section>
            <Heading>
              You received the following message from the contact form
            </Heading>
            <Text>{message}</Text>
            <Hr />
            <Text>The sender&apos;s email is: {email}</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

export default ContactFormEmail;
