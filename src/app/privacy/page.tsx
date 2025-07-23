import React from "react";
import { Column, Heading, Text } from "@/once-ui/components";

export default function PrivacyPage() {
  return (
    <Column padding="l" horizontal="center" fillWidth>
      <Heading as="h1" size="xl" marginY="l">Privacy Policy</Heading>
      <Text as="p" marginBottom="m">
        Your privacy is important to us. This privacy policy explains how we collect, use, and protect your personal information.
      </Text>
      <Heading as="h2" size="l" marginY="m">Information We Collect</Heading>
      <Text as="p" marginBottom="m">
        We may collect personal information such as your name, email address, and other contact details when you interact with our website, for example, when you fill out a contact form or subscribe to our newsletter.
      </Text>
      <Heading as="h2" size="l" marginY="m">How We Use Your Information</Heading>
      <Text as="p" marginBottom="m">
        We use the information we collect to provide and improve our services, to communicate with you, and to personalize your experience on our website. We may also use your information for marketing purposes, but you can opt out at any time.
      </Text>
      <Heading as="h2" size="l" marginY="m">Information Sharing and Disclosure</Heading>
      <Text as="p" marginBottom="m">
        We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this privacy policy or as required by law.
      </Text>
      <Heading as="h2" size="l" marginY="m">Security</Heading>
      <Text as="p" marginBottom="m">
        We implement a variety of security measures to maintain the safety of your personal information when you place an order or enter, submit, or access your personal information.
      </Text>
      <Heading as="h2" size="l" marginY="m">Changes to This Privacy Policy</Heading>
      <Text as="p" marginBottom="m">
        We may update this privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page.
      </Text>
    </Column>
  );
}
