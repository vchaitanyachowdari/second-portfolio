import React from "react";
import { Column, Heading, Text } from "@/once-ui/components";

export default function TermsPage() {
  return (
    <Column padding="l" horizontal="center" fillWidth>
      <Heading as="h1" size="xl" marginY="l">Terms & Conditions</Heading>
      <Text as="p" marginBottom="m">
        Welcome to our website. If you continue to browse and use this website, you are agreeing to comply with and be bound by the following terms and conditions of use.
      </Text>
      <Heading as="h2" size="l" marginY="m">1. Acceptance of Terms</Heading>
      <Text as="p" marginBottom="m">
        By accessing and using this website, you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to abide by the above, please do not use this website.
      </Text>
      <Heading as="h2" size="l" marginY="m">2. Intellectual Property</Heading>
      <Text as="p" marginBottom="m">
        All content on this website, including text, graphics, logos, images, and software, is the property of [Your Company Name] and is protected by intellectual property laws.
      </Text>
      <Heading as="h2" size="l" marginY="m">3. User Conduct</Heading>
      <Text as="p" marginBottom="m">
        You agree to use the website only for lawful purposes and in a way that does not infringe the rights of, restrict or inhibit anyone else&apos;s use and enjoyment of the website.
      </Text>
      <Heading as="h2" size="l" marginY="m">4. Disclaimer of Warranties</Heading>
      <Text as="p" marginBottom="m">
        This website is provided &quot;as is&quot; without any representations or warranties, express or implied. [Your Company Name] makes no representations or warranties in relation to this website or the information and materials provided on this website.
      </Text>
      <Heading as="h2" size="l" marginY="m">5. Limitation of Liability</Heading>
      <Text as="p" marginBottom="m">
        [Your Company Name] will not be liable to you (whether under the law of contact, the law of torts or otherwise) in relation to the contents of, or use of, or otherwise in connection with, this website.
      </Text>
      <Heading as="h2" size="l" marginY="m">6. Changes to Terms</Heading>
      <Text as="p" marginBottom="m">
        We reserve the right to revise these terms and conditions at any time. Revised terms and conditions will apply to the use of this website from the date of the publication of the revised terms and conditions on this website.
      </Text>
    </Column>
  );
}
