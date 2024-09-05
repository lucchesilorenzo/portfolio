import React from "react";
import { type ContactFormSchema } from "@/lib/schemas";
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Section,
  Text,
  Tailwind,
} from "@react-email/components";

type ContactFormEmailProps = ContactFormSchema;

function ContactFormEmail({ name, email, message }: ContactFormEmailProps) {
  const formattedMessage = message.split("\n").map((line, index) => (
    <React.Fragment key={index}>
      {line}
      <br />
    </React.Fragment>
  ));

  return (
    <Html>
      <Head />
      <Tailwind>
        <Body className="bg-gray-100">
          <Container className="p-4">
            <Section className="mb-6 text-center">
              <Heading className="text-xl font-semibold text-gray-700">
                You have a new message from{" "}
                <span className="font-bold text-blue-500">{name}</span>
              </Heading>
            </Section>

            <Section className="rounded-lg bg-white p-6 shadow-lg">
              <Text className={"text-base text-gray-800"}>
                {formattedMessage}
              </Text>

              <Hr className="border-gray-200" />

              <Text className="text-sm text-gray-500">
                This email was sent from{" "}
                <span className="font-medium text-blue-500">{email}</span>
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}

export default ContactFormEmail;
